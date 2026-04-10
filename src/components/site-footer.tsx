import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4 className="footer-heading">Menu</h4>
          <nav className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/code">Code</Link>
            <Link href="/work/all">Work</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <nav className="footer-nav">
            <Link href="/services/3d-cgi-animations">3D CGI Animations</Link>
            <Link href="/services/motion-graphics-animations">Motion Design &amp; Animations</Link>
          </nav>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <div className="footer-nav">
            <a href="mailto:contact@stab.agency">contact@stab.agency</a>
          </div>
        </div>
        <div className="footer-col footer-col-end">
          <div className="footer-langs">
            <button className="lang-btn active">EN</button>
            <button className="lang-btn">IT</button>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
      <div className="footer-wordmark">
        <Image
          src="/anubi-assets/_next/static/media/anubi-footer.9e2d2407.svg"
          alt="Anubi"
          width={280}
          height={60}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </footer>
  );
}
