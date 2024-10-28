import Banner from "./banner/Banner";
import Card from "./card/Card";
import Services from "./Services";

const Home = () => {
  return (
    <div className="mt-6">
      <Banner></Banner>
      <Card></Card>
      <Services></Services>
    </div>
  );
};

export default Home;
