import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <p className="site-footer__tagline">
          © {new Date().getFullYear()} Whimsy Reads. All rights reserved.
        </p>
        <p className="site-footer__legal">
          This site is for book lovers only. No actual spells were cast in the
          making of this club.
        </p>
        <div className="site-footer__links">
          <a
            href="mailto:support@whimsyreads.com"
            className="site-footer__link"
          >
            Contact Us
          </a>
          <span>•</span>
          <a href="#" className="site-footer__link">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="site-footer__link">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
