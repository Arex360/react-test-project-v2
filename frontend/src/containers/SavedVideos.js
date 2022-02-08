import VideoImg1 from '../assets/VideoImg1.png'
import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getVideosFromFirebase } from '../utils/fetchData'
const SavedVideos = () => {
	const videoState = useSelector(state=>state.video)
	const user = useSelector(state=>state.user)
	let [videos,setVideo] = useState([])
	useEffect(()=>{
		const {username} = user
	    axios.get('http://localhost:5000/api/vid/'+username).then(e=>{
			e = e.data
			let vids = []
			for(var key in e){
				const {actor,value} = e[key]
				vids.push(<VideoCard actor={actor} value={value}/>)
			}
			setVideo(vids)
		})

	},[])
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
