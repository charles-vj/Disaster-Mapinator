import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ center , zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key : 'AIzaSyDhgsAW35QkM0PD_M7ZWcCLWOZIaZp0DbA'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
            
        </div>
    )
}
Map.defaultProps = {
    center : {
        lat : 10.5639,
        lng : 76.0769
    },
    zoom : 6
}
export default Map
