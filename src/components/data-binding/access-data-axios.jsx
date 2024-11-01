import { useEffect, useState } from "react";
import axios from "axios";

export function AccessDataAxios() {
    const [product,setProduct]=useState({title:"",price:0,rating:{rate:0,ratings:0,reviews:0},offers:[],image:""})


    function LoadData(){
        axios.get('product.json')
        .then(response=>{
             setProduct(response.data);
        })
        .catch(reason=>{
            console.log(reason);
        })
    }

    useEffect(()=>{
        LoadData();
    },[])

  return (
    <>
      <div className="container">
        <div className="h3 text-center mb-4">Access Data From AXios</div>
        <div className="row">
          <div className="col-lg-4">
            <div className="img-bx">
              <img src={product.image} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont-bx">
                <h4>{product.title}</h4>
                <span className="badge bg-success rounded">{product.price} <span className="bi bi-star-fill"></span></span>
                <div>
                    <span className="badge bg-warning rounded">{product.rating.rate} </span> rating is {product.rating.ratings} and review is {product.rating.reviews}
                </div>
                <ul>
                    {
                        product.offers.map(offer=> <li key={offer}>{offer}</li>)
                    }
                    
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
