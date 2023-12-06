const calculateInitalMidPoint = (usercoord, coord2) => {
  var totalLat = 0;
  var totalLong = 0;
  /* coordlist.foreach((friend) => {
    totalLat = totalLat + friend.coords.latitude;
    totalLong = totalLong + friend.coords.longitude;
  }); */

  var midpoint = {
    latitude: (usercoord.latitude + coord2.latitude) / 2,
    longitude: (usercoord.longitude + coord2.longitude) / 2,
  };

  return midpoint;
};

export default calculateInitalMidPoint;
