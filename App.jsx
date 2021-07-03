import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Group213 from "./components/Group213";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|310_90)">
          <Group213
            group86Props={group213Data.group86Props}
            frame27Props={group213Data.frame27Props}
            carboncloseProps={group213Data.carboncloseProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d5732641e2212c658d387b/img/vector-432@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d5732641e2212c658d387b/img/group-85-47@2x.svg",
    whiteProps: whiteData,
};

const frame27Data = {
    unselected: "HOME",
    unselected2: "ABOUT US",
    unselected3: "PROJECTS",
    unselected4: "VIDEOS",
    unselected5: "INSIGHTS",
    unselected6: "BLOGS",
    unselected7: "FAQ’S",
    unselected8: "CONTACT US",
};

const carboncloseData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d5732641e2212c658d387b/img/vector-300@2x.svg",
};

const group213Data = {
    group86Props: group86Data,
    frame27Props: frame27Data,
    carboncloseProps: carboncloseData,
};

