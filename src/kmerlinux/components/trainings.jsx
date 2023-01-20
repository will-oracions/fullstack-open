import TrainingsItem from "./trainingsItem";

function Trainings() {
    return <>
        <div className="bg-[#F8F9F9]">
            <div className="max-w-screen-xl mx-auto py-16">
                <h2 className="text-[#2A3E52] text-2xl text-center font-semibold mb-10">Our Trainings</h2>

                <div className="flex justify-center flex-wrap">
                    <TrainingsItem />
                    <TrainingsItem />
                    <TrainingsItem />
                    <TrainingsItem />
                    <TrainingsItem />
                    <TrainingsItem />
                </div>
            </div>
            
        </div>
    </>;
}

export default Trainings;