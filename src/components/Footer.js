import React from "react";

export default function Footer(props) {
  return (
    // <><span class="badge bg-primary">₹{props.totalAmount}</span>

    <div className="row fixed-bottom">
      <button className="btn btn-danger col-2" onClick={()=>{props.resetQuantity()}}>Reset</button>
      <div className="col-8 bg-secondary pt-2 text-light  d-flex justify-content-center "><h5>Total Amount:   </h5> <span className="badge bg-dark ms-3 mb-2">₹{props.totalAmount}</span></div>
      <button className="btn btn-primary col-2">Pay Now</button>

    </div>
  );
}
