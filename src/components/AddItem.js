// using class component, use this keyword
import React from "react";
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputPrice: 0,
    };
  }

  render() {
    return (
      <form className="row d-flex mb-5" onSubmit={(e) => {
        e.preventDefault();
        this.props.addItem(this.state.inputName, Number(this.state.inputPrice));

         //Clear input field values
    this.setState({
        inputName: "",
        inputPrice:"",
      });

      }}>
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="inputName"
            onChange={(e) => {
             console.log( this.setState({ inputName: e.currentTarget.value }));
            }}
             value={this.state.inputName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            name="inputPrice"
            onChange={(e) => {
              this.setState({ inputPrice:(e.currentTarget.value )});
            }}

            value={this.state.inputPrice}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mb-3 mt-4 col-sm-2 p-2"
        //   onClick={() => {
        //     this.props.addItem();
        //   }}
        >
          AddItem
        </button>
      </form>
    );
  }
}

export default AddItem;
