import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAlignment } from '../redux/actions/newVideoAction';
const Alignment = () => {
	const videoState = useSelector(state => state.video);
	const [active, setActive] = useState(videoState.alignment ? videoState.alignment : 'center');
	const [left,setLeft] = useState(false)
	const [mid,setMid] = useState(false)
	const [right,setRight] = useState(false)
	const selectedStyle ={
		background: '#ebf2ff',
		border: '1px solid #3860ad',
		color: '#3860ad'
	}
	let Reset =()=>{
		setLeft(false)
		setRight(false)
		setMid(false)
	}
	let selectAlignmentLeft = ()=>{
		Reset()
		setLeft(true)
		setActive('left')
	}
	let selectAlignmentMid = ()=>{
		Reset()
		setMid(true)
		setActive('center')
	}
	let selectAlignmentRight = ()=>{
		Reset()
		setRight(true)
		setActive('right')
	}
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setAlignment(active))
	}, [active])
	return (
		<div className="alignment">
			<button style={left ? selectedStyle:{}} onClick={selectAlignmentLeft} className="left">Left</button>
			<button style={mid ? selectedStyle:{}} onClick={selectAlignmentMid} className="center">Center</button>
			<button style={right ? selectedStyle:{}} onClick={selectAlignmentRight} className="right">Right</button>
		</div>
	)
}

export default Alignment
