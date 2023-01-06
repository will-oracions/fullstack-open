import React from 'react';
import bannerPoster from '../Assets/Img/image01.jpg';

const Home = () => {
    return <div id="page" className="max-w-screen-2xl mx-auto">
			<header>

				<div className="flex justify-between items-center bg-[#211121] text-white px-16 h-12">
					<div className="flex">
						<div className="mr-10">
							<span>icon</span>
							<span>contact@comparoshop.com</span>
						</div>

						<div>
							<span>icon</span>
							<span>00237 6 XX XX XX</span>
						</div>
					</div>

					<div className="flex">
						<div className="mr-5">
							<span>f</span>
							<span>in</span>
							<span>tw</span>
						</div>
						<div>
							<select>
								<option>Francais</option>
								<option>Anglais</option>
								<option>Arabe</option>
							</select>
						</div>
					</div>
				</div>


				<div className="px-16 flex justify-between items-center h-20 shadow-md">
					<div>
						Logo Comparoshop
						{/* <img src={logo} alt="comparoshop logo" /> */}
					</div>

					<nav className="flex items-center text-sm">
						<ul className="flex mr-4">
							<li className="mr-2">Technologies</li>
							<li className="mr-2">Partenaires</li>
							<li className="mr-2">Temoignages</li>
							<li className="mr-2">A propos</li>
							<li className="mr-2">Contacts</li>
						</ul>

						<button className="border-2 border-[#ff9900] text-[#ff9900] font-bold px-5 py-2 rounded-full">Se connecter</button>
					</nav>
				</div>
			</header>

			<div className="flex items-center">
				<div class="px-16 flex-1 max-w-[500px]">
					<h2 className="text-3xl font-bold">
						<span className="text-[#0064b0]">Automatiser</span> et <span  className="text-[#0064b0]">optimiser</span> vos processus de publication
					</h2>

					<p className="text-gray-400 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sit quae, itaque doloremque provident eum ea cupiditate rerum ab </p>
					
					<button className="bg-[#ff9900] text-white font-bold px-6 py-3 rounded-full">Nous joundre</button>
				</div>

				<div className="flex-1 bg-[#fff1db] h-[35rem] flex items-center">
					<div className="px-8 relative w-full h-full">
						<div className="absolute top-[calc(50%-4rem)] left-[calc(50%-4rem)] bg-[#ff9900] text-white text-xl w-24 h-24 opacity-80 rounded-full flex items-center justify-center">
							<span>P</span>
						</div>

						<video className="w-full h-full" poster={bannerPoster}></video>
					</div>
				</div>
			</div>
    </div>
}

export default Home;