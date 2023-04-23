import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";

const ChannelListItem = ({ channel }) => {
	return (
		<View style={styles.channelListItem}>
			<Image style={styles.channelListItemImage} source={{ uri: channel.imageUri }} />
			<Text numberOfLines={1} ellipsizeMode="tail" style={styles.channelListItemText}>
				{channel.name}
			</Text>
		</View>
	);
};

const ChannelList = ({ channels }) => {
	return (
		<View style={styles.channelList}>
			<View style={styles.channelListContainer}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{channels.map((channel) => (
						<ChannelListItem key={channel.id} channel={channel} />
					))}
				</ScrollView>
				<TouchableOpacity style={styles.viewAllButton}>
					<Text style={styles.viewAllButtonText}>View all</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	channelList: {
		padding: 12,
		backgroundColor: "white",
		borderBottomWidth: 1,
		borderBottomColor: "lightgrey",
	},
	channelListContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	viewAllButton: {
		backgroundColor: "white",
		borderRadius: 4,
		paddingHorizontal: 12,
		paddingVertical: 8,
		alignSelf: "center",
	},
	viewAllButtonText: {
		color: "#4285F4",
		fontSize: 12,
		fontWeight: "bold",
		textAlign: "center",
	},

	channelListItem: {
		marginRight: 12,
		alignItems: "center",
	},
	channelListItemImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	channelListItemText: {
		maxWidth: 70,
		marginTop: 4,
		textAlign: "center",
	},
});

export default ChannelList;
