import { FC } from 'react'
import { Link } from 'react-router-dom'

import AuthButtons from '@components/auth-buttons'

import logo from './logo.svg'

const Header: FC = () => {
	return (
		<header className='flex justify-between px-14 py-4 items-center'>
			<Link to='/'>
				<img src={logo} alt='логотип' />
			</Link>
			<AuthButtons />
		</header>
	)
}

export default Header
