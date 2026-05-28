export type CityData = {
	title: string;
	description: string;
	heroHeading: string;
	heroSubtext: string;
	location: string;
};

export const CITIES: Record<string, CityData> = {
	tampa: {
		title: "Media Production & Technology Studio in Tampa, FL | Sudo Create",
		description:
			"Sudo Create is a Tampa-based solo media production and technology studio — visual media production, post, content-driven websites, and the infrastructure to deliver it all.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Tampa's media production and technology studio. We produce the content, handle post, and build the infrastructure that delivers it — one studio, from shoot to screen.",
		location: "Tampa, FL",
	},
	"st-petersburg": {
		title: "Media Production & Technology Studio in St. Petersburg, FL | Sudo Create",
		description:
			"Sudo Create partners with St. Pete brands — producing content, handling post, and building the websites and infrastructure to deliver it across the 727.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"St. Pete has the culture. We handle the full chain — production, post, websites, and the infrastructure behind it for media-driven brands across the 727.",
		location: "St. Petersburg, FL",
	},
	valrico: {
		title: "Media Production & Technology Studio in Valrico, FL | Sudo Create",
		description:
			"Sudo Create serves Valrico and greater Hillsborough County — producing content, handling post, and building content-driven websites and media infrastructure.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Serving Valrico and greater Hillsborough County. One studio covering the full chain — production, post, websites, and infrastructure for brands built to perform.",
		location: "Valrico, FL",
	},
	riverview: {
		title: "Media Production & Technology Studio in Riverview, FL | Sudo Create",
		description:
			"Sudo Create serves Riverview and the greater Tampa Bay area — producing content, handling post, and building the digital infrastructure that delivers it.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Riverview's media production and technology partner. We cover the full chain — production, post, content-driven websites, and the infrastructure behind them.",
		location: "Riverview, FL",
	},
	brandon: {
		title: "Media Production & Technology Studio in Brandon, FL | Sudo Create",
		description:
			"Sudo Create serves Brandon and greater Tampa Bay — producing content, handling post, and building content-driven websites and media infrastructure for brands that run on media.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Brandon's home for serious media work. We produce the content, handle post, and build the infrastructure that delivers it — one studio, start to finish.",
		location: "Brandon, FL",
	},
	lakeland: {
		title: "Media Production & Technology Studio in Lakeland, FL | Sudo Create",
		description:
			"Sudo Create serves Lakeland and Polk County — producing content, handling post, and building content-driven websites and media infrastructure for brands that publish and perform.",
		heroHeading: "Digital media, amplified.",
		heroSubtext:
			"Lakeland and Polk County's media production and technology studio. Production, post, websites, and infrastructure — one studio, one creative vision.",
		location: "Lakeland, FL",
	},
};
