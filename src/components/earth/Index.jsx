import React from 'react';
import { OrbitControls } from '@react-three/drei';

import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthCloudMap from '../../assets/textures/8k_earth_clouds.jpg';
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const Earth = props => {
	const [colorMap, normalMap, specularmap, cloudsMap] = useLoader(
		TextureLoader,
		[EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap]
	);

	return (
		<>
			<ambientLight intensity={1} />
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
				<meshPhongMaterial specularmap={specularmap} />
				<meshStandardMaterial map={colorMap} normalMap={normalMap} />
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
