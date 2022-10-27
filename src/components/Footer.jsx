import React from "react";

function Footer() {
  const date = new Date();
  const showYear = date.getFullYear();
  return (
  <footer> 
  <p>Copyrighted by AtharvAsole{showYear}</p> 
  </footer>
  )
}

export default Footer;
