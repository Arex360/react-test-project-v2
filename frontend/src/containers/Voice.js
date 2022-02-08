import VoiceCard from '../components/VoiceCard'
import Audio1 from '../assets/sound-samples/american-voice-sample-1.mp3'
import Audio2 from '../assets/sound-samples/english-asian-voice-sample-1.mp3'
import Audio3 from '../assets/sound-samples/english-voice-sample-1.mp3'
const Voice = () => {
	return (
		<div className="voice">
			<VoiceCard url={Audio1} name="American" />

			<VoiceCard url={Audio2} name="Asian" />

			<VoiceCard url={Audio3} name="English" />
		</div>
	)
}

export default Voice
