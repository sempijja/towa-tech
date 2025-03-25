import { useEffect, useRef } from "react";

/**
 * PartnerCarousel Component
 * 
 * A horizontally scrolling carousel that displays partner logos with automatic animation
 * and pause-on-hover functionality.
 * 
 * @returns {JSX.Element} The rendered carousel component
 */
const PartnerCarousel = (): JSX.Element => {
  const companyLogos = [
    {
      name: "KCCA",
      imgUrl: "/photos/kcca-logo.png", // Adjusted path for public folder
    },
    {
      name: "UCC",
      imgUrl: "/photos/ucc-logo.png", 
    },
    {
      name: "KCCA",
      imgUrl: "/photos/kcca-logo.png",
    },
    {
      name: "UCC",
      imgUrl: "/photos/ucc-logo.png",
    },
    {
      name: "KCCA",
      imgUrl: "/photos/kcca-logo.png",
    },
    {
      name: "UCC",
      imgUrl: "/photos/ucc-logo.png",
    },
  ];

  // Refs for DOM elements and animation
  const containerRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const secondGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !firstGroupRef.current || !secondGroupRef.current) {
      return;
    }

    const scrollContainer = containerRef.current;
    const scrollSpeed = 1; // Pixels per frame
    let isPaused = false;
    let scrollPos = 0;
    let animationFrameId: number;

    // Clone the first group to create an infinite loop effect
    secondGroupRef.current.innerHTML = firstGroupRef.current.innerHTML;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPos += scrollSpeed;

        const firstGroupWidth = firstGroupRef.current?.offsetWidth || 0;
        if (scrollPos >= firstGroupWidth) {
          scrollPos = 0;
        }

        scrollContainer.scrollLeft = scrollPos;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="overflow-hidden relative select-none py-6">
      <div
        ref={containerRef}
        className="flex overflow-x-hidden w-full"
        aria-label="Partner companies"
      >
        <div ref={firstGroupRef} className="flex flex-nowrap min-w-full">
          {companyLogos.map((company, index) => (
            <div
              key={`group1-${index}`}
              className="flex-none mx-6 w-48 h-24  rounded-xl flex items-center justify-center p-4"
              aria-label={`${company.name} logo`}
            >
              <img
                src={company.imgUrl}
                alt={`${company.name} logo`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div ref={secondGroupRef} className="flex flex-nowrap min-w-full"></div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
