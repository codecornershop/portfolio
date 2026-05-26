import type {Component} from 'solid-js' 
import {createSignal} from 'solid-js';
import './style.css'

const hour = new Date().getHours();
const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening"
const App: Component = () => {
  return (
    <div class="portfolio">
      {/*Hero Section*/}
      <header class="hero">
        <h1>{greeting}, I'm Dillon</h1>
        <p>I'm an aspiring full stack developer</p>
        <a 
          href="https://wa.me/27680483620?text=Hi%20Dillon%2C%20I%20saw%20your%20portfolio%20and%20I'd%20like%20to%20work%20with%20you" 
          class="cta-button"
          target="_blank"
          rel="noopener noreferrer">
        Let's work together</a>
      </header>

      {/*Services / What I offer*/}
      <section class="services">
        <h2>What I can build for you</h2>
        <div class="service-grid">
          <div class="service-card">
            <h3>Contact Pages</h3>
            <p>Simple, Professional pages that help customers reach you.</p>
          </div>
          <div class="service-card">
            <h3>Business Websites</h3>
            <p>Clean, responsive sites that look great on any device.</p>
          </div>
          <div class="service-card">
            <h3>Social Kit</h3>
            <p>Logo design and basic branded social media graphics.</p> 
          </div>
        </div>
      </section>
      <section class="projects">
        <h2>Projects</h2>
        <div class="project-list">
          <div class="project-item">
            <span class="project-name">Nails by Phondy</span>
            <span class="project-stack">SolidJS - TypeScript</span>
            <a href="https://codecornershop.github.io/nails-by-phondy" target="_blank" class="project-link"> Live </a>
          </div>
        </div>
      </section>

      <footer>
        <div id="contact" class="footer-content">
          <p>Dillon Daniels — 2026</p>
          <div class="footer-icons">
            <a href="https://github.com/codecornershop" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
            <a href="mailto:dillon.jason.daniels@gmail.com">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
