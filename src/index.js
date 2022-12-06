import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Layout from "./Layout";
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Signin from './pages/Signin';
import Home from './components/Home/Home';
import Start from './pages/Start';
import Questions from './pages/Questions';
import { Provider } from "react-redux";
import store from "./store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<App />} >
              <Route path="/" index element={<Home />} />
              <Route path="/start" element={<Start />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/register" index element={<Register />} />
              <Route path="/signin" index element={<Signin />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
