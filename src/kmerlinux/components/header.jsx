import languageFlagImage from '../assets/france-flag.svg';
import kmerlinuxLogo from '../assets/kmerlinux-logo.png';

function Header() {
    return <>
        <div className="bg-[#2A3E52] text-white h-[50px] flex justify-between items-center">
            <div>
                <img src={kmerlinuxLogo} alt="language flag" /> 
            </div>
            <div className="flex justify-between items-center">
                <nav>
                    <ul className="flex justify-between items-center">
                        <li className="text-green-500">Home</li>
                        <li>About</li>
                        <li>Trainings</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                <div>
                    <img src={languageFlagImage} alt="language flag" /> 
                </div>
            </div>
        </div>
    </>;
}

export default Header;