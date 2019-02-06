import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass'; // fonts Awesome location
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';


const Footer = (props) => {
    return (
        <div>
            <footer className="bck_b_dark">
                <div className="container">
                    <div className="logo">
                        Waves
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;