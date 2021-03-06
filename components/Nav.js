import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/approach">Approach</Link>
              </li>
              <li>
                <Link href="/cases">Cases</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">
                  <Link href="/contact">Email</Link>
                </li>
                <li className="nav-info-label">
                  <Link href="/contact">Get in touch with us</Link>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>Rotterdam</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+31 678 564 534</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Privacy</li>
                <li>Privacy and cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
