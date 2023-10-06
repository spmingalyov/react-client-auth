import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('./home'))
const ProfilePage = lazy(() => import('./profile'))
const LoginPage = lazy(() => import('./login'))
const RegistrationPage = lazy(() => import('./registration'))

export const Routing = () => {
	return (
		<div className='px-14 flex justify-center mt-24'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</div>
	)
}
