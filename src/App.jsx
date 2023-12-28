import { NavBar, Footer } from "./components";
import { HomePage, ShopProductsPage,LoginPage, RegisterPage, AllCategoryPage, AllBrandPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/allcategory' element={<AllCategoryPage />} />
            <Route path='/allbrand' element={<AllBrandPage />} />
            <Route path='/products' element={<ShopProductsPage />} />
            {/* <Route path='/products/:id' element={<ProductDetalisPage />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
