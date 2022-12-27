import React, {useState} from 'react'
import { focalLengthGivenPinholeDiameterInMMForOptimalResolution,calculateAperture, } from '../utils'
const OptimalFocalSimple = () => {
    const [focalLength, setFocalLength] = useState<number>()
    const [pinholeDiameter, setPinholeDiameter] = useState<number>()
    const [aperture, setAperture] = useState<number>()
    function handlePinholeDiameter(pinholeDiameter:number){
        setPinholeDiameter(pinholeDiameter)
        let focalLength:number = focalLengthGivenPinholeDiameterInMMForOptimalResolution(pinholeDiameter)
        setFocalLength(focalLength)
        setAperture(calculateAperture(focalLength, pinholeDiameter))
        console.log("aperture:", aperture)
        
    }

  return (
    <>
        <h2>Optimal Focal Length - Simple </h2>
        <p>This gives you the optimal focal length for a given pinhole diameter.</p>
        <label>Enter your pinhole diameter in mm: </label>
        <input type="number" value={pinholeDiameter} onChange={(e) => handlePinholeDiameter(parseFloat(e.target.value))}/>
        <h3>Recommended focal length</h3>
        <p>Focal length: {focalLength ? focalLength : 0 }</p>
        <p>Aperture f-number: {aperture ? aperture : 0}</p>
    </>

  )
}

export default OptimalFocalSimple