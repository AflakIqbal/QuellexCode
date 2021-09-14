import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/Home';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

const Tab = createBottomTabNavigator();

function App() {
  const MidButton = ({children, onPress}) => {
    return (
      <TouchableOpacity
        style={{
          top: -15,
          justifyContent: 'center',
          alignItems: 'center',
          ...style.shadow,
        }}
        onPress={onPress}>
        <View
          style={{
            width: 70,
            height: 35,
            //backgroundColor: '#e32f45',
          }}>
          {children}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            borderTopWidth: 0,
            borderTopRightRadius: 18,
            borderTopLeftRadius: 18,
            height: 60,
            elevation: 0,
          },
        }}
        tabBarOptions={{
          showLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('./src/assests/images/MEDICOS_MODULE_ICONS-06.png')}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 35,
                    //tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('./src/assests/images/MEDICOS_MODULE_ICONS-01.png')}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 35,
                    //tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assests/images/add.png')}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  //tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
            ),
            tabBarButton: props => <MidButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Settin"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('./src/assests/images/MEDICOS_MODULE_ICONS-03.png')}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 35,
                    //tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Setti"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('./src/assests/images/MEDICOS_MODULE_ICONS-04.png')}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 35,
                    //tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default App;
