export interface ImportMetaEnv {
	readonly VITE_AIRTABLE_API_KEY: string
	readonly VITE_BASE_ID: string
}

export interface ImportMeta {
	readonly env: ImportMetaEnv
}
