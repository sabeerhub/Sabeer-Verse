/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Team from './components/Team';
import Labs from './components/Labs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-sabeer-bg text-slate-900 selection:bg-sabeer-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Team />
        <Labs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
