import React from "react";

import App from "./App";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tapBar={(props) => <CustomTabBar {...props} />}
    ></Tab.Navigator>
  );
}

const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen initalRouteName="Home" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
