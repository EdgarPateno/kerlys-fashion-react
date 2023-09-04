import React, { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/64e0406794cf5d49dc6b4563/1h85vn5mc';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkTo;