import TrainingsItem from "./trainingsItem";

function Trainings() {
    return <>
        <div className="bg-[#F8F9F9]">
            <h2 className="text-[#2A3E52] text-2xl text-center font-semibold">Our Trainings</h2>

            <div className="flex flex-wrap border border-red-500">
                <TrainingsItem />
                <TrainingsItem />
                <TrainingsItem />
                <TrainingsItem />
                <TrainingsItem />
                <TrainingsItem />
            </div>
        </div>
    </>;
}

export default Trainings;