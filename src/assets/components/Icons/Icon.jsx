import React from "react";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import arrowIcon from "../../images/icon-share.svg";

const icons = {
  facebook: facebookIcon,
  twitter: twitterIcon,
  pinterest: pinterestIcon,
  arrow: arrowIcon,
};

const Icon = ({ name, className, onClick }) => {
  const icon = icons[name];
  if (!icon) return null;

  return <img src={icon} alt={name} className={className} onClick={onClick} />;
};

export default Icon;
