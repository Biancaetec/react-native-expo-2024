import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuth } from "../../hooks/Auth/index";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

function CustomDrawerContent(props) {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1, backgroundColor: "#fffff" }}>
      <View style={{
        marginTop: 28,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      
      }}
      >
        <Image
          source={{
            uri: 'https://www.github.com/biancaetec.png',
          }}
          style={{ width: 100, height: 100, borderRadius: 50, margin: 10 }}
        />
        <Text style={{ textAlign: "center", fontSize: 20, fontFamily: "RobotoLight" }}
        >
          {user?.user?.nome}
        </Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity onPress={() => signOut()}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          margin: 10,
          backgroundColor: "#8B004C",
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white", fontFamily: "RobotoRegular",  fontSize: 16,
 }}>Deslogar</Text>
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
    drawerLabel: "Início",
    headerTitle: "CABANNI",
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontFamily: 'BonaNovaSCRegular', 
      fontSize: 23,
    },
    drawerIcon: () => (
    <AntDesign name="home" size={24} color="black" />
    ),
    headerRight: () => ( 
      <TouchableOpacity 
        onPress={() => router.push("perfil")} 
        style={{ marginRight: 10 }}>
           <FontAwesome
        name="user-circle"
        size={24}
        color="black"
        style={{ marginRight: 10 }}
      />
        </TouchableOpacity>
     
    ),
  }}
/>
        <Drawer.Screen
          name="sabonete"
          options={{
            drawerLabel: "Sabonete líquido",
            headerTitle: "Sabonete líquido",
            headerTitleAlign: 'center',
            drawerIcon: () => (
              <Ionicons name="list-circle-outline" size={20} color="black" />
            ),
          }}
        />
       
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "Hidratante",
            headerTitle: "Hidratante corporal",
            headerTitleAlign: 'center',
            drawerIcon: () => (
              <Ionicons name="list-circle-outline" size={20} color="black" />
            ),
          }}
        />
        {/*  */}

        <Drawer.Screen
          name="cart"
          options={{
            drawerLabel: "Minhas compras",
            headerTitle: "Sacola",
            headerTitleAlign: 'center',
            drawerIcon: () => (
              <Ionicons name="bag-handle-outline" size={24} color="black" />
            ),
            headerRight: () => ( 
              <TouchableOpacity 
                onPress={() => router.back("index.js")} 
                style={{ marginRight: 10 }}>
                  
              <Ionicons 
              name="bag-add" 
              size={24} 
              color="black"
                style={{ marginRight: 10 }}
              />
                </TouchableOpacity>
             
            ),
          }}
        />

        <Drawer.Screen
          name="perfil"
          options={{
            drawerLabel: "Perfil",
            headerTitle: "Perfil",
            headerTitleAlign: 'center',
            drawerIcon: () => (
              <Ionicons name="person-circle-outline" size={24} color="black" />
            ),
          }}
        />

        <Drawer.Screen
          name="payment"
          options={{
            drawerLabel: "Pagamento",
            headerTitle: "Pagamento",
            headerTitleAlign: 'center',
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
