import React from "react";

class Navbar extends React.Component {
  render() {
    // Destructure the totalQuantity prop from the props
    const { totalQuantity } = this.props;
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex flex-column align-items-start">
         <div className="mb-0"> <a className="navbar-brand fw-bold fs-3 ">Shopping</a></div>
         <div className="mb-0 text-end"><a className="navbar-brand fw-bold fs-3 ">App</a></div>
        </div>

        <button
        
          type="button"
          className="btn btn-warning position-relative m-4 flex-grow-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            fill="currentColor"
            className="bi bi-cart2 "
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalQuantity}
          </span>
        </button>
      </nav>
    );
  }
}

export default Navbar;
