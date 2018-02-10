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
        <label> You have {this.props.maxChars - this.state.value} letters left</label>
      </div>
    );
  }
}

export default TwitterMessage;
