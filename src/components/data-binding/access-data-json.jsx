import { useEffect, useState } from "react";

export function AccessDataJson() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    rating: { rate: 0, ratings: 0, reviews: 0 },
    offers: [],
    image: "",
  });
  function LoadData() {
    var http = new XMLHttpRequest();
    http.open("get", "product.json", true);
    http.send();
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        setProduct(JSON.parse(http.responseText));
      }
    };
  }
  useEffect(() => {
    LoadData();
  }, []);

  return (
    <>
      <div className="text-center h4 mb-3">Accesss the data From Json</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="dt-img">
              <img width={"100%"} src={product.image} alt="" />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="dt-cont">
              <span className="badge bg-success rounded">
                {product.rating.rate} <span className="bi bi-star-fill"></span>
              </span>
              <br />
              <span className="h4 mt-3 d-block">
                {product.rating.ratings.toLocaleString()} rating &{" "}
                {product.rating.reviews.toLocaleString()} reviews
              </span>
              <h4>
                {product.price.toLocaleString("en-in", {
                  style: "currency",
                  currency: "INR",
                })}
              </h4>
              <p>{product.offers}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
