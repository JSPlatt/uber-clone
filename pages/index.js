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
              Ride
            </ActionButton>
            <ActionButton>
              Wheels
            </ActionButton>
            <ActionButton>
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

`

const ActionButton = tw.div`

`