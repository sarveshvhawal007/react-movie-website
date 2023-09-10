import React from 'react'
import '../../css/App.css'
import {Button} from "../Button";
import '../../css/Button.css'
import YouTube from 'react-youtube';


export default function Products() {
    return (
        <div className='float_container'>
            <div className='float_child_txt'>
                {/*<YouTube className='services_video' videoId='6tCxnHCqqxg'></YouTube>*/}
                <div className='services_text'>
                    <h1>
                        Monsters Inc (2001)
                    </h1>
                    <br/>
                    <p>In order to power the city, monsters have to scare children so
                        that they scream. However, the children are toxic to the monsters,
                        and after a child gets through, two monsters realize things may not
                        be what they think.</p>
                </div>
            </div>
            <div className='float_child_img'>
                <div className='services_img_wrapper'>
                    <img className='services_img' src='/images/img-1.jpg'/>
                </div>
            </div>
        {/*<h1 className='services'></h1>*/}
        </div>
    )
}