import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "https://shopapi.liadev.ir/api/rest/v1/get_categories";
const imgUrl = "https://shopapi.liateam.com";

const BodyCategory = () => {
  const [loading, setLoading] = useState(true);
  const [skinCare, setSkinCare] = useState({});

  const retreiveData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
      console.log(data[2]);
      setSkinCare(data[2]);
      setLoading(false);
    }
  };

  useEffect(() => {
    retreiveData();
  }, [loading]);

  if (loading) {
    return (
      <section>
        <div className="container">
          <div className="row">
            <h3>Loading...</h3>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="category">
      <div className="container category__container">
        <div className="row category__title">
          <h1>دسته بندی</h1>
        </div>
        <div className="row category__row">
          {skinCare &&
            skinCare.children.map((product) => {
              return (
                <div key={product.id} className="col-md-6 category__col">
                  <Link to={`/products/${product.id}`}>
                    <h4 className="category__col-pname">{product.name}</h4>
                    <img
                      className="category__col-img"
                      src={`${imgUrl}${skinCare.image}`}
                      alt=""
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default BodyCategory;
