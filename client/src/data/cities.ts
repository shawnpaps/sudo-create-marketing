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
			"Sudo Create is a Tampa-based media technology studio — engineering the digital infrastructure that powers media-driven brands. Content-driven websites, video delivery, and custom software.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Tampa's media technology studio. We engineer the digital infrastructure that powers media-driven brands.",
		location: "Tampa, FL",
	},
	"st-petersburg": {
		title: "Media Technology Studio in St. Petersburg, FL | Sudo Create",
		description:
			"Sudo Create engineers the digital infrastructure behind St. Pete's media-driven brands — content-driven websites, video delivery systems, and custom software for venues, festivals, and creative businesses across the 727.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"St. Pete has the culture. We build the digital infrastructure behind it — for venues, festivals, and media-driven brands across the 727.",
		location: "St. Petersburg, FL",
	},
	valrico: {
		title: "Media Technology Studio in Valrico, FL | Sudo Create",
		description:
			"Sudo Create engineers content-driven websites, media infrastructure, and custom software for media-driven brands in Valrico and greater Hillsborough County.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Serving Valrico and greater Hillsborough County. We engineer the digital infrastructure that powers media-driven brands.",
		location: "Valrico, FL",
	},
	riverview: {
		title: "Media Technology Studio in Riverview, FL | Sudo Create",
		description:
			"Sudo Create engineers content-driven websites, media infrastructure, and custom software for media-driven brands in Riverview and the greater Tampa Bay area.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Riverview's media technology partner. We engineer the digital infrastructure that powers media-driven brands.",
		location: "Riverview, FL",
	},
	brandon: {
		title: "Media Technology Studio in Brandon, FL | Sudo Create",
		description:
			"Sudo Create engineers content-driven websites, media infrastructure, and custom software for media-driven brands in Brandon and greater Tampa Bay.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Brandon's home for serious media technology work. We engineer the digital infrastructure that powers media-driven brands.",
		location: "Brandon, FL",
	},
	lakeland: {
		title: "Media Technology Studio in Lakeland, FL | Sudo Create",
		description:
			"Sudo Create engineers content-driven websites, media infrastructure, and custom software for media-driven brands in Lakeland and Polk County.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Lakeland and Polk County's media technology studio. We engineer the digital infrastructure that powers media-driven brands.",
		location: "Lakeland, FL",
	},
};
