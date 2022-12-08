const dakutenMap = {
	が: 'か',
	ぎ: 'き',
	ぐ: 'く',
	げ: 'け',
	ご: 'こ',
	ざ: 'さ',
	じ: 'し',
	ず: 'す',
	ぜ: 'せ',
	ぞ: 'そ',
	だ: 'た',
	ぢ: 'ち',
	づ: 'つ',
	で: 'て',
	ど: 'と',
	ば: 'は',
	び: 'ひ',
	ぶ: 'ふ',
	べ: 'へ',
	ぼ: 'ほ',
	ぱ: 'は',
	ぴ: 'ひ',
	ぷ: 'ふ',
	ぺ: 'へ',
	ぽ: 'ほ',
} as const

const dakutenRE = new RegExp(`[${Object.keys(dakutenMap)}]`, 'g')

export const seion = (word: string) => {
	return word.replace(dakutenRE, (matches) => dakutenMap[matches[0]] || '')
}
