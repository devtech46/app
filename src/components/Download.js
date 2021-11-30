import React from 'react'
import '../styles/download.css'
import location from '../assets/download.png'


function Download() {
    return (
        <section className="contenedor" id="servicio">
            <h2 className="subtitulo">Downloads</h2>
            <div className="contenedor-servicio">
                <img src={location} alt="" />
                <div className="checklist-servicio">
                    <div className="service">
                        <h3 className="n-service"><span className="number">1</span>Program</h3>
                        <a href="/">download</a>
                    </div>
                    <div className="service">
                        <h3 className="n-service"><span className="number">2</span>Program</h3>
                        <a href="/">download</a>
                    </div>
                    <div className="service">
                        <h3 className="n-service"><span className="number">3</span>Program</h3>
                        <a href="/">download</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Download
