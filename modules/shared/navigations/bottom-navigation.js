import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../home/app";
import { Image } from "react-native";
import images from "../utils/images";
import colors from "../../../assets/colors/colors";

const Tab = createBottomTabNavigator();
const screenOptions = {
	headerShown: false,
};

const getIcon = (name, selected) => {
	const wh = name === "create" ? 28 : name === "shorts" ? (selected ? 30 : 28) : 24;
	name += selected ? "_selected" : "";
	return <Image style={{ height: wh }} source={images[name]} />;
};

export default function BottomNavigation() {
	return (
		<Tab.Navigator initialRouteName="home" screenOptions={screenOptions}>
			<Tab.Screen
				name="home"
				component={Home}
				options={{ tabBarLabel: "Home", tabBarIcon: ({ focused }) => getIcon("home", focused), tabBarLabelStyle: { color: colors.black } }}
			/>
			<Tab.Screen
				name="shorts"
				component={Home}
				options={{
					tabBarLabel: "Shorts",
					tabBarIcon: ({ focused }) => getIcon("shorts", focused),
					tabBarLabelStyle: { color: colors.black },
				}}
			/>
			<Tab.Screen
				name="create"
				component={Home}
				options={{ tabBarLabel: "", tabBarIcon: ({ focused }) => getIcon("create", focused), tabBarLabelStyle: { color: colors.black } }}
			/>
			<Tab.Screen
				name="subscription"
				component={Home}
				options={{
					tabBarLabel: "Subscription",
					tabBarIcon: ({ focused }) => getIcon("subscription", focused),
					tabBarLabelStyle: { color: colors.black },
				}}
			/>
			<Tab.Screen
				name="library"
				component={Home}
				options={{
					tabBarLabel: "Library",
					tabBarIcon: ({ focused }) => getIcon("library", focused),
					tabBarLabelStyle: { color: colors.black },
				}}
			/>
		</Tab.Navigator>
	);
}
