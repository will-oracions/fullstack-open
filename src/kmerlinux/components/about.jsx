import classroomImage from '../assets/classroom.jpg';
import rectBlue from '../assets/rect-blue.svg';
import rectGreen from '../assets/rect-green.svg';
import playIcon from '../assets/icons/play.svg';

function About() {
    return <>
        <div className="text-center">
            <h2 className="text-[#2A3E52] text-3xl font-medium"><span>What is</span><span className="text-green-500">K</span>merlinux <span className="text-green-500">Academy</span></h2>

            <div className="text-[#696984]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit similique itaque officiis temporibus cum doloribus nobis unde aliquid laborum magnam, in facilis autem, blanditiis, ea ducimus cumque vitae repellendus pariatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit similique itaque officiis temporibus cum doloribus nobis unde aliquid laborum magnam, in facilis autem, blanditiis, ea ducimus cumque vitae repellendus pariatur.</p>
            </div>

            <div className="flex justify-between items-center">

                <div className="flex-1 text-start">
                    <h3 className="text-[#2A3E52] text-xl">Everything you can do in a physical classroom, <span className="text-green-500">you can do with Skilline</span></h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta facere doloremque reiciendis voluptatum sint! Dicta quos dolor accusamus magnam iusto alias deserunt enim quae, sit quam impedit! Fugit, deleniti hic.</p>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center border border-orange-500">
                    
                    <div className="relative my-14">
                       
                        <img className="z-10 absolute -left-5 -top-5 w-[107px] h-[107px]" src={rectBlue} alt="blue reactagle" />
                        
                        <div className="relative rounded-[20px] overflow-hidden z-40">
                            <video poster={classroomImage}></video>
                            <div className="z-30 w-[54px] h-[54px] bg-red-500 rounded-full flex justify-center items-center">
                                <img className="" src={playIcon} alt="play icon" />
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