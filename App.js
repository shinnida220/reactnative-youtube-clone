import { KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./modules/shared/navigations/bottom-navigation";

export default function App() {
	return (
		<NavigationContainer>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
				keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
			>
				<BottomNavigation />
			</KeyboardAvoidingView>
		</NavigationContainer>
	);
}
