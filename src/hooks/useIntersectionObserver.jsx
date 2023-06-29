import { useEffect } from "react";

const useIntersectionObserver = (domRef, threshold, callback) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, { threshold });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, [domRef, threshold, callback]);
};

export default useIntersectionObserver;