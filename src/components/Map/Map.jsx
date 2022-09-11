import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

// import mapStyles from '../../mapStyles';
import useStyles from './styles';

const Map = () => {
    const matches = useMediaQuery('(min-width:600px)'); //AIzaSyBjJqWPnsdSEnFRNNeTHDlXqdn-HCXg1TA
    const classes = useStyles();
    const cords = {lat:0,lng:0};
  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,language: 'en'}}
        defaultCenter={cords}
        center={cords}
        defaultZoom={14}
        margin={[50,50,50,50]}
        // onChange={''}
        // onChildClick={''}
        ></GoogleMapReact>
        
    </div>
  )
}

export default Map