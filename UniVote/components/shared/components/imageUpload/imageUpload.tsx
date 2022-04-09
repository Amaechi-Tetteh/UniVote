import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import * as ImagePicker from "expo-image-picker"
import { MaterialIcons } from "@expo/vector-icons"
import { length_factor } from "../../styles/styles"

interface Props {
    imageUri: string
    onUpload: (imageUri: string) => void
}

export default function UploadImage({ imageUri, onUpload }: Props): JSX.Element {
    const handleUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        if (!result.cancelled) {
            onUpload(result.uri)
        }
    }

    return (
        <React.Fragment>
            <Text style={styles.upload_text}>Upload Image</Text>
            <View style={styles.image_container}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.upload_image} />
                ) : (
                    <TouchableOpacity onPress={handleUpload} style={styles.upload_button}>
                        <MaterialIcons name="image" size={36 * length_factor} color="#bebebe" />
                    </TouchableOpacity>
                )}
            </View>
        </React.Fragment>
    )
}
