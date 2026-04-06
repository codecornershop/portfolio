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
        <a href="#contact" class="cta-button">Let's work together</a>
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

      {/*Contact section*/}
      <section id="contact" class="contact">
        <h2>Let's Build Something</h2>
        <p>I'm looking for business owners to work with</p>
        <div class="contact-info">
          <p>Email: <a href="mailto:dillon.jason.daniels@gmail.com" target="_blank">dillon.jason.daniels@gmail.com</a></p>
        </div>
      </section>

      <footer>
        <p>© 2026 Dillon Daniels</p>
      </footer>
    </div>
  );
};

export default App;
