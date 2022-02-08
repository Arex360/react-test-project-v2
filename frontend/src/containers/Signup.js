import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from './../redux/actions/authAction'

const Signup = () => {
	const { auth } = useSelector((state) => state)
	const initialState = { fullname: '', email: '', password: '' }
	const [userData, setUserData] = useState(initialState)
	const { fullname, email, password } = userData

	const navigate = useNavigate()
	const dispatch = useDispatch()

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
		dispatch(signup(userData))
	}

	return (
		<div className="auth_pages">
			<h1>Create an account</h1>

			<form className="auth_form" onSubmit={handleSubmit}>
				<div className="input_container">
					<label>Full name</label>
					<input type="text" placeholder="Enter Your Name" name="fullname" value={fullname} onChange={handleChangeInput} />
				</div>

				<div className="input_container">
					<label>Email Address</label>
					<input type="email" placeholder="Enter Your Email" name="email" onChange={handleChangeInput} value={email} />
				</div>

				<div className="input_container">
					<div className="d-flex justify-content-between align-items-center">
						<label>Password</label>
					</div>
					<input type="password" placeholder="Enter Your Password" name="password" onChange={handleChangeInput} value={password} />
				</div>

				<div className="button_section">
					<button type="submit">Signup</button>
				</div>

				<div className="switch_section">
					Already user?{' '}
					<Link to="/signin" className="link">
						Signin
					</Link>
				</div>
			</form>
		</div>
	)
}

export default Signup
