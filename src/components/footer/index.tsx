import { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
	return (
		<footer className='absolute bottom-0 bg-secondary w-full py-5'>
			<div className='flex gap-2 justify-center text-sm'>
				<Link to='/'>Главная</Link>
				<Link to='/profile'>Профиль</Link>
				<Link to='/registration'>Регистрация</Link>
				<Link to='/login'>Вход</Link>
			</div>
		</footer>
	)
}

export default Footer
