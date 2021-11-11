import React from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useEffect } from 'react'

const Confirm = () => {

    const getPickupCoordinates = () => {
        const pickup = ["Santa Monica"]

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1IjoianNwbGF0dCIsImEiOiJja3ZzODB0Z3IwYXB0MnZwcHpqdGE1YTN4In0.h4i1YFRVuGN0e-yZ_m_9tg",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            console.log(data.features[0].center)
        })
    }

    const getDropOffCoordinates = () => {
        const dropoff = ["Los Angeles"]

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1IjoianNwbGF0dCIsImEiOiJja3ZzODB0Z3IwYXB0MnZwcHpqdGE1YTN4In0.h4i1YFRVuGN0e-yZ_m_9tg",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            console.log("dropoff")
            console.log(data.features[0].center)
        })
    }

    useEffect(()=>{
        getPickupCoordinates()
        getDropOffCoordinates()
    }, [])

    return (
        <Wrapper>
            <Map />
            <RideContainer>
                Ride Selector
                Confirm Button
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const RideContainer = tw.div`
flex-1
`

const Wrapper = tw.div`
flex flex-col h-screen
`