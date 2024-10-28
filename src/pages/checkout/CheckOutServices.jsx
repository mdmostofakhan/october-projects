const CheckOutServices = ({ check }) => {
  const { title, prices } = check;
  return (
    <div>
      <h1>{title}</h1>
      <h1>{prices}</h1>
    </div>
  );
};

export default CheckOutServices;
