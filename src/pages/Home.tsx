import React from 'react'

const Home = () => {
  return (
    <>
    <h2>Optimal Pinhole Size</h2>
    <h3>Simple calculators</h3>
    
    <ol>
        <li><a href="/simple-pinhole">Calculate pinhole size, given focal length</a></li>
        <li><a href="/simple-focal">Calculate optimal focal length, given pinhole size</a></li>
    </ol>

    <h3> Complex calculators</h3>
    <ol>
        <li><a href="/complex-pinhole">Calculate pinhole size, given focal length + magnification + wavelength</a></li>
        <li><a href="/complex-focal">Calculate optimal focal length, given pinhole size + magnification + wavelength</a></li>
    </ol>

    <h2>Camera Dimensions and Angle of View</h2>

    <h2> Quick note </h2>
    <p> The simple calculators only require either focal length / pinhole diameter as an input. It makes the following assumptions: </p>
    <ul>
        <li>Uses Rayleigh formula for optimal resolution d=2√(fλ), rounded to two decimal places. </li>
        <li>Uses λ=wavelength of green light (550 nm), assumes object at infinity.</li>
    </ul>
    <p> The complex calculator is suited for users who also want to have control over (1) wavelength of light used and (2) magnification.</p>
    <p>For more info on using this calculator and the formulae used, please see the companion article on <a href="https://www.35mmc.com/09/08/2021/a-calculator-for-pinhole-camera-design-by-sroyon/">35mmc</a>.</p>

    </>
  )
}

export default Home