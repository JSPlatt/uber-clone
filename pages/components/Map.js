import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoianNwbGF0dCIsImEiOiJja3ZzODB0Z3IwYXB0MnZwcHpqdGE1YTN4In0.h4i1YFRVuGN0e-yZ_m_9tg';

const Map = (props) => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3,
        });

        if(props.pickupCoordinates){
          addToMap(map, props.pickupCoordinates)
        }
      }, [props.pickupCoordinates, props.dropOffCoordinates]);

    const addToMap = (map, coordinates) => {
      const marker1 = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map)
    }


    return (
        <Wrapper id="map"></Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1
`
