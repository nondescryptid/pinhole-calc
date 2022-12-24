import React, {useState} from 'react'

const OptimalPinhole = () => {
    const [focalLength, setFocalLength] = useState<number>()
    const [pinholeDiameter, setPinholeDiameter] = useState<number>()
    const [aperture, setAperture] = useState<number>()
    function calculateDiameterGivenFocalLength(focalLengthInMM:number){
        let num:number = (2*Math.sqrt(focalLengthInMM*0.00055))
        return parseFloat(num.toFixed(2))
    }
    function calculateAperture(focalLengthInMM:number, pinholeDiameter:number){
        return parseFloat((focalLengthInMM/pinholeDiameter).toFixed(0))
    }
    function handleFocalLength(focalLengthInMM:number){
        setFocalLength(focalLengthInMM)
        let pinhole: number = calculateDiameterGivenFocalLength(focalLengthInMM)
        setPinholeDiameter(pinhole)
        setAperture(calculateAperture(focalLengthInMM,pinhole))
    }

  return (
    <>
        <h2>Optimal Pinhole Diameter - Simple </h2>
        <p>This gives you the optimal pinhole diameter for a given focal length.</p>
        {/* input: focal length */}
        <label>Enter your focal length in mm: </label>
        <input type="number" value={focalLength} onChange={(e) => handleFocalLength(parseInt(e.target.value))}/>
        <h3>Recommended diameter</h3>
        <p>Pinhole diameter: {pinholeDiameter ? pinholeDiameter : 0 }</p>
        <p>Aperture f-number: {aperture ? aperture : 0}</p>
    </>

  )
}

export default OptimalPinhole