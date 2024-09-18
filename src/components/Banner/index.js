import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
    const [page, setPage] = useState(0);

    const onPageSelected = (e) => {
        setPage(e.nativeEvent.position);
    };

    return (
    <View style={styles.container}>
        <PagerView 
        initialPage={0} 
        style={styles.content} 
        onPageSelected={onPageSelected}
        >
            <View key="1" style={styles.page}>
                <Text style={styles.text}>PROMOÇÃO</Text> 
                <Text style={styles.text}>Banner 1 - img</Text> 
            </View>
            <View key="2" style={styles.page}>
                <Text style={styles.text}>Hidratante</Text> 
                <Text style={styles.text}>Banner 2 - img</Text>
            </View>
            <View key="3" style={styles.page}>
                <Text style={styles.text}>Sabonete Líquido</Text> 
                <Text style={styles.text}>Banner 3 - img</Text>
            </View>
        </PagerView>
        <View style={styles.bulletContent}>
            <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
            <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
            <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>

        </View>
    </View>
  
   
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginTop: 20,
        height: 220,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#20B2AA",
        padding: 10,
      },
    bulletContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
    },
    bullet: {
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 10,
        backgroundColor: "#D3D3D3", 
    },
    activeBullet: {
        backgroundColor: "#A9A9A9",
    },
    text: {
        fontSize: 18,
        fontFamily: "MontserratLight",
    }
});