import axios from 'axios';
import React from 'react';

import {Button, StyleSheet, View, SafeAreaView} from 'react-native';
import {API_ENDPOINTS, restInit, url} from './static/api';

restInit();

const App = () =>
{
    const createTicket = async (params) =>
    {
        // Testing GET request
        // const id = 11;
        //const {data, status} = await axios.get(`${url}${API_ENDPOINTS.TICKET}${id}.json`);
        //console.log(data);

        // POST request
        const {data, status, error, description} = await axios.post(`${url}${API_ENDPOINTS.TICKETS}`,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },

                ticket: {
                    subject: 'From react native app',
                    description: 'Incident description',
                    type: 'incident',
                    priority: 'high',
                    due_at: '2020-08-10'
                }
            }
        );
        if (status === 201)
        {
            alert('Ticket successfully created');
        }
        console.log(data, status);

        //alert('button pressed');

    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Button
                    title="Create Ticket"
                    onPress={createTicket}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default App;



