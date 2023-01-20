import classroomImage from '../assets/classroom.jpg';
import rectBlue from '../assets/rect-blue.svg';
import rectGreen from '../assets/rect-green.svg';
import playIcon from '../assets/icons/play.svg';

function About() {
    return <>
        <div className="max-w-screen-xl mx-auto text-center my-16">
            <h2 className="text-[#2A3E52] text-3xl font-medium my-8"><span>What is</span><span className="text-green-500">K</span>merlinux <span className="text-green-500">Academy</span></h2>

            <div className="text-[#696984] max-w-screen-lg mx-auto mb-16">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit similique itaque officiis temporibus cum doloribus nobis unde aliquid laborum magnam, in facilis autem, blanditiis, ea ducimus cumque vitae repellendus pariatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit similique itaque officiis temporibus cum doloribus nobis unde aliquid laborum magnam, in facilis autem, blanditiis, ea ducimus cumque vitae repellendus pariatur.</p>
            </div>

            <div className="max-w-screen-lg mx-auto flex justify-between items-start">

                <div className="flex-1 text-start py-10 relative">
                    <span className="z-10 absolute top-[4rem] -left-3 inline-block rounded-full w-12 h-12 bg-green-400"></span>
                    <span className="z-10 absolute top-[9rem] left-48 inline-block rounded-full w-5 h-5 bg-green-400"></span>
                    <h3 className="relative z-20 text-[#2A3E52] text-2xl font-semibold py-8">Everything you can do in a physical classroom, <span className="text-green-500">you can do with Skilline</span></h3>
                    <p className="relative z-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta facere doloremque reiciendis voluptatum sint! Dicta quos dolor accusamus magnam iusto alias deserunt enim quae, sit quam impedit! Fugit, deleniti hic.</p>
                </div>

                <div className="px-16 flex-1 flex flex-col justify-center items-center">
                    
                    <div className="relative my-14">
                       
                        <img className="z-10 absolute -left-5 -top-5 w-[107px] h-[107px]" src={rectBlue} alt="blue reactagle" />
                        
                        <div className="relative bg-black rounded-[20px] overflow-hidden z-40">
                            <video className="cursor-pointer opacity-80 hover:scale-110 transition-transform" poster={classroomImage}></video>
                            <div className="z-50 absolute top-[calc(50%-27px)] left-[calc(50%-27px)] w-[54px] h-[54px]  bg-white showdow-xl cursor-pointer rounded-full flex justify-center items-center">
                                <img src={playIcon} alt="play icon" />
                            </div>
                        </div>
                        
                        <img className="z-10 absolute -right-5 -bottom-5 w-[180px] h-[180px]" src={rectGreen} alt="green reactagle" />
                    </div>
                </div>

            </div>
        </div>
    </>;
}

export default About;