import React, { useEffect, useState } from 'react'
import Actor1 from '../assets/actors/anna-actor.png'
import Actor2 from '../assets/actors/yoyo-actor.png'
import Actor3 from '../assets/actors/skye-actor.png'
import Actor4 from '../assets/actors/mike-actor.png'
import Actor5 from '../assets/actors/vincent-actor.png'
import Actor6 from '../assets/actors/peter-actor.png'
import Actor7 from '../assets/actors/may-actor.png'

import { setActor as setActorRedux } from '../redux/actions/newVideoAction';
import { useDispatch, useSelector } from 'react-redux'


const Actors = () => {
	const videoState = useSelector(state => state.video);
	const [active, setActor] = useState(videoState.actor ? videoState.actor : Actor1);
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setActorRedux(active));
	}, [active])
	return (
		<div className="actors">
			<div className="row gx-5">
				<div onClick={() => setActor(Actor1)} className={"col-xxl-4 col-lg-6 col-md-3 col-sm-4 single_actor " + (active === Actor1 ? "active" : "")}  >
					<div className="img_container">
						<img src={Actor1} alt="Actor" />
					</div>
					<h6>Anna</h6>
				</div>
				<div onClick={() => setActor(Actor2)} className={"col-xxl-4 col-lg-6 col-md-3 col-sm-4 single_actor " + (active === Actor2 ? "active" : "")} >
					<div className="img_container">
						<img src={Actor2} alt="Actor" />
					</div>
					<h6>YoYo</h6>
				</div>
				<div onClick={() => setActor(Actor3)} className={"col-xxl-4 col-lg-6 col-md-3 col-sm-4 single_actor " + (active === Actor3 ? "active" : "")}>
					<div className="img_container">
						<img src={Actor3} alt="Actor" />
					</div>
					<h6>Skye</h6>
				</div>
				<div onClick={() => setActor(Actor4)} className={"col-xxl-4 col-lg-6 col-md-3 col-sm-4 single_actor " + (active === Actor4 ? "active" : "")}>
					<div className="img_container">
						<img src={Actor4} alt="Actor" />
					</div>
					<h6>Mike</h6>
				</div>
				<div onClick={() => setActor(Actor5)} className={"col-xxl-4 col-lg-6 col-md-3 col-sm-4 single_actor " + (active === Actor5 ? "active" : "")}>
					<div className="img_container">
						<img src={Actor5} alt="Actor" />
					</div>
					<h6>Vincent</h6>
				</div>
				<div onClick={() => setActor(Actor6)} className={"col-xxl-4 col-lg-6 col-md-3 col-sm-4 single_actor " + (active === Actor6 ? "active" : "")}>
					<div className="img_container">
						<img src={Actor6} alt="Actor" />
					</div>
					<h6>Peter</h6>
				</div>
				<div onClick={() => setActor(Actor7)} className={"col-xxl-4 col-lg-6 col-md-3 col-sm-4 single_actor " + (active === Actor7 ? "active" : "")}>
					<div className="img_container">
						<img src={Actor7} alt="Actor" />
					</div>
					<h6>May</h6>
				</div>
			</div>
		</div>
	)
}

export default Actors
