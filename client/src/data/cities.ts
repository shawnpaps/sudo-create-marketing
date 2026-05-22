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
			"Sudo Create is a Tampa-based media technology studio — building content-driven websites, media infrastructure, and visual production for brands where storytelling and technology are equally important.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Tampa's media technology studio. We build the technology that powers media — and we create the media that fills it.",
		location: "Tampa, FL",
	},
	"st-petersburg": {
		title: "Media Technology Studio in St. Petersburg, FL | Sudo Create",
		description:
			"Sudo Create partners with St. Pete media-driven brands — building content-driven websites, media infrastructure, and visual production for venues, festivals, and creative businesses across the 727.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"St. Pete has the culture. We build the technology behind it — content-driven websites, media infrastructure, and original visual production for brands across the 727.",
		location: "St. Petersburg, FL",
	},
	valrico: {
		title: "Media Technology Studio in Valrico, FL | Sudo Create",
		description:
			"Sudo Create builds content-driven websites, media infrastructure, and visual production for brands in Valrico and greater Hillsborough County.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Serving Valrico and greater Hillsborough County. We build the technology that powers media — and the media that fills it.",
		location: "Valrico, FL",
	},
	riverview: {
		title: "Media Technology Studio in Riverview, FL | Sudo Create",
		description:
			"Sudo Create builds content-driven websites, media infrastructure, and visual production for brands in Riverview and the greater Tampa Bay area.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Riverview's media technology studio. Content-driven websites, infrastructure that delivers, and visual production that tells the story.",
		location: "Riverview, FL",
	},
	brandon: {
		title: "Media Technology Studio in Brandon, FL | Sudo Create",
		description:
			"Sudo Create builds content-driven websites, media infrastructure, and visual production for brands in Brandon and greater Tampa Bay.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Brandon's home for serious media technology work. We build the technology that powers media — and we create the media that fills it.",
		location: "Brandon, FL",
	},
	lakeland: {
		title: "Media Technology Studio in Lakeland, FL | Sudo Create",
		description:
			"Sudo Create builds content-driven websites, media infrastructure, and visual production for brands in Lakeland and Polk County.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Lakeland and Polk County's media technology studio. Content-driven websites, infrastructure that delivers, and visual production that tells the story.",
		location: "Lakeland, FL",
	},
};
