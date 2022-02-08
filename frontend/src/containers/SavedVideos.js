import VideoImg1 from '../assets/VideoImg1.png'
import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

const SavedVideos = () => {
	let videos = [<VideoCard img={VideoImg1}/>,<VideoCard img={VideoImg1}/>,<VideoCard img={VideoImg1}/>,<VideoCard img={VideoImg1}/>,<VideoCard img={VideoImg1}/>,<VideoCard img={VideoImg1}/>,<VideoCard img={VideoImg1}/>,<VideoCard img={VideoImg1}/>]
	return (
		<div className="saved_videos">
			<div className="header">
				<h1>Saved Videos</h1>

				<Link to="/create-video">
					<button>Create New</button>
				</Link>
			</div>

			<div className="videos_row">
				{videos}
			</div>
		</div>
	)
}

export default SavedVideos
