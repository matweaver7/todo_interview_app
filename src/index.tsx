import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "@pages/App";
import 'bootstrap/dist/css/bootstrap.min.css';

const template = (
    <App/>
);

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(template);
