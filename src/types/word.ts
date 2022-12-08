type WordStatus = 'public' | 'draft'

export type WordAT = {
	Date: string
	Name: string
	Kana: string
	Source: string
	Notes: string
	Status: WordStatus
}

export type Word = WordAT & {
	id: string
}
