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
        latitude: 48.137154,
        longitude: 11.576124,
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
        latitude: 22.283832198,
        longitude: 114.135999456,
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
        latitude: 36.7525,
        longitude: 3.04197,
        latitudeDelta: CGPS.defaultLatDelta,
        longitudeDelta: CGPS.defaultLongDelta,
      },
    },
    {
      id: 5,
      name: "Christina",
      coords: {
        latitude: -1.280423,
        longitude: 36.816311,
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
    zoom: 13,
  },
};
export default data;
