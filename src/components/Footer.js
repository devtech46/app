import React from "react";
import '../styles/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="text-center text-lg-start" >
                    <div className="backcolor">
                        <div className="container d-flex justify-content-center py-5">
                            <div className="social-media">
                                <a href='https://www.github.com/' className="social-media-icon">
                                    <div className="rounded-circle"><i className="bi bi-github"></i></div>
                                </a>
                                <a href="https://twitter.com/" className="social-media-icon">
                                    <div className="rounded-circle"><i class="bi bi-twitter"></i></div>
                                </a>
                                <a href="https://www.linkedin.com/" className="social-media-icon">
                                    <div className="rounded-circle"><i className="bi bi-linkedin"></i></div>
                                </a>
                                <a href="https://www.instagram.com/" className="social-media-icon">
                                    <div className="rounded-circle"><i className="bi bi-instagram"></i></div>
                                </a>
                            </div>
                        </div>

                        <div className="text-center text-white p-3">
                            © 2020 Copyright :
                            <span> DevTech46</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
