import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to that element
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // 100ms delay to ensure DOM is ready
      } else {
        // Retry once after a slightly longer delay if not found immediately (helpful for complex loading)
        setTimeout(() => {
          const el = document.getElementById(hash.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    } else {
      // If no hash, just scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
