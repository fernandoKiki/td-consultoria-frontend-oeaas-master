import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderObservacion = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountObservacion = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};


