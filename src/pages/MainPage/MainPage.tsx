import { Hero } from 'components/Hero/Hero';
import { HowItWorks } from 'components/HowItWorks/HowItWorks';
import { PopularBooks } from 'components/PopularBooks/PopularBooks';
import { WhatBookix } from 'components/WhatBookix/WhatBookix';

const MainPage = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhatBookix />
      <PopularBooks />
    </main>
  );
};
export default MainPage;
