class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white ;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          box-sizing: border-box;
        }
        .logo {
          color: var(--dark);
          font-weight: 700;
          font-size: 1.5rem;
          text-decoration: none;
        }
.nav-links {
          display: flex;
          gap: 2.4rem;
          flex-wrap: wrap;
          min-width: 0;
          justify-content: flex-end;
        }
        .nav-links a {
          color: var(--dark);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.2rem 1.3rem;
          white-space: nowrap;
        }
.nav-links a:hover {
          color: #4cc9f0;
        }
        .hire-btn {
          background: var(--primary);
          color: white;
          padding: 0.75rem 1.75rem;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-left: 1rem;
        }
        @media (max-width: 768px) {
          nav {
            padding: 1rem 1.25rem;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 0.5rem;
          }
          .logo {
            font-size: 1.25rem;
          }
          .nav-links {
            width: 100%;
            gap: 0.5rem 0.75rem;
            justify-content: flex-start;
          }
          .nav-links a {
            padding: 0.4rem 0.8rem;
            font-size: 0.95rem;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">Hardika
        Verma</a>
        <div class="nav-links">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#certificate">Certificate</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
