import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import {useState} from 'react'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center , zoom }) => {
    const [locationInfo , setLocationInfo] = useState(null)


    const markers=eventData.map(ev => {
        if(ev.categories[0].id===8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id : ev.id, title : ev.title})} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key : 'AIzaSyDhgsAW35QkM0PD_M7ZWcCLWOZIaZp0DbA'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info = {locationInfo} />}
            
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
