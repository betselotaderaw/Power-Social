"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the aboutus
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
      <div className="fixed bottom-8 right-8 z-[99]">
        {isVisible && (
            <div
                onClick={scrollToTop}
                aria-label="scroll to top"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md "
            >
              <FontAwesomeIcon icon={faArrowUp} className="mt-[6px] h-3 w-3" />
            </div>
        )}
    </div>
  );
}
