import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import TechSection from '../components/tech/TechSection';
import DiscoverSection from '../components/discover';
import TestemoniesSection from '../components/testemonies';
import AboutUsSection from '../components/aboutUs';
import ContactUsSection from '../components/contactUsSection';
import Footer from '../components/footer';
import PartenersSection from '../components/parteners';

const Home = () => {
	// className="max-w-screen-2xl mx-auto"
    return <div id="page" >
			<header>
				<Topbar />
				<Navbar />
			</header>
			
			<Banner />
			<TechSection />
			<DiscoverSection />
			<PartenersSection />
			<TestemoniesSection />
			<AboutUsSection />
			<ContactUsSection />
			<Footer />
    </div>
}

export default Home;