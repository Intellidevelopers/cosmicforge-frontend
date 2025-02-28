
 import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
 import "leaflet/dist/leaflet.css";
 import L from 'leaflet'

const Map = () => {

    const custom = L.divIcon({
        className:'custom-marker',
        html:'<div> <div class="my-div"> hfhfhh </div> <div/>',
        iconSize:[200,200]
     })

    return  <MapContainer className='leaflet-map-pane' center={[6.3333, 5.6167]} zoom={20} zoomDelta={20} dragging zoomControl scrollWheelZoom={false}   style={{width:'100%', height:'400px'}}>
    <TileLayer
     
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <p>kkdkkd</p>
    <Marker position={[6.3333, 5.6167]}
    icon={custom}
    >

      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>

   
}


export default Map