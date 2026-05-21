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
			"Sudo Create is a Tampa-based media technology studio building websites, streaming infrastructure, and custom software for media-driven brands that publish, create, and perform.",
		heroHeading: "Media-first engineering.",
		heroSubtext:
			"Tampa's media technology studio. We build websites, streaming infrastructure, and custom software for media-driven brands that publish, create, and perform.",
		location: "Tampa, FL",
	},
	"st-petersburg": {
		title: "Media Technology Studio in St. Petersburg, FL | Sudo Create",
		description:
			"Sudo Create partners with St. Pete media-driven brands — building websites, streaming infrastructure, and custom software for venues, festivals, and creative businesses across the 727.",
		heroHeading: "Media-first engineering.",
		heroSubtext:
			"St. Pete has the culture. We build the infrastructure behind it — websites, streaming systems, and custom software for media-driven brands across the 727.",
		location: "St. Petersburg, FL",
	},
	valrico: {
		title: "Media Technology Studio in Valrico, FL | Sudo Create",
		description:
			"Sudo Create builds websites, streaming infrastructure, and content systems for media-driven brands in Valrico and greater Hillsborough County.",
		heroHeading: "Media-first engineering.",
		heroSubtext:
			"Serving Valrico and greater Hillsborough County. We build websites, streaming infrastructure, and content systems for media-driven brands built to perform.",
		location: "Valrico, FL",
	},
	riverview: {
		title: "Media Technology Studio in Riverview, FL | Sudo Create",
		description:
			"Sudo Create builds websites, streaming infrastructure, and custom software for media-driven brands in Riverview and the greater Tampa Bay area.",
		heroHeading: "Media-first engineering.",
		heroSubtext:
			"Riverview's media technology partner. We build websites, streaming infrastructure, and custom software for brands that publish, create, and perform.",
		location: "Riverview, FL",
	},
	brandon: {
		title: "Media Technology Studio in Brandon, FL | Sudo Create",
		description:
			"Sudo Create builds websites, streaming infrastructure, and content systems for media-driven brands in Brandon and greater Tampa Bay.",
		heroHeading: "Media-first engineering.",
		heroSubtext:
			"Brandon's home for serious media technology work. We build websites, streaming systems, and custom software for brands that run on media.",
		location: "Brandon, FL",
	},
	lakeland: {
		title: "Media Technology Studio in Lakeland, FL | Sudo Create",
		description:
			"Sudo Create builds websites, streaming infrastructure, and content systems for media-driven brands in Lakeland and Polk County.",
		heroHeading: "Media-first engineering.",
		heroSubtext:
			"Lakeland and Polk County's media technology studio. We build websites, streaming infrastructure, and content systems for brands that publish, create, and perform.",
		location: "Lakeland, FL",
	},
};
