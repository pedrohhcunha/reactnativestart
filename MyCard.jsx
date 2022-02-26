import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

export default function MyCard(props) {
    return(
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Card title</Text>
            <Text style={styles.cardText}>Here ir a cards text to text the card component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 4,
        marginVertical: 5
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardSubtitle: {
        color: '#999',
        fontSize: 14
    }
})