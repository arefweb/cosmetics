import React from 'react';
import logo from "../assets/images/logo-white.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row footer__top">
          <div className="col-md-2">
            <p>مرکز پشتیبانی بازاریابان</p>
          </div>
          <div className="col-md-2">
            <p dir="ltr">021 88 88 88 88</p>
          </div>
          <div className="col-md-3">
            <p dir="ltr">sellersupport@liateam.com</p>
          </div>
          <div className="col-md-5">
            <h3>
              Lia Vitual Office <img src={logo} alt="logo" className="logo" />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer
