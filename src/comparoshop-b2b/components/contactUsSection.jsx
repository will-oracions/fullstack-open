import * as styles from '../utils/tailwind.styles';
import ContactUsSectionCardInfo from './ContactUsSectionCardInfo';

const contactUsStyles = {
    backgroundColor: `${styles.colors.gray}`,
};

const ContactUsSection = () => {

    return <>
        <div>
            <div style={contactUsStyles} className={`flex flex-col justify-between min-h-[500px] py-${styles.defaultPadding}`}>
                <div>
                    <h3 className={`text-2xl md:text-4xl font-bold text-center`}>Des questions ?</h3>
                    <h3 className={`text-2xl md:text-4xl font-bold text-center`}>Faites-nous les savoir !</h3>
                </div>

                <div>
                    <form >
                        <div className={`w-full max-w-md md:max-w-[${styles.sizes.autoMargin}] mx-auto flex flex-col md:flex-row  md:justify-between py-10`}>
                            <div className={`flex-1 flex flex-col mx-5 md:mx-2`}>
                                <input className={`h-12 mb-3 rounded-md outline-none px-3 text-[${styles.colors.orange}] bg-transparent border border-[${styles.colors.gray2} focus:bg-[${styles.colors.gray2}]`} type="text" placeholder="Votre nom *" />
                                <input className={`h-12 mb-3 rounded-md outline-none px-3 text-[${styles.colors.orange}] bg-transparent border border-[${styles.colors.gray2} focus:bg-[${styles.colors.gray2}]`} type="text" placeholder="Votre nom *" />
                                <input className={`h-12 mb-5 rounded-md outline-none px-3 text-[${styles.colors.orange}] bg-transparent border border-[${styles.colors.gray2} focus:bg-[${styles.colors.gray2}]`} type="text" placeholder="Object du message *" />

                                <button className={`hidden md:inline-block ${styles.btnOutlineFilled} w-full rounded-lg`}>Envoyer</button>

                            </div>
                            <div className={`flex-1 mx-5 md:mx-2`}>
                                <textarea className={`mb-4 w-full h-60 resize-none outline-none px-4 py-2 text-[${styles.colors.orange}] rounded-md focus:bg-[${styles.colors.gray2}] bg-transparent  bg-transparent border border-[${styles.colors.gray2} `} placeholder="Votre message *"></textarea>
                            </div>
                            <div className={`md:hidden mx-5 md:mx-2`}>
                                <button className={`${styles.btnOutlineFilled} w-full rounded-lg`}>Envoyer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <ContactUsSectionCardInfo />
        </div>
    </>;
}

export default ContactUsSection;