import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0])

    const getPickupCoordinates = (pickup) => {

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

    const getDropOffCoordinates = (dropoff) => {
        
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
        getPickupCoordinates(pickup)
        getDropOffCoordinates(dropoff)
    }, [pickup, dropoff])

    

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href='/search'>
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </ButtonContainer>
            <Map 
                pickupCoordinates = {pickupCoordinates}
                dropoffCoordinates= {dropoffCoordinates}
            />
                
            <RideContainer>
               <RideSelector 
                    pickupCoordinates = {pickupCoordinates}
                    dropoffCoordinates= {dropoffCoordinates}
               />
               
               <ConfirmButtonContainer>
                   <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
               </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const ButtonContainer = tw.div``

const BackButton = tw.img`
h-full object-contain
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const Wrapper = tw.div`
flex h-screen flex-col
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 rounded-full text-center py-4 text-xl
`