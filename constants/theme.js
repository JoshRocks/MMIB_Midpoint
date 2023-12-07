const APPNAME = "MIDPOINT";

const CCOLOR = {
  bgWhite: "#f2f2f0",
  sbGray: "#d4d0cf",
  pureBlack: "#030302",

  pureWhite: "#fcfcfc",
  softBlack: "#171613",
  friendPinGreen: "#20bd4a",
  midpointPinBlue: "#05e4fc",
  hangoutPinPink: "#ed0547",

  ratingStarYellow: "#fada0a",
  websiteLinkBlue: "#3b88f5"
};

const CFONT = {
  title: "PMarker",
  regular: "OSRegular",
  bold: "OSBold",
  medium: "OSMedium",
};

const CSIZE = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  stupidLarge: 128,
};

const CSHADOW = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },

  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  large: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
};

const CRADIUS = {
  medium: 30,
  light: 10,
  square: 4,
};

const CGPS = {
  defaultLongitude: -81.6751,
  defaultLatitude: 41.5017,
  defaultLatDelt: 0.02,
  defaultLongDelt: 0.05,
};

export { CCOLOR, CFONT, CSHADOW, CSIZE, CRADIUS, CGPS, APPNAME };
