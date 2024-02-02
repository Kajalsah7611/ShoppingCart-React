import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-sm-4">
        <h4>
          {props.product.name}
          <span className="badge bg-secondary ms-2">
            ₹{props.product.price}
          </span>
        </h4>
      </div>

      <div className="col-sm">
        <div
          className="btn-group"
          lang=""
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>

          <button type="button" className="btn btn-secondary">
            {props.product.quantity}
          </button>

          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="col-sm">
        {" "}
        <b>Total:</b>₹{props.product.quantity * props.product.price}
      </div>

      <div className="col-sm">
        <button
          className="btn btn-dark "
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
