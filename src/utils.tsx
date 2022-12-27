/**
 * Calculates the optimal diameter of a pinhole given focal length in mm, wavelength, and magnification.
 * @param focalLengthInMM - Focal length of pinhole camera in millimetres
 * @param wavelengthInMM - Wavelength of light. If no wavelength is specified, green light will be used as a default (550nm).
 * @param magnification - Magnification = focal length/distance from pinhole to subject.If no magnification is specified, we'll use 0 which is a good approximation for subjects from 2 metres to infinity. 
 * @returns - Diameter of pinhole in mm, to 2 decimal places
 *  */  

export function calculatePinholeDiameterGivenFocalLengthForOptimalResolution(focalLengthInMM:number,wavelengthInMM:number=0.00055, magnification:number=0){
    let num:number = (2*Math.sqrt(focalLengthInMM*wavelengthInMM/(magnification+1)))
    return parseFloat(num.toFixed(2))
}

/**
 * Calculates the aperture for optimal resolution. This is different from aperture for optimal contrast (see other functions)
 * @param focalLengthInMM 
 * @param pinholeDiameterInMm
 * @returns Aperture (f-number) rounded to nearest integer
 */
export function calculateAperture(focalLengthInMM:number, pinholeDiameterInMM:number){
    return parseFloat((focalLengthInMM/pinholeDiameterInMM).toFixed(0))
}

export function calculatePinholeDiameterGivenFocalLengthForOptimalContrast(focalLengthInMM:number,wavelengthInMM:number=0.00055, magnification:number=0){
    let num:number = (1.56*Math.sqrt(focalLengthInMM*wavelengthInMM/(magnification+1)))
    return parseFloat(num.toFixed(2))
}

export function focalLengthGivenPinholeDiameterInMMForOptimalResolution(pinholeDiameterInMM:number, wavelengthInMM:number=0.00055, magnification:number=0){
    let num:number = ((pinholeDiameterInMM**2)*(magnification+1))/((2**2)*wavelengthInMM)
    return parseFloat(num.toFixed(0))
}

export function focalLengthGivenPinholeDiameterInMMForOptimalContrast(pinholeDiameterInMM:number, wavelengthInMM:number=0.00055, magnification:number=0){
    let num:number = ((pinholeDiameterInMM**2)*(magnification+1))/((1.56**2)*wavelengthInMM)
    return parseFloat(num.toFixed(0))

}