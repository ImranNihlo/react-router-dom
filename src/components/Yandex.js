import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';


function Yandex(props) {
    const mapData = {
        center: [43.324675, 45.692376],
        zoom: 11,
    };

    const coordinates = [
        [43.324675, 45.692376],
    ];
    return (

        <div>
            <YMaps>
                <Map width="620px" height="500px" defaultState={mapData}>
                    {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                </Map>
            </YMaps>
        </div>
    );
}

export default Yandex;