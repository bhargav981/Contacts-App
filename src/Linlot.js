import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from "axios";
//import GoogleContacts from 'react-google-contacts';


const CLIENT_ID = '252669349047-sslescsn58s9ojlifuov3o0303v934qr.apps.googleusercontent.com';
const responseCallback = (response) => {
    //console.log(response);
  }

class Linlot extends Component {
   
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,

      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }
 

  async login (response) {

    if(response.accessToken){
        //console.log(response.accessToken)
      /*this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));*/
      const info = await axios.get(
        "https://www.google.com/m8/feeds/contacts/default/full?alt=json&max-results=300",
        {
          headers: {
            Authorization: `Bearer ${response.accessToken}`,
          },
        }
      );
      const data = info.data;
      console.log(data);
      this.props.onSubmit(true, data,response.accessToken);
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
      
    </div>
    )
  }
}

export default Linlot;