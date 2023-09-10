import React from 'react'
import CardItem from "./CardItem";
import '../css/Cards.css'


function Cards() {
    return(
        <div className='cards'>
            <h1>List of Movies</h1><br/>
            <div className="cards_containere">
                <div className="card_wrapper">
                    <ul className="cards_items">
                        <CardItem
                        src='./images/monster.jpg'
                        text='Monster Inc (2001)'
                        label='Animation'
                        path='/products'/>
                        <CardItem
                            src='./images/shrek.jpg'
                            text='Shrek (2001)'
                            label='Animation'
                            path='/service'/>
                        <CardItem
                            src='./images/rat.jpg'
                            text='Ratatouille'
                            label='Adventure'
                            path='/service'/>
                        <CardItem
                            src='./images/cars.jpg'
                            text='Cars'
                            label='Adventure'
                            path='/service'/>
                    </ul>
                    <ul className="cards_items">
                        <CardItem
                            src='./images/monster.jpg'
                            text='Monster Inc (2001)'
                            label='Animation'
                            path='/products'/>
                        <CardItem
                            src='./images/shrek.jpg'
                            text='Shrek (2001)'
                            label='Animation'
                            path='/service'/>
                        <CardItem
                            src='./images/rat.jpg'
                            text='Ratatouille'
                            label='Adventure'
                            path='/service'/>
                        <CardItem
                            src='./images/cars.jpg'
                            text='Cars'
                            label='Adventure'
                            path='/service'/>
                    </ul>
                    <ul className="cards_items">
                        <CardItem
                            src='./images/monster.jpg'
                            text='Monster Inc (2001)'
                            label='Animation'
                            path='/products'/>
                        <CardItem
                            src='./images/shrek.jpg'
                            text='Shrek (2001)'
                            label='Animation'
                            path='/service'/>
                        <CardItem
                            src='./images/rat.jpg'
                            text='Ratatouille'
                            label='Adventure'
                            path='/service'/>
                        <CardItem
                            src='./images/cars.jpg'
                            text='Cars'
                            label='Adventure'
                            path='/service'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;