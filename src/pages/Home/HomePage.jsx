import { Slider, HomeCategory, CardProductsContainer } from "../../components";

const HomePage = () => {
  return (
    <div className='font' style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer />
    </div>
  );
};

export default HomePage;
