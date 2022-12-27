import React, {useState, useEffect} from 'react'
import { calculatePinholeDiameterGivenFocalLengthForOptimalResolution,calculateAperture,calculatePinholeDiameterGivenFocalLengthForOptimalContrast } from '../utils'
const OptimalPinholeComplex = () => {
    const [focalLength, setFocalLength] = useState<number>()
    const [pinholeDiameterReso, setPinholeDiameterReso] = useState<number>()
    const [pinholeDiameterContrast, setPinholeDiameterContrast] = useState<number>()
    const [apertureReso, setApertureReso] = useState<number>()
    const [apertureContrast, setApertureContrast] = useState<number>()
    const [magnification, setMagnification] = useState<number>(0)
    // Default value is the wavelength of green light
    const [wavelength, setWavelength] = useState<number>(0.00055)
 
    useEffect(() =>{
      if (focalLength !== undefined && wavelength !== undefined && magnification !== undefined){
        let pinholeReso = calculatePinholeDiameterGivenFocalLengthForOptimalResolution(focalLength, wavelength, magnification)
        setPinholeDiameterReso(pinholeReso)
        setApertureReso(calculateAperture(focalLength, pinholeReso))
        // Contrast
        let pinholeContrast = calculatePinholeDiameterGivenFocalLengthForOptimalContrast(focalLength,wavelength,magnification)
        setPinholeDiameterContrast(pinholeContrast)
        setApertureContrast(calculateAperture(focalLength,pinholeContrast))
        
      }
    }, [focalLength, wavelength, magnification])

  return (
    <>
        <h2>Optimal Pinhole Diameter - Complex </h2>
        <p>This gives you the optimal pinhole diameter for a given focal length.</p>
        {/* input: focal length */}
        
        <label>Focal length (mm): </label>
        <input type="number" value={focalLength} onChange={(e) => setFocalLength(parseFloat(e.target.value))}/>
        <br></br>
        <label>Enter wavelength (mm): </label>
        <input type="number" value={wavelength} placeholder="0.00055" onChange={(e) => setWavelength(parseFloat(e.target.value))}/>
        <br></br>
        <label>Enter magnification: </label>
        <input type="number" value={magnification} placeholder="0" onChange={(e) => setMagnification(parseFloat(e.target.value))}/>
        <h3>Recommendations</h3>
        <h4>For optimal resolution</h4>
        <p>Pinhole diameter: {pinholeDiameterReso ? pinholeDiameterReso : 0 }</p>
        <p>Aperture f-number: {apertureReso ? apertureReso : 0}</p>
        <h4>For optimal contrast</h4>
        <p>Pinhole diameter: {pinholeDiameterContrast ? pinholeDiameterContrast : 0 }</p>
        <p>Aperture f-number: {apertureContrast ? apertureContrast : 0}</p>
    </>

  )
}

export default OptimalPinholeComplex 