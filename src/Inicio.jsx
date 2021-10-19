import React from "react";
import "./inicio.css"
import {Route, Switch, Link } from "react-router-dom";
import Odontologos from "./Odontologos";
import Pacientes from "./Pacientes";
import Turnos from "./Turno";
import { Button } from 'primereact/button';


const Index = () => {
    function handleLogout() {
        localStorage.removeItem("jwt")
        window.location.reload() 
    }
    return (
        <>
                <div className="container">
                    <Button className="p-button-raised p-button-rounded">
                        <Link to="/odontologos" className="botonOdontologos">Odontologos</Link>
                    </Button>
                    <Button className="p-button-raised p-button-rounded">
                        <Link to="/pacientes" className="botonPacientes">
                            Pacientes
                        </Link>
                    </Button>
                    <Button className="p-button-raised p-button-rounded">
                        <Link to="/turnos" className="botonTurnos">
                            Turnos
                        </Link>
                    </Button>
                </div>
                <Switch>
                    <Route path="/odontologos"><Odontologos /></Route>
                    <Route path="/pacientes"><Pacientes /></Route>
                    <Route path="/turnos"><Turnos /></Route>
                </Switch>
            <Button onClick={handleLogout} label="logout" style={{position: "fixed", bottom: "5vh", right: "5vw"}}/>
        </>
    )
}
export default Index; 