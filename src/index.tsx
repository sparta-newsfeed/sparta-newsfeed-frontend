import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "router/Router";
import styled from "@emotion/styled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Router />);
