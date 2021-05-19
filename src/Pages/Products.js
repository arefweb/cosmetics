import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import Pagination from "./Pagination";

const url = "https://shopapi.liadev.ir/api/rest/v1/get_product?categories=";
const imgUrl = "https://shopapi.liateam.com";

const Products = ({ dispatch }) => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  let { pid } = useParams();

  const retreiveProducts = async () => {
    const response = await fetch(`${url}${pid}`);
    const data = await response.json();
    if (data) {
      setProductList(data.list);
      setLoading(false);
    }
  };

  useEffect(() => {
    retreiveProducts();
  }, [loading]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (productList.length <= 6) {
    return (
      <section className="products">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>محصولات</h1>
            </div>
          </div>
          <div className="row">
            {productList &&
              productList.map((product) => {
                return (
                  <div key={product.id} className="col-md-3 products__col">
                    <article className="products__card">
                      <img
                        className="products__card-img"
                        src={`${imgUrl}${product.small_pic}`}
                        alt={product.title}
                      />
                      <h4 className="products__card-title">{product.title}</h4>
                      <h5 className="products__card-vol">{product.volume}</h5>
                      <div className="products__card-footer">
                        <div className="products__card-footer-btn">
                          <button
                            onClick={() =>
                              dispatch({
                                type: "ADD_TO_CART",
                                payload: {
                                  id: product.id,
                                  title: product.title,
                                  price: product.price.price,
                                  image: product.small_pic,
                                  itemCount: 1,
                                },
                              })
                            }
                          >
                            <FaCartPlus />
                          </button>
                        </div>
                        <h5 className="products__card-footer-price">
                          {product.price.price}
                          <span className="products__card-footer-price-toman">
                            تومان
                          </span>
                        </h5>
                      </div>
                    </article>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }

  const handlePagination = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  if (productList.length > 6) {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = productList.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

    return (
      <section className="products">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>محصولات</h1>
            </div>
          </div>
          <div className="row">
            {currentProducts.map((product) => {
              return (
                <div key={product.id} className="col-md-3 products__col">
                  <article className="products__card">
                    <img
                      className="products__card-img"
                      src={`${imgUrl}${product.small_pic}`}
                      alt={product.title}
                    />
                    <h4 className="products__card-title">{product.title}</h4>
                    <h5 className="products__card-vol">{product.volume}</h5>
                    <div className="products__card-footer">
                      <div className="products__card-footer-btn">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: {
                                id: product.id,
                                title: product.title,
                                price: product.price.price,
                                image: product.small_pic,
                                itemCount: 1,
                              },
                            })
                          }
                        >
                          <FaCartPlus />
                        </button>
                      </div>
                      <h5 className="products__card-footer-price">
                        {product.price.price}
                        <span className="products__card-footer-price-toman">
                          تومان
                        </span>
                      </h5>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
          <div className="pagination">
            <Pagination
            itemsPerPage={itemsPerPage}
            itemsLength={productList.length}
            handlePagination={handlePagination}
          />
          </div>

        </div>
      </section>
    );
  }
};

export default connect()(Products);
