let VideoCard = ({actor,value})=>{
    return(
        <div className="video_card">
					<div className="img_container">
						<img src={actor} alt="VideoImg1" />
					</div>

					<div className="content">
						<h2>{value}</h2>

						<div className="buttons_row">
							<button>Email</button>
							<button>Marketing</button>
							<button>Greeting</button>
						</div>
					</div>
				</div>
    )
}
export default VideoCard