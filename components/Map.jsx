'use client'

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'
import styled from 'styled-components'

const StyledPin = styled(Pin)`
  ::before {
    content: 'TEST';
  }
`

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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5986.426761201096!2d2.16775515595104!3d41.39117217129941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3791b6168ed%3A0xccdc2cc0ad2626ca!2sla%20textil%20collective%20%2F%20303%20audiophile%20bar!5e0!3m2!1sen!2ses!4v1749059566683!5m2!1sen!2ses"
        width="600px"
        height="450"
        style={{ border: '0px', borderRadius: '2px' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
