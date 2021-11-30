import React from 'react'

function Card({ title, imageSource, url, logo , fecha}) {
    return (
        <div className="card h-100 ">
            <div className="overflow">
                <img src={imageSource} alt="" className="card-img-top" />
                <div className="lista">
                    <ul className="d-flex list-unstyled mt-auto">
                        <li className="me-auto">
                            <a href={url} target="__blank"><img src={logo} alt="logos" width={32} height={32} className="rounded-circle border border-white" /></a>
                        </li>
                        <div className="text-title">
                            <small>{title}</small>
                        </div>
                        <li className="d-flex align-items-center">
                            <small>{fecha}</small>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default Card
