import React from 'react';


const Card = ({name , email , id}) =>{
	
	return(
		<div className="tc bg-light-green br3 pa3 ma2 dib grow bw2 shadow-5">
			<img alt="robots" src= {`https://robohash.org/${id}`} width="200px" height="200px"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;