import React from 'react'
import '../../css/App.css'
import {Button} from "../Button";
import '../../css/Button.css'
import YouTube from 'react-youtube';


export default function Service() {
    return (
        <div className='float_container'>
            <div className='float_child_txt'>
                {/*<YouTube className='services_video' videoId='6tCxnHCqqxg'></YouTube>*/}
                <div className='services_text'>
                    <h1>
                        Shrek (2001)
                    </h1>
                    <br/>
                    <p>A mean lord exiles fairytale creatures to the swamp of a grumpy ogre,
                        who must go on a quest and rescue a princess for the lord in order to
                        get his land back.</p>
                </div>
            </div>
            <div className='float_child_img'>
                <div className='services_img_wrapper'>
                    <img className='services_img' src='/images/img-2.jpg'/>
                </div>
            </div>
            {/*<h1 className='services'></h1>*/}
        </div>
    )
}