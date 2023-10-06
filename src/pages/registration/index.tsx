import { FC } from 'react'

import Popup from '@components/popup'
import RegistrationForm from '@components/registration-form'

import { withAuthProvider } from '@helpers/auth'

import { useAppSelector } from '@hooks/redux'

const RegistrationPage: FC = () => {
	const { isRegistered } = useAppSelector(state => state.user)
	return isRegistered ? <Popup /> : <RegistrationForm />
}

export default withAuthProvider(RegistrationPage)
