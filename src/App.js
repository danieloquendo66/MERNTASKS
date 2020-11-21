import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, NuevaCuenta, Proyectos } from "./components";

import { ProyectoState } from "./context/proyectos";
import { TareaState } from "./context/tasks/";


function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <Route exact path="/proyectos" component={Proyectos} />
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
