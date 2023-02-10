import React from 'react';
import './bootstrap.min.css'
import world from './images/world.png'
import './myNav.css'

export default function MyNav(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
              <div style={{display: "flex",justifyContent: "center"}}>
                &nbsp;&nbsp;&nbsp;
                <img src={world} ></img>
                <h1 style={{color:'white',display: 'flex',justifyContent: "center", alignItems: "center"}}>&nbsp;&nbsp;This is Joao's Travel Journal - Using React </h1>
            </div>
        </nav>
    )
}