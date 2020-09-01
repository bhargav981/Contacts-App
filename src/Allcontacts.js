import React from "react";
import Contact from "./Contact";

class Allcontacts extends React.Component {
  state = {
    contactInfo: this.props.info.feed.entry,
  };
  token = this.props.token;
  render() {
    let res = this.state.contactInfo.map((member) => {
      return (
        <Contact
          key={member.id.$t}
          id={member.id.$t}
          name={member.title.$t}
          email={member.gd$email ? member.gd$email[0].address : "NA"}
        />
      );
    });
    return (
      <div className='top'>
        <div className='contact-word'>
          Contacts ({this.state.contactInfo.length})
        </div>
        <div className='column-name'>
          <span className='column-name-list '>NAME</span>
          <span className='column-name-list '>EMAIL</span>
        </div>
        <div className='fixedHeightContainer'>{res}</div>
      </div>
    );
  }
}

export default Allcontacts;