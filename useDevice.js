// React Device Detection Hook v1.0
// https://github.com/JulianStoev/React-Hook-DeviceDetection

import { useEffect, useState } from "react";

export default function useDevice() {

  const [device, setDevice] = useState({
    isMobile: false,
    isDesktop: false,
    isTablet: false
  });

  useEffect(() => {
    const resize = () => {
      const windowWidth = window.innerWidth;
      switch(true) {
        case (device.isDesktop === false && windowWidth >= 1024):
          setDevice({isDesktop: true, isMobile: false, isTablet: false});
          break;
  
        case (device.isTablet === false && windowWidth >= 768 && windowWidth <= 1024):
          setDevice({isTablet: true, isDesktop: false, isMobile: false});
          break;
  
        case (device.isMobile === false && windowWidth < 768):
          setDevice({isMobile: true, isTablet: false, isDesktop: false});
          break;
  
        default:
      }
    };

    resize();

    let lock = false;
    const handle = () => {
      if (lock) return;
      lock = true;
      resize();
      setTimeout(() => {
        lock = false;
        resize();
      }, 300);
    };

    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, [device]);

  return {
    device
  }
}
