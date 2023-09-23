import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { StateProvider } from "./components/context/StateProvider";
import { initialState } from "./components/context/initialState";
import reducer from "./components/context/reducer";

import './index.css';

ReactDOM.render(
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
, document.getElementById("root"));
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   ) 
