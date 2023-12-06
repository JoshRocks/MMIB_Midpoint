import useFetch from "./useFetch";

function findNearestPlace(location, placeType, searchRadius) {
  var query = {
    includedTypes: placeType,
    maxResultCount: 10,
    locationRestriction: {
      circle: {
        center: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        radius: searchRadius,
      },
    },
  };

  var results = useFetch(query);

  if (results.error) {
    return results.error;
  } else {
    const places = results.places;
    return { places };
  }
}

//Increase radius based on inital distance

export default findNearestPlace;
