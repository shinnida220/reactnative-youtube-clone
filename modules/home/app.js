import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React from "react";
import Header from "../shared/components/header";
import ChannelList from "../shared/components/topbar-channel-list";
import { channels } from "./data";

export default function Home() {
	return (
		<>
			<View style={{ flex: 1 }}>
				<StatusBar style="auto" />
				<View style={{ height: 28 }} />
				<Header />
				<ChannelList channels={channels} />
			</View>
		</>
	);
}
