import { Link, Outlet, useLocation } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit'

import { RiArrowDropDownLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setTitle as setTitleRedux} from '../redux/actions/newVideoAction'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { SaveRecord } from '../utils/uploadData'
import OutlineButton from '../components/outlineButton'
const CreateVideo = () => {
	
	const { pathname } = useLocation()
	const [value, setValue] = useState('')
	const [pitch, setPitch] = useState(1);
	const [videoTitle,setVideoTitle] = useState('')
    const [rate, setRate] = useState(1);
   
	const {  speak, cancel, speaking, supported, voices } = useSpeechSynthesis({

	})
	const [speechIndex,setSpeech] = useState(0);
	const videoState = useSelector(state => state.video);
	const userState = useSelector(state => state.user)
    let [editMode,setEditMode] = useState(true)
	const isActive = (pn) => {
		if (pn === pathname) return 'active'
	}
	const options = [
		'Saying Hi to my customer', 'My another video', 'My cool App'
	  ];
	const defaultOption = options[0];
	const [active, setVidTitle] = useState(videoState.title ? videoState.title : '');
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(setTitleRedux(active))
		console.log('voices')
		console.log(typeof(voices))
	},[active])
	let Speak = ()=>{
		setSpeech(videoState.voice)
		let voice = voices[videoState.voice]
		//alert(userState.username)
		speak({ text: value, voice, rate, pitch})
	}
	let uploadRecord = ()=>{
		console.log(userState)
		console.log(videoState)
		const {username} = userState
		const {actor,alignment,background,voice} = videoState
		let payload = {
			username: username,
			actor: actor,
			alignment: alignment,
			background: background,
			voice: voice,
			title: videoTitle,
			value: value
		}
		SaveRecord('/videos',payload)
	}
	return (
		<>
			<div className="create_video" >
				{editMode &&  <div className='blur' >
					<h2 onClick={()=>setEditMode(false)} style={{color:'#3860AD'}}>Saying Hi to my customers</h2>
					<hr></hr>
					<div className='para'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum tempora inventore libero facilis voluptas culpa, recusandae qui vel placeat possimus explicabo repudiandae incidunt provident nesciunt eos minima ducimus corporis laboriosam sed unde tenetur est! Debitis n
				   </div>
				   <hr></hr>
				   <div className='options'>
				   <OutlineButton title={"Email"}/>	 
				   <OutlineButton title={"Marketing"}/>	 
				   <OutlineButton title={"Greeting"}/>	 
				   <OutlineButton title={"Email"}/>	 
				   <OutlineButton title={"Marketing"}/>	   
				   <OutlineButton title={"Greeting"}/>
				  </div>
				  <div className="sbx">
				  <button className='sb' >Save</button>
					  </div>
				</div>}
				{!editMode && <div className="main_header" style={{opacity:`${editMode ? '0.2':'1'}`}}>
					<div className='titleHeader'>
						<input onChange={e=>{
							setVidTitle(e.target.value)
							setVideoTitle(e.target.value)}
							} placeholder='Saying Hi to my customers' style={{border:'none',outline:'none'}} className="title"/>
						<Dropdown options={options} value={defaultOption} placeholder="Select an option" onChange={e=>{
							let input = document.querySelector('.title')
							input.value = e.value
						}}/>;
						<RiArrowDropDownLine  className="icon" />
					</div>

					<div className="buttons">
						<button>Cancel</button>
						<button onClick={uploadRecord}>Save</button>
					</div>
				</div>}

				<div className="row" style={{opacity:`${editMode ? '0.2':'1'}`}}>
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
								<button onClick={() => Speak() }>Listen</button>
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
