import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('no-smooth-scroll');
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.classList.remove('no-smooth-scroll');
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
