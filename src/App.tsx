import { useState } from 'react'
import './App.css'
import FormAddress from './FormAddress'

function App() {
  const [address, setAddress] = useState<string>("")

  const handleChangeAddress = (address: string) => {
    setAddress(address)
  }

  return (
    <FormAddress address={address} onAddressChange={handleChangeAddress}/>
  )
}

export default App
