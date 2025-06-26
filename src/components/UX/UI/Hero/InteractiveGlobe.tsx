'use client'
import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Points } from '@react-three/drei';
import * as THREE from 'three';
import { Feature, FeatureCollection, Geometry } from 'geojson';

// === HELPER FUNCTIONS & TYPE DEFINITIONS ===

interface CityData {
  name: string;
  lat: number;
  lon: number;
  isCapital?: boolean;
}

const latLongToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// === REACT COMPONENTS ===

const Globe: React.FC = () => {
  const globeRef = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });
  return (
    <Sphere 
      ref={globeRef} 
      args={[2, 64, 64]}
      visible={true}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color="#0077b6"
        transparent={true}
        opacity={0.9}
        metalness={0.1}
        roughness={1}
        emissive={"#03045e"}
        emissiveIntensity={0.5}
        side={1}
        flatShading
        polygonOffset
        polygonOffsetFactor={5}
        // polygonOffsetUnits={30}

      />
    </Sphere>
  );
};

const Continents: React.FC = () => {
  const [continentPoints, setContinentPoints] = useState<THREE.Vector3[]>([]);
  useEffect(() => {
    fetch('/data/world-coasts.json')
      .then(res => res.json())
      .then((data: FeatureCollection<Geometry>) => {
        const points: THREE.Vector3[] = [];
        data.features.forEach((feature: Feature<Geometry>) => {
          if (feature.geometry.type === 'Polygon') {
            const coordinates = feature.geometry.coordinates[0];
            coordinates.forEach(([lon, lat]) => {
              points.push(latLongToVector3(lat, lon, 2.01));
            });
          } else if (feature.geometry.type === 'MultiPolygon') {
            feature.geometry.coordinates.forEach(polygon => {
              const coordinates = polygon[0];
              coordinates.forEach(([lon, lat]) => {
                points.push(latLongToVector3(lat, lon, 2.01));
              });
            });
          }
        });
        setContinentPoints(points);
      });
  }, []);

  // Always call useMemo, even if continentPoints is empty
  const positionsArray = useMemo(
    () =>
      new Float32Array(
        continentPoints.flatMap((v) => [v.x, v.y, v.z])
      ),
    [continentPoints]
  );

  if (continentPoints.length === 0) {
    return null;
  }

  return (
    <Points positions={positionsArray}>
      <pointsMaterial 
        color="#F8FAFC" 
        size={0.0099999} 
        sizeAttenuation
        opacity={0.5} 
        transparent
      />
    </Points>
  );
};

const CityPoints: React.FC = () => {
  const cityData: CityData[] = [
    { name: 'Tokyo', lat: 35.6895, lon: 139.6917, isCapital: true },
    { name: 'Paris', lat: 48.8566, lon: 2.3522, isCapital: true },
    { name: 'London', lat: 51.5074, lon: -0.1278, isCapital: true },
    { name: 'Bogota', lat: 4.7110, lon: -74.0721, isCapital: true },
    { name: 'New York', lat: 40.7128, lon: -74.0060 },
    { name: 'Los Angeles', lat: 34.0522, lon: -118.2437 },
    { name: 'Sydney', lat: -33.8688, lon: 151.2093 },
    { name: 'Mexico City', lat: 19.4326, lon: -99.1332, isCapital: true },
    { name: 'Shanghai', lat: 31.2304, lon: 121.4737 },
    { name: 'Moscu', lat: 55.7558, lon: 37.6173, isCapital: true },
    { name: 'Nueva Delhi', lat: 28.6139, lon: 77.2090, isCapital: true },
    { name: 'Buenos Aires', lat: -34.6037, lon: -58.3816, isCapital: true },
    { name: 'Santiago de Chile', lat: -33.4489, lon: -70.6693, isCapital: true },
    { name: 'Pekin', lat: 39.9042, lon: 116.4074, isCapital: true },
    { name: 'Brasilia', lat: -15.7939, lon: -47.8828, isCapital: true },
    { name: 'Lima', lat: -12.0464, lon: -77.0428, isCapital: true },
    { name: 'Montreal', lat: 45.5017, lon: -73.5673 },
    { name: 'Madrid', lat: 40.4168, lon: -3.7038, isCapital: true },
    { name: 'Sur Africa', lat: -25.7461, lon: 28.1881, isCapital: true }, // Pretoria (administrative capital)
    { name: 'Roma', lat: 41.9028, lon: 12.4964, isCapital: true },
    { name: 'Berlin', lat: 52.52, lon: 13.405, isCapital: true },
    { name: 'Singapore', lat: 1.3521, lon: 103.8198 }, // Port of Singapore
    { name: 'Ningbo-Zhoushan', lat: 29.8683, lon: 121.5440 }, // Port of Ningbo-Zhoushan, China
    // { name: 'Shenzhen', lat: 22.5431, lon: 114.0579 }, // Port of Shenzhen, China
    // { name: 'Guangzhou', lat: 23.1291, lon: 113.2644 }, // Port of Guangzhou, China
    // { name: 'Busan', lat: 35.1796, lon: 129.0756 }, // Port of Busan, South Korea
    // { name: 'Qingdao', lat: 36.0671, lon: 120.3826 }, // Port of Qingdao, China
    // { name: 'Hong Kong', lat: 22.3193, lon: 114.1694 }, // Port of Hong Kong
    // { name: 'Tianjin', lat: 39.3434, lon: 117.3616 }, // Port of Tianjin, China
    // { name: 'Rotterdam', lat: 51.9225, lon: 4.4792 }, // Port of Rotterdam, Netherlands
  ];

  // We separate the cities into two groups: capitals and non-capitals
  const [capitals, otherCities] = useMemo(() => {
    const capitalPoints: THREE.Vector3[] = [];
    const otherCityPoints: THREE.Vector3[] = [];
    cityData.forEach(city => {
      const position = latLongToVector3(city.lat, city.lon, 2.05);
      if (city.isCapital) {
        capitalPoints.push(position);
      } else {
        otherCityPoints.push(position);
      }
    });
    return [capitalPoints, otherCityPoints];
  }, [cityData]);

  // Convert Vector3 arrays to Float32Array for Points positions prop
  const capitalsPositions = useMemo(
    () => new Float32Array(capitals.flatMap(v => [v.x, v.y, v.z])),
    [capitals]
  );
  const otherCitiesPositions = useMemo(
    () => new Float32Array(otherCities.flatMap(v => [v.x, v.y, v.z])),
    [otherCities]
  );

  return (
    <group>
      {/* A <Points> cloud for the capital cities with its own style */}
      <Points positions={capitalsPositions}>
        <pointsMaterial color="#fef08a" size={0.08} sizeAttenuation />
      </Points>
      {/* A separate <Points> cloud for the other cities with another style */}
      <Points positions={otherCitiesPositions}>
        <pointsMaterial color="#61dbfb" size={0.05} sizeAttenuation />
      </Points>
    </group>
  );
};


// Main component that assembles everything
const InteractiveGlobe: React.FC = () => {
  return (
    <div style={{ height: '99vh', width: '99vh', background: '#E5EBF2' }} className='rounded-4xl min-w-screen'>
      
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[3, 3, 3]} intensity={0.099} />
        <Globe />
        <Continents />
        <CityPoints />
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          rotateSpeed={0.4}
          minDistance={2.5}
          maxDistance={8}
          autoRotate
          autoRotateSpeed={1.5}
          target={[0,0,0]}
          enableDamping 
          dampingFactor={0.05} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 2}
          screenSpacePanning
        />
      </Canvas>
    </div>
  );
};

export default InteractiveGlobe;