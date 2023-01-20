import ServicesItem from './servicesItem';
import background2 from '../assets/Backgrounds2.svg';

function Services() {
    return <>
        <div className="bg-[#34495E]">    
            <div className="max-w-screen-2xl mx-auto py-16 relative">
                <img className="absolute left-0 right-0 z-10" src={background2} alt="background pattern" />
                <h2 className="text-white text-2xl text-center font-semibold my-10">Our Services</h2>

                <div className="relative max-w-screen-lg mx-auto z-20 flex justify-center flex-wrap">
                    <ServicesItem active={true} />
                    <ServicesItem />
                    <ServicesItem />
                    <ServicesItem />
                    <ServicesItem />
                    <ServicesItem />
                </div>
            </div>
        </div>
    </>;
}

export default Services;