import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{ title: "Home",  }}>
			</Stack.Screen>
			<Stack.Screen
				name="add-activity-screen"
				options={{ title: "Add Activity" }}>
			</Stack.Screen>
		</Stack>
	);
}
