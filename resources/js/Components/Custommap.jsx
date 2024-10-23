import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    height: "400px",
    width: "800px"
};

// Remplacez ces coordonnées par celles de votre cabinet
const center = {
    lat: 33.545237, // Latitude de votre cabinet
    lng: -7.571425   // Longitude de votre cabinet
};

const MyMapComponent = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyCImzTLgxa3YHA5nFaSVpRKlprIqK9vdwA">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15} // Ajustez le niveau de zoom selon vos besoins
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MyMapComponent;
