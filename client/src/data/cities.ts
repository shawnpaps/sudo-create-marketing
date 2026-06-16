export type CityData = {
	title: string;
	description: string;
	heroHeading: string;
	heroSubtext: string;
	location: string;
};

export const CITIES: Record<string, CityData> = {
	tampa: {
		title: "Tampa Web Design Studio & Custom Software Development | Sudo Create",
		description:
			"Premium website design, custom software development, product design, and tech strategy from a Tampa Bay technology studio.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Sudo Create builds websites, software, and digital products for Tampa brands and founders who care how the work performs.",
		location: "Tampa, FL",
	},
	"st-petersburg": {
		title: "St. Petersburg Web Design & Product Studio | Sudo Create",
		description:
			"Premium web design, product design, custom software, and tech strategy for St. Petersburg creative brands and startups.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Digital products, websites, and sharp technical direction for St. Petersburg teams with a clear point of view.",
		location: "St. Petersburg, FL",
	},
	valrico: {
		title: "Valrico Web Design & Custom Software Studio | Sudo Create",
		description:
			"Valrico web design, custom software development, UI/UX, and tech consulting for creative businesses.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Sudo Create helps Valrico and Hillsborough County brands design, build, and launch better digital work.",
		location: "Valrico, FL",
	},
	riverview: {
		title: "Riverview Web Design & Product Studio | Sudo Create",
		description:
			"Riverview web design, product design, custom software, and technology strategy for creative industries.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Digital products and websites for Riverview brands that want the interface to feel as considered as the idea.",
		location: "Riverview, FL",
	},
	brandon: {
		title: "Brandon Web Design & Custom Software Studio | Sudo Create",
		description:
			"Brandon web design, custom software development, product design, and tech strategy for creative brands and founders.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Sudo Create creates premium websites, software, and digital product direction for Brandon businesses ready to build with intent.",
		location: "Brandon, FL",
	},
	lakeland: {
		title: "Lakeland Web Design & Product Studio | Sudo Create",
		description:
			"Lakeland web design, product design, custom software, and technology consulting for creative brands.",
		heroHeading: "Built for creators.",
		heroSubtext:
			"Websites, software, and product thinking for Lakeland and Polk County brands with taste, texture, and a point of view.",
		location: "Lakeland, FL",
	},
};
