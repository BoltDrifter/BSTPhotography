import './AppBarComp.css';

function AppBarComp() {
  return (
    <nav className="sidebar-nav">
      <div className="nav-brand">
        <span className="brand-initials">BST</span>
        <span className="brand-divider"></span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#hero" className="nav-link">
            <span className="nav-number">01</span>
            <span className="nav-label">Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#gallery" className="nav-link">
            <span className="nav-number">02</span>
            <span className="nav-label">Gallery</span>
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            <span className="nav-number">03</span>
            <span className="nav-label">About</span>
          </a>
        </li>
      </ul>

      <div className="nav-social">
        <a
          href="https://www.instagram.com/bst.photography_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="Instagram"
        >
          IG
        </a>
        <a
          href="https://www.linkedin.com/in/baldeep-singh-t-606348266/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="LinkedIn"
        >
          IN
        </a>
        <a
          href="https://github.com/BoltDrifter"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="Github"
        >
          GH
        </a>
      </div>

      <div className="nav-copyright">
        <span className="copyright-text">© 2025</span>
      </div>
    </nav>
  );
}

export default AppBarComp;
