import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { PaperProvider, Text, Button } from 'react-native-paper';
import { IoPersonOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { RiProfileLine } from "react-icons/ri";


const MarksCard = () => {
  const subjects = [
    { name: 'Data Structures', mark: 85 },
    { name: 'Algorithms', mark: 90 },
    { name: 'Database Systems', mark: 88 },
  ];

  const averageMark =
    subjects.reduce((total, subject) => total + subject.mark, 0) /
    subjects.length;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Computer Science</Text>
      <Text style={styles.subtitle}>
        {subjects.length} Subjects | Average: {averageMark.toFixed(2)}
      </Text>
      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>Marks Information</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Subject</Text>
          <Text style={styles.tableHeaderText}>Mark</Text>
        </View>
        {subjects.map((subject, index) => (
          <View
            key={index}
            style={[
              styles.tableRow,
              index % 2 === 0 && styles.tableRowAlternate,
            ]}
          >
            <Text style={styles.tableCell}>{subject.name}</Text>
            <Text style={styles.tableCell}>{subject.mark}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function Login() {
  const navigation = useNavigation();

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.imagepad}>
            <Image source={require('../assets/uovlogo.png')} style={styles.image} />
          </View>
          <MarksCard />
        </View>
        <View style={styles.horizontalBar}>
          <Text style={{ color: '#ffffff', marginLeft: '35%' }}>UoV@2024</Text>
        </View>
      </ScrollView>
    
         <View style={styles.bottomNav}>
                    <Button
                        mode="text"
                        onPress={() => navigation.popTo('profile')}
                        style={{ flexDirection: 'column', alignItems: 'center' }} 
                        >
              <View style={{ alignItems: 'center' }}>
                <IoPersonOutline size={20} color='#4B0082' /> 
                <Text style={{ color: '#4B0082' }}>Profile</Text> 
              </View>
            </Button>
            <Button
                        mode="text"
                        onPress={() => navigation.popTo('course')}
                        style={{ flexDirection: 'column', alignItems: 'center' }} 
                        >
              <View style={{ alignItems: 'center' }}>
                <GiGraduateCap size={20} color="purple" /> 
                <Text style={{ color: '#4B0082' }}>Course</Text> 
              </View>
            </Button>
            <Button
                        mode="text"
                        onPress={() => navigation.popTo('subjects')}
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
    color: 'black',
  },
  imagepad: {
    padding: 8,
    alignItems: 'center',
    flex: 2,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 100,
  },
  scrollView: {
    flexGrow: 1,
  },
  horizontalBar: {
    width: '96%',
    height: 30,
    backgroundColor: '#4B0150',
    borderRadius: 2,
    marginLeft: '2%',
    marginTop: 70,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    margin: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#555',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  table: {
    marginTop: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  tableRowAlternate: {
    backgroundColor: '#f9f9f9',
  },
  tableCell: {
    fontSize: 14,
    color: '#333',
  },
});
