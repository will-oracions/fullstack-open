import computerImage from '../Assets/Group600.png';
import * as styles from '../utils/tailwind.styles';
import image1 from '../Assets/fake-cursor.png';
import image2 from '../Assets/fake-searcher.png'; 
import image3 from '../Assets/fake-star.png';

const AboutUsSection = () => {
    return <>
    <div className={`pt-20`}>
        <div className={`${styles.container} min-h-[750px]`}>
            <div className={`w-full max-w-[${styles.sizes.autoMargin}] mx-auto flex flex-col md:flex-row justify-between items-center px-3`}>
                <div>
                    <h2 className={`block md:hidden text-4xl font-bold mb-4 text-[${styles.colors.black}] text-center`}>Qui<br /> sommes nous ?</h2>

                    <div className={`w-full md:w-[400px] mb-5`}>
                        <img src={computerImage} alt="" />
                    </div>
                </div>
                
                <div className={`ml-4`}>
                    <h2 className={`hidden md:block text-4xl font-bold mb-4 text-[${styles.colors.black}]`}>Qui<br /> sommes nous ?</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum velit vero libero in animi, minima quis! Ducimus a asperiores adipisci error. Excepturi quas iste repudiandae tenetur ad possimus dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque provident quidem ea ex repudiandae dicta qui alias impedit nisi? Aspernatur iure repellat sapiente ad est maxime quae, perspiciatis impedit.</p>
                </div>
            </div>

            <div className={`flex flex-col md:flex-row max-w-[${styles.sizes.autoMargin}] mx-auto text-center mt-${styles.defaultPadding}`}>

                <div className={`mb-4`}>
                    <div className={`flex items-center justify-center h-10`}>
                        <img src={image1} alt="image1" /> 
                    </div>
                    <div className={`my-4`}>
                        <div className={`text-2xl text-[${styles.colors.orange}] font-bold`}>+15000</div>
                        <div className={`text-lg text-[${styles.colors.black}] font-bold`}>Visites mensuelles</div>
                        <p className={`px-4 text-[${styles.colors.blackLight}] font-light mt-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi dolorum maiores cumque? Minus perspiciatis veritatis</p>
                    </div>
                </div>

                <div className={`mb-4`}>
                    <div className={`flex items-center justify-center h-10`}>
                        <img src={image2} alt="image2" /> 
                    </div>
                    <div className={`my-4`}>
                        <div className={`text-2xl text-[${styles.colors.orange}] font-bold`}>+22000</div>
                        <div className={`text-lg text-[${styles.colors.black}] font-bold`}>Recherche Produits</div>
                        <p className={`px-4 text-[${styles.colors.blackLight}] font-light mt-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi dolorum maiores cumque? Minus perspiciatis veritatis</p>
                    </div>
                </div>

                <div className={``}>
                    <div className={`flex items-center justify-center h-10`}>
                        <img src={image3} alt="image3" /> 
                    </div>
                    <div className={`my-4`}>
                        <div className={`text-2xl text-[${styles.colors.orange}] font-bold`}>12.8%</div>
                        <div className={`text-lg text-[${styles.colors.black}] font-bold`}>Taux de convertion</div>
                        <p className={`px-4 text-[${styles.colors.blackLight}] font-light mt-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi dolorum maiores cumque? Minus perspiciatis veritatis</p>
                    </div>
                </div>

                
            </div>
            
        </div>
    </div>
    </>;
}

export default AboutUsSection;