import React from "react";
import locationLogo from "../images/location-logo.png";


export default function Card(props) {
    return (
        <div className="card">
            <img className="card-picture" src={props.imageUrl}></img>
            <div className="card-info">
                <div className="info-location">
                    <img className="info-logo" src={locationLogo}></img>
                    <p className="info-country">{props.location}</p>
                    <a className="info-maps" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h3 className="card-title">{props.title}</h3>
                <p className="card-date">{props.startDate} — {props.endDate}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}