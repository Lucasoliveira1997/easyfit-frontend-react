import React from 'react'

import landingImg from '../../assets/images/landing.jpg'
import logoImg from '../../assets/images/logo.png'

import haltereIcon from '../../assets/images/icons/black-haltere.svg'

import './styles.css'

function Landing() {
    return (
        <div id="landing-page">
            <div id="landing-page-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="EasyFit"/>
                    <h2>Seja bem vindo!</h2>
                    <h4>Como posso te ajudar ?</h4>
                </div>

                <img src={landingImg} alt="Landing Image" className="landing-image"/>

                <div className="buttons-container">
                    <a href="/" className="workout">
                        <img src={haltereIcon} alt="Halteres"/>
                        Treinar
                    </a>
                    <a href="/" className="teach-workout">
                        <img src={haltereIcon} alt="Halteres"/>
                        Dar treinos
                    </a>
                </div>
                <div className="total-connections">
                    Total de 100 conexões já realizadas
                </div>
            </div>
        </div>
    )
}

export default Landing