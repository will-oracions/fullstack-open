import BannerImage from '../assets/banner-image.svg';
import googleLogo from '../assets/google-logo.svg';
import linkedinLogo from '../assets/linkedin-logo.svg';

function Banner() {
    return <>
        <div className="w-full relative text-white">
            <img className="w-full h-auto" src={BannerImage} alt="Work flow" />

            <div className="max-w-screen-lg text-lg text-center mx-auto absolute top-0 bottom-0 left-0 right-0 border border-yellow-500 flex flex-col justify-between items-center py-8">
                <h1 className="text-5xl font-bold">L’intelligence Artificielle, Machine Learning, Deep Learnin</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque vel dicta ea a voluptatem repudiandae officia veniam quod quo. Sed aliquam nam quia repellat, et soluta! Culpa, illum voluptate.</p>
    
                <div className="flex text-[#566573]">
                    <button className="mx-1 flex justify-center items-center bg-white py-2 px-4 rounded-full hover:bg-transparent border border-transparent hover:text-white hover:border-white"><img className="mr-2" src={googleLogo} alt="google Logo" /> Join us with Google</button>
                    <button className="mx-1 flex justify-center items-center text-white bg-[#2ECC71] py-2 px-4 rounded-full hover:bg-transparent border border-transparent hover:text-white hover:border-white"><img className="mr-2" src={linkedinLogo} alt="google Logo" /> Join us with Linkedin</button>
                </div>
                
                <div>
                    <span className="inline-block mx-2 bg-white w-4 h-4 rounded-full"></span>
                    <span className="inline-block mx-2bg-transparent border border-white w-4 h-4 rounded-full"></span>
                    <span className="inline-block mx-2 bg-white w-4 h-4 rounded-full"></span>
                    <span className="inline-block mx-2 bg-white w-4 h-4 rounded-full"></span>
                </div>
            </div>
        </div>
    </>;
}

export default Banner;