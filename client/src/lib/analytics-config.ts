const google = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID;
const meta = import.meta.env.PUBLIC_META_PIXEL_ID;

export const gaId = typeof google === "string" && /^G-[A-Z0-9]+$/.test(google) ? google : "";
export const metaId = typeof meta === "string" && /^\d{5,25}$/.test(meta) ? meta : "";
