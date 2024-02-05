import React, { useState, useEffect } from 'react';
import './ExRoutes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faEuroSign, faTruckMoving, faTruckField } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Title from '../helpers/Title';
import { Link } from 'react-router-dom';
import TruckLoader from '../Loader/TruckLoader';


const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: auto;

  th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    background-color: #445963;  /* Colore di sfondo più scuro */
    color: #fff; 
  }

  td {
    padding: 8px;
    text-align: left;
  }

  tbody tr td:hover {
    background-color: #d5d5d5;
  }
  tbody tr:nth-child(3n) {
    border-bottom: 2px solid #000;  /* Aggiunge una linea di divisione ogni 3 righe */
  }

`;


const StyledContainer = styled.div`
padding: 20px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 0px;
    padding:10px;
    transition: opacity 0.5s ease-in-out;
`;

export default function ExRoutes() {
    const [loading, setLoadingRoutes] = useState(true);

    useEffect(() => {
        setLoadingRoutes(false);
    }, []);

    return (
        <>
            {loading ? (<TruckLoader />) :
                (
                    <>
                        <Title title="Tratte esempio" />
                        <div style={{ "overflow": "hidden" }}>
                            <div className='page-header'>
                                <h2>Esempi di tratta</h2>
                            </div>
                            <StyledContainer className='page-container'>
                                <div className='explanation-container'>
                                    <p>Qui di fianco alcune tratte a titolo di esempio, per dare un dettaglio su alcune tratte.</p>
                                    <p>Il prezzo rimane comunque indicativo e varia in base alle necessità</p>
                                    <p>Per preventivi personalizzati non esitate a contattarci compilando l'apposito form alla pagina contattaci <Link className="nav-link" id="contact-us" to="/contact-us">Contattaci</Link></p>
                                </div>
                                <div className='ex-routes-container'>
                                    <div className='table-container'>
                                        <StyledTable>
                                            <thead>
                                                <tr>
                                                    <th>Tratta</th>
                                                    <th>Mezzo</th>
                                                    <th>Costo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td rowSpan="3">Milano - Roma</td>
                                                    <td>Furgone piccolo (esempio: partner) <FontAwesomeIcon icon={faTruckField} className="icon" /></td>
                                                    <td> 50 <FontAwesomeIcon icon={faEuroSign} className="icon" /></td>
                                                </tr>
                                                <tr>
                                                    <td>IVECO Daily <FontAwesomeIcon icon={faTruck} className="icon" /></td>
                                                    <td> 100 <FontAwesomeIcon icon={faEuroSign} className="icon" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Telonato <FontAwesomeIcon icon={faTruckMoving} className="icon" /></td>
                                                    <td> 200 <FontAwesomeIcon icon={faEuroSign} className="icon" /></td>
                                                </tr>
                                                {/** riga 2 */}
                                                <tr>
                                                    <td rowSpan="3">Milano - Napoli</td>
                                                    <td>Furgone piccolo (esempio: partner) <FontAwesomeIcon icon={faTruckField} className="icon" /></td>
                                                    <td> 150 <FontAwesomeIcon icon={faEuroSign} className="icon" /></td>
                                                </tr>
                                                <tr>
                                                    <td>IVECO Daily <FontAwesomeIcon icon={faTruck} className="icon" /></td>
                                                    <td> 200 <FontAwesomeIcon icon={faEuroSign} className="icon" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Telonato <FontAwesomeIcon icon={faTruckMoving} className="icon" /></td>
                                                    <td> 400 <FontAwesomeIcon icon={faEuroSign} className="icon" /></td>
                                                </tr>
                                                {/** riga 3 */}
                                                <tr>
                                                    <td rowSpan="3">Milano - Monte Carlo</td>
                                                    <td>Furgone piccolo (esempio: partner) <FontAwesomeIcon icon={faTruckField} className="icon" /></td>
                                                    <td> 250 <FontAwesomeIcon icon={faEuroSign} className="icon" /></td>
                                                </tr>
                                                <tr>
                                                    <td>IVECO Daily <FontAwesomeIcon icon={faTruck} className="icon" /></td>
                                                    <td> 300 <FontAwesomeIcon icon={faEuroSign} className="icon" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Telonato <FontAwesomeIcon icon={faTruckMoving} className="icon" /></td>
                                                    <td> 500 <FontAwesomeIcon icon={faEuroSign} className="icon" /></td>
                                                </tr>
                                            </tbody>
                                        </StyledTable>
                                    </div>
                                </div>
                            </StyledContainer>
                        </div>
                    </>)}
        </>
    );
};