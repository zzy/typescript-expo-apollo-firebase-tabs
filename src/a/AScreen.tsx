import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  ImageBackground,
  View,
  SectionList,
  Text,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { deviceSize } from '../utils/Constants';

export class AScreen extends Component {

  render() {

    const sizeOptions = {
      tabImgWidth: 65,
      tabImgHeight: 65,
      tabImgMargin: (deviceSize.width - 260) / 5
    };

    return (

      <ScrollView style={{ backgroundColor: "white" }}>

        <ImageBackground source={require("./imgs/top.png")}
          style={{ flexDirection: "row", width: deviceSize.width, height: deviceSize.width * 3 / 5 }}>
          <TextInput
            style={{
              backgroundColor: "white", paddingLeft: 10,
              marginTop: 30, marginLeft: deviceSize.width * 4 / 10 / 2,
              width: deviceSize.width * 6 / 10, height: 30, borderRadius: 35
            }}
            placeholder="请输入搜索内容"
            returnKeyType="search"
          />
          <Ionicons name="md-search" size={30} color="blue"
            style={{
              position: "absolute", marginTop: 30,
              marginLeft: deviceSize.width * 4 / 10 / 2 + deviceSize.width * 6 / 10 - 30
            }} />
        </ImageBackground >

        <View
          style={{
            flexDirection: "row", backgroundColor: "#F2F2F2", alignItems: "center",
            paddingRight: 10, paddingLeft: 10,
            height: 30
          }}>
          <Text
            style={{
              fontWeight: "bold", color: "blue", fontSize: 12,
              width: 65
            }}>
            通知公告：
            </Text>
          <Text
            style={{
              fontSize: 12,
              width: deviceSize.width - 20 - 65 - 50
            }}>
            林芝县质检局公告……
            </Text>
          <Text
            style={{
              textAlign: "right", color: "gray", fontSize: 12,
              width: 50
            }}>
            |&nbsp;&nbsp;更多…&nbsp;
            </Text>
        </View>

        <View style={{ flexDirection: "row" }} >
          <Image source={require("./imgs/1.jpg")}
            style={{
              width: sizeOptions.tabImgWidth, height: sizeOptions.tabImgHeight,
              marginLeft: sizeOptions.tabImgMargin, marginTop: sizeOptions.tabImgMargin
            }} />
          <Image source={require("./imgs/2.jpg")}
            style={{
              width: sizeOptions.tabImgWidth, height: sizeOptions.tabImgHeight,
              marginLeft: sizeOptions.tabImgMargin, marginTop: sizeOptions.tabImgMargin
            }} />
          <Image source={require("./imgs/3.jpg")}
            style={{
              width: sizeOptions.tabImgWidth, height: sizeOptions.tabImgHeight,
              marginLeft: sizeOptions.tabImgMargin, marginTop: sizeOptions.tabImgMargin
            }} />
          <Image source={require("./imgs/4.jpg")}
            style={{
              width: sizeOptions.tabImgWidth, height: sizeOptions.tabImgHeight,
              marginLeft: sizeOptions.tabImgMargin, marginTop: sizeOptions.tabImgMargin
            }} />
        </View>

        <View style={{ flexDirection: "row" }} >
          <Image source={require("./imgs/5.jpg")}
            style={{
              width: sizeOptions.tabImgWidth, height: sizeOptions.tabImgHeight,
              marginLeft: sizeOptions.tabImgMargin, marginTop: sizeOptions.tabImgMargin
            }} />
          <Image source={require("./imgs/6.jpg")}
            style={{
              width: sizeOptions.tabImgWidth, height: sizeOptions.tabImgHeight,
              marginLeft: sizeOptions.tabImgMargin, marginTop: sizeOptions.tabImgMargin
            }} />
          <Image source={require("./imgs/7.jpg")}
            style={{
              width: sizeOptions.tabImgWidth, height: sizeOptions.tabImgHeight,
              marginLeft: sizeOptions.tabImgMargin, marginTop: sizeOptions.tabImgMargin
            }} />
          <Image source={require("./imgs/8.jpg")}
            style={{
              width: sizeOptions.tabImgWidth, height: sizeOptions.tabImgHeight,
              marginLeft: sizeOptions.tabImgMargin, marginTop: sizeOptions.tabImgMargin
            }} />
        </View>

        <View
          style={{
            flexDirection: "row", backgroundColor: "#F2F2F2", alignItems: "center",
            marginTop: sizeOptions.tabImgMargin, padding: 6, paddingLeft: 10,
            height: 28
          }}>
          <Image source={require("./imgs/test.png")}
            style={{ width: 14, height: 14, marginRight: 4, padding: 0 }} />
          <Text
            style={{
              fontSize: 12, color: "gray",
              width: (deviceSize.width - 40) / 2,
              padding: 0, marginTop: 2
            }}>
            重要信息
            </Text>
          <Text
            style={{
              textAlign: "right", fontSize: 12, color: "gray",
              width: (deviceSize.width - 40) / 2,
              padding: 0, marginTop: 2
            }}>
            更多…
            </Text>
        </View>

        <SectionList
          renderSectionHeader={({ section: { title }, section: { depart }, section: { date }, section: { summary } }) => (
            <View>
              <View style={{
                flexDirection: "row",
                paddingTop: 5, paddingRight: 10, paddingBottom: 5, paddingLeft: 10
              }}>
                <Image
                  source={require("./imgs/test.png")}
                  style={{ width: 70, height: 70, marginRight: 10 }} />
                <View
                  style={{ paddingTop: 4, width: deviceSize.width - 70 - 30 }}>
                  <Text
                    style={{
                      textAlignVertical: "top", fontSize: 16, height: 50
                    }}>
                    {title}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row", paddingTop: 1, height: 20
                    }}>
                    <Text
                      style={{
                        fontSize: 12, color: "#436EEE",
                        width: ((deviceSize.width - 70 - 30) / 2) + 30
                      }}>
                      {depart}
                    </Text>
                    <Text
                      style={{
                        paddingRight: 3, textAlign: "right", fontSize: 12, color: "#436EEE",
                        width: ((deviceSize.width - 70 - 30) / 2) - 30
                      }}>
                      {date}
                    </Text>
                  </View>
                </View>

              </View>
              <Text
                style={{
                  color: "gray",
                  paddingTop: 0, paddingRight: 10, paddingBottom: 5, paddingLeft: 10
                }} >
                {summary}
              </Text>
            </View>
          )}
          renderItem={({ item, index }) => (
            <Text
              style={{
                color: "gray",
                paddingTop: 0, paddingRight: 10, paddingBottom: 5, paddingLeft: 10
              }}
              key={index} >
              {item}
            </Text>
          )}
          renderSectionFooter={() => (
            <View style={{ height: 1, backgroundColor: "#CDC9C9" }} />
          )}
          sections={
            [
              {
                title: "西藏人民广播电台《藏家小康路》获奖",
                depart: "林芝质检局",
                date: "2019-04-09",
                summary: "阿里地区札达县底雅乡辖内的底雅村、什布奇村地处河谷地段,具有发展林果业的先天优势。据介绍,目前底雅乡境内栽种各类果树456亩,鲜果年产量达150余吨。",
                data: []
              },
              {
                title: "普兰县宣传部集中学习《中华人民共和国宪法》",
                depart: "普兰质检局",
                date: "2019-04-10",
                summary: "阿里地区札达县底雅乡辖内的底雅村、什布奇村地处河谷地段,具有发展林果业的先天优势。据介绍,目前底雅乡境内栽种各类果树456亩,鲜果年产量达150余吨。",
                data: []
              },
              {
                title: "普兰县政法支部举办“名族团结月”演讲比赛",
                depart: "理塘质检局",
                date: "2019-04-11",
                summary: "当地农牧民群众通过经济林果种植增加收入，形成“山上放牧收国土，山下果树来致富”的格局。",
                data: []
              },
            ]
          }
          keyExtractor={(item, index) => item + index}
        />

      </ScrollView>

    );

  }

}
