import React from "react";

function SocialMedia({ github,linkedin }) {
  return (
    <div>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );}

export default SocialMedia;
