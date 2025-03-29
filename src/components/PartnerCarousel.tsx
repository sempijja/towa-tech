import { useEffect, useRef } from "react";
import { getCloudinaryUrl } from "@/lib/cloudinary"; // Import the Cloudinary utility function

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
      imgUrl: getCloudinaryUrl("kcca-logo_zkkgq9", {
        width: 200,
        height: 100,
        crop: "fit",
        format: "webp",
        quality: "auto",
      }),
    },
    {
      name: "UCC",
      imgUrl: getCloudinaryUrl("ucc-logo_icztrg", {
        width: 200,
        height: 100,
        crop: "fit",
        format: "webp",
        quality: "auto",
      }),
    },
    {
      name: "Tweyonje",
      imgUrl: getCloudinaryUrl("6jrkIWND_400x400_wcw7jj", {
        width: 200,
        height: 100,
        crop: "fit",
        format: "webp",
        quality: "auto",
      }),
    },
    {
      name: "NEMA",
      imgUrl: getCloudinaryUrl("logo.7e56400d9a6a90b3eaee_qhms9f", {
        width: 200,
        height: 100,
        crop: "fit",
        format: "webp",
        quality: "auto",
      }),
    },
    {
      name: "Govt",
      imgUrl: getCloudinaryUrl("cropped-GCICLogo_gamspt", {
        width: 200,
        height: 100,
        crop: "fit",
        format: "webp",
        quality: "auto",
      }),
    },
    {
      name: "Rotary",
      imgUrl: getCloudinaryUrl("cropped-Rotary-Logo_EN21_y7v72u", {
        width: 200,
        height: 100,
        crop: "fit",
        format: "webp",
        quality: "auto",
      }),
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
              className="flex-none mx-6 w-48 h-24 rounded-xl flex items-center justify-center p-4"
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