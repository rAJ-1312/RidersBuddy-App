import { Tabs } from "expo-router";
import { Text } from "react-native";

function TabIcon({ label }: { label: string }) {
  return <Text style={{ fontSize: 20 }}>{label}</Text>;
}

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#0F0F0F", borderTopColor: "#1A1A1A" },
        tabBarActiveTintColor: "#FF5A1F",
        tabBarInactiveTintColor: "#555",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <TabIcon label="🗺️" />,
        }}
      />
    </Tabs>
  );
}
