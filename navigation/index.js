import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Forgot from "../screens/Forgot";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
import Product from "../screens/Product";
import Settings from "../screens/Settings";
import Appointment from "../screens/Appointment";
import MyAppointment from "../screens/MyAppointment";
import Dietplan from "../screens/Dietplan";
import Moodtracker from "../screens/Moodtracker";
import Waterlevel from "../screens/Waterlevel";
import Journal from "../screens/journal";
import AddToJournal from "../screens/AddToJournal";
import CataractTest from "../screens/CataractTest";
import Camera from "../screens/Camera";
import Chat from "../screens/chat";

import { theme } from "../constants";

import { Button, Block, Text } from "../components/index";
import { View } from "react-native";

const screens = createStackNavigator(
  {
    Welcome,
    MyAppointment,
    Dietplan,
    Explore,
    Camera,
    Login,
    SignUp,
    Browse,
    AddToJournal,
    Journal,
    Settings,
    Waterlevel,
    Forgot,
    Appointment,
    Chat,
    Product,
    MyAppointment,
  },
  {
    defaultNavigationOptions: {
      headerTitle: () => (
        <View style={{ width: "85%", justifyContent: "center" }}>
          <Text h1 center bold>
            HEALTH
            <Text h1 primary>
              {" "}
              FIRST
            </Text>
          </Text>
        </View>
      ),
      headerStyle: {
        marginTop: 0,
        borderBottomColor: "transparent",
        elevation: 1,
      },
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

export default createAppContainer(screens);
