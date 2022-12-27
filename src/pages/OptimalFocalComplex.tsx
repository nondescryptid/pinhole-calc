import React, {useState, useEffect} from 'react'
import { focalLengthGivenPinholeDiameterInMMForOptimalContrast, focalLengthGivenPinholeDiameterInMMForOptimalResolution,calculateAperture} from '../utils'
const OptimalFocalComplex = () => {
    const [focalLengthReso, setFocalLengthReso] = useState<number>()
    const [pinholeDiameter, setPinholeDiameter] = useState<number>()
    const [focalLengthContrast, setFocalLengthContrast] = useState<number>()
    const [apertureReso, setApertureReso] = useState<number>()
    const [apertureContrast, setApertureContrast] = useState<number>()
    const [magnification, setMagnification] = useState<number>(0)
    const [wavelength, setWavelength] = useState<number>(0.00055)
 
    useEffect(() =>{
      if (pinholeDiameter !== undefined && wavelength !== undefined && magnification !== undefined){
        let focal = focalLengthGivenPinholeDiameterInMMForOptimalResolution(pinholeDiameter, wavelength, magnification)
        setFocalLengthReso(focal)
        setApertureReso(calculateAperture(focal, pinholeDiameter))
        // Contrast
        let focalContrast = focalLengthGivenPinholeDiameterInMMForOptimalContrast(pinholeDiameter, wavelength, magnification)
        setFocalLengthContrast(focalContrast)
        setApertureContrast(calculateAperture(focalContrast, pinholeDiameter))
        
      }
    })

  return (
    <>
        <h2>Optimal Focal Length - Complex </h2>
        <p>This gives you the optimal focal length for a given pinhole diameter.</p>
        {/* input: focal length */}
        
        <label>Pinhole diameter (mm): </label>
        <input type="number" value={pinholeDiameter} onChange={(e) => setPinholeDiameter(parseFloat(e.target.value))}/>
        <br></br>
        <label>Enter wavelength (mm): </label>
        <input type="number" value={wavelength} placeholder="0.00055" onChange={(e) => setWavelength(parseFloat(e.target.value))}/>
        <br></br>
        <label>Enter magnification: </label>
        <input type="number" value={magnification} placeholder="0" onChange={(e) => setMagnification(parseFloat(e.target.value))}/>
        <h3>Recommendations</h3>
        <h4>For optimal resolution</h4>
        <p>Focal length: {focalLengthReso ? focalLengthReso : 0 }</p>
        <p>Aperture f-number: {apertureReso ? apertureReso : 0}</p>
        <h4>For optimal contrast</h4>
        <p>Focal length: {focalLengthContrast ? focalLengthContrast : 0 }</p>
        <p>Aperture f-number: {apertureContrast? apertureContrast : 0}</p>
    </>

  )
}

export default OptimalFocalComplex 