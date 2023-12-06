const calculateInitalMidPoint = (coord1, coord2) => {
  var midpoint = {
    latitude: (coord1.latitude + coord2.latitude) / 2,
    longitude: (coord1.longitude + coord2.longitude) / 2,
  };

  return midpoint;
};

export default calculateInitalMidPoint;
