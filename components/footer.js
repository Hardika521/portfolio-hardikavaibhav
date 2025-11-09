
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: var(--secondary);
          color: white;
          padding: 3rem 2rem;
        }
        
        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-box {
          padding: 1rem;
        }
        
        .footer-box h3 {
          color: #4cc9f0;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-box h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 2px;
          background: #4cc9f0;
        }
        
        .footer-box p {
          margin: 0.5rem 0;
          font-size: 0.9rem;
        }
        
        .footer-box a {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-box a:hover {
          color: #4cc9f0;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          color: white;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          color: #4cc9f0;
          transform: translateY(-3px);
        }
        
        .footer-bottom {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        
        .copyright {
          font-size: 0.8rem;
          opacity: 0.8;
        }
        
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        li {
          margin-bottom: 0.5rem;
        }
        
        i {
          margin-right: 0.5rem;
          width: 20px;
          text-align: center;
        }
      </style>
      
      <footer>
        <div class="footer-container">
          <!-- About Section -->
          <div class="footer-box">
            <h3>About Me</h3>
            <h5>Thank you for visiting my personal portfolio website!</h5>
    <p>Connect with me over socials — let’s build something amazing together 💫</p>
          </div>
          
          <!-- Contact Info -->
          <div class="footer-box">
            <h3>Contact Info</h3>
            <p><i class="fas fa-phone-alt"></i> +91 7807784533</p>
            <p><i class="fas fa-envelope"></i> <a href="mailto:hardika.verma2004@gmail.com">hardika.verma2004@gmail.com</a></p>
            <p><i class="fas fa-map-marker-alt"></i> Shimla, Himachal Pradesh, India</p>
          </div>
          
          <!-- Quick Links -->
          <div class="footer-box">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <!-- Follow Me -->
          <div class="footer-box">
            <h3>Follow Me</h3>
            <div class="social-links">
              <a href="https://github.com/hardika-verma" target="_blank"><i class="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank"><i class="fab fa-linkedin"></i></a>
              <a href="https://twitter.com/yourhandle" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="https://instagram.com/yourhandle" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
            <p style="margin-top: 1rem;">Let's connect and collaborate!</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="copyright">© ${new Date().getFullYear()} Hardika Verma. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
