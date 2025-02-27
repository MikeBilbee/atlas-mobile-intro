import { router } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function AddActivityScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Add Activity Screen</Text>
			<Pressable style={styles.button}
				onPress={() => {
					router.replace("/");
				}}
			>
				<Text style={styles.buttonText}>
					Go Back
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	heading: {
		fontSize: 24
	},
	button: {
		backgroundColor: "teal",
		padding: 13,
		width: "100%",
	},
	buttonText: {
		color: "silver",
		textAlign: "center",
		fontSize: 16
	}
});