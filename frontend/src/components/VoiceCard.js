import { BsFillPlayFill } from 'react-icons/bs'
import { BiPause } from 'react-icons/bi'
import PassedSound from '../assets/PassedSound.png'

import { useState, useEffect } from 'react'


const useAudio = url => {
	const [audio] = useState(new Audio(url));
	const [playing, setPlaying] = useState(false);

	const toggle = () => setPlaying(!playing);

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	},
		[playing]
	);

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false));
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false));
		};
	}, []);

	return [playing, toggle];
};

const VoiceCard = ({url, name}) => {
	const [playing, toggle] = useAudio(url);
	const [playSound, setPlaySound] = useState(false)

	useEffect(() => {
		if (playSound !== playing) {
			toggle();
		}
	}, [playSound])

	return (
		<div className={`voice_card ${playSound && 'active'}`}>
			<div className="play_button" onClick={() => setPlaySound(!playSound)}>
				{playSound ? <BiPause className="icon" /> : <BsFillPlayFill className="icon" />}
			</div>
			<div className="sound_name_image">
				<div className="name">{name}</div>
				<div className="img_container">
					<img src={PassedSound} alt="PassedSound" />
				</div>
			</div>
		</div>
	)
}

export default VoiceCard
