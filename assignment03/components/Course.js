import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';  // Corrected import
import { StyleSheet, View, ScrollView, Image, TextInput } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';
import { IoPersonOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { RiProfileLine } from "react-icons/ri";
import { courses } from '../assets/database/StudentsDb (1)';  // Make sure the path is correct

export default function Course() {
   const navigation = useNavigation();
   const route = useRoute();
   const { user } = route.params || {};

   const course = courses.find(course => course.id === user.course_id);

    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.imagepad}>
                        <Image source={require('../assets/uovlogo.png')} style={styles.image} />
                    </View>
                    <View style={styles.div2}>
                        <Text style={styles.cname}>{course.name || 'Course not found'}</Text>
                        <Text style={styles.det}>Code: {course.id} | Dept: {course.department}</Text>
                    </View>
                    <Divider />
                    <View style={styles.div1}>
                        <Text style={styles.info}>Course Information</Text>
                        <Text style={{ color: 'black', fontSize: 12, marginTop: 15 }}>Code: {course.course_code}</Text>
                        <Text style={{ color: 'black', fontSize: 12, marginTop: 5 }}>Department: {course.department}</Text>
                        <Text style={{ color: 'black', fontSize: 12, marginTop: 5 }}>Duration: {course.duration}</Text>
                        <Text style={{ color: 'black', fontSize: 12, marginTop: 5 }}>Description: {course.description}</Text>
                    </View>
                </View>

                <View style={styles.horizontalBar}>
                    <Text style={{ color: '#ffffff', marginLeft: '35%' }}>UoV@2024</Text>
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
                    onPress={() =>navigation.navigate('subjects', { user })}
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
        color: 'black'
    },
    imagepad: {
        padding: 8,
        alignItems: 'center',
        flex: 2,
        marginBottom: 15
    },
    image: {
        width: '100%',
        height: 100,
    },

    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
    cname: {
        fontSize: 32,
        color: 'black',
        marginLeft: 60
    },
    horizontalBar: {
        width: '96%',
        height: 30,
        backgroundColor: '#4B0150',
        borderRadius: 2,
        marginLeft: '2%',
        marginTop: '70px'
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    det: {
        color: 'black',
        fontSize: 12,
        marginLeft: '43%',
        marginTop: 25
    },
    div1: {
        marginLeft: 20,
        marginTop: 35
    },
    info: {
        marginLeft: 20,
        marginTop: 35,
        color: 'black'
    }

});
