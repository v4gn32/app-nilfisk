import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '@hooks/redux';
import {setUserFromStorage} from '@store/slices/authSlice';
import {RootStackParamList} from '@types/index';

// Screens
import {WelcomeScreen} from '@screens/auth/WelcomeScreen';
import {LoginScreen} from '@screens/auth/LoginScreen';
import {ChangePasswordScreen} from '@screens/auth/ChangePasswordScreen';
import {MainTabNavigator} from './MainTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const dispatch = useAppDispatch();
  const {user, token} = useAppSelector(state => state.auth);

  // Restore session on app start
  useEffect(() => {
    const restoreSession = async () => {
      const storedToken = await AsyncStorage.getItem('@nilfisk:token');
      const storedUser = await AsyncStorage.getItem('@nilfisk:user');
      if (storedToken && storedUser) {
        dispatch(setUserFromStorage({token: storedToken, user: JSON.parse(storedUser)}));
      }
    };
    restoreSession();
  }, [dispatch]);

  const isAuthenticated = !!token && !!user;
  const mustChangePassword = user?.mustChangePassword ?? false;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isAuthenticated ? (
          // Auth Stack
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        ) : mustChangePassword ? (
          // Force password change on first login
          <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        ) : (
          // Main App
          <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
