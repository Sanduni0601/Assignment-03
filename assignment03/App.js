import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import Profile from './components/Profile'
 import Login from './components/Login';
 import Bottom from './components/Bottom';
// import Course from './components/Course';
// import Subjects from './components/Subjects';

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
    <Stack.Screen name='bottom' component={Bottom} options={{ title: "UoV Student Care" ,headerTitleAlign: 'center',headerTitleStyle: {
      fontWeight: 'bold', 
      color: '#FFFFFF',
      fontSize: 28, 
    },}} />
   
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}
