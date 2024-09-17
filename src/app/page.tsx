"use client";

import React, { useEffect } from "react";

import Image from "next/image";

import logo from "../images/logox.svg";
import companyName from "../images/companyNameBlack.svg";
import Hamburger from "@/components/hamburger";
import tester from "@/images/newSlideShow.gif";
import footerUFO from "@/images/footerUFO.svg";

export default function Home() {
  useEffect(() => {
    const section = document.querySelector("section");

    const image = section?.querySelector(".image") as HTMLInputElement;
    const strokeOnly = section?.querySelector(
      ".strokeOnly"
    ) as HTMLInputElement;
    const mask = section?.querySelector(".mask") as HTMLInputElement;
    const glow = section?.querySelector(".glow") as HTMLInputElement;
    const pinkUFO = section?.querySelector(".greenUFO") as HTMLInputElement;
    const title = section?.querySelector(".firstTextH2") as HTMLInputElement;
    const titlePink = section?.querySelector(
      ".secondTextH2"
    ) as HTMLInputElement;
    let aimX = 0;
    let aimY = 0;
    let aimX2 = 0;
    let aimY2 = 0;
    let imageX = 0;
    let imageY = 0;
    let glowX = 0;
    let glowY = 0;
    let pinkUFOX = 0;
    let pinkUFOY = 0;
    let titleX = 0;
    let titleY = 0;
    let backgroundX = 0;
    let backgroundY = 0;

    const move = (event: any) => {
      aimX = (2 * event.clientX) / window.innerWidth - 1;
      aimY = (2 * event.clientY) / window.innerHeight - 1;

      aimX2 = (10 * event.clientX) / window.innerWidth - 1;
      aimY2 = (-2 * event.clientY) / window.innerHeight - 1;
    };

    const animate = () => {
      imageX += (aimX - imageX) * 0.1;
      imageY += (aimY - imageY) * 0.1;

      glowX += (aimX2 - glowX) * 0.05;
      glowY += (aimY2 - glowY) * 0.05;

      pinkUFOX += (aimX - pinkUFOX) * 0.06;
      pinkUFOY += (aimY - pinkUFOY) * 0.06;

      titleX += (aimX - titleX) * 0.2;
      titleY += (aimY - titleY) * 0.2;

      backgroundX += (aimX - backgroundX) * 0.2;
      backgroundY += (aimY - backgroundY) * 0.2;

      image.style.transform = `translate(${3 * imageX}rem, ${2 * imageY}rem)`;
      strokeOnly.style.transform = `translate(${3 * imageX}rem, ${
        2 * imageY
      }rem)`;
      mask.style.transform = `translate(${3 * imageX}rem, ${2 * imageY}rem)`;
      glow.style.transform = `translate(${1 * glowX - 4}rem, ${1 * glowY}rem)`;
      pinkUFO.style.transform = `translate(${3 * pinkUFOX}rem, ${
        2 * pinkUFOY
      }rem)`;

      title.style.transform = `translate(${1 * titleX + 3 * imageX}rem, ${
        1 * titleY + 2 * imageY
      }rem)`;
      titlePink.style.transform = `translate(${1 * titleX}rem, ${
        1 * titleY
      }rem)`;

      //   image.style.backgroundPosition = `${50 - 25 * backgroundX}% ${
      //     40 - 20 * backgroundY
      //  }%`;

      // let titlePinkX = 1 * titleX - 3 * imageX;
      // let titlePinkY = 1 * titleY - 3 * imageY;

      // titlePink.style.transform = `translate(${titlePinkX}rem, ${titlePinkY}rem)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="headerInner">
          <div className="imageWrapper">
            <Image
              alt="company logo"
              width={42}
              height={42}
              className="logo"
              src={logo.src}
            />
          </div>
          <div className="imageWrapper">
            <Image
              alt="Alien Lab"
              width={87}
              height={27}
              className="companyName"
              src={companyName.src}
            />
          </div>

          <nav className="topNav">
            <ul>
              <li>Our Company</li>
              <span>|</span>
              <li>Portfolio</li>
              <span>|</span>
              <li>Services</li>
            </ul>
          </nav>

          <div className="contactUs">Contact Us</div>
          <Hamburger />
        </div>
      </header>
      <div className="sectionWrapper">
        <section className="section1">
          <div className="holder">
            <div className="glow"></div>
            <div className="greenUFO"></div>
            <div className="strokeOnly"></div>
            <h2 className="firstTextH2">
              Innovative Web <br />
              Design & <br />
              Development
            </h2>

            <div className="image"></div>

            <div className="mask">
              <h2 className="secondTextH2">
                Innovative Web <br />
                Design & <br />
                Development
              </h2>
            </div>
          </div>
        </section>
        <section className="section2">
          {/* <div className="missionTop">
            <p>
              Delivering exceptional digital solutions of unparalleled quality
              to clients globally.{" "}
            </p>
          </div> */}
          {/* <div className="missionBottom">
            <p>We deliver exceptional digital solutions. </p>
          </div> */}

          <div className="portforlio">
            <div className="portforlioLeft">
              <h3>Where Innovation Meets Execution</h3>
              <p>
                Our expertise lies in building successful digital products that
                meet the needs of businesses and their customers. Let us help
                you achieve your goals and drive growth through innovative
                digital solutions.
              </p>
            </div>
            <div className="portforlioRight">
              <Image width={300} height={283} src={tester.src} alt="" />
            </div>
            <div className="portforlioBottom">
              <p>View Our Portforlio</p>
            </div>
          </div>
        </section>

        <section className="section3">
          <div className="section3BG" />
          <div className="section3Inner">
            <h3>Digital Marketing Services</h3>
            <p>
              Our expertise lies in building successful digital products that
              meet the needs of businesses and their customers. Let us help you
              achieve your goals and drive growth through innovative digital
              solutions.{" "}
            </p>

            <div>
              <h4>SEO</h4>
              <p>
                Navigating the digital realm requires visibility on search
                engine platforms like Google. Our SEO services are diligently
                designed to amplify your website's presence, thereby driving
                quality organic traffic. We don't just target quantity but
                quality, aiming to draw traffic that can enhance your business
                prospects. Our SEO approach is intended to catapult your site to
                leading positions, assuring your brand gets its fair share of
                limelight.
              </p>
            </div>

            <div>
              <h4>SEO</h4>
              <p>
                Navigating the digital realm requires visibility on search
                engine platforms like Google. Our SEO services are diligently
                designed to amplify your website's presence, thereby driving
                quality organic traffic. We don't just target quantity but
                quality, aiming to draw traffic that can enhance your business
                prospects. Our SEO approach is intended to catapult your site to
                leading positions, assuring your brand gets its fair share of
                limelight.
              </p>
            </div>
          </div>
        </section>
        <section className="section4">
          <div className="section4BG" />
          <div className="section4Inner">
            <h3>Make Your Vision a Reality</h3>
            <p>
              Maximize your potential for success by partnering with us for your
              design and development needs. Our streamlined process not only
              saves you time and resources, but also allows for a faster and
              more secure launch with exceptional results. Let's work together
              to bring your vision to life and build a truly amazing product.
            </p>

            <div className="contactUs2Wrapper">
              <button className="contactUs2">Let's discuss your project</button>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="footerInner">
            <div className="footerLeft">
              © 2024 AlienLabs llc. <br />
              <a href="#">Site Map</a> | <a href="#">FAQs</a>
            </div>
            <div className="footerMiddle">
              <Image src={footerUFO.src} width={150} height={64} alt="ufo" />
              <br />
              <address className="address1">
                13640 North Kendall Drive&nbsp;&nbsp; #1128
              </address>
              <address className="address2">
                Miami, FL 33186 United States
              </address>
              <a
                style={{ fontSize: ".8rem" }}
                href="https://www.google.com/policies/privacy/"
                target="_blank"
              >
                Privacy Policy
              </a>
              <span style={{ fontSize: ".8rem" }}>&nbsp;and&nbsp;</span>
              <a
                style={{ fontSize: ".8rem" }}
                href="https://policies.google.com/terms"
                target="_blank"
              >
                Terms of Service
              </a>
            </div>
            <div className="footerRight">
              786-505-1939 <br /> hi@alienlab.co
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
