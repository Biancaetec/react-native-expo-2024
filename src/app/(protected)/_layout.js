import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuth } from "../../hooks/Auth/index";
import { router } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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
          source={require('../../../src/assets/images/logoperfilcabanni2.png')}
        
          style={{ width: 100, height: 100, borderRadius: 50, margin: 10 }}
        />
        <Text style={{ textAlign: "center", fontSize: 20,  fontWeight: '500', color: '#333' }}
        >
          
          {user?.user?.nome}
        </Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* <TouchableOpacity onPress={() => signOut()}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          margin: 10,
          backgroundColor: "#007bfc",
          borderRadius: 12,
        }}
      >
        <Text style={{
          color: "white", fontFamily: "RobotoRegular", fontSize: 16,
        }}>Deslogar</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>


      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>


        <Drawer.Screen
          name="geral"
          options={{
            drawerLabel: "Produtos",
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
          name="maisvendidos"
          options={{
            drawerLabel: "Mais Vendidos",
            headerTitle: "Mais Vendidos",
            headerTitleAlign: 'center',
            drawerIcon: () => (
            <MaterialCommunityIcons name="medal-outline" size={23} color="black" />            ),
          }}
        />

        <Drawer.Screen
          name="sabonete"
          options={{
            drawerLabel: "Sabonete",
            headerTitle: "Sabonete",
            headerTitleAlign: 'center',
            drawerIcon: () => (
<FontAwesome6 name="pump-soap" size={24} color="black" />            ),
          }}
        />

<Drawer.Screen
          name="perfumes"
          options={{
            drawerLabel: "Perfume",
            headerTitle: "Perfume",
            headerTitleAlign: 'center',
            drawerIcon: () => (
          <MaterialCommunityIcons name="bottle-soda-classic-outline" size={27} color="black" />            
),
          }}
        />

        <Drawer.Screen
          name="hidratante"
          options={{
            drawerLabel: "Hidratante",
            headerTitle: "Hidratante Corporal",
            headerTitleAlign: 'center',
            drawerIcon: () => (
              <MaterialCommunityIcons name="bottle-tonic-outline" size={24} color="black" />
            ),
          }}
        />
        {/*  */}

        <Drawer.Screen
          name="cart"
          options={{
            drawerLabel: "Minhas Compras",
            headerTitle: "",
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
            headerTitle: "",
            headerTitleAlign: 'center',
            drawerIcon: () => (
              <Ionicons name="person-circle-outline" size={24} color="black" />
            ),
          }}
        />
{/* paginas do professor */}
 <Drawer.Screen
          name="listprof"
          options={{
            drawerLabel: "Listagem",
            headerTitle: "Listagem",
            headerTitleAlign: 'center',
            drawerIcon: () => (
              <Ionicons name="list-circle-outline" size={23} color="black" />
            ),
          }}
        />


        <Drawer.Screen
          name="payment"
          options={{
            drawerLabel: "Cadastro",
            headerTitle: "Cadastrar Pagamentos",
            headerTitleAlign: 'center',
            drawerIcon: () => (
            <MaterialIcons name="payment" size={24} color="black" />            
          ),
          }}
        />

       
<Drawer.Screen
          name="details"
          options={{
            drawerLabel: "Detalhes",
            headerTitle: "Detalhes",
            headerTitleAlign: 'center',
            drawerIcon: () => (
              <MaterialCommunityIcons name="card-account-details-outline" size={24} color="black" />
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => router.push("/listprof")}
                style={{ marginRight: 10 }}>
                <Ionicons
                  name="arrow-forward"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
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
