import type { Word } from "../types/word"
import { seion } from "./kana"

type AbcChunk<T> = {
	initial: string
	items: T[]
}

export const chunkAbc = (words: Word[]): AbcChunk<Word>[] => {
	const chunks: AbcChunk<Word>[] = []
	let prevInitial: string | undefined = undefined
	words.forEach((word) => {
		const initial = seion(word.Kana.charAt(0))
		if (initial !== prevInitial) {
			chunks.push({
				initial,
				items: [],
			})
			prevInitial = initial
		}
		chunks[chunks.length - 1].items.push(word)
	})
	return chunks
}
