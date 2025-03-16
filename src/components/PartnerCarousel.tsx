
import { useEffect, useRef } from "react";

const PartnerCarousel = () => {
  const companies = [
    "Company 1", "Company 2", "Company 3", "Company 4", 
    "Company 5", "Company 6", "Company 7", "Company 8", 
    "Company 9", "Company 10", "Company 11", "Company 12"
  ];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const secondGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !firstGroupRef.current || !secondGroupRef.current) {
      return;
    }

    const scrollContainer = containerRef.current;
    const scrollSpeed = 1;
    let isPaused = false;
    let scrollPos = 0;
    let animationFrameId: number;

    // Clone the first group to create an infinite loop
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
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="overflow-hidden relative select-none">
      <div 
        ref={containerRef}
        className="flex overflow-x-hidden w-full"
      >
        <div ref={firstGroupRef} className="flex flex-nowrap min-w-full">
          {companies.map((company, index) => (
            <div 
              key={`group1-${index}`} 
              className="flex-none mx-6 w-48 h-24 bg-white rounded-lg shadow flex items-center justify-center"
            >
              <div className="text-gray-400 font-semibold">{company}</div>
            </div>
          ))}
        </div>
        <div ref={secondGroupRef} className="flex flex-nowrap min-w-full"></div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
