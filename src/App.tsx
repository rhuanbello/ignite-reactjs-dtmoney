import { Fragment } from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"

export function App() {
  return (
    <Fragment>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </Fragment>
  );
}

