import React from 'react'
import SimpleBottomNavigation from '../components/Navigation/BottomNavigation/SimpleBottomNavigation'
import FixedBottomNavigation from '../components/Navigation/BottomNavigation/FixedBottomNavigation'

const BottomNavigation = () => {
  return (
    <div style={{margin:"15px"}}>
      <SimpleBottomNavigation/>
      <FixedBottomNavigation/>
    </div>
  )
}

export default BottomNavigation
