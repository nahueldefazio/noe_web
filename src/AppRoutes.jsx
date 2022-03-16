import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./routes/Inicio/Inicio";
import Servicios from "./routes/Servicios/Servicios";
import Asesoria from "./routes/Servicios/Asesoria";
import Auditoria from "./routes/Servicios/Auditoria";
import Consultor_digital from "./routes/Servicios/Consultor_digital";
import Podcast from "./routes/Servicios/Podcast";
import Gestion_rrss from "./routes/Servicios/Gestion_rrss";

function AppRoutes(props) {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path={'/'} exact component={Inicio}/>
                    <Route path={'/servicios'} exact component={Servicios}/>
                    <Route path={'/asesoria'} exact component={Asesoria}/>
                    <Route path={'/auditoria'} exact component={Auditoria}/>
                    <Route path={'/consultor_digital'} exact component={Consultor_digital}/>
                    <Route path={'/podcast'} exact component={Podcast}/>
                    <Route path={'/gestion_rrss'} exact component={Gestion_rrss}/>

                </Switch>
            </Router>
        </>
    );
}

export default AppRoutes;
