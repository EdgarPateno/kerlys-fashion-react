import React, { useEffect, useState } from 'react';

const CookieConsent = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplay(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const acceptCookies = () => {
    setCookie("cookiesAccepted", "true", 365);
    hideCookieConsent();
  };

  const declineCookies = () => {
    setCookie("cookiesAccepted", "false", 365);
    hideCookieConsent();
  };

  const hideCookieConsent = () => {
    setDisplay(false);
  };

  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split(";").map(cookie => cookie.trim());
    for (const cookie of cookies) {
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  };

  const hasAcceptedCookies = () => {
    return getCookie("cookiesAccepted") === "true";
  };

  if (!display) {
    return null;
  }

  return (
    <div id="cookieConsent" className="cookie-consent">
      <div className="mb-2">This website uses cookies to ensure you get the best experience on our website.</div>
      <div>
        <button onClick={acceptCookies} className="btn btn-primary">ACCEPT</button>
        <button onClick={declineCookies} className="btn btn-secondary">DECLINE</button>
      </div>
    </div>
  );
};

export default CookieConsent;