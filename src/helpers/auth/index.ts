import compose from 'compose-function'

import withAuth from './with-auth'

export const withAuthProvider = compose(withAuth)
