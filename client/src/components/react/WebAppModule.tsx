import { useState } from "react";
import TabsModule from "./TabsModule";

const tabItems = ["Tab 1", "Tab 2", "Tab 3"];

const WebAppModule = () => {
	const [activeTab, setActiveTab] = useState(tabItems[0]);
	return (
		<div className="bg-black/10 p-4 w-full">
			<TabsModule
				tabs={tabItems}
				setTabs={setActiveTab}
				activeTab={activeTab}
			/>
			<div className="bg-white p-4 mt-4 min-h-120 rounded-xl w-full"></div>
		</div>
	);
};

export default WebAppModule;
