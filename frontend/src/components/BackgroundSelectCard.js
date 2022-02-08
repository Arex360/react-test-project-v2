import React from 'react'

const BackgroundSelectCard = ({ name, image }) => {
	return (
		<div className="background_select_card">
			<div className="img_container">
				<img src={image} alt="imagea" />
			</div>
			<h6 className="text">{name}</h6>
		</div>
	)
}

export default BackgroundSelectCard
