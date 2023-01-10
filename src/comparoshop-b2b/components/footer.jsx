import * as styles from '../utils/tailwind.styles';
import logoMin from '../Assets/logo-min.svg';

const Footer = () => {
    const footerStyles = {
        backgroundColor: `${styles.colors.gray2}`,
    }

    return <>
        <div style={footerStyles} className={`flex flex-col justify-between text-[${styles.colors.black}]`}>
            <div className={`py-20 max-w-[1000px] w-full mx-auto flex justify-around  p-${styles.defaultPadding}`}>
                <div className={`w-[150px]`}>
                    <div className={`w-24 h-auto`}>
                        <img className={`w-full h-full`} src={logoMin} alt="logo min" />
                    </div>
                </div>
                <div className={`px-16 h-full flex-grow`}>
                    <h3 className={`font-bold text-lg text-[${styles.colors.black}]`}>Lien rapides</h3>
                    <div className={`flex justify-between mt-4`}>
                        <ul className={``}>
                            <li>Technologies</li>
                            <li>Partenaires</li>
                        </ul>

                        <ul className={``}>
                            <li>Temoignages</li>
                            <li>A propos</li>
                        </ul>
                        
                        <ul className={``}>
                            <li>Contacts</li>
                        </ul>
                    </div>
                </div>
                <div className={`w-[300px] pl-4`}>
                    <h3  className={`font-bold text-md text-[${styles.colors.black}]`}>Retrouvez-nous sur</h3>
                    <ul className={`flex items-center m-4 ml-0`}>
                        <li><span className={`py-3 px-5 mr-2 rounded-sm bg-[${styles.colors.orange}]`}>f</span></li>
                        <li><span className={`py-3 px-5 mr-2 rounded-sm bg-[${styles.colors.orange}]`}>tw</span></li>
                        <li><span className={`py-3 px-5 mr-2 rounded-sm bg-[${styles.colors.orange}]`}>in</span></li>
                    </ul>

                    <select className={`px-10 py-3 rounded-md`}>
                        <option>Français</option>
                        <option>Anglais</option>
                        <option>Arabe</option>
                    </select>
                </div>

                <hr />

            </div>
            <div className={`h-20 flex items-center justify-center text-center border-t border-[#0001]`}>
                <p>2022 - 2023 COMPAROSHOP, Tous droits reservés.</p>
            </div>
        </div>
    </>;
}

export default Footer;