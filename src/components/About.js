import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Manuel",
  lastName: "Barreiro",
  bithday: "06.07.1991",
  address: "Montevideo, Uruguay",
  phn: "+598 92 447 494",
  email: "mbarreiro@valkiriasolutions.com",
  serviceLists: [
    "Frontend & Backend Development",
    "Automation Scripts",
    "Data Scraping",
    "Cloud Infrastructure",
    "Ethical Hacking",
  ],
  skills: {
    programming: [
      { name: "WordPress", value: "40" },
      { name: "NodeJs", value: "100" },
      { name: "VueJs", value: "80" },
      { name: "ReactJs", value: "100" },
      { name: "ReactNative", value: "60" },
      { name: "Python", value: "100" },
    ],
    hacking: [
      { name: "Linux", value: "85" },
      { name: "Networking", value: "90" },
      { name: "Information Gathering", value: "95" },
      { name: "WebApp Analysis", value: "95" },
      { name: "Vulnerability Analysis", value: "95" },
      { name: "Exploitation", value: "85" },
      { name: "Scripting", value: "100" },
      { name: "Security Monitoring", value: "85" },
      { name: "Network Scanning", value: "98" },

      { name: "Endpoint Security", value: "90" },
      { name: "Security Policy and Compliance", value: "88" },
      { name: "Risk Assessment and Management", value: "92" },
      { name: "Security Assessment and Auditing", value: "98" },
    ],
    language: [
      { name: "Spanish", value: "100" },
      { name: "English", value: "80" },
    ],
  },
  education: [
    { year: "2009 - 2012", unv: "Institute of Technology", degree: "bachelor" },
    { year: "2005 - 2008", unv: "Access Institute", degree: "pre-first" },
    { year: "2020", unv: "BIOS - Security in I.T", degree: "" },
    { year: "2023 - In process", unv: "EC-Council's CEH v12", degree: "CEH" },
  ],
  working: [
    {
      year: "2012 - 2020",
      company: "Redwolf/Independant",
      deg: "Techincal Service",
    },
    { year: "2019 - 2021", company: "Freelance", deg: "Full Stack Developer" },
    {
      year: "2021 - Running",
      company: "Hacknoid",
      deg: "Ethical Hacker | Python Developer",
    },
    {
      year: "2021 - Running",
      company: "Mercurio",
      deg: "Full Stack Javascript Developer | Python Data Scraping and Analysis",
    },
    {
      year: "2021 - Running",
      company: "Valkiria Solutions",
      deg: "Director of I.T",
    },
  ],
  partnersLogos: [
    "img/partners/hacknoid.png",
    "img/partners/mercurio.png",
    "img/partners/valkiria.png",
    "img/partners/coffee.gif",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/about/2.jpg" alt="Profile photo" />
                <div className="main" data-img-url="img/about/2.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  I'm <span>Manuel Barreiro.</span> I love computers since i was
                  8 years old when i touched my first PC. From that day on, i've
                  made all kinds of stuff: Gaming, Blogs, Websites, Scripts,
                  Hacking, Game Servers, Graphic Design, you name it! i'm
                  currently working in Cybersecurity and as Full-Stack Developer
                  adding some infrastructure on the stack (GCP, Azure). Besides,
                  My partner and I created a company, I am in charge of the IT
                  area and she is in charge of administration and marketing. I'm
                  very poractive, and i'm always learning.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
