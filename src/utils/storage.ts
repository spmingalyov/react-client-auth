export const getLocalStorage = (key: string) => {
	const storage = localStorage.getItem(key)

	if (storage !== null) {
		return JSON.parse(storage)
	}

	return null
}
