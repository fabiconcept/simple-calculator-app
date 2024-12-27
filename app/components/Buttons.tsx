import { StyleSheet, View } from "react-native";
import Button from "./Button";

export default function Buttons() {
    return (
        <View style={styles.container}>
            <Button value="/" />
            <Button value="(" />
            <Button value=")" />
            <Button value="%" />
            <Button value="*" />
            <Button value="7" style={styles.numbers} />
            <Button value="8" style={styles.numbers} />
            <Button value="9" style={styles.numbers} />
            <Button value="+" />
            <Button value="4" style={styles.numbers} />
            <Button value="5" style={styles.numbers} />
            <Button value="6" style={styles.numbers} />
            <Button value="-" />
            <Button value="1" style={styles.numbers} />
            <Button value="2" style={styles.numbers} />
            <Button value="3" style={styles.numbers} />
            <Button value="<" style={styles.del} />
            <Button value="0" style={styles.numbers} />
            <Button value="=" style={styles.eqs} textStyle={{color: "#0E2432"}} flex={12} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        flexWrap: "wrap",
        gap: 6
    },
    numbers: {
        backgroundColor: '#ffffff55',
    },
    eqs: {
        backgroundColor: '#ffffff',
    },
    del: {
        backgroundColor: '#0E2432',
    },
})