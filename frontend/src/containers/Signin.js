import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from './../redux/actions/authAction'

const Signin = () => {
	const initialState = { email: '', password: '' }
	const [userData, setUserData] = useState(initialState)
	const { email, password } = userData

	const [typePass, setTypePass] = useState(false)

	const dispatch = useDispatch()
	const { auth } = useSelector((state) => state)
	const navigate = useNavigate()

	useEffect(() => {
		if (auth.token) {
			navigate('/')
		}
	}, [auth.token, navigate])

	const handleChangeInput = (e) => {
		const { name, value } = e.target
		setUserData({ ...userData, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		dispatch(signin(userData))
	}

	return (
		<div className="auth_pages">
			<h1>Sign In</h1>

			<form className="auth_form" onSubmit={handleSubmit}>
				<div className="input_container">
					<label>Email Address</label>
					<input type="email" placeholder="Enter Your Email" onChange={handleChangeInput} value={email} name="email" />
				</div>

				<div className="input_container">
					<div className="d-flex justify-content-between align-items-center">
						<label>Password</label>
						<span>Forget?</span>
					</div>
					<input type="password" placeholder="Enter Your Password" onChange={handleChangeInput} value={password} name="password" />
				</div>

				<div className="button_section">
					<button type="submit">Login</button>
				</div>

				<div className="switch_section">
					New here?{' '}
					<Link to="/signup" className="link">
						Signup
					</Link>
				</div>
			</form>
		</div>
	)
}

export default Signin
