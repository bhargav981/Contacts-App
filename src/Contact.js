import React from "react";
class Contact extends React.Component {
  id = this.props.id;
  state = { display: "none" };
  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      display: this.state.display === "none" ? "inline" : "none",
    });
  };

  render() {
    return (
      <div className='card-layout' onClick={this.handleClick}>
        <span className='card1'>
          {this.props.name}
        </span>
        <span className='card2'>{this.props.email}</span>
      </div>
    );
  }
}

export default Contact;