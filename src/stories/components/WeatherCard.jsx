import React from 'react';
import PropTypes from 'prop-types';
import '../css/WeatherCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faWind, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export const WeatherCard = ({ temperature, temperatureMeasure, updateTime, humidity, windspeed, ...props }) => {

    return (
        <div className="weatherCardContainer">
            <div className="infoButtonContainer">

                <FontAwesomeIcon icon={faInfoCircle} className="infoButton"/>               
            </div>

            <div className="tempAndTime">
                <div className="temp">
                    <div className="degree">{temperature}  </div>
                    <div className="symbol">°{temperatureMeasure}</div>
                </div>
                <div className="time"> 
                    Updated: {updateTime} 
                </div>
            </div>

            <div className="humidityAndWind">
                <div className="humidity">
                    <FontAwesomeIcon icon={faTint} className="icon"/>
                    {humidity} %
                </div>
                <div className="wind">
                    <FontAwesomeIcon icon={faWind} className="icon"/>
                    {windspeed} km/h 
                </div>
            </div>
        </div>
    );
};

WeatherCard.propTypes = {

    /** Current Temperature */
    temperature: PropTypes.number.isRequired,

    temperatureMeasure: PropTypes.string,

    updateTime: PropTypes.string,

    humidity: PropTypes.number,

    windspeed: PropTypes.number,

};

WeatherCard.defaultProps = {
    temperature: 0,
    temperatureMeasure: "C",
    updateTime: "00:00",
    humidity: 0,
    windspeed: 0,
}