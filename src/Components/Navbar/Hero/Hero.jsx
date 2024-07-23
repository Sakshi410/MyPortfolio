import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/images.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (

    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Sakshi Dongare,</span> Software Developer Based In Maharashtra</h1>
      <p>I am a software developer from Mumbai, Maharashtra with expertise in HTML, CSS, Bootstrap, React.js, Java, Python, Power BI, and more. </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink></div>
        <div className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#contact'> My Resume </AnchorLink></div>
      </div>
    </div>
  )
}
export default Hero

