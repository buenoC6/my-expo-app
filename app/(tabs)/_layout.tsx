import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import {Pressable} from "react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

function NotificationsIcon({name, position}: {name: any, position: "left" | "right"}) {
    const colorScheme = useColorScheme();
    return <Link href={"/"} asChild>
        <Pressable>
            {({ pressed }) => <FontAwesome
                name={name}
                size={21}
                color={Colors[colorScheme ?? 'light'].text}
                style={{
                    opacity: pressed ? 0.25 : .5,
                    fontWeight: '300',
                    marginLeft: position === "left" ? 20 : 0,
                    marginRight: position === "right" ? 20 : 0,
                }}
            />
            }
        </Pressable>
  </Link>
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const notificationItems = {
      headerLeft: () => NotificationsIcon({name: "power-off", position: "left"}),
      headerRight: () => NotificationsIcon({name: "bell", position: "right"})
  }

  return (
    <Tabs
        initialRouteName={'index'}
        screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: useClientOnlyValue(false, true),
        }}>
      <Tabs.Screen
        name="index"
        options={{
            title: 'Portfolios',
            tabBarIcon: ({ color }) => <TabBarIcon name="pie-chart" color={color} />,
            ...notificationItems
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
            title: 'Accounts',
            tabBarIcon: ({ color }) => <TabBarIcon name="credit-card" color={color} />,
            ...notificationItems
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
            title: 'Products',
            tabBarIcon: ({ color }) => <TabBarIcon name="shopping-bag" color={color} />,
            ...notificationItems
        }}
      />
      <Tabs.Screen
        name="activites"
        options={{
            title: 'Activites',
            tabBarIcon: ({ color }) => <TabBarIcon name="comment" color={color} />,
            ...notificationItems
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
            title: 'More',
            tabBarIcon: ({ color }) => <TabBarIcon name="ellipsis-h" color={color} />,
            ...notificationItems
        }}
      />
    </Tabs>
  );
}
