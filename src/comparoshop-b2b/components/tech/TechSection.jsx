// import techBg from '../../Assets/SVG/Pattern02.svg';
import * as styles from '../../utils/tailwind.styles';
import fakeImage from '../../Assets/fakeimage.png';

const TechSection = () => {
    const techSectionStyles = {
        background: `${styles.colors.blue}`,
    }

    return <>
        <div style={techSectionStyles} className={`p-${styles.defaultPadding} h-[600px]`}>
            <div className={`flex justify-around items-center`}>
                <div>
                    <div className={`relative w-[400px] h-[250px] bg-white rounded-3xl`}>
                        <div className={`absolute h-24 h-24 rounded-full -top-10 -left-10`}>
                            <img className={`w-full h-full`} src={fakeImage} alt="" />
                        </div>

                    </div>
                </div>
                <div>
                    <h3>Technologies</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sint aperiam, pariatur commodi eligendi laborum reprehenderit excepturi quod magnam ipsam expedita ipsa provident et cum, deserunt earum omnis, accusantium dolor?</p>
                </div>
            </div>
        </div>
    </>;
}

export default TechSection;