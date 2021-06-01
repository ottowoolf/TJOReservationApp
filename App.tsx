import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Linking, TouchableHighlight, ActivityIndicator } from 'react-native';
import {TextInput} from './components/Input';
import {CustomButton} from './components/CustomButton';
import {search} from './services/reservations'

export default function App() {
  const [input, setInput] = useState("");
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleGoPress = () => {
    setLoading(true);
search(input).then(
  
  (data: any) => {setReservations(data);
setLoading(false);
}).catch(error => {
  setLoading(false);
})
  }

  const renderReservations = () => {
    return reservations.map((r: any) => (
      <View key={r.confirmationNumber} style={styles.card}>
        <Text style={styles.title}>Confirmation Number: {r.confirmationNumber}</Text>
        <Text style={styles.title}>Reservation Date: {r.date}</Text>
        <Text style={styles.title}>reservation Time: {r.time}</Text>
        <Text style={styles.title}>Number of Guests: {r.guests}</Text>
        <Text style={styles.title}>Notes: {r.notes}</Text><Text style={styles.title}>Reservation Status: {r.reservationStatus.description}</Text>
      </View>
    ))
  }
  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <Image 
          style={styles.img}
          source={require('./assets/teeojo-logo-transparent-white.png')}
          
        />
      </View>
      <View style={styles.view1}>
        <TextInput value={input} onChange={setInput} placeholder="Search Reservations"/>
        <CustomButton title="Go" onPress={handleGoPress}/>
      </View>
      <ScrollView contentContainerStyle={{ flex: 1}}>
      <View style={styles.view2}>
        {loading ? <ActivityIndicator style={{marginTop: 20}} size="large" color="red"/> : renderReservations()}         
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "#D87348",

  },
  view1: {
    backgroundColor: "#F0EAD1",
    padding: 10,
    flexDirection: "row"
  },
  view2: {
    flexGrow: 1,
    alignItems: "center",
    
  },
  card: {
    text: "black",
    alignItems: "center",
backgroundColor: "white",
borderRadius: 8,
paddingTop: 20,
paddingBottom: 20,
margin: 10,
width: 500,
  },
  img: {
    width: 150,
    height: 50,
    padding: 10,
  },
  title: {
    marginBottom: 8,
    color: "black",
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "black",
    height: 50,
    alignItems: "center",
    justifyContent: "center",

  },
   header: {
    backgroundColor: "#D87348",
    padding: 10,
    flexDirection: "row"
  },
});