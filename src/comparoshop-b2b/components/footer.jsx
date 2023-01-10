import * as styles from '../utils/tailwind.styles';
import logoMin from '../Assets/logo-min.svg';

const Footer = () => {
    const footerStyles = {
        backgroundColor: `${styles.colors.gray2}`,
    }

    return <>
        <div style={footerStyles} className={`flex flex-col justify-between text-[${styles.colors.black}]`}>
            <div className={`py-20 max-w-[1000px] w-full mx-auto flex flex-col items-center md:items-start md:flex-row md:justify-around  p-${styles.defaultPadding}`}>
                <div className={`w-[300px] hidden md:flex justify-end items-center`}>
                    <div className={`cursor-pointer w-24 h-auto text-end`}>
                        <img className={`w-full h-full`} src={logoMin} alt="logo min" />
                    </div>
                </div>
                <div className={`md:px-16 w-full max-w-[300px] mb-8 md:max-w-full h-full md:flex-grow`}>
                    <h3 className={`text-center md:text-start font-bold text-lg text-[${styles.colors.black}]`}>Lien rapides</h3>
                    <div className={`flex flex-col md:flex-row items-center md:items-start md:justify-between mt-4`}>
                        <ul className={`text-center md:text-start`}>
                            <li className={`pb-2 cursor-pointer hover:underline`}>Technologies</li>
                            <li className={`pb-2 cursor-pointer hover:underline`}>Partenaires</li>
                        </ul>

                        <ul className={`text-center md:text-start`}>
                            <li className={`pb-2 cursor-pointer hover:underline`}>Temoignages</li>
                            <li className={`pb-2 cursor-pointer hover:underline`}>A propos</li>
                        </ul>
                        
                        <ul className={`text-center md:text-start`}>
                            <li className={`cursor-pointer hover:underline`}>Contacts</li>
                        </ul>
                    </div>
                </div>
                <div className={`w-full max-w-[300px] md:pl-4 text-center md:text-start`}>
                    <h3  className={`text-center md:text-start font-bold text-md text-[${styles.colors.black}]`}>Retrouvez-nous sur</h3>
                    <ul className={`flex justify-center md:justify-start items-center m-1 mt-4 md:m-4 md:ml-0`}>
                        <li><span className={`block cursor-pointer py-1 px-3 md:py-3 md:px-5 mr-2 rounded-sm bg-[${styles.colors.orange}]`}>f</span></li>
                        <li><span className={`block cursor-pointer py-1 px-3 md:py-3 md:px-5 mr-2 rounded-sm bg-[${styles.colors.orange}]`}>tw</span></li>
                        <li><span className={`block cursor-pointer py-1 px-3 md:py-3 md:px-5 mr-2 rounded-sm bg-[${styles.colors.orange}]`}>in</span></li>
                    </ul>

                    <select className={`px-10 py-2 rounded-md my-2 bg-transparent border border-[${styles.colors.orange}] outline-none`}>
                        <option>Français</option>
                        <option>Anglais</option>
                        <option>Arabe</option>
                    </select>
                </div>

                <hr />

            </div>
            <div className={`text-sm md:text-md h-20 flex items-center justify-center text-center border-t border-[#0001]`}>
                <p>2022 - 2023 COMPAROSHOP, Tous droits reservés.</p>
            </div>
        </div>
    </>;
}

export default Footer;