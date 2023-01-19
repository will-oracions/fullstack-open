import BannerImage from '../assets/banner-image.svg';

function Banner() {
    return <>
        <div className="w-full relative">
            <img className="w-full h-auto" src={BannerImage} alt="Work flow" />

            <div className="absolute top-0 bottom-0 left-0 right-0 border border-yellow-500">
                <h1 className="text-5xl text-white font-bold">Portez ce whisy au vieux juge blond</h1>
            </div>
        </div>
    </>;
}

export default Banner;