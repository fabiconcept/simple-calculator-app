import { Pressable, StyleSheet, ToastAndroid, View } from "react-native";
import BackIcon from "./SVGs/backIcon";
import SettingsIcon from "./SVGs/settingsIcon";
import { useContext } from "react";
import { AppContext } from "../(tabs)";

export default function Header() {
    const { equation, setScreen, setEquation,setError } = useContext(AppContext);
    return (
        <View style={styles.container}>
            <Pressable
                onPress={()=>{
                    setScreen(equation)
                    ToastAndroid.show("Used previous Equation", 5)
                }}
                disabled={equation.length === 0}
            >
                <BackIcon style={styles.logo} />
            </Pressable>
            <Pressable
                onPress={()=>{
                    setEquation("");
                    setScreen("");
                    setError("");
                    ToastAndroid.show("You cleared your history", 5)
                }}
            >
                <SettingsIcon style={styles.logo} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    logo: {
        width: 35,
        height: 35,
    },
})