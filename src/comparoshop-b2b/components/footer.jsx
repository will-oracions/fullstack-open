import * as styles from '../utils/tailwind.styles';

const Footer = () => {
    const footerStyles = {
        backgroundColor: `${styles.colors.gray2}`,
    }

    return <>
        <div style={footerStyles} className={`h-[400px] flex flex-col justify-between`}>
            <div className={`flex justify-around  p-${styles.defaultPadding}`}>
                <div className={`w-[300px]`}>
                    Logo
                </div>
                <div className={`px-16 bg-green-500 flex-grow`}>
                    <h3 className={`font-bold`}>Lien rapides</h3>
                    <ul className={`py-8 h-10  border border-red-500`}>
                        <li>Technologies</li>
                        <li>Partenaires</li>
                        <li>Temoignages</li>
                        <li>A propos</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div className={`w-[300px] pl-4`}>
                    <h3>Retrouvez-nous sur</h3>
                    <ul className={`flex items-center m-4 ml-0`}>
                        <li><span className={`py-3 px-5 mr-2 rounded-sm bg-[${styles.colors.orange}]`}>f</span></li>
                        <li><span className={`py-3 px-5 mr-2 rounded-sm bg-[${styles.colors.orange}]`}>tw</span></li>
                        <li><span className={`py-3 px-5 mr-2 rounded-sm bg-[${styles.colors.orange}]`}>in</span></li>
                    </ul>

                    <select>
                        <option>Français</option>
                        <option>Anglais</option>
                        <option>Arabe</option>
                    </select>
                </div>

                <hr />

            </div>
            <div className={`h-16 flex items-center justify-center text-center border-t border-[#0001]`}>
                <p>2022 - 2023 COMPAROSHOP, Tous droits reservés.</p>
            </div>
        </div>
    </>;
}

export default Footer;