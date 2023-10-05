import React, { useState } from 'react'
import SeamlessBusiness from './COMPONENTS/SeamLessBusineesToolSection/SeamlessBusiness'
import NavBar from './COMPONENTS/NavBar/NavBar'
import KonnaAgenda from './COMPONENTS/KonnaAgenda/KonnaAgenda'
import GetStarted from './COMPONENTS/GetStarted/GetStarted'
import MultiplePayment from './COMPONENTS/MultiplePayment/MultiplePayment'
import GetItNow from './COMPONENTS/GetItNow/GetItNow'
const App = () => {
  const [isOnMobile, setIsOnMobile] = useState(true)
  return (
    <div>
      <NavBar isOnMobile={isOnMobile} />
      <KonnaAgenda />
      <GetStarted />
      <MultiplePayment />
      <GetItNow />
    </div>
  )
}

export default App
