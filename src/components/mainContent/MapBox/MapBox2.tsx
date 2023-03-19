import React, { FC, useState } from 'react';
import './MapBox.scss';

import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl, GeolocateControl, FullscreenControl } from "react-map-gl";


export const MapBox2: FC = () => {
    const [viewport, setViewport] = useState({
        longitude: 30.2049,
        latitude: 55.1904,
        zoom: 7,
        // width: "50px",
        // height: "50px",
    });


    return (
        <div
            style={{
                width: "400px",
                height: "400px",
            }}>
            <Map
                {...viewport}
                // onMove={evt => setViewport(evt.viewport)}
                mapboxAccessToken='pk.eyJ1IjoiZmFtY3l3ZWF0aGVyMzIyMTIzIiwiYSI6ImNsZjVwZ2p3YTBjemUzc25uOTh2eWQ1NG8ifQ.I5kFTbJRJ9kjz62uOM6mAQ'
                mapStyle="mapbox://styles/mapbox/streets-v9"

            >
                <Marker
                    longitude={viewport.longitude}
                    latitude={viewport.latitude}
                />

                <NavigationControl
                    position='bottom-right'
                />
                <FullscreenControl />
                <GeolocateControl />
            </Map>
            <div className='koord'>
                <p>longitude={viewport.longitude}</p>
                <p>latitude={viewport.latitude}</p>
            </div>
        </div >
    );
}