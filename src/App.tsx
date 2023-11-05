import { useState } from 'react'
import './App.css'
import FormAddress from './FormAddress'

function App() {
  const [address, setAddress] = useState<string>("")

  const handleChangeAddress = (address: string) => {
    setAddress(address)
  }

  const handleShowButtonClick = () => {
    console.log(address)
  }

  return (
    <>
      <FormAddress address={address} onAddressChange={handleChangeAddress}/>
      <button onClick={handleShowButtonClick}>Afficher dans la console</button>
    </>
  )
}

export default App
