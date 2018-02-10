import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
