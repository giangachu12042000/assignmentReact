import React, { useEffect } from "react";

import SideBar from "../../components/SideBar";
import Product from "../Products";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div className="grid-cols-2 col-span-2">
            <Product />
          </div>
          <div className="grid-cols-1">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
