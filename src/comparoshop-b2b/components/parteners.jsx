import logo1 from '../Assets/Logo/image24.png';
import logo2 from '../Assets/Logo/image25.png';
import logo3 from '../Assets/Logo/image26.png';
import logo4 from '../Assets/Logo/image27.png';
import logo5 from '../Assets/Logo/image28.png';
import logo6 from '../Assets/Logo/image29.png';
import logo7 from '../Assets/Logo/image30.png';
import * as styles from '../utils/tailwind.styles';


const PartenersSection = () => {
    return <>
        <div className="h-[350px]">
            <div className={`${styles.container}`}>
                <h3>Il nous font confiance</h3>

                <div className={`bg-green-400`}>

                    <div className={`flex`}>
                        <div className={`h-16 mr-16`}>
                            <img className={`h-full w-auto`} src={logo1} alt="" />
                        </div>
                        <div className={`h-16 mr-16`}>
                            <img className={`h-full w-auto`} src={logo2} alt="" />
                        </div>
                        <div className={`h-16 mr-16`}>
                            <img className={`h-full w-auto`} src={logo3} alt="" />
                        </div>
                        <div className={`h-16 mr-16`}>
                            <img className={`h-full w-auto`} src={logo4} alt="" />
                        </div>
                        <div className={`h-16 mr-16`}>
                            <img className={`h-full w-auto`} src={logo5} alt="" />
                        </div>
                        <div className={`h-16 mr-16`}>
                            <img className={`h-full w-auto`} src={logo6} alt="" />
                        </div>
                        <div className={`h-16 mr-16`}>
                            <img className={`h-full w-auto`} src={logo7} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default PartenersSection;