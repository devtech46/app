import React from 'react'
import Card from './Card'

import image1 from '../../assets/apps_1.png'
import image2 from '../../assets/music.jpeg'
import image3 from '../../assets/website.jpeg'
import image5 from '../../assets/unity.jpg'
import image6 from '../../assets/work1.jpg'
import image7 from '../../assets/shopping.jpg'

import logo1 from '../../assets/playstore.png'
import logo2 from '../../assets/spotify.jpg'
import logo3 from '../../assets/logo-react.png'
import logo4 from '../../assets/unity-logo.png'
import logo5 from '../../assets/huella.png'
import logo6 from '../../assets/credit.png'

const cards = [
    {
        id: 1,
        title:"Applications",
        image: image1,
        url: 'https://play.google.com',
        logo: logo1,
        fecha: "2d",
    },
    {
        id: 2,
        title:"Podcast",
        image: image2,
        url: 'https://spotify.com/',
        logo: logo2,
        fecha: "3d",
    },
    {
        id: 3,
        title:"Websites",
        image: image3,
        url: 'https://reactjs.org',
        logo: logo3,
        fecha: "5d",
    },
    {
        id: 5,
        title:"Games",
        image: image5,
        url: 'https://unity.com/',
        logo: logo4,
        fecha: "3d",
    },
    {
        id: 6,
        title:"Security",
        image: image6,
        url: 'https://play.google.com/store/apps/details?id=com.sp.protector.free&hl=es_VE&gl=US',
        logo: logo5,
        fecha: "5d",
    },
    {
        id: 7,
        title:"Commerce",
        image: image7,
        url: 'https://mercadopago.com.ar',
        logo: logo6,
        fecha: "1 week",
    },
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center  align-items-center" >
            <div className="row">
                {
                    cards.map(card=>(
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url} logo={card.logo} fecha={card.fecha}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
