export type CityData = {
	title: string;
	description: string;
	heroHeading: string;
	heroSubtext: string;
	location: string;
};

export const CITIES: Record<string, CityData> = {
	tampa: {
		title: "Creative Technology Studio in Tampa, FL | Sudo Create",
		description:
			"Sudo Create is a Tampa-based creative technology studio — custom websites, software, and digital infrastructure for music brands, gaming companies, and creative founders.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Tampa's creative technology studio. Custom websites, software, and digital infrastructure — built for music brands, gaming companies, and founders.",
		location: "Tampa, FL",
	},
	"st-petersburg": {
		title: "Creative Technology Studio in St. Petersburg, FL | Sudo Create",
		description:
			"Sudo Create partners with St. Pete brands — building custom websites, software, and digital infrastructure for music brands, gaming companies, and creative founders across the 727.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"St. Pete has the culture. We build the technology — custom websites, software, and infrastructure for creative brands across the 727.",
		location: "St. Petersburg, FL",
	},
	valrico: {
		title: "Creative Technology Studio in Valrico, FL | Sudo Create",
		description:
			"Sudo Create serves Valrico and greater Hillsborough County — custom websites, software, and digital infrastructure for music brands, gaming companies, and creative founders.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Serving Valrico and greater Hillsborough County. Custom websites, software, and infrastructure for brands built to perform.",
		location: "Valrico, FL",
	},
	riverview: {
		title: "Creative Technology Studio in Riverview, FL | Sudo Create",
		description:
			"Sudo Create serves Riverview and the greater Tampa Bay area — custom websites, software, and digital infrastructure for music brands, gaming companies, and creative founders.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Riverview's creative technology partner. Custom websites, software, and infrastructure — built for creators and businesses in the Tampa Bay area.",
		location: "Riverview, FL",
	},
	brandon: {
		title: "Creative Technology Studio in Brandon, FL | Sudo Create",
		description:
			"Sudo Create serves Brandon and greater Tampa Bay — custom websites, software, and digital infrastructure for music brands, gaming companies, and creative founders.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Brandon's home for serious technology work. Custom websites, software, and infrastructure — built for creators, start to finish.",
		location: "Brandon, FL",
	},
	lakeland: {
		title: "Creative Technology Studio in Lakeland, FL | Sudo Create",
		description:
			"Sudo Create serves Lakeland and Polk County — custom websites, software, and digital infrastructure for music brands, gaming companies, and creative founders.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Lakeland and Polk County's creative technology studio. Custom websites, software, and infrastructure — one studio, one creative vision.",
		location: "Lakeland, FL",
	},
};
