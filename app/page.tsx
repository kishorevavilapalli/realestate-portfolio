import Navbar            from '@/components/layout/Navbar';
import Footer            from '@/components/layout/Footer';
import Hero              from '@/components/sections/Hero';
import Stats             from '@/components/sections/Stats';
import FeaturedListings  from '@/components/sections/FeaturedListings';
import About             from '@/components/sections/About';
import Services          from '@/components/sections/Services';
import Testimonials      from '@/components/sections/Testimonials';
import Contact           from '@/components/sections/Contact';
import clientConfig      from '@/config/client.config';

export default function Home() {
  const { agent, stats, listings, testimonials, services } = clientConfig;
  return (
    <>
      <Navbar  agent={agent} />
      <main>
        <Hero         agent={agent} />
        <Stats        items={stats} />
        <FeaturedListings listings={listings} />
        <About        agent={agent} />
        <Services     services={services} />
        <Testimonials testimonials={testimonials} />
        <Contact      agent={agent} />
      </main>
      <Footer agent={agent} />
    </>
  );
}
