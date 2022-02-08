import { Link, Outlet, useLocation } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit'

import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const CreateVideo = () => {
	const { pathname } = useLocation()
	const [value, setValue] = useState('')
	const { speak } = useSpeechSynthesis()
	const videoState = useSelector(state => state.video);

	const isActive = (pn) => {
		if (pn === pathname) return 'active'
	}
	const options = [
		'Saying Hi to my customer', 'My another video', 'My cool App'
	  ];
	const defaultOption = options[0];
	return (
		<>
			<div className="create_video">
				<div className="main_header">
					<div className='titleHeader'>
						<input placeholder='Saying Hi to my customers' style={{border:'none',outline:'none'}} className="title"/>
						<Dropdown options={options} value={defaultOption} placeholder="Select an option" />;
						<RiArrowDropDownLine  className="icon" />
					</div>

					<div className="buttons">
						<button>Cancel</button>
						<button>Save</button>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<div className="image_section">
							<div className="img_container">
								<img className="background_img" src={videoState.background} alt="BackgroundImg" />
								<img style={{ left: videoState.alignment === 'right' ? 'auto' : 0, right: videoState.alignment === 'left' ? 'auto' : 0 }} className="actor_img" src={videoState.actor} alt="ActorImg" />
							</div>

							<div className="text_area">
								<textarea
									value={value}
									onChange={(event) => setValue(event.target.value)}
									placeholder="Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages"
								></textarea>{' '}
								<button onClick={() => speak({ text: value })}>Listen</button>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="setting_header">
							<ul>
								<li>
									<Link className={`link ${isActive('/create-video') || isActive('/create-video/actor')}`} to="actor">
										Actor
									</Link>
								</li>

								<li>
									<Link className={`link ${isActive('/create-video/voice')}`} to="voice">
										Voice
									</Link>
								</li>

								<li>
									<Link className={`link ${isActive('/create-video/alignment')}`} to="alignment">
										Alignment
									</Link>
								</li>

								<li>
									<Link className={`link ${isActive('/create-video/background')}`} to="background">
										Background
									</Link>
								</li>
							</ul>
						</div>

						<Outlet />
					</div>
				</div>
			</div>
		</>
	)
}

export default CreateVideo
