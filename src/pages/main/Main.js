import React from "react";
import AvailableJobs from "../../components/availabe/AvailableJobs";
import Jobs from "../../components/allJobs/Jobs";

const Main = () => {
	return (
		<main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
			{/* all jobs */}
			<AvailableJobs />
			<div className="jobs-list">
				{/* Single Job 1*/}
				<Jobs />
				{/* Single Job 1*/}
			</div>
		</main>
	);
};

export default Main;
