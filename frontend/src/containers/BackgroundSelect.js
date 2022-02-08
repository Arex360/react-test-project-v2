import BackgroundSelectCard from '../components/BackgroundSelectCard'
import Background1 from '../assets/backgrounds/office-background.png'
import Background2 from '../assets/backgrounds/space-background.png'
import Background3 from '../assets/backgrounds/noise-background.png'
import Background4 from '../assets/backgrounds/meeting-room-background.png'
import Background5 from '../assets/backgrounds/books-background.png'
import Background6 from '../assets/backgrounds/desk-background.png'

import BackgroundRed from '../assets/backgrounds/red-background.png'
import BackgroundBlue from '../assets/backgrounds/blue-background.png'
import BackgroundGreen from '../assets/backgrounds/green-background.png'
import BackgroundPurple from '../assets/backgrounds/purple-background.png'
import BackgroundYellow from '../assets/backgrounds/yellow-background.png'
import BackgroundBlack from '../assets/backgrounds/black-background.png'
import BackgroundWhite from '../assets/backgrounds/white-background.png'
import BackgroundGreyGradient from '../assets/backgrounds/grey-gradient-background.png'

import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { setBackground } from '../redux/actions/newVideoAction';
const BackgroundSelect = ({ ...props }) => {
	const videoState = useSelector(state => state.video);
	const [active, setActive] = useState(videoState.background ? videoState.background : Background1);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setBackground(active));
	}, [active])
	return (
		<div className="background_select">
			<div className="row">
				<div className="tabs">
					<div className="tab">
						<input type="checkbox" id="check1" name="checkac"/>
						<label className="tab-label" for="check1">Images</label>
						<div className="tab-content">
							<div onClick={() => setActive(Background1)} className={"col-sm-4 " + (active === Background1 ? "active" : "")}>
								<BackgroundSelectCard image={Background1} props name="Office" />
							</div>
							<div onClick={() => setActive(Background2)} className={"col-sm-4 " + (active === Background2 ? "active" : "")}>
								<BackgroundSelectCard image={Background2} name="Space" />
							</div>
							<div onClick={() => setActive(Background3)} className={"col-sm-4 " + (active === Background3 ? "active" : "")}>
								<BackgroundSelectCard image={Background3} name="Noise" />
							</div>
							<div onClick={() => setActive(Background4)} className={"col-sm-4 " + (active === Background4 ? "active" : "")}>
								<BackgroundSelectCard image={Background4} name="Meeting Room" />
							</div>
							<div onClick={() => setActive(Background5)} className={"col-sm-4 " + (active === Background5 ? "active" : "")}>
								<BackgroundSelectCard image={Background5} name="Books" />
							</div>
							<div onClick={() => setActive(Background6)} className={"col-sm-4 " + (active === Background6 ? "active" : "")}>
								<BackgroundSelectCard image={Background6} name="Desk" />
							</div>	
						</div>
					</div>
					<div className="tab">
						<input type="checkbox" id="check2" name="checkac"/>
						<label className="tab-label" for="check2">Solid Colours</label>
						<div className="tab-content">
							<div onClick={() => setActive(BackgroundRed)} className={"col-sm-4 " + (active === BackgroundRed ? "active" : "")}>
								<BackgroundSelectCard image={BackgroundRed} name="Red" />
							</div>
							<div onClick={() => setActive(BackgroundBlue)} className={"col-sm-4 " + (active === BackgroundBlue ? "active" : "")}>
								<BackgroundSelectCard image={BackgroundBlue} name="Blue" />
							</div>
							<div onClick={() => setActive(BackgroundGreen)} className={"col-sm-4 " + (active === BackgroundGreen ? "active" : "")}>
								<BackgroundSelectCard image={BackgroundGreen} name="Green" />
							</div>
							<div onClick={() => setActive(BackgroundYellow)} className={"col-sm-4 " + (active === BackgroundYellow ? "active" : "")}>
								<BackgroundSelectCard image={BackgroundYellow} name="Yellow" />
							</div>
							<div onClick={() => setActive(BackgroundPurple)} className={"col-sm-4 " + (active === BackgroundPurple ? "active" : "")}>
								<BackgroundSelectCard image={BackgroundPurple} name="Purple" />
							</div>
							<div onClick={() => setActive(BackgroundBlack)} className={"col-sm-4 " + (active === BackgroundBlack ? "active" : "")}>
								<BackgroundSelectCard image={BackgroundBlack} name="Black" />
							</div>
							<div onClick={() => setActive(BackgroundWhite)} className={"col-sm-4 " + (active === BackgroundWhite ? "active" : "")}>
								<BackgroundSelectCard image={BackgroundWhite} name="White" />
							</div>
							<div onClick={() => setActive(BackgroundGreyGradient)} className={"col-sm-4 " + (active === BackgroundGreyGradient ? "active" : "")}>
								<BackgroundSelectCard image={BackgroundGreyGradient} name="Gradient" />
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BackgroundSelect
