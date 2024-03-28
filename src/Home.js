import React from 'react';
import Header from "./Header";
import TrustedBrand from "./TrustedBrand";
import ProductDetails from "./ProductDetails";
import CustomerExperience from "./CustomerExperience";
import Services from "./Services";
import YearsOfTrust from "./YearsOfTrust";

import { Link } from "react-router-dom";

const Home = () => {
  return (
      <>
      <div className='app'>
      <Link to="/">
      <Header />
      <ProductDetails />
      <CustomerExperience />
      <Services/>
      <YearsOfTrust/>
      <TrustedBrand />
      </Link>
      </div>
      </>
  )
};

export default Home