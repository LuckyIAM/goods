import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
//import Main from "./Main"
import store from "./components/store/store"
import { Provider } from "react-redux";

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.querySelector("#root")
);
