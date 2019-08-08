import React from "react";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico categories" />
            Categories
          </h2>
        </section>
      </div>
    );
  }
}

export default Categories;
