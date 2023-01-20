import languageFlagImage from '../assets/france-flag.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

function Header() {
    return <>

        <div className="bg-[#2A3E52]">
            <div className="max-w-screen-2xl mx-auto text-white h-[60px] flex justify-between items-center px-16">
                <div className="text-green-500 font-semibold text-xl">
                    {/* <img className="h-6" src={kmerlinuxLogo} alt="language flag" />  */}
                    <span>K</span><span className="text-white">merlinux</span><span>Academy</span>
                </div>
                <div className="flex justify-between items-center">
                    <nav className="mr-16">
                        <ul className="flex justify-between items-center">
                            <li className="py-3 border-t-4 border-t-green-500 text-green-500 text-lg px-2 cursor-pointer">Home</li>
                            <li className="text-lg px-2 cursor-pointer hover:text-green-500">About</li>
                            <li className="text-lg px-2 cursor-pointer hover:text-green-500">Trainings</li>
                            <li className="text-lg px-2 cursor-pointer hover:text-green-500">Services</li>
                            <li className="text-lg px-2 cursor-pointer hover:text-green-500">Contact</li>
                        </ul>
                    </nav>

                    <div className="flex justify-between items-center cursor-pointer">
                        <img className="w-6 h-auto" src={languageFlagImage} alt="language flag" /> 
                        <img className="w-3 h-auto ml-3" src={arrowDown} alt="arrow down" /> 
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Header;