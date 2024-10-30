import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  const [openLoad, setOpenLoad] = useState(6);

  const handleLoad = () => {
    setOpenLoad(openLoad + openLoad);
  };

  const load = services.slice(0, openLoad);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div>
      <div className="text-center my-8">
        <h1 className="text-3xl text-red-500 font-bold">Services</h1>
        <h2 className="text-5xl font-bold ">Our Service Area</h2>
        <p className="mt-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {load.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <div className="my-10 border flex justify-center mx-auto bg-blue-600 hover:bg-red-500 border-orange-400 w-48 h-16 rounded-lg">
        <button
          onClick={() => handleLoad()}
          className="text-2xl font-bold text-white"
        >
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
