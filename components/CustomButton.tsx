import React from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';

type ButtonProps = {
    title: string;
    onPress?(): void;
}


export const CustomButton = (props: ButtonProps) => {
    const {title, onPress} = props;
    return (
        <TouchableHighlight onPress={onPress} style={styles.btn}><View>
            <Text>{title}</Text>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
btn: {
    backgroundColor: "white",
    padding: 15,
    width: 100,
    height: 50,
    margin: 15,
    borderRadius: 8,
    textAlign: "center",
    alignItems: "center",

}
});