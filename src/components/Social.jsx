import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/brijrajsingh27" },
  { Social: <FaTwitter />, link: "https://twitter.com/brij_27" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/brijrajsingh27" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/brijrajsingh27" },
  { Social: <FaPinterestP />, link: "https://www.pinterest.com/brijrajsingh271" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
