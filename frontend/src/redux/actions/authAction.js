import { postDataApi } from '../../utils/fetchData'
import { GLOBALTYPES } from '../constants'
import valid from '../../utils/valid'

export const signin = (data) => async (dispatch) => {
	try {
		const res = await postDataApi('signin', data)
		dispatch({
			type: GLOBALTYPES.AUTH,
			payload: {
				token: res.data.access_token,
				user: res.data.user,
			},
		})

		localStorage.setItem('firstLogin', true)

		dispatch({
			payload: {
				success: res.data.msg,
			},
		})
	} catch (error) {
		dispatch({
			type: GLOBALTYPES.ALERT,
			payload: {
				error: error.response.data.msg,
			},
		})
	}
}

export const refreshToken = () => async (dispatch) => {
	const firstLogin = localStorage.getItem('firstLogin')

	if (firstLogin) {
		try {
			const res = await postDataApi('refresh_token')
			dispatch({
				type: GLOBALTYPES.AUTH,
				payload: {
					token: res.data.access_token,
					user: res.data.user,
				},
			})
		} catch (error) {
			console.log('Error', error)
			dispatch({
				type: GLOBALTYPES.ALERT,
				payload: {
					error: error.response.data.msg,
				},
			})
		}
	}
}

export const signup = (data) => async (dispatch) => {
	console.log(data)
	const check = valid(data)
	if (check.errLength > 0) dispatch({ type: GLOBALTYPES.ALERT, payload: check.errMsg })

	try {
		dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

		const res = await postDataApi('signup', data)

		dispatch({
			type: GLOBALTYPES.AUTH,
			payload: {
				token: res.data.access_token,
				user: res.data.user,
			},
		})

		localStorage.setItem('firstLogin', true)
		console.log('User Created')

		dispatch({
			type: GLOBALTYPES.ALERT,
			payload: {
				success: res.data.msg,
			},
		})
	} catch (error) {
		console.log('Error', error)

		dispatch({
			type: GLOBALTYPES.ALERT,
			payload: {
				error: error.response.data.msg,
			},
		})
	}
}

export const logout = (data) => async (dispatch) => {
	try {
		localStorage.removeItem('firstLogin')
		await postDataApi('logout')
		window.location.href = '/'
	} catch (error) {
		dispatch({
			type: GLOBALTYPES.ALERT,
			payload: {
				error: error.response.data.msg,
			},
		})
	}
}
