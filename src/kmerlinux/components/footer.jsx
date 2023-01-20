import facebookLogo from '../assets/icons/facebook.svg'
import linkedinLogo from '../assets/icons/linkedin.svg'
import twitterLogo from '../assets/icons/twitter.svg'
import kmerlinuxLogo from '../assets/kmerlinux-logo1.svg';
import africa from '../assets/africa.svg';
import arrowRight from '../assets/icons/arrow-right.svg';

function Footer() {
    return <>
        <div className="bg-[#2A3E52]">
            <div className="max-w-screen-2xl mx-auto relative text-white h-[582px] flex justify-between items-start p-24">
                <img className="absolute left-0 right-0 z-10" src={africa} alt="Africa" />
                <div className="relative z-20">
                    <img className="h-[85px] w-auto" src={kmerlinuxLogo} alt="Kmerlinux logo" />
                    <ul className="flex my-8">
                        <li><span className="m-2 w-[54px] h-[54px] rounded-full bg-[#C6C6C6] flex justify-center items-center"><img className="h-[37px] w-auto" src={facebookLogo} alt="Facebook logo" /></span></li>
                        <li><span className="m-2 w-[54px] h-[54px] rounded-full bg-[#C6C6C6] flex justify-center items-center"><img className="h-[37px] w-auto" src={linkedinLogo} alt="Linkedin logo" /></span></li>
                        <li><span className="m-2 w-[54px] h-[54px] rounded-full bg-[#C6C6C6] flex justify-center items-center"><img className="h-[37px] w-auto" src={twitterLogo} alt="Twitter logo" /></span></li>
                    </ul>

                    <p className="text-lg">Washington, California</p>
                </div>


                <div className="ml-24 mt-2 flex justify-between items-start flex-grow">

                    <div>
                        <h3 className="text-xl mb-14">Nos Services</h3>
                        <ul className="font-light">
                            <li className="flex mb-4 text-lg hover:underline cursor-pointer"><img src={arrowRight} alt="arrow left icon" /><span className="capitalize">IT training</span></li>
                            <li className="flex mb-4 text-lg hover:underline cursor-pointer"><img src={arrowRight} alt="arrow left icon" /><span className="capitalize">Work support</span></li>
                            <li className="flex mb-4 text-lg hover:underline cursor-pointer"><img src={arrowRight} alt="arrow left icon" /><span className="capitalize">It Consulting</span></li>
                            <li className="flex mb-4 text-lg hover:underline cursor-pointer"><img src={arrowRight} alt="arrow left icon" /><span className="capitalize">Software Development</span></li>
                        </ul>
                    </div>



                    <div>
                        <h3 className="text-xl mb-14">Rapid Links</h3>
                        <ul className="font-light">
                            <li className="flex mb-4 text-lg hover:underline cursor-pointer"><img src={arrowRight} alt="arrow left icon" /><span className="capitalize">Blog</span></li>
                            <li className="flex mb-4 text-lg hover:underline cursor-pointer"><img src={arrowRight} alt="arrow left icon" /><span className="capitalize">Contact</span></li>
                            <li className="flex mb-4 text-lg hover:underline cursor-pointer"><img src={arrowRight} alt="arrow left icon" /><span className="capitalize">Forum</span></li>
                        </ul>
                    </div>



                    <div>
                        <h3 className="text-xl mb-14">Support</h3>
                        <ul className="font-light">
                            <li className="flex mb-4 text-lg hover:underline cursor-pointer"><img src={arrowRight} alt="arrow left icon" /><span className="capitalize">Usage</span></li>
                            <li className="flex mb-4 text-lg hover:underline cursor-pointer"><img src={arrowRight} alt="arrow left icon" /><span className="capitalize">Teams & Conditions</span></li>
                            <li className="flex mb-4 text-lg hover:underline cursor-pointer"><img src={arrowRight} alt="arrow left icon" /><span className="capitalize">Privacy</span></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="relative z-20 bg-[#283949] text-white flex justify-center items-center h-[77px]">
                <p>Copy right © 2023 - All right reserved</p>
            </div>
        </div>
    </>;
}

export default Footer;