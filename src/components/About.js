import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Manuel",
  lastName: "Barreiro",
  bithday: "06.07.1991",
  address: "Montevideo, Uruguay",
  phn: "+598 92 447 494",
  email: "manuu307@gmail.com",
  serviceLists: [
    "Website Development",
    "Digital Experience",
    "Content Marketing",
    "Social Media Design",
    "Shared Web Hosting",
  ],
  skills: {
    programming: [
      { name: "WordPress", value: "60" },
      { name: "JavaScript", value: "90" },
      { name: "TypeScript", value: "70" },
      { name: "VueJs", value: "80" },
      { name: "ReactJs", value: "80" },
      { name: "ReactNative", value: "70" },
      { name: "Python", value: "80" },
    ],
    hacking: [
      { name: "Linux", value: "95" },
      { name: "BurpSuite", value: "95" },
      { name: "OWASP Top 10", value: "95" },
      { name: "OSINT", value: "95" },
      { name: "Python Scripts", value: "90" },
    ],
    language: [
      { name: "Spanish", value: "100" },
      { name: "English", value: "80" },
      { name: "Italian", value: "40" },
    ],
  },
  education: [
    { year: "2014 - 2016", unv: "Oxford Univercity", degree: "Master Degree" },
    { year: "2010 - 2014", unv: "Texas Univercity", degree: "Bachelor Degree" },
    { year: "2008 - 2010", unv: "Simone College", degree: "Associate Degree" },
  ],
  working: [
    {
      year: "2018 - running",
      company: "Envato Elements",
      deg: "Exclusive Author",
    },
    { year: "2015 - 2018", company: "Avo Corporation", deg: "Content Manager" },
    { year: "2012 - 2015", company: "FC Barcelona", deg: "Football Player" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
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
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div
                  className="main"
                  data-img-url="https://mercuriopi.com/img/team/manuel.png"
                  width={664}
                  height={657}
                />
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
                  My name is <span>Manuel Barreiro.</span> I'm a computer boy
                  since 8 years old when i touched my first PC. Not long after,
                  i sat up a MU server and that was my first I.T job (lol).
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
