import { Suspense } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '@hooks/useAuth'

const withAuth = (component: () => React.ReactNode) => () => {
	const location = useLocation()
	const isAuth = useAuth()

	//redirect to login page for unauthorized user
	if (!isAuth && location.pathname === '/profile') {
		return (
			<Suspense fallback='Loading...'>
				<Navigate to='/login' state={{ from: location }} />
			</Suspense>
		)
	}

	//redirect to profile page for authorized user
	if (isAuth && location.pathname === '/registration') {
		return (
			<Suspense fallback='Loading...'>
				<Navigate to='/profile' />
			</Suspense>
		)
	}
	//redirect to profile after login
	if (isAuth && location.pathname === '/login') {
		return (
			<Suspense fallback='Loading...'>
				<Navigate to='/profile' />
			</Suspense>
		)
	}

	return <Suspense fallback='Loading...'>{component()}</Suspense>
}
export default withAuth
