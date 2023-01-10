import contactSecImage from '../Assets/Img/no-messages.png';
import * as styles from '../utils/tailwind.styles';

const contactUsStylesCardInfo = {
    backgroundColor: `${styles.colors.white}`,
};

const ContactUsSectionCardInfo = () => {
    return <>
        <div style={contactUsStylesCardInfo} className={`h-[300px] flex items-center mx-6`}>
                <div className={`flex justify-around items-center text-[${styles.colors.white}] w-full max-w-[${styles.sizes.autoMargin}] mx-auto bg-[${styles.colors.black}] h-48 rounded-xl`}>
                    <div className={`hidden md:block h-full py-4`}>
                        <img className={`w-auto h-full`} src={contactSecImage} alt="" />
                    </div>
                    <div>
                        <ul>
                            <li className={`pb-4`}>
                                <span>Icon </span>
                                <span>00237 6 XX XX XX</span>
                            </li>
                            <li className={`pb-4`}>
                                <span>Icon </span>
                                <span>Douala, Cameroun</span>
                            </li>
                            <li>
                                <span>Icon </span>
                                <span>Contact@comparoshop.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </>;
}

export default ContactUsSectionCardInfo;