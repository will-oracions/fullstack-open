import bannerPoster from '../Assets/Img/image01.jpg';
import * as styles from '../utils/tailwind.styles';


const Banner = () => {
    return <div>
			<div className="flex items-center">
				<div class="px-16 flex-1 max-w-[500px]">
					<h2 className="text-3xl font-bold">
						<span className="text-[#0064b0]">Automatiser</span> et <span  className="text-[#0064b0]">optimiser</span> vos processus de publication
					</h2>

					<p className="text-gray-400 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sit quae, itaque doloremque provident eum ea cupiditate rerum ab </p>
					
					<button className={styles.btnOutlineFilled}>Nous joundre</button>
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

export default Banner;