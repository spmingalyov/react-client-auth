export interface IUserCredentials {
	email: string
	password: string
}

export interface IRegistrationCred {
	name: string
	email: string
	password: string
	checkPassword: string
}

export interface IUserState {
	isLoading: boolean
	user: null | IUser
	isError: null | string
	isRegistered: boolean
}

export interface IUser {
	id: number
	name: string
	username: string
	email: string
	password: string
	address: Address
	phone: string
	website: string
	company: Company
}

export interface Address {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: Geo
}

export interface Geo {
	lat: string
	lng: string
}

export interface Company {
	name: string
	catchPhrase: string
	bs: string
}
