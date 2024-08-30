import { Ionicons } from "@expo/vector-icons";
import { 
  DrawerContentScrollView, 
  DrawerItemList,
} from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuth } from "../../hooks/Auth/index";

// estilizando o Drawer (menu)

function CustomDrawerContent(props) {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex:1 }}>
      <View style={{ 
        marginTop: 20, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "#f0fcff",
        paddingVertical: 10,
        }}
      >
      <Image 
        source={{
          uri: 'https://www.github.com/biancaetec.png', //img do usuario
        }}
        style={{ width: 100, height: 100, borderRadius: 50, margin: 10 }}
      />
        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "OpenSansMedium" }}
        >
          {user?.user?.nome}
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity 
      onPress={()=>signOut()}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        margin: 10,
        backgroundColor: "#0000ff",
        borderRadius: 5,
      }}
      >
        <Text style={{ color: "white", fontFamily: "RobotoMedium" }}>Deslogar</Text>
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
