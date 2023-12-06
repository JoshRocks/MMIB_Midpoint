import CardList from "../Cards/CardList";
import MapWindow from "../Map/MapWindow";
import { View, Text } from "react-native";
import data from "../../test-data/data.js";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { TouchableOpacity } from "react-native";
import calculateInitalMidPoint from "../Calculator/calculator.js";
import MainPageStyle from "./mainpage-style.js";

const MainPage = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedId, setSelectedId] = useState(-1);
  const [friendsList, setFriendsList] = useState(data.friends);
  const [mapCamera, setMapCamera] = useState(data.defaultCamera);
  const [userLocation, setUserLocation] = useState();
  const [midPointCamera, setMidPointCamera] = useState();

  //Code Referenced From:
  //https://docs.expo.dev/versions/latest/sdk/location/
  getUserLocationAndSetCamera = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    //UserLocation is set a Camera Object
    var userCamera = {
      center: {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      },
      pitch: data.defaultCamera.pitch,
      zoom: data.defaultCamera.zoom,
      heading: data.defaultCamera.heading,
    };
    setUserLocation(userCamera);
    setMapCamera(userCamera);
  };

  useEffect(() => {
    getUserLocationAndSetCamera();
  }, []);

  const friendById = () => {
    return friendsList.filter(
      (selectedfriend) => selectedfriend.id === selectedId
    );
  };

  const updateCamera = () => {
    const friend = friendById()[0];
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

  useEffect(() => {
    updateCamera();
  }, [selectedId]);

  const updateID = (cardID) => {
    setSelectedId(cardID);
  };

  const setCameraToMidpoint = () => {
    const friend = friendById()[0];

    var midPoint = calculateInitalMidPoint(
      {
        latitude: userLocation.center.latitude,
        longitude: userLocation.center.longitude,
      },
      { latitude: friend.coords.latitude, longitude: friend.coords.longitude }
    );

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
    <View style={MainPageStyle.container}>
      <CardList
        friendsList={friendsList}
        selectedId={selectedId}
        updateID={updateID}
      />

      <MapWindow
        mapCamera={mapCamera}
        friendsList={friendsList}
        midPointCam={midPointCamera}
      />

      {userLocation ? (
        <TouchableOpacity
          style={MainPageStyle.MidpointBtn}
          onPress={setCameraToMidpoint}
        >
          <Text style={MainPageStyle.MidpointBtnText}>
            Find Midpoint From Current Location
          </Text>
        </TouchableOpacity>
      ) : (
        <Text>Unable to fetch User Location: {errorMsg}</Text>
      )}

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
    </View>
  );
};
export default MainPage;

/*

-----------CODE DUMP------------
   const changeCamera = (mapViewRef) => {
    mapViewRef?.current?.animateCamera(mapViewRef, mapCamera, 2000);
  }; */
