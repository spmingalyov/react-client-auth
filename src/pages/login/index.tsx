import { FC } from 'react'

import LoginForm from '@components/login-form'

import { withAuthProvider } from '@helpers/auth'

const LoginPage: FC = () => {
	return (
		<>
			<LoginForm />
		</>
	)
}

export default withAuthProvider(LoginPage)
