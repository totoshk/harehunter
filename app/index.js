import Dispatcher from "./data/Dispatcher";
import ActionCreator from "./data/ActionCreator";
import Store from "./data/Store";
import Hare from "./views/Hare";
import Hunter from "./views/Hunter";
import React from "react";
import ReactDOM from "react-dom";
require ('./style.scss');

const dispatcher = new Dispatcher();
const hareActions = new ActionCreator(dispatcher);
const store = new Store(dispatcher);


ReactDOM.render (
    <div>
        <Hare store={store} actions={hareActions} />
        <Hunter store={store} actions={hareActions} />
    </div>,
   document.getElementById("app")
);