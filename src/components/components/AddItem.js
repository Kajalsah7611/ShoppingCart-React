// using ClassName component

class AddItem extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <div ClassName="mb-3">
            <label htmlFor="exampleInputEmail1" ClassName="Form-label">
              Email address
            </label>
            <input
              type="email"
              ClassName="Form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" ClassName="Form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div ClassName="mb-3">
            <label htmlFor="exampleInputPassword1" ClassName="Form-label">
              Password
            </label>
            <input
              type="password"
              ClassName="Form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div ClassName="mb-3 Form-check">
            <input
              type="checkbox"
              ClassName="Form-check-input"
              id="exampleCheck1"
            />
            <label ClassName="Form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" ClassName="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    );
  }
}

export default AddItem;
