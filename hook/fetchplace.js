import { useEffect, useState } from "react";

function FindNearestPlace({ location }) {
  const [nearestPlace, setNearestPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = {
      location: location,
      radius: 10000,
      types: ["city", "tourist_attraction"],
    };

    const placesService = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    placesService.nearbySearch(request, function (results, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        if (results.length > 0) {
          const nearestPlace = results[0];
          setNearestPlace(nearestPlace);
        } else {
          setNearestPlace(null);
        }
      } else {
        console.error("Error finding nearby places:", status);
        setNearestPlace(null);
      }
      setLoading(false);
    });
  }, [location]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : nearestPlace ? (
        <p>Nearest Place: {nearestPlace.name}</p>
      ) : (
        <p>No nearby places found.</p>
      )}
    </div>
  );
}

export default FindNearestPlace;
