import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'


mapboxgl.accessToken = 'pk.eyJ1IjoianNwbGF0dCIsImEiOiJja3ZzODB0Z3IwYXB0MnZwcHpqdGE1YTN4In0.h4i1YFRVuGN0e-yZ_m_9tg';

export default function Home() {

  useEffect(() =>{
    console.log('hello')
  }, [])
  // const map = new mapboxgl.Map({
  //   container: 'YOUR_CONTAINER_ELEMENT_ID',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: ,
  //   zoom: ,
  //   });

  return (
    <Wrapper>
      <Map>Map</Map>
      <ActionItems>Start</ActionItems> 
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen 
`
const Map = tw.div`
  bg-red-500 flex-1
`
const ActionItems = tw.div`
  flex-1
`

