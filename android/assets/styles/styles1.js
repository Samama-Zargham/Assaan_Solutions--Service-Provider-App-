import { StyleSheet, Dimensions } from "react-native"
const w = Dimensions.get('screen').width;

const COLORS = {
    PRIMARY_COLOR: 'darksalmon',
    SECONDARY_COLOR: 'powderblue',
    TEXT_COLOR: '#41423f',
    WHITE_COLOR: 'white',
    GRAY_COLOR: 'gray',
    BACKGROUND_COLOR: 'linen'
};

const STYLES_HOME = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE_COLOR,
        alignItems: 'center',
    },
    t1Img: {
        marginTop: 140,
        alignItems: 'center',
    },
    shaf1: {
        width: 500,
        height: 250,
    },
    grpTitle: {
        marginVertical: "13%",
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: COLORS.TEXT_COLOR,
    },
    grpindicator: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    indicator: {
        backgroundColor: COLORS.SECONDARY_COLOR,
        width: 7,
        height: 7,
        borderRadius: 8,
        marginHorizontal: 3,
    },
    // buttonNext: {
    //     width: 60,
    //     height: 60,
    //     backgroundColor: COLORS.PRIMARY_COLOR,
    //     borderRadius: 80,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderWidth: 5,
    //     borderColor: COLORS.WHITE_COLOR,
    // },
    // nextGroup: {
    //     position: 'absolute',
    //     bottom: 20,
    //     alignSelf: 'center',
    //     borderWidth: 1,
    //     borderColor: COLORS.SECONDARY_COLOR,
    //     borderRadius: 100,
    // },

})
const STYLES_MAIN = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_COLOR,
        paddingTop: 10,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    grpTitle: {

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.TEXT_COLOR,
        fontFamily: 'cursive'
    },
    title1: {
        paddingHorizontal: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.PRIMARY_COLOR,
    },
    searchContainer: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: COLORS.SECONDARY_COLOR,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputContainer: {
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor: "whitesmoke",
        borderRadius: 15,
        // justifyContent: 'center',
        alignItems: 'center',
        marginLeft:20,
        marginRight:20
    },
    searchButton: {
        backgroundColor: COLORS.PRIMARY_COLOR,
        aspectRatio: 1,
        padding: 12,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    MenuBtn: {
    },
    searchInput: {
        flex: 1,
    },
    C1: {
        width: 240
    },
    c2: {
        width: 240

    },
    c3: {
        width: 240,
        height: 120
    },

})
const STYLES_POPULAR_RECIPE = StyleSheet.create({
    container: {
        padding: 5,
    },
    grpTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -4
    },
    title: {
        color: COLORS.TEXT_COLOR,
        fontWeight: '600',
        fontSize: 20,
        marginLeft: -1,
    },
    title1: {
        color: COLORS.GRAY_COLOR,
        fontWeight: 'bold',
    },

    imgContainer: {
        backgroundColor: COLORS.WHITE_COLOR,
        elevation: 3,
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 2
    },
    heart: {
        backgroundColor: COLORS.WHITE_COLOR,
        borderRadius: 100,
        padding: 8,
        top: 10,
        right: 5,
        position: 'absolute',
        elevation: 5,
    },
    mainImage: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: 152,
        height: 110
    },
    imgTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.TEXT_COLOR,
    },
    imgRatings: {
        flexDirection: 'row',
        paddingTop: 7,
    },
    recipeTime: {
        paddingTop: 3,
        paddingHorizontal: 2,
        alignItems: 'center',
        flexDirection: 'row',
    },
    timeTitle: {
        marginLeft: 5,
        fontSize: 12,
        color: COLORS.GRAY_COLOR,
        fontWeight: '500'
    },
    scrollView: {
        paddingVertical: 10,
    },
    imgData: {
        padding: 10
    }
});
const STYLES_CATEGORY = StyleSheet.create({
    container: {
    },
    title: {
        color: COLORS.TEXT_COLOR,
        fontWeight: '600',
        fontSize: 20,
        marginTop: -10,
    },
    HscrollView: {
        padding: 5,
        marginLeft: -2,
        marginBottom: -4,
    },
    headTouch: {
        backgroundColor: COLORS.WHITE_COLOR,
        borderRadius: 60,
        marginRight: 25,
        width: 95,
        height: 30,
        alignItems: 'center',
        elevation: 3,
        marginBottom: 6,
        justifyContent: 'center'
    },
    categoryTitle: {
        color: COLORS.GRAY_COLOR,
        fontSize: 15,
        fontWeight: '600',
    },
    imgContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.WHITE_COLOR,
        elevation: 4,
        borderRadius: 10,
        margin: 5,
        marginLeft: 7,
    },
    imgs: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 160,
        height: 110
    },
    imgHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgHead1: {
        marginLeft: 62
    },
    heart: {
        backgroundColor: COLORS.WHITE_COLOR,
        borderRadius: 100,
        padding: 8,
        top: 10,
        right: 5,
        elevation: 5,
        position: 'absolute'
    },
    imgRatings: {
        paddingTop: 10,
        marginLeft: 30,
        marginRight: 30
    },
    imgRatings1: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    imgTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.TEXT_COLOR,
        marginLeft: -1,
    },
    imgTitle1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.WHITE_COLOR,
        marginLeft: -5,
        marginTop: 5,
        alignSelf: 'center'
    },
    imgTitle3: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.TEXT_COLOR,
        marginLeft: -5,
        marginTop: 30,
        alignSelf: 'center'
    },
    imgTitle5: {
        fontSize: 23,
        fontWeight: 'bold',
        color: COLORS.TEXT_COLOR,
    },
    imgTitle4: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.TEXT_COLOR,
        marginLeft: -5,
        marginTop: 30,
        alignSelf: 'center'
    },
    DimgTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.TEXT_COLOR,
        marginLeft: 100,
    },
    imgData: {
        padding: 10,
        paddingTop: 15,
    },
    imgTimeFooter: {
        paddingTop: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    recipeTime: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 1
    },
    recipeTime1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 1,
        marginBottom: 5
    },
    timeTitle: {
        marginLeft: 5,
        fontSize: 12,
        color: COLORS.GRAY_COLOR,
        fontWeight: '500'
    },
    timeTitle1: {
        marginLeft: 5,
        fontSize: 12,
        color: COLORS.WHITE_COLOR,
        fontWeight: '500'
    },
    ingreTitle: {
        fontSize: 12,
        color: COLORS.GRAY_COLOR,
        fontWeight: '500',
        marginLeft: 1,
        marginTop: 3
    },
    ingreTitle1: {
        fontSize: 12,
        color: COLORS.WHITE_COLOR,
        fontWeight: '500',
        marginLeft: 1,
        marginTop: 3
    },
    kcalTitle: {
        marginLeft: 40,
        fontSize: 12,
        fontWeight: '500',
        color: COLORS.GRAY_COLOR,
    },
    itemScroll: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    itemScrollFlat: {
        width: w - 20,
        marginLeft: -1
    },

});
const STYLES_DETAILS = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_COLOR,
    },
    img: {
        width: "100%",
        height: 200,
    },
    img1: {
        height: 100,
        width: 100,
        borderRadius: 100,
        alignSelf: 'center',
        borderColor: COLORS.PRIMARY_COLOR,
        borderWidth: 2,
    },
    imgdetailsCon: {
        padding: 10,
    },
    ingreTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.TEXT_COLOR,
    },
    ingreTitle1: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.TEXT_COLOR,
        marginTop: 60
    },
    RDetails: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.WHITE_COLOR,
        alignSelf: 'center',
    },

    heart: {
        backgroundColor: COLORS.WHITE_COLOR,
        borderRadius: 100,
        padding: 8,
        top: 10,
        right: 5,
        elevation: 5,
        position: 'absolute'
    },
    goBAck: {
        backgroundColor: COLORS.WHITE_COLOR,
        borderRadius: 100,
        padding: 8,
        top: 10,
        left: 10,
        elevation: 5,
        position: 'absolute'
    },
    step1: {
        color: COLORS.PRIMARY_COLOR
    },
    ingreList: {
        color: COLORS.GRAY_COLOR,
        fontSize: 16,
        fontWeight: '400',
        padding: 3,
    },
    step: {
        fontWeight: "600",
        color: COLORS.PRIMARY_COLOR
    },
    imgData1: {
        justifyContent: 'center',
        alignSelf: 'center',
        top: -40,
        backgroundColor: COLORS.WHITE_COLOR,
        elevation: 4,
        borderRadius: 20,
        width: 320,
        marginBottom: -35,
        opacity: 0.8
    },
    imgData2: {
        alignSelf: 'center',
        // backgroundColor: COLORS.PRIMARY_COLOR,
        elevation: 5,
        borderRadius: 20,
        width: 195,
        opacity: 1,
        marginTop: 173,
        position: 'absolute',

    },
    imgData3: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 7,
        borderRadius: 5,
        width: 200,
        height: 40,
        marginBottom: 20
    },
    imgData4: {
        // alignSelf: 'center',
        // alignItems: 'center',
        backgroundColor: COLORS.WHITE_COLOR,
        elevation: 5,
        width: '100%',
        marginTop: 55,
        position: 'absolute',
        height: 680,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15

    },
    imgData5: {
        backgroundColor: COLORS.WHITE_COLOR,
        elevation: 5,
        borderTopRightRadius: 100,
        marginTop: -10,
        width: "100%",
        paddingBottom:70
    },
    RateTitle: {
        paddingTop: 120,
        color: COLORS.TEXT_COLOR,
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 15
    },
    RateTitle2: {
        color: COLORS.TEXT_COLOR,
        fontWeight: '600',
        fontSize: 20,
        marginLeft: 15,
        marginTop: -7
    },
    RateTitle1: {
        paddingHorizontal: 15,
        paddingTop: 12,
        color: COLORS.TEXT_COLOR,
        fontWeight: '500',
        fontSize: 30
    },
    ingreList1: {
        color: COLORS.GRAY_COLOR,
        fontSize: 17,
        fontWeight: '400',
        padding: 10,
    },
    nutrilist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        paddingTop: 10
    },
    nutri: {
        alignItems: 'center',
    },
    nutriQ: {
        alignItems: 'center',
        backgroundColor: COLORS.SECONDARY_COLOR,
        borderRadius: 100,
        elevation: 5,
        width: 35,
        height: 35,
        justifyContent: 'center',
        marginBottom: -40,
        marginRight: 12
    },
    nutriName: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.WHITE_COLOR,
        elevation: 2,
        borderRadius: 20,
        alignItems: 'center',
        marginRight: 15,
        width: 100,
        height: 90,
        opacity: 0.8
    },
    nQuantity: {
        color: COLORS.TEXT_COLOR,
        fontWeight: '600',
    },
    nName: {
        fontWeight: '600',
        fontSize: 16,
        color: COLORS.TEXT_COLOR,
        marginTop: 28
    },
    nUnit: {
        color: COLORS.GRAY_COLOR,
        marginTop: -5
    }

});
export { COLORS, STYLES_HOME, STYLES_MAIN, STYLES_POPULAR_RECIPE, STYLES_CATEGORY, STYLES_DETAILS };