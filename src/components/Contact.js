import React from 'react'
import '../styles/contact.css'

function Contact() {
    return (
      <div className="contact">
        <div className="col-lg-8 mx-auto p-3 py-md-5">
            <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
                <a href="https://gmail.com" target="__blank" className="d-flex align-items-center text-dark text-decoration-none">
                    <h4 className="fs-4">Starter template</h4>
                </a>
            </header>
            <main>
                <hr className="col-3 col-md-2 mb-5" />
                <div className="row g-5">
                    <div className="col-md-6">
                        <h2>Starter projects <i class="bi bi-envelope"></i></h2><br/>
                        <p>developtech46@gmail.com</p>
                    </div>
                    <div className="col-md-6">
                        <h2>Guides</h2>
                        <p>Read more detailed instructions and documentation</p>
                        <ul className="icon-list">
                            <li><a href="https://devtech46.github.io/app">Quick start guide</a></li>
                            <li><a href="https://devtech46.github.io/app">Disign guide</a></li>
                            <li><a href="https://devtech46.github.io/app">Platforms guide</a></li>
                            <li><a href="https://devtech46.github.io/app">Contributing</a></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
      </div>
    )
}

export default Contact
