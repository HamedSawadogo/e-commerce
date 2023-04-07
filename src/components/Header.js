import React from "react";
import { Carousel } from "react-responsive-carousel";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-container"></div>
      <Carousel showThumbs={false} showStatus={false} autoPlay>
        <a href="#">
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            />
          </div>
        </a>
        <a href="#">
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1779&q=80"
            />
          </div>
        </a>
        <a href="#">
          <div>
            <img
              alt=""
              src="https://ma.jumia.is/cms/000_2023/10000-T1-Ramadan2023/0-UNDs/6-TV&Hitech/SX.jpg"
            />
          </div>
        </a>

        <a href="#">
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            />
          </div>
        </a>
      </Carousel>
      <div className="right-container"></div>
    </div>
  );
};

export default Header;
