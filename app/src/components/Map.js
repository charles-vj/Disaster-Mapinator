import GoogleMapReact from 'google-map-react'

const Map = ({center,zoom}) => {
    return (
        <div>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDehQ1wQ-6YtIcGhEmGIR0xzv33wBKzyo8'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            ></GoogleMapReact>
        </div>
    )
}
Map.defaultProps = {
    center : {
        lat : 10.527642,
        lng : 76.214432
    },
    zoom : 6
}
export default Map
