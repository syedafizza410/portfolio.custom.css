import Image from "next/image";
import Typewriter from "../components/Typewriter";
import img1 from "../assets/img3.jpg";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <section className="home" id="home">
        <div className="home-page">
          <h3>Hello, My Name Is</h3>
          <h1>Syeda Fizza Jaffri</h1>
          <h3>
            And I am a <Typewriter />{" "}
          </h3>
          <p>
            Web Development is not just about making websites, its about
            sculpting the digital experience.
          </p>
          <br />
          <br />
          <a href="about" className="tsv">
            Read More
          </a>
          <div className="social-accounts">
            <a
              href="https://www.facebook.com/profile.php?id=100004957934911"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/syedafizzajaffri10/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/syedafizza410"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/syeda-fizza-jaffri-0416b4239/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
            >
              <FaLinkedin />
            </a>
          </div>
          <a href='/CV.pdf' download="CV.pdf" className="tsv">Download Cv</a>
        </div>
        <div className="home-img">
          <Image src={img1} alt="Profile Image" />
        </div>
      </section>
    </>
  );
}
