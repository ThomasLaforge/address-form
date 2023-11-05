import { useCallback, useEffect, useState } from "react"
import {useDebounce} from "@uidotdev/usehooks"

export default function FormAddress() {
    const [possibilities, setPossibilities] = useState<string[]>([])
    const [address, setAddress] = useState<string>("")
    const addressForRequest = useDebounce(address, 1000)

    useEffect(() => {
        const updatePossibilites = async () => {
            if (addressForRequest.length > 3) {
                const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${addressForRequest}`)
                const data = await response.json()
                const addresses = data.features.map(
                    (feature: any) => feature.properties.label
                )
                if(addresses.length === 1 && addresses[0] === address) {
                    console.log('adresse actuelle')
                    setPossibilities([])
                }
                else {
                    setPossibilities(addresses)
                }
            } else {
                setPossibilities([])
            }
        }
        console.log('thomas')
        updatePossibilites()
    }, [addressForRequest])

    const handleFormChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setAddress(event.target.value)
        },
        []
    )

    const handleListClick = useCallback(
        (position: number) => {
            if (position >= 0) {
                setAddress(possibilities[position])
                setPossibilities([])
            }
        },
        [possibilities]
    )


    return (
        <div className="form-address">
            <input 
                type="text" 
                placeholder="Saisir votre adresse"
                value={address}
                onChange={handleFormChange}
            />
            {possibilities.length > 0 && (
                <div className="possibilities">
                    {possibilities.map((possibility, position) => (
                        <div 
                            key={position}
                            className="possibility" 
                            onClick={() => handleListClick(position)}
                        >
                            {possibility}
                        </div>
                    ))}
                </div>
            )}
        </div>
        )
}