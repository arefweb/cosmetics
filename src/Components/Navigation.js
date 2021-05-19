import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

const Navigation = ({ count }) => {

  const handleCart = ()=>{
    let cartElem = document.querySelector(".navigation__cart-component");
    if (cartElem.style.display) {
      if (cartElem.style.display === "none") {
        cartElem.style.display = "block";
      } else {
        cartElem.style.display = "none";
      }
    }else{
      cartElem.style.display = "block";
    }
  }

  return (
    <section className="navigation">
      <div className="container">
        <div className="row">
          <nav className="col-md-8 navigation__nav">
            <ul>
              <li>
                <Link to="/">مراقبت پوست</Link>
              </li>
              <li>
                <Link to="/hair">مراقبت مو</Link>
              </li>
              <li>
                <Link to="/body">مراقبت بدن</Link>
              </li>
              <li>
                <Link to="/cosmetics">آرایشی</Link>
              </li>
            </ul>
          </nav>
          <div className="col-md-4 navigation__cart">
            <div className="navigation__cart-icon" onClick={handleCart}>
              {count != 0 && (
                <span className="navigation__cart-icon-count">{count}</span>
              )}
              <FaShoppingCart />
            </div>
            <div className="navigation__cart-component">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  const { count } = state;
  return { count };
}

export default connect(mapStateToProps)(Navigation)
