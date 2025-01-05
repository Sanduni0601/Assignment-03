import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';

export default function Login() {
   const navigation = useNavigation();
    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text variant="headlineLarge">Headline Large</Text>
                    <Divider />
                    <Text variant="bodyMedium" style={styles.body}>
                       
                    </Text>
                    <Button icon="camera" mode="outlined" onPress={()=>navigation.navigate('contact')}>
                        Contact Us
                    </Button>
                    <Button icon="camera" mode="outlined" onPress={()=>navigation.navigate('aboutus')}>
                        About Us
                    </Button>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10
    },
    body: {
        padding: 8,
        textAlign: 'justify'
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
});