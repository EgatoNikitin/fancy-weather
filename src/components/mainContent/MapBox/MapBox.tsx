import React, { FC, useState } from 'react';
import './MapBox.scss';

import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl, GeolocateControl, FullscreenControl } from "react-map-gl";


export const MapBox: FC = () => {
    const [lng, setLng] = useState(30.2049);
    const [lat, setLat] = useState(55.1904);

    return (
        <div>
            <Map
                mapboxAccessToken='pk.eyJ1IjoiZmFtY3l3ZWF0aGVyMzIyMTIzIiwiYSI6ImNsZjVwZ2p3YTBjemUzc25uOTh2eWQ1NG8ifQ.I5kFTbJRJ9kjz62uOM6mAQ'
                style={{
                    width: "400px",
                    height: "400px",
                    borderRadius: "15px",
                }}
                initialViewState={{
                    longitude: lng,
                    latitude: lat,
                    zoom: 7.0,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Marker
                    longitude={lng}
                    latitude={lat}
                />

                <NavigationControl
                    position='bottom-right'
                />
                <FullscreenControl />
                <GeolocateControl />
            </Map>
            <div className='koord'>
                <p>longitude={lng}</p>
                <p>latitude={lat}</p>
            </div>
        </div>
    );
}