import Link from 'next/link';
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link href="/">
              <a>
                <span>
                  LAMB
              </span>
                <span>
                  DIGITAL
              </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
