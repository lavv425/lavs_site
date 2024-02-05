import React, { useEffect, useState } from 'react';
import Title from '../helpers/Title';
import TruckLoader from '../Loader/TruckLoader';
import './WhereWeAre.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 10px;
grid-row-gap: 0px;
padding:10px;
`;

const StyledWorkingHours = styled.div`
padding:20px;
margin-bottom:40px;
position:relative;
top:0;

h3 {
color: #333;
margin-bottom: 10px;
}

p {
color: #666;
margin-bottom: 8px;
}

ul {
list-style: none;
padding: 0;
margin: 0;
}

li {
margin-bottom: 4px;
}
`;

export default function WhereWeAre() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        const iframe = document.querySelector('iframe');

        iframe.addEventListener('load', handleLoad);

        return () => {
            iframe.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <>
            {loading && <TruckLoader />}
            <Title title="Dove trovarci" />
            <div style={{ "overflow": "hidden", }} id='content'>
                <div className='page-header'>
                    <h2>Dove trovarci</h2>
                </div>
                <StyledContainer className='page-container'>
                    <div className='side-expl'>
                    <StyledWorkingHours className='working-hours'>
                            <h3>Orari di Apertura</h3>
                            <ul>
                                <li>
                                    <strong>Lunedì - Venerdì:</strong> 9:00 - 18:00
                                </li>
                                <li>
                                    <strong>Sabato:</strong> 10:00 - 15:00
                                </li>
                                <li>
                                    <strong>Domenica:</strong> Chiuso
                                </li>
                            </ul>
                        </StyledWorkingHours>
                        <p>Vieni a trovarci in <Link to="https://maps.app.goo.gl/RsvoT4u4h1zP7kXZ6" target='_blank'>Via Pietro Mascagni 12, Lainate</Link></p>
                        <p>Per altre informazioni non esitate a contattarci compilando l'apposito form alla pagina contattaci <Link className="nav-link" id="contact-us" to="/contact-us">Contattaci</Link></p>
                    </div>
                    <div className='map'>
                        <iframe
                            title='Dove Trovarci'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.4996270205775!2d9.027803592873632!3d45.5603904383619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478694a73063a3ab%3A0xf5611b22186c8fc2!2sVia%20Pietro%20Mascagni%2C%2012%2C%2020045%20Lainate%20MI!5e0!3m2!1sit!2sit!4v1707149180528!5m2!1sit!2sit"
                            width="100%"
                            height="550"
                            style={{ border: '0' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </StyledContainer>
            </div>

        </>
    );
}
