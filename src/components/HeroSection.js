import React from 'react';
import '../css/App.css'
import {Button} from "./Button";
import '../css/HeroSection.css'

function HeroSection(){
    return(
        <div className='hero-container'>
            <h1>Sarvesh</h1>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>

            </div>
        </div>
    )
}

export default HeroSection