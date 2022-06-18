import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Earth from './components/earth/Index';

const App = () => {
	return (
		<div className='flex items-center justify-center h-screen w-screen'>
			<Canvas>
				<Suspense fallback={null}>
					<Earth />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default App;
