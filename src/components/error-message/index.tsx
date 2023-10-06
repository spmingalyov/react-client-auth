import { FC } from 'react'

import { useAppSelector } from '@hooks/redux'

const ErrorMessage: FC = () => {
	const { isError } = useAppSelector(state => state.user)

	return (
		<div className='mt-5 p-5 bg-red-500 rounded-lg text-center'>
			<div className='w-96'>{isError}</div>
		</div>
	)
}

export default ErrorMessage
