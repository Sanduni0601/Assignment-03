import React from 'react';
import { useNavigation,useRoute } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { PaperProvider, Text, Button } from 'react-native-paper';
import { IoPersonOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { RiProfileLine } from "react-icons/ri";
import { courses, subjects, marks } from '../assets/database/StudentsDb (1)';

export default function Login({ studentData }) {
  const navigation = useNavigation();
  const route = useRoute();
     const { user } = route.params || {};
  
     const course = courses.find(course => course.id === user.course_id)
  const courseSubjects = subjects.filter(subject => subject.course_id === course.id);

  // Get the marks of the student
  const studentMarks = marks.filter(mark => mark.student_id === user.id);

  // Calculate total and average marks
  const totalMarks = studentMarks.reduce((acc, mark) => acc + mark.marks, 0);
  const averageMarks = studentMarks.length > 0 ? (totalMarks / studentMarks.length).toFixed(0) : 0;

  // Map subjects with corresponding marks
  const subjectsWithMarks = courseSubjects.map(subject => {
    const mark = studentMarks.find(m => m.subject_id === subject.id);
    return {
      subjectName: subject.name,
      marks: mark ? mark.marks : 0,
    };
  });

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.imagepad}>
            <Image source={require('../assets/uovlogo.png')} style={styles.image} />
          </View>

          <View style={styles.card}>
            <Text style={styles.title}>{course ? course.name : 'Unknown Course'}</Text>
            <Text style={styles.subtitle}>
              {courseSubjects.length} Subjects | Average: {averageMarks}
            </Text>
            <View style={styles.divider} />
            <Text style={styles.sectionTitle}>Marks Information</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Subject</Text>
                <Text style={styles.tableHeaderText}>Mark</Text>
              </View>
              {subjectsWithMarks.map((subject, index) => (
                <View
                  key={index}
                  style={[styles.tableRow, index % 2 === 0 && styles.tableRowAlternate]}
                >
                  <Text style={styles.tableCell}>{subject.subjectName}</Text>
                  <Text style={styles.tableCell}>{subject.marks}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.horizontalBar}>
          <Text style={{ color: '#ffffff', marginLeft: '35%' }}>UoV@2024</Text>
        </View>
      </ScrollView>

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
