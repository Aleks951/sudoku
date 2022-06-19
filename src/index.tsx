import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
