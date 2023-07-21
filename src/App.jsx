import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import{FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import{faSearch,faEnvelope,faPhone,faGift} from'@fortawesome/free-solid-svg-icons';
import "./App.css";
import React from 'react';
import Form from "./form";
import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./home";
import Shimmer from "./shimmereffect";
import Figma from "./figma";
import Screen from "./screenone";
import ContactCar from "./contactcarspage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Route component={Screen} path="/" exact></Route>
    <Route component={ContactCar} path="/contactcar"></Route>
    {/* <Route component={Form} path="/" exact></Route> */}
    {/* <Route component={Home} path="/home"></Route>
    <Route component={Shimmer} path="/shimmer"></Route>
    <Route component={Figma} path="/figma"></Route> */}
    </BrowserRouter>
    </>
  );
}

export default App;
