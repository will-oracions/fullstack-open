import courseImage from '../assets/course-image.svg';

function TrainingsItem() {
    return <>
        <div className="m-4 cursor-pointer">
            <div className="w-[367px] h-[194px] bg-black rounded-[20px] border border-white overflow-hidden">
                <img className="w-full h-full object-cover opacity-80  hover:opacity-100" src={courseImage} alt="training poster" />
            </div>

            <div className="w-[367px]">
                <div className="my-4 flex justify-between">
                    <span className="bg-green-500 text-white py-1 px-4 rounded-lg shadow-sm">New</span>
                    <span className="bg-yellow-500 text-white py-1 px-4 rounded-lg shadow-sm">Running</span>
                    <span className="bg-white text-[#2A3E52] py-1 px-4 rounded-lg shadow-sm">Comming Soon</span>
                </div>

                <div className="min-h-[3rem]">
                    <h1 className="text-xl text-[#2A3E52]">CCNA 301-302 Certification Training</h1>
                </div>

                <div className="min-h-[4rem]">
                    <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <div className="text-green-400">show more</div>
                </div>
            </div>
        </div>
    </>;
}

export default TrainingsItem;