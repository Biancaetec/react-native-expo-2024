import { Drawer } from 'expo-router/drawer';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <View style={{ flex:1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity 
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        padding: 10,
        backgroundColor: "#0000ff",
      }}
      >
        <Text>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
}

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen 
          name="index"  
          options={{
            drawerLabel: "Principal", 
            headerTitle:"Principal",
            drawerIcon: () => (
              <Ionicons name="home-outline" size={20} color="black" />
            ),
            }} 
          /> 
          <Drawer.Screen 
          name="list"  
          options={{
            drawerLabel: "Listagem", 
            headerTitle:"Listagem",
            drawerIcon: () => (
            <Ionicons name="list-circle-outline" size={20} color="black" />
            ),
            }} 
          />
          <Drawer.Screen 
          name="payment"  
          options={{
            drawerLabel: "Pagamentos", 
            headerTitle:"Pagamentos",
            drawerIcon: () => (
            <Ionicons name="diamond-outline" size={20} color="black" />
            ),
          }} 
          />
          </Drawer>
        </GestureHandlerRootView>
      );
}

export default function Layout() {
    return DrawerLayout();
}
