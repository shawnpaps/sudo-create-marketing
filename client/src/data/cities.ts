export type CityData = {
	title: string;
	description: string;
	heroHeading: string;
	heroSubtext: string;
	location: string;
};

export const CITIES: Record<string, CityData> = {
	tampa: {
		title: "Media Technology Studio in Tampa, FL | Sudo Create",
		description:
			"Sudo Create is a Tampa-based media technology studio building content-driven websites, streaming infrastructure, apps, and visual media for brands where storytelling and technology are equally important.",
		heroHeading: "Where media meets technology.",
		heroSubtext:
			"Built here. We build websites, apps, content systems, and visual media for the brands that make Tampa worth watching.",
		location: "Tampa, FL",
	},
	"st-petersburg": {
		title: "Media Technology Studio in St. Petersburg, FL | Sudo Create",
		description:
			"Sudo Create partners with St. Pete media-driven brands — building content-driven websites, streaming infrastructure, and visual media for venues, festivals, and creative businesses across the 727.",
		heroHeading: "Where media meets technology.",
		heroSubtext:
			"St. Pete has the culture. We build the infrastructure behind it — websites, apps, content systems, and visual media for the brands that make the 727 worth watching.",
		location: "St. Petersburg, FL",
	},
	valrico: {
		title: "Media Technology Studio in Valrico, FL | Sudo Create",
		description:
			"Sudo Create builds content-driven websites, streaming infrastructure, and content systems for media-driven brands in Valrico and greater Hillsborough County.",
		heroHeading: "Where media meets technology.",
		heroSubtext:
			"Deep in Hillsborough County. We build websites, apps, content systems, and visual media for brands that don't need to be downtown to mean business.",
		location: "Valrico, FL",
	},
	riverview: {
		title: "Media Technology Studio in Riverview, FL | Sudo Create",
		description:
			"Sudo Create builds content-driven websites, streaming infrastructure, and custom software for media-driven brands in Riverview and the greater Tampa Bay area.",
		heroHeading: "Where media meets technology.",
		heroSubtext:
			"Riverview is growing fast. We build websites, apps, content systems, and visual media for the brands keeping up with it.",
		location: "Riverview, FL",
	},
	brandon: {
		title: "Media Technology Studio in Brandon, FL | Sudo Create",
		description:
			"Sudo Create builds content-driven websites, streaming infrastructure, and content systems for media-driven brands in Brandon and greater Tampa Bay.",
		heroHeading: "Where media meets technology.",
		heroSubtext:
			"Closer to the action than most give it credit for. We build websites, apps, content systems, and visual media for Brandon's media-driven brands.",
		location: "Brandon, FL",
	},
	lakeland: {
		title: "Media Technology Studio in Lakeland, FL | Sudo Create",
		description:
			"Sudo Create builds content-driven websites, streaming infrastructure, and content systems for media-driven brands in Lakeland and Polk County.",
		heroHeading: "Where media meets technology.",
		heroSubtext:
			"Halfway between Tampa and Orlando, and its own thing entirely. We build websites, apps, content systems, and visual media for Lakeland's media-driven brands.",
		location: "Lakeland, FL",
	},
};
