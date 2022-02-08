import ProfileEdit from '../assets/ProfileEdit.png'
import { MdOutlineModeEdit } from 'react-icons/md'

const Profile = () => {
	return (
		<div className="profile">
			<div className="img_edit">
				<div className="img_container">
					<img src={ProfileEdit} alt="edit" />
				</div>

				<div className="edit_icon">
					<MdOutlineModeEdit className="icon" />
				</div>
			</div>

			<div className="input_container">
				<label>First Name</label>
				<input type="text" placeholder="Enter Your First Name" />
			</div>

			<div className="input_container">
				<label>Last Name</label>
				<input type="text" placeholder="Enter Your Last Name" />
			</div>

			<div className="input_container">
				<label>Email Address</label>
				<input type="email" placeholder="Enter Your Email" />
			</div>

			<button>Save Changes</button>
		</div>
	)
}

export default Profile
