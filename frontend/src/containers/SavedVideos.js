import VideoImg1 from '../assets/VideoImg1.png'
import { Link } from 'react-router-dom'

const SavedVideos = () => {
	return (
		<div className="saved_videos">
			<div className="header">
				<h1>Saved Videos</h1>

				<Link to="/create-video">
					<button>Create New</button>
				</Link>
			</div>

			<div className="videos_row">
				<div className="video_card">
					<div className="img_container">
						<img src={VideoImg1} alt="VideoImg1" />
					</div>

					<div className="content">
						<h2>Saying Hi to users!</h2>

						<div className="buttons_row">
							<button>Email</button>
							<button>Marketing</button>
							<button>Greeting</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SavedVideos
