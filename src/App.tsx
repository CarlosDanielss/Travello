import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Home } from './components/home/Home';
import { Offers } from './components/offers/Offers';
import { Discover } from './components/discover/Discover';
import { Destinations } from './components/destinations/Destinations';
import { ReadBefore } from './components/readBefore/ReadBefore';
import { WhatCustomers } from './components/whatCustomers/WhatCustomers';
import { RegisterNow } from './components/registerNow/RegisterNow';
import { Footer } from './components/footer/Footer';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <Home />
      <Offers />
      <Discover />
      <Destinations />
      <ReadBefore />
      <WhatCustomers />
      <RegisterNow />
      <Footer />
    </main>
  );
}

export default App;
