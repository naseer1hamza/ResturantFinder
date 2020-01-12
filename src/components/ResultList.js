import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation';

const ResultList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.constainer} >
            <Text style={styles.title} >
                {title}
            </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        marginLeft: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    constainer: {
        marginBottom: 10
    }
});

export default withNavigation(ResultList);