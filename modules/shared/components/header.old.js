// import React from "react";
// import { Image, StyleSheet, View } from "react-native";
// import colors from "../../../assets/colors/colors";
// import images from "../utils/images";

// export default function Header() {
// 	return (
// 		<View style={styles.main}>
// 			<View style={styles.topBar}>
// 				<Image source={images.logo_wide} style={styles.topbarLogo} />
// 				<View style={styles.topBarIconContainer}>
// 					<Image source={images.connect_tv} style={styles.topBarIcons} />
// 					<Image source={images.notification} style={styles.topBarIcons} />
// 					<Image source={images.search} style={styles.topBarIcons} />
// 					<Image
// 						source={images.user}
// 						style={{
// 							...styles.topBarIcons,
// 							borderRadius: styles.topBarIcons.width / 2,
// 							overflow: "hidden",
// 							borderWidth: 1,
// 							borderColor: colors.darkerRed,
// 						}}
// 					/>
// 				</View>
// 			</View>
// 			<View style={styles.bottomBar}></View>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	/* Auto layout */
// 	main: {
// 		display: "flex",
// 		flexDirection: "column",
// 		alignItems: "flex-start",
// 		padding: 10,
// 		gap: 12,
// 		// position: "absolute",
// 		// width: "360px",
// 		height: 106,
// 		left: 0,
// 		top: 0,
// 		background: colors.white,
// 	},

// 	topBar: {
// 		display: "flex",
// 		flexDirection: "row",
// 		justifyContent: "space-between",
// 		alignItems: "center",
// 		padding: 2,
// 		gap: 130,
// 		// width: 338,
// 		height: 28,
// 	},

// 	topbarLogo: {
// 		width: 90,
// 		height: 20,

// 		/* Inside auto layout */
// 		order: 0,
// 		flexGrow: 0,
// 	},

// 	topBarIconContainer: {
// 		display: "flex",
// 		flexDirection: "row",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		padding: 0,
// 		gap: 22,
// 		height: 24,
// 		order: 1,
// 	},

// 	topBarIcons: {
// 		width: 24,
// 		height: 24,
// 		/* Inside auto layout */
// 		// flex: ,
// 		// order: 0,
// 		flexGrow: 0,
// 	},

// 	bottomBar: {
// 		// display: "flex",
// 		// flexDirection: "row",
// 		// alignItems: "center",
// 		// padding: "0px",
// 		// gap: "14px",
// 		// width: "338px",
// 		// height: "34px",
// 		// /* Inside auto layout */
// 		// flex: "none",
// 		// order: "2",
// 		// flexGrow: "0",
// 	},
// });
