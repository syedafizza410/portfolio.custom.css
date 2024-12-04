import Image from 'next/image'
import image1 from '../assets/p.jpg'
import image2 from '../assets/project1.png'
import image3 from '../assets/p1.png'
import image4 from '../assets/p4.png'
import image5 from '../assets/p5.png'

export default function Projects() {
  return (
    <section className="project" id="project">
      <h2 className="h1">Latest <span>Project</span></h2>
      <br />
      <br />
      <div className="container">
        <div className="box">
        <Image src= {image1} alt="Project Image" width={300} height={200} />
          <div className="layer">
            <h4>Web Design</h4>
            <p>My latest project dynamic product page</p>
            <a href="https://vivo-v23-5g.vercel.app/"></a>
          </div>
        </div>

        <div className="box">
        <Image src= {image2} alt="Project Image" width={300} height={200} />
          <div className="layer">
            <h4>Web Design</h4>
            <p>My latest project landing page</p>
            <a href="https://landing-web-smoky.vercel.app/"></a>
          </div>
        </div>

        <div className="box">
        <Image src= {image3} alt="Project Image" width={300} height={200} />
          <div className="layer">
            <h4>Web Design</h4>
            <p>My latest project dynamic resume builder</p>
            <a href="https://shareable-resume-builder-xi.vercel.app/"></a>
          </div>
        </div>

        
        <div className="box">
        <Image src= {image4} alt="Project Image" width={300} height={200} />
          <div className="layer">
            <h4>Web Design</h4>
            <p>My latest project web calculator</p>
            <a href="https://web-calculator-rosy.vercel.app/"></a>
          </div>
        </div>

        <div className="box">
        <Image src= {image5} alt="Project Image" width={300} height={200} />
          <div className="layer">
            <h4>Web Design</h4>
            <p>My latest project multi pages react app</p>
            <a href="https://multi-page-web-five.vercel.app/"></a>
          </div>
        </div>

      </div>
    </section>
  )
}
