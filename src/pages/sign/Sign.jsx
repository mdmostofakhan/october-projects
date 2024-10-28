import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Sign = () => {
  const { createUser } = useContext(AuthContext);

  const handleSign = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const userLogged = result.user;
        console.log(userLogged);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-10">
          <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm flex-shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-center text-2xl font-bold"> Sign up </h1>
            <form onSubmit={handleSign}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
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
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div> */}
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign" />
              </div>
            </form>
            <div>
              <p className="text-center my-4">
                New an account{" "}
                <Link to="/login" className="text-orange-400 font-bold">
                  login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
