import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./Component/Layout/layout";
import { Provider } from "react-redux";
import store from "./features/store";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>
);
