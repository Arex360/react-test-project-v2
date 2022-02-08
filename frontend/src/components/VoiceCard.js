import { BsFillPlayFill } from 'react-icons/bs'
import { BiPause } from 'react-icons/bi'
import PassedSound from '../assets/PassedSound.png'
import { setVoice as setVoiceRedux} from '../redux/actions/newVideoAction';
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

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

const VoiceCard = ({url, name,onClick,voice, origin}) => {
	const videoState = useSelector(state => state.video);
	const [active, setActor] = useState(videoState.voice ? videoState.voice : url);
	const dispatch = useDispatch()
	const [playing, toggle] = useAudio(url);
	const [playSound, setPlaySound] = useState(false)
	const rate = 1
	const pitch = 1
	const {  speak, cancel, speaking, supported, voices } = useSpeechSynthesis({

	})
	useEffect(() => {
		dispatch(setVoiceRedux(active));
	}, [active])
	let setVoiceSystem = ()=>{
		let lang = voices[voice]
		console.log(lang)

		if(playSound == false){
			speak({text:`hello , this is how being ${origin} looks like`, voice:lang,rate:1,pitch:1})
			setPlaySound(true)
		}else{
			cancel()
			setPlaySound(false)
		}
				
	}
	return (
		<div onClick={onClick} className={`voice_card ${playSound && 'active'}`}>
			<div className="play_button" onClick={setVoiceSystem}>
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
