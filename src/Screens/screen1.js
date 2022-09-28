import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect, useRef } from "react";
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
  StatusBar,
  RefreshControl,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import img from "../Images/ca_nau_lau.png";
import img1 from "../Images/ga_bo_toi.png";
import img2 from "../Images/do_choi_dang_mo_hinh.png";
import img3 from "../Images/hieu_long_con_tre.png";
import img4 from "../Images/lanh_dao_gian_don.png";
import img5 from "../Images/trump_1.png";
import img6 from "../Images/xa_can_cau.png";

const WinWidth = Dimensions.get("window").width;
const WinHeight = Dimensions.get("window").height;

export default Screen1 = function ({}) {
  const [users, setUsers] = useState([
    {
      id: "0",
      url: img,
      name: "Test",
      nameShop: "Test",
    },
    {
      id: "1",
      url: img1,
      name: "Test2",
      nameShop: "Test2",
    },
    {
      id: "2",
      url: img2,
      name: "Test2",
      nameShop: "Test2",
    },
    {
      id: "3",
      url: img3,
      name: "Test2",
      nameShop: "Test2",
    },
    {
      id: "4",
      url: img4,
      name: "Test2",
      nameShop: "Test2",
    },
    {
      id: "5",
      url: img5,
      name: "Test2",
      nameShop: "Test2",
    },
    {
      id: "6",
      url: img6,
      name: "Test2",
      nameShop: "Test2",
    },
  ]);

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <View style={styles.headerUp}>
            <Ionicons name="arrow-back" size={35} color="black" />
            <Text style={styles.textBtn}>Chat</Text>
            <AntDesign name="shoppingcart" size={35} color="black" />
          </View>

          <View style={styles.headerDown}>
            <Text>
              Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
            </Text>
          </View>
        </View>
        {/* Body */}
        <View style={styles.bodyList}>
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <View style={styles.viewOne}>
                <TouchableOpacity>
                  <View style={styles.itemBox}>
                    {/* ảnh đại diện */}
                    <View style={styles.imaContainer}>
                      <Image style={styles.imaAvatar} source={item.url}></Image>
                    </View>

                    <View style={styles.bodyContainer}>
                      {/* tên */}
                      <Text style={styles.textName}>{item.name}</Text>
                      <Text style={styles.textNameShop}>{item.nameShop}</Text>
                    </View>

                    <View style={styles.btnChose}>
                      <TouchableOpacity style={styles.btnC}>
                        <Text style={styles.textBtn}>Chọn</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.headerUp}>
            <Ionicons name="arrow-back" size={35} color="black" />
            <AntDesign name="home" size={35} color="black" />
            <Ionicons name="md-return-up-back-sharp" size={35} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    height: 100,
    backgroundColor: "yellow",
    flexDirection: "column",
  },

  headerUp: {
    height: 50,
    backgroundColor: "blue",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  headerDown: {
    backgroundColor: "gray",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  btnChose: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  btnC: {
    height: 40,
    width: 80,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  textBtn: {
    fontSize: 20,
    fontWeight: "bold",
  },

  topTag: {
    width: "100%",
    height: 50,
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  bodyList: {
    flex: 1,
    alignItems: "center",
  },

  viewOne: {
    marginTop: 10,
    backgroundColor: "pink",
    width: 380,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  imaContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  imaAvatar: {
    height: 70,
    width: 70,
  },

  bodyContainer: {
    flex: 1,
    backgroundColor: "gray",
    borderwidth: 4,
    justifyContent: "center",
  },

  textName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  textNameShop: {
    marginLeft: 10,
    fontSize: 15,
  },

  itemBox: {
    width: "100%",
    height: 70,
    flexDirection: "row",
  },

  footer: {
    height: 60,
    backgroundColor: "blue",
    justifyContent: "center",
  },
});
