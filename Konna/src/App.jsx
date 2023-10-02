import React,{useState} from 'react'
import SeamlessBusiness from './COMPONENTS/SeamLessBusineesToolSection/SeamlessBusiness'
import NavBar from './COMPONENTS/NavBar/NavBar'
import KonnaAgenda from './COMPONENTS/KonnaAgenda/KonnaAgenda'
import GetStarted from './COMPONENTS/GetStarted/GetStarted'
const App = () => {
const [isOnMobile, setIsOnMobile] = useState(true)
  return (
    <div>
      <NavBar isOnMobile={isOnMobile} />
       <KonnaAgenda/>
        <GetStarted/>
    </div>
  )
}

export default App
