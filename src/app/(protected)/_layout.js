import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuth } from "../../hooks/Auth/index";

function CustomDrawerContent(props) {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}> 
      <View style={{ 
        marginTop: 28, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "#DCDCDC",
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

      <TouchableOpacity onPress={()=>signOut()}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        margin: 10,
        backgroundColor: "#1c75fa",
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
            drawerLabel: "Promoção", 
            headerTitle:"Promoção",
            headerTitleAlign: 'center',
            drawerIcon: () => (
        <AntDesign name="bells" size={24} color="black" />
            ),
            }} 
          /> 
           <Drawer.Screen 
          name="sabonete"  
          options={{
            drawerLabel: "Sabonete líquido", 
            headerTitle:"Sabonete líquido",
            headerTitleAlign: 'center',
            drawerIcon: () => (
              <Ionicons name="list-circle-outline" size={20} color="black" />
            ),
          }} 
          />
{/* antigo listagem: */}
          <Drawer.Screen 
          name="list"  
          options={{
            drawerLabel: "Hidratante", 
            headerTitle:"Hidratante corporal",
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
            headerTitle:"Sacola",
            headerTitleAlign: 'center',
            drawerIcon: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
            ),
          }} 
          />

           <Drawer.Screen 
          name="perfil"  
          options={{
            drawerLabel: "Perfil", 
            headerTitle:"Perfil",
            headerTitleAlign: 'center',
            drawerIcon: () => (
            // <Ionicons name="person-outline" size={24} color="black" /> 
            <Ionicons name="person-circle-outline" size={24} color="black" />           
            ),
          }} 
          />

          <Drawer.Screen 
          name="payment"  
          options={{
            drawerLabel: "Pagamento", 
            headerTitle:"Pagamento",
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
