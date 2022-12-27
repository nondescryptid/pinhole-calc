import React, {useState} from 'react'
import { calculatePinholeDiameterGivenFocalLengthForOptimalResolution,calculateAperture } from '../utils'
const OptimalPinholeSimple = () => {
    const [focalLength, setFocalLength] = useState<number>()
    const [pinholeDiameter, setPinholeDiameter] = useState<number>()
    const [aperture, setAperture] = useState<number>()
    function handleFocalLength(focalLengthInMM:number){
        setFocalLength(focalLengthInMM)
        let pinhole: number = calculatePinholeDiameterGivenFocalLengthForOptimalResolution(focalLengthInMM)
        setPinholeDiameter(pinhole)
        setAperture(calculateAperture(focalLengthInMM,pinhole))
    }

  return (
    <>
        <h2>Optimal Pinhole Diameter - Simple </h2>
        <p>This gives you the optimal pinhole diameter for a given focal length.</p>
        {/* input: focal length */}
        <label>Enter your focal length in mm: </label>
        <input type="number" value={focalLength} onChange={(e) => handleFocalLength(parseFloat(e.target.value))}/>
        <h3>Recommended diameter</h3>
        <p>Pinhole diameter: {pinholeDiameter ? pinholeDiameter : 0 }</p>
        <p>Aperture f-number: {aperture ? aperture : 0}</p>
    </>

  )
}

export default OptimalPinholeSimple