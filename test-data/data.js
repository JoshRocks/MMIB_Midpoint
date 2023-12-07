import { CGPS } from "../constants/theme";

const data = {
  friends: [
    {
      id: -1,
      name: "Cleveland State",
      coords: {
        latitude: CGPS.defaultLatitude,
        longitude: CGPS.defaultLongitude,
        latitudeDelta: CGPS.defaultLatDelta,
        longitudeDelta: CGPS.defaultLongDelta,
      },
    },

    {
      id: 0,
      name: "Michael",
      coords: {
        latitude: 29.643946, 
        longitude: -82.355659,
        latitudeDelta: CGPS.defaultLatDelta,
        longitudeDelta: CGPS.defaultLongDelta,
      },
    },
    {
      id: 1,
      name: "Lisa",
      coords: {
        latitude: 42.371331848,
        longitude: -71.116832866,
        latitudeDelta: CGPS.defaultLatDelta,
        longitudeDelta: CGPS.defaultLongDelta,
      },
    },
    {
      id: 2,
      name: "Frank",
      coords: {
        latitude: 35.975266	,
        longitude: -78.899734,
        latitudeDelta: CGPS.defaultLatDelta,
        longitudeDelta: CGPS.defaultLongDelta,
      },
    },
    {
      id: 3,
      name: "Trish",
      coords: {
        latitude: 34.413963,
        longitude: -119.848946,
        latitudeDelta: CGPS.defaultLatDelta,
        longitudeDelta: CGPS.defaultLongDelta,
      },
    },
    {
      id: 4,
      name: "Tommy",
      coords: {
        latitude: 43.603600,
        longitude: -116.208710,
        latitudeDelta: CGPS.defaultLatDelta,
        longitudeDelta: CGPS.defaultLongDelta,
      },
    },
    {
      id: 5,
      name: "Christina",
      coords: {
        latitude: 33.227345,	
        longitude: -97.128113,
        latitudeDelta: CGPS.defaultLatDelta,
        longitudeDelta: CGPS.defaultLongDelta,
      },
    },
  ],

  defaultCamera: {
    center: {
      latitude: CGPS.defaultLongitude,
      longitude: CGPS.defaultLatitude,
    },
    pitch: 10,
    heading: 0,
    zoom: 8,
  },
};
export default data;
