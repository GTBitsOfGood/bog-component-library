import React from 'react';
import PropTypes from 'prop-types';
import '../css/WeatherCard.css';
import raindrop from '../assets/raindrop.png';
import info from '../assets/info.jpg';

export const WeatherCard = ({ temperature, updateTime, humidity, windspeed, ...props }) => {

    return (
        <div className="weatherCardContainer">
            <div className="infoButton">
                <img src={info} alt="" width="70px" height="70px"/>                    
            </div>
            <div className="tempAndTime">

                <div className="temp">
                    <div className="degree">{temperature}</div>
                    <div className="symbol">°C</div>
                </div>
                <div className="time"> 
                    Updated: {updateTime} 
                </div>
            </div>
            <div className="humidityAndWind">
                <div className="humidity">

                    <div className="icon">
                        <img src={raindrop} alt="" width="35px" height="50px"/>
                    </div>
                    
                    {humidity} %
                </div>
                <div className="wind">

                    <div className="icon">
                        <img src={raindrop} alt="" width="35px" height="50px"/>
                    </div>
                    {windspeed} km/h 
                </div>
            </div>
        </div>
    );
};

WeatherCard.propTypes = {

    /** Current Temperature */
    temperature: PropTypes.number.isRequired,

    updateTime: PropTypes.string,

    humidity: PropTypes.number,

    windspeed: PropTypes.number,

};

WeatherCard.defaultProps = {
    temperature: 0,
    updateTime: "00:00",
    humidity: 0,
    windspeed: 0,
}