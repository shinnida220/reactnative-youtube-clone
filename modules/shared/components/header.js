import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import images from "../utils/images";

const Header = () => {
	return (
		<View style={styles.header}>
			<View style={styles.logo}>
				<Image source={images.logo_wide} style={styles.logoImage} />
			</View>
			<View style={styles.rightIconsContainer}>
				<Image source={images.connect_tv} style={{ width: 24 }} />
				<Ionicons name="md-notifications" size={24} color="grey" />
				<Ionicons name="search" size={24} color="grey" />
				<Image
					source={images.user}
					style={{
						width: 24,
						height: 24,
						borderRadius: 12,
						overflow: "hidden",
						borderWidth: 1,
						borderColor: colors.darkerRed,
					}}
				/>
				<Ionicons name="md-menu" size={24} color="grey" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 12,
		backgroundColor: "white",
		borderBottomWidth: 1,
		borderBottomColor: "lightgrey",
	},
	logo: {
		flexDirection: "row",
		alignItems: "flex-start", //center",
	},
	logoImage: {
		width: 90,
		height: 20,
		resizeMode: "contain",
	},
	logoText: {
		fontSize: 20,
		fontWeight: "bold",
		marginLeft: 6,
	},
	search: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
		borderRadius: 5,
		paddingHorizontal: 12,
		paddingVertical: 6,
	},
	searchText: {
		marginLeft: 6,
		color: "grey",
	},
	rightIconsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: 170,
	},
});

export default Header;
