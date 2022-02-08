import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAlignment } from '../redux/actions/newVideoAction';
const Alignment = () => {
	const videoState = useSelector(state => state.video);
	const [active, setActive] = useState(videoState.alignment ? videoState.alignment : 'center');
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setAlignment(active))
	}, [active])
	return (
		<div className="alignment">
			<button onClick={() => setActive('left')} className="left">Left</button>
			<button onClick={() => setActive('center')} className="center">Center</button>
			<button onClick={() => setActive('right')} className="right">Right</button>
		</div>
	)
}

export default Alignment
