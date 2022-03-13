
import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LociationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import  Rating from "@material-ui/lab";

import useStyle from './style'

const Map = ({setCoordinates, setBounds, coordinates}) =>{
    const classes = useStyle()
    const isMobile = useMediaQuery('(min-width:600px)')

     
    return(
      <div className={classes.mapContainer}>
            <GoogleMapReact bootstrapURLKeys={{key:'AIzaSyBgVTZMdRYCHG-wkdkhIKngLqPoIpWdnUc'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={50, 50 , 50 , 50}
            options={''}
            onChange={(e)=> {
              setCoordinates({lat: e.centerlat, lng: e.center.lng})
              setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
            }}
            onChildClick={''}
            >
                
            
            </GoogleMapReact>
      </div>
    );
}

export default Map;