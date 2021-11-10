import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import { useEffect } from 'react'
import Map from './components/Map'

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
          {/* Header  */}
          <Header>
            <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
            <Profile>
              <Name>JP</Name>
              <UserImage
                src="https://avatars.githubusercontent.com/u/74726047?v=4"
              />
            </Profile>
          </Header>
          <ActionButtons>
            
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
              Ride
            </ActionButton>
            
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
              Wheels
            </ActionButton>
            
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
              Reserve
            </ActionButton>
          
          </ActionButtons>

          {/* ActionButtons */}
          {/* InputButton */}
      
      </ActionItems> 
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col h-screen 
`
const ActionItems = tw.div`
flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center
`
const UberLogo = tw.img`
h-28
`
const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px
`

const ActionButtons = tw.div`
flex 
`

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg
`
const ActionButtonImage = tw.img`
h-3/5
`