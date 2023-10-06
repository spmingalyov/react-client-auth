import { useAppSelector } from './redux'

export const useAuth = () => {
	const { user } = useAppSelector(state => state.user)

	if (user === null) return false

	return true
}
