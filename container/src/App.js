import React from "react";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";
// import { logo192 } from "../public/logo192.png";

const {
  REACT_APP_SUBAPP1_HOST: subapp1,
  REACT_APP_SUBAPP2_HOST: subapp2,
  REACT_APP_SUBAPP3_HOST: subapp3
} = process.env;

const SubApp2 = ({ history }) => (
  <MicroFrontend history={history} host={subapp2} name="subapp2" />
);

const SubApp1 = ({ history }) => (
  <MicroFrontend history={history} host={subapp1} name="subapp1" />
);

const SubApp3 = ({ history }) => (
  <MicroFrontend history={history} host={subapp3} name="subapp3" />
);

const divStyle = {
  fontSize: '32px',
  paddingBottom: '50px'
};

var abc = "http://localhost:3000/microfrontends.png";


const Home = () => (
  <>
    <div className="App-header">
      <div style={divStyle}><center>Welcome!</center></div>
      <center><img src={`${abc}`} alt="logo" /></center>
    </div>
  </>
);

const App = props => {
  return (
    <BrowserRouter>
      <div style={{ padding: 25, display: "flex" }}>
        <div style={{ padding: "0px 15px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#282c34",
              fontSize: 20
            }}
            to="/home"
          >
            Home
          </NavLink>
        </div>
        <div style={{ padding: "0px 15px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#282c34",
              fontSize: 20
            }}
            to="/subapp1"
          >
            Service - A
          </NavLink>
        </div>
        <div style={{ padding: "0px 15px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#282c34",
              fontSize: 20
            }}
            to="/subapp2"
          >
            Service - B
          </NavLink>
        </div>
        <div style={{ padding: "0px 15px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#282c34",
              fontSize: 20
            }}
            to="/subapp3"
          >
            Service - C
          </NavLink>
        </div>
      </div>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/subapp1" render={() => <SubApp1 />} />
        <Route path="/subapp2" render={() => <SubApp2 />} />
        <Route path="/subapp3" render={() => <SubApp3 />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
