import { useAppSelector } from './redux'

export const useAuth = () => {
	const { user } = useAppSelector(state => state.user)

	if (!user) return false

	return true
}
