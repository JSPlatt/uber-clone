import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useEffect, useState } from 'react'

const Confirm = () => {

    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = () => {
        const pickup = ["Long Beach"]

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1IjoianNwbGF0dCIsImEiOiJja3ZzODB0Z3IwYXB0MnZwcHpqdGE1YTN4In0.h4i1YFRVuGN0e-yZ_m_9tg",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center)
        })
    }

    const getDropOffCoordinates = () => {
        const dropoff = ["Santa Monica"]

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1IjoianNwbGF0dCIsImEiOiJja3ZzODB0Z3IwYXB0MnZwcHpqdGE1YTN4In0.h4i1YFRVuGN0e-yZ_m_9tg",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center)
        })
    }

    useEffect(()=>{
        getPickupCoordinates()
        getDropOffCoordinates()
    }, [])

    

    return (
        <Wrapper>
            <Map 
                pickupCoordinates = {pickupCoordinates}
                dropoffCoordinates= {dropoffCoordinates}
            />
                
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