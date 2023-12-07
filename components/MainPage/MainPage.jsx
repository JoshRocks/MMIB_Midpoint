import CardList from "../Cards/CardList";
import MapWindow from "../Map/MapWindow";
import { View, Text } from "react-native";
import data from "../../test-data/data.js";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { TouchableOpacity } from "react-native";
import calculateInitalMidPoint from "../Calculator/calculator.js";
import MainPageStyle from "./mainpage-style.js";
import axios from "axios";
import { ScrollView } from "react-native";
import LocationList from "../Cards/LocationList.jsx";

const MainPage = () => {
  //////////People////////////
  const [selectedIds, setSelectedIds] = useState([-1]);
  const [selectedId, setSelectedId] = useState(-1);
  const [friendsList, setFriendsList] = useState(data.friends);

  const updateID = (cardID) => {
    setSelectedId(cardID);
  };
  ///////////////////////////

  const getFriendById = () => {
    return friendsList.filter(
      (selectedfriend) => selectedfriend.id === selectedId
    );
  };

  const getFriendsById = () => {
    return friendsList.filter(
      (selectedfriend) => selectedfriend.id === selectedIds
    );
  };

  //////////Search-Query/////////////////////////////////////
  const ApiUrl = process.env.EXPO_PUBLIC_API_URL;
  const ApiKey = process.env.EXPO_PUBLIC_API_KEY;

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [placeFilter, setPlaceFilter] = useState(["restaurant"]);
  const [hangoutSpots, setHangoutsSpots] = useState();
  const [query, setQuery] = useState({
    includedTypes: ["restaurant"],
    rankPreference: "POPULARITY",
    maxResultCount: 10,
    locationRestriction: {
      circle: {
        center: {
          latitude: getFriendById()[0].coords.latitude,
          longitude: getFriendById()[0].coords.longitude,
        },
        radius: 50000,
      },
    },
  });
  const [fetchedData, setFetchedData] = useState(null);

  const fetchdata = async (Cquery) => {
    var toBeUsedQuery = {};
    if (Cquery) {
      toBeUsedQuery = Cquery;
    } else {
      toBeUsedQuery = query;
    }
    const options = {
      method: "POST",
      url: ApiUrl,
      data: toBeUsedQuery,
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": ApiKey,
        "X-Goog-FieldMask":
          "places.displayName,places.formattedAddress,places.types,places.websiteUri,places.location,places.rating",
      },
    };
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setFetchedData(response);
      setIsLoading(false);
      return response;
    } catch (error) {
      setError(error);
      alert("There was a fetch Error: \n" + error);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    setIsLoading(true);
    fetchdata();
  };

  function prepQuery(location, placeType, searchRadius) {
    var query = {
      includedTypes: placeType,
      rankPreference: "POPULARITY",
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

    setQuery(query);
    return query;
  }

  //////////////////////////////////////////////////////

  ////////Cameras-Locations//////////
  const [mapCamera, setMapCamera] = useState(data.defaultCamera);
  const [userLocation, setUserLocation] = useState();
  const [midPointCamera, setMidPointCamera] = useState();
  const [permissionError, setPermissionError] = useState();

  //Code Referenced From:
  //https://docs.expo.dev/versions/latest/sdk/location/
  getUserLocationAndSetCamera = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setPermissionError("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    var userCamera = {
      center: {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      },
      pitch: data.defaultCamera.pitch,
      zoom: data.defaultCamera.zoom,
      heading: data.defaultCamera.heading,
    };

    //UserLocation is set a Camera Object
    setUserLocation(userCamera);
    setMapCamera(userCamera);
  };
  /////////////////////////////////////

  useEffect(() => {
    getUserLocationAndSetCamera();
  }, []);

  const updateCamera = () => {
    const friend = getFriendById()[0];
    setMapCamera({
      center: {
        longitude: friend.coords.longitude,
        latitude: friend.coords.latitude,
      },
      zoom: data.defaultCamera.zoom,
      pitch: data.defaultCamera.pitch,
      heading: data.defaultCamera.heading,
    });
  };

  function adjustZoom() {
    var distanceToFarthestLocation = 0;
    fetchedData.data.places.forEach((place) => {
      var LatDiff = Math.abs(
        place.location.latitude - midPointCamera.center.latitude
      );
      var LongDiff = Math.abs(
        place.location.longitude - midPointCamera.center.longitude
      );
      var AddedDiff = LatDiff + LongDiff;
      if (AddedDiff > distanceToFarthestLocation) {
        distanceToFarthestLocation = AddedDiff;
      }
    });
    const newZoom =
      data.defaultCamera.zoom * (distanceToFarthestLocation * 1.25);
    console.log(newZoom);
    setMapCamera({
      center: {
        latitude: mapCamera.latitude,
        longitude: mapCamera.longitude,
      },
      pitch: mapCamera.pitch,
      heading: mapCamera.heading,
      zoom: newZoom,
    });
  }

  //Should Only Trigger Post-"setCameraToMidpoint"
  //Functionality: Update HangoutSpots with new data and Zoom camera out to encompass farthest location.
  useEffect(() => {
    setHangoutsSpots(fetchedData ? fetchedData.data.places : null);

    //console.log(midPointCamera);
    //midPointCamera && fetchedData.data.places[0] ? adjustZoom() : null;
  }, [midPointCamera]);

  useEffect(() => {
    updateCamera();
  }, [selectedId]);

  const setCameraToMidpoint = async () => {
    const friend = getFriendById()[0];

    var midPoint = calculateInitalMidPoint(
      {
        latitude: userLocation.center.latitude,
        longitude: userLocation.center.longitude,
      },
      {
        latitude: friend.coords.latitude,
        longitude: friend.coords.longitude,
      }
    );
    const query = prepQuery(midPoint, placeFilter, 50000);

    try {
      await fetchdata(query).then(() => {});
    } catch (error) {
      console.error("Error fetching hangout spots: ", error);
    }

    var midPointCam = {
      center: {
        latitude: midPoint.latitude,
        longitude: midPoint.longitude,
      },
      pitch: mapCamera.pitch,
      zoom: mapCamera.zoom,
      heading: mapCamera.heading,
    };
    setMidPointCamera(midPointCam);
    setMapCamera(midPointCam);
  };

  return (
    <ScrollView
      style={MainPageStyle.container}
      showsVerticalScrollIndicator
      centerContent
    >
      <CardList
        friendsList={friendsList}
        selectedId={selectedId}
        updateID={updateID}
      />

      <MapWindow
        mapCamera={mapCamera}
        friendsList={friendsList}
        midPointCam={midPointCamera}
        hangoutSpots={hangoutSpots}
        style={MainPageStyle.mapWindow}
      />

      {userLocation ? (
        <TouchableOpacity
          style={MainPageStyle.MidpointBtn}
          onPress={async () => {
            await setCameraToMidpoint().then();
          }}
        >
          <Text style={MainPageStyle.MidpointBtnText}>
            Find Midpoint From Current Location
          </Text>
        </TouchableOpacity>
      ) : (
        <Text>Fetching User Location... {permissionError}</Text>
      )}

      {hangoutSpots ? console.log(hangoutSpots) : null}
      {hangoutSpots ? <LocationList places={hangoutSpots} /> : null}

      {/* {fetchedData ? (
        fetchedData.map((place) => (
          <Text>
            {"\n"}
            {place.displayName}
          </Text>
        ))
      ) : error ? (
        <Text>{JSON.stringify(error)}</Text>
      ) : null} */}
      {/* <View>
        <Text>{JSON.stringify(fetchedData)}</Text>
      </View> */}

      {/* <Text style={{ fontFamily: CFONT.regular }}>
        {selectedId} {selectedId != null ? friendById()[0].name : null} {"\n"}
        {mapCamera.center.longitude + " " + mapCamera.center.latitude}
      </Text>

      {/* <Text>
        Phone Owner:
        {userLocation
          ? userLocation.center.latitude + " " + userLocation.center.longitude
          : " Error -- " + errorMsg}
        {"\n"}
      </Text> */}
    </ScrollView>
  );
};
export default MainPage;

/*

-----------CODE DUMP------------
   const changeCamera = (mapViewRef) => {
    mapViewRef?.current?.animateCamera(mapViewRef, mapCamera, 2000);
  }; */
