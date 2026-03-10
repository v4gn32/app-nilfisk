import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '@types/index';
import {COLORS, FONTS, USER_ROLES} from '@constants/index';
import {useAppSelector} from '@hooks/redux';

// Tab Screens (each wraps a stack navigator)
import {HomeScreen} from '@screens/shared/HomeScreen';
import {EntregasNavigator} from './EntregasNavigator';
import {RelatoriosScreen} from '@screens/shared/RelatoriosScreen';
import {PerfilScreen} from '@screens/shared/PerfilScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabNavigator() {
  const {user} = useAppSelector(state => state.auth);
  const isAdmin = user?.role === USER_ROLES.ADMIN;
  const isLogistica = user?.role === USER_ROLES.LOGISTICA;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: 'rgba(0,0,0,0.07)',
          paddingBottom: 20,
          paddingTop: 8,
          height: 72,
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.semiBold,
          fontSize: 10,
        },
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor: COLORS.gray,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <TabIcon name="home" color={color} />,
        }}
      />
      {/* Entregas only for Admin and Logística */}
      {(isAdmin || isLogistica) && (
        <Tab.Screen
          name="Entregas"
          component={EntregasNavigator}
          options={{
            tabBarLabel: 'Entregas',
            tabBarIcon: ({color}) => <TabIcon name="truck" color={color} />,
          }}
        />
      )}
      {/* Relatórios only for Admin */}
      {isAdmin && (
        <Tab.Screen
          name="Relatorios"
          component={RelatoriosScreen}
          options={{
            tabBarLabel: 'Relatórios',
            tabBarIcon: ({color}) => <TabIcon name="chart" color={color} />,
          }}
        />
      )}
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => <TabIcon name="user" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// Placeholder icon component — replace with react-native-vector-icons
function TabIcon({name, color}: {name: string; color: string}) {
  const icons: Record<string, string> = {
    home: '⊞', truck: '🚚', chart: '📊', user: '👤',
  };
  return null; // Replace with actual Icon component
}
