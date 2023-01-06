import * as styles from '../utils/tailwind.styles';

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

            <div style={contactUsStyles.infoCard} className={`h-[300px]`}>

            </div>
        </div>
    </>;
}

export default ContactUsSection;