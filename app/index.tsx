import { router } from "expo-router";
import { Alert, Pressable, StyleSheet ,Text, View } from "react-native";

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>
				Edit app/index.tsx to edit this screen.
			</Text>
			<Pressable style={styles.button}
				onPress={() => {
					router.replace("/add-activity-screen");
				}}
			>
				<Text style={styles.buttonText}>
					Add Activity
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	heading: {
		fontSize: 24
	},
	button: {
		backgroundColor: "purple",
		padding: 13,
		width: "100%",
	},
	buttonText: {
		color: "silver",
		textAlign: "center",
		fontSize: 16
	}
});