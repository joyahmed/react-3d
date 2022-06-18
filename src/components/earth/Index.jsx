import React from 'react';

const Earth = props => {
	return (
		<>
			<ambientLight intensity={0.5} />
			<mesh>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial color='red' />
			</mesh>
		</>
	);
};

export default Earth;
