import { StyleSheet } from "react-native";

const SIZE = {
    H1: 18,
    H2: 15,
    nrml: 15,
}
const COLORS = {
    SECONDARY: "#fff4e6",
    PRIMARY: "#fc9003",
    BLACK: "black",
    WHITE: "white",
    GRAY: "gray",
    TEXT_COLOR: '#41423f',
    backgroundColor: 'white',
    Rating: '#FFDF00'
}
const LOGO = StyleSheet.create({
    Pad_Container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        borderRadius: 20,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
    },
    Ratingsline: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginTop: 5
    },
    backIcon: {
        position: "absolute",
        padding: 20
    },
    searchbar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.SECONDARY,
        borderRadius: 10,
        elevation: 5
    },
    headerLogo: {
        width: "100%",
        height: 100,
        borderRadius: 100,
    },
    current_serviceProviders: {
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: COLORS.WHITE,
        borderRadius: 5,
        alignItems: "center",
        width: "60%",
        top: 150,
        elevation: 10,
        height: 40, 
        paddingHorizontal:10,
        marginHorizontal:"20%"
    },
    headr: {
        backgroundColor: COLORS.PRIMARY,
        width: "100%",
        height: 90,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    headr_1: {
        backgroundColor: COLORS.PRIMARY,
        width: "100%",
        height: 150,
    },
    deta_Img: {
        position: "absolute",
        borderRadius: 10,
        width: "100%",
        height: 190,
        top: 130
    },
    h1txt: {
        color: COLORS.TEXT_COLOR,
        fontSize: SIZE.H1,
        fontWeight: "bold"
    },
    h2txt: {
        color: COLORS.TEXT_COLOR,
        fontSize: SIZE.H2,
        fontWeight: "500",
        padding: 5
    },
    forget_resnd: {
        color: COLORS.PRIMARY,
        marginTop: 10,
        marginLeft: 20,
        textDecorationLine: 'underline'
    },
    nrml_Txt: {
        fontSize: SIZE.nrml,
        color: COLORS.TEXT_COLOR,
        fontWeight: "400"
    },
    TxtInput: {
        padding: 7,
        borderColor: COLORS.WHITE,
        borderTopColor: "gainsboro",
        borderWidth: 1
    },
    line: {
        height: 1,
        backgroundColor: "gainsboro",
        width: "100%",
        alignSelf: "center"
    },
    btn: {
        marginTop: 15,
        backgroundColor: COLORS.PRIMARY,
        padding: 12,
        borderRadius: 5,
        alignItems: "center",
        width: "60%",
        alignSelf: "center",
        elevation: 20
    },
    btn1: {
        marginTop: 15,
        padding: 11,
        borderRadius: 5,
        alignItems: "center",
        width: "60%",
        alignSelf: "center",
        // elevation:20,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY
    },
    btntxt: {
        color: COLORS.WHITE,
        fontSize: SIZE.nrml,
        fontWeight: "bold",
    },
    btntxt1: {
        color: COLORS.PRIMARY,
        fontSize: SIZE.nrml,
        fontWeight: "bold",
    }
})
const SPLASH = StyleSheet.create({
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    title: {
        color: COLORS.TEXT_COLOR,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 20
    },
    image: {
        width: "100%",
        height: 250,
        marginTop: 40
    },
    text: {
        color: COLORS.TEXT_COLOR,
        textAlign: 'center',
        fontWeight: "500",
        fontSize: 12,
        marginTop: 40
    },
    buttonSquare: {
        top: 40,
        padding: 12,
        width: "60%",
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    btnText: {
        color: COLORS.WHITE,
        fontWeight: "500",
        fontSize: 16
    }

})
const LOGIN = StyleSheet.create({
    inputView: {
        marginTop: 20,
        backgroundColor: COLORS.WHITE,
        width: "90%",
        alignSelf: "center",
        borderRadius: 5,
        elevation: 9,
        padding: 5
    }

})
const HOME = StyleSheet.create({
    Ser_Box: {
        height: 90,
        width: 90,
        backgroundColor: COLORS.SECONDARY,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginRight: 15,
        borderRadius: 10,
        elevation: 5
    },
    rec_Box: {
        height: 160,
        width: 180,
        backgroundColor: "whitesmoke",
        marginTop: 10,
        marginRight: 15,
        borderRadius: 10,
        elevation: 5,
    },
    S_outerBOX: {
        flexDirection: "row",
        padding: 5
    },
    R_outerBOX: {
        flexDirection: "row",
        padding: 5,
    },
    serIconDesign: {
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 100,
        padding: 4
    },
    SerIconTxt: {
        color: COLORS.TEXT_COLOR,
        fontSize: 15,
        fontWeight: "500",
        marginTop: 5
    },
    Recomnd: {
        height: 230,
        marginTop: 10,
        backgroundColor: COLORS.WHITE,
        paddingLeft: 10
    },
    seeAll: {
        fontSize: 12,
        color: COLORS.PRIMARY,
        fontWeight: "500",
        marginTop: 15,
        marginRight: 10
    },
    re_Row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})
export { COLORS, SPLASH, LOGO, LOGIN, SIZE, HOME };