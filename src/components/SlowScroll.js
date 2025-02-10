import React, { useEffect } from "react";

const SlowScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundPosition = `50% ${-(scrollPosition / 2)}px`;
      document.querySelector(".page-container").style.backgroundPosition = backgroundPosition;
    };
    // Check if the screen width is greater than 600px (non-mobile)
    const isMobile = window.innerWidth <= 600;

    if (!isMobile) {
      // Only add scroll event listener for non-mobile screens
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    // No need for scroll effect on mobile, so no event listener is added
  }, []);

  return null; // This component doesn't render anything itself
};

export default SlowScroll;
