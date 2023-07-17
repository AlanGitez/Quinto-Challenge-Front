import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';





export default function Navbar(){


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light mt-0">
                <a class="navbar-brand" href="/">Challenge Quinto-Impacto</a>
               
                <button class="navbar-toggler" type="button" 
                data-toggle="collapse"
                 data-target="#navbarNavAltMarkup" 
                 aria-controls="navbarNavAltMarkup" 
                 aria-expanded="false" 
                 aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-item nav-link" to="/users">Users</Link>
                        <Link className="nav-item nav-link" to="/courses">Courses</Link>
                    </div>
                </div>
            </nav>
    </>
    );
}