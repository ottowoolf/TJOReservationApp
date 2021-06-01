import React from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';

type ButtonProps = {
    title: string;
    onPress?(): void;
}


export const CustomButton = (props: ButtonProps) => {
    const {title, onPress} = props;
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{title}</Text>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
btn: {
    backgroundColor: "#D87348",
    
    width: 70,
    height: 70,
    borderRadius: 8,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",

},
btnText: {
color: "white",
fontWeight: "bold",
fontSize: 18,
},
});