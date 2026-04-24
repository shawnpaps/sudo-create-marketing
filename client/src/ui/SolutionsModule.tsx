import { useState } from "react";
import { solutions } from "../data/solutions";
import type { Solution } from "../data/solutions";

export default function SolutionsModule() {
	const [activeSolution, setActiveSolution] = useState<Solution>(solutions[0]);

	const handleSolutionClick = (solution: Solution) => {
		setActiveSolution(solution);
	};

	return (
		<div className="mt-8">
			<ul className="flex gap-4 mb-4">
				{solutions.map((solution) => (
					<li key={solution.title}>
						<button
							onClick={() => handleSolutionClick(solution)}
							className={
								activeSolution.title === solution.title
									? "bg-beige rounded-full min-w-24 px-4 py-2 text-black"
									: "bg-beige/10 rounded-full min-w-24 px-4 py-2 hover:bg-beige hover:text-black transition-all ease-in-out"
							}
						>
							{solution.title}
						</button>
					</li>
				))}
			</ul>
			<div className="bg-white/10 rounded-xl min-h-124 p-10 flex flex-col items-center justify-center">
				<div className="flex flex-row justify-between w-full">
					<div className="flex flex-col justify-between">
						<h2 className="text-4xl capitalize">{activeSolution.title}</h2>
						<div>
							<p>{activeSolution.description}</p>
							<button className="bg-beige/10 rounded-full min-w-48 px-6 py-3 mt-2 hover:bg-beige hover:text-black ease-in-out transition-all">
								Schedule a Call
							</button>
						</div>
					</div>
					<figure className="max-w-xl">
						<img
							className="rounded-xl max-w-full"
							src={activeSolution.imageUrl}
							alt={activeSolution.title}
						/>
					</figure>
				</div>
			</div>
		</div>
	);
}
