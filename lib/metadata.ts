import type { Metadata } from "next";

export const siteBaseUrl = "https://fullchee.com";

const defaultOgImage = {
	url: `${siteBaseUrl}/fullchee-og.png`,
	width: 1743,
	height: 915,
	alt: "Fullchee favicon, full at the top, chee at the bottom",
};

type MetadataArgs = {
	title: string;
	description: string;
	path?: string;
	images?: NonNullable<Metadata["openGraph"]>["images"];
};

export const buildMetadata = ({
	title,
	description,
	path = "/",
	images,
}: MetadataArgs): Metadata => ({
	title,
	description,
	openGraph: {
		title,
		description,
		url: `${siteBaseUrl}${path}`,
		type: "website",
		images: images ?? [defaultOgImage],
	},
});
