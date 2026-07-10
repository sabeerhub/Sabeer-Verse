/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Products from './components/Products';
import Technology from './components/Technology';
import WhySabeerVerse from './components/WhySabeerVerse';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-brand-blue selection:text-black">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Products />
        <Technology />
        <WhySabeerVerse />
        <SelectedWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
