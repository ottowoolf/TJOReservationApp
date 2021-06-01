import React from 'react'
import {TextInput as RNTextInput, StyleSheet} from 'react-native';

type TextInputProps = {
    placeholder: string;
    padding?: number;
    value: string;
    onChange?(text: string): void;
}

export const TextInput = (props: TextInputProps) => {
    const {value, onChange, placeholder, padding = 8} = props;
    return (
       <RNTextInput style={styles.input} value={value} onChangeText={onChange} placeholder={placeholder}/>
    );
}

const styles = StyleSheet.create({

  input: {
      flex: 1,
    padding: 8,
     backgroundColor: "#fff",
      borderRadius: 5
  },
  view2: {
    backgroundColor: "yellow",
  },
});