import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner2() {
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
                    <Image
                        source={require('../../../src/assets/images/lancamento3.png')}
                        style={styles.image}
                    />
                </View>
                <View key="2" style={styles.page}>
                    <Image
                        source={require('../../../src/assets/images/lancamento1.png')}
                        style={styles.image}
                    />
                </View>
                <View key="3" style={styles.page}>
                    <Image
                        source={require('../../../src/assets/images/lancamento2.png')}
                        style={styles.image}
                    />
                </View>
                <View key="4" style={styles.page}>
                    <Image
                        source={require('../../../src/assets/images/lancamento4.png')}
                        style={styles.image}
                    />
                </View>
                
            </PagerView>
            <View style={styles.bulletContent}>
                <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 3 && styles.activeBullet]}></View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
    },
    content: {
        height: 190, 
        width: "108%", 
        alignItems: "center",
        justifyContent: "center",
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
        borderRadius: 16, 
    },
    bulletContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
    },
    bullet: {
        width: 8,
        height: 8,
        borderRadius: 5,
        margin: 5,
        backgroundColor: "#D3D3D3",
    },
    activeBullet: {
        backgroundColor: "#A9A9A9",
    },
});
