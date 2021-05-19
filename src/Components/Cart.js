import React from "react";
import { connect } from "react-redux";

const imgUrl = "https://shopapi.liateam.com";

const Cart = ({ cartItem, total, count, dispatch }) => {

  if(count === 0){
    return(
       <section className="cart">
         <div className="cart__total">
           <h4>سبد خرید خالی می باشد</h4>
         </div>
       </section>
    )
  }
  return (
    <section className="cart">
      {cartItem &&
        cartItem.map((item) => {
          return (
            <div key={item.id} className="cart__item">
              <figure className="cart__item-image">
                <img src={`${imgUrl}${item.image}`} alt={item.title} />
              </figure>
              <div className="cart__item-info">
                <div className="cart__item-info-txt">
                  <p>{item.title}</p>
                  <p>{item.price} تومان</p>
                </div>

                <div className="cart__item-info-btn">
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREMENT", payload: item.id })
                    }
                  >
                    +
                  </button>
                  <span>{item.itemCount}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREMENT", payload: item.id })
                    }
                  >
                    -
                  </button>
                </div>

                <button
                  className="cart__item-info-close"
                  onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
                >
                  {" "}
                  &times;
                </button>
              </div>
            </div>
          );
        })}
      <div className="cart__total">
        <span className="cart__total-txt">جمع کل :</span>
        <span className="cart__total-num">{total} تومان</span>
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  const { cartItem, total, count } = state;
  return { cartItem, total, count };
}

export default connect(mapStateToProps)(Cart);
