(this.webpackJsonptestlogin=this.webpackJsonptestlogin||[]).push([[0],{21:function(e,t,n){e.exports=n(45)},26:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(18),i=n.n(c),l=(n(26),n(2)),s=n(3),r=n(5),u=n(4),d=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).id=e.props.id,e.state={display:"none"},e.handleClick=function(t){t.preventDefault(),e.setState({display:"none"===e.state.display?"inline":"none"})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"card-layout",onClick:this.handleClick},o.a.createElement("span",{className:"card1"},this.props.name),o.a.createElement("span",{className:"card2"},this.props.email))}}]),n}(o.a.Component),m=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={contactInfo:e.props.info.feed.entry},e.token=e.props.token,e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.contactInfo.map((function(e){return o.a.createElement(d,{key:e.id.$t,id:e.id.$t,name:e.title.$t,email:e.gd$email?e.gd$email[0].address:"NA"})}));return o.a.createElement("div",{className:"top"},o.a.createElement("div",{className:"contact-word"},"Contacts (",this.state.contactInfo.length,")"),o.a.createElement("div",{className:"column-name"},o.a.createElement("span",{className:"column-name-list "},"NAME"),o.a.createElement("span",{className:"column-name-list "},"EMAIL")),o.a.createElement("div",{className:"fixedHeightContainer"},e))}}]),n}(o.a.Component),g=n(7),h=n.n(g),p=n(19),f=n(6),v=n(8),b=n(20),k=n.n(b),y="252669349047-sslescsn58s9ojlifuov3o0303v934qr.apps.googleusercontent.com",j=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isLogined:!1,accessToken:""},a.login=a.login.bind(Object(f.a)(a)),a.handleLoginFailure=a.handleLoginFailure.bind(Object(f.a)(a)),a.logout=a.logout.bind(Object(f.a)(a)),a.handleLogoutFailure=a.handleLogoutFailure.bind(Object(f.a)(a)),a}return Object(s.a)(n,[{key:"login",value:function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.accessToken){e.next=7;break}return e.next=3,k.a.get("https://www.google.com/m8/feeds/contacts/default/full?alt=json&max-results=300",{headers:{Authorization:"Bearer ".concat(t.accessToken)}});case 3:n=e.sent,a=n.data,console.log(a),this.props.onSubmit(!0,a,t.accessToken);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(e){this.setState((function(e){return{isLogined:!1,accessToken:""}}))}},{key:"handleLoginFailure",value:function(e){alert("Failed to log in")}},{key:"handleLogoutFailure",value:function(e){alert("Failed to log out")}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.isLogined?o.a.createElement(v.GoogleLogout,{clientId:y,buttonText:"Logout",onLogoutSuccess:this.logout,onFailure:this.handleLogoutFailure}):o.a.createElement(v.GoogleLogin,{clientId:y,buttonText:"Login",onSuccess:this.login,onFailure:this.handleLoginFailure,cookiePolicy:"single_host_origin",responseType:"code,token"}))}}]),n}(a.Component),L=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isLogin:!1,contacts:null,token:null},e.handleLogin=function(t,n,a){e.setState({isLogin:t,contacts:n,token:a})},e}return Object(s.a)(n,[{key:"render",value:function(){return this.state.isLogin?o.a.createElement("div",null,o.a.createElement(m,{info:this.state.contacts,token:this.state.token})):o.a.createElement(j,{onSubmit:this.handleLogin})}}]),n}(o.a.Component);i.a.render(o.a.createElement(L,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.da07cb82.chunk.js.map