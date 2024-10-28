import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const [checks, setChecks] = useState(null);
  const { _id } = useParams();

  //   console.log(_id); // Log the `id` from useParams to verify it's working

  useEffect(() => {
    fetch("../../../public/services.json")
      .then((res) => res.json()) // Closing parenthesis added here
      .then((data) => {
        setChecks(data.find((siData) => siData?._id === _id));
      }) // Use `setChecks` to match `checks` state name
      .catch((error) => console.error("Error fetching data:", error)); // Optional: add error handling
  }, [checks]);

  console.log(checks); // Log fetched data to check it loaded properly

  return (
    <div className="mt-10">
      <h1>Book Now: {checks?.title}</h1>
    </div>
  );
};

export default CheckOut;
