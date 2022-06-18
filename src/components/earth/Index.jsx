import React from 'react';
import { OrbitControls, Stars } from '@react-three/drei';

import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthCloudMap from '../../assets/textures/8k_earth_clouds.jpg';
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const Earth = props => {
	const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
		TextureLoader,
		[EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap]
	);

	return (
		<>
			{/* <ambientLight intensity={1} /> */}
			<pointLight color='#f6f3ea' position={[2, 0, 5]} intensity={1.2} />
			<Stars
				radius={300}
				depth={60}
				count={20000}
				factor={7}
				saturation={0}
				fade={true}
			/>
			<mesh>
				<sphereGeometry args={[1.005, 32, 32]} />
				<meshPhongMaterial
					map={cloudsMap}
					opacity={0.4}
					depthWrite={true}
					transparent={true}
					side={THREE.DoubleSide}
				/>
			</mesh>
			<mesh>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial specularMap={specularMap} />
				<meshStandardMaterial
					map={colorMap}
					normalMap={normalMap}
					metalness={0.4}
					roughness={0.7}
				/>
				<OrbitControls
					enableZoom={true}
					enablePan={true}
					enableRotate={true}
					zoomSpeed={0.6}
					panSpeed={0.5}
					rotateSpeed={0.4}
				/>
			</mesh>
		</>
	);
};

export default Earth;
