'use client'

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'
import styled from 'styled-components'

const laTextil = { lat: 41.3912446114636, lng: 2.172894267910162 }
const weddingHotel = { lat: 41.27062189255106, lng: 1.9618787544095255 }

export default function CustomMap({ pinCoords }) {
  return (
    <div style={{ height: 'auto', width: '500px' }}>
      {/* <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map
          mapId={'548b4a0df8fbf708260ac479'}
          defaultZoom={15}
          defaultCenter={pinCoords}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
        >
          <AdvancedMarker title="La Textil oiiiiii" position={pinCoords}>
            <StyledPin title="La Textil" background={'#0f9d58'} borderColor={'#006425'} glyphColor={'#60d98f'} />
          </AdvancedMarker>
          <InfoWindow position={pinCoords} pixelOffset={[-0, -30]} headerDisabled={true}>
            <h4>La Textil</h4>
            <a
              href="https://maps.app.goo.gl/QtXgj5qGubFGyxjL9"
              target="_blank"
              style={{ letterSpacing: 0, color: 'blue', textDecoration: 'underline' }}
            >
              Open in google maps
            </a>
          </InfoWindow>
        </Map>
      </APIProvider> */}
    </div>
  )
}
