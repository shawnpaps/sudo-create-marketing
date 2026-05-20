import { useState } from "react";

const TabsModule = ({ tabs, setTabs, activeTab }) => {
	return (
		<div className="bg-white rounded-xl p-6 flex items-center justify-between max-w-xl">
			{tabs.map((tab, index) => (
				<button key={index} onClick={() => setTabs(index)}>
					{tab}
				</button>
			))}
		</div>
	);
};

export default TabsModule;
