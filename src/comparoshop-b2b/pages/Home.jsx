import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const Home = () => {
    return <div id="page" className="max-w-screen-2xl mx-auto">
			<header>
				<Topbar />
				<Navbar />
			</header>
			<Banner />
    </div>
}

export default Home;