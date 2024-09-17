"use client";
//import Image from "next/image"
import React, { useEffect, useRef } from "react";
interface Props {
  openSideMenu: string;
  setOpenSideMenu: (word: string) => void;
  leafScrolledSoChangeColorDown: string;
  leafScrolledSoChangeColorUp: string;
  scrollDir: string;
  hamburgerScrolled: string;
  setHamburgerScrolled: (word: string) => void;
}
export default function Hamburger(props: any) {
  const hamburgerRef = useRef<HTMLInputElement>(null);
  let listener: any;

  // // useEffect(() => {
  // //   console.log("inside useeffect =========================1");

  // //   window.addEventListener("scroll", handleScroll);
  // //   return () => window.removeEventListener("scroll", handleScroll);
  // // }, []);

  // // useEffect(() => {
  // //   console.log("inside useeffect =========================2");
  // //   // make it so this header doesn't load on certain pages

  // //   //function to pass to mousedown listener, to close side menu if need be.
  // //   listener = (event: any) => {
  // //     if (hamburgerRef.current) {
  // //       //if you click in the menu,  don't close it
  // //       if (hamburgerRef.current.contains(event.target)) {
  // //         return;
  // //       }
  // //     }

  // //     //if you click anywhere outside the side menu, close it.
  // //     //mouseDownHandler();
  // //     props.setOpenSideMenu("false");
  // //   };

  // //   //resize and/or orientationchange listener
  // //   const handleResize = () => {
  // //     //closed sideMenu on orientation change, if it gets bigger than 850px

  // //     if (hamburgerRef.current) {
  // //       if (window.innerWidth > 500) {
  // //         if (props.openSideMenu == "true") {
  // //           props.setOpenSideMenu("false");
  // //         }
  // //       }
  // //     }
  // //   };

  // //   //set up event listeners
  // //   window.addEventListener("resize", handleResize);
  // //   window.addEventListener("orientationchange", handleResize);
  // //   document.addEventListener("mousedown", listener);

  // //   return () => {
  // //     window.removeEventListener("resize", handleResize);
  // //     window.removeEventListener("orientationchange", handleResize);
  // //     document.removeEventListener("mousedown", listener);
  // //     console.log("cleanup");
  // //   };
  // // }, []);

  // sets the state so the element can stick
  // // const handleScroll = () => {
  // //   if (hamburgerRef.current) {
  // //     if (window.innerWidth >= 520) {
  // //       window.scrollY >= hamburgerRef.current.getBoundingClientRect().top + 18
  // //         ? props.setHamburgerScrolled("true")
  // //         : props.setHamburgerScrolled("false");
  // //     } else {
  // //       window.scrollY >= hamburgerRef.current.getBoundingClientRect().top
  // //         ? props.setHamburgerScrolled("true")
  // //         : props.setHamburgerScrolled("false");
  // //     }
  // //   }
  // // };

  return (
    <div
      className="hamburgerButtonWrapper"
      ref={hamburgerRef}
      onClick={() => {
        props.setOpenSideMenu(props.openSideMenu == "true" ? "false" : "true");
      }}
    >
      <button
        className="hamburgerButton"
        onClick={() => {
          props.setOpenSideMenu(
            props.openSideMenu == "true" ? "false" : "true"
          );
        }}
      >
        {/* <div className={`hamburgerDiv1-${props.openSideMenu}`} /> */}
        <div className={`hamburgerDiv1`} />
        <div className={`hamburgerDiv2`} />
        <div className={`hamburgerDiv3`} />
      </button>
    </div>
  );
}

// open_side_menu={props.open_side_menu}
// hamburger_scrolled={props.hamburger_scrolled}
// leaf_scrolled_so_change_color_down={props.leaf_scrolled_so_change_color_down}
// leaf_scrolled_so_change_color_up={props.leaf_scrolled_so_change_color_up}
// scroll_dir={props.scroll_dir}
