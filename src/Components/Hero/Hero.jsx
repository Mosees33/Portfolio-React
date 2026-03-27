import './Hero.css'
import profile_img from '../../assets/profile_img.JPG'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from '../../assets/Mosees_Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} className='profile-img' />
      <h1><span>I am Moseeswaran,</span> Full Stack Developer based in india.</h1>
      <p>
        Hey there! I am all about creating cool, user-friendly websites and apps that actually make life easier. From designing sleek frontends to making sure everything runs smoothly behind the scenes, I love bringing ideas to life. If it involves coding, coffee, and a bit of creativity - count me in!
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">My resume</div>
        </a>
        </div>
    </div>
  )
}

export default Hero
