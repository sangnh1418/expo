import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing';
import { styles } from './style'

const HomeScreens = (props) => {
	const [selectedImage, setSelectedImage] = React.useState(null);

	const openExpoImage = async () => {
		const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
		if (permissionResult.granted === false) {
			alert("Permission to access camera roll is required!");
			return;
		}
		const pickerResult = await ImagePicker.launchImageLibraryAsync();
		if (pickerResult.cancelled === true) {
			return;
		}
		setSelectedImage({ localUri: pickerResult.uri });
	}
	const shareImageExpo = async () => {
		if (!(await Sharing.isAvailableAsync())) {
			alert(`Uh oh, sharing isn't available on your platform`);
			return;
		}
		Sharing.shareAsync(selectedImage.localUri);
	}
	return (
		<React.Fragment>
			<View style={styles.container}>
				{selectedImage !== null
					? <View style={styles.expoImage}>
						<Image
							source={{ uri: selectedImage.localUri }}
							style={styles.thumbnail}
						/>
						<TouchableOpacity
							onPress={shareImageExpo}
							style={[styles.button, { marginRight: 'auto', marginLeft: 'auto' }]}
						>
							<Text style={styles.buttonText}>Sharing Image</Text>
						</TouchableOpacity>
					</View>
					: null}
				<View style={styles.introduction}>
					<Text>To share photo to click button!</Text>
				</View>
				<TouchableOpacity
					onPress={openExpoImage}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Pick a photo</Text>
				</TouchableOpacity>
			</View>
		</React.Fragment>
	);
}

export default HomeScreens;