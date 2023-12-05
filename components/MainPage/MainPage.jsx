import CardList from "../Cards/CardList";
import MapWindow from "../Map/MapWindow";
import { View, Text } from "react-native";
import { CFONT } from "../../constants/theme";
import data from "../../test-data/data.js";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

const MainPage = () => {
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(-1);
  const [friendsList, setFriendsList] = useState(data.friends);
  const [mapCamera, setMapCamera] = useState(data.defaultCamera);
  const [userLocation, setUserLocation] = useState(data.defaultCamera);

  //Usage Directed from https://www.npmjs.com/package/react-native-get-location
  getUserLocation = () => {
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        center: {
          longitude: location.coords.longitude,
          latitude: location.coords.latitude,
        },
        pitch: data.defaultCamera.pitch,
        zoom: data.defaultCamera.zoom,
        heading: data.defaultCamera.heading,
      });
    };

    useEffect(() => {
      // getUserLocation();
    }, []);

    const friendById = () => {
      return friendsList.filter(
        (selectedfriend) => selectedfriend.id === selectedId
      );
    };
    const changeCamera = (mapViewRef) => {
      mapViewRef?.current?.animateCamera(mapViewRef, mapCamera, 2000);
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

    return (
      <View>
        <CardList
          friendsList={friendsList}
          selectedId={selectedId}
          updateID={updateID}
        />
        <MapWindow
          userLocation={userLocation}
          mapCamera={mapCamera}
          friendList={friendsList}
          changeView={changeCamera}
        />
        <Text style={{ fontFamily: CFONT.regular }}>
          {selectedId} {selectedId != null ? friendById()[0].name : null} {"\n"}
          {mapCamera.center.longitude + " " + mapCamera.center.latitude}
        </Text>

        <Text>
          Phone Owner:
          {userLocation.center.latitude + " " + userLocation.center.longitude}
          {"\n"}
        </Text>
      </View>
    );
  };
};
export default MainPage;

/*

-----------CODE DUMP------------

GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then((loc) => {
        setUserLocation({
          center: { longitude: loc.longitude, latitude: loc.latitude },
          pitch: data.defaultCamera.pitch,
          zoom: data.defaultCamera.zoom,
          heading: data.defaultCamera.heading,
        });
      })
      .catch((err) => {
        setError(err);
      });*/
