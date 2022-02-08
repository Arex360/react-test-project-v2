import { Link, useLocation } from 'react-router-dom'
import ProfileThumbnail from '../assets/ProfileThumbnail.png'
import Logo from '../assets/Logo.png'

import { FaVideo } from 'react-icons/fa'
import { BsCollectionPlay } from 'react-icons/bs'

const Sidebar = () => {
	const { pathname } = useLocation()

	console.log(pathname)

	const isActive = (pn) => {
		if (pn === pathname) return 'active'
	}

	return (
		<div className="sidebar">
			<div className="top">
				<div className="logo">
					<Link to="/" className="img_container">
						<img src={Logo} alt="logo" />
					</Link>
				</div>

				{pathname === '/signin' || pathname === '/signup' ? (
					<div></div>
				) : (
					<div className="links">
						<Link
							to="/create-video"
							className={`icon_container ${
								isActive('/create-video') ||
								isActive('/create-video/voice') ||
								isActive('/create-video/actor') ||
								isActive('/create-video/alignment') ||
								isActive('/create-video/background')
							}`}
						>
							<FaVideo className="icon" />
						</Link>

						<Link to="/saved-videos" className={`icon_container ${isActive('/saved-videos')}`}>
							<BsCollectionPlay className="icon" />
						</Link>
					</div>
				)}
			</div>

			{pathname === '/signin' || pathname === '/signup' ? (
				<div></div>
			) : (
				<div className="bottom">
					<Link to="/my-account" className="profile_container">
						<div className="img_contaienr">
							<img src={ProfileThumbnail} alt="ProfileThumbnail" />
						</div>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Sidebar
