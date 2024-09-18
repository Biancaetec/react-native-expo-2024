import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
                
                </View>
                <View key="2" style={styles.page}>
                    <Text style={styles.text}>Hidratante</Text> 
                    <Image 
                        source={require('../../../src/assets/images/sabonetecereja.png')} 
                        style={styles.image2}
                    />
                </View>
                <View key="3" style={styles.page}>
                    <Text style={styles.text}>Sabonete Líquido</Text> 
                    <Image 
                        source={require('../../../src/assets/images/hidratante.png')} 
                        style={styles.image3}
                    />
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
        height: 230,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#20B2AA",
        padding: 10,
        borderRadius: 24,
        margin: 8,
    },
    image2: {
        width: "100%",
        height: 150,
        borderRadius: 16,
        resizeMode: "cover",
    },
    image3: {
        width: "100%",
        height: 280,
        borderRadius: 16,
        resizeMode: "cover",
        marginBottom: "-24%",
        marginLeft: "-30%",
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
