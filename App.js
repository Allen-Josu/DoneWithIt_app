import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <Text numberOfLines={4} onPress={() => console.log("Pressed")}>
                Hello React Native. My Name is Allen. I am from Cherthala,
                Alappuzha. My fathers is a business man. I am a developer
                currently studing App Development. I have 2 brothers
            </Text>
            <Image
                fadeDuration={1000}
                blurRadius={3}
                source={{
                    height: 200,
                    width: 200,
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdt9rY-e2X-S42f-z8c2Ct160N4rFMlTGxLA&s",
                }}
            />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
