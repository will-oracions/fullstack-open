import ServicesItem from './servicesItem';
import background2 from '../assets/Backgrounds2.svg';

function Services() {
    return <>
        <div className="bg-[#34495E] relative">
            <img className="absolute left-0 right-0 z-10" src={background2} alt="background pattern" />
            <h2 className="text-white text-2xl text-center font-semibold">Our Services</h2>

            <div className="relative z-20 flex flex-wrap border border-red-500">
                <ServicesItem active={true} />
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
            </div>
        </div>
    </>;
}

export default Services;