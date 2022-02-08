import { Outlet } from 'react-router-dom'
import Sidebar from './../components/Sidebar'

const Layout = () => {
	return (
		<>
			<div className="layout">
				<div className="wrapper">
					<div className="sidenav mobile-override">
						<Sidebar />
					</div>
					<div className="main-app mobile-override">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	)
}

export default Layout
