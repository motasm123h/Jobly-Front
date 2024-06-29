import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import store from './store/ReduxStore';
import { Provider } from 'react-redux';
import { DarkModeContextProvider } from './context/darkModeContext';
import { PusherProvider } from './context/PusherProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PusherProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </PusherProvider>
    </Provider>
  </React.StrictMode>
);
