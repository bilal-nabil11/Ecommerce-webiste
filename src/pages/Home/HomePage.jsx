import {
  Slider,
  HomeCategory,
  CardProductsContainer,
  DiscountSection,
  BrandFeatured,
} from "../../components";

const HomePage = () => {
  return (
    <div className='font' style={{ minHeight: "670px", paddingBottom: '1rem' }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer title='الاكثر مبيعا' btntitle='المزيد' pathText='/products' />
      <DiscountSection />
      <CardProductsContainer title='احدث الازياء' btntitle='المزيد' pathText='/products' />
      <BrandFeatured title='اشهر الماركات' btntitle="المزيد" />
    </div>
  );
};

export default HomePage;
