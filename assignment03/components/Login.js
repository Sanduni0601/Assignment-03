import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Image,TextInput } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';
import React, { useState } from 'react';
import {students} from '../assets/database/StudentsDb (1)'

export default function Login() {
   const navigation = useNavigation();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');


   const validateLogin = () => {
    const user = students.find(
        (student) => student.username === username && student.password === password
    );

    if (user) {
        navigation.navigate('profile', { user }); 

        setErrorMessage('')
    } else {
        setErrorMessage('Invalid Username or Password');
    }
};

    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.imagepad}>
                        <Image source={require('../assets/uovlogo.png')} style={styles.image}/>
                    </View>
                    <Text style={styles.h1}>STUDENT LOGIN</Text>
                    <Text variant="bodyMedium" style={styles.body}>
                    <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="#aaa" 
                            value={username} 
                            onChangeText={(newUser) => setUsername(newUser)} 
                        />

                    <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#aaa" 
                            value={password} 
                            onChangeText={(newPass) => setPassword(newPass)} 
                        />
                    </Text>
                    <Button style={styles.button} mode="outlined" onPress = {validateLogin}>Login</Button>
                </View>
                {errorMessage ? (
                    <Text style={styles.errorText}>{errorMessage}</Text>
                ) : null}

                <View style={styles.horizontalBar} />
            </ScrollView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
    },
    imagepad:{
        padding: 8,
         alignItems: 'center',
        flex: 2,
        marginBottom: 5
    },
    image:{
        width: '100%',
        height: 100,
    },
    body: {
        padding: 8,
        textAlign: 'justify',
        flex: 6,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
    
    scrollView: {
        flexGrow: 1, 
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: 'center',
        marginTop:10
    },
    h1: {
        fontSize: 35, // Large font size
        fontWeight: 'bold', // Bold text
        color: '#000',
        marginTop:80,
        textAlign:'center'
      },
      input:
      {height: 40,
      width: '80%',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      fontSize: 16,
      marginTop: '10%',
      marginLeft:'10%'},
    
    button:{
        backgroundColor:'#4B0150',
        width:'80%',
        marginLeft:'10%',
        marginTop:'8%'
    },
    horizontalBar: {
        width: '96%', 
        height: 15, 
        backgroundColor:'#4B0150', 
        borderRadius: 2, 
        marginLeft:'2%',
        marginTop:'170px'
      },
});