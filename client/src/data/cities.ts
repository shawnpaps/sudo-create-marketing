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
			"Sudo Create is a Tampa-based creative technology studio — we build custom websites, software, and media infrastructure for creators, music brands, founders, and startups.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Tampa's creative technology studio. Custom websites, software, and media infrastructure for music brands, startups, founders, and creators — built at the intersection of technology and culture.",
		location: "Tampa, FL",
	},
	"st-petersburg": {
		title: "Creative Technology Studio in St. Petersburg, FL | Sudo Create",
		description:
			"Sudo Create partners with St. Pete creators and brands — building custom websites, software, and media infrastructure for music labels, founders, and creative businesses across the 727.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"St. Pete has the culture. We build the technology behind it — custom websites, software, and media infrastructure for creative brands across the 727.",
		location: "St. Petersburg, FL",
	},
	valrico: {
		title: "Creative Technology Studio in Valrico, FL | Sudo Create",
		description:
			"Sudo Create serves Valrico and greater Hillsborough County — building custom websites, software, and media infrastructure for creators, founders, and creative businesses.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Serving Valrico and greater Hillsborough County. Custom websites, software, and media infrastructure for brands built to perform.",
		location: "Valrico, FL",
	},
	riverview: {
		title: "Creative Technology Studio in Riverview, FL | Sudo Create",
		description:
			"Sudo Create serves Riverview and the greater Tampa Bay area — building custom websites, software, and media infrastructure for creators, founders, and creative businesses.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Riverview's creative technology partner. Custom websites, software, and media infrastructure for brands built to perform.",
		location: "Riverview, FL",
	},
	brandon: {
		title: "Creative Technology Studio in Brandon, FL | Sudo Create",
		description:
			"Sudo Create serves Brandon and greater Tampa Bay — building custom websites, software, and media infrastructure for creators, music brands, founders, and startups.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Brandon's home for serious technology work. Custom websites, software, and media infrastructure for creative brands — built to perform.",
		location: "Brandon, FL",
	},
	lakeland: {
		title: "Creative Technology Studio in Lakeland, FL | Sudo Create",
		description:
			"Sudo Create serves Lakeland and Polk County — building custom websites, software, and media infrastructure for creators, founders, and creative businesses that publish and perform.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Lakeland and Polk County's creative technology studio. Custom websites, software, and media infrastructure — one studio, one vision.",
		location: "Lakeland, FL",
	},
};
