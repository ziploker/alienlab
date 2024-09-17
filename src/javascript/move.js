// const section = document.querySelector("section");

// const image = section.querySelector("div.image");
// const shadow = section.querySelector("div.shadow");
// const title = section.querySelector("h2");

// const move = (event) => {
//   let imageX = (2 * event.clientX) / window.innerWidth - 1;
//   let imageY = (2 * event.clientY) / window.innerHeight - 1;
//   console.log("WTFFFFFF", window.innerWidth + "  " + window.innerHeight);
//   image.style.transform = `translate(${3 * imageX}px, ${3 * imageY}px)`;
// };

// document.addEventListener("mousemove", move);

const section = document.querySelector("section");

const image = section.querySelector(".image");
const strokeOnly = section.querySelector(".strokeOnly");
const mask = section.querySelector(".mask");
const glow = section.querySelector(".glow");
const pinkUFO = section.querySelector(".greenUFO");
const title = section.querySelector(".firstTextH2");
const titlePink = section.querySelector(".secondTextH2");

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

const move = (event) => {
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
  strokeOnly.style.transform = `translate(${3 * imageX}rem, ${2 * imageY}rem)`;
  mask.style.transform = `translate(${3 * imageX}rem, ${2 * imageY}rem)`;
  glow.style.transform = `translate(${1 * glowX - 4}rem, ${1 * glowY}rem)`;
  pinkUFO.style.transform = `translate(${3 * pinkUFOX}rem, ${2 * pinkUFOY}rem)`;

  title.style.transform = `translate(${1 * titleX + 3 * imageX}rem, ${
    1 * titleY + 2 * imageY
  }rem)`;
  titlePink.style.transform = `translate(${1 * titleX}rem, ${1 * titleY}rem)`;

  //   image.style.backgroundPosition = `${50 - 25 * backgroundX}% ${
  //     40 - 20 * backgroundY
  //  }%`;

  // let titlePinkX = 1 * titleX - 3 * imageX;
  // let titlePinkY = 1 * titleY - 3 * imageY;

  // titlePink.style.transform = `translate(${titlePinkX}rem, ${titlePinkY}rem)`;

  requestAnimationFrame(animate);
};

animate();
document.addEventListener("mousemove", move);
