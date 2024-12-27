import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "../(tabs)";

export default function Screen() {
    const { screen, equation, error } = useContext(AppContext)

    const screenValue = screen.trim() ? screen.trim() : "0.00";
    const equationValue = equation.trim() ? equation.trim() : "0.00";
    
    return (
        <View style={styles.screen}>
            <Text style={[styles.error, error && styles.errorVisible]} numberOfLines={1}>{error}</Text>
            <Text style={styles.equation} numberOfLines={1}>{equationValue}</Text>
            <Text style={styles.result} ellipsizeMode="head" numberOfLines={1}>{screenValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    equation: {
        fontSize: 32,
        color: "#fff",
        textAlign: "right"
    },
    result: {
        fontSize: 60,
        color: "#fff",
        textAlign: "right",
        fontWeight: "900",
    },
    error: {
        color: "#f00",
        textAlign: "right",
        fontSize: 16,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    errorVisible: {
        backgroundColor: "#ffffff3a",
    }
})