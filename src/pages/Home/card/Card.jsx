import images from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const Card = () => {
  return (
    <div className="hero my-10 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className=" w-3/4  rounded-lg shadow-2xl" />
          <img
            className="absolute w-1/2 top-1/2 right-10  rounded-lg shadow-2xl border-t-8 border-l-8 border-white"
            src={images}
            alt=""
          />
        </div>
        <div className="lg:w-1/2 p-5 space-y-4">
          <h1 className="text-red-600 text-3xl font-bold">About us</h1>
          <h1 className="text-4xl font-bold w-[300px]">
            We are qualified & of experience in this field
          </h1>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which look even slightly believable
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which look even slightly believable
          </p>
          <button className="btn btn-warning w-[150px] transform bg-yellow-300">
            Get More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
