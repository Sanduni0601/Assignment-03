import { useNavigation ,useRoute} from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Image,TextInput } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';
import React, { useState } from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { RiProfileLine } from "react-icons/ri";

export default function Login() {
   const navigation = useNavigation();
   const route = useRoute();
   const user = route.params?.user;

    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.imagepad}>
                        <Image source={require('../assets/uovlogo.png')} style={styles.image}/>
                    </View>
                    <Text variant="bodyMedium" style={styles.body}>
                    <View style={styles.profileImageContainer}>
          <Image 
            source={user?.profile_pic}
            style={styles.profileImage}
          />
        </View>
        
        
        <View style={styles.NameSection}>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.info}>Age: {user?.age} | Gender: {user?.gender}</Text>
        </View>
        <Divider/>
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <Text style={{color:'black'}}>Email: {user?.email}</Text>
          <Text style={{color:'black'}}>Phone: {user?.phone}</Text>
          <Text style={{color:'black'}}>Address: {user?.address}</Text>
        </View>

        <View style={styles.biologicalInfoSection}>
          <Text style={styles.sectionTitle}>Biological Information</Text>
          <Text style={{color:'black'}}>Gender: {user?.gender}</Text>
          <Text style={{color:'black'}}>Age: {user?.age}</Text>
          <Text style={{color:'black'}}>Blood Group: {user?.blood_group}</Text>
        </View>
                    </Text>
                </View>

                
                  <View style={styles.horizontalBar}>
         <Text style = {{color:'#ffffff', marginLeft:'35%'}}>UoV@2024</Text>
        </View>
            </ScrollView>
            <View style={styles.bottomNav}>
            <Button
                mode="text"
                onPress={() => navigation.navigate('profile', { user })}
                style={{ flexDirection: 'column', alignItems: 'center' }} 
                >
      <View style={{ alignItems: 'center' }}>
        <IoPersonOutline size={20} color='#4B0082' /> 
        <Text style={{ color: '#4B0082' }}>Profile</Text> 
      </View>
    </Button>
    <Button
                mode="text"
                onPress={() => navigation.navigate('course', { user })}
                style={{ flexDirection: 'column', alignItems: 'center' }} 
                >
      <View style={{ alignItems: 'center' }}>
        <GiGraduateCap size={20} color="purple" /> 
        <Text style={{ color: '#4B0082' }}>Course</Text> 
      </View>
    </Button>
    <Button
                mode="text"
                onPress={() => navigation.navigate('subjects', { user })}
                style={{ flexDirection: 'column', alignItems: 'center' }} 
                >
      <View style={{ alignItems: 'center' }}>
        <RiProfileLine size={20} color="purple" /> 
        <Text style={{ color: '#4B0082' }}>Subjects</Text> 
      </View>
    </Button>
      </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        color:'black'
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
       backgroundColor:'#ffffff',
       height:'100%'
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
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
        height: 30, 
        backgroundColor:'#4B0150', 
        borderRadius: 2, 
        marginLeft:'2%',
        marginTop:'70px'
      },
      bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
      },
      profileContainer: {
        padding: 20,
        flex: 1,
      },
      profileImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
        color:'black'
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginLeft:150
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color:'black',
        marginLeft:120
      },
      info: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 20,
        color:'black', 
        marginLeft:120 
      },
      contactSection: {
        marginBottom: 20,
        color:'black',
        marginTop:20,
        marginLeft:20
      },
      biologicalInfoSection: {
        marginBottom: 20,
        color:'black',
        marginTop:40,
        marginLeft:20
      },
      sectionTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'black'
      },
});