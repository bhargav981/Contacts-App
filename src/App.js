import React from "react";
import Allcontacts from "./Allcontacts";

import Linlot from "./Linlot";

class App extends React.Component {
  state = {
    isLogin: false,
    contacts: null,
    token: null,
  };
  handleLogin = (isLogin, contacts, token) => {
    this.setState({ isLogin: isLogin, contacts: contacts, token: token });
  };
  render() {
    // return <Login onSubmit={this.handleLogin} />;
    return this.state.isLogin ? (
      <div>
        <Allcontacts info={this.state.contacts} token={this.state.token} />
      </div>
    ) : (
      <Linlot onSubmit={this.handleLogin} />
    );
  }
}

export default App;
