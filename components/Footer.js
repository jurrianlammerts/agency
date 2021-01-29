import Link from "next/link";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Linkedin from "./icons/Linkedin";
import IconButton from "./IconButton";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link href="/">
              <a>
                <span>LAMB</span>
                <span>DIGITAL</span>
              </a>
            </Link>
          </div>
          <div className="footer-socials">
            <IconButton href="https://www.facebook.com/">
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com/">
              <Twitter />
            </IconButton>
            <IconButton href="https://www.linkedin.com/">
              <Linkedin />
            </IconButton>
            <IconButton href="https://www.instagram.com/">
              <Instagram />
            </IconButton>
          </div>
          <Link href="/">Terms | Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
