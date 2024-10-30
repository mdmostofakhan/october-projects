import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const CheckOut = () => {
  const [checks, setChecks] = useState(null);
  const [booking, setBooking] = useState(null);
  const { user } = useContext(AuthContext);
  const { _id } = useParams();

  useEffect(() => {
    fetch("../../../public/services.json")
      .then((res) => res.json())
      .then((data) => {
        setChecks(data.find((siData) => siData?._id === _id));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty array to run only on mount

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const price = checks?.price;
    const img = checks?.img;
    const title = checks?.title;
    const order = {
      customerName: name,
      email,
      date,
      price,
      img,
      services: title,
      services_id: _id,
    };
    console.log(order);

    fetch("../../../public/services.json", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        const bookingData = data.find((book) => book?._id === _id);
        setBooking(bookingData); // Set booking state

        if (bookingData) {
          alert("Service booking successfully");
        }
        console.log(bookingData);
      })
      .catch((error) => console.error("Error fetching data:", error));

    console.log(booking);
  };

  return (
    <div className="mt-10 text-center text-xl font-medium">
      <h1>Book Now: {checks?.title || "Loading..."}</h1>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ""}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              defaultValue={user?.email || ""}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={checks?.price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
