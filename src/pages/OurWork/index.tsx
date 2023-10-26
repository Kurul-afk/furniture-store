import React from "react";
import "./style.css";
import CustomCard from "../../components/CustomCard";
import CustomPagination from "../../components/CustomPagination";

const OurWork = () => {
  return (
    <div className="ourWork">
      <div className="ourWork__container">
        <ul className="ourWork__list">
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </ul>
        <CustomPagination />
      </div>
    </div>
  );
};

export default OurWork;
