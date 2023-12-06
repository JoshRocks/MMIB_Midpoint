import { View, Text } from "react-native";
import MapWStyle from "./map-window-style";
import mapStyle from "./map-style.js";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useEffect, useRef } from "react";
import { CCOLOR } from "../../constants/theme.js";

//Code referenced from react native maps documentation
//https://github.com/react-native-maps/react-native-maps

const MapWindow = ({ mapCamera, friendsList, midPointCam }) => {
  const mapViewRef = useRef(null);

  return (
    <View style={MapWStyle.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={StyleSheet.absoluteFill}
        ref={mapViewRef}
        camera={mapCamera}
        showsUserLocation
        showsMyLocationButton
        loadingEnabled
        scrollEnabled
      >
        {friendsList.map((friend) => (
          <Marker
            key={friend.id}
            title={friend.name + "'s Location"}
            coordinate={friend.coords}
            pinColor={CCOLOR.friendPinGreen}
          />
        ))}

        {midPointCam ? (
          <Marker
            title={"Midpoint Location"}
            coordinate={midPointCam.center}
            pinColor={CCOLOR.midpointPinBlue}
          />
        ) : null}
      </MapView>
    </View>
  );
};

export default MapWindow;
