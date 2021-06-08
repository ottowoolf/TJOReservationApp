import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ReservationProps = {
    reservation: {
        date: string,
        time: String,
        guests: Number,
        notes: String,
        confirmationNumber: String,
        reservationStatus: {
            description: String
        }
    }
}

export const Reservation = (props : ReservationProps) => {
    const { reservation } = props;
    let date = new Date(reservation.date);
    let today = new Date();
    today.setHours(0,0,0,0);
    let headerBackground = {backgroundColor: "#000000" };
console.log(new Date())
    if(date <  today)
    {
        headerBackground = {backgroundColor: "#7E7E7E"};
    }
    return(
        <View style={styles.container}>
            <View style={[styles.cardHeader, headerBackground]}>
                <Text style={styles.headerText}>{reservation.date}</Text>
                <Text style={styles.headerText}>{reservation.time}</Text>
            </View>
            <View style={styles.cardBody}>
                <Text>Guests: {reservation.guests}</Text>
                <Text>Notes: {reservation.notes}</Text>
                <View style={styles.reservationDetails}>
                <Text>Confirmation Number: {reservation.confirmationNumber}</Text>
                <Text>Status: <Text style={styles.statusText}>{reservation.reservationStatus.description}</Text></Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: "#FFFFFF",      
        alignSelf: "stretch",
        margin: 20,     
    },
    cardHeader: {
        borderTopLeftRadius: 5,
        borderTopEndRadius: 5,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerText: {
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    cardBody: {
        padding: 15,
        gap: 5
    },
    statusText: {
        textTransform: "uppercase"
    },
    reservationDetails: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})