import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

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
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
