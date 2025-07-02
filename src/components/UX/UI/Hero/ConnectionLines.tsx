import React, { useMemo } from 'react';
import { QuadraticBezierLine } from '@react-three/drei';
import * as THREE from 'three';

// --- Type Definitions ---
export interface CityData {
  name: string;
  lat: number;
  lon: number;
  isCapital?: boolean;
}

// --- Helper Function ---
const latLongToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// --- Animated Arc Component (no shader, just visible line) ---
const AnimatedArc: React.FC<{ start: THREE.Vector3; end: THREE.Vector3 }> = ({ start, end }) => {
  const midPoint = useMemo(() => {
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const distance = start.distanceTo(end);
    return mid.normalize().multiplyScalar(2 + distance * 0.4);
  }, [start, end]);

  return (
    <QuadraticBezierLine
      start={start}
      end={end}
      mid={midPoint}
      lineWidth={2}
      color="#fb8500"
      dashed={false}
      opacity={1}
      transparent
    />
  );
};

export const ConnectionLines: React.FC<{ cities: CityData[] }> = ({ cities }) => {
  // Define the pairs by city name
  const cityPairs = [
    ['Bogota', 'New York'],
    ['Los Angeles', 'Tokyo'],
    ['London', 'Nueva Delhi'],
    ['Moscu', 'Buenos Aires'],
    ['Santiago de Chile', 'Brasilia'],
  ];

  // Find the city objects and their positions
  const pairs = useMemo(() => {
    return cityPairs
      .map(([nameA, nameB]) => {
        const cityA = cities.find(c => c.name === nameA);
        const cityB = cities.find(c => c.name === nameB);
        if (!cityA || !cityB) return null;
        return {
          id: `${nameA}-${nameB}`,
          start: latLongToVector3(cityA.lat, cityA.lon, 2.05),
          end: latLongToVector3(cityB.lat, cityB.lon, 2.05),
        };
      })
      .filter(Boolean) as { id: string; start: THREE.Vector3; end: THREE.Vector3 }[];
  }, [cities]);

  if (pairs.length === 0) return null;

  return (
    <group>
      {pairs.map(pair => (
        <AnimatedArc key={pair.id} start={pair.start} end={pair.end} />
      ))}
    </group>
  );
};