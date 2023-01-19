import {
    Header,
    Footer,
    Banner,
    About,
    Trainings,
    Services,
    Contact,
} from './components';


function KmApp () {
    return <>
    <div className="text-[#696984]">
        <Header />
        <Banner />
        <About />
        <Trainings />
        <Services />
        <Contact /> 
        <Footer />
    </div>
    </>;
}

export default KmApp;