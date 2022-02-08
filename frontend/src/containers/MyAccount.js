import { Link, Outlet, useLocation } from 'react-router-dom'

const MyAccount = () => {
	const { pathname } = useLocation()

	const isActive = (pn) => {
		if (pn === pathname) return 'active'
	}

	return (
		<div className="my_account">
			<div className="header">
				<h1>My Account</h1>

				<Link to="/signin">
					<button>Logout</button>
				</Link>
			</div>

			<div className="navbar">
				<ul>
					<li>
						<Link className={`link ${isActive('/my-account') || isActive('/my-account/profile')}`} to="profile">
							Profile
						</Link>
					</li>
					<li>
						<Link className={`link ${isActive('/my-account/my-plan')}`} to="my-plan">
							My Plan
						</Link>
					</li>

					<li>
						<Link className={`link ${isActive('/my-account/billing')}`} to="billing">
							Billing
						</Link>
					</li>
				</ul>
			</div>

			<Outlet />
		</div>
	)
}

export default MyAccount
