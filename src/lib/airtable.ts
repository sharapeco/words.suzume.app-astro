import dotenv from "dotenv";
import airtable, { FieldSet, Query, Records } from "airtable";
import type { ImportMetaEnv } from "../types/env";
import type { WordAT } from "../types/word";

type ProcessEnv = {
	[key: string]: string | undefined;
};

dotenv.config();

const env = process.env as ProcessEnv & ImportMetaEnv;

airtable.configure({
	endpointUrl: "https://api.airtable.com",
	apiKey: env.VITE_AIRTABLE_API_KEY,
});

const base = airtable.base(env.VITE_BASE_ID);

const fetchAllRecords = <T extends FieldSet>(query: Query<T>): Promise<(T & { id: string })[]> => {
	return new Promise((resolve, reject) => {
		const items: (T & { id: string })[] = [];

		query.eachPage(
			function page(records: Records<T>, fetchNextPage: () => void) {
				records.forEach((record) => {
					console.log(record);
					items.push({
						...record.fields,
						id: record.id,
					});
				});
				fetchNextPage();
			},
			function done(err?: Error) {
				if (err) {
					console.error(err);
					reject();
					return;
				}
				resolve(items);
			}
		);
	});
};

const strcmp = (a: string, b: string) => {
	if (a === b) {
		return 0;
	} else if (a < b) {
		return -1;
	} else {
		return 1;
	}
};

export const fetchWords = async () => {
	return (
		await fetchAllRecords<WordAT>(
			base("words").select({
				view: "Grid view",
			})
		)
	)
		.filter((word) => word.Status === "public")
		.sort((a, b) => strcmp(a.Kana, b.Kana));
};
