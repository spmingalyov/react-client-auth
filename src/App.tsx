import Footer from '@components/footer'
import Header from '@components/header'

import { withProviders } from '@helpers/router'

import { Routing } from './pages'

function App() {
	return (
		<div className='relative h-screen'>
			<Header />
			<Routing />
			<Footer />
		</div>
	)
}

export default withProviders(App)
