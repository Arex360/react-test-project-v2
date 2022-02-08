import VoiceCard from '../components/VoiceCard'
import Audio1 from '../assets/sound-samples/american-voice-sample-1.mp3'
import Audio2 from '../assets/sound-samples/english-asian-voice-sample-1.mp3'
import Audio3 from '../assets/sound-samples/english-voice-sample-1.mp3'
import { setVoice as setVoiceRedux} from '../redux/actions/newVideoAction';
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
const Voice = () => {
	const videoState = useSelector(state => state.video);
	const [active, setActor] = useState(videoState.voice ? videoState.voice : 0);
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(setVoiceRedux(active));
	}, [active])
	let setVoiceSystem = ()=>{
		
	}
	return (
		<div className="voice">
			<VoiceCard url={Audio1} name="American" index={0} onClick={()=>setActor(0)} voice={0} origin={'American'}/>

			<VoiceCard url={Audio2} name="Asian" onClick={()=>setActor(16)} voice={16} origin={'Asian'}/>

			<VoiceCard url={Audio3} name="English" index={16} onClick={()=>setActor(3)} voice={3} origin={'English'}/>
		</div>
	)
}

export default Voice
