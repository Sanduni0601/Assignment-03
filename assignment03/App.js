import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Profile from './components/Profile'
import Login from './components/Login';

const Stack = createNativeStackNavigator();
export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login'
          screenOptions={{
            headerStyle: { backgroundColor: '#4B0150' },
            
          }}
        >
          <Stack.Screen name='login' component={Login} options={{ title: "UoV Student Care" ,headerTitleAlign: 'center',headerTitleStyle: {
      fontWeight: 'bold', 
      color: '#FFFFFF',
      fontSize: 28, 
    },}} />
    <Stack.Screen name='profile' component={Profile} options={{ title: "UoV Student Care" ,headerTitleAlign: 'center',headerTitleStyle: {
      fontWeight: 'bold', 
      color: '#FFFFFF',
      fontSize: 28, 
    },}} />
          {/* <Stack.Screen name='contact' component={ContactUs} options={{ title: "Contact Us" }} />
          <Stack.Screen name='aboutus' component={AboutUs} options={{ title: "About Us" }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}
