import React from "react";
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ObservacionContainer from "./views/ObservacionContainer";
import ObservacionForm from './components/ObservacionForm';
import ObservacionInfo from './components/ObservacionInfo';
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const defaultHistory = createBrowserHistory();

function App(props) {
  return (
    <BrowserRouter history={props.history || defaultHistory}>
      <Route exact path="/observaciones" component={ObservacionContainer} />
      <Route exact path="/observaciones/create" component={ObservacionForm} />
      <Route exact path="/observaciones/view/:id" component={ObservacionInfo} />
    </BrowserRouter>
  );
}

export default App;
