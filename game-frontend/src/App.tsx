import React from 'react'
import RenderComponent from './component/RenderComponent'
import InputComponent from './component/InputComponent'
import { useSelector } from 'react-redux'
import WelcomeComponent from './component/WelcomeComponent'

function App() {
  const playerName = useSelector((state: any) => state.player.value)
  return (
    <div>
      {
        playerName === "" ?
          <WelcomeComponent />
          :
          <div>
            <RenderComponent />
            <InputComponent />
          </div>
      }

    </div>
  )
}

export default App