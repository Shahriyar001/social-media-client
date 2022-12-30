import React from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';

const InfoCard = () => {
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <label htmlFor="info-modal" className="btn"><UilPen width="2rem"
                    height="1.2rem" /></label>

            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>in Relationship</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Multan</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Zainkeepscode inst</span>
            </div>

            <button className="button logout-button">Logout</button>

        </div>
    );
};

export default InfoCard;