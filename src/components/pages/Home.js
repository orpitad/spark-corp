import React, { useEffect, useState, useRef } from "react";
import "./Home.scss";
import img4 from "../../images/img4.jpg";
import img3 from "../../images/img3.jpg";
import img2 from "../../images/img2.jpg";
import img1 from "../../images/img1.jpg";
import ltPanel from "../../images/lt-panel.jpg";
import plcPanel from "../../images/plc-control-panel.jpg";
import flowMeter from "../../images/flowmeter.jpeg";
import linkedIn from "../../images/linkedIn.png";

import emailjs from "emailjs-com";

const Home = () => {
  const [selected, setSelected] = useState(4);
  const [checked, setChecked] = useState(false);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const form = useRef();
  
  const handleClick = (type) => {
    if (type === "about") ref.current?.scrollIntoView({ behavior: "smooth" });
    else if (type === "contact") {
        ref2.current.style.scrollMargin = "0px";
      ref2.current?.scrollIntoView({ behavior: "smooth" });
    } else if (type === "services") {
      ref4.current?.scrollIntoView({ behavior: "smooth" });
    }
    ref3.current.checked = false;
    setChecked(false);
    // handleChange();
  };

  const handleChange = () => {
    setChecked(!checked);
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     emailjs.send('service_dqudscq', 'template_toyzrhh', values, 'H2vU8VS1C1Uj7ndBq');
  //   }
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(
      form.current.name.value,
      form.current.email.value,
      form.current.message.value
    );
    emailjs
      .sendForm(
        "service_dqudscq",
        "template_4h6xoq9",
        form.current,
        "H2vU8VS1C1Uj7ndBq"
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };

  useEffect(() => {
    const intervalID = setTimeout(() => {
      setSelected((current) => {
        if (current === 1) {
          return 4;
        } else if (current === 2) {
          return 1;
        } else if (current === 3) {
          return 2;
        } else if (current === 4) {
          return 3;
        }
        // return current - 1;
      });
    }, 2900);

    return () => clearInterval(intervalID);
  }, [selected]);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={handleChange}
            ref={ref3}
          />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            {/* <li>
              <div>Home</div>
            </li> */}
            <li onClick={() => handleClick("about")}>
              <div>About Us</div>
            </li>
            <li onClick={() => handleClick("services")}>
              <div>Services</div>
            </li>
            <li>
              <div onClick={() => handleClick("contact")}>Contact Us</div>
            </li>
          </ul>
          <h1 className="logo">SPARK CORPORATION</h1>
        </div>
      </nav>

      <div className="container-body">
        <div className="fade-in-image">
          <img
            src={
              selected === 4
                ? img4
                : selected === 1
                ? img1
                : selected === 2
                ? img2
                : img3
            }
            alt={selected}
          />
          {/* Let us take charge of your electrical and instrumentation needs! */}
        </div>
        <div
          className="slogan"
          style={{
            display: checked && "none",
          }}
        >
          <p>
            {" "}
            <span className="fancy">Let us take charge of your needs!</span>
          </p>
        </div>
      </div>

      <div className="aboutUs">
        <div className="eleven" ref={ref}>
          <h1>ABOUT US</h1>
        </div>
        <div className="aboutUs-body">
          <section className="content-container">
            <div className="textArea">
              <p>
                Spark Corporation was founded in 1984 by{" "}
                <strong>Mr. Laxman Prabhu</strong>. With an objective to become
                a leading name in the field of electrical and instrumentation{" "}
                <strong> Mr. Shakti Sinha</strong> with 15 and more years of
                experience has joined as Proprietor Partner for Spark
                Corporation .
              </p>

              <p>
                We are a service provider for electrical and instrumentation
                work, specializing in the installation, testing, and
                commissioning of flow meters, pressure transmitters, and
                electrical panels. We have completed projects for a variety of
                clients, including water companies, electrical utilities, and
                manufacturing plants.
              </p>

              <p>
                Our team of highly skilled engineers and technicians are
                dedicated to providing quality services to our clients. We have
                a strong commitment to safety and quality, and we are constantly
                striving to improve our methods and procedures.
              </p>

              <p>
                We are proud to be a cutting edge provider of electrical and
                instrumentation services in India.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="parent-snip">
        <figure className="snip1527">
          <div className="image">
            <img src={ltPanel} alt="pr-sample23" />
          </div>
          <figcaption>
            {/* <div className="date"><span className="day">28</span><span className="month">Oct</span></div> */}
            <h3>LT Panel</h3>
            <p>
              {/* You know what we need, Hobbes? We need an attitude. Yeah, you can't be cool if you don't have an attitude. */}
            </p>
          </figcaption>
          {/* <a href="#"></a> */}
        </figure>
        <figure className="snip1527">
          <div className="image">
            <img src={plcPanel} alt="pr-sample24" />
          </div>
          <figcaption>
            <h3>PLC Panel</h3>
          </figcaption>
        </figure>
        <figure className="snip1527 last">
          <div className="image">
            <img src={flowMeter} alt="pr-sample25" />
          </div>
          <figcaption>
            <h3>Sensor fixing for 4200mm size ultra flux FlowMeter</h3>
          </figcaption>
        </figure>
      </div>
      <br />
      <div className="services" ref={ref4}>
        <div className="eleven ">
          <h1>SERVICES</h1>
        </div>
        <div className="service-text">
          <h1>Specialized In</h1>
          <br />
          <div className="specialized">
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
              Supply Installation Testing &amp; Commissioning (SITC) of Ultrasonic
                Flowmeters,Electromagnetic Flowmeters and pressure transmitters for clearwater.
              </div>

              {/* <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">04.11.2022</span>
              </div> */}
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
              All types of Low Voltage(LV) and Extra Low Voltage(ELV) Electrical worksSupply Installation Testing & Commissioning.

              </div>

              {/* <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">04.11.2022</span>
              </div> */}
            </div>
          </div>

          </div>

          {/* <p>
                Supply Installation Testing &amp; Commissioning (SITC) of Ultrasonic
                Flowmeters,Electromagnetic Flowmeters and pressure transmitters for clearwater.
            </p> */}

<h1>Channel Partner for following products</h1>
          <br />
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
              Roof Top Solar
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
              Anti Dust Coating for solar modules
              </div>

              {/* <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date">04.11.2022</span>
              </div> */}
            </div>
          </div>
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
              Air conditioning energy saver
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
              Energy efficient water heating systems.
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
              Air Curtains
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
              Pyrolytic Oil(Tyre Oil)
              </div>
            </div>
          </div>
            <h1>Additional Services</h1>
          
            <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
              DESIGN AND DEVELOP USER FRIENDLY WEBSITE
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
              BUSINESS ANALYSIS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="eleven conatact" ref={ref2}>
        <h1>CONTACT US</h1>
      </div>
      <div className="contactForm">
        <div className="contact container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form">
              <div className="form-txt">
                <p>
                  <strong>Spark Corporation</strong>
                  <br />
                  H274 Tata Housing Amantra
                  <br />
                  Bhiwandi Bypass
                  <br />
                  Thane 421302
                  <br />
                  Maharashtra
                  <br />
                  +91-9167822792
                </p>
                <hr />
                {/* <h3>India</h3> */}
                <p>
                  <strong>Spark Corporation</strong>
                  <br />
                  2/10, Unnat Nagar III, <br />
                  M.G. Road, Goregaon (W) <br />
                  Mumbai 400062
                  <br />
                  Maharashtra <br />
                  411014
                  <br />
                  +91-9167822792
                </p>
              </div>
              <div className="form-details">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  cols="52"
                  rows="7"
                  placeholder="Message"
                  required
                ></textarea>

                <button type="submit" className="button-86">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <div className="footer">
          {/* <ul className="social">
                    <li>
                        <a href="https://www.linkedin.com/in/shakti-sinha-9838a714"><i className="fa fa-linkedin"></i></a>
                    </li>
                </ul> */}
          <a href="https://www.linkedin.com/in/shakti-sinha-9838a714">
            <img src={linkedIn} className="linkedIn" alt="LinkedIn" />
            {/* <span>Shakti Sinha</span> */}
          </a>
          <p>&copy;Spark Corporation. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
