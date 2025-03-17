
import { useEffect, useRef } from "react";

const PartnerCarousel = () => {
  // Tech company logos replaced with actual image URLs from Unsplash
  const companyLogos = [
    {
      name: "Google",
      imgUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    },
    {
      name: "Apple",
      imgUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    },
    {
      name: "Microsoft",
      imgUrl: "https://images.unsplash.com/photo-1583339793403-3d9b001b6008?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    },
    {
      name: "Amazon",
      imgUrl: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    },
    {
      name: "IBM",
      imgUrl: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    },
    {
      name: "Oracle",
      imgUrl: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    },
    {
      name: "Intel",
      imgUrl: "https://images.unsplash.com/photo-1551515250-47f5bb9b6ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    },
    {
      name: "Samsung",
      imgUrl: "https://images.unsplash.com/photo-1583508805133-8fd09eee9c4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    },
    {
      name: "Cisco",
      imgUrl: "https://images.unsplash.com/photo-1631303584812-bd33e6490d8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    },
    {
      name: "Adobe",
      imgUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    },
    {
      name: "Salesforce",
      imgUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    },
    {
      name: "Nvidia",
      imgUrl: "https://images.unsplash.com/photo-1649180556628-9ba704115795?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80"
    }
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
          {companyLogos.map((company, index) => (
            <div 
              key={`group1-${index}`} 
              className="flex-none mx-6 w-48 h-24 bg-white rounded-lg shadow flex items-center justify-center p-4"
            >
              <img 
                src={company.imgUrl} 
                alt={`${company.name} logo`} 
                className="max-w-full max-h-full object-contain" 
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
