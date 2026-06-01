export type CityData = {
	title: string;
	description: string;
	heroHeading: string;
	heroSubtext: string;
	location: string;
};

export const CITIES: Record<string, CityData> = {
	tampa: {
		title: "Tampa | Sudo Create",
		description:
			"Tampa software studio for custom software, websites, online experiences, and creative infrastructure. Start a project.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Custom software, websites, online experiences, and digital infrastructure for creative businesses in Tampa.",
		location: "Tampa, FL",
	},
	"st-petersburg": {
		title: "St. Petersburg | Sudo Create",
		description:
			"Custom software, websites, and online experiences for St. Petersburg creative businesses. Talk to Sudo Create.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Software, websites, online experiences, and systems for St. Petersburg creative businesses.",
		location: "St. Petersburg, FL",
	},
	valrico: {
		title: "Valrico | Sudo Create",
		description:
			"Custom software, websites, online experiences, and creative infrastructure for Valrico businesses. Start a project.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Software studio support for Valrico and greater Hillsborough County creative businesses.",
		location: "Valrico, FL",
	},
	riverview: {
		title: "Riverview | Sudo Create",
		description:
			"Riverview software studio for custom software, websites, online experiences, and creative systems. Talk to Sudo Create.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Custom software, websites, online experiences, and infrastructure for Riverview creative businesses.",
		location: "Riverview, FL",
	},
	brandon: {
		title: "Brandon | Sudo Create",
		description:
			"Brandon software studio for custom software, websites, online experiences, and creative infrastructure. Start a project.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Software, websites, online experiences, and backend systems for Brandon creative businesses.",
		location: "Brandon, FL",
	},
	lakeland: {
		title: "Lakeland | Sudo Create",
		description:
			"Lakeland software studio for custom software, websites, online experiences, and creative infrastructure. Talk to Sudo Create.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Custom software, websites, online experiences, and systems for Lakeland and Polk County creative businesses.",
		location: "Lakeland, FL",
	},
};
