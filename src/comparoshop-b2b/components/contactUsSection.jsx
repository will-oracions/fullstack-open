import * as styles from '../utils/tailwind.styles';
import contactSecImage from '../Assets/Img/no-messages.png';

const contactUsStyles = {
    formCard: {
        backgroundColor: `${styles.colors.gray}`,
    },
    infoCard: {
        backgroundColor: `${styles.colors.white}`,
    }
};

const ContactUsSection = () => {

    return <>
        <div>
            <div style={contactUsStyles.formCard} className={`h-[500px]`}>
                <div>
                    <h3>Des questions ?</h3>
                    <h3>Faites-nous les savoir !</h3>
                </div>
            </div>

            <div style={contactUsStyles.infoCard} className={`h-[300px] flex items-center mx-6`}>
                <div className={`flex justify-around items-center text-[${styles.colors.white}] w-full max-w-[900px] bg-[${styles.colors.black}] h-48 rounded-xl`}>
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
        </div>
    </>;
}

export default ContactUsSection;