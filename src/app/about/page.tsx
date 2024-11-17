import Image from 'next/image';
import image1 from '../assets/about.png'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <Image src= {image1} alt="About Image" width={500} height={500} />
      </div>
      <div className="about-me">
        <h2 className="h1">About <span>Me</span></h2>
        <br />
        <br />
        <h3>Frontend & Backend Developer</h3>
        <p>Hey there, I am a passionate web Developer. I have heaven knowledge about html,css, and javascript. 
               I can develop a responsive website with the help of those languages. I am a student of governor intiative
               program and inshaAllah will be a passionate certified could applied Generative AI engineer. My education
               is continued which will build my skills more professionally in future inshaAllah. Your satisfaction is my moto. If you want
               to hire me just feel free to contact me through social media accounts and lets discus about your needs so i can help you. Thanks for your time.</p>
        <a href="home" className="tsv">Read More</a>
      </div>
    </section>
  )
}
