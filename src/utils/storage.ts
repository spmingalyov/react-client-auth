export const getLocalStorage = (key: string) => {
	const storage = localStorage.getItem(key)

	if (storage) {
		return JSON.parse(storage)
	}

	return null
}
