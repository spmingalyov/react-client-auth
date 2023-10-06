import { FC } from 'react'
import { Link } from 'react-router-dom'

const Popup: FC = () => {
	return (
		<div className='flex gap-2 p-5 bg-green-500 rounded-xl items-center'>
			<div className='w-96'>Регистрация прошла успешно!</div>
			<Link to='/login'>
				<button className='border-none bg-green-900 text-white'>Войти</button>
			</Link>
		</div>
	)
}

export default Popup
