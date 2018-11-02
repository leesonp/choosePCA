function getCityInfo(callBack) {
  var info =
    [
      {
        "citys": [
          {
            "areas": [
              {
                "code": "2251",
                "fullSpell": "dangtuxian",
                "level": 3,
                "name": "当涂县",
                "parent": "190"
              },
              {
                "code": "2254",
                "fullSpell": "yushanqu",
                "level": 3,
                "name": "雨山区",
                "parent": "190"
              },
              {
                "code": "2253",
                "fullSpell": "jinjiazhuangqu",
                "level": 3,
                "name": "金家庄区",
                "parent": "190"
              },
              {
                "code": "2252",
                "fullSpell": "huashanqu",
                "level": 3,
                "name": "花山区",
                "parent": "190"
              }
            ],
            "code": "190",
            "fullSpell": "maanshanshi",
            "level": 2,
            "name": "马鞍山市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2317",
                "fullSpell": "qiaochengqu",
                "level": 3,
                "name": "谯城区",
                "parent": "200"
              },
              {
                "code": "2315",
                "fullSpell": "woyangxian",
                "level": 3,
                "name": "涡阳县",
                "parent": "200"
              },
              {
                "code": "2316",
                "fullSpell": "mengchengxian",
                "level": 3,
                "name": "蒙城县",
                "parent": "200"
              },
              {
                "code": "2314",
                "fullSpell": "lixinxian",
                "level": 3,
                "name": "利辛县",
                "parent": "200"
              }
            ],
            "code": "200",
            "fullSpell": "bozhoushi",
            "level": 2,
            "name": "亳州市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2265",
                "fullSpell": "yixiuqu",
                "level": 3,
                "name": "宜秀区",
                "parent": "193"
              },
              {
                "code": "2273",
                "fullSpell": "yingjiangqu",
                "level": 3,
                "name": "迎江区",
                "parent": "193"
              },
              {
                "code": "2266",
                "fullSpell": "susongxian",
                "level": 3,
                "name": "宿松县",
                "parent": "193"
              },
              {
                "code": "2271",
                "fullSpell": "tongchengshi",
                "level": 3,
                "name": "桐城市",
                "parent": "193"
              },
              {
                "code": "2272",
                "fullSpell": "qianshanxian",
                "level": 3,
                "name": "潜山县",
                "parent": "193"
              },
              {
                "code": "2269",
                "fullSpell": "wangjiangxian",
                "level": 3,
                "name": "望江县",
                "parent": "193"
              },
              {
                "code": "2268",
                "fullSpell": "huainingxian",
                "level": 3,
                "name": "怀宁县",
                "parent": "193"
              },
              {
                "code": "2270",
                "fullSpell": "congyangxian",
                "level": 3,
                "name": "枞阳县",
                "parent": "193"
              },
              {
                "code": "2264",
                "fullSpell": "taihuxian",
                "level": 3,
                "name": "太湖县",
                "parent": "193"
              },
              {
                "code": "2267",
                "fullSpell": "yuexixian",
                "level": 3,
                "name": "岳西县",
                "parent": "193"
              }
            ],
            "code": "193",
            "fullSpell": "anqingshi",
            "level": 2,
            "name": "安庆市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2320",
                "fullSpell": "guichiqu",
                "level": 3,
                "name": "贵池区",
                "parent": "201"
              },
              {
                "code": "2321",
                "fullSpell": "qingyangxian",
                "level": 3,
                "name": "青阳县",
                "parent": "201"
              },
              {
                "code": "2318",
                "fullSpell": "dongzhixian",
                "level": 3,
                "name": "东至县",
                "parent": "201"
              },
              {
                "code": "2319",
                "fullSpell": "shitaixian",
                "level": 3,
                "name": "石台县",
                "parent": "201"
              }
            ],
            "code": "201",
            "fullSpell": "chizhoushi",
            "level": 2,
            "name": "池州市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2300",
                "fullSpell": "dangshanxian",
                "level": 3,
                "name": "砀山县",
                "parent": "197"
              },
              {
                "code": "2301",
                "fullSpell": "xiaoxian",
                "level": 3,
                "name": "萧县",
                "parent": "197"
              },
              {
                "code": "2299",
                "fullSpell": "lingbixian",
                "level": 3,
                "name": "灵璧县",
                "parent": "197"
              },
              {
                "code": "2297",
                "fullSpell": "yongqiaoqu",
                "level": 3,
                "name": "埇桥区",
                "parent": "197"
              },
              {
                "code": "2298",
                "fullSpell": "sixian",
                "level": 3,
                "name": "泗县",
                "parent": "197"
              }
            ],
            "code": "197",
            "fullSpell": "suzhoushi",
            "level": 2,
            "name": "宿州市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2260",
                "fullSpell": "jiaoqu",
                "level": 3,
                "name": "郊区",
                "parent": "192"
              },
              {
                "code": "2262",
                "fullSpell": "yianqu",
                "level": 3,
                "name": "义安区",
                "parent": "192"
              },
              {
                "code": "2259",
                "fullSpell": "shizishanqu",
                "level": 3,
                "name": "狮子山区",
                "parent": "192"
              },
              {
                "code": "2261",
                "fullSpell": "tongguanqu",
                "level": 3,
                "name": "铜官区",
                "parent": "192"
              }
            ],
            "code": "192",
            "fullSpell": "tonglingshi",
            "level": 2,
            "name": "铜陵市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2243",
                "fullSpell": "bangshanqu",
                "level": 3,
                "name": "蚌山区",
                "parent": "188"
              },
              {
                "code": "2238",
                "fullSpell": "wuhexian",
                "level": 3,
                "name": "五河县",
                "parent": "188"
              },
              {
                "code": "2241",
                "fullSpell": "huaishangqu",
                "level": 3,
                "name": "淮上区",
                "parent": "188"
              },
              {
                "code": "2240",
                "fullSpell": "huaiyuanxian",
                "level": 3,
                "name": "怀远县",
                "parent": "188"
              },
              {
                "code": "2239",
                "fullSpell": "guzhenxian",
                "level": 3,
                "name": "固镇县",
                "parent": "188"
              },
              {
                "code": "2244",
                "fullSpell": "longzihuqu",
                "level": 3,
                "name": "龙子湖区",
                "parent": "188"
              },
              {
                "code": "2242",
                "fullSpell": "yuhuiqu",
                "level": 3,
                "name": "禹会区",
                "parent": "188"
              }
            ],
            "code": "188",
            "fullSpell": "bangbushi",
            "level": 2,
            "name": "蚌埠市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2278",
                "fullSpell": "qimenxian",
                "level": 3,
                "name": "祁门县",
                "parent": "194"
              },
              {
                "code": "2279",
                "fullSpell": "huangshanqu",
                "level": 3,
                "name": "黄山区",
                "parent": "194"
              },
              {
                "code": "2280",
                "fullSpell": "yixian",
                "level": 3,
                "name": "黟县",
                "parent": "194"
              },
              {
                "code": "2275",
                "fullSpell": "tunxiqu",
                "level": 3,
                "name": "屯溪区",
                "parent": "194"
              },
              {
                "code": "2276",
                "fullSpell": "huizhouqu",
                "level": 3,
                "name": "徽州区",
                "parent": "194"
              },
              {
                "code": "2274",
                "fullSpell": "xiuningxian",
                "level": 3,
                "name": "休宁县",
                "parent": "194"
              },
              {
                "code": "2277",
                "fullSpell": "xixian",
                "level": 3,
                "name": "歙县",
                "parent": "194"
              }
            ],
            "code": "194",
            "fullSpell": "huangshanshi",
            "level": 2,
            "name": "黄山市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2294",
                "fullSpell": "yingzhouqu",
                "level": 3,
                "name": "颍州区",
                "parent": "196"
              },
              {
                "code": "2291",
                "fullSpell": "jieshoushi",
                "level": 3,
                "name": "界首市",
                "parent": "196"
              },
              {
                "code": "2290",
                "fullSpell": "taihexian",
                "level": 3,
                "name": "太和县",
                "parent": "196"
              },
              {
                "code": "2295",
                "fullSpell": "yingquanqu",
                "level": 3,
                "name": "颍泉区",
                "parent": "196"
              },
              {
                "code": "2289",
                "fullSpell": "linquanxian",
                "level": 3,
                "name": "临泉县",
                "parent": "196"
              },
              {
                "code": "2292",
                "fullSpell": "funanxian",
                "level": 3,
                "name": "阜南县",
                "parent": "196"
              },
              {
                "code": "2293",
                "fullSpell": "yingdongqu",
                "level": 3,
                "name": "颍东区",
                "parent": "196"
              },
              {
                "code": "2296",
                "fullSpell": "yingshangxian",
                "level": 3,
                "name": "颍上县",
                "parent": "196"
              }
            ],
            "code": "196",
            "fullSpell": "fuyangshi",
            "level": 2,
            "name": "阜阳市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "198",
                "fullSpell": "chaohushi",
                "level": 3,
                "name": "巢湖市",
                "parent": "186"
              },
              {
                "code": "2305",
                "fullSpell": "lujiangxian",
                "level": 3,
                "name": "庐江县",
                "parent": "186"
              },
              {
                "code": "2225",
                "fullSpell": "luyangqu",
                "level": 3,
                "name": "庐阳区",
                "parent": "186"
              },
              {
                "code": "2227",
                "fullSpell": "feidongxian",
                "level": 3,
                "name": "肥东县",
                "parent": "186"
              },
              {
                "code": "2230",
                "fullSpell": "changfengxian",
                "level": 3,
                "name": "长丰县",
                "parent": "186"
              },
              {
                "code": "2228",
                "fullSpell": "feixixian",
                "level": 3,
                "name": "肥西县",
                "parent": "186"
              },
              {
                "code": "2224",
                "fullSpell": "baohequ",
                "level": 3,
                "name": "包河区",
                "parent": "186"
              },
              {
                "code": "2226",
                "fullSpell": "yaohaiqu",
                "level": 3,
                "name": "瑶海区",
                "parent": "186"
              },
              {
                "code": "2229",
                "fullSpell": "shushanqu",
                "level": 3,
                "name": "蜀山区",
                "parent": "186"
              }
            ],
            "code": "186",
            "fullSpell": "hefeishi",
            "level": 2,
            "name": "合肥市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2285",
                "fullSpell": "dingyuanxian",
                "level": 3,
                "name": "定远县",
                "parent": "195"
              },
              {
                "code": "2287",
                "fullSpell": "laianxian",
                "level": 3,
                "name": "来安县",
                "parent": "195"
              },
              {
                "code": "2282",
                "fullSpell": "fengyangxian",
                "level": 3,
                "name": "凤阳县",
                "parent": "195"
              },
              {
                "code": "2283",
                "fullSpell": "nanqiaoqu",
                "level": 3,
                "name": "南谯区",
                "parent": "195"
              },
              {
                "code": "2281",
                "fullSpell": "quanjiaoxian",
                "level": 3,
                "name": "全椒县",
                "parent": "195"
              },
              {
                "code": "2284",
                "fullSpell": "tianchangshi",
                "level": 3,
                "name": "天长市",
                "parent": "195"
              },
              {
                "code": "2286",
                "fullSpell": "mingguangshi",
                "level": 3,
                "name": "明光市",
                "parent": "195"
              },
              {
                "code": "2288",
                "fullSpell": "langyaqu",
                "level": 3,
                "name": "琅琊区",
                "parent": "195"
              }
            ],
            "code": "195",
            "fullSpell": "chuzhoushi",
            "level": 2,
            "name": "滁州市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2231",
                "fullSpell": "sanshanqu",
                "level": 3,
                "name": "三山区",
                "parent": "187"
              },
              {
                "code": "2234",
                "fullSpell": "fanchangxian",
                "level": 3,
                "name": "繁昌县",
                "parent": "187"
              },
              {
                "code": "2235",
                "fullSpell": "wuhuxian",
                "level": 3,
                "name": "芜湖县",
                "parent": "187"
              },
              {
                "code": "2233",
                "fullSpell": "yijiangqu",
                "level": 3,
                "name": "弋江区",
                "parent": "187"
              },
              {
                "code": "2237",
                "fullSpell": "jiujiangqu",
                "level": 3,
                "name": "鸠江区",
                "parent": "187"
              },
              {
                "code": "2232",
                "fullSpell": "nanlingxian",
                "level": 3,
                "name": "南陵县",
                "parent": "187"
              },
              {
                "code": "2236",
                "fullSpell": "jinghuqu",
                "level": 3,
                "name": "镜湖区",
                "parent": "187"
              }
            ],
            "code": "187",
            "fullSpell": "wuhushi",
            "level": 2,
            "name": "芜湖市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2322",
                "fullSpell": "ningguoshi",
                "level": 3,
                "name": "宁国市",
                "parent": "202"
              },
              {
                "code": "2327",
                "fullSpell": "jixixian",
                "level": 3,
                "name": "绩溪县",
                "parent": "202"
              },
              {
                "code": "2324",
                "fullSpell": "guangdexian",
                "level": 3,
                "name": "广德县",
                "parent": "202"
              },
              {
                "code": "2323",
                "fullSpell": "xuanzhouqu",
                "level": 3,
                "name": "宣州区",
                "parent": "202"
              },
              {
                "code": "2326",
                "fullSpell": "jingxian",
                "level": 3,
                "name": "泾县",
                "parent": "202"
              },
              {
                "code": "2325",
                "fullSpell": "jingdexian",
                "level": 3,
                "name": "旌德县",
                "parent": "202"
              },
              {
                "code": "2328",
                "fullSpell": "langxixian",
                "level": 3,
                "name": "郎溪县",
                "parent": "202"
              }
            ],
            "code": "202",
            "fullSpell": "xuanchengshi",
            "level": 2,
            "name": "宣城市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2308",
                "fullSpell": "shuchengxian",
                "level": 3,
                "name": "舒城县",
                "parent": "199"
              },
              {
                "code": "2313",
                "fullSpell": "huoqiuxian",
                "level": 3,
                "name": "霍邱县",
                "parent": "199"
              },
              {
                "code": "2311",
                "fullSpell": "jinzhaixian",
                "level": 3,
                "name": "金寨县",
                "parent": "199"
              },
              {
                "code": "2312",
                "fullSpell": "huoshanxian",
                "level": 3,
                "name": "霍山县",
                "parent": "199"
              },
              {
                "code": "2307",
                "fullSpell": "shouxian",
                "level": 3,
                "name": "寿县",
                "parent": "199"
              },
              {
                "code": "2309",
                "fullSpell": "yuanqu",
                "level": 3,
                "name": "裕安区",
                "parent": "199"
              },
              {
                "code": "2310",
                "fullSpell": "jinanqu",
                "level": 3,
                "name": "金安区",
                "parent": "199"
              }
            ],
            "code": "199",
            "fullSpell": "liuanshi",
            "level": 2,
            "name": "六安市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2249",
                "fullSpell": "tianjiaanqu",
                "level": 3,
                "name": "田家庵区",
                "parent": "189"
              },
              {
                "code": "2245",
                "fullSpell": "bagongshanqu",
                "level": 3,
                "name": "八公山区",
                "parent": "189"
              },
              {
                "code": "2250",
                "fullSpell": "xiejiajiqu",
                "level": 3,
                "name": "谢家集区",
                "parent": "189"
              },
              {
                "code": "2247",
                "fullSpell": "datongqu",
                "level": 3,
                "name": "大通区",
                "parent": "189"
              },
              {
                "code": "2248",
                "fullSpell": "panjiqu",
                "level": 3,
                "name": "潘集区",
                "parent": "189"
              },
              {
                "code": "2246",
                "fullSpell": "fengtaixian",
                "level": 3,
                "name": "凤台县",
                "parent": "189"
              }
            ],
            "code": "189",
            "fullSpell": "huainanshi",
            "level": 2,
            "name": "淮南市",
            "parent": "12"
          },
          {
            "areas": [
              {
                "code": "2257",
                "fullSpell": "lieshanqu",
                "level": 3,
                "name": "烈山区",
                "parent": "191"
              },
              {
                "code": "2255",
                "fullSpell": "dujiqu",
                "level": 3,
                "name": "杜集区",
                "parent": "191"
              },
              {
                "code": "2258",
                "fullSpell": "xiangshanqu",
                "level": 3,
                "name": "相山区",
                "parent": "191"
              },
              {
                "code": "2256",
                "fullSpell": "suixixian",
                "level": 3,
                "name": "濉溪县",
                "parent": "191"
              }
            ],
            "code": "191",
            "fullSpell": "huaibeishi",
            "level": 2,
            "name": "淮北市",
            "parent": "12"
          }
        ],
        "code": "12",
        "fullSpell": "anhuisheng",
        "level": 1,
        "name": "安徽省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "467811114066",
                "fullSpell": "anmenbandao",
                "level": 3,
                "name": "澳门半岛",
                "parent": "534"
              },
              {
                "code": "467811114607",
                "fullSpell": "lidao",
                "level": 3,
                "name": "离岛",
                "parent": "534"
              }
            ],
            "code": "534",
            "fullSpell": "aomen",
            "level": 2,
            "name": "澳门特别行政区",
            "parent": "34"
          }
        ],
        "code": "34",
        "fullSpell": "aomen",
        "level": 1,
        "name": "澳门"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "38",
                "fullSpell": "xichengqu",
                "level": 3,
                "name": "西城区",
                "parent": "5025"
              },
              {
                "code": "52",
                "fullSpell": "pingguqu",
                "level": 3,
                "name": "平谷区",
                "parent": "5025"
              },
              {
                "code": "45",
                "fullSpell": "mentougouqu",
                "level": 3,
                "name": "门头沟区",
                "parent": "5025"
              },
              {
                "code": "48",
                "fullSpell": "shunyiqu",
                "level": 3,
                "name": "顺义区",
                "parent": "5025"
              },
              {
                "code": "53",
                "fullSpell": "miyunxian",
                "level": 3,
                "name": "密云区",
                "parent": "5025"
              },
              {
                "code": "41",
                "fullSpell": "chaoyangqu",
                "level": 3,
                "name": "朝阳区",
                "parent": "5025"
              },
              {
                "code": "51",
                "fullSpell": "huairouqu",
                "level": 3,
                "name": "怀柔区",
                "parent": "5025"
              },
              {
                "code": "46",
                "fullSpell": "fangshanqu",
                "level": 3,
                "name": "房山区",
                "parent": "5025"
              },
              {
                "code": "42",
                "fullSpell": "fengtaiqu",
                "level": 3,
                "name": "丰台区",
                "parent": "5025"
              },
              {
                "code": "50",
                "fullSpell": "daxingqu",
                "level": 3,
                "name": "大兴区",
                "parent": "5025"
              },
              {
                "code": "43",
                "fullSpell": "shijingshanqu",
                "level": 3,
                "name": "石景山区",
                "parent": "5025"
              },
              {
                "code": "37",
                "fullSpell": "dongchengqu",
                "level": 3,
                "name": "东城区",
                "parent": "5025"
              },
              {
                "code": "44",
                "fullSpell": "haidianqu",
                "level": 3,
                "name": "海淀区",
                "parent": "5025"
              },
              {
                "code": "49",
                "fullSpell": "changpingqu",
                "level": 3,
                "name": "昌平区",
                "parent": "5025"
              },
              {
                "code": "54",
                "fullSpell": "yanqingxian",
                "level": 3,
                "name": "延庆区",
                "parent": "5025"
              },
              {
                "code": "47",
                "fullSpell": "tongzhouqu",
                "level": 3,
                "name": "通州区",
                "parent": "5025"
              }
            ],
            "code": "5025",
            "fullSpell": "beijingshi",
            "level": 2,
            "name": "北京市",
            "parent": "1"
          }
        ],
        "code": "1",
        "fullSpell": "beijing",
        "level": 1,
        "name": "北京"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "362",
                "fullSpell": "tongliangqu",
                "level": 3,
                "name": "铜梁区",
                "parent": "5028"
              },
              {
                "code": "349",
                "fullSpell": "jiangbeiqu",
                "level": 3,
                "name": "江北区",
                "parent": "5028"
              },
              {
                "code": "360",
                "fullSpell": "qijiangqu",
                "level": 3,
                "name": "綦江区",
                "parent": "5028"
              },
              {
                "code": "373",
                "fullSpell": "yunyangxian",
                "level": 3,
                "name": "云阳县",
                "parent": "5028"
              },
              {
                "code": "356",
                "fullSpell": "yubeiqu",
                "level": 3,
                "name": "渝北区",
                "parent": "5028"
              },
              {
                "code": "382",
                "fullSpell": "hechuanqu",
                "level": 3,
                "name": "合川区",
                "parent": "5028"
              },
              {
                "code": "345",
                "fullSpell": "wanzhouqu",
                "level": 3,
                "name": "万州区",
                "parent": "5028"
              },
              {
                "code": "351",
                "fullSpell": "jiulongpoqu",
                "level": 3,
                "name": "九龙坡区",
                "parent": "5028"
              },
              {
                "code": "365",
                "fullSpell": "bishanqu",
                "level": 3,
                "name": "璧山区",
                "parent": "5028"
              },
              {
                "code": "371",
                "fullSpell": "zhongxian",
                "level": 3,
                "name": "忠县",
                "parent": "5028"
              },
              {
                "code": "384",
                "fullSpell": "nanchuanqu",
                "level": 3,
                "name": "南川区",
                "parent": "5028"
              },
              {
                "code": "374",
                "fullSpell": "fengjiexian",
                "level": 3,
                "name": "奉节县",
                "parent": "5028"
              },
              {
                "code": "357",
                "fullSpell": "bananqu",
                "level": 3,
                "name": "巴南区",
                "parent": "5028"
              },
              {
                "code": "383",
                "fullSpell": "yongchuanqu",
                "level": 3,
                "name": "永川区",
                "parent": "5028"
              },
              {
                "code": "352",
                "fullSpell": "nananqu",
                "level": 3,
                "name": "南岸区",
                "parent": "5028"
              },
              {
                "code": "350",
                "fullSpell": "shapingbaqu",
                "level": 3,
                "name": "沙坪坝区",
                "parent": "5028"
              },
              {
                "code": "367",
                "fullSpell": "chengkouxian",
                "level": 3,
                "name": "城口县",
                "parent": "5028"
              },
              {
                "code": "380",
                "fullSpell": "pengshuimiaozutujiazuzizhixian",
                "level": 3,
                "name": "彭水苗族土家族自治县",
                "parent": "5028"
              },
              {
                "code": "346",
                "fullSpell": "fulingqu",
                "level": 3,
                "name": "涪陵区",
                "parent": "5028"
              },
              {
                "code": "368",
                "fullSpell": "fengdouxian",
                "level": 3,
                "name": "丰都县",
                "parent": "5028"
              },
              {
                "code": "359",
                "fullSpell": "changshouqu",
                "level": 3,
                "name": "长寿区",
                "parent": "5028"
              },
              {
                "code": "361",
                "fullSpell": "tongnanqu",
                "level": 3,
                "name": "潼南区",
                "parent": "5028"
              },
              {
                "code": "372",
                "fullSpell": "kaizhouxian",
                "level": 3,
                "name": "开州区",
                "parent": "5028"
              },
              {
                "code": "347",
                "fullSpell": "yuzhongqu",
                "level": 3,
                "name": "渝中区",
                "parent": "5028"
              },
              {
                "code": "358",
                "fullSpell": "qianjiangqu",
                "level": 3,
                "name": "黔江区",
                "parent": "5028"
              },
              {
                "code": "376",
                "fullSpell": "wuxixian",
                "level": 3,
                "name": "巫溪县",
                "parent": "5028"
              },
              {
                "code": "379",
                "fullSpell": "youyangtujiazumiaozuzizhixian",
                "level": 3,
                "name": "酉阳土家族苗族自治县",
                "parent": "5028"
              },
              {
                "code": "364",
                "fullSpell": "rongchangqu",
                "level": 3,
                "name": "荣昌区",
                "parent": "5028"
              },
              {
                "code": "353",
                "fullSpell": "beibeiqu",
                "level": 3,
                "name": "北碚区",
                "parent": "5028"
              },
              {
                "code": "363",
                "fullSpell": "dazuxian",
                "level": 3,
                "name": "大足区",
                "parent": "5028"
              },
              {
                "code": "378",
                "fullSpell": "xiushantujiazumiaozuzizhixian",
                "level": 3,
                "name": "秀山土家族苗族自治县",
                "parent": "5028"
              },
              {
                "code": "375",
                "fullSpell": "wushanxian",
                "level": 3,
                "name": "巫山县",
                "parent": "5028"
              },
              {
                "code": "381",
                "fullSpell": "jiangjinqu",
                "level": 3,
                "name": "江津区",
                "parent": "5028"
              },
              {
                "code": "366",
                "fullSpell": "liangpingqu",
                "level": 3,
                "name": "梁平区",
                "parent": "5028"
              },
              {
                "code": "370",
                "fullSpell": "wulongqu",
                "level": 3,
                "name": "武隆区",
                "parent": "5028"
              },
              {
                "code": "377",
                "fullSpell": "shizhutujiazuzizhixian",
                "level": 3,
                "name": "石柱土家族自治县",
                "parent": "5028"
              },
              {
                "code": "369",
                "fullSpell": "dianjiangxian",
                "level": 3,
                "name": "垫江县",
                "parent": "5028"
              },
              {
                "code": "348",
                "fullSpell": "dadukouqu",
                "level": 3,
                "name": "大渡口区",
                "parent": "5028"
              }
            ],
            "code": "5028",
            "fullSpell": "chongqingshi",
            "level": 2,
            "name": "重庆市",
            "parent": "22"
          }
        ],
        "code": "22",
        "fullSpell": "chongqing",
        "level": 1,
        "name": "重庆"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "2404",
                "fullSpell": "changtingxian",
                "level": 3,
                "name": "长汀县",
                "parent": "210"
              },
              {
                "code": "2403",
                "fullSpell": "lianchengxian",
                "level": 3,
                "name": "连城县",
                "parent": "210"
              },
              {
                "code": "2400",
                "fullSpell": "wupingxian",
                "level": 3,
                "name": "武平县",
                "parent": "210"
              },
              {
                "code": "2401",
                "fullSpell": "yongdingqu",
                "level": 3,
                "name": "永定区",
                "parent": "210"
              },
              {
                "code": "2398",
                "fullSpell": "shanghangxian",
                "level": 3,
                "name": "上杭县",
                "parent": "210"
              },
              {
                "code": "2399",
                "fullSpell": "xinluoqu",
                "level": 3,
                "name": "新罗区",
                "parent": "210"
              },
              {
                "code": "2402",
                "fullSpell": "zhangpingshi",
                "level": 3,
                "name": "漳平市",
                "parent": "210"
              }
            ],
            "code": "210",
            "fullSpell": "longyanshi",
            "level": 2,
            "name": "龙岩市",
            "parent": "13"
          },
          {
            "areas": [
              {
                "code": "2393",
                "fullSpell": "songxixian",
                "level": 3,
                "name": "松溪县",
                "parent": "209"
              },
              {
                "code": "2395",
                "fullSpell": "puchengxian",
                "level": 3,
                "name": "浦城县",
                "parent": "209"
              },
              {
                "code": "2392",
                "fullSpell": "zhenghexian",
                "level": 3,
                "name": "政和县",
                "parent": "209"
              },
              {
                "code": "2397",
                "fullSpell": "shunchangxian",
                "level": 3,
                "name": "顺昌县",
                "parent": "209"
              },
              {
                "code": "2388",
                "fullSpell": "guangzexian",
                "level": 3,
                "name": "光泽县",
                "parent": "209"
              },
              {
                "code": "2389",
                "fullSpell": "yanpingqu",
                "level": 3,
                "name": "延平区",
                "parent": "209"
              },
              {
                "code": "2396",
                "fullSpell": "shaowushi",
                "level": 3,
                "name": "邵武市",
                "parent": "209"
              },
              {
                "code": "2390",
                "fullSpell": "jianoushi",
                "level": 3,
                "name": "建瓯市",
                "parent": "209"
              },
              {
                "code": "2391",
                "fullSpell": "jianyangqu",
                "level": 3,
                "name": "建阳区",
                "parent": "209"
              },
              {
                "code": "2394",
                "fullSpell": "wuyishanshi",
                "level": 3,
                "name": "武夷山市",
                "parent": "209"
              }
            ],
            "code": "209",
            "fullSpell": "nanpingshi",
            "level": 2,
            "name": "南平市",
            "parent": "13"
          },
          {
            "areas": [
              {
                "code": "2349",
                "fullSpell": "chengxiangqu",
                "level": 3,
                "name": "城厢区",
                "parent": "205"
              },
              {
                "code": "2348",
                "fullSpell": "xianyouxian",
                "level": 3,
                "name": "仙游县",
                "parent": "205"
              },
              {
                "code": "2352",
                "fullSpell": "lichengqu",
                "level": 3,
                "name": "荔城区",
                "parent": "205"
              },
              {
                "code": "2350",
                "fullSpell": "hanjiangqu",
                "level": 3,
                "name": "涵江区",
                "parent": "205"
              },
              {
                "code": "2351",
                "fullSpell": "xiuyuqu",
                "level": 3,
                "name": "秀屿区",
                "parent": "205"
              }
            ],
            "code": "205",
            "fullSpell": "putianshi",
            "level": 2,
            "name": "莆田市",
            "parent": "13"
          },
          {
            "areas": [
              {
                "code": "2330",
                "fullSpell": "taijiangqu",
                "level": 3,
                "name": "台江区",
                "parent": "203"
              },
              {
                "code": "2333",
                "fullSpell": "yongtaixian",
                "level": 3,
                "name": "永泰县",
                "parent": "203"
              },
              {
                "code": "2340",
                "fullSpell": "maweiqu",
                "level": 3,
                "name": "马尾区",
                "parent": "203"
              },
              {
                "code": "2337",
                "fullSpell": "changlequ",
                "level": 3,
                "name": "长乐区",
                "parent": "203"
              },
              {
                "code": "2335",
                "fullSpell": "luoyuanxian",
                "level": 3,
                "name": "罗源县",
                "parent": "203"
              },
              {
                "code": "2329",
                "fullSpell": "cangshanqu",
                "level": 3,
                "name": "仓山区",
                "parent": "203"
              },
              {
                "code": "2338",
                "fullSpell": "minhouxian",
                "level": 3,
                "name": "闽侯县",
                "parent": "203"
              },
              {
                "code": "2341",
                "fullSpell": "gulouqu",
                "level": 3,
                "name": "鼓楼区",
                "parent": "203"
              },
              {
                "code": "2331",
                "fullSpell": "pingtanxian",
                "level": 3,
                "name": "平潭县",
                "parent": "203"
              },
              {
                "code": "2332",
                "fullSpell": "jinanqu",
                "level": 3,
                "name": "晋安区",
                "parent": "203"
              },
              {
                "code": "2336",
                "fullSpell": "lianjiangxian",
                "level": 3,
                "name": "连江县",
                "parent": "203"
              },
              {
                "code": "2339",
                "fullSpell": "minqingxian",
                "level": 3,
                "name": "闽清县",
                "parent": "203"
              },
              {
                "code": "2334",
                "fullSpell": "fuqingshi",
                "level": 3,
                "name": "福清市",
                "parent": "203"
              }
            ],
            "code": "203",
            "fullSpell": "fuzhoushi",
            "level": 2,
            "name": "福州市",
            "parent": "13"
          },
          {
            "areas": [
              {
                "code": "2369",
                "fullSpell": "huianxian",
                "level": 3,
                "name": "惠安县",
                "parent": "207"
              },
              {
                "code": "2370",
                "fullSpell": "jinjiangshi",
                "level": 3,
                "name": "晋江市",
                "parent": "207"
              },
              {
                "code": "2376",
                "fullSpell": "lichengqu",
                "level": 3,
                "name": "鲤城区",
                "parent": "207"
              },
              {
                "code": "2371",
                "fullSpell": "yongchunxian",
                "level": 3,
                "name": "永春县",
                "parent": "207"
              },
              {
                "code": "2368",
                "fullSpell": "dehuaxian",
                "level": 3,
                "name": "德化县",
                "parent": "207"
              },
              {
                "code": "2373",
                "fullSpell": "luojiangqu",
                "level": 3,
                "name": "洛江区",
                "parent": "207"
              },
              {
                "code": "2372",
                "fullSpell": "quangangqu",
                "level": 3,
                "name": "泉港区",
                "parent": "207"
              },
              {
                "code": "2366",
                "fullSpell": "nananshi",
                "level": 3,
                "name": "南安市",
                "parent": "207"
              },
              {
                "code": "2374",
                "fullSpell": "shishishi",
                "level": 3,
                "name": "石狮市",
                "parent": "207"
              },
              {
                "code": "2367",
                "fullSpell": "anxixian",
                "level": 3,
                "name": "安溪县",
                "parent": "207"
              },
              {
                "code": "2375",
                "fullSpell": "jinmenxian",
                "level": 3,
                "name": "金门县",
                "parent": "207"
              },
              {
                "code": "2365",
                "fullSpell": "fengzequ",
                "level": 3,
                "name": "丰泽区",
                "parent": "207"
              }
            ],
            "code": "207",
            "fullSpell": "quanzhoushi",
            "level": 2,
            "name": "泉州市",
            "parent": "13"
          },
          {
            "areas": [
              {
                "code": "2379",
                "fullSpell": "huaanxian",
                "level": 3,
                "name": "华安县",
                "parent": "208"
              },
              {
                "code": "2387",
                "fullSpell": "longhaishi",
                "level": 3,
                "name": "龙海市",
                "parent": "208"
              },
              {
                "code": "2382",
                "fullSpell": "zhangpuxian",
                "level": 3,
                "name": "漳浦县",
                "parent": "208"
              },
              {
                "code": "2380",
                "fullSpell": "nanjingxian",
                "level": 3,
                "name": "南靖县",
                "parent": "208"
              },
              {
                "code": "2381",
                "fullSpell": "pinghexian",
                "level": 3,
                "name": "平和县",
                "parent": "208"
              },
              {
                "code": "2386",
                "fullSpell": "longwenqu",
                "level": 3,
                "name": "龙文区",
                "parent": "208"
              },
              {
                "code": "2385",
                "fullSpell": "changtaixian",
                "level": 3,
                "name": "长泰县",
                "parent": "208"
              },
              {
                "code": "2378",
                "fullSpell": "yunxiaoxian",
                "level": 3,
                "name": "云霄县",
                "parent": "208"
              },
              {
                "code": "2383",
                "fullSpell": "xiangchengqu",
                "level": 3,
                "name": "芗城区",
                "parent": "208"
              },
              {
                "code": "2377",
                "fullSpell": "dongshanxian",
                "level": 3,
                "name": "东山县",
                "parent": "208"
              },
              {
                "code": "2384",
                "fullSpell": "zhaoanxian",
                "level": 3,
                "name": "诏安县",
                "parent": "208"
              }
            ],
            "code": "208",
            "fullSpell": "zhangzhoushi",
            "level": 2,
            "name": "漳州市",
            "parent": "13"
          },
          {
            "areas": [
              {
                "code": "2344",
                "fullSpell": "haicangqu",
                "level": 3,
                "name": "海沧区",
                "parent": "204"
              },
              {
                "code": "2345",
                "fullSpell": "huliqu",
                "level": 3,
                "name": "湖里区",
                "parent": "204"
              },
              {
                "code": "2347",
                "fullSpell": "jimeiqu",
                "level": 3,
                "name": "集美区",
                "parent": "204"
              },
              {
                "code": "2342",
                "fullSpell": "tonganqu",
                "level": 3,
                "name": "同安区",
                "parent": "204"
              },
              {
                "code": "2343",
                "fullSpell": "simingqu",
                "level": 3,
                "name": "思明区",
                "parent": "204"
              },
              {
                "code": "2346",
                "fullSpell": "xianganqu",
                "level": 3,
                "name": "翔安区",
                "parent": "204"
              }
            ],
            "code": "204",
            "fullSpell": "xiamenshi",
            "level": 2,
            "name": "厦门市",
            "parent": "13"
          },
          {
            "areas": [
              {
                "code": "2364",
                "fullSpell": "qingliuxian",
                "level": 3,
                "name": "清流县",
                "parent": "206"
              },
              {
                "code": "2363",
                "fullSpell": "tainingxian",
                "level": 3,
                "name": "泰宁县",
                "parent": "206"
              },
              {
                "code": "2354",
                "fullSpell": "datianxian",
                "level": 3,
                "name": "大田县",
                "parent": "206"
              },
              {
                "code": "2355",
                "fullSpell": "ninghuaxian",
                "level": 3,
                "name": "宁化县",
                "parent": "206"
              },
              {
                "code": "2362",
                "fullSpell": "shaxian",
                "level": 3,
                "name": "沙县",
                "parent": "206"
              },
              {
                "code": "2353",
                "fullSpell": "sanyuanqu",
                "level": 3,
                "name": "三元区",
                "parent": "206"
              },
              {
                "code": "2359",
                "fullSpell": "mingxixian",
                "level": 3,
                "name": "明溪县",
                "parent": "206"
              },
              {
                "code": "2361",
                "fullSpell": "yonganshi",
                "level": 3,
                "name": "永安市",
                "parent": "206"
              },
              {
                "code": "2356",
                "fullSpell": "jianglexian",
                "level": 3,
                "name": "将乐县",
                "parent": "206"
              },
              {
                "code": "2358",
                "fullSpell": "jianningxian",
                "level": 3,
                "name": "建宁县",
                "parent": "206"
              },
              {
                "code": "2360",
                "fullSpell": "meiliequ",
                "level": 3,
                "name": "梅列区",
                "parent": "206"
              },
              {
                "code": "2357",
                "fullSpell": "youxixian",
                "level": 3,
                "name": "尤溪县",
                "parent": "206"
              }
            ],
            "code": "206",
            "fullSpell": "sanmingshi",
            "level": 2,
            "name": "三明市",
            "parent": "13"
          },
          {
            "areas": [
              {
                "code": "2409",
                "fullSpell": "zherongxian",
                "level": 3,
                "name": "柘荣县",
                "parent": "211"
              },
              {
                "code": "2408",
                "fullSpell": "pingnanxian",
                "level": 3,
                "name": "屏南县",
                "parent": "211"
              },
              {
                "code": "2413",
                "fullSpell": "xiapuxian",
                "level": 3,
                "name": "霞浦县",
                "parent": "211"
              },
              {
                "code": "2411",
                "fullSpell": "fudingshi",
                "level": 3,
                "name": "福鼎市",
                "parent": "211"
              },
              {
                "code": "2407",
                "fullSpell": "shouningxian",
                "level": 3,
                "name": "寿宁县",
                "parent": "211"
              },
              {
                "code": "2405",
                "fullSpell": "gutianxian",
                "level": 3,
                "name": "古田县",
                "parent": "211"
              },
              {
                "code": "2412",
                "fullSpell": "jiaochengqu",
                "level": 3,
                "name": "蕉城区",
                "parent": "211"
              },
              {
                "code": "2410",
                "fullSpell": "fuanshi",
                "level": 3,
                "name": "福安市",
                "parent": "211"
              },
              {
                "code": "2406",
                "fullSpell": "zhouningxian",
                "level": 3,
                "name": "周宁县",
                "parent": "211"
              }
            ],
            "code": "211",
            "fullSpell": "ningdeshi",
            "level": 2,
            "name": "宁德市",
            "parent": "13"
          }
        ],
        "code": "13",
        "fullSpell": "fujiansheng",
        "level": 1,
        "name": "福建省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "4806",
                "fullSpell": "huatingxian",
                "level": 3,
                "name": "华亭县",
                "parent": "455"
              },
              {
                "code": "4808",
                "fullSpell": "chongxinxian",
                "level": 3,
                "name": "崇信县",
                "parent": "455"
              },
              {
                "code": "4810",
                "fullSpell": "jingchuanxian",
                "level": 3,
                "name": "泾川县",
                "parent": "455"
              },
              {
                "code": "4811",
                "fullSpell": "lingtaixian",
                "level": 3,
                "name": "灵台县",
                "parent": "455"
              },
              {
                "code": "4812",
                "fullSpell": "jingningxian",
                "level": 3,
                "name": "静宁县",
                "parent": "455"
              },
              {
                "code": "4807",
                "fullSpell": "kongdongqu",
                "level": 3,
                "name": "崆峒区",
                "parent": "455"
              },
              {
                "code": "4809",
                "fullSpell": "zhuanglangxian",
                "level": 3,
                "name": "庄浪县",
                "parent": "455"
              }
            ],
            "code": "455",
            "fullSpell": "pingliangshi",
            "level": 2,
            "name": "平凉市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4822",
                "fullSpell": "ningxian",
                "level": 3,
                "name": "宁县",
                "parent": "457"
              },
              {
                "code": "4826",
                "fullSpell": "xifengqu",
                "level": 3,
                "name": "西峰区",
                "parent": "457"
              },
              {
                "code": "4823",
                "fullSpell": "qingchengxian",
                "level": 3,
                "name": "庆城县",
                "parent": "457"
              },
              {
                "code": "4820",
                "fullSpell": "huachixian",
                "level": 3,
                "name": "华池县",
                "parent": "457"
              },
              {
                "code": "4821",
                "fullSpell": "heshuixian",
                "level": 3,
                "name": "合水县",
                "parent": "457"
              },
              {
                "code": "4827",
                "fullSpell": "zhenyuanxian",
                "level": 3,
                "name": "镇原县",
                "parent": "457"
              },
              {
                "code": "4825",
                "fullSpell": "huanxian",
                "level": 3,
                "name": "环县",
                "parent": "457"
              },
              {
                "code": "4824",
                "fullSpell": "zhengningxian",
                "level": 3,
                "name": "正宁县",
                "parent": "457"
              }
            ],
            "code": "457",
            "fullSpell": "qingyangshi",
            "level": 2,
            "name": "庆阳市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4816",
                "fullSpell": "subeimengguzuzizhixian",
                "level": 3,
                "name": "肃北蒙古族自治县",
                "parent": "456"
              },
              {
                "code": "4817",
                "fullSpell": "suzhouqu",
                "level": 3,
                "name": "肃州区",
                "parent": "456"
              },
              {
                "code": "4818",
                "fullSpell": "jintaxian",
                "level": 3,
                "name": "金塔县",
                "parent": "456"
              },
              {
                "code": "4815",
                "fullSpell": "guazhouxian",
                "level": 3,
                "name": "瓜州县",
                "parent": "456"
              },
              {
                "code": "4813",
                "fullSpell": "dunhuangshi",
                "level": 3,
                "name": "敦煌市",
                "parent": "456"
              },
              {
                "code": "4814",
                "fullSpell": "yumenshi",
                "level": 3,
                "name": "玉门市",
                "parent": "456"
              },
              {
                "code": "4819",
                "fullSpell": "akesaihasakezuzizhixian",
                "level": 3,
                "name": "阿克塞哈萨克族自治县",
                "parent": "456"
              }
            ],
            "code": "456",
            "fullSpell": "jiuquanshi",
            "level": 2,
            "name": "酒泉市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4786",
                "fullSpell": "jingtaixian",
                "level": 3,
                "name": "景泰县",
                "parent": "451"
              },
              {
                "code": "4788",
                "fullSpell": "jingyuanxian",
                "level": 3,
                "name": "靖远县",
                "parent": "451"
              },
              {
                "code": "4784",
                "fullSpell": "huiningxian",
                "level": 3,
                "name": "会宁县",
                "parent": "451"
              },
              {
                "code": "4785",
                "fullSpell": "pingchuanqu",
                "level": 3,
                "name": "平川区",
                "parent": "451"
              },
              {
                "code": "4787",
                "fullSpell": "baiyinqu",
                "level": 3,
                "name": "白银区",
                "parent": "451"
              }
            ],
            "code": "451",
            "fullSpell": "baiyinshi",
            "level": 2,
            "name": "白银市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4780",
                "fullSpell": "xiguqu",
                "level": 3,
                "name": "西固区",
                "parent": "448"
              },
              {
                "code": "4775",
                "fullSpell": "anningqu",
                "level": 3,
                "name": "安宁区",
                "parent": "448"
              },
              {
                "code": "4774",
                "fullSpell": "chengguanqu",
                "level": 3,
                "name": "城关区",
                "parent": "448"
              },
              {
                "code": "4773",
                "fullSpell": "qilihequ",
                "level": 3,
                "name": "七里河区",
                "parent": "448"
              },
              {
                "code": "4777",
                "fullSpell": "yongdengxian",
                "level": 3,
                "name": "永登县",
                "parent": "448"
              },
              {
                "code": "4776",
                "fullSpell": "yuzhongxian",
                "level": 3,
                "name": "榆中县",
                "parent": "448"
              },
              {
                "code": "4778",
                "fullSpell": "gaolanxian",
                "level": 3,
                "name": "皋兰县",
                "parent": "448"
              },
              {
                "code": "4779",
                "fullSpell": "hongguqu",
                "level": 3,
                "name": "红古区",
                "parent": "448"
              }
            ],
            "code": "448",
            "fullSpell": "lanzhoushi",
            "level": 2,
            "name": "兰州市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4789",
                "fullSpell": "zhangjiachuanhuizuzizhixian",
                "level": 3,
                "name": "张家川回族自治县",
                "parent": "452"
              },
              {
                "code": "4795",
                "fullSpell": "maijiqu",
                "level": 3,
                "name": "麦积区",
                "parent": "452"
              },
              {
                "code": "4794",
                "fullSpell": "qinzhouqu",
                "level": 3,
                "name": "秦州区",
                "parent": "452"
              },
              {
                "code": "4792",
                "fullSpell": "ganguxian",
                "level": 3,
                "name": "甘谷县",
                "parent": "452"
              },
              {
                "code": "4793",
                "fullSpell": "qinanxian",
                "level": 3,
                "name": "秦安县",
                "parent": "452"
              },
              {
                "code": "4790",
                "fullSpell": "wushanxian",
                "level": 3,
                "name": "武山县",
                "parent": "452"
              },
              {
                "code": "4791",
                "fullSpell": "qingshuixian",
                "level": 3,
                "name": "清水县",
                "parent": "452"
              }
            ],
            "code": "452",
            "fullSpell": "tianshuishi",
            "level": 2,
            "name": "天水市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4835",
                "fullSpell": "liangdangxian",
                "level": 3,
                "name": "两当县",
                "parent": "459"
              },
              {
                "code": "4837",
                "fullSpell": "kangxian",
                "level": 3,
                "name": "康县",
                "parent": "459"
              },
              {
                "code": "4839",
                "fullSpell": "chengxian",
                "level": 3,
                "name": "成县",
                "parent": "459"
              },
              {
                "code": "4840",
                "fullSpell": "wenxian",
                "level": 3,
                "name": "文县",
                "parent": "459"
              },
              {
                "code": "4841",
                "fullSpell": "wudouqu",
                "level": 3,
                "name": "武都区",
                "parent": "459"
              },
              {
                "code": "4838",
                "fullSpell": "huixian",
                "level": 3,
                "name": "徽县",
                "parent": "459"
              },
              {
                "code": "4836",
                "fullSpell": "dangchangxian",
                "level": 3,
                "name": "宕昌县",
                "parent": "459"
              },
              {
                "code": "4842",
                "fullSpell": "lixian",
                "level": 3,
                "name": "礼县",
                "parent": "459"
              },
              {
                "code": "4843",
                "fullSpell": "xihexian",
                "level": 3,
                "name": "西和县",
                "parent": "459"
              }
            ],
            "code": "459",
            "fullSpell": "longnanshi",
            "level": 2,
            "name": "陇南市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4781",
                "fullSpell": "jiayuguanshi",
                "level": 3,
                "name": "雄关区",
                "parent": "449"
              },
              {
                "code": "46781114004",
                "fullSpell": "yuquanzhen",
                "level": 3,
                "name": "峪泉镇",
                "parent": "449"
              },
              {
                "code": "46781114005",
                "fullSpell": "xinchenzhen",
                "level": 3,
                "name": "新城镇",
                "parent": "449"
              },
              {
                "code": "46781114006",
                "fullSpell": "wenshuzhen",
                "level": 3,
                "name": "文殊镇",
                "parent": "449"
              },
              {
                "code": "46781114007",
                "fullSpell": "jingtiequ",
                "level": 3,
                "name": "镜铁区",
                "parent": "449"
              },
              {
                "code": "46781114008",
                "fullSpell": "changchengqu",
                "level": 3,
                "name": "长城区",
                "parent": "449"
              }
            ],
            "code": "449",
            "fullSpell": "jiayuguanshi",
            "level": 2,
            "name": "嘉峪关市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4832",
                "fullSpell": "zhangxian",
                "level": 3,
                "name": "漳县",
                "parent": "458"
              },
              {
                "code": "4834",
                "fullSpell": "longxixian",
                "level": 3,
                "name": "陇西县",
                "parent": "458"
              },
              {
                "code": "4830",
                "fullSpell": "minxian",
                "level": 3,
                "name": "岷县",
                "parent": "458"
              },
              {
                "code": "4828",
                "fullSpell": "lintaoxian",
                "level": 3,
                "name": "临洮县",
                "parent": "458"
              },
              {
                "code": "4833",
                "fullSpell": "tongweixian",
                "level": 3,
                "name": "通渭县",
                "parent": "458"
              },
              {
                "code": "4831",
                "fullSpell": "weiyuanxian",
                "level": 3,
                "name": "渭源县",
                "parent": "458"
              },
              {
                "code": "4829",
                "fullSpell": "andingqu",
                "level": 3,
                "name": "安定区",
                "parent": "458"
              }
            ],
            "code": "458",
            "fullSpell": "dingxishi",
            "level": 2,
            "name": "定西市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4844",
                "fullSpell": "dongxiangzuzizhixian",
                "level": 3,
                "name": "东乡族自治县",
                "parent": "460"
              },
              {
                "code": "4845",
                "fullSpell": "linxiaxian",
                "level": 3,
                "name": "临夏县",
                "parent": "460"
              },
              {
                "code": "4847",
                "fullSpell": "hezhengxian",
                "level": 3,
                "name": "和政县",
                "parent": "460"
              },
              {
                "code": "4846",
                "fullSpell": "linxiashi",
                "level": 3,
                "name": "临夏市",
                "parent": "460"
              },
              {
                "code": "4850",
                "fullSpell": "yongjingxian",
                "level": 3,
                "name": "永靖县",
                "parent": "460"
              },
              {
                "code": "4848",
                "fullSpell": "guanghexian",
                "level": 3,
                "name": "广河县",
                "parent": "460"
              },
              {
                "code": "4849",
                "fullSpell": "kanglexian",
                "level": 3,
                "name": "康乐县",
                "parent": "460"
              },
              {
                "code": "4851",
                "fullSpell": "jishishanbaoanzudongxiangzusalazuzizhixian",
                "level": 3,
                "name": "积石山保安族东乡族撒拉族自治县",
                "parent": "460"
              }
            ],
            "code": "460",
            "fullSpell": "linxiahuizuzizhizhou",
            "level": 2,
            "name": "临夏回族自治州",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4783",
                "fullSpell": "jinchuanqu",
                "level": 3,
                "name": "金川区",
                "parent": "450"
              },
              {
                "code": "4782",
                "fullSpell": "yongchangxian",
                "level": 3,
                "name": "永昌县",
                "parent": "450"
              }
            ],
            "code": "450",
            "fullSpell": "jinchangshi",
            "level": 2,
            "name": "金昌市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4797",
                "fullSpell": "gulangxian",
                "level": 3,
                "name": "古浪县",
                "parent": "453"
              },
              {
                "code": "4796",
                "fullSpell": "liangzhouqu",
                "level": 3,
                "name": "凉州区",
                "parent": "453"
              },
              {
                "code": "4798",
                "fullSpell": "tianzhucangzuzizhixian",
                "level": 3,
                "name": "天祝藏族自治县",
                "parent": "453"
              },
              {
                "code": "4799",
                "fullSpell": "minqinxian",
                "level": 3,
                "name": "民勤县",
                "parent": "453"
              }
            ],
            "code": "453",
            "fullSpell": "wuweishi",
            "level": 2,
            "name": "武威市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4801",
                "fullSpell": "shandanxian",
                "level": 3,
                "name": "山丹县",
                "parent": "454"
              },
              {
                "code": "4800",
                "fullSpell": "linzexian",
                "level": 3,
                "name": "临泽县",
                "parent": "454"
              },
              {
                "code": "4803",
                "fullSpell": "ganzhouqu",
                "level": 3,
                "name": "甘州区",
                "parent": "454"
              },
              {
                "code": "4804",
                "fullSpell": "sunanyuguzuzizhixian",
                "level": 3,
                "name": "肃南裕固族自治县",
                "parent": "454"
              },
              {
                "code": "4805",
                "fullSpell": "gaotaixian",
                "level": 3,
                "name": "高台县",
                "parent": "454"
              },
              {
                "code": "4802",
                "fullSpell": "minlexian",
                "level": 3,
                "name": "民乐县",
                "parent": "454"
              }
            ],
            "code": "454",
            "fullSpell": "zhangyeshi",
            "level": 2,
            "name": "张掖市",
            "parent": "28"
          },
          {
            "areas": [
              {
                "code": "4855",
                "fullSpell": "xiahexian",
                "level": 3,
                "name": "夏河县",
                "parent": "461"
              },
              {
                "code": "4853",
                "fullSpell": "zhuonixian",
                "level": 3,
                "name": "卓尼县",
                "parent": "461"
              },
              {
                "code": "4852",
                "fullSpell": "lintanxian",
                "level": 3,
                "name": "临潭县",
                "parent": "461"
              },
              {
                "code": "4856",
                "fullSpell": "maquxian",
                "level": 3,
                "name": "玛曲县",
                "parent": "461"
              },
              {
                "code": "4857",
                "fullSpell": "luquxian",
                "level": 3,
                "name": "碌曲县",
                "parent": "461"
              },
              {
                "code": "4858",
                "fullSpell": "zhouquxian",
                "level": 3,
                "name": "舟曲县",
                "parent": "461"
              },
              {
                "code": "4859",
                "fullSpell": "diebuxian",
                "level": 3,
                "name": "迭部县",
                "parent": "461"
              },
              {
                "code": "4854",
                "fullSpell": "hezuoshi",
                "level": 3,
                "name": "合作市",
                "parent": "461"
              }
            ],
            "code": "461",
            "fullSpell": "gannancangzuzizhizhou",
            "level": 2,
            "name": "甘南藏族自治州",
            "parent": "28"
          }
        ],
        "code": "28",
        "fullSpell": "gansusheng",
        "level": 1,
        "name": "甘肃省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "3127",
                "fullSpell": "hepingxian",
                "level": 3,
                "name": "和平县",
                "parent": "302"
              },
              {
                "code": "3128",
                "fullSpell": "yuanchengqu",
                "level": 3,
                "name": "源城区",
                "parent": "302"
              },
              {
                "code": "3126",
                "fullSpell": "dongyuanxian",
                "level": 3,
                "name": "东源县",
                "parent": "302"
              },
              {
                "code": "3131",
                "fullSpell": "longchuanxian",
                "level": 3,
                "name": "龙川县",
                "parent": "302"
              },
              {
                "code": "3130",
                "fullSpell": "lianpingxian",
                "level": 3,
                "name": "连平县",
                "parent": "302"
              },
              {
                "code": "3129",
                "fullSpell": "zijinxian",
                "level": 3,
                "name": "紫金县",
                "parent": "302"
              }
            ],
            "code": "302",
            "fullSpell": "heyuanshi",
            "level": 2,
            "name": "河源市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3055",
                "fullSpell": "wujiangqu",
                "level": 3,
                "name": "武江区",
                "parent": "290"
              },
              {
                "code": "3049",
                "fullSpell": "ruyuanyaozuzizhixian",
                "level": 3,
                "name": "乳源瑶族自治县",
                "parent": "290"
              },
              {
                "code": "3054",
                "fullSpell": "qujiangqu",
                "level": 3,
                "name": "曲江区",
                "parent": "290"
              },
              {
                "code": "3048",
                "fullSpell": "lechangshi",
                "level": 3,
                "name": "乐昌市",
                "parent": "290"
              },
              {
                "code": "3056",
                "fullSpell": "zhenjiangqu",
                "level": 3,
                "name": "浈江区",
                "parent": "290"
              },
              {
                "code": "3050",
                "fullSpell": "renhuaxian",
                "level": 3,
                "name": "仁化县",
                "parent": "290"
              },
              {
                "code": "3053",
                "fullSpell": "xinfengxian",
                "level": 3,
                "name": "新丰县",
                "parent": "290"
              },
              {
                "code": "3052",
                "fullSpell": "shixingxian",
                "level": 3,
                "name": "始兴县",
                "parent": "290"
              },
              {
                "code": "3057",
                "fullSpell": "wengyuanxian",
                "level": 3,
                "name": "翁源县",
                "parent": "290"
              },
              {
                "code": "3051",
                "fullSpell": "nanxiongshi",
                "level": 3,
                "name": "南雄市",
                "parent": "290"
              }
            ],
            "code": "290",
            "fullSpell": "shaoguanshi",
            "level": 2,
            "name": "韶关市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3095",
                "fullSpell": "xinyishi",
                "level": 3,
                "name": "信宜市",
                "parent": "297"
              },
              {
                "code": "3097",
                "fullSpell": "dianbaiqu",
                "level": 3,
                "name": "电白区",
                "parent": "297"
              },
              {
                "code": "3098",
                "fullSpell": "maonanqu",
                "level": 3,
                "name": "茂南区",
                "parent": "297"
              },
              {
                "code": "3099",
                "fullSpell": "maogangqu",
                "level": 3,
                "name": "茂港区",
                "parent": "297"
              },
              {
                "code": "3096",
                "fullSpell": "huazhoushi",
                "level": 3,
                "name": "化州市",
                "parent": "297"
              },
              {
                "code": "3100",
                "fullSpell": "gaozhoushi",
                "level": 3,
                "name": "高州市",
                "parent": "297"
              }
            ],
            "code": "297",
            "fullSpell": "maomingshi",
            "level": 2,
            "name": "茂名市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3069",
                "fullSpell": "chaoyangqu",
                "level": 3,
                "name": "潮阳区",
                "parent": "293"
              },
              {
                "code": "3067",
                "fullSpell": "nanaoxian",
                "level": 3,
                "name": "南澳县",
                "parent": "293"
              },
              {
                "code": "3072",
                "fullSpell": "jinpingqu",
                "level": 3,
                "name": "金平区",
                "parent": "293"
              },
              {
                "code": "3070",
                "fullSpell": "chenghaiqu",
                "level": 3,
                "name": "澄海区",
                "parent": "293"
              },
              {
                "code": "3073",
                "fullSpell": "longhuqu",
                "level": 3,
                "name": "龙湖区",
                "parent": "293"
              },
              {
                "code": "3071",
                "fullSpell": "haojiangqu",
                "level": 3,
                "name": "濠江区",
                "parent": "293"
              },
              {
                "code": "3068",
                "fullSpell": "chaonanqu",
                "level": 3,
                "name": "潮南区",
                "parent": "293"
              }
            ],
            "code": "293",
            "fullSpell": "shantoushi",
            "level": 2,
            "name": "汕头市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3142",
                "fullSpell": "lianzhoushi",
                "level": 3,
                "name": "连州市",
                "parent": "304"
              },
              {
                "code": "3136",
                "fullSpell": "fogangxian",
                "level": 3,
                "name": "佛冈县",
                "parent": "304"
              },
              {
                "code": "3137",
                "fullSpell": "qingchengqu",
                "level": 3,
                "name": "清城区",
                "parent": "304"
              },
              {
                "code": "3139",
                "fullSpell": "yingdeshi",
                "level": 3,
                "name": "英德市",
                "parent": "304"
              },
              {
                "code": "3138",
                "fullSpell": "qingxinqu",
                "level": 3,
                "name": "清新区",
                "parent": "304"
              },
              {
                "code": "3141",
                "fullSpell": "lianshanzhuangzuyaozuzizhixian",
                "level": 3,
                "name": "连山壮族瑶族自治县",
                "parent": "304"
              },
              {
                "code": "3143",
                "fullSpell": "yangshanxian",
                "level": 3,
                "name": "阳山县",
                "parent": "304"
              },
              {
                "code": "3140",
                "fullSpell": "liannanyaozuzizhixian",
                "level": 3,
                "name": "连南瑶族自治县",
                "parent": "304"
              }
            ],
            "code": "304",
            "fullSpell": "qingyuanshi",
            "level": 2,
            "name": "清远市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3062",
                "fullSpell": "luohuqu",
                "level": 3,
                "name": "罗湖区",
                "parent": "291"
              },
              {
                "code": "502000031",
                "fullSpell": "guangmingxinqu",
                "level": 3,
                "name": "光明新区",
                "parent": "291"
              },
              {
                "code": "3058",
                "fullSpell": "nanshanqu",
                "level": 3,
                "name": "南山区",
                "parent": "291"
              },
              {
                "code": "502000029",
                "fullSpell": "pingshangxinqu",
                "level": 3,
                "name": "坪山新区",
                "parent": "291"
              },
              {
                "code": "3060",
                "fullSpell": "yantianqu",
                "level": 3,
                "name": "盐田区",
                "parent": "291"
              },
              {
                "code": "502000030",
                "fullSpell": "dapengxinqu",
                "level": 3,
                "name": "大鹏新区",
                "parent": "291"
              },
              {
                "code": "3059",
                "fullSpell": "baoanqu",
                "level": 3,
                "name": "宝安区",
                "parent": "291"
              },
              {
                "code": "3063",
                "fullSpell": "longgangqu",
                "level": 3,
                "name": "龙岗区",
                "parent": "291"
              },
              {
                "code": "502000028",
                "fullSpell": "longhuaxinqu",
                "level": 3,
                "name": "龙华新区",
                "parent": "291"
              },
              {
                "code": "3061",
                "fullSpell": "futianqu",
                "level": 3,
                "name": "福田区",
                "parent": "291"
              }
            ],
            "code": "291",
            "fullSpell": "shenzhenshi",
            "level": 2,
            "name": "深圳市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3064",
                "fullSpell": "doumenqu",
                "level": 3,
                "name": "斗门区",
                "parent": "292"
              },
              {
                "code": "3065",
                "fullSpell": "jinwanqu",
                "level": 3,
                "name": "金湾区",
                "parent": "292"
              },
              {
                "code": "3066",
                "fullSpell": "xiangzhouqu",
                "level": 3,
                "name": "香洲区",
                "parent": "292"
              },
              {
                "code": "292000001",
                "fullSpell": "hengqinxinqu",
                "level": 3,
                "name": "横琴新区",
                "parent": "292"
              },
              {
                "code": "292000002",
                "fullSpell": "zhuhaibaosuiqu",
                "level": 3,
                "name": "珠海保税区",
                "parent": "292"
              },
              {
                "code": "292000003",
                "fullSpell": "gaolangangjingjiqu",
                "level": 3,
                "name": "高栏港经济区",
                "parent": "292"
              },
              {
                "code": "292000004",
                "fullSpell": "gaoxinjishuchanyekaifaqu",
                "level": 3,
                "name": "高新技术产业开发区",
                "parent": "292"
              },
              {
                "code": "292000005",
                "fullSpell": "wanshanhaiyangkaifashiyanqu",
                "level": 3,
                "name": "万山海洋开发试验区",
                "parent": "292"
              }
            ],
            "code": "292",
            "fullSpell": "zhuhaishi",
            "level": 2,
            "name": "珠海市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3043",
                "fullSpell": "baiyunqu",
                "level": 3,
                "name": "白云区",
                "parent": "289"
              },
              {
                "code": "3039",
                "fullSpell": "zengchengshi",
                "level": 3,
                "name": "增城区",
                "parent": "289"
              },
              {
                "code": "3046",
                "fullSpell": "yuexiuqu",
                "level": 3,
                "name": "越秀区",
                "parent": "289"
              },
              {
                "code": "3038",
                "fullSpell": "conghuashi",
                "level": 3,
                "name": "从化区",
                "parent": "289"
              },
              {
                "code": "3045",
                "fullSpell": "liwanqu",
                "level": 3,
                "name": "荔湾区",
                "parent": "289"
              },
              {
                "code": "3040",
                "fullSpell": "tianhequ",
                "level": 3,
                "name": "天河区",
                "parent": "289"
              },
              {
                "code": "3042",
                "fullSpell": "fanyuqu",
                "level": 3,
                "name": "番禺区",
                "parent": "289"
              },
              {
                "code": "3044",
                "fullSpell": "huadouqu",
                "level": 3,
                "name": "花都区",
                "parent": "289"
              },
              {
                "code": "3047",
                "fullSpell": "huangpuqu",
                "level": 3,
                "name": "黄埔区",
                "parent": "289"
              },
              {
                "code": "3041",
                "fullSpell": "haizhuqu",
                "level": 3,
                "name": "海珠区",
                "parent": "289"
              },
              {
                "code": "3037",
                "fullSpell": "nanshaqu",
                "level": 3,
                "name": "南沙区",
                "parent": "289"
              }
            ],
            "code": "289",
            "fullSpell": "guangzhoushi",
            "level": 2,
            "name": "广州市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3108",
                "fullSpell": "dinghuqu",
                "level": 3,
                "name": "鼎湖区",
                "parent": "298"
              },
              {
                "code": "3106",
                "fullSpell": "duanzhouqu",
                "level": 3,
                "name": "端州区",
                "parent": "298"
              },
              {
                "code": "3103",
                "fullSpell": "guangningxian",
                "level": 3,
                "name": "广宁县",
                "parent": "298"
              },
              {
                "code": "3104",
                "fullSpell": "deqingxian",
                "level": 3,
                "name": "德庆县",
                "parent": "298"
              },
              {
                "code": "3105",
                "fullSpell": "huaijixian",
                "level": 3,
                "name": "怀集县",
                "parent": "298"
              },
              {
                "code": "3102",
                "fullSpell": "fengkaixian",
                "level": 3,
                "name": "封开县",
                "parent": "298"
              },
              {
                "code": "3101",
                "fullSpell": "sihuishi",
                "level": 3,
                "name": "四会市",
                "parent": "298"
              },
              {
                "code": "3107",
                "fullSpell": "gaoyaoqu",
                "level": 3,
                "name": "高要区",
                "parent": "298"
              },
              {
                "code": "298000001",
                "fullSpell": "zhaoqinggaoxinqu",
                "level": 3,
                "name": "高新区",
                "parent": "298"
              }
            ],
            "code": "298",
            "fullSpell": "zhaoqingshi",
            "level": 2,
            "name": "肇庆市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "438911166",
                "fullSpell": "sanjiaozhen",
                "level": 3,
                "name": "三角镇",
                "parent": "306"
              },
              {
                "code": "438911156",
                "fullSpell": "guzhenzhen",
                "level": 3,
                "name": "古镇镇",
                "parent": "306"
              },
              {
                "code": "438911159",
                "fullSpell": "nanqu",
                "level": 3,
                "name": "南区街道",
                "parent": "306"
              },
              {
                "code": "438911154",
                "fullSpell": "xiqu",
                "level": 3,
                "name": "西区街道",
                "parent": "306"
              },
              {
                "code": "438911144",
                "fullSpell": "shiqiqujiedao",
                "level": 3,
                "name": "石岐区街道",
                "parent": "306"
              },
              {
                "code": "438911160",
                "fullSpell": "dongfengzhen",
                "level": 3,
                "name": "东凤镇",
                "parent": "306"
              },
              {
                "code": "438911151",
                "fullSpell": "dongshengzhen",
                "level": 3,
                "name": "东升镇",
                "parent": "306"
              },
              {
                "code": "438911167",
                "fullSpell": "shaxizhen",
                "level": 3,
                "name": "沙溪镇",
                "parent": "306"
              },
              {
                "code": "438911149",
                "fullSpell": "dongqu",
                "level": 3,
                "name": "东区街道",
                "parent": "306"
              },
              {
                "code": "438911153",
                "fullSpell": "banfuzhen",
                "level": 3,
                "name": "板芙镇",
                "parent": "306"
              },
              {
                "code": "438911161",
                "fullSpell": "henglanzhen",
                "level": 3,
                "name": "横栏镇",
                "parent": "306"
              },
              {
                "code": "438911145",
                "fullSpell": "huojukaifaqu",
                "level": 3,
                "name": "火炬开发区",
                "parent": "306"
              },
              {
                "code": "438911157",
                "fullSpell": "gangkouzhen",
                "level": 3,
                "name": "港口镇",
                "parent": "306"
              },
              {
                "code": "438911148",
                "fullSpell": "sanxiangzhen",
                "level": 3,
                "name": "三乡镇",
                "parent": "306"
              },
              {
                "code": "438911152",
                "fullSpell": "nanlangzhen",
                "level": 3,
                "name": "南朗镇",
                "parent": "306"
              },
              {
                "code": "438911165",
                "fullSpell": "fushazhen",
                "level": 3,
                "name": "阜沙镇",
                "parent": "306"
              },
              {
                "code": "438911155",
                "fullSpell": "nantouzhen",
                "level": 3,
                "name": "南头镇",
                "parent": "306"
              },
              {
                "code": "438911163",
                "fullSpell": "tanzhouzhen",
                "level": 3,
                "name": "坦洲镇",
                "parent": "306"
              },
              {
                "code": "438911158",
                "fullSpell": "shenwanzhen",
                "level": 3,
                "name": "神湾镇",
                "parent": "306"
              },
              {
                "code": "438911146",
                "fullSpell": "xiaolanzhen",
                "level": 3,
                "name": "小榄镇",
                "parent": "306"
              },
              {
                "code": "438911150",
                "fullSpell": "huangpuzhen",
                "level": 3,
                "name": "黄圃镇",
                "parent": "306"
              },
              {
                "code": "438911147",
                "fullSpell": "minzhongzhen",
                "level": 3,
                "name": "民众镇",
                "parent": "306"
              },
              {
                "code": "438911162",
                "fullSpell": "dayongzhen",
                "level": 3,
                "name": "大涌镇",
                "parent": "306"
              },
              {
                "code": "306000001",
                "fullSpell": "wuguishanjiedao",
                "level": 3,
                "name": "五桂山街道",
                "parent": "306"
              }
            ],
            "code": "306",
            "fullSpell": "zhongshanshi",
            "level": 2,
            "name": "中山市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3083",
                "fullSpell": "jianghaiqu",
                "level": 3,
                "name": "江海区",
                "parent": "295"
              },
              {
                "code": "3079",
                "fullSpell": "taishanshi",
                "level": 3,
                "name": "台山市",
                "parent": "295"
              },
              {
                "code": "3082",
                "fullSpell": "xinhuiqu",
                "level": 3,
                "name": "新会区",
                "parent": "295"
              },
              {
                "code": "3084",
                "fullSpell": "pengjiangqu",
                "level": 3,
                "name": "蓬江区",
                "parent": "295"
              },
              {
                "code": "3085",
                "fullSpell": "heshanshi",
                "level": 3,
                "name": "鹤山市",
                "parent": "295"
              },
              {
                "code": "3081",
                "fullSpell": "enpingshi",
                "level": 3,
                "name": "恩平市",
                "parent": "295"
              },
              {
                "code": "3080",
                "fullSpell": "kaipingshi",
                "level": 3,
                "name": "开平市",
                "parent": "295"
              }
            ],
            "code": "295",
            "fullSpell": "jiangmenshi",
            "level": 2,
            "name": "江门市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3158",
                "fullSpell": "yunanxian",
                "level": 3,
                "name": "郁南县",
                "parent": "309"
              },
              {
                "code": "3155",
                "fullSpell": "yunanqu",
                "level": 3,
                "name": "云安区",
                "parent": "309"
              },
              {
                "code": "3157",
                "fullSpell": "luodingshi",
                "level": 3,
                "name": "罗定市",
                "parent": "309"
              },
              {
                "code": "3154",
                "fullSpell": "yunchengqu",
                "level": 3,
                "name": "云城区",
                "parent": "309"
              },
              {
                "code": "3156",
                "fullSpell": "xinxingxian",
                "level": 3,
                "name": "新兴县",
                "parent": "309"
              }
            ],
            "code": "309",
            "fullSpell": "yunfushi",
            "level": 2,
            "name": "云浮市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3110",
                "fullSpell": "huidongxian",
                "level": 3,
                "name": "惠东县",
                "parent": "299"
              },
              {
                "code": "3112",
                "fullSpell": "huiyangqu",
                "level": 3,
                "name": "惠阳区",
                "parent": "299"
              },
              {
                "code": "3113",
                "fullSpell": "longmenxian",
                "level": 3,
                "name": "龙门县",
                "parent": "299"
              },
              {
                "code": "3109",
                "fullSpell": "boluoxian",
                "level": 3,
                "name": "博罗县",
                "parent": "299"
              },
              {
                "code": "3111",
                "fullSpell": "huichengqu",
                "level": 3,
                "name": "惠城区",
                "parent": "299"
              }
            ],
            "code": "299",
            "fullSpell": "huizhoushi",
            "level": 2,
            "name": "惠州市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3087",
                "fullSpell": "potouqu",
                "level": 3,
                "name": "坡头区",
                "parent": "296"
              },
              {
                "code": "3093",
                "fullSpell": "xiashanqu",
                "level": 3,
                "name": "霞山区",
                "parent": "296"
              },
              {
                "code": "3094",
                "fullSpell": "mazhangqu",
                "level": 3,
                "name": "麻章区",
                "parent": "296"
              },
              {
                "code": "3092",
                "fullSpell": "leizhoushi",
                "level": 3,
                "name": "雷州市",
                "parent": "296"
              },
              {
                "code": "3091",
                "fullSpell": "suixixian",
                "level": 3,
                "name": "遂溪县",
                "parent": "296"
              },
              {
                "code": "3088",
                "fullSpell": "lianjiangshi",
                "level": 3,
                "name": "廉江市",
                "parent": "296"
              },
              {
                "code": "3089",
                "fullSpell": "xuwenxian",
                "level": 3,
                "name": "徐闻县",
                "parent": "296"
              },
              {
                "code": "3090",
                "fullSpell": "chikanqu",
                "level": 3,
                "name": "赤坎区",
                "parent": "296"
              },
              {
                "code": "3086",
                "fullSpell": "wuchuanshi",
                "level": 3,
                "name": "吴川市",
                "parent": "296"
              }
            ],
            "code": "296",
            "fullSpell": "zhanjiangshi",
            "level": 2,
            "name": "湛江市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "438911119",
                "fullSpell": "nanchengqu",
                "level": 3,
                "name": "南城区",
                "parent": "305"
              },
              {
                "code": "438911134",
                "fullSpell": "changpingzhen",
                "level": 3,
                "name": "常平镇",
                "parent": "305"
              },
              {
                "code": "438911128",
                "fullSpell": "dongkengzhen",
                "level": 3,
                "name": "东坑镇",
                "parent": "305"
              },
              {
                "code": "438911129",
                "fullSpell": "zhongtangzhen",
                "level": 3,
                "name": "中堂镇",
                "parent": "305"
              },
              {
                "code": "438911133",
                "fullSpell": "qishizhen",
                "level": 3,
                "name": "企石镇",
                "parent": "305"
              },
              {
                "code": "438911142",
                "fullSpell": "qingxizhen",
                "level": 3,
                "name": "清溪镇",
                "parent": "305"
              },
              {
                "code": "438911123",
                "fullSpell": "wangniudunzhen",
                "level": 3,
                "name": "望牛墩镇",
                "parent": "305"
              },
              {
                "code": "438911118",
                "fullSpell": "fenggangzhen",
                "level": 3,
                "name": "凤岗镇",
                "parent": "305"
              },
              {
                "code": "438911120",
                "fullSpell": "chashanzhen",
                "level": 3,
                "name": "茶山镇",
                "parent": "305"
              },
              {
                "code": "438911117",
                "fullSpell": "shatianzhen",
                "level": 3,
                "name": "沙田镇",
                "parent": "305"
              },
              {
                "code": "438911140",
                "fullSpell": "liaobuzhen",
                "level": 3,
                "name": "寮步镇",
                "parent": "305"
              },
              {
                "code": "438911113",
                "fullSpell": "shilongzhen",
                "level": 3,
                "name": "石龙镇",
                "parent": "305"
              },
              {
                "code": "438911122",
                "fullSpell": "mayongzhen",
                "level": 3,
                "name": "麻涌镇",
                "parent": "305"
              },
              {
                "code": "438911143",
                "fullSpell": "houjiezhen",
                "level": 3,
                "name": "厚街镇",
                "parent": "305"
              },
              {
                "code": "438911125",
                "fullSpell": "changanzhen",
                "level": 3,
                "name": "长安镇",
                "parent": "305"
              },
              {
                "code": "438911127",
                "fullSpell": "shipaizhen",
                "level": 3,
                "name": "石排镇",
                "parent": "305"
              },
              {
                "code": "438911138",
                "fullSpell": "shijiezhen",
                "level": 3,
                "name": "石碣镇",
                "parent": "305"
              },
              {
                "code": "438911137",
                "fullSpell": "humenzhen",
                "level": 3,
                "name": "虎门镇",
                "parent": "305"
              },
              {
                "code": "438911124",
                "fullSpell": "daojiaozhen",
                "level": 3,
                "name": "道滘镇",
                "parent": "305"
              },
              {
                "code": "438911114",
                "fullSpell": "qiaotouzhen",
                "level": 3,
                "name": "桥头镇",
                "parent": "305"
              },
              {
                "code": "438911121",
                "fullSpell": "xiegangzhen",
                "level": 3,
                "name": "谢岗镇",
                "parent": "305"
              },
              {
                "code": "438911136",
                "fullSpell": "hongmeizhen",
                "level": 3,
                "name": "洪梅镇",
                "parent": "305"
              },
              {
                "code": "438911115",
                "fullSpell": "dalangzhen",
                "level": 3,
                "name": "大朗镇",
                "parent": "305"
              },
              {
                "code": "438911130",
                "fullSpell": "huangjiangzhen",
                "level": 3,
                "name": "黄江镇",
                "parent": "305"
              },
              {
                "code": "438911131",
                "fullSpell": "tangxiazhen",
                "level": 3,
                "name": "塘厦镇",
                "parent": "305"
              },
              {
                "code": "438911132",
                "fullSpell": "wanjiangqu",
                "level": 3,
                "name": "万江区",
                "parent": "305"
              },
              {
                "code": "438911139",
                "fullSpell": "henglizhen",
                "level": 3,
                "name": "横沥镇",
                "parent": "305"
              },
              {
                "code": "438911141",
                "fullSpell": "zhangmutouzhen",
                "level": 3,
                "name": "樟木头镇",
                "parent": "305"
              },
              {
                "code": "438911116",
                "fullSpell": "dalingshanzhen",
                "level": 3,
                "name": "大岭山镇",
                "parent": "305"
              },
              {
                "code": "438911112",
                "fullSpell": "guanchengqu",
                "level": 3,
                "name": "莞城区",
                "parent": "305"
              },
              {
                "code": "3144",
                "fullSpell": "songshanghugoaxinqu",
                "level": 3,
                "name": "松山湖高新区",
                "parent": "305"
              },
              {
                "code": "438911126",
                "fullSpell": "dongchengqu",
                "level": 3,
                "name": "东城区",
                "parent": "305"
              },
              {
                "code": "438911135",
                "fullSpell": "gaobuzhen",
                "level": 3,
                "name": "高埗镇",
                "parent": "305"
              }
            ],
            "code": "305",
            "fullSpell": "dongguanshi",
            "level": 2,
            "name": "东莞市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3150",
                "fullSpell": "jiedongqu",
                "level": 3,
                "name": "揭东区",
                "parent": "308"
              },
              {
                "code": "3149",
                "fullSpell": "huilaixian",
                "level": 3,
                "name": "惠来县",
                "parent": "308"
              },
              {
                "code": "3152",
                "fullSpell": "puningshi",
                "level": 3,
                "name": "普宁市",
                "parent": "308"
              },
              {
                "code": "3151",
                "fullSpell": "jiexixian",
                "level": 3,
                "name": "揭西县",
                "parent": "308"
              },
              {
                "code": "3153",
                "fullSpell": "rongchengqu",
                "level": 3,
                "name": "榕城区",
                "parent": "308"
              }
            ],
            "code": "308",
            "fullSpell": "jieyangshi",
            "level": 2,
            "name": "揭阳市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3134",
                "fullSpell": "yangchunshi",
                "level": 3,
                "name": "阳春市",
                "parent": "303"
              },
              {
                "code": "3135",
                "fullSpell": "yangxixian",
                "level": 3,
                "name": "阳西县",
                "parent": "303"
              },
              {
                "code": "3132",
                "fullSpell": "jiangchengqu",
                "level": 3,
                "name": "江城区",
                "parent": "303"
              },
              {
                "code": "3133",
                "fullSpell": "yangdongqu",
                "level": 3,
                "name": "阳东区",
                "parent": "303"
              }
            ],
            "code": "303",
            "fullSpell": "yangjiangshi",
            "level": 2,
            "name": "阳江市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3076",
                "fullSpell": "chanchengqu",
                "level": 3,
                "name": "禅城区",
                "parent": "294"
              },
              {
                "code": "3077",
                "fullSpell": "shundequ",
                "level": 3,
                "name": "顺德区",
                "parent": "294"
              },
              {
                "code": "3078",
                "fullSpell": "gaomingqu",
                "level": 3,
                "name": "高明区",
                "parent": "294"
              },
              {
                "code": "3075",
                "fullSpell": "nanhaiqu",
                "level": 3,
                "name": "南海区",
                "parent": "294"
              },
              {
                "code": "3074",
                "fullSpell": "sanshuiqu",
                "level": 3,
                "name": "三水区",
                "parent": "294"
              },
              {
                "code": "294000001",
                "fullSpell": "jiujiangzhen",
                "level": 3,
                "name": "九江镇",
                "parent": "294"
              },
              {
                "code": "294000002",
                "fullSpell": "xiqiaozhen",
                "level": 3,
                "name": "西樵镇",
                "parent": "294"
              }
            ],
            "code": "294",
            "fullSpell": "foshanshi",
            "level": 2,
            "name": "佛山市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3123",
                "fullSpell": "haifengxian",
                "level": 3,
                "name": "海丰县",
                "parent": "301"
              },
              {
                "code": "3125",
                "fullSpell": "luhexian",
                "level": 3,
                "name": "陆河县",
                "parent": "301"
              },
              {
                "code": "3124",
                "fullSpell": "lufengshi",
                "level": 3,
                "name": "陆丰市",
                "parent": "301"
              },
              {
                "code": "3122",
                "fullSpell": "chengqu",
                "level": 3,
                "name": "城区",
                "parent": "301"
              }
            ],
            "code": "301",
            "fullSpell": "shanweishi",
            "level": 2,
            "name": "汕尾市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3146",
                "fullSpell": "xiangqiaoqu",
                "level": 3,
                "name": "湘桥区",
                "parent": "307"
              },
              {
                "code": "3147",
                "fullSpell": "chaoanqu",
                "level": 3,
                "name": "潮安区",
                "parent": "307"
              },
              {
                "code": "3148",
                "fullSpell": "raopingxian",
                "level": 3,
                "name": "饶平县",
                "parent": "307"
              }
            ],
            "code": "307",
            "fullSpell": "chaozhoushi",
            "level": 2,
            "name": "潮州市",
            "parent": "19"
          },
          {
            "areas": [
              {
                "code": "3118",
                "fullSpell": "pingyuanxian",
                "level": 3,
                "name": "平远县",
                "parent": "300"
              },
              {
                "code": "3115",
                "fullSpell": "wuhuaxian",
                "level": 3,
                "name": "五华县",
                "parent": "300"
              },
              {
                "code": "3121",
                "fullSpell": "jiaolingxian",
                "level": 3,
                "name": "蕉岭县",
                "parent": "300"
              },
              {
                "code": "3120",
                "fullSpell": "meijiangqu",
                "level": 3,
                "name": "梅江区",
                "parent": "300"
              },
              {
                "code": "3119",
                "fullSpell": "meixian",
                "level": 3,
                "name": "梅县区",
                "parent": "300"
              },
              {
                "code": "3116",
                "fullSpell": "xingningshi",
                "level": 3,
                "name": "兴宁市",
                "parent": "300"
              },
              {
                "code": "3117",
                "fullSpell": "dapuxian",
                "level": 3,
                "name": "大埔县",
                "parent": "300"
              },
              {
                "code": "3114",
                "fullSpell": "fengshunxian",
                "level": 3,
                "name": "丰顺县",
                "parent": "300"
              }
            ],
            "code": "300",
            "fullSpell": "meizhoushi",
            "level": 2,
            "name": "梅州市",
            "parent": "19"
          }
        ],
        "code": "19",
        "fullSpell": "guangdongsheng",
        "level": 1,
        "name": "广东省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "3229",
                "fullSpell": "lingyunxian",
                "level": 3,
                "name": "凌云县",
                "parent": "319"
              },
              {
                "code": "3230",
                "fullSpell": "youjiangqu",
                "level": 3,
                "name": "右江区",
                "parent": "319"
              },
              {
                "code": "3232",
                "fullSpell": "debaoxian",
                "level": 3,
                "name": "德保县",
                "parent": "319"
              },
              {
                "code": "3237",
                "fullSpell": "napoxian",
                "level": 3,
                "name": "那坡县",
                "parent": "319"
              },
              {
                "code": "3238",
                "fullSpell": "longlingezuzizhixian",
                "level": 3,
                "name": "隆林各族自治县",
                "parent": "319"
              },
              {
                "code": "3233",
                "fullSpell": "tiandongxian",
                "level": 3,
                "name": "田东县",
                "parent": "319"
              },
              {
                "code": "3235",
                "fullSpell": "tianyangxian",
                "level": 3,
                "name": "田阳县",
                "parent": "319"
              },
              {
                "code": "3236",
                "fullSpell": "xilinxian",
                "level": 3,
                "name": "西林县",
                "parent": "319"
              },
              {
                "code": "3231",
                "fullSpell": "pingguoxian",
                "level": 3,
                "name": "平果县",
                "parent": "319"
              },
              {
                "code": "3228",
                "fullSpell": "leyexian",
                "level": 3,
                "name": "乐业县",
                "parent": "319"
              },
              {
                "code": "3234",
                "fullSpell": "tianlinxian",
                "level": 3,
                "name": "田林县",
                "parent": "319"
              },
              {
                "code": "3239",
                "fullSpell": "jingxishi",
                "level": 3,
                "name": "靖西市",
                "parent": "319"
              }
            ],
            "code": "319",
            "fullSpell": "baiseshi",
            "level": 2,
            "name": "百色市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3242",
                "fullSpell": "zhaopingxian",
                "level": 3,
                "name": "昭平县",
                "parent": "320"
              },
              {
                "code": "3243",
                "fullSpell": "zhongshanxian",
                "level": 3,
                "name": "钟山县",
                "parent": "320"
              },
              {
                "code": "3240",
                "fullSpell": "babuqu",
                "level": 3,
                "name": "八步区",
                "parent": "320"
              },
              {
                "code": "3241",
                "fullSpell": "fuchuanyaozuzizhixian",
                "level": 3,
                "name": "富川瑶族自治县",
                "parent": "320"
              }
            ],
            "code": "320",
            "fullSpell": "hezhoushi",
            "level": 2,
            "name": "贺州市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3176",
                "fullSpell": "liujiangqu",
                "level": 3,
                "name": "柳江区",
                "parent": "311"
              },
              {
                "code": "3178",
                "fullSpell": "rongshuimiaozuzizhixian",
                "level": 3,
                "name": "融水苗族自治县",
                "parent": "311"
              },
              {
                "code": "3179",
                "fullSpell": "yufengqu",
                "level": 3,
                "name": "鱼峰区",
                "parent": "311"
              },
              {
                "code": "3171",
                "fullSpell": "sanjiangdongzuzizhixian",
                "level": 3,
                "name": "三江侗族自治县",
                "parent": "311"
              },
              {
                "code": "3175",
                "fullSpell": "liuchengxian",
                "level": 3,
                "name": "柳城县",
                "parent": "311"
              },
              {
                "code": "3173",
                "fullSpell": "liubeiqu",
                "level": 3,
                "name": "柳北区",
                "parent": "311"
              },
              {
                "code": "3174",
                "fullSpell": "liunanqu",
                "level": 3,
                "name": "柳南区",
                "parent": "311"
              },
              {
                "code": "3172",
                "fullSpell": "chengzhongqu",
                "level": 3,
                "name": "城中区",
                "parent": "311"
              },
              {
                "code": "3180",
                "fullSpell": "luzhaixian",
                "level": 3,
                "name": "鹿寨县",
                "parent": "311"
              },
              {
                "code": "3177",
                "fullSpell": "ronganxian",
                "level": 3,
                "name": "融安县",
                "parent": "311"
              }
            ],
            "code": "311",
            "fullSpell": "liuzhoushi",
            "level": 2,
            "name": "柳州市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3259",
                "fullSpell": "xiangzhouxian",
                "level": 3,
                "name": "象州县",
                "parent": "322"
              },
              {
                "code": "3260",
                "fullSpell": "jinxiuyaozuzizhixian",
                "level": 3,
                "name": "金秀瑶族自治县",
                "parent": "322"
              },
              {
                "code": "3258",
                "fullSpell": "wuxuanxian",
                "level": 3,
                "name": "武宣县",
                "parent": "322"
              },
              {
                "code": "3255",
                "fullSpell": "xingbinqu",
                "level": 3,
                "name": "兴宾区",
                "parent": "322"
              },
              {
                "code": "3256",
                "fullSpell": "heshanshi",
                "level": 3,
                "name": "合山市",
                "parent": "322"
              },
              {
                "code": "3257",
                "fullSpell": "xinchengxian",
                "level": 3,
                "name": "忻城县",
                "parent": "322"
              }
            ],
            "code": "322",
            "fullSpell": "laibinshi",
            "level": 2,
            "name": "来宾市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3208",
                "fullSpell": "yinhaiqu",
                "level": 3,
                "name": "银海区",
                "parent": "314"
              },
              {
                "code": "3206",
                "fullSpell": "haichengqu",
                "level": 3,
                "name": "海城区",
                "parent": "314"
              },
              {
                "code": "3205",
                "fullSpell": "hepuxian",
                "level": 3,
                "name": "合浦县",
                "parent": "314"
              },
              {
                "code": "3207",
                "fullSpell": "tieshangangqu",
                "level": 3,
                "name": "铁山港区",
                "parent": "314"
              }
            ],
            "code": "314",
            "fullSpell": "beihaishi",
            "level": 2,
            "name": "北海市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3222",
                "fullSpell": "xingyexian",
                "level": 3,
                "name": "兴业县",
                "parent": "318"
              },
              {
                "code": "3227",
                "fullSpell": "luchuanxian",
                "level": 3,
                "name": "陆川县",
                "parent": "318"
              },
              {
                "code": "3226",
                "fullSpell": "yuzhouqu",
                "level": 3,
                "name": "玉州区",
                "parent": "318"
              },
              {
                "code": "3224",
                "fullSpell": "bobaixian",
                "level": 3,
                "name": "博白县",
                "parent": "318"
              },
              {
                "code": "3223",
                "fullSpell": "beiliushi",
                "level": 3,
                "name": "北流市",
                "parent": "318"
              },
              {
                "code": "3225",
                "fullSpell": "rongxian",
                "level": 3,
                "name": "容县",
                "parent": "318"
              }
            ],
            "code": "318",
            "fullSpell": "yulinshi",
            "level": 2,
            "name": "玉林市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3265",
                "fullSpell": "fusuixian",
                "level": 3,
                "name": "扶绥县",
                "parent": "323"
              },
              {
                "code": "3263",
                "fullSpell": "tiandengxian",
                "level": 3,
                "name": "天等县",
                "parent": "323"
              },
              {
                "code": "3264",
                "fullSpell": "ningmingxian",
                "level": 3,
                "name": "宁明县",
                "parent": "323"
              },
              {
                "code": "3261",
                "fullSpell": "pingxiangshi",
                "level": 3,
                "name": "凭祥市",
                "parent": "323"
              },
              {
                "code": "3267",
                "fullSpell": "longzhouxian",
                "level": 3,
                "name": "龙州县",
                "parent": "323"
              },
              {
                "code": "3266",
                "fullSpell": "jiangzhouqu",
                "level": 3,
                "name": "江州区",
                "parent": "323"
              },
              {
                "code": "3262",
                "fullSpell": "daxinxian",
                "level": 3,
                "name": "大新县",
                "parent": "323"
              }
            ],
            "code": "323",
            "fullSpell": "chongzuoshi",
            "level": 2,
            "name": "崇左市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3251",
                "fullSpell": "huanjiangmaonanzuzizhixian",
                "level": 3,
                "name": "环江毛南族自治县",
                "parent": "321"
              },
              {
                "code": "3249",
                "fullSpell": "yizhouqu",
                "level": 3,
                "name": "宜州区",
                "parent": "321"
              },
              {
                "code": "3244",
                "fullSpell": "donglanxian",
                "level": 3,
                "name": "东兰县",
                "parent": "321"
              },
              {
                "code": "3254",
                "fullSpell": "jinchengjiangqu",
                "level": 3,
                "name": "金城江区",
                "parent": "321"
              },
              {
                "code": "3250",
                "fullSpell": "bamayaozuzizhixian",
                "level": 3,
                "name": "巴马瑶族自治县",
                "parent": "321"
              },
              {
                "code": "3245",
                "fullSpell": "fengshanxian",
                "level": 3,
                "name": "凤山县",
                "parent": "321"
              },
              {
                "code": "3253",
                "fullSpell": "douanyaozuzizhixian",
                "level": 3,
                "name": "都安瑶族自治县",
                "parent": "321"
              },
              {
                "code": "3247",
                "fullSpell": "dahuayaozuzizhixian",
                "level": 3,
                "name": "大化瑶族自治县",
                "parent": "321"
              },
              {
                "code": "3252",
                "fullSpell": "luochengmulaozuzizhixian",
                "level": 3,
                "name": "罗城仫佬族自治县",
                "parent": "321"
              },
              {
                "code": "3248",
                "fullSpell": "tianexian",
                "level": 3,
                "name": "天峨县",
                "parent": "321"
              },
              {
                "code": "3246",
                "fullSpell": "nandanxian",
                "level": 3,
                "name": "南丹县",
                "parent": "321"
              }
            ],
            "code": "321",
            "fullSpell": "hechishi",
            "level": 2,
            "name": "河池市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3212",
                "fullSpell": "fangchengqu",
                "level": 3,
                "name": "防城区",
                "parent": "315"
              },
              {
                "code": "3210",
                "fullSpell": "dongxingshi",
                "level": 3,
                "name": "东兴市",
                "parent": "315"
              },
              {
                "code": "3209",
                "fullSpell": "shangsixian",
                "level": 3,
                "name": "上思县",
                "parent": "315"
              },
              {
                "code": "3211",
                "fullSpell": "gangkouqu",
                "level": 3,
                "name": "港口区",
                "parent": "315"
              }
            ],
            "code": "315",
            "fullSpell": "fangchenggangshi",
            "level": 2,
            "name": "防城港市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3215",
                "fullSpell": "qinbeiqu",
                "level": 3,
                "name": "钦北区",
                "parent": "316"
              },
              {
                "code": "3216",
                "fullSpell": "qinnanqu",
                "level": 3,
                "name": "钦南区",
                "parent": "316"
              },
              {
                "code": "3214",
                "fullSpell": "lingshanxian",
                "level": 3,
                "name": "灵山县",
                "parent": "316"
              },
              {
                "code": "3213",
                "fullSpell": "pubeixian",
                "level": 3,
                "name": "浦北县",
                "parent": "316"
              }
            ],
            "code": "316",
            "fullSpell": "qinzhoushi",
            "level": 2,
            "name": "钦州市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3218",
                "fullSpell": "guipingshi",
                "level": 3,
                "name": "桂平市",
                "parent": "317"
              },
              {
                "code": "3217",
                "fullSpell": "pingnanxian",
                "level": 3,
                "name": "平南县",
                "parent": "317"
              },
              {
                "code": "3219",
                "fullSpell": "gangbeiqu",
                "level": 3,
                "name": "港北区",
                "parent": "317"
              },
              {
                "code": "3220",
                "fullSpell": "gangnanqu",
                "level": 3,
                "name": "港南区",
                "parent": "317"
              },
              {
                "code": "3221",
                "fullSpell": "tantangqu",
                "level": 3,
                "name": "覃塘区",
                "parent": "317"
              }
            ],
            "code": "317",
            "fullSpell": "guigangshi",
            "level": 2,
            "name": "贵港市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3189",
                "fullSpell": "guanyangxian",
                "level": 3,
                "name": "灌阳县",
                "parent": "312"
              },
              {
                "code": "3182",
                "fullSpell": "linguiqu",
                "level": 3,
                "name": "临桂区",
                "parent": "312"
              },
              {
                "code": "3190",
                "fullSpell": "lingchuanxian",
                "level": 3,
                "name": "灵川县",
                "parent": "312"
              },
              {
                "code": "3196",
                "fullSpell": "yanshanqu",
                "level": 3,
                "name": "雁山区",
                "parent": "312"
              },
              {
                "code": "3197",
                "fullSpell": "longshenggezuzizhixian",
                "level": 3,
                "name": "龙胜各族自治县",
                "parent": "312"
              },
              {
                "code": "3188",
                "fullSpell": "yongfuxian",
                "level": 3,
                "name": "永福县",
                "parent": "312"
              },
              {
                "code": "3186",
                "fullSpell": "pinglexian",
                "level": 3,
                "name": "平乐县",
                "parent": "312"
              },
              {
                "code": "3181",
                "fullSpell": "qixingqu",
                "level": 3,
                "name": "七星区",
                "parent": "312"
              },
              {
                "code": "3193",
                "fullSpell": "xiangshanqu",
                "level": 3,
                "name": "象山区",
                "parent": "312"
              },
              {
                "code": "3187",
                "fullSpell": "gongchengyaozuzizhixian",
                "level": 3,
                "name": "恭城瑶族自治县",
                "parent": "312"
              },
              {
                "code": "3194",
                "fullSpell": "ziyuanxian",
                "level": 3,
                "name": "资源县",
                "parent": "312"
              },
              {
                "code": "3183",
                "fullSpell": "quanzhouxian",
                "level": 3,
                "name": "全州县",
                "parent": "312"
              },
              {
                "code": "3184",
                "fullSpell": "xinganxian",
                "level": 3,
                "name": "兴安县",
                "parent": "312"
              },
              {
                "code": "3185",
                "fullSpell": "diecaiqu",
                "level": 3,
                "name": "叠彩区",
                "parent": "312"
              },
              {
                "code": "3192",
                "fullSpell": "lipuxian",
                "level": 3,
                "name": "荔浦县",
                "parent": "312"
              },
              {
                "code": "3191",
                "fullSpell": "xiufengqu",
                "level": 3,
                "name": "秀峰区",
                "parent": "312"
              },
              {
                "code": "3195",
                "fullSpell": "yangshuoxian",
                "level": 3,
                "name": "阳朔县",
                "parent": "312"
              }
            ],
            "code": "312",
            "fullSpell": "guilinshi",
            "level": 2,
            "name": "桂林市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3161",
                "fullSpell": "binyangxian",
                "level": 3,
                "name": "宾阳县",
                "parent": "310"
              },
              {
                "code": "3159",
                "fullSpell": "shanglinxian",
                "level": 3,
                "name": "上林县",
                "parent": "310"
              },
              {
                "code": "3164",
                "fullSpell": "jiangnanqu",
                "level": 3,
                "name": "江南区",
                "parent": "310"
              },
              {
                "code": "3163",
                "fullSpell": "wumingqu",
                "level": 3,
                "name": "武鸣区",
                "parent": "310"
              },
              {
                "code": "3167",
                "fullSpell": "yongningqu",
                "level": 3,
                "name": "邕宁区",
                "parent": "310"
              },
              {
                "code": "3169",
                "fullSpell": "qingxiuqu",
                "level": 3,
                "name": "青秀区",
                "parent": "310"
              },
              {
                "code": "3160",
                "fullSpell": "xingningqu",
                "level": 3,
                "name": "兴宁区",
                "parent": "310"
              },
              {
                "code": "3166",
                "fullSpell": "xixiangtangqu",
                "level": 3,
                "name": "西乡塘区",
                "parent": "310"
              },
              {
                "code": "3170",
                "fullSpell": "mashanxian",
                "level": 3,
                "name": "马山县",
                "parent": "310"
              },
              {
                "code": "3165",
                "fullSpell": "liangqingqu",
                "level": 3,
                "name": "良庆区",
                "parent": "310"
              },
              {
                "code": "3162",
                "fullSpell": "hengxian",
                "level": 3,
                "name": "横县",
                "parent": "310"
              },
              {
                "code": "3168",
                "fullSpell": "longanxian",
                "level": 3,
                "name": "隆安县",
                "parent": "310"
              }
            ],
            "code": "310",
            "fullSpell": "nanningshi",
            "level": 2,
            "name": "南宁市",
            "parent": "20"
          },
          {
            "areas": [
              {
                "code": "3199",
                "fullSpell": "cenxishi",
                "level": 3,
                "name": "岑溪市",
                "parent": "313"
              },
              {
                "code": "3198",
                "fullSpell": "wanxiuqu",
                "level": 3,
                "name": "万秀区",
                "parent": "313"
              },
              {
                "code": "3203",
                "fullSpell": "longxuqu",
                "level": 3,
                "name": "龙圩区",
                "parent": "313"
              },
              {
                "code": "3204",
                "fullSpell": "changzhouqu",
                "level": 3,
                "name": "长洲区",
                "parent": "313"
              },
              {
                "code": "3201",
                "fullSpell": "mengshanxian",
                "level": 3,
                "name": "蒙山县",
                "parent": "313"
              },
              {
                "code": "3202",
                "fullSpell": "tengxian",
                "level": 3,
                "name": "藤县",
                "parent": "313"
              },
              {
                "code": "3200",
                "fullSpell": "cangwuxian",
                "level": 3,
                "name": "苍梧县",
                "parent": "313"
              }
            ],
            "code": "313",
            "fullSpell": "wuzhoushi",
            "level": 2,
            "name": "梧州市",
            "parent": "20"
          }
        ],
        "code": "20",
        "fullSpell": "guangxi",
        "level": 1,
        "name": "广西壮族自治区"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "4391",
                "fullSpell": "yunyanqu",
                "level": 3,
                "name": "云岩区",
                "parent": "406"
              },
              {
                "code": "4398",
                "fullSpell": "baiyunqu",
                "level": 3,
                "name": "白云区",
                "parent": "406"
              },
              {
                "code": "4394",
                "fullSpell": "xiaohequ",
                "level": 3,
                "name": "小河区",
                "parent": "406"
              },
              {
                "code": "4390",
                "fullSpell": "wudangqu",
                "level": 3,
                "name": "乌当区",
                "parent": "406"
              },
              {
                "code": "4393",
                "fullSpell": "nanmingqu",
                "level": 3,
                "name": "南明区",
                "parent": "406"
              },
              {
                "code": "4396",
                "fullSpell": "xifengxian",
                "level": 3,
                "name": "息烽县",
                "parent": "406"
              },
              {
                "code": "4399",
                "fullSpell": "huaxiqu",
                "level": 3,
                "name": "花溪区",
                "parent": "406"
              },
              {
                "code": "4395",
                "fullSpell": "kaiyangxian",
                "level": 3,
                "name": "开阳县",
                "parent": "406"
              },
              {
                "code": "4392",
                "fullSpell": "xiuwenxian",
                "level": 3,
                "name": "修文县",
                "parent": "406"
              },
              {
                "code": "4397",
                "fullSpell": "qingzhenshi",
                "level": 3,
                "name": "清镇市",
                "parent": "406"
              },
              {
                "code": "520115",
                "fullSpell": "guanshanhu",
                "level": 3,
                "name": "观山湖区",
                "parent": "406"
              }
            ],
            "code": "406",
            "fullSpell": "guiyangshi",
            "level": 2,
            "name": "贵阳市",
            "parent": "24"
          },
          {
            "areas": [
              {
                "code": "4425",
                "fullSpell": "yinjiangtujiazumiaozuzizhixian",
                "level": 3,
                "name": "印江土家族苗族自治县",
                "parent": "410"
              },
              {
                "code": "4426",
                "fullSpell": "dejiangxian",
                "level": 3,
                "name": "德江县",
                "parent": "410"
              },
              {
                "code": "4430",
                "fullSpell": "yanhetujiazuzizhixian",
                "level": 3,
                "name": "沿河土家族自治县",
                "parent": "410"
              },
              {
                "code": "4432",
                "fullSpell": "shiqianxian",
                "level": 3,
                "name": "石阡县",
                "parent": "410"
              },
              {
                "code": "4433",
                "fullSpell": "tongrenshi",
                "level": 3,
                "name": "铜仁市",
                "parent": "410"
              },
              {
                "code": "4427",
                "fullSpell": "sinanxian",
                "level": 3,
                "name": "思南县",
                "parent": "410"
              },
              {
                "code": "4431",
                "fullSpell": "yupingdongzuzizhixian",
                "level": 3,
                "name": "玉屏侗族自治县",
                "parent": "410"
              },
              {
                "code": "4424",
                "fullSpell": "wanshanqu",
                "level": 3,
                "name": "万山区",
                "parent": "410"
              },
              {
                "code": "4429",
                "fullSpell": "jiangkouxian",
                "level": 3,
                "name": "江口县",
                "parent": "410"
              },
              {
                "code": "4428",
                "fullSpell": "songtaomiaozuzizhixian",
                "level": 3,
                "name": "松桃苗族自治县",
                "parent": "410"
              }
            ],
            "code": "410",
            "fullSpell": "tongrenshi",
            "level": 2,
            "name": "铜仁市",
            "parent": "24"
          },
          {
            "areas": [
              {
                "code": "4403",
                "fullSpell": "zhongshanqu",
                "level": 3,
                "name": "钟山区",
                "parent": "407"
              },
              {
                "code": "4401",
                "fullSpell": "shuichengxian",
                "level": 3,
                "name": "水城县",
                "parent": "407"
              },
              {
                "code": "4400",
                "fullSpell": "liuzhitequ",
                "level": 3,
                "name": "六枝特区",
                "parent": "407"
              },
              {
                "code": "4402",
                "fullSpell": "panzhoushi",
                "level": 3,
                "name": "盘州市",
                "parent": "407"
              }
            ],
            "code": "407",
            "fullSpell": "liupanshuishi",
            "level": 2,
            "name": "六盘水市",
            "parent": "24"
          },
          {
            "areas": [
              {
                "code": "4417",
                "fullSpell": "bozhouqu",
                "level": 3,
                "name": "播州区",
                "parent": "408"
              },
              {
                "code": "4407",
                "fullSpell": "fenggangxian",
                "level": 3,
                "name": "凤冈县",
                "parent": "408"
              },
              {
                "code": "4411",
                "fullSpell": "huichuanqu",
                "level": 3,
                "name": "汇川区",
                "parent": "408"
              },
              {
                "code": "4406",
                "fullSpell": "yuqingxian",
                "level": 3,
                "name": "余庆县",
                "parent": "408"
              },
              {
                "code": "4410",
                "fullSpell": "zhenganxian",
                "level": 3,
                "name": "正安县",
                "parent": "408"
              },
              {
                "code": "4409",
                "fullSpell": "tongzixian",
                "level": 3,
                "name": "桐梓县",
                "parent": "408"
              },
              {
                "code": "4408",
                "fullSpell": "wuchuanyilaozumiaozuzizhixian",
                "level": 3,
                "name": "务川仡佬族苗族自治县",
                "parent": "408"
              },
              {
                "code": "4405",
                "fullSpell": "renhuaishi",
                "level": 3,
                "name": "仁怀市",
                "parent": "408"
              },
              {
                "code": "4415",
                "fullSpell": "chishuishi",
                "level": 3,
                "name": "赤水市",
                "parent": "408"
              },
              {
                "code": "4413",
                "fullSpell": "honghuagangqu",
                "level": 3,
                "name": "红花岗区",
                "parent": "408"
              },
              {
                "code": "4404",
                "fullSpell": "xishuixian",
                "level": 3,
                "name": "习水县",
                "parent": "408"
              },
              {
                "code": "4416",
                "fullSpell": "daozhenyilaozumiaozuzizhixian",
                "level": 3,
                "name": "道真仡佬族苗族自治县",
                "parent": "408"
              },
              {
                "code": "4412",
                "fullSpell": "meitanxian",
                "level": 3,
                "name": "湄潭县",
                "parent": "408"
              },
              {
                "code": "4414",
                "fullSpell": "suiyangxian",
                "level": 3,
                "name": "绥阳县",
                "parent": "408"
              }
            ],
            "code": "408",
            "fullSpell": "zunyishi",
            "level": 2,
            "name": "遵义市",
            "parent": "24"
          },
          {
            "areas": [
              {
                "code": "9998",
                "fullSpell": "anlongxian",
                "level": 3,
                "name": "安龙县",
                "parent": "999"
              },
              {
                "code": "9991",
                "fullSpell": "xingyi",
                "level": 3,
                "name": "兴义市",
                "parent": "999"
              },
              {
                "code": "9995",
                "fullSpell": "zhenfengxian",
                "level": 3,
                "name": "贞丰县",
                "parent": "999"
              },
              {
                "code": "9997",
                "fullSpell": "cehengxian",
                "level": 3,
                "name": "册亨县",
                "parent": "999"
              },
              {
                "code": "9992",
                "fullSpell": "xingrenxian",
                "level": 3,
                "name": "兴仁县",
                "parent": "999"
              },
              {
                "code": "9994",
                "fullSpell": "qinglongxian",
                "level": 3,
                "name": "晴隆县",
                "parent": "999"
              },
              {
                "code": "9993",
                "fullSpell": "puanxian",
                "level": 3,
                "name": "普安县",
                "parent": "999"
              },
              {
                "code": "9996",
                "fullSpell": "wangmoxian",
                "level": 3,
                "name": "望谟县",
                "parent": "999"
              }
            ],
            "code": "999",
            "fullSpell": "qianxinanbuyizumiaozuzizhizhou",
            "level": 2,
            "name": "黔西南布依族苗族自治州",
            "parent": "24"
          },
          {
            "areas": [
              {
                "code": "4418",
                "fullSpell": "guanlingbuyizumiaozuzizhixian",
                "level": 3,
                "name": "关岭布依族苗族自治县",
                "parent": "409"
              },
              {
                "code": "4421",
                "fullSpell": "ziyunmiaozubuyizuzizhixian",
                "level": 3,
                "name": "紫云苗族布依族自治县",
                "parent": "409"
              },
              {
                "code": "4419",
                "fullSpell": "pingbaqu",
                "level": 3,
                "name": "平坝区",
                "parent": "409"
              },
              {
                "code": "4420",
                "fullSpell": "pudingxian",
                "level": 3,
                "name": "普定县",
                "parent": "409"
              },
              {
                "code": "4423",
                "fullSpell": "zhenningbuyizumiaozuzizhixian",
                "level": 3,
                "name": "镇宁布依族苗族自治县",
                "parent": "409"
              },
              {
                "code": "4422",
                "fullSpell": "xixiuqu",
                "level": 3,
                "name": "西秀区",
                "parent": "409"
              }
            ],
            "code": "409",
            "fullSpell": "anshunshi",
            "level": 2,
            "name": "安顺市",
            "parent": "24"
          },
          {
            "areas": [
              {
                "code": "9981",
                "fullSpell": "kaili",
                "level": 3,
                "name": "凯里市",
                "parent": "998"
              },
              {
                "code": "9986",
                "fullSpell": "cenggongxian",
                "level": 3,
                "name": "岑巩县",
                "parent": "998"
              },
              {
                "code": "9987",
                "fullSpell": "danzaixian",
                "level": 3,
                "name": "丹寨县",
                "parent": "998"
              },
              {
                "code": "9984",
                "fullSpell": "sansuixian",
                "level": 3,
                "name": "三穗县",
                "parent": "998"
              },
              {
                "code": "9979",
                "fullSpell": "lipingxian",
                "level": 3,
                "name": "黎平县",
                "parent": "998"
              },
              {
                "code": "9978",
                "fullSpell": "leishanxian",
                "level": 3,
                "name": "雷山县",
                "parent": "998"
              },
              {
                "code": "9985",
                "fullSpell": "zhenyuanxian",
                "level": 3,
                "name": "镇远县",
                "parent": "998"
              },
              {
                "code": "9977",
                "fullSpell": "tianzhuxian",
                "level": 3,
                "name": "天柱县",
                "parent": "998"
              },
              {
                "code": "9975",
                "fullSpell": "rongjiangxian",
                "level": 3,
                "name": "榕江县",
                "parent": "998"
              },
              {
                "code": "9988",
                "fullSpell": "jipingxian",
                "level": 3,
                "name": "锦屏县",
                "parent": "998"
              },
              {
                "code": "9982",
                "fullSpell": "huangpingxian",
                "level": 3,
                "name": "黄平县",
                "parent": "998"
              },
              {
                "code": "9974",
                "fullSpell": "taijiangxian",
                "level": 3,
                "name": "台江县",
                "parent": "998"
              },
              {
                "code": "9973",
                "fullSpell": "majiangxian",
                "level": 3,
                "name": "麻江县",
                "parent": "998"
              },
              {
                "code": "9972",
                "fullSpell": "congjiangxian",
                "level": 3,
                "name": "从江县",
                "parent": "998"
              },
              {
                "code": "9983",
                "fullSpell": "sibingxian",
                "level": 3,
                "name": "施秉县",
                "parent": "998"
              },
              {
                "code": "9980",
                "fullSpell": "jianhexian",
                "level": 3,
                "name": "剑河县",
                "parent": "998"
              }
            ],
            "code": "998",
            "fullSpell": "qiandongnanmiaozudongzuzizhizhou",
            "level": 2,
            "name": "黔东南苗族侗族自治州",
            "parent": "24"
          },
          {
            "areas": [
              {
                "code": "4469",
                "fullSpell": "dushanxian",
                "level": 3,
                "name": "独山县",
                "parent": "414"
              },
              {
                "code": "4466",
                "fullSpell": "sandoushuizuzizhixian",
                "level": 3,
                "name": "三都水族自治县",
                "parent": "414"
              },
              {
                "code": "4477",
                "fullSpell": "longlixian",
                "level": 3,
                "name": "龙里县",
                "parent": "414"
              },
              {
                "code": "4470",
                "fullSpell": "wenganxian",
                "level": 3,
                "name": "瓮安县",
                "parent": "414"
              },
              {
                "code": "4474",
                "fullSpell": "guidingxian",
                "level": 3,
                "name": "贵定县",
                "parent": "414"
              },
              {
                "code": "4476",
                "fullSpell": "changshunxian",
                "level": 3,
                "name": "长顺县",
                "parent": "414"
              },
              {
                "code": "4473",
                "fullSpell": "liboxian",
                "level": 3,
                "name": "荔波县",
                "parent": "414"
              },
              {
                "code": "4468",
                "fullSpell": "huishuixian",
                "level": 3,
                "name": "惠水县",
                "parent": "414"
              },
              {
                "code": "4472",
                "fullSpell": "luodianxian",
                "level": 3,
                "name": "罗甸县",
                "parent": "414"
              },
              {
                "code": "4475",
                "fullSpell": "douyunshi",
                "level": 3,
                "name": "都匀市",
                "parent": "414"
              },
              {
                "code": "4467",
                "fullSpell": "pingtangxian",
                "level": 3,
                "name": "平塘县",
                "parent": "414"
              },
              {
                "code": "4471",
                "fullSpell": "fuquanshi",
                "level": 3,
                "name": "福泉市",
                "parent": "414"
              }
            ],
            "code": "414",
            "fullSpell": "qiannanbuyizumiaozuzizhizhou",
            "level": 2,
            "name": "黔南布依族苗族自治州",
            "parent": "24"
          },
          {
            "areas": [
              {
                "code": "08571",
                "fullSpell": "qixingguanqu",
                "level": 3,
                "name": "七星关区",
                "parent": "0857"
              },
              {
                "code": "08572",
                "fullSpell": "dafangxian",
                "level": 3,
                "name": "大方县",
                "parent": "0857"
              },
              {
                "code": "08573",
                "fullSpell": "qianxixian",
                "level": 3,
                "name": "黔西县",
                "parent": "0857"
              },
              {
                "code": "08574",
                "fullSpell": "jinshaxian",
                "level": 3,
                "name": "金沙县",
                "parent": "0857"
              },
              {
                "code": "08575",
                "fullSpell": "zhijinxian",
                "level": 3,
                "name": "织金县",
                "parent": "0857"
              },
              {
                "code": "08576",
                "fullSpell": "nayongxian",
                "level": 3,
                "name": "纳雍县",
                "parent": "0857"
              },
              {
                "code": "08577",
                "fullSpell": "weiningxian",
                "level": 3,
                "name": "威宁县",
                "parent": "0857"
              },
              {
                "code": "08578",
                "fullSpell": "hezhangxian",
                "level": 3,
                "name": "赫章县",
                "parent": "0857"
              }
            ],
            "code": "0857",
            "fullSpell": "bijieshi",
            "level": 2,
            "name": "毕节市",
            "parent": "24"
          }
        ],
        "code": "24",
        "fullSpell": "guizhousheng",
        "level": 1,
        "name": "贵州省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "3284",
                "fullSpell": "changjianglizuzizhixian",
                "level": 3,
                "name": "昌江黎族自治县",
                "parent": "337"
              }
            ],
            "code": "337",
            "fullSpell": "changjianglizuzizhixian",
            "level": 2,
            "name": "昌江黎族自治县",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3282",
                "fullSpell": "lingaoxian",
                "level": 3,
                "name": "临高县",
                "parent": "335"
              }
            ],
            "code": "335",
            "fullSpell": "lingaoxian",
            "level": 2,
            "name": "临高县",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3288",
                "fullSpell": "qiongzhonglizumiaozuzizhixian",
                "level": 3,
                "name": "琼中黎族苗族自治县",
                "parent": "341"
              }
            ],
            "code": "341",
            "fullSpell": "qiongzhonglizumiaozuzizhixian",
            "level": 2,
            "name": "琼中黎族苗族自治县",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3280",
                "fullSpell": "tunchangxian",
                "level": 3,
                "name": "屯昌县",
                "parent": "333"
              }
            ],
            "code": "333",
            "fullSpell": "tunchangxian",
            "level": 2,
            "name": "屯昌县",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3274",
                "fullSpell": "qionghaishi",
                "level": 3,
                "name": "琼海市",
                "parent": "327"
              }
            ],
            "code": "327",
            "fullSpell": "qionghaishi",
            "level": 2,
            "name": "琼海市",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3286",
                "fullSpell": "lingshuilizuzizhixian",
                "level": 3,
                "name": "陵水黎族自治县",
                "parent": "339"
              }
            ],
            "code": "339",
            "fullSpell": "lingshuilizuzizhixian",
            "level": 2,
            "name": "陵水黎族自治县",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3281",
                "fullSpell": "chengmaixian",
                "level": 3,
                "name": "澄迈县",
                "parent": "334"
              }
            ],
            "code": "334",
            "fullSpell": "chengmaixian",
            "level": 2,
            "name": "澄迈县",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "502000024",
                "fullSpell": "xishangqundao",
                "level": 3,
                "name": "西沙群岛",
                "parent": "343"
              },
              {
                "code": "502000026",
                "fullSpell": "zhongshaqundao",
                "level": 3,
                "name": "中沙群岛",
                "parent": "343"
              }
            ],
            "code": "343",
            "fullSpell": "sanshashi",
            "level": 2,
            "name": "三沙市",
            "parent": "21"
          },
          {
            "areas": [

            ],
            "code": "502000025",
            "fullSpell": "nanshaqundao",
            "level": 2,
            "name": "南沙群岛",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3279",
                "fullSpell": "dinganxian",
                "level": 3,
                "name": "定安县",
                "parent": "332"
              }
            ],
            "code": "332",
            "fullSpell": "dinganxian",
            "level": 2,
            "name": "定安县",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3287",
                "fullSpell": "baotinglizumiaozuzizhixian",
                "level": 3,
                "name": "保亭黎族苗族自治县",
                "parent": "340"
              }
            ],
            "code": "340",
            "fullSpell": "baotinglizumiaozuzizhixian",
            "level": 2,
            "name": "保亭黎族苗族自治县",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3269",
                "fullSpell": "xiuyingqu",
                "level": 3,
                "name": "秀英区",
                "parent": "324"
              },
              {
                "code": "3270",
                "fullSpell": "meilanqu",
                "level": 3,
                "name": "美兰区",
                "parent": "324"
              },
              {
                "code": "3271",
                "fullSpell": "longhuaqu",
                "level": 3,
                "name": "龙华区",
                "parent": "324"
              },
              {
                "code": "3268",
                "fullSpell": "qiongshanqu",
                "level": 3,
                "name": "琼山区",
                "parent": "324"
              }
            ],
            "code": "324",
            "fullSpell": "haikoushi",
            "level": 2,
            "name": "海口市",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3273",
                "fullSpell": "wuzhishanshi",
                "level": 3,
                "name": "五指山市",
                "parent": "326"
              }
            ],
            "code": "326",
            "fullSpell": "wuzhishanshi",
            "level": 2,
            "name": "五指山市",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3275",
                "fullSpell": "danzhoushi",
                "level": 3,
                "name": "儋州市",
                "parent": "328"
              }
            ],
            "code": "328",
            "fullSpell": "danzhoushi",
            "level": 2,
            "name": "儋州市",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3276",
                "fullSpell": "wenchangshi",
                "level": 3,
                "name": "文昌市",
                "parent": "329"
              }
            ],
            "code": "329",
            "fullSpell": "wenchangshi",
            "level": 2,
            "name": "文昌市",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3278",
                "fullSpell": "dongfangshi",
                "level": 3,
                "name": "东方市",
                "parent": "331"
              }
            ],
            "code": "331",
            "fullSpell": "dongfangshi",
            "level": 2,
            "name": "东方市",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3277",
                "fullSpell": "wanningshi",
                "level": 3,
                "name": "万宁市",
                "parent": "330"
              }
            ],
            "code": "330",
            "fullSpell": "wanningshi",
            "level": 2,
            "name": "万宁市",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3283",
                "fullSpell": "baishalizuzizhixian",
                "level": 3,
                "name": "白沙黎族自治县",
                "parent": "336"
              }
            ],
            "code": "336",
            "fullSpell": "baishalizuzizhixian",
            "level": 2,
            "name": "白沙黎族自治县",
            "parent": "21"
          },
          {
            "areas": [

            ],
            "code": "342",
            "fullSpell": "xishaqundao",
            "level": 2,
            "name": "西沙群岛",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "3285",
                "fullSpell": "ledonglizuzizhixian",
                "level": 3,
                "name": "乐东黎族自治县",
                "parent": "338"
              }
            ],
            "code": "338",
            "fullSpell": "ledonglizuzizhixian",
            "level": 2,
            "name": "乐东黎族自治县",
            "parent": "21"
          },
          {
            "areas": [

            ],
            "code": "344",
            "fullSpell": "zhongshaqundao",
            "level": 2,
            "name": "中沙群岛",
            "parent": "21"
          },
          {
            "areas": [
              {
                "code": "325001",
                "fullSpell": "yazhouqu",
                "level": 3,
                "name": "崖州区",
                "parent": "325"
              },
              {
                "code": "325002",
                "fullSpell": "tianyaqu",
                "level": 3,
                "name": "天涯区",
                "parent": "325"
              },
              {
                "code": "325003",
                "fullSpell": "jiyangqu",
                "level": 3,
                "name": "吉阳区",
                "parent": "325"
              },
              {
                "code": "325004",
                "fullSpell": "haitangqu",
                "level": 3,
                "name": "海棠区",
                "parent": "325"
              }
            ],
            "code": "325",
            "fullSpell": "sanyashi",
            "level": 2,
            "name": "三亚市",
            "parent": "21"
          }
        ],
        "code": "21",
        "fullSpell": "hainansheng",
        "level": 1,
        "name": "海南省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "1268",
                "fullSpell": "wuyixian",
                "level": 3,
                "name": "武邑县",
                "parent": "81"
              },
              {
                "code": "1271",
                "fullSpell": "raoyangxian",
                "level": 3,
                "name": "饶阳县",
                "parent": "81"
              },
              {
                "code": "1263",
                "fullSpell": "guchengxian",
                "level": 3,
                "name": "故城县",
                "parent": "81"
              },
              {
                "code": "1270",
                "fullSpell": "fuchengxian",
                "level": 3,
                "name": "阜城县",
                "parent": "81"
              },
              {
                "code": "1267",
                "fullSpell": "wuqiangxian",
                "level": 3,
                "name": "武强县",
                "parent": "81"
              },
              {
                "code": "1262",
                "fullSpell": "anpingxian",
                "level": 3,
                "name": "安平县",
                "parent": "81"
              },
              {
                "code": "1265",
                "fullSpell": "zaoqiangxian",
                "level": 3,
                "name": "枣强县",
                "parent": "81"
              },
              {
                "code": "1261",
                "fullSpell": "jizhouqu",
                "level": 3,
                "name": "冀州区",
                "parent": "81"
              },
              {
                "code": "1264",
                "fullSpell": "jingxian",
                "level": 3,
                "name": "景县",
                "parent": "81"
              },
              {
                "code": "1266",
                "fullSpell": "taochengqu",
                "level": 3,
                "name": "桃城区",
                "parent": "81"
              },
              {
                "code": "1269",
                "fullSpell": "shenzhoushi",
                "level": 3,
                "name": "深州市",
                "parent": "81"
              }
            ],
            "code": "81",
            "fullSpell": "hengshuishi",
            "level": 2,
            "name": "衡水市",
            "parent": "3"
          },
          {
            "areas": [
              {
                "code": "1173",
                "fullSpell": "damingxian",
                "level": 3,
                "name": "大名县",
                "parent": "76"
              },
              {
                "code": "1178",
                "fullSpell": "wuanshi",
                "level": 3,
                "name": "武安市",
                "parent": "76"
              },
              {
                "code": "1179",
                "fullSpell": "yongnianqu",
                "level": 3,
                "name": "永年区",
                "parent": "76"
              },
              {
                "code": "1187",
                "fullSpell": "weixian",
                "level": 3,
                "name": "魏县",
                "parent": "76"
              },
              {
                "code": "1175",
                "fullSpell": "guangpingxian",
                "level": 3,
                "name": "广平县",
                "parent": "76"
              },
              {
                "code": "1177",
                "fullSpell": "quzhouxian",
                "level": 3,
                "name": "曲周县",
                "parent": "76"
              },
              {
                "code": "1184",
                "fullSpell": "handanxian",
                "level": 3,
                "name": "邯郸县",
                "parent": "76"
              },
              {
                "code": "1170",
                "fullSpell": "congtaiqu",
                "level": 3,
                "name": "丛台区",
                "parent": "76"
              },
              {
                "code": "1172",
                "fullSpell": "fuxingqu",
                "level": 3,
                "name": "复兴区",
                "parent": "76"
              },
              {
                "code": "1182",
                "fullSpell": "feixiangqu",
                "level": 3,
                "name": "肥乡区",
                "parent": "76"
              },
              {
                "code": "1181",
                "fullSpell": "cixian",
                "level": 3,
                "name": "磁县",
                "parent": "76"
              },
              {
                "code": "1174",
                "fullSpell": "fengfengkuangqu",
                "level": 3,
                "name": "峰峰矿区",
                "parent": "76"
              },
              {
                "code": "1183",
                "fullSpell": "hanshanqu",
                "level": 3,
                "name": "邯山区",
                "parent": "76"
              },
              {
                "code": "1171",
                "fullSpell": "linzhangxian",
                "level": 3,
                "name": "临漳县",
                "parent": "76"
              },
              {
                "code": "1180",
                "fullSpell": "shexian",
                "level": 3,
                "name": "涉县",
                "parent": "76"
              },
              {
                "code": "1188",
                "fullSpell": "jizexian",
                "level": 3,
                "name": "鸡泽县",
                "parent": "76"
              },
              {
                "code": "1176",
                "fullSpell": "chenganxian",
                "level": 3,
                "name": "成安县",
                "parent": "76"
              },
              {
                "code": "1186",
                "fullSpell": "guantaoxian",
                "level": 3,
                "name": "馆陶县",
                "parent": "76"
              },
              {
                "code": "1185",
                "fullSpell": "qiuxian",
                "level": 3,
                "name": "邱县",
                "parent": "76"
              }
            ],
            "code": "76",
            "fullSpell": "handanshi",
            "level": 2,
            "name": "邯郸市",
            "parent": "3"
          },
          {
            "areas": [
              {
                "code": "1297",
                "fullSpell": "huanghuashi",
                "level": 3,
                "name": "黄骅市",
                "parent": "83"
              },
              {
                "code": "1285",
                "fullSpell": "wuqiaoxian",
                "level": 3,
                "name": "吴桥县",
                "parent": "83"
              },
              {
                "code": "1291",
                "fullSpell": "haixingxian",
                "level": 3,
                "name": "海兴县",
                "parent": "83"
              },
              {
                "code": "1289",
                "fullSpell": "hejianshi",
                "level": 3,
                "name": "河间市",
                "parent": "83"
              },
              {
                "code": "1294",
                "fullSpell": "suningxian",
                "level": 3,
                "name": "肃宁县",
                "parent": "83"
              },
              {
                "code": "1284",
                "fullSpell": "nanpixian",
                "level": 3,
                "name": "南皮县",
                "parent": "83"
              },
              {
                "code": "1286",
                "fullSpell": "mengcunhuizuzizhixian",
                "level": 3,
                "name": "孟村回族自治县",
                "parent": "83"
              },
              {
                "code": "1287",
                "fullSpell": "xinhuaqu",
                "level": 3,
                "name": "新华区",
                "parent": "83"
              },
              {
                "code": "1288",
                "fullSpell": "cangxian",
                "level": 3,
                "name": "沧县",
                "parent": "83"
              },
              {
                "code": "1283",
                "fullSpell": "renqiushi",
                "level": 3,
                "name": "任丘市",
                "parent": "83"
              },
              {
                "code": "1293",
                "fullSpell": "yanshanxian",
                "level": 3,
                "name": "盐山县",
                "parent": "83"
              },
              {
                "code": "1290",
                "fullSpell": "botoushi",
                "level": 3,
                "name": "泊头市",
                "parent": "83"
              },
              {
                "code": "1282",
                "fullSpell": "dongguangxian",
                "level": 3,
                "name": "东光县",
                "parent": "83"
              },
              {
                "code": "1295",
                "fullSpell": "yunhequ",
                "level": 3,
                "name": "运河区",
                "parent": "83"
              },
              {
                "code": "1292",
                "fullSpell": "xianxian",
                "level": 3,
                "name": "献县",
                "parent": "83"
              },
              {
                "code": "1296",
                "fullSpell": "qingxian",
                "level": 3,
                "name": "青县",
                "parent": "83"
              }
            ],
            "code": "83",
            "fullSpell": "cangzhoushi",
            "level": 2,
            "name": "沧州市",
            "parent": "3"
          },
          {
            "areas": [
              {
                "code": "1142",
                "fullSpell": "yuhuaqu",
                "level": 3,
                "name": "裕华区",
                "parent": "73"
              },
              {
                "code": "1129",
                "fullSpell": "pingshanxian",
                "level": 3,
                "name": "平山县",
                "parent": "73"
              },
              {
                "code": "1126",
                "fullSpell": "jingxingxian",
                "level": 3,
                "name": "井陉县",
                "parent": "73"
              },
              {
                "code": "1135",
                "fullSpell": "qiaodongqu",
                "level": 3,
                "name": "桥东区",
                "parent": "73"
              },
              {
                "code": "1127",
                "fullSpell": "jingxingkuangqu",
                "level": 3,
                "name": "井陉矿区",
                "parent": "73"
              },
              {
                "code": "1131",
                "fullSpell": "xinhuaqu",
                "level": 3,
                "name": "新华区",
                "parent": "73"
              },
              {
                "code": "1137",
                "fullSpell": "zhengdingxian",
                "level": 3,
                "name": "正定县",
                "parent": "73"
              },
              {
                "code": "1143",
                "fullSpell": "zanhuangxian",
                "level": 3,
                "name": "赞皇县",
                "parent": "73"
              },
              {
                "code": "1136",
                "fullSpell": "qiaoxiqu",
                "level": 3,
                "name": "桥西区",
                "parent": "73"
              },
              {
                "code": "1133",
                "fullSpell": "jinzhoushi",
                "level": 3,
                "name": "晋州市",
                "parent": "73"
              },
              {
                "code": "1139",
                "fullSpell": "lingshouxian",
                "level": 3,
                "name": "灵寿县",
                "parent": "73"
              },
              {
                "code": "1130",
                "fullSpell": "xinleshi",
                "level": 3,
                "name": "新乐市",
                "parent": "73"
              },
              {
                "code": "1146",
                "fullSpell": "changanqu",
                "level": 3,
                "name": "长安区",
                "parent": "73"
              },
              {
                "code": "1128",
                "fullSpell": "yuanshixian",
                "level": 3,
                "name": "元氏县",
                "parent": "73"
              },
              {
                "code": "1141",
                "fullSpell": "xingtangxian",
                "level": 3,
                "name": "行唐县",
                "parent": "73"
              },
              {
                "code": "1147",
                "fullSpell": "gaoyixian",
                "level": 3,
                "name": "高邑县",
                "parent": "73"
              },
              {
                "code": "1140",
                "fullSpell": "gaochengqu",
                "level": 3,
                "name": "藁城区",
                "parent": "73"
              },
              {
                "code": "1132",
                "fullSpell": "wujixian",
                "level": 3,
                "name": "无极县",
                "parent": "73"
              },
              {
                "code": "1148",
                "fullSpell": "luquanqu",
                "level": 3,
                "name": "鹿泉区",
                "parent": "73"
              },
              {
                "code": "1138",
                "fullSpell": "shenzexian",
                "level": 3,
                "name": "深泽县",
                "parent": "73"
              },
              {
                "code": "1145",
                "fullSpell": "xinjishi",
                "level": 3,
                "name": "辛集市",
                "parent": "73"
              },
              {
                "code": "1144",
                "fullSpell": "zhaoxian",
                "level": 3,
                "name": "赵县",
                "parent": "73"
              },
              {
                "code": "1134",
                "fullSpell": "luanchengqu",
                "level": 3,
                "name": "栾城区",
                "parent": "73"
              }
            ],
            "code": "73",
            "fullSpell": "shijiazhuangshi",
            "level": 2,
            "name": "石家庄市",
            "parent": "3"
          },
          {
            "areas": [
              {
                "code": "1155",
                "fullSpell": "luannanxian",
                "level": 3,
                "name": "滦南县",
                "parent": "74"
              },
              {
                "code": "1162",
                "fullSpell": "zunhuashi",
                "level": 3,
                "name": "遵化市",
                "parent": "74"
              },
              {
                "code": "1151",
                "fullSpell": "letingxian",
                "level": 3,
                "name": "乐亭县",
                "parent": "74"
              },
              {
                "code": "1152",
                "fullSpell": "guyequ",
                "level": 3,
                "name": "古冶区",
                "parent": "74"
              },
              {
                "code": "1158",
                "fullSpell": "lubeiqu",
                "level": 3,
                "name": "路北区",
                "parent": "74"
              },
              {
                "code": "1159",
                "fullSpell": "lunanqu",
                "level": 3,
                "name": "路南区",
                "parent": "74"
              },
              {
                "code": "1161",
                "fullSpell": "qianxixian",
                "level": 3,
                "name": "迁西县",
                "parent": "74"
              },
              {
                "code": "1153",
                "fullSpell": "tanghaixian",
                "level": 3,
                "name": "唐海县",
                "parent": "74"
              },
              {
                "code": "1156",
                "fullSpell": "luanxian",
                "level": 3,
                "name": "滦县",
                "parent": "74"
              },
              {
                "code": "1150",
                "fullSpell": "fengrunqu",
                "level": 3,
                "name": "丰润区",
                "parent": "74"
              },
              {
                "code": "1154",
                "fullSpell": "kaipingqu",
                "level": 3,
                "name": "开平区",
                "parent": "74"
              },
              {
                "code": "1157",
                "fullSpell": "yutianxian",
                "level": 3,
                "name": "玉田县",
                "parent": "74"
              },
              {
                "code": "1149",
                "fullSpell": "fengnanqu",
                "level": 3,
                "name": "丰南区",
                "parent": "74"
              },
              {
                "code": "1160",
                "fullSpell": "qiananshi",
                "level": 3,
                "name": "迁安市",
                "parent": "74"
              },
              {
                "code": "74000001",
                "fullSpell": "caofeidianqu",
                "level": 3,
                "name": "曹妃甸区",
                "parent": "74"
              }
            ],
            "code": "74",
            "fullSpell": "tangshanshi",
            "level": 2,
            "name": "唐山市",
            "parent": "3"
          },
          {
            "areas": [
              {
                "code": "1273",
                "fullSpell": "guanxian",
                "level": 3,
                "name": "固安县",
                "parent": "82"
              },
              {
                "code": "1275",
                "fullSpell": "dachengxian",
                "level": 3,
                "name": "大城县",
                "parent": "82"
              },
              {
                "code": "1279",
                "fullSpell": "yongqingxian",
                "level": 3,
                "name": "永清县",
                "parent": "82"
              },
              {
                "code": "1277",
                "fullSpell": "guangyangqu",
                "level": 3,
                "name": "广阳区",
                "parent": "82"
              },
              {
                "code": "1278",
                "fullSpell": "wenanxian",
                "level": 3,
                "name": "文安县",
                "parent": "82"
              },
              {
                "code": "1276",
                "fullSpell": "anciqu",
                "level": 3,
                "name": "安次区",
                "parent": "82"
              },
              {
                "code": "1272",
                "fullSpell": "sanheshi",
                "level": 3,
                "name": "三河市",
                "parent": "82"
              },
              {
                "code": "1274",
                "fullSpell": "dachanghuizuzizhixian",
                "level": 3,
                "name": "大厂回族自治县",
                "parent": "82"
              },
              {
                "code": "1281",
                "fullSpell": "xianghexian",
                "level": 3,
                "name": "香河县",
                "parent": "82"
              },
              {
                "code": "1280",
                "fullSpell": "bazhoushi",
                "level": 3,
                "name": "霸州市",
                "parent": "82"
              }
            ],
            "code": "82",
            "fullSpell": "langfangshi",
            "level": 2,
            "name": "廊坊市",
            "parent": "3"
          },
          {
            "areas": [
              {
                "code": "1219",
                "fullSpell": "yixian",
                "level": 3,
                "name": "易县",
                "parent": "78"
              },
              {
                "code": "1210",
                "fullSpell": "boyexian",
                "level": 3,
                "name": "博野县",
                "parent": "78"
              },
              {
                "code": "1222",
                "fullSpell": "laishuixian",
                "level": 3,
                "name": "涞水县",
                "parent": "78"
              },
              {
                "code": "1224",
                "fullSpell": "zhuozhoushi",
                "level": 3,
                "name": "涿州市",
                "parent": "78"
              },
              {
                "code": "1214",
                "fullSpell": "dingxingxian",
                "level": 3,
                "name": "定兴县",
                "parent": "78"
              },
              {
                "code": "1216",
                "fullSpell": "rongchengxian",
                "level": 3,
                "name": "容城县",
                "parent": "78"
              },
              {
                "code": "1220",
                "fullSpell": "quyangxian",
                "level": 3,
                "name": "曲阳县",
                "parent": "78"
              },
              {
                "code": "1209",
                "fullSpell": "nanshiqu",
                "level": 3,
                "name": "南市区",
                "parent": "78"
              },
              {
                "code": "1208",
                "fullSpell": "beishiqu",
                "level": 3,
                "name": "北市区",
                "parent": "78"
              },
              {
                "code": "1212",
                "fullSpell": "anguoshi",
                "level": 3,
                "name": "安国市",
                "parent": "78"
              },
              {
                "code": "1232",
                "fullSpell": "gaoyangxian",
                "level": 3,
                "name": "高阳县",
                "parent": "78"
              },
              {
                "code": "1215",
                "fullSpell": "dingzhoushi",
                "level": 3,
                "name": "定州市",
                "parent": "78"
              },
              {
                "code": "1218",
                "fullSpell": "xinshiqu",
                "level": 3,
                "name": "新市区",
                "parent": "78"
              },
              {
                "code": "1223",
                "fullSpell": "laiyuanxian",
                "level": 3,
                "name": "涞源县",
                "parent": "78"
              },
              {
                "code": "1211",
                "fullSpell": "tangxian",
                "level": 3,
                "name": "唐县",
                "parent": "78"
              },
              {
                "code": "1221",
                "fullSpell": "wangdouxian",
                "level": 3,
                "name": "望都县",
                "parent": "78"
              },
              {
                "code": "1229",
                "fullSpell": "xiongxian",
                "level": 3,
                "name": "雄县",
                "parent": "78"
              },
              {
                "code": "1227",
                "fullSpell": "lixian",
                "level": 3,
                "name": "蠡县",
                "parent": "78"
              },
              {
                "code": "1230",
                "fullSpell": "shunpingxian",
                "level": 3,
                "name": "顺平县",
                "parent": "78"
              },
              {
                "code": "1217",
                "fullSpell": "xushuiqu",
                "level": 3,
                "name": "徐水区",
                "parent": "78"
              },
              {
                "code": "1228",
                "fullSpell": "fupingxian",
                "level": 3,
                "name": "阜平县",
                "parent": "78"
              },
              {
                "code": "1231",
                "fullSpell": "gaobeidianshi",
                "level": 3,
                "name": "高碑店市",
                "parent": "78"
              },
              {
                "code": "1226",
                "fullSpell": "manchengqu",
                "level": 3,
                "name": "满城区",
                "parent": "78"
              },
              {
                "code": "1213",
                "fullSpell": "anxinxian",
                "level": 3,
                "name": "安新县",
                "parent": "78"
              },
              {
                "code": "1225",
                "fullSpell": "qingyuanqu",
                "level": 3,
                "name": "清苑区",
                "parent": "78"
              },
              {
                "code": "78000001",
                "fullSpell": "jingxiuqu",
                "level": 3,
                "name": "竞秀区",
                "parent": "78"
              },
              {
                "code": "78000002",
                "fullSpell": "lianchiqu",
                "level": 3,
                "name": "莲池区",
                "parent": "78"
              }
            ],
            "code": "78",
            "fullSpell": "baodingshi",
            "level": 2,
            "name": "保定市",
            "parent": "3"
          },
          {
            "areas": [
              {
                "code": "1235",
                "fullSpell": "xuanhuaqu",
                "level": 3,
                "name": "宣化区",
                "parent": "79"
              },
              {
                "code": "1241",
                "fullSpell": "huaianxian",
                "level": 3,
                "name": "怀安县",
                "parent": "79"
              },
              {
                "code": "1238",
                "fullSpell": "chongliqu",
                "level": 3,
                "name": "崇礼区",
                "parent": "79"
              },
              {
                "code": "1240",
                "fullSpell": "zhangbeixian",
                "level": 3,
                "name": "张北县",
                "parent": "79"
              },
              {
                "code": "1248",
                "fullSpell": "chichengxian",
                "level": 3,
                "name": "赤城县",
                "parent": "79"
              },
              {
                "code": "1245",
                "fullSpell": "guyuanxian",
                "level": 3,
                "name": "沽源县",
                "parent": "79"
              },
              {
                "code": "1249",
                "fullSpell": "yangyuanxian",
                "level": 3,
                "name": "阳原县",
                "parent": "79"
              },
              {
                "code": "1242",
                "fullSpell": "huailaixian",
                "level": 3,
                "name": "怀来县",
                "parent": "79"
              },
              {
                "code": "1246",
                "fullSpell": "zhuoluxian",
                "level": 3,
                "name": "涿鹿县",
                "parent": "79"
              },
              {
                "code": "1233",
                "fullSpell": "wanquanxian",
                "level": 3,
                "name": "万全县",
                "parent": "79"
              },
              {
                "code": "1243",
                "fullSpell": "qiaodongqu",
                "level": 3,
                "name": "桥东区",
                "parent": "79"
              },
              {
                "code": "1237",
                "fullSpell": "shangyixian",
                "level": 3,
                "name": "尚义县",
                "parent": "79"
              },
              {
                "code": "1239",
                "fullSpell": "kangbaoxian",
                "level": 3,
                "name": "康保县",
                "parent": "79"
              },
              {
                "code": "1247",
                "fullSpell": "weixian",
                "level": 3,
                "name": "蔚县",
                "parent": "79"
              },
              {
                "code": "1244",
                "fullSpell": "qiaoxiqu",
                "level": 3,
                "name": "桥西区",
                "parent": "79"
              },
              {
                "code": "1234",
                "fullSpell": "xiahuayuanqu",
                "level": 3,
                "name": "下花园区",
                "parent": "79"
              }
            ],
            "code": "79",
            "fullSpell": "zhangjiakoushi",
            "level": 2,
            "name": "张家口市",
            "parent": "3"
          },
          {
            "areas": [
              {
                "code": "1252",
                "fullSpell": "shuangqiaoqu",
                "level": 3,
                "name": "双桥区",
                "parent": "80"
              },
              {
                "code": "1253",
                "fullSpell": "shuangluanqu",
                "level": 3,
                "name": "双滦区",
                "parent": "80"
              },
              {
                "code": "1255",
                "fullSpell": "kuanchengmanzuzizhixian",
                "level": 3,
                "name": "宽城满族自治县",
                "parent": "80"
              },
              {
                "code": "1251",
                "fullSpell": "xinglongxian",
                "level": 3,
                "name": "兴隆县",
                "parent": "80"
              },
              {
                "code": "1260",
                "fullSpell": "yingshouyingzikuangqu",
                "level": 3,
                "name": "鹰手营子矿区",
                "parent": "80"
              },
              {
                "code": "1259",
                "fullSpell": "longhuaxian",
                "level": 3,
                "name": "隆化县",
                "parent": "80"
              },
              {
                "code": "1256",
                "fullSpell": "pingquanshi",
                "level": 3,
                "name": "平泉市",
                "parent": "80"
              },
              {
                "code": "1257",
                "fullSpell": "chengdexian",
                "level": 3,
                "name": "承德县",
                "parent": "80"
              },
              {
                "code": "1254",
                "fullSpell": "weichangmanzumengguzuzizhixian",
                "level": 3,
                "name": "围场满族蒙古族自治县",
                "parent": "80"
              },
              {
                "code": "1250",
                "fullSpell": "fengningmanzuzizhixian",
                "level": 3,
                "name": "丰宁满族自治县",
                "parent": "80"
              },
              {
                "code": "1258",
                "fullSpell": "luanpingxian",
                "level": 3,
                "name": "滦平县",
                "parent": "80"
              }
            ],
            "code": "80",
            "fullSpell": "chengdeshi",
            "level": 2,
            "name": "承德市",
            "parent": "3"
          },
          {
            "areas": [
              {
                "code": "1169",
                "fullSpell": "qinglongmanzuzizhixian",
                "level": 3,
                "name": "青龙满族自治县",
                "parent": "75"
              },
              {
                "code": "1164",
                "fullSpell": "lulongxian",
                "level": 3,
                "name": "卢龙县",
                "parent": "75"
              },
              {
                "code": "1166",
                "fullSpell": "funingqu",
                "level": 3,
                "name": "抚宁区",
                "parent": "75"
              },
              {
                "code": "1163",
                "fullSpell": "beidaihequ",
                "level": 3,
                "name": "北戴河区",
                "parent": "75"
              },
              {
                "code": "1165",
                "fullSpell": "shanhaiguanqu",
                "level": 3,
                "name": "山海关区",
                "parent": "75"
              },
              {
                "code": "1168",
                "fullSpell": "haigangqu",
                "level": 3,
                "name": "海港区",
                "parent": "75"
              },
              {
                "code": "1167",
                "fullSpell": "changlixian",
                "level": 3,
                "name": "昌黎县",
                "parent": "75"
              }
            ],
            "code": "75",
            "fullSpell": "qinhuangdaoshi",
            "level": 2,
            "name": "秦皇岛市",
            "parent": "3"
          },
          {
            "areas": [
              {
                "code": "1190",
                "fullSpell": "linxixian",
                "level": 3,
                "name": "临西县",
                "parent": "77"
              },
              {
                "code": "1201",
                "fullSpell": "baixiangxian",
                "level": 3,
                "name": "柏乡县",
                "parent": "77"
              },
              {
                "code": "1193",
                "fullSpell": "nanhexian",
                "level": 3,
                "name": "南和县",
                "parent": "77"
              },
              {
                "code": "1199",
                "fullSpell": "guangzongxian",
                "level": 3,
                "name": "广宗县",
                "parent": "77"
              },
              {
                "code": "1194",
                "fullSpell": "nangongshi",
                "level": 3,
                "name": "南宫市",
                "parent": "77"
              },
              {
                "code": "1191",
                "fullSpell": "renxian",
                "level": 3,
                "name": "任县",
                "parent": "77"
              },
              {
                "code": "1204",
                "fullSpell": "shaheshi",
                "level": 3,
                "name": "沙河市",
                "parent": "77"
              },
              {
                "code": "1196",
                "fullSpell": "ningjinxian",
                "level": 3,
                "name": "宁晋县",
                "parent": "77"
              },
              {
                "code": "1202",
                "fullSpell": "qiaodongqu",
                "level": 3,
                "name": "桥东区",
                "parent": "77"
              },
              {
                "code": "1189",
                "fullSpell": "linchengxian",
                "level": 3,
                "name": "临城县",
                "parent": "77"
              },
              {
                "code": "1195",
                "fullSpell": "weixian",
                "level": 3,
                "name": "威县",
                "parent": "77"
              },
              {
                "code": "1192",
                "fullSpell": "naqiuxian",
                "level": 3,
                "name": "内丘县",
                "parent": "77"
              },
              {
                "code": "1200",
                "fullSpell": "xinhexian",
                "level": 3,
                "name": "新河县",
                "parent": "77"
              },
              {
                "code": "1203",
                "fullSpell": "qiaoxiqu",
                "level": 3,
                "name": "桥西区",
                "parent": "77"
              },
              {
                "code": "1206",
                "fullSpell": "xingtaixian",
                "level": 3,
                "name": "邢台县",
                "parent": "77"
              },
              {
                "code": "1205",
                "fullSpell": "qinghexian",
                "level": 3,
                "name": "清河县",
                "parent": "77"
              },
              {
                "code": "1197",
                "fullSpell": "juluxian",
                "level": 3,
                "name": "巨鹿县",
                "parent": "77"
              },
              {
                "code": "1198",
                "fullSpell": "pingxiangxian",
                "level": 3,
                "name": "平乡县",
                "parent": "77"
              },
              {
                "code": "1207",
                "fullSpell": "longyaoxian",
                "level": 3,
                "name": "隆尧县",
                "parent": "77"
              }
            ],
            "code": "77",
            "fullSpell": "xingtaishi",
            "level": 2,
            "name": "邢台市",
            "parent": "3"
          }
        ],
        "code": "3",
        "fullSpell": "hebeisheng",
        "level": 1,
        "name": "河北省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "1788",
                "fullSpell": "wudalianchishi",
                "level": 3,
                "name": "五大连池市",
                "parent": "140"
              },
              {
                "code": "1789",
                "fullSpell": "beianshi",
                "level": 3,
                "name": "北安市",
                "parent": "140"
              },
              {
                "code": "1791",
                "fullSpell": "sunwuxian",
                "level": 3,
                "name": "孙吴县",
                "parent": "140"
              },
              {
                "code": "1794",
                "fullSpell": "xunkexian",
                "level": 3,
                "name": "逊克县",
                "parent": "140"
              },
              {
                "code": "1790",
                "fullSpell": "nenjiangxian",
                "level": 3,
                "name": "嫩江县",
                "parent": "140"
              },
              {
                "code": "1792",
                "fullSpell": "aihuiqu",
                "level": 3,
                "name": "爱辉区",
                "parent": "140"
              },
              {
                "code": "1793",
                "fullSpell": "chexunkexian",
                "level": 3,
                "name": "车逊克县",
                "parent": "140"
              }
            ],
            "code": "140",
            "fullSpell": "heiheshi",
            "level": 2,
            "name": "黑河市",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1775",
                "fullSpell": "xinxingqu",
                "level": 3,
                "name": "新兴区",
                "parent": "138"
              },
              {
                "code": "1777",
                "fullSpell": "qiezihequ",
                "level": 3,
                "name": "茄子河区",
                "parent": "138"
              },
              {
                "code": "1774",
                "fullSpell": "bolixian",
                "level": 3,
                "name": "勃利县",
                "parent": "138"
              },
              {
                "code": "1776",
                "fullSpell": "taoshanqu",
                "level": 3,
                "name": "桃山区",
                "parent": "138"
              }
            ],
            "code": "138",
            "fullSpell": "qitaiheshi",
            "level": 2,
            "name": "七台河市",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1707",
                "fullSpell": "gannanxian",
                "level": 3,
                "name": "甘南县",
                "parent": "131"
              },
              {
                "code": "1697",
                "fullSpell": "yianxian",
                "level": 3,
                "name": "依安县",
                "parent": "131"
              },
              {
                "code": "1699",
                "fullSpell": "keshanxian",
                "level": 3,
                "name": "克山县",
                "parent": "131"
              },
              {
                "code": "1702",
                "fullSpell": "jianhuaqu",
                "level": 3,
                "name": "建华区",
                "parent": "131"
              },
              {
                "code": "1706",
                "fullSpell": "tailaixian",
                "level": 3,
                "name": "泰来县",
                "parent": "131"
              },
              {
                "code": "1705",
                "fullSpell": "meilisidawoerzuqu",
                "level": 3,
                "name": "梅里斯达斡尔族区",
                "parent": "131"
              },
              {
                "code": "1710",
                "fullSpell": "tiefengqu",
                "level": 3,
                "name": "铁锋区",
                "parent": "131"
              },
              {
                "code": "1703",
                "fullSpell": "baiquanxian",
                "level": 3,
                "name": "拜泉县",
                "parent": "131"
              },
              {
                "code": "1698",
                "fullSpell": "kedongxian",
                "level": 3,
                "name": "克东县",
                "parent": "131"
              },
              {
                "code": "1700",
                "fullSpell": "fulaerjiqu",
                "level": 3,
                "name": "富拉尔基区",
                "parent": "131"
              },
              {
                "code": "1704",
                "fullSpell": "angangxiqu",
                "level": 3,
                "name": "昂昂溪区",
                "parent": "131"
              },
              {
                "code": "1709",
                "fullSpell": "neheshi",
                "level": 3,
                "name": "讷河市",
                "parent": "131"
              },
              {
                "code": "1711",
                "fullSpell": "longjiangxian",
                "level": 3,
                "name": "龙江县",
                "parent": "131"
              },
              {
                "code": "1708",
                "fullSpell": "nianzishanqu",
                "level": 3,
                "name": "碾子山区",
                "parent": "131"
              },
              {
                "code": "1712",
                "fullSpell": "longshaqu",
                "level": 3,
                "name": "龙沙区",
                "parent": "131"
              },
              {
                "code": "1701",
                "fullSpell": "fuyuxian",
                "level": 3,
                "name": "富裕县",
                "parent": "131"
              }
            ],
            "code": "131",
            "fullSpell": "qiqihaershi",
            "level": 2,
            "name": "齐齐哈尔市",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1764",
                "fullSpell": "dongfengqu",
                "level": 3,
                "name": "东风区",
                "parent": "137"
              },
              {
                "code": "1773",
                "fullSpell": "jiaoqu",
                "level": 3,
                "name": "郊区",
                "parent": "137"
              },
              {
                "code": "1768",
                "fullSpell": "fujinshi",
                "level": 3,
                "name": "富锦市",
                "parent": "137"
              },
              {
                "code": "1772",
                "fullSpell": "tangyuanxian",
                "level": 3,
                "name": "汤原县",
                "parent": "137"
              },
              {
                "code": "1767",
                "fullSpell": "xiangyangqu",
                "level": 3,
                "name": "向阳区",
                "parent": "137"
              },
              {
                "code": "1766",
                "fullSpell": "tongjiangshi",
                "level": 3,
                "name": "同江市",
                "parent": "137"
              },
              {
                "code": "1765",
                "fullSpell": "qianjinqu",
                "level": 3,
                "name": "前进区",
                "parent": "137"
              },
              {
                "code": "1771",
                "fullSpell": "huachuanxian",
                "level": 3,
                "name": "桦川县",
                "parent": "137"
              },
              {
                "code": "1770",
                "fullSpell": "huananxian",
                "level": 3,
                "name": "桦南县",
                "parent": "137"
              },
              {
                "code": "1769",
                "fullSpell": "fuyuanshi",
                "level": 3,
                "name": "抚远市",
                "parent": "137"
              }
            ],
            "code": "137",
            "fullSpell": "jiamusishi",
            "level": 2,
            "name": "佳木斯市",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1720",
                "fullSpell": "jiguanqu",
                "level": 3,
                "name": "鸡冠区",
                "parent": "132"
              },
              {
                "code": "1714",
                "fullSpell": "mishanshi",
                "level": 3,
                "name": "密山市",
                "parent": "132"
              },
              {
                "code": "1716",
                "fullSpell": "lishuqu",
                "level": 3,
                "name": "梨树区",
                "parent": "132"
              },
              {
                "code": "1713",
                "fullSpell": "chengzihequ",
                "level": 3,
                "name": "城子河区",
                "parent": "132"
              },
              {
                "code": "1717",
                "fullSpell": "didaoqu",
                "level": 3,
                "name": "滴道区",
                "parent": "132"
              },
              {
                "code": "1721",
                "fullSpell": "mashanqu",
                "level": 3,
                "name": "麻山区",
                "parent": "132"
              },
              {
                "code": "1718",
                "fullSpell": "hulinshi",
                "level": 3,
                "name": "虎林市",
                "parent": "132"
              },
              {
                "code": "1715",
                "fullSpell": "hengshanqu",
                "level": 3,
                "name": "恒山区",
                "parent": "132"
              },
              {
                "code": "1719",
                "fullSpell": "jidongxian",
                "level": 3,
                "name": "鸡东县",
                "parent": "132"
              }
            ],
            "code": "132",
            "fullSpell": "jixishi",
            "level": 2,
            "name": "鸡西市",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1733",
                "fullSpell": "baoqingxian",
                "level": 3,
                "name": "宝清县",
                "parent": "134"
              },
              {
                "code": "1732",
                "fullSpell": "baoshanqu",
                "level": 3,
                "name": "宝山区",
                "parent": "134"
              },
              {
                "code": "1736",
                "fullSpell": "jixianxian",
                "level": 3,
                "name": "集贤县",
                "parent": "134"
              },
              {
                "code": "1734",
                "fullSpell": "jianshanqu",
                "level": 3,
                "name": "尖山区",
                "parent": "134"
              },
              {
                "code": "1730",
                "fullSpell": "youyixian",
                "level": 3,
                "name": "友谊县",
                "parent": "134"
              },
              {
                "code": "1731",
                "fullSpell": "sifangtaiqu",
                "level": 3,
                "name": "四方台区",
                "parent": "134"
              },
              {
                "code": "1735",
                "fullSpell": "lingdongqu",
                "level": 3,
                "name": "岭东区",
                "parent": "134"
              },
              {
                "code": "1737",
                "fullSpell": "raohexian",
                "level": 3,
                "name": "饶河县",
                "parent": "134"
              }
            ],
            "code": "134",
            "fullSpell": "shuangyashanshi",
            "level": 2,
            "name": "双鸭山市",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1783",
                "fullSpell": "aiminqu",
                "level": 3,
                "name": "爱民区",
                "parent": "139"
              },
              {
                "code": "1785",
                "fullSpell": "suifenheshi",
                "level": 3,
                "name": "绥芬河市",
                "parent": "139"
              },
              {
                "code": "1782",
                "fullSpell": "hailinshi",
                "level": 3,
                "name": "海林市",
                "parent": "139"
              },
              {
                "code": "1780",
                "fullSpell": "ninganshi",
                "level": 3,
                "name": "宁安市",
                "parent": "139"
              },
              {
                "code": "1778",
                "fullSpell": "dongningshi",
                "level": 3,
                "name": "东宁市",
                "parent": "139"
              },
              {
                "code": "1781",
                "fullSpell": "linkouxian",
                "level": 3,
                "name": "林口县",
                "parent": "139"
              },
              {
                "code": "1779",
                "fullSpell": "donganqu",
                "level": 3,
                "name": "东安区",
                "parent": "139"
              },
              {
                "code": "1784",
                "fullSpell": "mulengshi",
                "level": 3,
                "name": "穆棱市",
                "parent": "139"
              },
              {
                "code": "1786",
                "fullSpell": "xianqu",
                "level": 3,
                "name": "西安区",
                "parent": "139"
              },
              {
                "code": "1787",
                "fullSpell": "yangmingqu",
                "level": 3,
                "name": "阳明区",
                "parent": "139"
              }
            ],
            "code": "139",
            "fullSpell": "mudanjiangshi",
            "level": 2,
            "name": "牡丹江市",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1811",
                "fullSpell": "mohexian",
                "level": 3,
                "name": "漠河县",
                "parent": "142"
              },
              {
                "code": "1806",
                "fullSpell": "tahexian",
                "level": 3,
                "name": "塔河县",
                "parent": "142"
              },
              {
                "code": "1807",
                "fullSpell": "diqujiagedaqiqu",
                "level": 3,
                "name": "加格达奇区",
                "parent": "142"
              },
              {
                "code": "1810",
                "fullSpell": "songlingqu",
                "level": 3,
                "name": "松岭区",
                "parent": "142"
              },
              {
                "code": "1805",
                "fullSpell": "humaxian",
                "level": 3,
                "name": "呼玛县",
                "parent": "142"
              },
              {
                "code": "1809",
                "fullSpell": "xinlinqu",
                "level": 3,
                "name": "新林区",
                "parent": "142"
              },
              {
                "code": "1808",
                "fullSpell": "huzhongqu",
                "level": 3,
                "name": "呼中区",
                "parent": "142"
              }
            ],
            "code": "142",
            "fullSpell": "daxinganlingdiqu",
            "level": 2,
            "name": "大兴安岭地区",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1724",
                "fullSpell": "xingshanqu",
                "level": 3,
                "name": "兴山区",
                "parent": "133"
              },
              {
                "code": "1725",
                "fullSpell": "nanshanqu",
                "level": 3,
                "name": "南山区",
                "parent": "133"
              },
              {
                "code": "1722",
                "fullSpell": "dongshanqu",
                "level": 3,
                "name": "东山区",
                "parent": "133"
              },
              {
                "code": "1726",
                "fullSpell": "xiangyangqu",
                "level": 3,
                "name": "向阳区",
                "parent": "133"
              },
              {
                "code": "1728",
                "fullSpell": "suibinxian",
                "level": 3,
                "name": "绥滨县",
                "parent": "133"
              },
              {
                "code": "1723",
                "fullSpell": "xinganqu",
                "level": 3,
                "name": "兴安区",
                "parent": "133"
              },
              {
                "code": "1727",
                "fullSpell": "gongnongqu",
                "level": 3,
                "name": "工农区",
                "parent": "133"
              },
              {
                "code": "1729",
                "fullSpell": "luobeixian",
                "level": 3,
                "name": "萝北县",
                "parent": "133"
              }
            ],
            "code": "133",
            "fullSpell": "hegangshi",
            "level": 2,
            "name": "鹤岗市",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1748",
                "fullSpell": "wuyilingqu",
                "level": 3,
                "name": "乌伊岭区",
                "parent": "136"
              },
              {
                "code": "1762",
                "fullSpell": "jinshantunqu",
                "level": 3,
                "name": "金山屯区",
                "parent": "136"
              },
              {
                "code": "1747",
                "fullSpell": "shangganlingqu",
                "level": 3,
                "name": "上甘岭区",
                "parent": "136"
              },
              {
                "code": "1756",
                "fullSpell": "xinqingqu",
                "level": 3,
                "name": "新青区",
                "parent": "136"
              },
              {
                "code": "1751",
                "fullSpell": "yichunqu",
                "level": 3,
                "name": "伊春区",
                "parent": "136"
              },
              {
                "code": "1757",
                "fullSpell": "tangwanghequ",
                "level": 3,
                "name": "汤旺河区",
                "parent": "136"
              },
              {
                "code": "1753",
                "fullSpell": "youhaoqu",
                "level": 3,
                "name": "友好区",
                "parent": "136"
              },
              {
                "code": "1754",
                "fullSpell": "jiayinxian",
                "level": 3,
                "name": "嘉荫县",
                "parent": "136"
              },
              {
                "code": "1749",
                "fullSpell": "wumahequ",
                "level": 3,
                "name": "乌马河区",
                "parent": "136"
              },
              {
                "code": "1763",
                "fullSpell": "tielishi",
                "level": 3,
                "name": "铁力市",
                "parent": "136"
              },
              {
                "code": "1759",
                "fullSpell": "meixiqu",
                "level": 3,
                "name": "美溪区",
                "parent": "136"
              },
              {
                "code": "1761",
                "fullSpell": "xilinqu",
                "level": 3,
                "name": "西林区",
                "parent": "136"
              },
              {
                "code": "1758",
                "fullSpell": "hongxingqu",
                "level": 3,
                "name": "红星区",
                "parent": "136"
              },
              {
                "code": "1752",
                "fullSpell": "nanchaqu",
                "level": 3,
                "name": "南岔区",
                "parent": "136"
              },
              {
                "code": "1750",
                "fullSpell": "wuyingqu",
                "level": 3,
                "name": "五营区",
                "parent": "136"
              },
              {
                "code": "1755",
                "fullSpell": "dailingqu",
                "level": 3,
                "name": "带岭区",
                "parent": "136"
              },
              {
                "code": "1760",
                "fullSpell": "cuiluanqu",
                "level": 3,
                "name": "翠峦区",
                "parent": "136"
              }
            ],
            "code": "136",
            "fullSpell": "yichunshi",
            "level": 2,
            "name": "伊春市",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1686",
                "fullSpell": "shangzhishi",
                "level": 3,
                "name": "尚志市",
                "parent": "130"
              },
              {
                "code": "1688",
                "fullSpell": "pingfangqu",
                "level": 3,
                "name": "平房区",
                "parent": "130"
              },
              {
                "code": "1683",
                "fullSpell": "hulanqu",
                "level": 3,
                "name": "呼兰区",
                "parent": "130"
              },
              {
                "code": "1687",
                "fullSpell": "bayanxian",
                "level": 3,
                "name": "巴彦县",
                "parent": "130"
              },
              {
                "code": "1696",
                "fullSpell": "xiangfangqu",
                "level": 3,
                "name": "香坊区",
                "parent": "130"
              },
              {
                "code": "1682",
                "fullSpell": "shuangchengqu",
                "level": 3,
                "name": "双城区",
                "parent": "130"
              },
              {
                "code": "1684",
                "fullSpell": "haerbinshidaoliqu",
                "level": 3,
                "name": "道里区",
                "parent": "130"
              },
              {
                "code": "1685",
                "fullSpell": "binxian",
                "level": 3,
                "name": "宾县",
                "parent": "130"
              },
              {
                "code": "1679",
                "fullSpell": "wuchangshi",
                "level": 3,
                "name": "五常市",
                "parent": "130"
              },
              {
                "code": "1693",
                "fullSpell": "tonghexian",
                "level": 3,
                "name": "通河县",
                "parent": "130"
              },
              {
                "code": "1692",
                "fullSpell": "songbeiqu",
                "level": 3,
                "name": "松北区",
                "parent": "130"
              },
              {
                "code": "1695",
                "fullSpell": "achengqu",
                "level": 3,
                "name": "阿城区",
                "parent": "130"
              },
              {
                "code": "1680",
                "fullSpell": "yilanxian",
                "level": 3,
                "name": "依兰县",
                "parent": "130"
              },
              {
                "code": "1689",
                "fullSpell": "yanshouxian",
                "level": 3,
                "name": "延寿县",
                "parent": "130"
              },
              {
                "code": "1691",
                "fullSpell": "mulanxian",
                "level": 3,
                "name": "木兰县",
                "parent": "130"
              },
              {
                "code": "1681",
                "fullSpell": "nangangqu",
                "level": 3,
                "name": "南岗区",
                "parent": "130"
              },
              {
                "code": "1690",
                "fullSpell": "fangzhengxian",
                "level": 3,
                "name": "方正县",
                "parent": "130"
              },
              {
                "code": "1694",
                "fullSpell": "daowaiqu",
                "level": 3,
                "name": "道外区",
                "parent": "130"
              }
            ],
            "code": "130",
            "fullSpell": "haerbinshi",
            "level": 2,
            "name": "哈尔滨市",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1801",
                "fullSpell": "beilinqu",
                "level": 3,
                "name": "北林区",
                "parent": "141"
              },
              {
                "code": "1803",
                "fullSpell": "zhaodongshi",
                "level": 3,
                "name": "肇东市",
                "parent": "141"
              },
              {
                "code": "1795",
                "fullSpell": "lanxixian",
                "level": 3,
                "name": "兰西县",
                "parent": "141"
              },
              {
                "code": "1797",
                "fullSpell": "qinganxian",
                "level": 3,
                "name": "庆安县",
                "parent": "141"
              },
              {
                "code": "1799",
                "fullSpell": "wangkuixian",
                "level": 3,
                "name": "望奎县",
                "parent": "141"
              },
              {
                "code": "1796",
                "fullSpell": "andashi",
                "level": 3,
                "name": "安达市",
                "parent": "141"
              },
              {
                "code": "1798",
                "fullSpell": "mingshuixian",
                "level": 3,
                "name": "明水县",
                "parent": "141"
              },
              {
                "code": "1800",
                "fullSpell": "hailunshi",
                "level": 3,
                "name": "海伦市",
                "parent": "141"
              },
              {
                "code": "1802",
                "fullSpell": "suilengxian",
                "level": 3,
                "name": "绥棱县",
                "parent": "141"
              },
              {
                "code": "1804",
                "fullSpell": "qinggangxian",
                "level": 3,
                "name": "青冈县",
                "parent": "141"
              }
            ],
            "code": "141",
            "fullSpell": "suihuashi",
            "level": 2,
            "name": "绥化市",
            "parent": "8"
          },
          {
            "areas": [
              {
                "code": "1741",
                "fullSpell": "honggangqu",
                "level": 3,
                "name": "红岗区",
                "parent": "135"
              },
              {
                "code": "1739",
                "fullSpell": "duerbotemengguzuzizhixian",
                "level": 3,
                "name": "杜尔伯特蒙古族自治县",
                "parent": "135"
              },
              {
                "code": "1742",
                "fullSpell": "zhaozhouxian",
                "level": 3,
                "name": "肇州县",
                "parent": "135"
              },
              {
                "code": "1743",
                "fullSpell": "zhaoyuanxian",
                "level": 3,
                "name": "肇源县",
                "parent": "135"
              },
              {
                "code": "1744",
                "fullSpell": "ranghuluqu",
                "level": 3,
                "name": "让胡路区",
                "parent": "135"
              },
              {
                "code": "1738",
                "fullSpell": "datongqu",
                "level": 3,
                "name": "大同区",
                "parent": "135"
              },
              {
                "code": "1740",
                "fullSpell": "lindianxian",
                "level": 3,
                "name": "林甸县",
                "parent": "135"
              },
              {
                "code": "1746",
                "fullSpell": "longfengqu",
                "level": 3,
                "name": "龙凤区",
                "parent": "135"
              },
              {
                "code": "1745",
                "fullSpell": "saertuqu",
                "level": 3,
                "name": "萨尔图区",
                "parent": "135"
              }
            ],
            "code": "135",
            "fullSpell": "daqingshi",
            "level": 2,
            "name": "大庆市",
            "parent": "8"
          }
        ],
        "code": "8",
        "fullSpell": "heilongjiangsheng",
        "level": 1,
        "name": "黑龙江省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "2798",
                "fullSpell": "danchengxian",
                "level": 3,
                "name": "郸城县",
                "parent": "255"
              },
              {
                "code": "2796",
                "fullSpell": "huaiyangxian",
                "level": 3,
                "name": "淮阳县",
                "parent": "255"
              },
              {
                "code": "2792",
                "fullSpell": "taikangxian",
                "level": 3,
                "name": "太康县",
                "parent": "255"
              },
              {
                "code": "2794",
                "fullSpell": "fugouxian",
                "level": 3,
                "name": "扶沟县",
                "parent": "255"
              },
              {
                "code": "2800",
                "fullSpell": "luyixian",
                "level": 3,
                "name": "鹿邑县",
                "parent": "255"
              },
              {
                "code": "2799",
                "fullSpell": "xiangchengshi",
                "level": 3,
                "name": "项城市",
                "parent": "255"
              },
              {
                "code": "2791",
                "fullSpell": "shangshuixian",
                "level": 3,
                "name": "商水县",
                "parent": "255"
              },
              {
                "code": "2793",
                "fullSpell": "chuanhuiqu",
                "level": 3,
                "name": "川汇区",
                "parent": "255"
              },
              {
                "code": "2795",
                "fullSpell": "shenqiuxian",
                "level": 3,
                "name": "沈丘县",
                "parent": "255"
              },
              {
                "code": "2797",
                "fullSpell": "xihuaxian",
                "level": 3,
                "name": "西华县",
                "parent": "255"
              }
            ],
            "code": "255",
            "fullSpell": "zhoukoushi",
            "level": 2,
            "name": "周口市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2696",
                "fullSpell": "shilongqu",
                "level": 3,
                "name": "石龙区",
                "parent": "243"
              },
              {
                "code": "2698",
                "fullSpell": "jiaxian",
                "level": 3,
                "name": "郏县",
                "parent": "243"
              },
              {
                "code": "2691",
                "fullSpell": "yexian",
                "level": 3,
                "name": "叶县",
                "parent": "243"
              },
              {
                "code": "2694",
                "fullSpell": "ruzhoushi",
                "level": 3,
                "name": "汝州市",
                "parent": "243"
              },
              {
                "code": "2693",
                "fullSpell": "xinhuaqu",
                "level": 3,
                "name": "新华区",
                "parent": "243"
              },
              {
                "code": "2697",
                "fullSpell": "wugangshi",
                "level": 3,
                "name": "舞钢市",
                "parent": "243"
              },
              {
                "code": "2699",
                "fullSpell": "lushanxian",
                "level": 3,
                "name": "鲁山县",
                "parent": "243"
              },
              {
                "code": "2695",
                "fullSpell": "zhanhequ",
                "level": 3,
                "name": "湛河区",
                "parent": "243"
              },
              {
                "code": "2690",
                "fullSpell": "weidongqu",
                "level": 3,
                "name": "卫东区",
                "parent": "243"
              },
              {
                "code": "2692",
                "fullSpell": "baofengxian",
                "level": 3,
                "name": "宝丰县",
                "parent": "243"
              }
            ],
            "code": "243",
            "fullSpell": "pingdingshanshi",
            "level": 2,
            "name": "平顶山市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2683",
                "fullSpell": "ruyangxian",
                "level": 3,
                "name": "汝阳县",
                "parent": "242"
              },
              {
                "code": "2679",
                "fullSpell": "yiyangxian",
                "level": 3,
                "name": "宜阳县",
                "parent": "242"
              },
              {
                "code": "2676",
                "fullSpell": "yanshishi",
                "level": 3,
                "name": "偃师市",
                "parent": "242"
              },
              {
                "code": "2688",
                "fullSpell": "laochengqu",
                "level": 3,
                "name": "老城区",
                "parent": "242"
              },
              {
                "code": "2686",
                "fullSpell": "jianxiqu",
                "level": 3,
                "name": "涧西区",
                "parent": "242"
              },
              {
                "code": "2681",
                "fullSpell": "xinanxian",
                "level": 3,
                "name": "新安县",
                "parent": "242"
              },
              {
                "code": "2685",
                "fullSpell": "luolongqu",
                "level": 3,
                "name": "洛龙区",
                "parent": "242"
              },
              {
                "code": "2682",
                "fullSpell": "luanchuanxian",
                "level": 3,
                "name": "栾川县",
                "parent": "242"
              },
              {
                "code": "2675",
                "fullSpell": "yichuanxian",
                "level": 3,
                "name": "伊川县",
                "parent": "242"
              },
              {
                "code": "2687",
                "fullSpell": "chanhehuizuqu",
                "level": 3,
                "name": "瀍河回族区",
                "parent": "242"
              },
              {
                "code": "2689",
                "fullSpell": "xigongqu",
                "level": 3,
                "name": "西工区",
                "parent": "242"
              },
              {
                "code": "2678",
                "fullSpell": "mengjinxian",
                "level": 3,
                "name": "孟津县",
                "parent": "242"
              },
              {
                "code": "2680",
                "fullSpell": "songxian",
                "level": 3,
                "name": "嵩县",
                "parent": "242"
              },
              {
                "code": "2684",
                "fullSpell": "luoningxian",
                "level": 3,
                "name": "洛宁县",
                "parent": "242"
              },
              {
                "code": "2677",
                "fullSpell": "jiliqu",
                "level": 3,
                "name": "吉利区",
                "parent": "242"
              }
            ],
            "code": "242",
            "fullSpell": "luoyangshi",
            "level": 2,
            "name": "洛阳市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2811",
                "fullSpell": "jiyuanshi",
                "level": 3,
                "name": "济源市",
                "parent": "257"
              }
            ],
            "code": "257",
            "fullSpell": "jiyuanshi",
            "level": 2,
            "name": "济源市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2739",
                "fullSpell": "qingfengxian",
                "level": 3,
                "name": "清丰县",
                "parent": "248"
              },
              {
                "code": "2736",
                "fullSpell": "hualongqu",
                "level": 3,
                "name": "华龙区",
                "parent": "248"
              },
              {
                "code": "2737",
                "fullSpell": "nanlexian",
                "level": 3,
                "name": "南乐县",
                "parent": "248"
              },
              {
                "code": "2738",
                "fullSpell": "taiqianxian",
                "level": 3,
                "name": "台前县",
                "parent": "248"
              },
              {
                "code": "2740",
                "fullSpell": "puyangxian",
                "level": 3,
                "name": "濮阳县",
                "parent": "248"
              },
              {
                "code": "2741",
                "fullSpell": "fanxian",
                "level": 3,
                "name": "范县",
                "parent": "248"
              }
            ],
            "code": "248",
            "fullSpell": "puyangshi",
            "level": 2,
            "name": "濮阳市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2767",
                "fullSpell": "xichuanxian",
                "level": 3,
                "name": "淅川县",
                "parent": "252"
              },
              {
                "code": "2765",
                "fullSpell": "fangchengxian",
                "level": 3,
                "name": "方城县",
                "parent": "252"
              },
              {
                "code": "2761",
                "fullSpell": "wolongqu",
                "level": 3,
                "name": "卧龙区",
                "parent": "252"
              },
              {
                "code": "2763",
                "fullSpell": "wanchengqu",
                "level": 3,
                "name": "宛城区",
                "parent": "252"
              },
              {
                "code": "2760",
                "fullSpell": "nanzhaoxian",
                "level": 3,
                "name": "南召县",
                "parent": "252"
              },
              {
                "code": "2764",
                "fullSpell": "xinyexian",
                "level": 3,
                "name": "新野县",
                "parent": "252"
              },
              {
                "code": "2771",
                "fullSpell": "zhenpingxian",
                "level": 3,
                "name": "镇平县",
                "parent": "252"
              },
              {
                "code": "2762",
                "fullSpell": "tanghexian",
                "level": 3,
                "name": "唐河县",
                "parent": "252"
              },
              {
                "code": "2769",
                "fullSpell": "xixiaxian",
                "level": 3,
                "name": "西峡县",
                "parent": "252"
              },
              {
                "code": "2766",
                "fullSpell": "tongbaixian",
                "level": 3,
                "name": "桐柏县",
                "parent": "252"
              },
              {
                "code": "2768",
                "fullSpell": "sheqixian",
                "level": 3,
                "name": "社旗县",
                "parent": "252"
              },
              {
                "code": "2759",
                "fullSpell": "naxiangxian",
                "level": 3,
                "name": "内乡县",
                "parent": "252"
              },
              {
                "code": "2770",
                "fullSpell": "dengzhoushi",
                "level": 3,
                "name": "邓州市",
                "parent": "252"
              }
            ],
            "code": "252",
            "fullSpell": "nanyangshi",
            "level": 2,
            "name": "南阳市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2786",
                "fullSpell": "xinxian",
                "level": 3,
                "name": "新县",
                "parent": "254"
              },
              {
                "code": "2784",
                "fullSpell": "pingqiaoqu",
                "level": 3,
                "name": "平桥区",
                "parent": "254"
              },
              {
                "code": "2787",
                "fullSpell": "shihequ",
                "level": 3,
                "name": "浉河区",
                "parent": "254"
              },
              {
                "code": "2789",
                "fullSpell": "huangchuanxian",
                "level": 3,
                "name": "潢川县",
                "parent": "254"
              },
              {
                "code": "2781",
                "fullSpell": "guangshanxian",
                "level": 3,
                "name": "光山县",
                "parent": "254"
              },
              {
                "code": "2782",
                "fullSpell": "shangchengxian",
                "level": 3,
                "name": "商城县",
                "parent": "254"
              },
              {
                "code": "2785",
                "fullSpell": "xixian",
                "level": 3,
                "name": "息县",
                "parent": "254"
              },
              {
                "code": "2790",
                "fullSpell": "luoshanxian",
                "level": 3,
                "name": "罗山县",
                "parent": "254"
              },
              {
                "code": "2783",
                "fullSpell": "gushixian",
                "level": 3,
                "name": "固始县",
                "parent": "254"
              },
              {
                "code": "2788",
                "fullSpell": "huaibinxian",
                "level": 3,
                "name": "淮滨县",
                "parent": "254"
              }
            ],
            "code": "254",
            "fullSpell": "xinyangshi",
            "level": 2,
            "name": "信阳市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2751",
                "fullSpell": "wuyangxian",
                "level": 3,
                "name": "舞阳县",
                "parent": "250"
              },
              {
                "code": "2752",
                "fullSpell": "yanchengqu",
                "level": 3,
                "name": "郾城区",
                "parent": "250"
              },
              {
                "code": "2749",
                "fullSpell": "zhaolingqu",
                "level": 3,
                "name": "召陵区",
                "parent": "250"
              },
              {
                "code": "2748",
                "fullSpell": "linyingxian",
                "level": 3,
                "name": "临颍县",
                "parent": "250"
              },
              {
                "code": "2750",
                "fullSpell": "yuanhuiqu",
                "level": 3,
                "name": "源汇区",
                "parent": "250"
              }
            ],
            "code": "250",
            "fullSpell": "luoheshi",
            "level": 2,
            "name": "漯河市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2673",
                "fullSpell": "gulouqu",
                "level": 3,
                "name": "鼓楼区",
                "parent": "241"
              },
              {
                "code": "2674",
                "fullSpell": "longtingqu",
                "level": 3,
                "name": "龙亭区",
                "parent": "241"
              },
              {
                "code": "2672",
                "fullSpell": "shunhehuizuqu",
                "level": 3,
                "name": "顺河回族区",
                "parent": "241"
              },
              {
                "code": "2665",
                "fullSpell": "lankaoxian",
                "level": 3,
                "name": "兰考县",
                "parent": "241"
              },
              {
                "code": "2668",
                "fullSpell": "qixian",
                "level": 3,
                "name": "杞县",
                "parent": "241"
              },
              {
                "code": "2669",
                "fullSpell": "yuwangtaiqu",
                "level": 3,
                "name": "禹王台区",
                "parent": "241"
              },
              {
                "code": "2671",
                "fullSpell": "jinmingqu",
                "level": 3,
                "name": "金明区",
                "parent": "241"
              },
              {
                "code": "2667",
                "fullSpell": "xiangfuqu",
                "level": 3,
                "name": "祥符区",
                "parent": "241"
              },
              {
                "code": "2666",
                "fullSpell": "weishixian",
                "level": 3,
                "name": "尉氏县",
                "parent": "241"
              },
              {
                "code": "2670",
                "fullSpell": "tongxuxian",
                "level": 3,
                "name": "通许县",
                "parent": "241"
              }
            ],
            "code": "241",
            "fullSpell": "kaifengshi",
            "level": 2,
            "name": "开封市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2705",
                "fullSpell": "yindouqu",
                "level": 3,
                "name": "殷都区",
                "parent": "244"
              },
              {
                "code": "2707",
                "fullSpell": "huaxian",
                "level": 3,
                "name": "滑县",
                "parent": "244"
              },
              {
                "code": "2700",
                "fullSpell": "nahuangxian",
                "level": 3,
                "name": "内黄县",
                "parent": "244"
              },
              {
                "code": "2706",
                "fullSpell": "tangyinxian",
                "level": 3,
                "name": "汤阴县",
                "parent": "244"
              },
              {
                "code": "2708",
                "fullSpell": "longanqu",
                "level": 3,
                "name": "龙安区",
                "parent": "244"
              },
              {
                "code": "2703",
                "fullSpell": "wenfengqu",
                "level": 3,
                "name": "文峰区",
                "parent": "244"
              },
              {
                "code": "2704",
                "fullSpell": "linzhoushi",
                "level": 3,
                "name": "林州市",
                "parent": "244"
              },
              {
                "code": "2701",
                "fullSpell": "beiguanqu",
                "level": 3,
                "name": "北关区",
                "parent": "244"
              },
              {
                "code": "2702",
                "fullSpell": "anyangxian",
                "level": 3,
                "name": "安阳县",
                "parent": "244"
              }
            ],
            "code": "244",
            "fullSpell": "anyangshi",
            "level": 2,
            "name": "安阳市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2803",
                "fullSpell": "xincaixian",
                "level": 3,
                "name": "新蔡县",
                "parent": "256"
              },
              {
                "code": "2806",
                "fullSpell": "miyangxian",
                "level": 3,
                "name": "泌阳县",
                "parent": "256"
              },
              {
                "code": "2807",
                "fullSpell": "queshanxian",
                "level": 3,
                "name": "确山县",
                "parent": "256"
              },
              {
                "code": "2805",
                "fullSpell": "runanxian",
                "level": 3,
                "name": "汝南县",
                "parent": "256"
              },
              {
                "code": "2808",
                "fullSpell": "xipingxian",
                "level": 3,
                "name": "西平县",
                "parent": "256"
              },
              {
                "code": "2810",
                "fullSpell": "yichengqu",
                "level": 3,
                "name": "驿城区",
                "parent": "256"
              },
              {
                "code": "2809",
                "fullSpell": "suipingxian",
                "level": 3,
                "name": "遂平县",
                "parent": "256"
              },
              {
                "code": "2804",
                "fullSpell": "zhengyangxian",
                "level": 3,
                "name": "正阳县",
                "parent": "256"
              },
              {
                "code": "2801",
                "fullSpell": "shangcaixian",
                "level": 3,
                "name": "上蔡县",
                "parent": "256"
              },
              {
                "code": "2802",
                "fullSpell": "pingyuxian",
                "level": 3,
                "name": "平舆县",
                "parent": "256"
              }
            ],
            "code": "256",
            "fullSpell": "zhumadianshi",
            "level": 2,
            "name": "驻马店市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2719",
                "fullSpell": "yanjinxian",
                "level": 3,
                "name": "延津县",
                "parent": "246"
              },
              {
                "code": "2717",
                "fullSpell": "yuanyangxian",
                "level": 3,
                "name": "原阳县",
                "parent": "246"
              },
              {
                "code": "2725",
                "fullSpell": "changyuanxian",
                "level": 3,
                "name": "长垣县",
                "parent": "246"
              },
              {
                "code": "2720",
                "fullSpell": "xinxiangxian",
                "level": 3,
                "name": "新乡县",
                "parent": "246"
              },
              {
                "code": "2724",
                "fullSpell": "huixianshi",
                "level": 3,
                "name": "辉县市",
                "parent": "246"
              },
              {
                "code": "2718",
                "fullSpell": "fengqiuxian",
                "level": 3,
                "name": "封丘县",
                "parent": "246"
              },
              {
                "code": "2721",
                "fullSpell": "muyequ",
                "level": 3,
                "name": "牧野区",
                "parent": "246"
              },
              {
                "code": "2722",
                "fullSpell": "hongqiqu",
                "level": 3,
                "name": "红旗区",
                "parent": "246"
              },
              {
                "code": "2716",
                "fullSpell": "weihuishi",
                "level": 3,
                "name": "卫辉市",
                "parent": "246"
              },
              {
                "code": "2723",
                "fullSpell": "huojiaxian",
                "level": 3,
                "name": "获嘉县",
                "parent": "246"
              },
              {
                "code": "2714",
                "fullSpell": "fengquanqu",
                "level": 3,
                "name": "凤泉区",
                "parent": "246"
              },
              {
                "code": "2715",
                "fullSpell": "weibinqu",
                "level": 3,
                "name": "卫滨区",
                "parent": "246"
              }
            ],
            "code": "246",
            "fullSpell": "xinxiangshi",
            "level": 2,
            "name": "新乡市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2744",
                "fullSpell": "jianganqu",
                "level": 3,
                "name": "建安区",
                "parent": "249"
              },
              {
                "code": "2747",
                "fullSpell": "weidouqu",
                "level": 3,
                "name": "魏都区",
                "parent": "249"
              },
              {
                "code": "2746",
                "fullSpell": "changgeshi",
                "level": 3,
                "name": "长葛市",
                "parent": "249"
              },
              {
                "code": "2742",
                "fullSpell": "yuzhoushi",
                "level": 3,
                "name": "禹州市",
                "parent": "249"
              },
              {
                "code": "2743",
                "fullSpell": "xiangchengxian",
                "level": 3,
                "name": "襄城县",
                "parent": "249"
              },
              {
                "code": "2745",
                "fullSpell": "yanlingxian",
                "level": 3,
                "name": "鄢陵县",
                "parent": "249"
              }
            ],
            "code": "249",
            "fullSpell": "xuchangshi",
            "level": 2,
            "name": "许昌市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2756",
                "fullSpell": "hubinqu",
                "level": 3,
                "name": "湖滨区",
                "parent": "251"
              },
              {
                "code": "2754",
                "fullSpell": "lushixian",
                "level": 3,
                "name": "卢氏县",
                "parent": "251"
              },
              {
                "code": "2753",
                "fullSpell": "yimashi",
                "level": 3,
                "name": "义马市",
                "parent": "251"
              },
              {
                "code": "2758",
                "fullSpell": "shanzhouqu",
                "level": 3,
                "name": "陕州区",
                "parent": "251"
              },
              {
                "code": "2755",
                "fullSpell": "shengchixian",
                "level": 3,
                "name": "渑池县",
                "parent": "251"
              },
              {
                "code": "2757",
                "fullSpell": "lingbaoshi",
                "level": 3,
                "name": "灵宝市",
                "parent": "251"
              }
            ],
            "code": "251",
            "fullSpell": "sanmenxiashi",
            "level": 2,
            "name": "三门峡市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2712",
                "fullSpell": "qibinqu",
                "level": 3,
                "name": "淇滨区",
                "parent": "245"
              },
              {
                "code": "2713",
                "fullSpell": "heshanqu",
                "level": 3,
                "name": "鹤山区",
                "parent": "245"
              },
              {
                "code": "2711",
                "fullSpell": "qixian",
                "level": 3,
                "name": "淇县",
                "parent": "245"
              },
              {
                "code": "2709",
                "fullSpell": "shanchengqu",
                "level": 3,
                "name": "山城区",
                "parent": "245"
              },
              {
                "code": "2710",
                "fullSpell": "junxian",
                "level": 3,
                "name": "浚县",
                "parent": "245"
              }
            ],
            "code": "245",
            "fullSpell": "hebishi",
            "level": 2,
            "name": "鹤壁市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2779",
                "fullSpell": "liangyuanqu",
                "level": 3,
                "name": "梁园区",
                "parent": "253"
              },
              {
                "code": "2773",
                "fullSpell": "ninglingxian",
                "level": 3,
                "name": "宁陵县",
                "parent": "253"
              },
              {
                "code": "2777",
                "fullSpell": "suixian",
                "level": 3,
                "name": "睢县",
                "parent": "253"
              },
              {
                "code": "2774",
                "fullSpell": "zhechengxian",
                "level": 3,
                "name": "柘城县",
                "parent": "253"
              },
              {
                "code": "2778",
                "fullSpell": "suiyangqu",
                "level": 3,
                "name": "睢阳区",
                "parent": "253"
              },
              {
                "code": "2780",
                "fullSpell": "yuchengxian",
                "level": 3,
                "name": "虞城县",
                "parent": "253"
              },
              {
                "code": "2772",
                "fullSpell": "xiayixian",
                "level": 3,
                "name": "夏邑县",
                "parent": "253"
              },
              {
                "code": "2776",
                "fullSpell": "yongchengshi",
                "level": 3,
                "name": "永城市",
                "parent": "253"
              },
              {
                "code": "2775",
                "fullSpell": "minquanxian",
                "level": 3,
                "name": "民权县",
                "parent": "253"
              }
            ],
            "code": "253",
            "fullSpell": "shangqiushi",
            "level": 2,
            "name": "商丘市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2659",
                "fullSpell": "xinmishi",
                "level": 3,
                "name": "新密市",
                "parent": "240"
              },
              {
                "code": "2654",
                "fullSpell": "zhongyuanqu",
                "level": 3,
                "name": "中原区",
                "parent": "240"
              },
              {
                "code": "2664",
                "fullSpell": "jinshuiqu",
                "level": 3,
                "name": "金水区",
                "parent": "240"
              },
              {
                "code": "2657",
                "fullSpell": "gongyishi",
                "level": 3,
                "name": "巩义市",
                "parent": "240"
              },
              {
                "code": "2663",
                "fullSpell": "yingyangshi",
                "level": 3,
                "name": "荥阳市",
                "parent": "240"
              },
              {
                "code": "2660",
                "fullSpell": "xinzhengshi",
                "level": 3,
                "name": "新郑市",
                "parent": "240"
              },
              {
                "code": "502000032",
                "fullSpell": "jingjikaifaqu",
                "level": 3,
                "name": "经济开发区",
                "parent": "240"
              },
              {
                "code": "2656",
                "fullSpell": "erqiqu",
                "level": 3,
                "name": "二七区",
                "parent": "240"
              },
              {
                "code": "502000027",
                "fullSpell": "zhengdongxinqu",
                "level": 3,
                "name": "郑东新区",
                "parent": "240"
              },
              {
                "code": "2661",
                "fullSpell": "dengfengshi",
                "level": 3,
                "name": "登封市",
                "parent": "240"
              },
              {
                "code": "2658",
                "fullSpell": "huijiqu",
                "level": 3,
                "name": "惠济区",
                "parent": "240"
              },
              {
                "code": "2653",
                "fullSpell": "shangjiequ",
                "level": 3,
                "name": "上街区",
                "parent": "240"
              },
              {
                "code": "2662",
                "fullSpell": "guanchenghuizuqu",
                "level": 3,
                "name": "管城回族区",
                "parent": "240"
              },
              {
                "code": "2655",
                "fullSpell": "zhongmouxian",
                "level": 3,
                "name": "中牟县",
                "parent": "240"
              },
              {
                "code": "46781114010",
                "fullSpell": "gaoxinqu",
                "level": 3,
                "name": "高新区",
                "parent": "240"
              }
            ],
            "code": "240",
            "fullSpell": "zhengzhoushi",
            "level": 2,
            "name": "郑州市",
            "parent": "16"
          },
          {
            "areas": [
              {
                "code": "2729",
                "fullSpell": "mengzhoushi",
                "level": 3,
                "name": "孟州市",
                "parent": "247"
              },
              {
                "code": "2731",
                "fullSpell": "wuzhixian",
                "level": 3,
                "name": "武陟县",
                "parent": "247"
              },
              {
                "code": "2730",
                "fullSpell": "shanyangqu",
                "level": 3,
                "name": "山阳区",
                "parent": "247"
              },
              {
                "code": "2735",
                "fullSpell": "macunqu",
                "level": 3,
                "name": "马村区",
                "parent": "247"
              },
              {
                "code": "2732",
                "fullSpell": "qinyangshi",
                "level": 3,
                "name": "沁阳市",
                "parent": "247"
              },
              {
                "code": "2726",
                "fullSpell": "zhongzhanqu",
                "level": 3,
                "name": "中站区",
                "parent": "247"
              },
              {
                "code": "2733",
                "fullSpell": "wenxian",
                "level": 3,
                "name": "温县",
                "parent": "247"
              },
              {
                "code": "2734",
                "fullSpell": "jiefangqu",
                "level": 3,
                "name": "解放区",
                "parent": "247"
              },
              {
                "code": "2727",
                "fullSpell": "xiuwuxian",
                "level": 3,
                "name": "修武县",
                "parent": "247"
              },
              {
                "code": "2728",
                "fullSpell": "boaixian",
                "level": 3,
                "name": "博爱县",
                "parent": "247"
              }
            ],
            "code": "247",
            "fullSpell": "jiaozuoshi",
            "level": 2,
            "name": "焦作市",
            "parent": "16"
          }
        ],
        "code": "16",
        "fullSpell": "henansheng",
        "level": 1,
        "name": "河南省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "2891",
                "fullSpell": "machengshi",
                "level": 3,
                "name": "麻城市",
                "parent": "267"
              },
              {
                "code": "2886",
                "fullSpell": "xishuixian",
                "level": 3,
                "name": "浠水县",
                "parent": "267"
              },
              {
                "code": "2885",
                "fullSpell": "wuxueshi",
                "level": 3,
                "name": "武穴市",
                "parent": "267"
              },
              {
                "code": "2889",
                "fullSpell": "yingshanxian",
                "level": 3,
                "name": "英山县",
                "parent": "267"
              },
              {
                "code": "2888",
                "fullSpell": "luotianxian",
                "level": 3,
                "name": "罗田县",
                "parent": "267"
              },
              {
                "code": "2884",
                "fullSpell": "tuanfengxian",
                "level": 3,
                "name": "团风县",
                "parent": "267"
              },
              {
                "code": "2890",
                "fullSpell": "qichunxian",
                "level": 3,
                "name": "蕲春县",
                "parent": "267"
              },
              {
                "code": "2887",
                "fullSpell": "honganxian",
                "level": 3,
                "name": "红安县",
                "parent": "267"
              },
              {
                "code": "2893",
                "fullSpell": "huangmeixian",
                "level": 3,
                "name": "黄梅县",
                "parent": "267"
              },
              {
                "code": "2892",
                "fullSpell": "huangzhouqu",
                "level": 3,
                "name": "黄州区",
                "parent": "267"
              }
            ],
            "code": "267",
            "fullSpell": "huanggangshi",
            "level": 2,
            "name": "黄冈市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2912",
                "fullSpell": "tianmenshi",
                "level": 3,
                "name": "天门市",
                "parent": "273"
              }
            ],
            "code": "273",
            "fullSpell": "tianmenshi",
            "level": 2,
            "name": "天门市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2871",
                "fullSpell": "xiaonanqu",
                "level": 3,
                "name": "孝南区",
                "parent": "265"
              },
              {
                "code": "2872",
                "fullSpell": "xiaochangxian",
                "level": 3,
                "name": "孝昌县",
                "parent": "265"
              },
              {
                "code": "2874",
                "fullSpell": "yingchengshi",
                "level": 3,
                "name": "应城市",
                "parent": "265"
              },
              {
                "code": "2869",
                "fullSpell": "yunmengxian",
                "level": 3,
                "name": "云梦县",
                "parent": "265"
              },
              {
                "code": "2875",
                "fullSpell": "hanchuanshi",
                "level": 3,
                "name": "汉川市",
                "parent": "265"
              },
              {
                "code": "2870",
                "fullSpell": "dawuxian",
                "level": 3,
                "name": "大悟县",
                "parent": "265"
              },
              {
                "code": "2873",
                "fullSpell": "anlushi",
                "level": 3,
                "name": "安陆市",
                "parent": "265"
              }
            ],
            "code": "265",
            "fullSpell": "xiaoganshi",
            "level": 2,
            "name": "孝感市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2903",
                "fullSpell": "xianfengxian",
                "level": 3,
                "name": "咸丰县",
                "parent": "270"
              },
              {
                "code": "2906",
                "fullSpell": "jianshixian",
                "level": 3,
                "name": "建始县",
                "parent": "270"
              },
              {
                "code": "2907",
                "fullSpell": "enshishi",
                "level": 3,
                "name": "恩施市",
                "parent": "270"
              },
              {
                "code": "2904",
                "fullSpell": "xuanenxian",
                "level": 3,
                "name": "宣恩县",
                "parent": "270"
              },
              {
                "code": "2905",
                "fullSpell": "badongxian",
                "level": 3,
                "name": "巴东县",
                "parent": "270"
              },
              {
                "code": "2909",
                "fullSpell": "hefengxian",
                "level": 3,
                "name": "鹤峰县",
                "parent": "270"
              },
              {
                "code": "2902",
                "fullSpell": "lichuanshi",
                "level": 3,
                "name": "利川市",
                "parent": "270"
              },
              {
                "code": "2908",
                "fullSpell": "laifengxian",
                "level": 3,
                "name": "来凤县",
                "parent": "270"
              }
            ],
            "code": "270",
            "fullSpell": "enshitujiazumiaozuzizhizhou",
            "level": 2,
            "name": "恩施土家族苗族自治州",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2913",
                "fullSpell": "shennongjialinqu",
                "level": 3,
                "name": "神农架林区",
                "parent": "274"
              }
            ],
            "code": "274",
            "fullSpell": "shennongjialinqu",
            "level": 2,
            "name": "神农架林区",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2863",
                "fullSpell": "echengqu",
                "level": 3,
                "name": "鄂城区",
                "parent": "263"
              },
              {
                "code": "2862",
                "fullSpell": "liangzihuqu",
                "level": 3,
                "name": "粱子湖区",
                "parent": "263"
              },
              {
                "code": "2861",
                "fullSpell": "huarongqu",
                "level": 3,
                "name": "华容区",
                "parent": "263"
              }
            ],
            "code": "263",
            "fullSpell": "ezhoushi",
            "level": 2,
            "name": "鄂州市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2860",
                "fullSpell": "guchengxian",
                "level": 3,
                "name": "谷城县",
                "parent": "262"
              },
              {
                "code": "2852",
                "fullSpell": "baokangxian",
                "level": 3,
                "name": "保康县",
                "parent": "262"
              },
              {
                "code": "2854",
                "fullSpell": "yichengshi",
                "level": 3,
                "name": "宜城市",
                "parent": "262"
              },
              {
                "code": "2857",
                "fullSpell": "laohekoushi",
                "level": 3,
                "name": "老河口市",
                "parent": "262"
              },
              {
                "code": "2853",
                "fullSpell": "nanzhangxian",
                "level": 3,
                "name": "南漳县",
                "parent": "262"
              },
              {
                "code": "2855",
                "fullSpell": "zaoyangshi",
                "level": 3,
                "name": "枣阳市",
                "parent": "262"
              },
              {
                "code": "2858",
                "fullSpell": "xiangchengqu",
                "level": 3,
                "name": "襄城区",
                "parent": "262"
              },
              {
                "code": "2859",
                "fullSpell": "xiangzhouqu",
                "level": 3,
                "name": "襄州区",
                "parent": "262"
              },
              {
                "code": "2856",
                "fullSpell": "fanchengqu",
                "level": 3,
                "name": "樊城区",
                "parent": "262"
              },
              {
                "code": "262001",
                "fullSpell": "gaoxingqu",
                "level": 3,
                "name": "国家级高新技术产业开发区",
                "parent": "262"
              },
              {
                "code": "262002",
                "fullSpell": "jinjijishikaifaqu",
                "level": 3,
                "name": "国家级经济技术开发区",
                "parent": "262"
              },
              {
                "code": "262003",
                "fullSpell": "luyouqu",
                "level": 3,
                "name": "鱼梁洲旅游经济开发区",
                "parent": "262"
              }
            ],
            "code": "262",
            "fullSpell": "xiangyangshi",
            "level": 2,
            "name": "襄阳市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2910",
                "fullSpell": "xiantaoshi",
                "level": 3,
                "name": "仙桃市",
                "parent": "271"
              }
            ],
            "code": "271",
            "fullSpell": "xiantaoshi",
            "level": 2,
            "name": "仙桃市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2831",
                "fullSpell": "danjiangkoushi",
                "level": 3,
                "name": "丹江口市",
                "parent": "260"
              },
              {
                "code": "2835",
                "fullSpell": "zhuxixian",
                "level": 3,
                "name": "竹溪县",
                "parent": "260"
              },
              {
                "code": "2838",
                "fullSpell": "yunxixian",
                "level": 3,
                "name": "郧西县",
                "parent": "260"
              },
              {
                "code": "2836",
                "fullSpell": "maojianqu",
                "level": 3,
                "name": "茅箭区",
                "parent": "260"
              },
              {
                "code": "2837",
                "fullSpell": "yunyangqu",
                "level": 3,
                "name": "郧阳区",
                "parent": "260"
              },
              {
                "code": "2833",
                "fullSpell": "fangxian",
                "level": 3,
                "name": "房县",
                "parent": "260"
              },
              {
                "code": "2832",
                "fullSpell": "zhangwanqu",
                "level": 3,
                "name": "张湾区",
                "parent": "260"
              },
              {
                "code": "2834",
                "fullSpell": "zhushanxian",
                "level": 3,
                "name": "竹山县",
                "parent": "260"
              }
            ],
            "code": "260",
            "fullSpell": "shiyanshi",
            "level": 2,
            "name": "十堰市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2894",
                "fullSpell": "xiananqu",
                "level": 3,
                "name": "咸安区",
                "parent": "268"
              },
              {
                "code": "2899",
                "fullSpell": "tongshanxian",
                "level": 3,
                "name": "通山县",
                "parent": "268"
              },
              {
                "code": "2895",
                "fullSpell": "jiayuxian",
                "level": 3,
                "name": "嘉鱼县",
                "parent": "268"
              },
              {
                "code": "2896",
                "fullSpell": "chongyangxian",
                "level": 3,
                "name": "崇阳县",
                "parent": "268"
              },
              {
                "code": "2898",
                "fullSpell": "tongchengxian",
                "level": 3,
                "name": "通城县",
                "parent": "268"
              }
            ],
            "code": "268",
            "fullSpell": "xianningshi",
            "level": 2,
            "name": "咸宁市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2911",
                "fullSpell": "qianjiangshi",
                "level": 3,
                "name": "潜江市",
                "parent": "272"
              }
            ],
            "code": "272",
            "fullSpell": "qianjiangshi",
            "level": 2,
            "name": "潜江市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2830",
                "fullSpell": "huangshigangqu",
                "level": 3,
                "name": "黄石港区",
                "parent": "259"
              },
              {
                "code": "2829",
                "fullSpell": "yangxinxian",
                "level": 3,
                "name": "阳新县",
                "parent": "259"
              },
              {
                "code": "2828",
                "fullSpell": "tieshanqu",
                "level": 3,
                "name": "铁山区",
                "parent": "259"
              },
              {
                "code": "2825",
                "fullSpell": "xialuqu",
                "level": 3,
                "name": "下陆区",
                "parent": "259"
              },
              {
                "code": "2826",
                "fullSpell": "dayeshi",
                "level": 3,
                "name": "大冶市",
                "parent": "259"
              },
              {
                "code": "2827",
                "fullSpell": "xisaishanqu",
                "level": 3,
                "name": "西塞山区",
                "parent": "259"
              }
            ],
            "code": "259",
            "fullSpell": "huangshishi",
            "level": 2,
            "name": "黄石市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2878",
                "fullSpell": "jianglingxian",
                "level": 3,
                "name": "江陵县",
                "parent": "266"
              },
              {
                "code": "2880",
                "fullSpell": "honghushi",
                "level": 3,
                "name": "洪湖市",
                "parent": "266"
              },
              {
                "code": "2879",
                "fullSpell": "shashiqu",
                "level": 3,
                "name": "沙市区",
                "parent": "266"
              },
              {
                "code": "2877",
                "fullSpell": "songzishi",
                "level": 3,
                "name": "松滋市",
                "parent": "266"
              },
              {
                "code": "2882",
                "fullSpell": "shishoushi",
                "level": 3,
                "name": "石首市",
                "parent": "266"
              },
              {
                "code": "2883",
                "fullSpell": "jingzhouqu",
                "level": 3,
                "name": "荆州区",
                "parent": "266"
              },
              {
                "code": "2876",
                "fullSpell": "gonganxian",
                "level": 3,
                "name": "公安县",
                "parent": "266"
              },
              {
                "code": "2881",
                "fullSpell": "jianlixian",
                "level": 3,
                "name": "监利县",
                "parent": "266"
              }
            ],
            "code": "266",
            "fullSpell": "jingzhoushi",
            "level": 2,
            "name": "荆州市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2900",
                "fullSpell": "guangshuishi",
                "level": 3,
                "name": "广水市",
                "parent": "269"
              },
              {
                "code": "2901",
                "fullSpell": "zengdouqu",
                "level": 3,
                "name": "曾都区",
                "parent": "269"
              }
            ],
            "code": "269",
            "fullSpell": "suizhoushi",
            "level": 2,
            "name": "随州市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2851",
                "fullSpell": "changyangtujiazuzizhixian",
                "level": 3,
                "name": "长阳土家族自治县",
                "parent": "261"
              },
              {
                "code": "2843",
                "fullSpell": "yidoushi",
                "level": 3,
                "name": "宜都市",
                "parent": "261"
              },
              {
                "code": "2846",
                "fullSpell": "dianjunqu",
                "level": 3,
                "name": "点军区",
                "parent": "261"
              },
              {
                "code": "2848",
                "fullSpell": "guotingqu",
                "level": 3,
                "name": "猇亭区",
                "parent": "261"
              },
              {
                "code": "2839",
                "fullSpell": "wufengtujiazuzizhixian",
                "level": 3,
                "name": "五峰土家族自治县",
                "parent": "261"
              },
              {
                "code": "2847",
                "fullSpell": "ziguixian",
                "level": 3,
                "name": "秭归县",
                "parent": "261"
              },
              {
                "code": "2845",
                "fullSpell": "zhijiangshi",
                "level": 3,
                "name": "枝江市",
                "parent": "261"
              },
              {
                "code": "2849",
                "fullSpell": "xilingqu",
                "level": 3,
                "name": "西陵区",
                "parent": "261"
              },
              {
                "code": "2850",
                "fullSpell": "yuananxian",
                "level": 3,
                "name": "远安县",
                "parent": "261"
              },
              {
                "code": "2844",
                "fullSpell": "dangyangshi",
                "level": 3,
                "name": "当阳市",
                "parent": "261"
              },
              {
                "code": "2842",
                "fullSpell": "yilingqu",
                "level": 3,
                "name": "夷陵区",
                "parent": "261"
              },
              {
                "code": "2840",
                "fullSpell": "wujiagangqu",
                "level": 3,
                "name": "伍家岗区",
                "parent": "261"
              },
              {
                "code": "2841",
                "fullSpell": "xingshanxian",
                "level": 3,
                "name": "兴山县",
                "parent": "261"
              }
            ],
            "code": "261",
            "fullSpell": "yichangshi",
            "level": 2,
            "name": "宜昌市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "289711111",
                "fullSpell": "chibishi",
                "level": 3,
                "name": "赤壁市",
                "parent": "2897"
              }
            ],
            "code": "2897",
            "fullSpell": "chibishi",
            "level": 2,
            "name": "赤壁市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2822",
                "fullSpell": "caidianqu",
                "level": 3,
                "name": "蔡甸区",
                "parent": "258"
              },
              {
                "code": "2818",
                "fullSpell": "jianganqu",
                "level": 3,
                "name": "江岸区",
                "parent": "258"
              },
              {
                "code": "2817",
                "fullSpell": "jiangxiaqu",
                "level": 3,
                "name": "江夏区",
                "parent": "258"
              },
              {
                "code": "2814",
                "fullSpell": "wuchangqu",
                "level": 3,
                "name": "武昌区",
                "parent": "258"
              },
              {
                "code": "2815",
                "fullSpell": "hannanqu",
                "level": 3,
                "name": "汉南区",
                "parent": "258"
              },
              {
                "code": "2813",
                "fullSpell": "xinzhouqu",
                "level": 3,
                "name": "新洲区",
                "parent": "258"
              },
              {
                "code": "2819",
                "fullSpell": "jianghanqu",
                "level": 3,
                "name": "江汉区",
                "parent": "258"
              },
              {
                "code": "2812",
                "fullSpell": "dongxihuqu",
                "level": 3,
                "name": "东西湖区",
                "parent": "258"
              },
              {
                "code": "2820",
                "fullSpell": "hongshanqu",
                "level": 3,
                "name": "洪山区",
                "parent": "258"
              },
              {
                "code": "2823",
                "fullSpell": "qingshanqu",
                "level": 3,
                "name": "青山区",
                "parent": "258"
              },
              {
                "code": "2816",
                "fullSpell": "hanyangqu",
                "level": 3,
                "name": "汉阳区",
                "parent": "258"
              },
              {
                "code": "2824",
                "fullSpell": "huangbeiqu",
                "level": 3,
                "name": "黄陂区",
                "parent": "258"
              },
              {
                "code": "2821",
                "fullSpell": "qiaokouqu",
                "level": 3,
                "name": "硚口区",
                "parent": "258"
              }
            ],
            "code": "258",
            "fullSpell": "wuhanshi",
            "level": 2,
            "name": "武汉市",
            "parent": "17"
          },
          {
            "areas": [
              {
                "code": "2868",
                "fullSpell": "zhongxiangshi",
                "level": 3,
                "name": "钟祥市",
                "parent": "264"
              },
              {
                "code": "2865",
                "fullSpell": "jingshanxian",
                "level": 3,
                "name": "京山县",
                "parent": "264"
              },
              {
                "code": "2867",
                "fullSpell": "shayangxian",
                "level": 3,
                "name": "沙洋县",
                "parent": "264"
              },
              {
                "code": "2864",
                "fullSpell": "dongbaoqu",
                "level": 3,
                "name": "东宝区",
                "parent": "264"
              },
              {
                "code": "2866",
                "fullSpell": "duodaoqu",
                "level": 3,
                "name": "掇刀区",
                "parent": "264"
              }
            ],
            "code": "264",
            "fullSpell": "jingmenshi",
            "level": 2,
            "name": "荆门市",
            "parent": "17"
          }
        ],
        "code": "17",
        "fullSpell": "hubeisheng",
        "level": 1,
        "name": "湖北省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "2933",
                "fullSpell": "xiangxiangshi",
                "level": 3,
                "name": "湘乡市",
                "parent": "277"
              },
              {
                "code": "2936",
                "fullSpell": "shaoshanshi",
                "level": 3,
                "name": "韶山市",
                "parent": "277"
              },
              {
                "code": "2932",
                "fullSpell": "yuetangqu",
                "level": 3,
                "name": "岳塘区",
                "parent": "277"
              },
              {
                "code": "2934",
                "fullSpell": "xiangtanxian",
                "level": 3,
                "name": "湘潭县",
                "parent": "277"
              },
              {
                "code": "2935",
                "fullSpell": "yuhuqu",
                "level": 3,
                "name": "雨湖区",
                "parent": "277"
              }
            ],
            "code": "277",
            "fullSpell": "xiangtanshi",
            "level": 2,
            "name": "湘潭市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "2945",
                "fullSpell": "hengnanxian",
                "level": 3,
                "name": "衡南县",
                "parent": "278"
              },
              {
                "code": "2946",
                "fullSpell": "hengshanxian",
                "level": 3,
                "name": "衡山县",
                "parent": "278"
              },
              {
                "code": "2943",
                "fullSpell": "zhengxiangqu",
                "level": 3,
                "name": "蒸湘区",
                "parent": "278"
              },
              {
                "code": "2948",
                "fullSpell": "yanfengqu",
                "level": 3,
                "name": "雁峰区",
                "parent": "278"
              },
              {
                "code": "2944",
                "fullSpell": "hengdongxian",
                "level": 3,
                "name": "衡东县",
                "parent": "278"
              },
              {
                "code": "2940",
                "fullSpell": "shiguqu",
                "level": 3,
                "name": "石鼓区",
                "parent": "278"
              },
              {
                "code": "2942",
                "fullSpell": "leiyangshi",
                "level": 3,
                "name": "耒阳市",
                "parent": "278"
              },
              {
                "code": "2938",
                "fullSpell": "changningshi",
                "level": 3,
                "name": "常宁市",
                "parent": "278"
              },
              {
                "code": "2941",
                "fullSpell": "qidongxian",
                "level": 3,
                "name": "祁东县",
                "parent": "278"
              },
              {
                "code": "2937",
                "fullSpell": "nanyuequ",
                "level": 3,
                "name": "南岳区",
                "parent": "278"
              },
              {
                "code": "2939",
                "fullSpell": "zhuhuiqu",
                "level": 3,
                "name": "珠晖区",
                "parent": "278"
              },
              {
                "code": "2947",
                "fullSpell": "hengyangxian",
                "level": 3,
                "name": "衡阳县",
                "parent": "278"
              }
            ],
            "code": "278",
            "fullSpell": "hengyangshi",
            "level": 2,
            "name": "衡阳市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "2980",
                "fullSpell": "sangzhixian",
                "level": 3,
                "name": "桑植县",
                "parent": "282"
              },
              {
                "code": "2979",
                "fullSpell": "cilixian",
                "level": 3,
                "name": "慈利县",
                "parent": "282"
              },
              {
                "code": "2982",
                "fullSpell": "yongdingxian",
                "level": 3,
                "name": "永定县",
                "parent": "282"
              },
              {
                "code": "2981",
                "fullSpell": "wulingyuanqu",
                "level": 3,
                "name": "武陵源区",
                "parent": "282"
              }
            ],
            "code": "282",
            "fullSpell": "zhangjiajieshi",
            "level": 2,
            "name": "张家界市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "2984",
                "fullSpell": "anhuaxian",
                "level": 3,
                "name": "安化县",
                "parent": "283"
              },
              {
                "code": "2983",
                "fullSpell": "nanxian",
                "level": 3,
                "name": "南县",
                "parent": "283"
              },
              {
                "code": "2985",
                "fullSpell": "taojiangxian",
                "level": 3,
                "name": "桃江县",
                "parent": "283"
              },
              {
                "code": "2988",
                "fullSpell": "heshanqu",
                "level": 3,
                "name": "赫山区",
                "parent": "283"
              },
              {
                "code": "2986",
                "fullSpell": "yuanjiangshi",
                "level": 3,
                "name": "沅江市",
                "parent": "283"
              },
              {
                "code": "2987",
                "fullSpell": "ziyangqu",
                "level": 3,
                "name": "资阳区",
                "parent": "283"
              }
            ],
            "code": "283",
            "fullSpell": "yiyangshi",
            "level": 2,
            "name": "益阳市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "2963",
                "fullSpell": "huarongxian",
                "level": 3,
                "name": "华容县",
                "parent": "280"
              },
              {
                "code": "2965",
                "fullSpell": "yueyangxian",
                "level": 3,
                "name": "岳阳县",
                "parent": "280"
              },
              {
                "code": "2964",
                "fullSpell": "junshanqu",
                "level": 3,
                "name": "君山区",
                "parent": "280"
              },
              {
                "code": "2967",
                "fullSpell": "pingjiangxian",
                "level": 3,
                "name": "平江县",
                "parent": "280"
              },
              {
                "code": "2969",
                "fullSpell": "xiangyinxian",
                "level": 3,
                "name": "湘阴县",
                "parent": "280"
              },
              {
                "code": "2962",
                "fullSpell": "yunxiqu",
                "level": 3,
                "name": "云溪区",
                "parent": "280"
              },
              {
                "code": "2968",
                "fullSpell": "miluoshi",
                "level": 3,
                "name": "汨罗市",
                "parent": "280"
              },
              {
                "code": "2966",
                "fullSpell": "yueyanglouqu",
                "level": 3,
                "name": "岳阳楼区",
                "parent": "280"
              },
              {
                "code": "2961",
                "fullSpell": "linxiangshi",
                "level": 3,
                "name": "临湘市",
                "parent": "280"
              }
            ],
            "code": "280",
            "fullSpell": "yueyangshi",
            "level": 2,
            "name": "岳阳市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "3025",
                "fullSpell": "louxingqu",
                "level": 3,
                "name": "娄星区",
                "parent": "287"
              },
              {
                "code": "3026",
                "fullSpell": "xinhuaxian",
                "level": 3,
                "name": "新化县",
                "parent": "287"
              },
              {
                "code": "3023",
                "fullSpell": "lengshuijiangshi",
                "level": 3,
                "name": "冷水江市",
                "parent": "287"
              },
              {
                "code": "3027",
                "fullSpell": "lianyuanshi",
                "level": 3,
                "name": "涟源市",
                "parent": "287"
              },
              {
                "code": "3024",
                "fullSpell": "shuangfengxian",
                "level": 3,
                "name": "双峰县",
                "parent": "287"
              }
            ],
            "code": "287",
            "fullSpell": "loudishi",
            "level": 2,
            "name": "娄底市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "2927",
                "fullSpell": "shifengqu",
                "level": 3,
                "name": "石峰区",
                "parent": "276"
              },
              {
                "code": "2926",
                "fullSpell": "yanlingxian",
                "level": 3,
                "name": "炎陵县",
                "parent": "276"
              },
              {
                "code": "2930",
                "fullSpell": "hetangqu",
                "level": 3,
                "name": "荷塘区",
                "parent": "276"
              },
              {
                "code": "2925",
                "fullSpell": "zhuzhouxian",
                "level": 3,
                "name": "株洲县",
                "parent": "276"
              },
              {
                "code": "2931",
                "fullSpell": "lilingshi",
                "level": 3,
                "name": "醴陵市",
                "parent": "276"
              },
              {
                "code": "2923",
                "fullSpell": "tianyuanqu",
                "level": 3,
                "name": "天元区",
                "parent": "276"
              },
              {
                "code": "2928",
                "fullSpell": "lusongqu",
                "level": 3,
                "name": "芦淞区",
                "parent": "276"
              },
              {
                "code": "2924",
                "fullSpell": "youxian",
                "level": 3,
                "name": "攸县",
                "parent": "276"
              },
              {
                "code": "2929",
                "fullSpell": "chalingxian",
                "level": 3,
                "name": "茶陵县",
                "parent": "276"
              }
            ],
            "code": "276",
            "fullSpell": "zhuzhoushi",
            "level": 2,
            "name": "株洲市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "2975",
                "fullSpell": "jinshishi",
                "level": 3,
                "name": "津市市",
                "parent": "281"
              },
              {
                "code": "2976",
                "fullSpell": "lixian",
                "level": 3,
                "name": "澧县",
                "parent": "281"
              },
              {
                "code": "2971",
                "fullSpell": "anxiangxian",
                "level": 3,
                "name": "安乡县",
                "parent": "281"
              },
              {
                "code": "2972",
                "fullSpell": "taoyuanxian",
                "level": 3,
                "name": "桃源县",
                "parent": "281"
              },
              {
                "code": "2974",
                "fullSpell": "hanshouxian",
                "level": 3,
                "name": "汉寿县",
                "parent": "281"
              },
              {
                "code": "2978",
                "fullSpell": "dingchengqu",
                "level": 3,
                "name": "鼎城区",
                "parent": "281"
              },
              {
                "code": "2973",
                "fullSpell": "wulingqu",
                "level": 3,
                "name": "武陵区",
                "parent": "281"
              },
              {
                "code": "2977",
                "fullSpell": "shimenxian",
                "level": 3,
                "name": "石门县",
                "parent": "281"
              },
              {
                "code": "2970",
                "fullSpell": "linlixian",
                "level": 3,
                "name": "临澧县",
                "parent": "281"
              }
            ],
            "code": "281",
            "fullSpell": "changdeshi",
            "level": 2,
            "name": "常德市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "3032",
                "fullSpell": "yongshunxian",
                "level": 3,
                "name": "永顺县",
                "parent": "288"
              },
              {
                "code": "3035",
                "fullSpell": "longshanxian",
                "level": 3,
                "name": "龙山县",
                "parent": "288"
              },
              {
                "code": "3028",
                "fullSpell": "baojingxian",
                "level": 3,
                "name": "保靖县",
                "parent": "288"
              },
              {
                "code": "3034",
                "fullSpell": "huayuanxian",
                "level": 3,
                "name": "花垣县",
                "parent": "288"
              },
              {
                "code": "3031",
                "fullSpell": "jishoushi",
                "level": 3,
                "name": "吉首市",
                "parent": "288"
              },
              {
                "code": "3033",
                "fullSpell": "luxixian",
                "level": 3,
                "name": "泸溪县",
                "parent": "288"
              },
              {
                "code": "3029",
                "fullSpell": "fenghuangxian",
                "level": 3,
                "name": "凤凰县",
                "parent": "288"
              },
              {
                "code": "3030",
                "fullSpell": "guzhangxian",
                "level": 3,
                "name": "古丈县",
                "parent": "288"
              }
            ],
            "code": "288",
            "fullSpell": "xiangxitujiazumiaozuzizhizhou",
            "level": 2,
            "name": "湘西土家族苗族自治州",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "2996",
                "fullSpell": "yongxingxian",
                "level": 3,
                "name": "永兴县",
                "parent": "284"
              },
              {
                "code": "2998",
                "fullSpell": "suxianqu",
                "level": 3,
                "name": "苏仙区",
                "parent": "284"
              },
              {
                "code": "2992",
                "fullSpell": "anrenxian",
                "level": 3,
                "name": "安仁县",
                "parent": "284"
              },
              {
                "code": "2999",
                "fullSpell": "zixingshi",
                "level": 3,
                "name": "资兴市",
                "parent": "284"
              },
              {
                "code": "2997",
                "fullSpell": "ruchengxian",
                "level": 3,
                "name": "汝城县",
                "parent": "284"
              },
              {
                "code": "2994",
                "fullSpell": "guidongxian",
                "level": 3,
                "name": "桂东县",
                "parent": "284"
              },
              {
                "code": "2995",
                "fullSpell": "guiyangxian",
                "level": 3,
                "name": "桂阳县",
                "parent": "284"
              },
              {
                "code": "2991",
                "fullSpell": "jiahexian",
                "level": 3,
                "name": "嘉禾县",
                "parent": "284"
              },
              {
                "code": "2993",
                "fullSpell": "yizhangxian",
                "level": 3,
                "name": "宜章县",
                "parent": "284"
              },
              {
                "code": "2990",
                "fullSpell": "beihuqu",
                "level": 3,
                "name": "北湖区",
                "parent": "284"
              },
              {
                "code": "2989",
                "fullSpell": "linwuxian",
                "level": 3,
                "name": "临武县",
                "parent": "284"
              }
            ],
            "code": "284",
            "fullSpell": "chenzhoushi",
            "level": 2,
            "name": "郴州市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "2952",
                "fullSpell": "daxiangqu",
                "level": 3,
                "name": "大祥区",
                "parent": "279"
              },
              {
                "code": "2957",
                "fullSpell": "suiningxian",
                "level": 3,
                "name": "绥宁县",
                "parent": "279"
              },
              {
                "code": "2953",
                "fullSpell": "xinningxian",
                "level": 3,
                "name": "新宁县",
                "parent": "279"
              },
              {
                "code": "2950",
                "fullSpell": "shuangqingqu",
                "level": 3,
                "name": "双清区",
                "parent": "279"
              },
              {
                "code": "2959",
                "fullSpell": "shaoyangxian",
                "level": 3,
                "name": "邵阳县",
                "parent": "279"
              },
              {
                "code": "2958",
                "fullSpell": "shaodongxian",
                "level": 3,
                "name": "邵东县",
                "parent": "279"
              },
              {
                "code": "2951",
                "fullSpell": "chengbumiaozuzizhixian",
                "level": 3,
                "name": "城步苗族自治县",
                "parent": "279"
              },
              {
                "code": "2954",
                "fullSpell": "xinshaoxian",
                "level": 3,
                "name": "新邵县",
                "parent": "279"
              },
              {
                "code": "2960",
                "fullSpell": "longhuixian",
                "level": 3,
                "name": "隆回县",
                "parent": "279"
              },
              {
                "code": "2955",
                "fullSpell": "wugangshi",
                "level": 3,
                "name": "武冈市",
                "parent": "279"
              },
              {
                "code": "2956",
                "fullSpell": "dongkouxian",
                "level": 3,
                "name": "洞口县",
                "parent": "279"
              },
              {
                "code": "2949",
                "fullSpell": "beitaqu",
                "level": 3,
                "name": "北塔区",
                "parent": "279"
              }
            ],
            "code": "279",
            "fullSpell": "shaoyangshi",
            "level": 2,
            "name": "邵阳市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "2920",
                "fullSpell": "furongqu",
                "level": 3,
                "name": "芙蓉区",
                "parent": "275"
              },
              {
                "code": "2918",
                "fullSpell": "wangchengxian",
                "level": 3,
                "name": "望城区",
                "parent": "275"
              },
              {
                "code": "2919",
                "fullSpell": "liuyangshi",
                "level": 3,
                "name": "浏阳市",
                "parent": "275"
              },
              {
                "code": "2916",
                "fullSpell": "yueluqu",
                "level": 3,
                "name": "岳麓区",
                "parent": "275"
              },
              {
                "code": "2922",
                "fullSpell": "yuhuaqu",
                "level": 3,
                "name": "雨花区",
                "parent": "275"
              },
              {
                "code": "2917",
                "fullSpell": "kaifuqu",
                "level": 3,
                "name": "开福区",
                "parent": "275"
              },
              {
                "code": "2914",
                "fullSpell": "tianxinqu",
                "level": 3,
                "name": "天心区",
                "parent": "275"
              },
              {
                "code": "2921",
                "fullSpell": "changshaxian",
                "level": 3,
                "name": "长沙县",
                "parent": "275"
              },
              {
                "code": "2915",
                "fullSpell": "ningxiangshi",
                "level": 3,
                "name": "宁乡市",
                "parent": "275"
              }
            ],
            "code": "275",
            "fullSpell": "changshashi",
            "level": 2,
            "name": "长沙市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "3005",
                "fullSpell": "jianghuayaozuzizhixian",
                "level": 3,
                "name": "江华瑶族自治县",
                "parent": "285"
              },
              {
                "code": "3000",
                "fullSpell": "donganxian",
                "level": 3,
                "name": "东安县",
                "parent": "285"
              },
              {
                "code": "3006",
                "fullSpell": "jiangyongxian",
                "level": 3,
                "name": "江永县",
                "parent": "285"
              },
              {
                "code": "3001",
                "fullSpell": "lengshuitanqu",
                "level": 3,
                "name": "冷水滩区",
                "parent": "285"
              },
              {
                "code": "3003",
                "fullSpell": "ningyuanxian",
                "level": 3,
                "name": "宁远县",
                "parent": "285"
              },
              {
                "code": "3010",
                "fullSpell": "linglingqu",
                "level": 3,
                "name": "零陵区",
                "parent": "285"
              },
              {
                "code": "3004",
                "fullSpell": "xintianxian",
                "level": 3,
                "name": "新田县",
                "parent": "285"
              },
              {
                "code": "3007",
                "fullSpell": "qiyangxian",
                "level": 3,
                "name": "祁阳县",
                "parent": "285"
              },
              {
                "code": "3008",
                "fullSpell": "lanshanxian",
                "level": 3,
                "name": "蓝山县",
                "parent": "285"
              },
              {
                "code": "3002",
                "fullSpell": "shuangpaixian",
                "level": 3,
                "name": "双牌县",
                "parent": "285"
              },
              {
                "code": "3009",
                "fullSpell": "daoxian",
                "level": 3,
                "name": "道县",
                "parent": "285"
              }
            ],
            "code": "285",
            "fullSpell": "yongzhoushi",
            "level": 2,
            "name": "永州市",
            "parent": "18"
          },
          {
            "areas": [
              {
                "code": "3011",
                "fullSpell": "zhongfangxian",
                "level": 3,
                "name": "中方县",
                "parent": "286"
              },
              {
                "code": "3019",
                "fullSpell": "tongdaodongzuzizhixian",
                "level": 3,
                "name": "通道侗族自治县",
                "parent": "286"
              },
              {
                "code": "3014",
                "fullSpell": "yuanlingxian",
                "level": 3,
                "name": "沅陵县",
                "parent": "286"
              },
              {
                "code": "3022",
                "fullSpell": "mayangmiaozuzizhixian",
                "level": 3,
                "name": "麻阳苗族自治县",
                "parent": "286"
              },
              {
                "code": "3018",
                "fullSpell": "chenxixian",
                "level": 3,
                "name": "辰溪县",
                "parent": "286"
              },
              {
                "code": "3020",
                "fullSpell": "jingzhoumiaozudongzuzizhixian",
                "level": 3,
                "name": "靖州苗族侗族自治县",
                "parent": "286"
              },
              {
                "code": "3021",
                "fullSpell": "hechengqu",
                "level": 3,
                "name": "鹤城区",
                "parent": "286"
              },
              {
                "code": "3016",
                "fullSpell": "xupuxian",
                "level": 3,
                "name": "溆浦县",
                "parent": "286"
              },
              {
                "code": "3017",
                "fullSpell": "zhijiangdongzuzizhixian",
                "level": 3,
                "name": "芷江侗族自治县",
                "parent": "286"
              },
              {
                "code": "3013",
                "fullSpell": "xinhuangdongzuzizhixian",
                "level": 3,
                "name": "新晃侗族自治县",
                "parent": "286"
              },
              {
                "code": "3015",
                "fullSpell": "hongjiangshi",
                "level": 3,
                "name": "洪江市",
                "parent": "286"
              },
              {
                "code": "3012",
                "fullSpell": "huitongxian",
                "level": 3,
                "name": "会同县",
                "parent": "286"
              }
            ],
            "code": "286",
            "fullSpell": "huaihuashi",
            "level": 2,
            "name": "怀化市",
            "parent": "18"
          }
        ],
        "code": "18",
        "fullSpell": "hunansheng",
        "level": 1,
        "name": "湖南省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "186900001",
                "fullSpell": "taicangshi",
                "level": 3,
                "name": "太仓市",
                "parent": "491000001"
              },
              {
                "code": "186300001",
                "fullSpell": "wuzhongqu",
                "level": 3,
                "name": "吴中区",
                "parent": "491000001"
              },
              {
                "code": "186500001",
                "fullSpell": "wujiangqu",
                "level": 3,
                "name": "吴江区",
                "parent": "491000001"
              },
              {
                "code": "186700001",
                "fullSpell": "zhangjiagangshi",
                "level": 3,
                "name": "张家港市",
                "parent": "491000001"
              },
              {
                "code": "186400001",
                "fullSpell": "xiangchengqu2",
                "level": 3,
                "name": "相城区",
                "parent": "491000001"
              },
              {
                "code": "186200001",
                "fullSpell": "huqiuqu",
                "level": 3,
                "name": "虎丘区",
                "parent": "491000001"
              },
              {
                "code": "502000005",
                "fullSpell": "lianglangqu",
                "level": 3,
                "name": "沧浪区",
                "parent": "491000001"
              },
              {
                "code": "186600001",
                "fullSpell": "changshushi",
                "level": 3,
                "name": "常熟市",
                "parent": "491000001"
              },
              {
                "code": "186100001",
                "fullSpell": "gusuqu",
                "level": 3,
                "name": "姑苏区",
                "parent": "491000001"
              },
              {
                "code": "186800001",
                "fullSpell": "kunshanshi",
                "level": 3,
                "name": "昆山市",
                "parent": "491000001"
              },
              {
                "code": "502000006",
                "fullSpell": "pingjiangqu",
                "level": 3,
                "name": "平江区",
                "parent": "491000001"
              },
              {
                "code": "46781114012",
                "fullSpell": "gongyeyaunqu",
                "level": 3,
                "name": "工业园区",
                "parent": "491000001"
              }
            ],
            "code": "491000001",
            "fullSpell": "suzhoushi-js",
            "level": 2,
            "name": "苏州市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "188100001",
                "fullSpell": "jiawangqu",
                "level": 3,
                "name": "贾汪区",
                "parent": "493000001"
              },
              {
                "code": "188200001",
                "fullSpell": "quanshanqu",
                "level": 3,
                "name": "泉山区",
                "parent": "493000001"
              },
              {
                "code": "187800001",
                "fullSpell": "gulouqu3",
                "level": 3,
                "name": "鼓楼区",
                "parent": "493000001"
              },
              {
                "code": "188400001",
                "fullSpell": "fengxian2",
                "level": 3,
                "name": "丰县",
                "parent": "493000001"
              },
              {
                "code": "187900001",
                "fullSpell": "yunlongqu",
                "level": 3,
                "name": "云龙区",
                "parent": "493000001"
              },
              {
                "code": "188300001",
                "fullSpell": "peixian",
                "level": 3,
                "name": "沛县",
                "parent": "493000001"
              },
              {
                "code": "188500001",
                "fullSpell": "suiningxian2",
                "level": 3,
                "name": "睢宁县",
                "parent": "493000001"
              },
              {
                "code": "188700001",
                "fullSpell": "xinyishi",
                "level": 3,
                "name": "新沂市",
                "parent": "493000001"
              },
              {
                "code": "188600001",
                "fullSpell": "pizhoushi",
                "level": 3,
                "name": "邳州市",
                "parent": "493000001"
              },
              {
                "code": "188000001",
                "fullSpell": "tongshanqu",
                "level": 3,
                "name": "铜山区",
                "parent": "493000001"
              }
            ],
            "code": "493000001",
            "fullSpell": "xuzhoushi",
            "level": 2,
            "name": "徐州市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "194700001",
                "fullSpell": "shuyangxian",
                "level": 3,
                "name": "沭阳县",
                "parent": "502000001"
              },
              {
                "code": "194600001",
                "fullSpell": "suyuqu",
                "level": 3,
                "name": "宿豫区",
                "parent": "502000001"
              },
              {
                "code": "194500001",
                "fullSpell": "suchengqu",
                "level": 3,
                "name": "宿城区",
                "parent": "502000001"
              },
              {
                "code": "194800001",
                "fullSpell": "siyangxian",
                "level": 3,
                "name": "泗阳县",
                "parent": "502000001"
              },
              {
                "code": "194900001",
                "fullSpell": "sihongxian",
                "level": 3,
                "name": "泗洪县",
                "parent": "502000001"
              }
            ],
            "code": "502000001",
            "fullSpell": "suqianshi",
            "level": 2,
            "name": "宿迁市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "192400001",
                "fullSpell": "jianhuxian",
                "level": 3,
                "name": "建湖县",
                "parent": "498000001"
              },
              {
                "code": "192500001",
                "fullSpell": "dongtaishi",
                "level": 3,
                "name": "东台市",
                "parent": "498000001"
              },
              {
                "code": "192600001",
                "fullSpell": "dafengqu",
                "level": 3,
                "name": "大丰区",
                "parent": "498000001"
              },
              {
                "code": "191900001",
                "fullSpell": "yanduqu",
                "level": 3,
                "name": "盐都区",
                "parent": "498000001"
              },
              {
                "code": "192000001",
                "fullSpell": "xiangshuixian",
                "level": 3,
                "name": "响水县",
                "parent": "498000001"
              },
              {
                "code": "191800001",
                "fullSpell": "tinghuqu",
                "level": 3,
                "name": "亭湖区",
                "parent": "498000001"
              },
              {
                "code": "192200001",
                "fullSpell": "funingxian2",
                "level": 3,
                "name": "阜宁县",
                "parent": "498000001"
              },
              {
                "code": "192300001",
                "fullSpell": "sheyangxian",
                "level": 3,
                "name": "射阳县",
                "parent": "498000001"
              },
              {
                "code": "192100001",
                "fullSpell": "binhaixian",
                "level": 3,
                "name": "滨海县",
                "parent": "498000001"
              }
            ],
            "code": "498000001",
            "fullSpell": "yanchengshi",
            "level": 2,
            "name": "盐城市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "192700001",
                "fullSpell": "guanglingqu",
                "level": 3,
                "name": "广陵区",
                "parent": "499000001"
              },
              {
                "code": "192900001",
                "fullSpell": "jiangduqu",
                "level": 3,
                "name": "江都区",
                "parent": "499000001"
              },
              {
                "code": "193000001",
                "fullSpell": "baoyingxian",
                "level": 3,
                "name": "宝应县",
                "parent": "499000001"
              },
              {
                "code": "193200001",
                "fullSpell": "gaoyoushi",
                "level": 3,
                "name": "高邮市",
                "parent": "499000001"
              },
              {
                "code": "192800001",
                "fullSpell": "ganjiangqu",
                "level": 3,
                "name": "邗江区",
                "parent": "499000001"
              },
              {
                "code": "193100001",
                "fullSpell": "yizhengshi",
                "level": 3,
                "name": "仪征市",
                "parent": "499000001"
              }
            ],
            "code": "499000001",
            "fullSpell": "yangzhoushi",
            "level": 2,
            "name": "扬州市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "18590001",
                "fullSpell": "lishuiqu",
                "level": 3,
                "name": "溧水区",
                "parent": "490000001"
              },
              {
                "code": "18580001",
                "fullSpell": "liuhequ",
                "level": 3,
                "name": "六合区",
                "parent": "490000001"
              },
              {
                "code": "18500001",
                "fullSpell": "qinhuaiqu",
                "level": 3,
                "name": "秦淮区",
                "parent": "490000001"
              },
              {
                "code": "18490001",
                "fullSpell": "xuanwuqu",
                "level": 3,
                "name": "玄武区",
                "parent": "490000001"
              },
              {
                "code": "502000003",
                "fullSpell": "baixiaqu",
                "level": 3,
                "name": "白下区",
                "parent": "490000001"
              },
              {
                "code": "18540001",
                "fullSpell": "qixiaqu",
                "level": 3,
                "name": "栖霞区",
                "parent": "490000001"
              },
              {
                "code": "18510001",
                "fullSpell": "jianyequ",
                "level": 3,
                "name": "建邺区",
                "parent": "490000001"
              },
              {
                "code": "18520001",
                "fullSpell": "gulouqu2",
                "level": 3,
                "name": "鼓楼区",
                "parent": "490000001"
              },
              {
                "code": "18600001",
                "fullSpell": "gaochunqu",
                "level": 3,
                "name": "高淳区",
                "parent": "490000001"
              },
              {
                "code": "18530001",
                "fullSpell": "pukouqu",
                "level": 3,
                "name": "浦口区",
                "parent": "490000001"
              },
              {
                "code": "18560001",
                "fullSpell": "jiangningqu",
                "level": 3,
                "name": "江宁区",
                "parent": "490000001"
              },
              {
                "code": "502000004",
                "fullSpell": "xiaguanqu",
                "level": 3,
                "name": "下关区",
                "parent": "490000001"
              },
              {
                "code": "18550001",
                "fullSpell": "yuhuataiqu",
                "level": 3,
                "name": "雨花台区",
                "parent": "490000001"
              }
            ],
            "code": "490000001",
            "fullSpell": "nanjingshi",
            "level": 2,
            "name": "南京市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "191400001",
                "fullSpell": "lianshuixian",
                "level": 3,
                "name": "涟水县",
                "parent": "497000001"
              },
              {
                "code": "191200001",
                "fullSpell": "qingjiangpuqu",
                "level": 3,
                "name": "青江浦区",
                "parent": "497000001"
              },
              {
                "code": "190900001",
                "fullSpell": "qinghequ",
                "level": 3,
                "name": "清河区",
                "parent": "497000001"
              },
              {
                "code": "191000001",
                "fullSpell": "huaianqu",
                "level": 3,
                "name": "淮安区",
                "parent": "497000001"
              },
              {
                "code": "191700001",
                "fullSpell": "yutaixian2",
                "level": 3,
                "name": "盱眙县",
                "parent": "497000001"
              },
              {
                "code": "191100001",
                "fullSpell": "huaiyinqu2",
                "level": 3,
                "name": "淮阴区",
                "parent": "497000001"
              },
              {
                "code": "191500001",
                "fullSpell": "hongzequ",
                "level": 3,
                "name": "洪泽区",
                "parent": "497000001"
              },
              {
                "code": "191600001",
                "fullSpell": "jinhuxian",
                "level": 3,
                "name": "金湖县",
                "parent": "497000001"
              },
              {
                "code": "191300001",
                "fullSpell": "qingpuxian",
                "level": 3,
                "name": "青浦县",
                "parent": "497000001"
              }
            ],
            "code": "497000001",
            "fullSpell": "huaianshi",
            "level": 2,
            "name": "淮安市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "193900001",
                "fullSpell": "hailingqu",
                "level": 3,
                "name": "海陵区",
                "parent": "501000001"
              },
              {
                "code": "194000001",
                "fullSpell": "gaogangqu",
                "level": 3,
                "name": "高港区",
                "parent": "501000001"
              },
              {
                "code": "194100001",
                "fullSpell": "jiangyanqu",
                "level": 3,
                "name": "姜堰区",
                "parent": "501000001"
              },
              {
                "code": "194200001",
                "fullSpell": "xinghuashi",
                "level": 3,
                "name": "兴化市",
                "parent": "501000001"
              },
              {
                "code": "194300001",
                "fullSpell": "jingjiangshi",
                "level": 3,
                "name": "靖江市",
                "parent": "501000001"
              },
              {
                "code": "194400001",
                "fullSpell": "taixingshi",
                "level": 3,
                "name": "泰兴市",
                "parent": "501000001"
              }
            ],
            "code": "501000001",
            "fullSpell": "taizhoushi-js",
            "level": 2,
            "name": "泰州市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "187000001",
                "fullSpell": "chonganqu",
                "level": 3,
                "name": "崇安区",
                "parent": "492000001"
              },
              {
                "code": "187300001",
                "fullSpell": "xishanqu2",
                "level": 3,
                "name": "锡山区",
                "parent": "492000001"
              },
              {
                "code": "187500001",
                "fullSpell": "binhuqu",
                "level": 3,
                "name": "滨湖区",
                "parent": "492000001"
              },
              {
                "code": "187600001",
                "fullSpell": "jiangyinshi",
                "level": 3,
                "name": "江阴市",
                "parent": "492000001"
              },
              {
                "code": "187700001",
                "fullSpell": "yixingshi",
                "level": 3,
                "name": "宜兴市",
                "parent": "492000001"
              },
              {
                "code": "187100001",
                "fullSpell": "nanchangqu",
                "level": 3,
                "name": "南长区",
                "parent": "492000001"
              },
              {
                "code": "187200001",
                "fullSpell": "beitangqu",
                "level": 3,
                "name": "北塘区",
                "parent": "492000001"
              },
              {
                "code": "187400001",
                "fullSpell": "huishanqu",
                "level": 3,
                "name": "惠山区",
                "parent": "492000001"
              },
              {
                "code": "320213",
                "fullSpell": "liangxiqu",
                "level": 3,
                "name": "梁溪区",
                "parent": "492000001"
              },
              {
                "code": "320214",
                "fullSpell": "xinwuqu",
                "level": 3,
                "name": "新吴区",
                "parent": "492000001"
              }
            ],
            "code": "492000001",
            "fullSpell": "wuxishi",
            "level": 2,
            "name": "无锡市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "189200001",
                "fullSpell": "wujinqu",
                "level": 3,
                "name": "武进区",
                "parent": "494000001"
              },
              {
                "code": "188900001",
                "fullSpell": "zhonglouqu",
                "level": 3,
                "name": "钟楼区",
                "parent": "494000001"
              },
              {
                "code": "189400001",
                "fullSpell": "jintanqu",
                "level": 3,
                "name": "金坛区",
                "parent": "494000001"
              },
              {
                "code": "189300001",
                "fullSpell": "liyangshi",
                "level": 3,
                "name": "溧阳市",
                "parent": "494000001"
              },
              {
                "code": "188800001",
                "fullSpell": "tianningqu",
                "level": 3,
                "name": "天宁区",
                "parent": "494000001"
              },
              {
                "code": "189000001",
                "fullSpell": "qishuyanqu",
                "level": 3,
                "name": "戚墅堰区",
                "parent": "494000001"
              },
              {
                "code": "189100001",
                "fullSpell": "xinbeiqu",
                "level": 3,
                "name": "新北区",
                "parent": "494000001"
              }
            ],
            "code": "494000001",
            "fullSpell": "changzhoushi",
            "level": 2,
            "name": "常州市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "190000001",
                "fullSpell": "qidongshi",
                "level": 3,
                "name": "启东市",
                "parent": "495000001"
              },
              {
                "code": "189600001",
                "fullSpell": "gangzhaqu",
                "level": 3,
                "name": "港闸区",
                "parent": "495000001"
              },
              {
                "code": "190100001",
                "fullSpell": "rumoushi",
                "level": 3,
                "name": "如皋市",
                "parent": "495000001"
              },
              {
                "code": "189800001",
                "fullSpell": "haianxian",
                "level": 3,
                "name": "海安县",
                "parent": "495000001"
              },
              {
                "code": "189500001",
                "fullSpell": "chongchuanqu",
                "level": 3,
                "name": "崇川区",
                "parent": "495000001"
              },
              {
                "code": "189900001",
                "fullSpell": "rudongxian",
                "level": 3,
                "name": "如东县",
                "parent": "495000001"
              },
              {
                "code": "190200001",
                "fullSpell": "haimenshi",
                "level": 3,
                "name": "海门市",
                "parent": "495000001"
              },
              {
                "code": "189700001",
                "fullSpell": "tongzhouqu",
                "level": 3,
                "name": "通州区",
                "parent": "495000001"
              }
            ],
            "code": "495000001",
            "fullSpell": "nantongshi",
            "level": 2,
            "name": "南通市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "193500001",
                "fullSpell": "dantuqu",
                "level": 3,
                "name": "丹徒区",
                "parent": "500000001"
              },
              {
                "code": "193600001",
                "fullSpell": "danyangshi",
                "level": 3,
                "name": "丹阳市",
                "parent": "500000001"
              },
              {
                "code": "193300001",
                "fullSpell": "jingkouqu",
                "level": 3,
                "name": "京口区",
                "parent": "500000001"
              },
              {
                "code": "193400001",
                "fullSpell": "runzhouqu",
                "level": 3,
                "name": "润州区",
                "parent": "500000001"
              },
              {
                "code": "193800001",
                "fullSpell": "jurongshi",
                "level": 3,
                "name": "句容市",
                "parent": "500000001"
              },
              {
                "code": "193700001",
                "fullSpell": "yangzhongshi",
                "level": 3,
                "name": "扬中市",
                "parent": "500000001"
              }
            ],
            "code": "500000001",
            "fullSpell": "zhenjaingshi",
            "level": 2,
            "name": "镇江市",
            "parent": "10"
          },
          {
            "areas": [
              {
                "code": "190300001",
                "fullSpell": "lianyunqu",
                "level": 3,
                "name": "连云区",
                "parent": "496000001"
              },
              {
                "code": "190400001",
                "fullSpell": "haizhouqu",
                "level": 3,
                "name": "海州区",
                "parent": "496000001"
              },
              {
                "code": "190700001",
                "fullSpell": "guanyunxian",
                "level": 3,
                "name": "灌云县",
                "parent": "496000001"
              },
              {
                "code": "190600001",
                "fullSpell": "donghaixian",
                "level": 3,
                "name": "东海县",
                "parent": "496000001"
              },
              {
                "code": "190500001",
                "fullSpell": "ganyuqu",
                "level": 3,
                "name": "赣榆区",
                "parent": "496000001"
              },
              {
                "code": "190800001",
                "fullSpell": "guannanxian",
                "level": 3,
                "name": "灌南县",
                "parent": "496000001"
              },
              {
                "code": "502000007",
                "fullSpell": "xinpuqu",
                "level": 3,
                "name": "新浦区",
                "parent": "496000001"
              }
            ],
            "code": "496000001",
            "fullSpell": "lianyungangshi",
            "level": 2,
            "name": "连云港市",
            "parent": "10"
          }
        ],
        "code": "10",
        "fullSpell": "jiangsusheng",
        "level": 1,
        "name": "江苏省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "2507",
                "fullSpell": "yiyangxian",
                "level": 3,
                "name": "弋阳县",
                "parent": "222"
              },
              {
                "code": "2501",
                "fullSpell": "wannianxian",
                "level": 3,
                "name": "万年县",
                "parent": "222"
              },
              {
                "code": "2506",
                "fullSpell": "guangfengqu",
                "level": 3,
                "name": "广丰区",
                "parent": "222"
              },
              {
                "code": "2509",
                "fullSpell": "hengfengxian",
                "level": 3,
                "name": "横峰县",
                "parent": "222"
              },
              {
                "code": "2502",
                "fullSpell": "shangraoxian",
                "level": 3,
                "name": "上饶县",
                "parent": "222"
              },
              {
                "code": "2505",
                "fullSpell": "wuyuanxian",
                "level": 3,
                "name": "婺源县",
                "parent": "222"
              },
              {
                "code": "2504",
                "fullSpell": "xinzhouqu",
                "level": 3,
                "name": "信州区",
                "parent": "222"
              },
              {
                "code": "2510",
                "fullSpell": "yushanxian",
                "level": 3,
                "name": "玉山县",
                "parent": "222"
              },
              {
                "code": "2512",
                "fullSpell": "qianshanxian",
                "level": 3,
                "name": "铅山县",
                "parent": "222"
              },
              {
                "code": "2511",
                "fullSpell": "poyangxian",
                "level": 3,
                "name": "鄱阳县",
                "parent": "222"
              },
              {
                "code": "2503",
                "fullSpell": "yuganxian",
                "level": 3,
                "name": "余干县",
                "parent": "222"
              },
              {
                "code": "2508",
                "fullSpell": "dexingshi",
                "level": 3,
                "name": "德兴市",
                "parent": "222"
              }
            ],
            "code": "222",
            "fullSpell": "shangraoshi",
            "level": 2,
            "name": "上饶市",
            "parent": "14"
          },
          {
            "areas": [
              {
                "code": "2491",
                "fullSpell": "linchuanqu",
                "level": 3,
                "name": "临川区",
                "parent": "221"
              },
              {
                "code": "2496",
                "fullSpell": "chongrenxian",
                "level": 3,
                "name": "崇仁县",
                "parent": "221"
              },
              {
                "code": "2493",
                "fullSpell": "nanfengxian",
                "level": 3,
                "name": "南丰县",
                "parent": "221"
              },
              {
                "code": "2494",
                "fullSpell": "nanchengxian",
                "level": 3,
                "name": "南城县",
                "parent": "221"
              },
              {
                "code": "2500",
                "fullSpell": "lichuanxian",
                "level": 3,
                "name": "黎川县",
                "parent": "221"
              },
              {
                "code": "2490",
                "fullSpell": "dongxiangqu",
                "level": 3,
                "name": "东乡区",
                "parent": "221"
              },
              {
                "code": "2492",
                "fullSpell": "leanxian",
                "level": 3,
                "name": "乐安县",
                "parent": "221"
              },
              {
                "code": "2499",
                "fullSpell": "jinxixian",
                "level": 3,
                "name": "金溪县",
                "parent": "221"
              },
              {
                "code": "2498",
                "fullSpell": "zixixian",
                "level": 3,
                "name": "资溪县",
                "parent": "221"
              },
              {
                "code": "2495",
                "fullSpell": "yihuangxian",
                "level": 3,
                "name": "宜黄县",
                "parent": "221"
              },
              {
                "code": "2497",
                "fullSpell": "guangchangxian",
                "level": 3,
                "name": "广昌县",
                "parent": "221"
              }
            ],
            "code": "221",
            "fullSpell": "fuzhoushi",
            "level": 2,
            "name": "抚州市",
            "parent": "14"
          },
          {
            "areas": [
              {
                "code": "2477",
                "fullSpell": "taihexian",
                "level": 3,
                "name": "泰和县",
                "parent": "219"
              },
              {
                "code": "2470",
                "fullSpell": "jizhouqu",
                "level": 3,
                "name": "吉州区",
                "parent": "219"
              },
              {
                "code": "2476",
                "fullSpell": "yongxinxian",
                "level": 3,
                "name": "永新县",
                "parent": "219"
              },
              {
                "code": "2475",
                "fullSpell": "yongfengxian",
                "level": 3,
                "name": "永丰县",
                "parent": "219"
              },
              {
                "code": "2473",
                "fullSpell": "xiajiangxian",
                "level": 3,
                "name": "峡江县",
                "parent": "219"
              },
              {
                "code": "2467",
                "fullSpell": "wananxian",
                "level": 3,
                "name": "万安县",
                "parent": "219"
              },
              {
                "code": "2478",
                "fullSpell": "suichuanxian",
                "level": 3,
                "name": "遂川县",
                "parent": "219"
              },
              {
                "code": "2479",
                "fullSpell": "qingyuanqu",
                "level": 3,
                "name": "青原区",
                "parent": "219"
              },
              {
                "code": "2468",
                "fullSpell": "jinggangshanshi",
                "level": 3,
                "name": "井冈山市",
                "parent": "219"
              },
              {
                "code": "2474",
                "fullSpell": "xinganxian",
                "level": 3,
                "name": "新干县",
                "parent": "219"
              },
              {
                "code": "2469",
                "fullSpell": "jianxian",
                "level": 3,
                "name": "吉安县",
                "parent": "219"
              },
              {
                "code": "2471",
                "fullSpell": "jishuixian",
                "level": 3,
                "name": "吉水县",
                "parent": "219"
              },
              {
                "code": "2472",
                "fullSpell": "anfuxian",
                "level": 3,
                "name": "安福县",
                "parent": "219"
              }
            ],
            "code": "219",
            "fullSpell": "jianshi",
            "level": 2,
            "name": "吉安市",
            "parent": "14"
          },
          {
            "areas": [
              {
                "code": "2448",
                "fullSpell": "guixishi",
                "level": 3,
                "name": "贵溪市",
                "parent": "217"
              },
              {
                "code": "2447",
                "fullSpell": "yuehuqu",
                "level": 3,
                "name": "月湖区",
                "parent": "217"
              },
              {
                "code": "2446",
                "fullSpell": "yujiangxian",
                "level": 3,
                "name": "余江县",
                "parent": "217"
              }
            ],
            "code": "217",
            "fullSpell": "yingtanshi",
            "level": 2,
            "name": "鹰潭市",
            "parent": "14"
          },
          {
            "areas": [
              {
                "code": "2422",
                "fullSpell": "qingshanhuqu",
                "level": 3,
                "name": "青山湖区",
                "parent": "212"
              },
              {
                "code": "2414",
                "fullSpell": "donghuqu",
                "level": 3,
                "name": "东湖区",
                "parent": "212"
              },
              {
                "code": "2419",
                "fullSpell": "xihuqu",
                "level": 3,
                "name": "西湖区",
                "parent": "212"
              },
              {
                "code": "2421",
                "fullSpell": "qingyunpuqu",
                "level": 3,
                "name": "青云谱区",
                "parent": "212"
              },
              {
                "code": "2420",
                "fullSpell": "jinxianxian",
                "level": 3,
                "name": "进贤县",
                "parent": "212"
              },
              {
                "code": "2417",
                "fullSpell": "xinjianxian",
                "level": 3,
                "name": "新建区",
                "parent": "212"
              },
              {
                "code": "2418",
                "fullSpell": "wanliqu",
                "level": 3,
                "name": "湾里区",
                "parent": "212"
              },
              {
                "code": "2416",
                "fullSpell": "anyixian",
                "level": 3,
                "name": "安义县",
                "parent": "212"
              },
              {
                "code": "2415",
                "fullSpell": "nanchangxian",
                "level": 3,
                "name": "南昌县",
                "parent": "212"
              }
            ],
            "code": "212",
            "fullSpell": "nanchangshi",
            "level": 2,
            "name": "南昌市",
            "parent": "14"
          },
          {
            "areas": [
              {
                "code": "2426",
                "fullSpell": "zhushanqu",
                "level": 3,
                "name": "珠山区",
                "parent": "213"
              },
              {
                "code": "2424",
                "fullSpell": "changjiangqu",
                "level": 3,
                "name": "昌江区",
                "parent": "213"
              },
              {
                "code": "2425",
                "fullSpell": "fuliangxian",
                "level": 3,
                "name": "浮梁县",
                "parent": "213"
              },
              {
                "code": "2423",
                "fullSpell": "lepingshi",
                "level": 3,
                "name": "乐平市",
                "parent": "213"
              }
            ],
            "code": "213",
            "fullSpell": "jingdezhenshi",
            "level": 2,
            "name": "景德镇市",
            "parent": "14"
          },
          {
            "areas": [
              {
                "code": "2433",
                "fullSpell": "xiushuixian",
                "level": 3,
                "name": "修水县",
                "parent": "215"
              },
              {
                "code": "2437",
                "fullSpell": "lushanshi",
                "level": 3,
                "name": "庐山市",
                "parent": "215"
              },
              {
                "code": "2439",
                "fullSpell": "yongxiuxian",
                "level": 3,
                "name": "永修县",
                "parent": "215"
              },
              {
                "code": "2432",
                "fullSpell": "chaisangqu",
                "level": 3,
                "name": "柴桑区",
                "parent": "215"
              },
              {
                "code": "2442",
                "fullSpell": "ruichangshi",
                "level": 3,
                "name": "瑞昌市",
                "parent": "215"
              },
              {
                "code": "2434",
                "fullSpell": "lianxiqu",
                "level": 3,
                "name": "濂溪区",
                "parent": "215"
              },
              {
                "code": "2440",
                "fullSpell": "xunyangqu",
                "level": 3,
                "name": "浔阳区",
                "parent": "215"
              },
              {
                "code": "2438",
                "fullSpell": "wuningxian",
                "level": 3,
                "name": "武宁县",
                "parent": "215"
              },
              {
                "code": "2441",
                "fullSpell": "hukouxian",
                "level": 3,
                "name": "湖口县",
                "parent": "215"
              },
              {
                "code": "2435",
                "fullSpell": "pengzexian",
                "level": 3,
                "name": "彭泽县",
                "parent": "215"
              },
              {
                "code": "2443",
                "fullSpell": "douchangxian",
                "level": 3,
                "name": "都昌县",
                "parent": "215"
              },
              {
                "code": "2436",
                "fullSpell": "deanxian",
                "level": 3,
                "name": "德安县",
                "parent": "215"
              },
              {
                "code": "46781114003",
                "fullSpell": "gongqingchengshi",
                "level": 3,
                "name": "共青城市",
                "parent": "215"
              }
            ],
            "code": "215",
            "fullSpell": "jiujiangshi",
            "level": 2,
            "name": "九江市",
            "parent": "14"
          },
          {
            "areas": [
              {
                "code": "2427",
                "fullSpell": "shanglixian",
                "level": 3,
                "name": "上栗县",
                "parent": "214"
              },
              {
                "code": "2430",
                "fullSpell": "luxixian",
                "level": 3,
                "name": "芦溪县",
                "parent": "214"
              },
              {
                "code": "2428",
                "fullSpell": "anyuanqu",
                "level": 3,
                "name": "安源区",
                "parent": "214"
              },
              {
                "code": "2429",
                "fullSpell": "xiangdongqu",
                "level": 3,
                "name": "湘东区",
                "parent": "214"
              },
              {
                "code": "2431",
                "fullSpell": "lianhuaxian",
                "level": 3,
                "name": "莲花县",
                "parent": "214"
              }
            ],
            "code": "214",
            "fullSpell": "pingxiangshi",
            "level": 2,
            "name": "萍乡市",
            "parent": "14"
          },
          {
            "areas": [
              {
                "code": "2459",
                "fullSpell": "dingnanxian",
                "level": 3,
                "name": "定南县",
                "parent": "218"
              },
              {
                "code": "2466",
                "fullSpell": "longnanxian",
                "level": 3,
                "name": "龙南县",
                "parent": "218"
              },
              {
                "code": "2449",
                "fullSpell": "shangyouxian",
                "level": 3,
                "name": "上犹县",
                "parent": "218"
              },
              {
                "code": "2452",
                "fullSpell": "xinfengxian",
                "level": 3,
                "name": "信丰县",
                "parent": "218"
              },
              {
                "code": "2458",
                "fullSpell": "anyuanxian",
                "level": 3,
                "name": "安远县",
                "parent": "218"
              },
              {
                "code": "2455",
                "fullSpell": "nankangshi",
                "level": 3,
                "name": "南康区",
                "parent": "218"
              },
              {
                "code": "2464",
                "fullSpell": "zhanggongqu",
                "level": 3,
                "name": "章贡区",
                "parent": "218"
              },
              {
                "code": "2450",
                "fullSpell": "yudouxian",
                "level": 3,
                "name": "于都县",
                "parent": "218"
              },
              {
                "code": "2462",
                "fullSpell": "ruijinshi",
                "level": 3,
                "name": "瑞金市",
                "parent": "218"
              },
              {
                "code": "2463",
                "fullSpell": "shichengxian",
                "level": 3,
                "name": "石城县",
                "parent": "218"
              },
              {
                "code": "2454",
                "fullSpell": "xingguoxian",
                "level": 3,
                "name": "兴国县",
                "parent": "218"
              },
              {
                "code": "2457",
                "fullSpell": "ningdouxian",
                "level": 3,
                "name": "宁都县",
                "parent": "218"
              },
              {
                "code": "2453",
                "fullSpell": "quannanxian",
                "level": 3,
                "name": "全南县",
                "parent": "218"
              },
              {
                "code": "2460",
                "fullSpell": "xunwuxian",
                "level": 3,
                "name": "寻乌县",
                "parent": "218"
              },
              {
                "code": "2465",
                "fullSpell": "ganxianqu",
                "level": 3,
                "name": "赣县区",
                "parent": "218"
              },
              {
                "code": "2456",
                "fullSpell": "dayuxian",
                "level": 3,
                "name": "大余县",
                "parent": "218"
              },
              {
                "code": "2451",
                "fullSpell": "huichangxian",
                "level": 3,
                "name": "会昌县",
                "parent": "218"
              },
              {
                "code": "2461",
                "fullSpell": "chongyixian",
                "level": 3,
                "name": "崇义县",
                "parent": "218"
              }
            ],
            "code": "218",
            "fullSpell": "ganzhoushi",
            "level": 2,
            "name": "赣州市",
            "parent": "14"
          },
          {
            "areas": [
              {
                "code": "2486",
                "fullSpell": "yuanzhouqu",
                "level": 3,
                "name": "袁州区",
                "parent": "220"
              },
              {
                "code": "2489",
                "fullSpell": "gaoanshi",
                "level": 3,
                "name": "高安市",
                "parent": "220"
              },
              {
                "code": "2483",
                "fullSpell": "fengxinxian",
                "level": 3,
                "name": "奉新县",
                "parent": "220"
              },
              {
                "code": "2482",
                "fullSpell": "fengchengshi",
                "level": 3,
                "name": "丰城市",
                "parent": "220"
              },
              {
                "code": "2481",
                "fullSpell": "shanggaoxian",
                "level": 3,
                "name": "上高县",
                "parent": "220"
              },
              {
                "code": "2484",
                "fullSpell": "yifengxian",
                "level": 3,
                "name": "宜丰县",
                "parent": "220"
              },
              {
                "code": "2487",
                "fullSpell": "tongguxian",
                "level": 3,
                "name": "铜鼓县",
                "parent": "220"
              },
              {
                "code": "2485",
                "fullSpell": "zhangshushi",
                "level": 3,
                "name": "樟树市",
                "parent": "220"
              },
              {
                "code": "2480",
                "fullSpell": "wanzaixian",
                "level": 3,
                "name": "万载县",
                "parent": "220"
              },
              {
                "code": "2488",
                "fullSpell": "jinganxian",
                "level": 3,
                "name": "靖安县",
                "parent": "220"
              }
            ],
            "code": "220",
            "fullSpell": "yichunshi",
            "level": 2,
            "name": "宜春市",
            "parent": "14"
          },
          {
            "areas": [
              {
                "code": "2444",
                "fullSpell": "fenyixian",
                "level": 3,
                "name": "分宜县",
                "parent": "216"
              },
              {
                "code": "2445",
                "fullSpell": "yushuiqu",
                "level": 3,
                "name": "渝水区",
                "parent": "216"
              }
            ],
            "code": "216",
            "fullSpell": "xinyushi",
            "level": 2,
            "name": "新余市",
            "parent": "14"
          }
        ],
        "code": "14",
        "fullSpell": "jiangxisheng",
        "level": 1,
        "name": "江西省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "1626",
                "fullSpell": "chaoyangqu",
                "level": 3,
                "name": "朝阳区",
                "parent": "121"
              },
              {
                "code": "1624",
                "fullSpell": "kuanchengqu",
                "level": 3,
                "name": "宽城区",
                "parent": "121"
              },
              {
                "code": "1625",
                "fullSpell": "dehuishi",
                "level": 3,
                "name": "德惠市",
                "parent": "121"
              },
              {
                "code": "1620",
                "fullSpell": "erdaoqu",
                "level": 3,
                "name": "二道区",
                "parent": "121"
              },
              {
                "code": "1628",
                "fullSpell": "lvyuanqu",
                "level": 3,
                "name": "绿园区",
                "parent": "121"
              },
              {
                "code": "1622",
                "fullSpell": "nanguanqu",
                "level": 3,
                "name": "南关区",
                "parent": "121"
              },
              {
                "code": "1623",
                "fullSpell": "shuangyangqu",
                "level": 3,
                "name": "双阳区",
                "parent": "121"
              },
              {
                "code": "1627",
                "fullSpell": "yushushi",
                "level": 3,
                "name": "榆树市",
                "parent": "121"
              },
              {
                "code": "1619",
                "fullSpell": "jiutaishi",
                "level": 3,
                "name": "九台区",
                "parent": "121"
              },
              {
                "code": "1621",
                "fullSpell": "nonganxian",
                "level": 3,
                "name": "农安县",
                "parent": "121"
              }
            ],
            "code": "121",
            "fullSpell": "changchunshi",
            "level": 2,
            "name": "长春市",
            "parent": "7"
          },
          {
            "areas": [
              {
                "code": "1652",
                "fullSpell": "huinanxian",
                "level": 3,
                "name": "辉南县",
                "parent": "125"
              },
              {
                "code": "1653",
                "fullSpell": "tonghuaxian",
                "level": 3,
                "name": "通化县",
                "parent": "125"
              },
              {
                "code": "1651",
                "fullSpell": "meihekoushi",
                "level": 3,
                "name": "梅河口市",
                "parent": "125"
              },
              {
                "code": "1648",
                "fullSpell": "dongchangqu",
                "level": 3,
                "name": "东昌区",
                "parent": "125"
              },
              {
                "code": "1650",
                "fullSpell": "liuhexian",
                "level": 3,
                "name": "柳河县",
                "parent": "125"
              },
              {
                "code": "1649",
                "fullSpell": "erdaojiangqu",
                "level": 3,
                "name": "二道江区",
                "parent": "125"
              },
              {
                "code": "1654",
                "fullSpell": "jianshi",
                "level": 3,
                "name": "集安市",
                "parent": "125"
              }
            ],
            "code": "125",
            "fullSpell": "tonghuashi",
            "level": 2,
            "name": "通化市",
            "parent": "7"
          },
          {
            "areas": [
              {
                "code": "1647",
                "fullSpell": "longshanqu",
                "level": 3,
                "name": "龙山区",
                "parent": "124"
              },
              {
                "code": "1644",
                "fullSpell": "dongfengxian",
                "level": 3,
                "name": "东丰县",
                "parent": "124"
              },
              {
                "code": "1645",
                "fullSpell": "dongliaoxian",
                "level": 3,
                "name": "东辽县",
                "parent": "124"
              },
              {
                "code": "1646",
                "fullSpell": "xianqu",
                "level": 3,
                "name": "西安区",
                "parent": "124"
              }
            ],
            "code": "124",
            "fullSpell": "liaoyuanshi",
            "level": 2,
            "name": "辽源市",
            "parent": "7"
          },
          {
            "areas": [
              {
                "code": "1655",
                "fullSpell": "linjiangshi",
                "level": 3,
                "name": "临江市",
                "parent": "126"
              },
              {
                "code": "1657",
                "fullSpell": "fusongxian",
                "level": 3,
                "name": "抚松县",
                "parent": "126"
              },
              {
                "code": "1659",
                "fullSpell": "changbaichaoxianzuzizhixian",
                "level": 3,
                "name": "长白朝鲜族自治县",
                "parent": "126"
              },
              {
                "code": "1658",
                "fullSpell": "jiangyuanqu",
                "level": 3,
                "name": "江源区",
                "parent": "126"
              },
              {
                "code": "1660",
                "fullSpell": "jingyuxian",
                "level": 3,
                "name": "靖宇县",
                "parent": "126"
              },
              {
                "code": "1656",
                "fullSpell": "hunjiangqu",
                "level": 3,
                "name": "浑江区",
                "parent": "126"
              }
            ],
            "code": "126",
            "fullSpell": "baishanshi",
            "level": 2,
            "name": "白山市",
            "parent": "7"
          },
          {
            "areas": [
              {
                "code": "1667",
                "fullSpell": "taobeiqu",
                "level": 3,
                "name": "洮北区",
                "parent": "128"
              },
              {
                "code": "1669",
                "fullSpell": "tongyuxian",
                "level": 3,
                "name": "通榆县",
                "parent": "128"
              },
              {
                "code": "1666",
                "fullSpell": "daanshi",
                "level": 3,
                "name": "大安市",
                "parent": "128"
              },
              {
                "code": "1670",
                "fullSpell": "zhenlaixian",
                "level": 3,
                "name": "镇赉县",
                "parent": "128"
              },
              {
                "code": "1668",
                "fullSpell": "taonanshi",
                "level": 3,
                "name": "洮南市",
                "parent": "128"
              }
            ],
            "code": "128",
            "fullSpell": "baichengshi",
            "level": 2,
            "name": "白城市",
            "parent": "7"
          },
          {
            "areas": [
              {
                "code": "1639",
                "fullSpell": "gongzhulingshi",
                "level": 3,
                "name": "公主岭市",
                "parent": "123"
              },
              {
                "code": "1641",
                "fullSpell": "lishuxian",
                "level": 3,
                "name": "梨树县",
                "parent": "123"
              },
              {
                "code": "1643",
                "fullSpell": "tiexiqu",
                "level": 3,
                "name": "铁西区",
                "parent": "123"
              },
              {
                "code": "1638",
                "fullSpell": "yitongmanzuzizhixian",
                "level": 3,
                "name": "伊通满族自治县",
                "parent": "123"
              },
              {
                "code": "1642",
                "fullSpell": "tiedongqu",
                "level": 3,
                "name": "铁东区",
                "parent": "123"
              },
              {
                "code": "1640",
                "fullSpell": "shuangliaoshi",
                "level": 3,
                "name": "双辽市",
                "parent": "123"
              }
            ],
            "code": "123",
            "fullSpell": "sipingshi",
            "level": 2,
            "name": "四平市",
            "parent": "7"
          },
          {
            "areas": [
              {
                "code": "1637",
                "fullSpell": "longtanqu",
                "level": 3,
                "name": "龙潭区",
                "parent": "122"
              },
              {
                "code": "1630",
                "fullSpell": "changyiqu",
                "level": 3,
                "name": "昌邑区",
                "parent": "122"
              },
              {
                "code": "1631",
                "fullSpell": "huadianshi",
                "level": 3,
                "name": "桦甸市",
                "parent": "122"
              },
              {
                "code": "1634",
                "fullSpell": "shulanshi",
                "level": 3,
                "name": "舒兰市",
                "parent": "122"
              },
              {
                "code": "1635",
                "fullSpell": "chuanyingqu",
                "level": 3,
                "name": "船营区",
                "parent": "122"
              },
              {
                "code": "1636",
                "fullSpell": "jiaoheshi",
                "level": 3,
                "name": "蛟河市",
                "parent": "122"
              },
              {
                "code": "1629",
                "fullSpell": "fengmanqu",
                "level": 3,
                "name": "丰满区",
                "parent": "122"
              },
              {
                "code": "1633",
                "fullSpell": "panshishi",
                "level": 3,
                "name": "磐石市",
                "parent": "122"
              },
              {
                "code": "1632",
                "fullSpell": "yongjixian",
                "level": 3,
                "name": "永吉县",
                "parent": "122"
              }
            ],
            "code": "122",
            "fullSpell": "jilinshi",
            "level": 2,
            "name": "吉林市",
            "parent": "7"
          },
          {
            "areas": [
              {
                "code": "1661",
                "fullSpell": "qiananxian",
                "level": 3,
                "name": "乾安县",
                "parent": "127"
              },
              {
                "code": "1662",
                "fullSpell": "qianguoerluosimengguzuzizhixian",
                "level": 3,
                "name": "前郭尔罗斯蒙古族自治县",
                "parent": "127"
              },
              {
                "code": "1664",
                "fullSpell": "fuyushi",
                "level": 3,
                "name": "扶余市",
                "parent": "127"
              },
              {
                "code": "1663",
                "fullSpell": "ningjiangqu",
                "level": 3,
                "name": "宁江区",
                "parent": "127"
              },
              {
                "code": "1665",
                "fullSpell": "changlingxian",
                "level": 3,
                "name": "长岭县",
                "parent": "127"
              }
            ],
            "code": "127",
            "fullSpell": "songyuanshi",
            "level": 2,
            "name": "松原市",
            "parent": "7"
          },
          {
            "areas": [
              {
                "code": "1674",
                "fullSpell": "yanjishi",
                "level": 3,
                "name": "延吉市",
                "parent": "129"
              },
              {
                "code": "1676",
                "fullSpell": "wangqingxian",
                "level": 3,
                "name": "汪清县",
                "parent": "129"
              },
              {
                "code": "1677",
                "fullSpell": "huichunshi",
                "level": 3,
                "name": "珲春市",
                "parent": "129"
              },
              {
                "code": "1671",
                "fullSpell": "helongshi",
                "level": 3,
                "name": "和龙市",
                "parent": "129"
              },
              {
                "code": "1672",
                "fullSpell": "tumenshi",
                "level": 3,
                "name": "图们市",
                "parent": "129"
              },
              {
                "code": "1675",
                "fullSpell": "dunhuashi",
                "level": 3,
                "name": "敦化市",
                "parent": "129"
              },
              {
                "code": "1678",
                "fullSpell": "longjingshi",
                "level": 3,
                "name": "龙井市",
                "parent": "129"
              },
              {
                "code": "1673",
                "fullSpell": "antuxian",
                "level": 3,
                "name": "安图县",
                "parent": "129"
              }
            ],
            "code": "129",
            "fullSpell": "yanbianchaoxianzuzizhizhou",
            "level": 2,
            "name": "延边朝鲜族自治州",
            "parent": "7"
          }
        ],
        "code": "7",
        "fullSpell": "jilinsheng",
        "level": 1,
        "name": "吉林省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "1588",
                "fullSpell": "taizihequ",
                "level": 3,
                "name": "太子河区",
                "parent": "116"
              },
              {
                "code": "1593",
                "fullSpell": "baitaqu",
                "level": 3,
                "name": "白塔区",
                "parent": "116"
              },
              {
                "code": "1591",
                "fullSpell": "wenshengqu",
                "level": 3,
                "name": "文圣区",
                "parent": "116"
              },
              {
                "code": "1594",
                "fullSpell": "liaoyangxian",
                "level": 3,
                "name": "辽阳县",
                "parent": "116"
              },
              {
                "code": "1589",
                "fullSpell": "hongweiqu",
                "level": 3,
                "name": "宏伟区",
                "parent": "116"
              },
              {
                "code": "1592",
                "fullSpell": "dengtashi",
                "level": 3,
                "name": "灯塔市",
                "parent": "116"
              },
              {
                "code": "1590",
                "fullSpell": "gongchanglingqu",
                "level": 3,
                "name": "弓长岭区",
                "parent": "116"
              }
            ],
            "code": "116",
            "fullSpell": "liaoyangshi",
            "level": 2,
            "name": "辽阳市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1596",
                "fullSpell": "shuangtaiziqu",
                "level": 3,
                "name": "双台子区",
                "parent": "117"
              },
              {
                "code": "1597",
                "fullSpell": "dawaqu",
                "level": 3,
                "name": "大洼区",
                "parent": "117"
              },
              {
                "code": "1595",
                "fullSpell": "xinglongtaiqu",
                "level": 3,
                "name": "兴隆台区",
                "parent": "117"
              },
              {
                "code": "1598",
                "fullSpell": "panshanxian",
                "level": 3,
                "name": "盘山县",
                "parent": "117"
              }
            ],
            "code": "117",
            "fullSpell": "panjinshi",
            "level": 2,
            "name": "盘锦市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1617",
                "fullSpell": "lianshanqu",
                "level": 3,
                "name": "连山区",
                "parent": "120"
              },
              {
                "code": "1618",
                "fullSpell": "longgangqu",
                "level": 3,
                "name": "龙港区",
                "parent": "120"
              },
              {
                "code": "1616",
                "fullSpell": "suizhongxian",
                "level": 3,
                "name": "绥中县",
                "parent": "120"
              },
              {
                "code": "1613",
                "fullSpell": "xingchengshi",
                "level": 3,
                "name": "兴城市",
                "parent": "120"
              },
              {
                "code": "1615",
                "fullSpell": "jianchangxian",
                "level": 3,
                "name": "建昌县",
                "parent": "120"
              },
              {
                "code": "1614",
                "fullSpell": "nanpiaoqu",
                "level": 3,
                "name": "南票区",
                "parent": "120"
              }
            ],
            "code": "120",
            "fullSpell": "huludaoshi",
            "level": 2,
            "name": "葫芦岛市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1555",
                "fullSpell": "shunchengqu",
                "level": 3,
                "name": "顺城区",
                "parent": "110"
              },
              {
                "code": "1549",
                "fullSpell": "dongzhouqu",
                "level": 3,
                "name": "东洲区",
                "parent": "110"
              },
              {
                "code": "1553",
                "fullSpell": "wanghuaqu",
                "level": 3,
                "name": "望花区",
                "parent": "110"
              },
              {
                "code": "1551",
                "fullSpell": "xinbinmanzuzizhixian",
                "level": 3,
                "name": "新宾满族自治县",
                "parent": "110"
              },
              {
                "code": "1552",
                "fullSpell": "xinfuqu",
                "level": 3,
                "name": "新抚区",
                "parent": "110"
              },
              {
                "code": "1554",
                "fullSpell": "qingyuanmanzuzizhixian",
                "level": 3,
                "name": "清原满族自治县",
                "parent": "110"
              },
              {
                "code": "1550",
                "fullSpell": "fushunxian",
                "level": 3,
                "name": "抚顺县",
                "parent": "110"
              }
            ],
            "code": "110",
            "fullSpell": "fushunshi",
            "level": 2,
            "name": "抚顺市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1535",
                "fullSpell": "pulandianqu",
                "level": 3,
                "name": "普兰店区",
                "parent": "108"
              },
              {
                "code": "1536",
                "fullSpell": "shahekouqu",
                "level": 3,
                "name": "沙河口区",
                "parent": "108"
              },
              {
                "code": "1540",
                "fullSpell": "jinzhouqu",
                "level": 3,
                "name": "金州区",
                "parent": "108"
              },
              {
                "code": "1533",
                "fullSpell": "zhuangheshi",
                "level": 3,
                "name": "庄河市",
                "parent": "108"
              },
              {
                "code": "1537",
                "fullSpell": "wafangdianshi",
                "level": 3,
                "name": "瓦房店市",
                "parent": "108"
              },
              {
                "code": "1534",
                "fullSpell": "lvshunkouqu",
                "level": 3,
                "name": "旅顺口区",
                "parent": "108"
              },
              {
                "code": "1532",
                "fullSpell": "zhongshanqu",
                "level": 3,
                "name": "中山区",
                "parent": "108"
              },
              {
                "code": "1541",
                "fullSpell": "changhaixian",
                "level": 3,
                "name": "长海县",
                "parent": "108"
              },
              {
                "code": "1538",
                "fullSpell": "ganjingziqu",
                "level": 3,
                "name": "甘井子区",
                "parent": "108"
              },
              {
                "code": "1539",
                "fullSpell": "xigangqu",
                "level": 3,
                "name": "西岗区",
                "parent": "108"
              }
            ],
            "code": "108",
            "fullSpell": "dalianshi",
            "level": 2,
            "name": "大连市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1586",
                "fullSpell": "xihequ",
                "level": 3,
                "name": "细河区",
                "parent": "115"
              },
              {
                "code": "1584",
                "fullSpell": "haizhouqu",
                "level": 3,
                "name": "海州区",
                "parent": "115"
              },
              {
                "code": "1587",
                "fullSpell": "fuxinmengguzuzizhixian",
                "level": 3,
                "name": "阜新蒙古族自治县",
                "parent": "115"
              },
              {
                "code": "1583",
                "fullSpell": "xinqiuqu",
                "level": 3,
                "name": "新邱区",
                "parent": "115"
              },
              {
                "code": "1582",
                "fullSpell": "zhangwuxian",
                "level": 3,
                "name": "彰武县",
                "parent": "115"
              },
              {
                "code": "1581",
                "fullSpell": "taipingqu",
                "level": 3,
                "name": "太平区",
                "parent": "115"
              },
              {
                "code": "1585",
                "fullSpell": "qinghemenqu",
                "level": 3,
                "name": "清河门区",
                "parent": "115"
              }
            ],
            "code": "115",
            "fullSpell": "fuxinshi",
            "level": 2,
            "name": "阜新市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1603",
                "fullSpell": "diaobingshanshi",
                "level": 3,
                "name": "调兵山市",
                "parent": "118"
              },
              {
                "code": "1602",
                "fullSpell": "xifengxian",
                "level": 3,
                "name": "西丰县",
                "parent": "118"
              },
              {
                "code": "1600",
                "fullSpell": "changtuxian",
                "level": 3,
                "name": "昌图县",
                "parent": "118"
              },
              {
                "code": "1601",
                "fullSpell": "qinghequ",
                "level": 3,
                "name": "清河区",
                "parent": "118"
              },
              {
                "code": "1605",
                "fullSpell": "yinzhouqu",
                "level": 3,
                "name": "银州区",
                "parent": "118"
              },
              {
                "code": "1604",
                "fullSpell": "tielingxian",
                "level": 3,
                "name": "铁岭县",
                "parent": "118"
              },
              {
                "code": "1599",
                "fullSpell": "kaiyuanshi",
                "level": 3,
                "name": "开原市",
                "parent": "118"
              }
            ],
            "code": "118",
            "fullSpell": "tielingshi",
            "level": 2,
            "name": "铁岭市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1564",
                "fullSpell": "fengchengshi",
                "level": 3,
                "name": "凤城市",
                "parent": "112"
              },
              {
                "code": "1565",
                "fullSpell": "kuandianmanzuzizhixian",
                "level": 3,
                "name": "宽甸满族自治县",
                "parent": "112"
              },
              {
                "code": "1566",
                "fullSpell": "zhenxingqu",
                "level": 3,
                "name": "振兴区",
                "parent": "112"
              },
              {
                "code": "1563",
                "fullSpell": "yuanbaoqu",
                "level": 3,
                "name": "元宝区",
                "parent": "112"
              },
              {
                "code": "1562",
                "fullSpell": "donggangshi",
                "level": 3,
                "name": "东港市",
                "parent": "112"
              },
              {
                "code": "1567",
                "fullSpell": "zhenanqu",
                "level": 3,
                "name": "振安区",
                "parent": "112"
              }
            ],
            "code": "112",
            "fullSpell": "dandongshi",
            "level": 2,
            "name": "丹东市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1574",
                "fullSpell": "heishanxian",
                "level": 3,
                "name": "黑山县",
                "parent": "113"
              },
              {
                "code": "1573",
                "fullSpell": "taihequ",
                "level": 3,
                "name": "太和区",
                "parent": "113"
              },
              {
                "code": "1569",
                "fullSpell": "linghequ",
                "level": 3,
                "name": "凌河区",
                "parent": "113"
              },
              {
                "code": "1570",
                "fullSpell": "linghaishi",
                "level": 3,
                "name": "凌海市",
                "parent": "113"
              },
              {
                "code": "1571",
                "fullSpell": "beizhenshi",
                "level": 3,
                "name": "北镇市",
                "parent": "113"
              },
              {
                "code": "1568",
                "fullSpell": "yixian",
                "level": 3,
                "name": "义县",
                "parent": "113"
              },
              {
                "code": "1572",
                "fullSpell": "gutaqu",
                "level": 3,
                "name": "古塔区",
                "parent": "113"
              }
            ],
            "code": "113",
            "fullSpell": "jinzhoushi",
            "level": 2,
            "name": "锦州市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1557",
                "fullSpell": "pingshanqu",
                "level": 3,
                "name": "平山区",
                "parent": "111"
              },
              {
                "code": "1561",
                "fullSpell": "xihuqu",
                "level": 3,
                "name": "溪湖区",
                "parent": "111"
              },
              {
                "code": "1560",
                "fullSpell": "huanrenmanzuzizhixian",
                "level": 3,
                "name": "桓仁满族自治县",
                "parent": "111"
              },
              {
                "code": "1559",
                "fullSpell": "benximanzuzizhixian",
                "level": 3,
                "name": "本溪满族自治县",
                "parent": "111"
              },
              {
                "code": "1556",
                "fullSpell": "nanfenqu",
                "level": 3,
                "name": "南芬区",
                "parent": "111"
              },
              {
                "code": "1558",
                "fullSpell": "mingshanqu",
                "level": 3,
                "name": "明山区",
                "parent": "111"
              }
            ],
            "code": "111",
            "fullSpell": "benxishi",
            "level": 2,
            "name": "本溪市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1610",
                "fullSpell": "jianpingxian",
                "level": 3,
                "name": "建平县",
                "parent": "119"
              },
              {
                "code": "1607",
                "fullSpell": "beipiaoshi",
                "level": 3,
                "name": "北票市",
                "parent": "119"
              },
              {
                "code": "1608",
                "fullSpell": "shuangtaqu",
                "level": 3,
                "name": "双塔区",
                "parent": "119"
              },
              {
                "code": "1612",
                "fullSpell": "longchengqu",
                "level": 3,
                "name": "龙城区",
                "parent": "119"
              },
              {
                "code": "1609",
                "fullSpell": "kalaqinzuoyimengguzuzizhixian",
                "level": 3,
                "name": "喀喇沁左翼蒙古族自治县",
                "parent": "119"
              },
              {
                "code": "1611",
                "fullSpell": "chaoyangxian",
                "level": 3,
                "name": "朝阳县",
                "parent": "119"
              },
              {
                "code": "1606",
                "fullSpell": "lingyuanshi",
                "level": 3,
                "name": "凌源市",
                "parent": "119"
              }
            ],
            "code": "119",
            "fullSpell": "chaoyangshi",
            "level": 2,
            "name": "朝阳市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1543",
                "fullSpell": "taianxian",
                "level": 3,
                "name": "台安县",
                "parent": "109"
              },
              {
                "code": "1548",
                "fullSpell": "tiexiqu",
                "level": 3,
                "name": "铁西区",
                "parent": "109"
              },
              {
                "code": "1547",
                "fullSpell": "tiedongqu",
                "level": 3,
                "name": "铁东区",
                "parent": "109"
              },
              {
                "code": "1542",
                "fullSpell": "qianshanqu",
                "level": 3,
                "name": "千山区",
                "parent": "109"
              },
              {
                "code": "1544",
                "fullSpell": "xiuyanmanzuzizhixian",
                "level": 3,
                "name": "岫岩满族自治县",
                "parent": "109"
              },
              {
                "code": "1546",
                "fullSpell": "lishanqu",
                "level": 3,
                "name": "立山区",
                "parent": "109"
              },
              {
                "code": "1545",
                "fullSpell": "haichengshi",
                "level": 3,
                "name": "海城市",
                "parent": "109"
              }
            ],
            "code": "109",
            "fullSpell": "anshanshi",
            "level": 2,
            "name": "鞍山市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1525",
                "fullSpell": "shenbeixinqu",
                "level": 3,
                "name": "沈北新区",
                "parent": "107"
              },
              {
                "code": "1531",
                "fullSpell": "tiexiqu",
                "level": 3,
                "name": "铁西区",
                "parent": "107"
              },
              {
                "code": "1527",
                "fullSpell": "fakuxian",
                "level": 3,
                "name": "法库县",
                "parent": "107"
              },
              {
                "code": "1529",
                "fullSpell": "sujiatunqu",
                "level": 3,
                "name": "苏家屯区",
                "parent": "107"
              },
              {
                "code": "1520",
                "fullSpell": "yuhongqu",
                "level": 3,
                "name": "于洪区",
                "parent": "107"
              },
              {
                "code": "1524",
                "fullSpell": "xinminshi",
                "level": 3,
                "name": "新民市",
                "parent": "107"
              },
              {
                "code": "1530",
                "fullSpell": "liaozhongqu",
                "level": 3,
                "name": "辽中区",
                "parent": "107"
              },
              {
                "code": "1526",
                "fullSpell": "shenhequ",
                "level": 3,
                "name": "沈河区",
                "parent": "107"
              },
              {
                "code": "1523",
                "fullSpell": "kangpingxian",
                "level": 3,
                "name": "康平县",
                "parent": "107"
              },
              {
                "code": "1519",
                "fullSpell": "hunnanqu",
                "level": 3,
                "name": "浑南区",
                "parent": "107"
              },
              {
                "code": "1528",
                "fullSpell": "huangguqu",
                "level": 3,
                "name": "皇姑区",
                "parent": "107"
              },
              {
                "code": "1521",
                "fullSpell": "hepingqu",
                "level": 3,
                "name": "和平区",
                "parent": "107"
              },
              {
                "code": "1522",
                "fullSpell": "dadongqu",
                "level": 3,
                "name": "大东区",
                "parent": "107"
              }
            ],
            "code": "107",
            "fullSpell": "shenyangshi",
            "level": 2,
            "name": "沈阳市",
            "parent": "6"
          },
          {
            "areas": [
              {
                "code": "1578",
                "fullSpell": "laobianqu",
                "level": 3,
                "name": "老边区",
                "parent": "114"
              },
              {
                "code": "1577",
                "fullSpell": "zhanqianqu",
                "level": 3,
                "name": "站前区",
                "parent": "114"
              },
              {
                "code": "1576",
                "fullSpell": "gaizhoushi",
                "level": 3,
                "name": "盖州市",
                "parent": "114"
              },
              {
                "code": "1580",
                "fullSpell": "bayuquanqu",
                "level": 3,
                "name": "鲅鱼圈区",
                "parent": "114"
              },
              {
                "code": "1579",
                "fullSpell": "xishiqu",
                "level": 3,
                "name": "西市区",
                "parent": "114"
              },
              {
                "code": "1575",
                "fullSpell": "dashiqiaoshi",
                "level": 3,
                "name": "大石桥市",
                "parent": "114"
              }
            ],
            "code": "114",
            "fullSpell": "yingkoushi",
            "level": 2,
            "name": "营口市",
            "parent": "6"
          }
        ],
        "code": "6",
        "fullSpell": "liaoningsheng",
        "level": 1,
        "name": "辽宁省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "1479",
                "fullSpell": "eergunashi",
                "level": 3,
                "name": "额尔古纳市",
                "parent": "101"
              },
              {
                "code": "1468",
                "fullSpell": "xinbaerhuyouqi",
                "level": 3,
                "name": "新巴尔虎右旗",
                "parent": "101"
              },
              {
                "code": "1474",
                "fullSpell": "molidawadawoerzuzizhiqi",
                "level": 3,
                "name": "莫力达瓦达斡尔族自治旗",
                "parent": "101"
              },
              {
                "code": "1478",
                "fullSpell": "chenbaerhuqi",
                "level": 3,
                "name": "陈巴尔虎旗",
                "parent": "101"
              },
              {
                "code": "1469",
                "fullSpell": "xinbaerhuzuoqi",
                "level": 3,
                "name": "新巴尔虎左旗",
                "parent": "101"
              },
              {
                "code": "1476",
                "fullSpell": "ewenkezuzizhiqi",
                "level": 3,
                "name": "鄂温克族自治旗",
                "parent": "101"
              },
              {
                "code": "1475",
                "fullSpell": "elunchunzizhiqi",
                "level": 3,
                "name": "鄂伦春自治旗",
                "parent": "101"
              },
              {
                "code": "1472",
                "fullSpell": "manzhoulishi",
                "level": 3,
                "name": "满洲里市",
                "parent": "101"
              },
              {
                "code": "1477",
                "fullSpell": "arongqi",
                "level": 3,
                "name": "阿荣旗",
                "parent": "101"
              },
              {
                "code": "1467",
                "fullSpell": "zhalantunshi",
                "level": 3,
                "name": "扎兰屯市",
                "parent": "101"
              },
              {
                "code": "1471",
                "fullSpell": "hailaerqu",
                "level": 3,
                "name": "海拉尔区",
                "parent": "101"
              },
              {
                "code": "1473",
                "fullSpell": "yakeshishi",
                "level": 3,
                "name": "牙克石市",
                "parent": "101"
              },
              {
                "code": "1470",
                "fullSpell": "genheshi",
                "level": 3,
                "name": "根河市",
                "parent": "101"
              }
            ],
            "code": "101",
            "fullSpell": "hulunbeiershi",
            "level": 2,
            "name": "呼伦贝尔市",
            "parent": "5"
          },
          {
            "areas": [
              {
                "code": "1425",
                "fullSpell": "saihanqu",
                "level": 3,
                "name": "赛罕区",
                "parent": "95"
              },
              {
                "code": "1418",
                "fullSpell": "huiminqu",
                "level": 3,
                "name": "回民区",
                "parent": "95"
              },
              {
                "code": "1421",
                "fullSpell": "xinchengqu",
                "level": 3,
                "name": "新城区",
                "parent": "95"
              },
              {
                "code": "1424",
                "fullSpell": "yuquanqu",
                "level": 3,
                "name": "玉泉区",
                "parent": "95"
              },
              {
                "code": "1422",
                "fullSpell": "wuchuanxian",
                "level": 3,
                "name": "武川县",
                "parent": "95"
              },
              {
                "code": "1417",
                "fullSpell": "helingeerxian",
                "level": 3,
                "name": "和林格尔县",
                "parent": "95"
              },
              {
                "code": "1420",
                "fullSpell": "tuoketuoxian",
                "level": 3,
                "name": "托克托县",
                "parent": "95"
              },
              {
                "code": "1423",
                "fullSpell": "qingshuihexian",
                "level": 3,
                "name": "清水河县",
                "parent": "95"
              },
              {
                "code": "1419",
                "fullSpell": "tumotezuoqi",
                "level": 3,
                "name": "土默特左旗",
                "parent": "95"
              }
            ],
            "code": "95",
            "fullSpell": "huhehaoteshi",
            "level": 2,
            "name": "呼和浩特市",
            "parent": "5"
          },
          {
            "areas": [
              {
                "code": "1436",
                "fullSpell": "haibowanqu",
                "level": 3,
                "name": "海勃湾区",
                "parent": "97"
              },
              {
                "code": "1435",
                "fullSpell": "wudaqu",
                "level": 3,
                "name": "乌达区",
                "parent": "97"
              },
              {
                "code": "1437",
                "fullSpell": "hainanqu",
                "level": 3,
                "name": "海南区",
                "parent": "97"
              }
            ],
            "code": "97",
            "fullSpell": "wuhaishi",
            "level": 2,
            "name": "乌海市",
            "parent": "5"
          },
          {
            "areas": [
              {
                "code": "1507",
                "fullSpell": "taipusiqi",
                "level": 3,
                "name": "太仆寺旗",
                "parent": "105"
              },
              {
                "code": "1513",
                "fullSpell": "xilinhaoteshi",
                "level": 3,
                "name": "锡林浩特市",
                "parent": "105"
              },
              {
                "code": "1511",
                "fullSpell": "sunitezuoqi",
                "level": 3,
                "name": "苏尼特左旗",
                "parent": "105"
              },
              {
                "code": "1512",
                "fullSpell": "xiwuzhumuqinqi",
                "level": 3,
                "name": "西乌珠穆沁旗",
                "parent": "105"
              },
              {
                "code": "1504",
                "fullSpell": "dongwuzhumuqinqi",
                "level": 3,
                "name": "东乌珠穆沁旗",
                "parent": "105"
              },
              {
                "code": "1515",
                "fullSpell": "abagaqi",
                "level": 3,
                "name": "阿巴嘎旗",
                "parent": "105"
              },
              {
                "code": "1510",
                "fullSpell": "suniteyouqi",
                "level": 3,
                "name": "苏尼特右旗",
                "parent": "105"
              },
              {
                "code": "1506",
                "fullSpell": "duolunxian",
                "level": 3,
                "name": "多伦县",
                "parent": "105"
              },
              {
                "code": "1505",
                "fullSpell": "erlianhaoteshi",
                "level": 3,
                "name": "二连浩特市",
                "parent": "105"
              },
              {
                "code": "1514",
                "fullSpell": "xianghuangqi",
                "level": 3,
                "name": "镶黄旗",
                "parent": "105"
              },
              {
                "code": "1509",
                "fullSpell": "zhengxiangbaiqi",
                "level": 3,
                "name": "正镶白旗",
                "parent": "105"
              },
              {
                "code": "1508",
                "fullSpell": "zhenglanqi",
                "level": 3,
                "name": "正蓝旗",
                "parent": "105"
              }
            ],
            "code": "105",
            "fullSpell": "xilinguolemeng",
            "level": 2,
            "name": "锡林郭勒盟",
            "parent": "5"
          },
          {
            "areas": [
              {
                "code": "1446",
                "fullSpell": "linxixian",
                "level": 3,
                "name": "林西县",
                "parent": "98"
              },
              {
                "code": "1442",
                "fullSpell": "balinyouqi",
                "level": 3,
                "name": "巴林右旗",
                "parent": "98"
              },
              {
                "code": "1444",
                "fullSpell": "aohanqi",
                "level": 3,
                "name": "敖汉旗",
                "parent": "98"
              },
              {
                "code": "1447",
                "fullSpell": "hongshanqu",
                "level": 3,
                "name": "红山区",
                "parent": "98"
              },
              {
                "code": "1438",
                "fullSpell": "yuanbaoshanqu",
                "level": 3,
                "name": "元宝山区",
                "parent": "98"
              },
              {
                "code": "1441",
                "fullSpell": "ningchengxian",
                "level": 3,
                "name": "宁城县",
                "parent": "98"
              },
              {
                "code": "1439",
                "fullSpell": "keshiketengqi",
                "level": 3,
                "name": "克什克腾旗",
                "parent": "98"
              },
              {
                "code": "1440",
                "fullSpell": "kalaqinqi",
                "level": 3,
                "name": "喀喇沁旗",
                "parent": "98"
              },
              {
                "code": "1443",
                "fullSpell": "balinzuoqi",
                "level": 3,
                "name": "巴林左旗",
                "parent": "98"
              },
              {
                "code": "1448",
                "fullSpell": "wengniuteqi",
                "level": 3,
                "name": "翁牛特旗",
                "parent": "98"
              },
              {
                "code": "1445",
                "fullSpell": "songshanqu",
                "level": 3,
                "name": "松山区",
                "parent": "98"
              },
              {
                "code": "1449",
                "fullSpell": "alukeerqinqi",
                "level": 3,
                "name": "阿鲁科尔沁旗",
                "parent": "98"
              }
            ],
            "code": "98",
            "fullSpell": "chifengshi",
            "level": 2,
            "name": "赤峰市",
            "parent": "5"
          },
          {
            "areas": [
              {
                "code": "1517",
                "fullSpell": "alashanzuoqi",
                "level": 3,
                "name": "阿拉善左旗",
                "parent": "106"
              },
              {
                "code": "1518",
                "fullSpell": "ejinaqi",
                "level": 3,
                "name": "额济纳旗",
                "parent": "106"
              },
              {
                "code": "1516",
                "fullSpell": "alashanyouqi",
                "level": 3,
                "name": "阿拉善右旗",
                "parent": "106"
              }
            ],
            "code": "106",
            "fullSpell": "alashanmeng",
            "level": 2,
            "name": "阿拉善盟",
            "parent": "5"
          },
          {
            "areas": [
              {
                "code": "1486",
                "fullSpell": "dengkouxian",
                "level": 3,
                "name": "磴口县",
                "parent": "102"
              },
              {
                "code": "1481",
                "fullSpell": "wulatezhongqi",
                "level": 3,
                "name": "乌拉特中旗",
                "parent": "102"
              },
              {
                "code": "1484",
                "fullSpell": "wuyuanxian",
                "level": 3,
                "name": "五原县",
                "parent": "102"
              },
              {
                "code": "1480",
                "fullSpell": "linhequ",
                "level": 3,
                "name": "临河区",
                "parent": "102"
              },
              {
                "code": "1485",
                "fullSpell": "hangjinhouqi",
                "level": 3,
                "name": "杭锦后旗",
                "parent": "102"
              },
              {
                "code": "1483",
                "fullSpell": "wulatehouqi",
                "level": 3,
                "name": "乌拉特后旗",
                "parent": "102"
              },
              {
                "code": "1482",
                "fullSpell": "wulateqianqi",
                "level": 3,
                "name": "乌拉特前旗",
                "parent": "102"
              }
            ],
            "code": "102",
            "fullSpell": "bayannaoershi",
            "level": 2,
            "name": "巴彦淖尔市",
            "parent": "5"
          },
          {
            "areas": [
              {
                "code": "1426",
                "fullSpell": "donghequ",
                "level": 3,
                "name": "东河区",
                "parent": "96"
              },
              {
                "code": "1432",
                "fullSpell": "shiguaiqu",
                "level": 3,
                "name": "石拐区",
                "parent": "96"
              },
              {
                "code": "1427",
                "fullSpell": "jiuyuanqu",
                "level": 3,
                "name": "九原区",
                "parent": "96"
              },
              {
                "code": "1434",
                "fullSpell": "qingshanqu",
                "level": 3,
                "name": "青山区",
                "parent": "96"
              },
              {
                "code": "1429",
                "fullSpell": "tumoteyouqi",
                "level": 3,
                "name": "土默特右旗",
                "parent": "96"
              },
              {
                "code": "1430",
                "fullSpell": "kundoulunqu",
                "level": 3,
                "name": "昆都仑区",
                "parent": "96"
              },
              {
                "code": "1431",
                "fullSpell": "baiyunkuangqu",
                "level": 3,
                "name": "白云矿区",
                "parent": "96"
              },
              {
                "code": "1433",
                "fullSpell": "daerhanmaominganlianheqi",
                "level": 3,
                "name": "达尔罕茂明安联合旗",
                "parent": "96"
              },
              {
                "code": "1428",
                "fullSpell": "guyangxian",
                "level": 3,
                "name": "固阳县",
                "parent": "96"
              }
            ],
            "code": "96",
            "fullSpell": "baotoushi",
            "level": 2,
            "name": "包头市",
            "parent": "5"
          },
          {
            "areas": [
              {
                "code": "1455",
                "fullSpell": "keerqinzuoyizhongqi",
                "level": 3,
                "name": "科尔沁左翼中旗",
                "parent": "99"
              },
              {
                "code": "1457",
                "fullSpell": "huolinguoleshi",
                "level": 3,
                "name": "霍林郭勒市",
                "parent": "99"
              },
              {
                "code": "1453",
                "fullSpell": "zhaluteqi",
                "level": 3,
                "name": "扎鲁特旗",
                "parent": "99"
              },
              {
                "code": "1451",
                "fullSpell": "kulunqi",
                "level": 3,
                "name": "库伦旗",
                "parent": "99"
              },
              {
                "code": "1452",
                "fullSpell": "kailuxian",
                "level": 3,
                "name": "开鲁县",
                "parent": "99"
              },
              {
                "code": "1454",
                "fullSpell": "keerqinqu",
                "level": 3,
                "name": "科尔沁区",
                "parent": "99"
              },
              {
                "code": "1456",
                "fullSpell": "keerqinzuoyihouqi",
                "level": 3,
                "name": "科尔沁左翼后旗",
                "parent": "99"
              },
              {
                "code": "1450",
                "fullSpell": "naimanqi",
                "level": 3,
                "name": "奈曼旗",
                "parent": "99"
              }
            ],
            "code": "99",
            "fullSpell": "tongliaoshi",
            "level": 2,
            "name": "通辽市",
            "parent": "5"
          },
          {
            "areas": [
              {
                "code": "1503",
                "fullSpell": "aershanshi",
                "level": 3,
                "name": "阿尔山市",
                "parent": "104"
              },
              {
                "code": "1498",
                "fullSpell": "wulanhaoteshi",
                "level": 3,
                "name": "乌兰浩特市",
                "parent": "104"
              },
              {
                "code": "1500",
                "fullSpell": "keerqinyouyizhongqi",
                "level": 3,
                "name": "科尔沁右翼中旗",
                "parent": "104"
              },
              {
                "code": "1499",
                "fullSpell": "zhalaiteqi",
                "level": 3,
                "name": "扎赉特旗",
                "parent": "104"
              },
              {
                "code": "1501",
                "fullSpell": "keerqinyouyiqianqi",
                "level": 3,
                "name": "科尔沁右翼前旗",
                "parent": "104"
              },
              {
                "code": "1502",
                "fullSpell": "tuquanxian",
                "level": 3,
                "name": "突泉县",
                "parent": "104"
              }
            ],
            "code": "104",
            "fullSpell": "xinganmeng",
            "level": 2,
            "name": "兴安盟",
            "parent": "5"
          },
          {
            "areas": [
              {
                "code": "1463",
                "fullSpell": "dalateqi",
                "level": 3,
                "name": "达拉特旗",
                "parent": "100"
              },
              {
                "code": "1459",
                "fullSpell": "wushenqi",
                "level": 3,
                "name": "乌审旗",
                "parent": "100"
              },
              {
                "code": "1465",
                "fullSpell": "etuokeqianqi",
                "level": 3,
                "name": "鄂托克前旗",
                "parent": "100"
              },
              {
                "code": "1466",
                "fullSpell": "etuokeqi",
                "level": 3,
                "name": "鄂托克旗",
                "parent": "100"
              },
              {
                "code": "1461",
                "fullSpell": "zhungeerqi",
                "level": 3,
                "name": "准格尔旗",
                "parent": "100"
              },
              {
                "code": "1464",
                "fullSpell": "kangbashiqu",
                "level": 3,
                "name": "康巴什区",
                "parent": "100"
              },
              {
                "code": "1462",
                "fullSpell": "hangjinqi",
                "level": 3,
                "name": "杭锦旗",
                "parent": "100"
              },
              {
                "code": "1460",
                "fullSpell": "yijinhuoluoqi",
                "level": 3,
                "name": "伊金霍洛旗",
                "parent": "100"
              },
              {
                "code": "1458",
                "fullSpell": "dongshengqu",
                "level": 3,
                "name": "东胜区",
                "parent": "100"
              }
            ],
            "code": "100",
            "fullSpell": "eerduosishi",
            "level": 2,
            "name": "鄂尔多斯市",
            "parent": "5"
          },
          {
            "areas": [
              {
                "code": "1493",
                "fullSpell": "siziwangqi",
                "level": 3,
                "name": "四子王旗",
                "parent": "103"
              },
              {
                "code": "1491",
                "fullSpell": "zhuozixian",
                "level": 3,
                "name": "卓资县",
                "parent": "103"
              },
              {
                "code": "1494",
                "fullSpell": "chahaeryouyizhongqi",
                "level": 3,
                "name": "察哈尔右翼中旗",
                "parent": "103"
              },
              {
                "code": "1495",
                "fullSpell": "chahaeryouyiqianqi",
                "level": 3,
                "name": "察哈尔右翼前旗",
                "parent": "103"
              },
              {
                "code": "1496",
                "fullSpell": "chahaeryouyihouqi",
                "level": 3,
                "name": "察哈尔右翼后旗",
                "parent": "103"
              },
              {
                "code": "1489",
                "fullSpell": "liangchengxian",
                "level": 3,
                "name": "凉城县",
                "parent": "103"
              },
              {
                "code": "1492",
                "fullSpell": "shangdouxian",
                "level": 3,
                "name": "商都县",
                "parent": "103"
              },
              {
                "code": "1488",
                "fullSpell": "xinghexian",
                "level": 3,
                "name": "兴和县",
                "parent": "103"
              },
              {
                "code": "1487",
                "fullSpell": "fengzhenshi",
                "level": 3,
                "name": "丰镇市",
                "parent": "103"
              },
              {
                "code": "1490",
                "fullSpell": "huadexian",
                "level": 3,
                "name": "化德县",
                "parent": "103"
              },
              {
                "code": "1497",
                "fullSpell": "jiningqu",
                "level": 3,
                "name": "集宁区",
                "parent": "103"
              }
            ],
            "code": "103",
            "fullSpell": "wulanchabushi",
            "level": 2,
            "name": "乌兰察布市",
            "parent": "5"
          }
        ],
        "code": "5",
        "fullSpell": "nameng",
        "level": 1,
        "name": "内蒙古自治区"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "4908",
                "fullSpell": "lingwushi",
                "level": 3,
                "name": "灵武市",
                "parent": "470"
              },
              {
                "code": "4906",
                "fullSpell": "xingqingqu",
                "level": 3,
                "name": "兴庆区",
                "parent": "470"
              },
              {
                "code": "4909",
                "fullSpell": "xixiaqu",
                "level": 3,
                "name": "西夏区",
                "parent": "470"
              },
              {
                "code": "4910",
                "fullSpell": "helanxian",
                "level": 3,
                "name": "贺兰县",
                "parent": "470"
              },
              {
                "code": "4907",
                "fullSpell": "yongningxian",
                "level": 3,
                "name": "永宁县",
                "parent": "470"
              },
              {
                "code": "4911",
                "fullSpell": "jinfengqu",
                "level": 3,
                "name": "金凤区",
                "parent": "470"
              }
            ],
            "code": "470",
            "fullSpell": "yinchuanshi",
            "level": 2,
            "name": "银川市",
            "parent": "30"
          },
          {
            "areas": [
              {
                "code": "4912",
                "fullSpell": "dawukouqu",
                "level": 3,
                "name": "大武口区",
                "parent": "471"
              },
              {
                "code": "4913",
                "fullSpell": "pingluoxian",
                "level": 3,
                "name": "平罗县",
                "parent": "471"
              },
              {
                "code": "4914",
                "fullSpell": "huinongqu",
                "level": 3,
                "name": "惠农区",
                "parent": "471"
              }
            ],
            "code": "471",
            "fullSpell": "shizuishanshi",
            "level": 2,
            "name": "石嘴山市",
            "parent": "30"
          },
          {
            "areas": [
              {
                "code": "4926",
                "fullSpell": "haiyuanxian",
                "level": 3,
                "name": "海原县",
                "parent": "474"
              },
              {
                "code": "4924",
                "fullSpell": "zhongningxian",
                "level": 3,
                "name": "中宁县",
                "parent": "474"
              },
              {
                "code": "4925",
                "fullSpell": "shapotouqu",
                "level": 3,
                "name": "沙坡头区",
                "parent": "474"
              }
            ],
            "code": "474",
            "fullSpell": "zhongweishi",
            "level": 2,
            "name": "中卫市",
            "parent": "30"
          },
          {
            "areas": [
              {
                "code": "4920",
                "fullSpell": "pengyangxian",
                "level": 3,
                "name": "彭阳县",
                "parent": "473"
              },
              {
                "code": "4921",
                "fullSpell": "jingyuanxian",
                "level": 3,
                "name": "泾源县",
                "parent": "473"
              },
              {
                "code": "4922",
                "fullSpell": "xijixian",
                "level": 3,
                "name": "西吉县",
                "parent": "473"
              },
              {
                "code": "4919",
                "fullSpell": "yuanzhouqu",
                "level": 3,
                "name": "原州区",
                "parent": "473"
              },
              {
                "code": "4923",
                "fullSpell": "longdexian",
                "level": 3,
                "name": "隆德县",
                "parent": "473"
              }
            ],
            "code": "473",
            "fullSpell": "guyuanshi",
            "level": 2,
            "name": "固原市",
            "parent": "30"
          },
          {
            "areas": [
              {
                "code": "4917",
                "fullSpell": "yanchixian",
                "level": 3,
                "name": "盐池县",
                "parent": "472"
              },
              {
                "code": "4918",
                "fullSpell": "qingtongxiashi",
                "level": 3,
                "name": "青铜峡市",
                "parent": "472"
              },
              {
                "code": "4915",
                "fullSpell": "litongqu",
                "level": 3,
                "name": "利通区",
                "parent": "472"
              },
              {
                "code": "4916",
                "fullSpell": "tongxinxian",
                "level": 3,
                "name": "同心县",
                "parent": "472"
              }
            ],
            "code": "472",
            "fullSpell": "wuzhongshi",
            "level": 2,
            "name": "吴忠市",
            "parent": "30"
          }
        ],
        "code": "30",
        "fullSpell": "ningxia",
        "level": 1,
        "name": "宁夏回族自治区"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "4885",
                "fullSpell": "guidexian",
                "level": 3,
                "name": "贵德县",
                "parent": "466"
              },
              {
                "code": "4884",
                "fullSpell": "guinanxian",
                "level": 3,
                "name": "贵南县",
                "parent": "466"
              },
              {
                "code": "4882",
                "fullSpell": "xinghaixian",
                "level": 3,
                "name": "兴海县",
                "parent": "466"
              },
              {
                "code": "4883",
                "fullSpell": "tongdexian",
                "level": 3,
                "name": "同德县",
                "parent": "466"
              },
              {
                "code": "4881",
                "fullSpell": "gonghexian",
                "level": 3,
                "name": "共和县",
                "parent": "466"
              }
            ],
            "code": "466",
            "fullSpell": "hainancangzuzizhizhou",
            "level": 2,
            "name": "海南藏族自治州",
            "parent": "29"
          },
          {
            "areas": [
              {
                "code": "4889",
                "fullSpell": "banmaxian",
                "level": 3,
                "name": "班玛县",
                "parent": "467"
              },
              {
                "code": "4891",
                "fullSpell": "darixian",
                "level": 3,
                "name": "达日县",
                "parent": "467"
              },
              {
                "code": "4890",
                "fullSpell": "gandexian",
                "level": 3,
                "name": "甘德县",
                "parent": "467"
              },
              {
                "code": "4888",
                "fullSpell": "maqinxian",
                "level": 3,
                "name": "玛沁县",
                "parent": "467"
              },
              {
                "code": "4886",
                "fullSpell": "jiuzhixian",
                "level": 3,
                "name": "久治县",
                "parent": "467"
              },
              {
                "code": "4887",
                "fullSpell": "maduoxian",
                "level": 3,
                "name": "玛多县",
                "parent": "467"
              }
            ],
            "code": "467",
            "fullSpell": "guoluocangzuzizhizhou",
            "level": 2,
            "name": "果洛藏族自治州",
            "parent": "29"
          },
          {
            "areas": [
              {
                "code": "4878",
                "fullSpell": "jianzhaxian",
                "level": 3,
                "name": "尖扎县",
                "parent": "465"
              },
              {
                "code": "4879",
                "fullSpell": "henanmengguzuzizhixian",
                "level": 3,
                "name": "河南蒙古族自治县",
                "parent": "465"
              },
              {
                "code": "4880",
                "fullSpell": "zekuxian",
                "level": 3,
                "name": "泽库县",
                "parent": "465"
              },
              {
                "code": "4877",
                "fullSpell": "tongrenxian",
                "level": 3,
                "name": "同仁县",
                "parent": "465"
              }
            ],
            "code": "465",
            "fullSpell": "huangnancangzuzizhizhou",
            "level": 2,
            "name": "黄南藏族自治州",
            "parent": "29"
          },
          {
            "areas": [
              {
                "code": "4900",
                "fullSpell": "dachaidanxingzhengqu",
                "level": 3,
                "name": "大柴旦行政区",
                "parent": "469"
              },
              {
                "code": "4902",
                "fullSpell": "delinghashi",
                "level": 3,
                "name": "德令哈市",
                "parent": "469"
              },
              {
                "code": "4899",
                "fullSpell": "lenghuxingzhengqu",
                "level": 3,
                "name": "冷湖行政区",
                "parent": "469"
              },
              {
                "code": "4905",
                "fullSpell": "doulanxian",
                "level": 3,
                "name": "都兰县",
                "parent": "469"
              },
              {
                "code": "4901",
                "fullSpell": "tianjunxian",
                "level": 3,
                "name": "天峻县",
                "parent": "469"
              },
              {
                "code": "4903",
                "fullSpell": "geermushi",
                "level": 3,
                "name": "格尔木市",
                "parent": "469"
              },
              {
                "code": "4898",
                "fullSpell": "wulanxian",
                "level": 3,
                "name": "乌兰县",
                "parent": "469"
              },
              {
                "code": "4904",
                "fullSpell": "mangyaxingzhengqu",
                "level": 3,
                "name": "茫崖行政区",
                "parent": "469"
              }
            ],
            "code": "469",
            "fullSpell": "haiximengguzucangzuzizhizhou",
            "level": 2,
            "name": "海西蒙古族藏族自治州",
            "parent": "29"
          },
          {
            "areas": [
              {
                "code": "4897",
                "fullSpell": "chenduoxian",
                "level": 3,
                "name": "称多县",
                "parent": "468"
              },
              {
                "code": "4895",
                "fullSpell": "zhiduoxian",
                "level": 3,
                "name": "治多县",
                "parent": "468"
              },
              {
                "code": "4892",
                "fullSpell": "nangqianxian",
                "level": 3,
                "name": "囊谦县",
                "parent": "468"
              },
              {
                "code": "4893",
                "fullSpell": "qumalaixian",
                "level": 3,
                "name": "曲麻莱县",
                "parent": "468"
              },
              {
                "code": "4894",
                "fullSpell": "zaduoxian",
                "level": 3,
                "name": "杂多县",
                "parent": "468"
              },
              {
                "code": "4896",
                "fullSpell": "yushuxian",
                "level": 3,
                "name": "玉树市",
                "parent": "468"
              }
            ],
            "code": "468",
            "fullSpell": "yushucangzuzizhizhou",
            "level": 2,
            "name": "玉树藏族自治州",
            "parent": "29"
          },
          {
            "areas": [
              {
                "code": "4870",
                "fullSpell": "pinganqu",
                "level": 3,
                "name": "平安区",
                "parent": "463"
              },
              {
                "code": "4867",
                "fullSpell": "ledouqu",
                "level": 3,
                "name": "乐都区",
                "parent": "463"
              },
              {
                "code": "4868",
                "fullSpell": "huzhutuzuzizhixian",
                "level": 3,
                "name": "互助土族自治县",
                "parent": "463"
              },
              {
                "code": "4871",
                "fullSpell": "xunhuasalazuzizhixian",
                "level": 3,
                "name": "循化撒拉族自治县",
                "parent": "463"
              },
              {
                "code": "4869",
                "fullSpell": "hualonghuizuzizhixian",
                "level": 3,
                "name": "化隆回族自治县",
                "parent": "463"
              },
              {
                "code": "4872",
                "fullSpell": "minhehuizutuzuzizhixian",
                "level": 3,
                "name": "民和回族土族自治县",
                "parent": "463"
              }
            ],
            "code": "463",
            "fullSpell": "haidongshi",
            "level": 2,
            "name": "海东市",
            "parent": "29"
          },
          {
            "areas": [
              {
                "code": "4874",
                "fullSpell": "haiyanxian",
                "level": 3,
                "name": "海晏县",
                "parent": "464"
              },
              {
                "code": "4873",
                "fullSpell": "gangchaxian",
                "level": 3,
                "name": "刚察县",
                "parent": "464"
              },
              {
                "code": "4875",
                "fullSpell": "qilianxian",
                "level": 3,
                "name": "祁连县",
                "parent": "464"
              },
              {
                "code": "4876",
                "fullSpell": "menyuanhuizuzizhixian",
                "level": 3,
                "name": "门源回族自治县",
                "parent": "464"
              }
            ],
            "code": "464",
            "fullSpell": "haibeicangzuzizhizhou",
            "level": 2,
            "name": "海北藏族自治州",
            "parent": "29"
          },
          {
            "areas": [
              {
                "code": "4866",
                "fullSpell": "huangyuanxian",
                "level": 3,
                "name": "湟源县",
                "parent": "462"
              },
              {
                "code": "4862",
                "fullSpell": "chengbeiqu",
                "level": 3,
                "name": "城北区",
                "parent": "462"
              },
              {
                "code": "4863",
                "fullSpell": "chengxiqu",
                "level": 3,
                "name": "城西区",
                "parent": "462"
              },
              {
                "code": "4864",
                "fullSpell": "datonghuizutuzuzizhixian",
                "level": 3,
                "name": "大通回族土族自治县",
                "parent": "462"
              },
              {
                "code": "4861",
                "fullSpell": "chengzhongqu",
                "level": 3,
                "name": "城中区",
                "parent": "462"
              },
              {
                "code": "4865",
                "fullSpell": "huangzhongxian",
                "level": 3,
                "name": "湟中县",
                "parent": "462"
              },
              {
                "code": "4860",
                "fullSpell": "chengdongqu",
                "level": 3,
                "name": "城东区",
                "parent": "462"
              }
            ],
            "code": "462",
            "fullSpell": "xiningshi",
            "level": 2,
            "name": "西宁市",
            "parent": "29"
          }
        ],
        "code": "29",
        "fullSpell": "qinghaisheng",
        "level": 1,
        "name": "青海省"
      },
      {
        "citys": [

        ],
        "code": "467811121",
        "fullSpell": "quanguo",
        "level": 1,
        "name": "全国"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "2640",
                "fullSpell": "zhanhuaqu",
                "level": 3,
                "name": "沾化区",
                "parent": "238"
              },
              {
                "code": "2637",
                "fullSpell": "boxingxian",
                "level": 3,
                "name": "博兴县",
                "parent": "238"
              },
              {
                "code": "2638",
                "fullSpell": "huiminxian",
                "level": 3,
                "name": "惠民县",
                "parent": "238"
              },
              {
                "code": "2639",
                "fullSpell": "wudixian",
                "level": 3,
                "name": "无棣县",
                "parent": "238"
              },
              {
                "code": "2643",
                "fullSpell": "yangxinxian",
                "level": 3,
                "name": "阳信县",
                "parent": "238"
              },
              {
                "code": "2642",
                "fullSpell": "zoupingxian",
                "level": 3,
                "name": "邹平县",
                "parent": "238"
              },
              {
                "code": "2641",
                "fullSpell": "binchengqu",
                "level": 3,
                "name": "滨城区",
                "parent": "238"
              }
            ],
            "code": "238",
            "fullSpell": "binzhoushi",
            "level": 2,
            "name": "滨州市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2562",
                "fullSpell": "laiyangshi",
                "level": 3,
                "name": "莱阳市",
                "parent": "228"
              },
              {
                "code": "2560",
                "fullSpell": "laishanqu",
                "level": 3,
                "name": "莱山区",
                "parent": "228"
              },
              {
                "code": "2555",
                "fullSpell": "qixiashi",
                "level": 3,
                "name": "栖霞市",
                "parent": "228"
              },
              {
                "code": "2554",
                "fullSpell": "zhaoyuanshi",
                "level": 3,
                "name": "招远市",
                "parent": "228"
              },
              {
                "code": "2559",
                "fullSpell": "zhifuqu",
                "level": 3,
                "name": "芝罘区",
                "parent": "228"
              },
              {
                "code": "2556",
                "fullSpell": "haiyangshi",
                "level": 3,
                "name": "海阳市",
                "parent": "228"
              },
              {
                "code": "2558",
                "fullSpell": "fushanqu",
                "level": 3,
                "name": "福山区",
                "parent": "228"
              },
              {
                "code": "2561",
                "fullSpell": "laizhoushi",
                "level": 3,
                "name": "莱州市",
                "parent": "228"
              },
              {
                "code": "2565",
                "fullSpell": "longkoushi",
                "level": 3,
                "name": "龙口市",
                "parent": "228"
              },
              {
                "code": "2563",
                "fullSpell": "penglaishi",
                "level": 3,
                "name": "蓬莱市",
                "parent": "228"
              },
              {
                "code": "2564",
                "fullSpell": "changdaoxian",
                "level": 3,
                "name": "长岛县",
                "parent": "228"
              },
              {
                "code": "2557",
                "fullSpell": "moupingqu",
                "level": 3,
                "name": "牟平区",
                "parent": "228"
              }
            ],
            "code": "228",
            "fullSpell": "yantaishi",
            "level": 2,
            "name": "烟台市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2615",
                "fullSpell": "mengyinxian",
                "level": 3,
                "name": "蒙阴县",
                "parent": "235"
              },
              {
                "code": "2614",
                "fullSpell": "junanxian",
                "level": 3,
                "name": "莒南县",
                "parent": "235"
              },
              {
                "code": "2607",
                "fullSpell": "lanshanqu",
                "level": 3,
                "name": "兰山区",
                "parent": "235"
              },
              {
                "code": "2612",
                "fullSpell": "luozhuangqu",
                "level": 3,
                "name": "罗庄区",
                "parent": "235"
              },
              {
                "code": "2610",
                "fullSpell": "yishuixian",
                "level": 3,
                "name": "沂水县",
                "parent": "235"
              },
              {
                "code": "2609",
                "fullSpell": "yinanxian",
                "level": 3,
                "name": "沂南县",
                "parent": "235"
              },
              {
                "code": "2617",
                "fullSpell": "tanchengxian",
                "level": 3,
                "name": "郯城县",
                "parent": "235"
              },
              {
                "code": "2613",
                "fullSpell": "lanlingxian",
                "level": 3,
                "name": "兰陵县",
                "parent": "235"
              },
              {
                "code": "2611",
                "fullSpell": "hedongqu",
                "level": 3,
                "name": "河东区",
                "parent": "235"
              },
              {
                "code": "2606",
                "fullSpell": "linshuxian",
                "level": 3,
                "name": "临沭县",
                "parent": "235"
              },
              {
                "code": "2608",
                "fullSpell": "pingyixian",
                "level": 3,
                "name": "平邑县",
                "parent": "235"
              },
              {
                "code": "2616",
                "fullSpell": "feixian",
                "level": 3,
                "name": "费县",
                "parent": "235"
              }
            ],
            "code": "235",
            "fullSpell": "linyishi",
            "level": 2,
            "name": "临沂市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2619",
                "fullSpell": "lelingshi",
                "level": 3,
                "name": "乐陵市",
                "parent": "236"
              },
              {
                "code": "2625",
                "fullSpell": "wuchengxian",
                "level": 3,
                "name": "武城县",
                "parent": "236"
              },
              {
                "code": "2624",
                "fullSpell": "dechengqu",
                "level": 3,
                "name": "德城区",
                "parent": "236"
              },
              {
                "code": "2620",
                "fullSpell": "xiajinxian",
                "level": 3,
                "name": "夏津县",
                "parent": "236"
              },
              {
                "code": "2618",
                "fullSpell": "linyixian",
                "level": 3,
                "name": "临邑县",
                "parent": "236"
              },
              {
                "code": "2623",
                "fullSpell": "qingyunxian",
                "level": 3,
                "name": "庆云县",
                "parent": "236"
              },
              {
                "code": "2627",
                "fullSpell": "lingchengqu",
                "level": 3,
                "name": "陵城区",
                "parent": "236"
              },
              {
                "code": "2621",
                "fullSpell": "ningjinxian",
                "level": 3,
                "name": "宁津县",
                "parent": "236"
              },
              {
                "code": "2622",
                "fullSpell": "pingyuanxian",
                "level": 3,
                "name": "平原县",
                "parent": "236"
              },
              {
                "code": "2626",
                "fullSpell": "yuchengshi",
                "level": 3,
                "name": "禹城市",
                "parent": "236"
              },
              {
                "code": "2628",
                "fullSpell": "qihexian",
                "level": 3,
                "name": "齐河县",
                "parent": "236"
              }
            ],
            "code": "236",
            "fullSpell": "dezhoushi",
            "level": 2,
            "name": "德州市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2645",
                "fullSpell": "danxian",
                "level": 3,
                "name": "单县",
                "parent": "239"
              },
              {
                "code": "2648",
                "fullSpell": "chengwuxian",
                "level": 3,
                "name": "成武县",
                "parent": "239"
              },
              {
                "code": "2650",
                "fullSpell": "mudanqu",
                "level": 3,
                "name": "牡丹区",
                "parent": "239"
              },
              {
                "code": "2646",
                "fullSpell": "dingtaoqu",
                "level": 3,
                "name": "定陶区",
                "parent": "239"
              },
              {
                "code": "2649",
                "fullSpell": "caoxian",
                "level": 3,
                "name": "曹县",
                "parent": "239"
              },
              {
                "code": "2647",
                "fullSpell": "juyexian",
                "level": 3,
                "name": "巨野县",
                "parent": "239"
              },
              {
                "code": "2644",
                "fullSpell": "dongmingxian",
                "level": 3,
                "name": "东明县",
                "parent": "239"
              },
              {
                "code": "2651",
                "fullSpell": "yunchengxian",
                "level": 3,
                "name": "郓城县",
                "parent": "239"
              },
              {
                "code": "2652",
                "fullSpell": "juanchengxian",
                "level": 3,
                "name": "鄄城县",
                "parent": "239"
              }
            ],
            "code": "239",
            "fullSpell": "hezeshi",
            "level": 2,
            "name": "菏泽市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2577",
                "fullSpell": "gaomishi",
                "level": 3,
                "name": "高密市",
                "parent": "229"
              },
              {
                "code": "2567",
                "fullSpell": "fangziqu",
                "level": 3,
                "name": "坊子区",
                "parent": "229"
              },
              {
                "code": "2573",
                "fullSpell": "changyishi",
                "level": 3,
                "name": "昌邑市",
                "parent": "229"
              },
              {
                "code": "2566",
                "fullSpell": "linquxian",
                "level": 3,
                "name": "临朐县",
                "parent": "229"
              },
              {
                "code": "2569",
                "fullSpell": "anqiushi",
                "level": 3,
                "name": "安丘市",
                "parent": "229"
              },
              {
                "code": "2572",
                "fullSpell": "changlexian",
                "level": 3,
                "name": "昌乐县",
                "parent": "229"
              },
              {
                "code": "2575",
                "fullSpell": "zhuchengshi",
                "level": 3,
                "name": "诸城市",
                "parent": "229"
              },
              {
                "code": "2574",
                "fullSpell": "weichengqu",
                "level": 3,
                "name": "潍城区",
                "parent": "229"
              },
              {
                "code": "2576",
                "fullSpell": "qingzhoushi",
                "level": 3,
                "name": "青州市",
                "parent": "229"
              },
              {
                "code": "2568",
                "fullSpell": "kuiwenqu",
                "level": 3,
                "name": "奎文区",
                "parent": "229"
              },
              {
                "code": "2571",
                "fullSpell": "shouguangshi",
                "level": 3,
                "name": "寿光市",
                "parent": "229"
              },
              {
                "code": "2570",
                "fullSpell": "hantingqu",
                "level": 3,
                "name": "寒亭区",
                "parent": "229"
              }
            ],
            "code": "229",
            "fullSpell": "weifangshi",
            "level": 2,
            "name": "潍坊市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2604",
                "fullSpell": "laichengqu",
                "level": 3,
                "name": "莱城区",
                "parent": "234"
              },
              {
                "code": "2605",
                "fullSpell": "gangchengqu",
                "level": 3,
                "name": "钢城区",
                "parent": "234"
              }
            ],
            "code": "234",
            "fullSpell": "laiwushi",
            "level": 2,
            "name": "莱芜市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2539",
                "fullSpell": "huantaixian",
                "level": 3,
                "name": "桓台县",
                "parent": "225"
              },
              {
                "code": "2542",
                "fullSpell": "gaoqingxian",
                "level": 3,
                "name": "高青县",
                "parent": "225"
              },
              {
                "code": "2538",
                "fullSpell": "zhangdianqu",
                "level": 3,
                "name": "张店区",
                "parent": "225"
              },
              {
                "code": "2540",
                "fullSpell": "yiyuanxian",
                "level": 3,
                "name": "沂源县",
                "parent": "225"
              },
              {
                "code": "2541",
                "fullSpell": "zichuanqu",
                "level": 3,
                "name": "淄川区",
                "parent": "225"
              },
              {
                "code": "2536",
                "fullSpell": "boshanqu",
                "level": 3,
                "name": "博山区",
                "parent": "225"
              },
              {
                "code": "2537",
                "fullSpell": "zhoucunqu",
                "level": 3,
                "name": "周村区",
                "parent": "225"
              },
              {
                "code": "2535",
                "fullSpell": "linziqu",
                "level": 3,
                "name": "临淄区",
                "parent": "225"
              }
            ],
            "code": "225",
            "fullSpell": "ziboshi",
            "level": 2,
            "name": "淄博市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2588",
                "fullSpell": "jinxiangxian",
                "level": 3,
                "name": "金乡县",
                "parent": "230"
              },
              {
                "code": "2586",
                "fullSpell": "sishuixian",
                "level": 3,
                "name": "泗水县",
                "parent": "230"
              },
              {
                "code": "2581",
                "fullSpell": "shizhongqu",
                "level": 3,
                "name": "市中区",
                "parent": "230"
              },
              {
                "code": "2579",
                "fullSpell": "yanzhouqu",
                "level": 3,
                "name": "兖州区",
                "parent": "230"
              },
              {
                "code": "2587",
                "fullSpell": "zouchengshi",
                "level": 3,
                "name": "邹城市",
                "parent": "230"
              },
              {
                "code": "2585",
                "fullSpell": "wenshangxian",
                "level": 3,
                "name": "汶上县",
                "parent": "230"
              },
              {
                "code": "2583",
                "fullSpell": "qufushi",
                "level": 3,
                "name": "曲阜市",
                "parent": "230"
              },
              {
                "code": "2582",
                "fullSpell": "weishanxian",
                "level": 3,
                "name": "微山县",
                "parent": "230"
              },
              {
                "code": "2580",
                "fullSpell": "jiaxiangxian",
                "level": 3,
                "name": "嘉祥县",
                "parent": "230"
              },
              {
                "code": "2578",
                "fullSpell": "renchengqu",
                "level": 3,
                "name": "任城区",
                "parent": "230"
              },
              {
                "code": "2584",
                "fullSpell": "liangshanxian",
                "level": 3,
                "name": "梁山县",
                "parent": "230"
              },
              {
                "code": "2589",
                "fullSpell": "yutaixian",
                "level": 3,
                "name": "鱼台县",
                "parent": "230"
              }
            ],
            "code": "230",
            "fullSpell": "jiningshi",
            "level": 2,
            "name": "济宁市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2550",
                "fullSpell": "lijinxian",
                "level": 3,
                "name": "利津县",
                "parent": "227"
              },
              {
                "code": "2549",
                "fullSpell": "dongyingqu",
                "level": 3,
                "name": "东营区",
                "parent": "227"
              },
              {
                "code": "2553",
                "fullSpell": "hekouqu",
                "level": 3,
                "name": "河口区",
                "parent": "227"
              },
              {
                "code": "2552",
                "fullSpell": "guangraoxian",
                "level": 3,
                "name": "广饶县",
                "parent": "227"
              },
              {
                "code": "2551",
                "fullSpell": "kenlixian",
                "level": 3,
                "name": "垦利区",
                "parent": "227"
              }
            ],
            "code": "227",
            "fullSpell": "dongyingshi",
            "level": 2,
            "name": "东营市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2602",
                "fullSpell": "lanshanqu",
                "level": 3,
                "name": "岚山区",
                "parent": "233"
              },
              {
                "code": "2600",
                "fullSpell": "donggangqu",
                "level": 3,
                "name": "东港区",
                "parent": "233"
              },
              {
                "code": "2601",
                "fullSpell": "wulianxian",
                "level": 3,
                "name": "五莲县",
                "parent": "233"
              },
              {
                "code": "2603",
                "fullSpell": "juxian",
                "level": 3,
                "name": "莒县",
                "parent": "233"
              }
            ],
            "code": "233",
            "fullSpell": "rizhaoshi",
            "level": 2,
            "name": "日照市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2595",
                "fullSpell": "feichengshi",
                "level": 3,
                "name": "肥城市",
                "parent": "231"
              },
              {
                "code": "2591",
                "fullSpell": "ningyangxian",
                "level": 3,
                "name": "宁阳县",
                "parent": "231"
              },
              {
                "code": "2590",
                "fullSpell": "dongpingxian",
                "level": 3,
                "name": "东平县",
                "parent": "231"
              },
              {
                "code": "2593",
                "fullSpell": "xintaishi",
                "level": 3,
                "name": "新泰市",
                "parent": "231"
              },
              {
                "code": "2594",
                "fullSpell": "taishanqu",
                "level": 3,
                "name": "泰山区",
                "parent": "231"
              },
              {
                "code": "2592",
                "fullSpell": "daiyuequ",
                "level": 3,
                "name": "岱岳区",
                "parent": "231"
              }
            ],
            "code": "231",
            "fullSpell": "taianshi",
            "level": 2,
            "name": "泰安市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2543",
                "fullSpell": "taierzhuangqu",
                "level": 3,
                "name": "台儿庄区",
                "parent": "226"
              },
              {
                "code": "2547",
                "fullSpell": "tengzhoushi",
                "level": 3,
                "name": "滕州市",
                "parent": "226"
              },
              {
                "code": "2546",
                "fullSpell": "shizhongqu",
                "level": 3,
                "name": "市中区",
                "parent": "226"
              },
              {
                "code": "2545",
                "fullSpell": "yichengqu",
                "level": 3,
                "name": "峄城区",
                "parent": "226"
              },
              {
                "code": "2548",
                "fullSpell": "xuechengqu",
                "level": 3,
                "name": "薛城区",
                "parent": "226"
              },
              {
                "code": "2544",
                "fullSpell": "shantingqu",
                "level": 3,
                "name": "山亭区",
                "parent": "226"
              }
            ],
            "code": "226",
            "fullSpell": "zaozhuangshi",
            "level": 2,
            "name": "枣庄市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2629",
                "fullSpell": "dongchangfuqu",
                "level": 3,
                "name": "东昌府区",
                "parent": "237"
              },
              {
                "code": "2631",
                "fullSpell": "linqingshi",
                "level": 3,
                "name": "临清市",
                "parent": "237"
              },
              {
                "code": "2632",
                "fullSpell": "guanxian",
                "level": 3,
                "name": "冠县",
                "parent": "237"
              },
              {
                "code": "2634",
                "fullSpell": "xinxian",
                "level": 3,
                "name": "莘县",
                "parent": "237"
              },
              {
                "code": "2636",
                "fullSpell": "gaotangxian",
                "level": 3,
                "name": "高唐县",
                "parent": "237"
              },
              {
                "code": "2630",
                "fullSpell": "dongaxian",
                "level": 3,
                "name": "东阿县",
                "parent": "237"
              },
              {
                "code": "2635",
                "fullSpell": "yangguxian",
                "level": 3,
                "name": "阳谷县",
                "parent": "237"
              },
              {
                "code": "2633",
                "fullSpell": "chipingxian",
                "level": 3,
                "name": "茌平县",
                "parent": "237"
              }
            ],
            "code": "237",
            "fullSpell": "liaochengshi",
            "level": 2,
            "name": "聊城市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2597",
                "fullSpell": "wendengqu",
                "level": 3,
                "name": "文登区",
                "parent": "232"
              },
              {
                "code": "2596",
                "fullSpell": "rushanshi",
                "level": 3,
                "name": "乳山市",
                "parent": "232"
              },
              {
                "code": "2598",
                "fullSpell": "huancuiqu",
                "level": 3,
                "name": "环翠区",
                "parent": "232"
              },
              {
                "code": "2599",
                "fullSpell": "rongchengshi",
                "level": 3,
                "name": "荣成市",
                "parent": "232"
              }
            ],
            "code": "232",
            "fullSpell": "weihaishi",
            "level": 2,
            "name": "威海市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2529",
                "fullSpell": "pingdushi",
                "level": 3,
                "name": "平度市",
                "parent": "224"
              },
              {
                "code": "2526",
                "fullSpell": "laoshanqu",
                "level": 3,
                "name": "崂山区",
                "parent": "224"
              },
              {
                "code": "2523",
                "fullSpell": "jimoqu",
                "level": 3,
                "name": "即墨区",
                "parent": "224"
              },
              {
                "code": "2525",
                "fullSpell": "chengyangqu",
                "level": 3,
                "name": "城阳区",
                "parent": "224"
              },
              {
                "code": "2533",
                "fullSpell": "laixishi",
                "level": 3,
                "name": "莱西市",
                "parent": "224"
              },
              {
                "code": "2524",
                "fullSpell": "sifangqu",
                "level": 3,
                "name": "四方区",
                "parent": "224"
              },
              {
                "code": "2527",
                "fullSpell": "shibeiqu",
                "level": 3,
                "name": "市北区",
                "parent": "224"
              },
              {
                "code": "2528",
                "fullSpell": "shinanqu",
                "level": 3,
                "name": "市南区",
                "parent": "224"
              },
              {
                "code": "2531",
                "fullSpell": "jiaonanqu",
                "level": 3,
                "name": "胶南区",
                "parent": "224"
              },
              {
                "code": "2530",
                "fullSpell": "licangqu",
                "level": 3,
                "name": "李沧区",
                "parent": "224"
              },
              {
                "code": "2532",
                "fullSpell": "jiaozhoushi",
                "level": 3,
                "name": "胶州市",
                "parent": "224"
              },
              {
                "code": "2534",
                "fullSpell": "huangdaoqu",
                "level": 3,
                "name": "黄岛区",
                "parent": "224"
              }
            ],
            "code": "224",
            "fullSpell": "qingdaoshi",
            "level": 2,
            "name": "青岛市",
            "parent": "15"
          },
          {
            "areas": [
              {
                "code": "2519",
                "fullSpell": "huaiyinqu",
                "level": 3,
                "name": "槐荫区",
                "parent": "223"
              },
              {
                "code": "2516",
                "fullSpell": "tianqiaoqu",
                "level": 3,
                "name": "天桥区",
                "parent": "223"
              },
              {
                "code": "2517",
                "fullSpell": "shizhongqu",
                "level": 3,
                "name": "市中区",
                "parent": "223"
              },
              {
                "code": "2513",
                "fullSpell": "lixiaqu",
                "level": 3,
                "name": "历下区",
                "parent": "223"
              },
              {
                "code": "2514",
                "fullSpell": "lichengqu",
                "level": 3,
                "name": "历城区",
                "parent": "223"
              },
              {
                "code": "2520",
                "fullSpell": "jiyangxian",
                "level": 3,
                "name": "济阳县",
                "parent": "223"
              },
              {
                "code": "2522",
                "fullSpell": "changqingqu",
                "level": 3,
                "name": "长清区",
                "parent": "223"
              },
              {
                "code": "2518",
                "fullSpell": "pingyinxian",
                "level": 3,
                "name": "平阴县",
                "parent": "223"
              },
              {
                "code": "2521",
                "fullSpell": "zhangqiushi",
                "level": 3,
                "name": "章丘区",
                "parent": "223"
              },
              {
                "code": "2515",
                "fullSpell": "shanghexian",
                "level": 3,
                "name": "商河县",
                "parent": "223"
              }
            ],
            "code": "223",
            "fullSpell": "jinanshi",
            "level": 2,
            "name": "济南市",
            "parent": "15"
          }
        ],
        "code": "15",
        "fullSpell": "shandongsheng",
        "level": 1,
        "name": "山东省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "152",
                "fullSpell": "minxingqu",
                "level": 3,
                "name": "闵行区",
                "parent": "5026"
              },
              {
                "code": "158",
                "fullSpell": "qingpuqu",
                "level": 3,
                "name": "青浦区",
                "parent": "5026"
              },
              {
                "code": "146",
                "fullSpell": "changningqu",
                "level": 3,
                "name": "长宁区",
                "parent": "5026"
              },
              {
                "code": "153",
                "fullSpell": "baoshanqu",
                "level": 3,
                "name": "宝山区",
                "parent": "5026"
              },
              {
                "code": "154",
                "fullSpell": "jiadingqu",
                "level": 3,
                "name": "嘉定区",
                "parent": "5026"
              },
              {
                "code": "157",
                "fullSpell": "songjiangqu",
                "level": 3,
                "name": "松江区",
                "parent": "5026"
              },
              {
                "code": "147",
                "fullSpell": "jinganqu",
                "level": 3,
                "name": "静安区",
                "parent": "5026"
              },
              {
                "code": "155",
                "fullSpell": "pudongxinqu",
                "level": 3,
                "name": "浦东新区",
                "parent": "5026"
              },
              {
                "code": "151",
                "fullSpell": "yangpuqu",
                "level": 3,
                "name": "杨浦区",
                "parent": "5026"
              },
              {
                "code": "161",
                "fullSpell": "chongmingxian",
                "level": 3,
                "name": "崇明区",
                "parent": "5026"
              },
              {
                "code": "150",
                "fullSpell": "hongkouqu",
                "level": 3,
                "name": "虹口区",
                "parent": "5026"
              },
              {
                "code": "156",
                "fullSpell": "jinshanqu",
                "level": 3,
                "name": "金山区",
                "parent": "5026"
              },
              {
                "code": "145",
                "fullSpell": "xuhuiqu",
                "level": 3,
                "name": "徐汇区",
                "parent": "5026"
              },
              {
                "code": "143",
                "fullSpell": "huangpuqu",
                "level": 3,
                "name": "黄浦区",
                "parent": "5026"
              },
              {
                "code": "148",
                "fullSpell": "putuoqu",
                "level": 3,
                "name": "普陀区",
                "parent": "5026"
              },
              {
                "code": "160",
                "fullSpell": "fengxianqu",
                "level": 3,
                "name": "奉贤区",
                "parent": "5026"
              }
            ],
            "code": "5026",
            "fullSpell": "shanghaishi",
            "level": 2,
            "name": "上海市",
            "parent": "9"
          }
        ],
        "code": "9",
        "fullSpell": "shanghai",
        "level": 1,
        "name": "上海"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "4727",
                "fullSpell": "yanchangxian",
                "level": 3,
                "name": "延长县",
                "parent": "443"
              },
              {
                "code": "4724",
                "fullSpell": "baotaqu",
                "level": 3,
                "name": "宝塔区",
                "parent": "443"
              },
              {
                "code": "4722",
                "fullSpell": "ansaiqu",
                "level": 3,
                "name": "安塞区",
                "parent": "443"
              },
              {
                "code": "4726",
                "fullSpell": "yanchuanxian",
                "level": 3,
                "name": "延川县",
                "parent": "443"
              },
              {
                "code": "4731",
                "fullSpell": "huanglingxian",
                "level": 3,
                "name": "黄陵县",
                "parent": "443"
              },
              {
                "code": "4730",
                "fullSpell": "ganquanxian",
                "level": 3,
                "name": "甘泉县",
                "parent": "443"
              },
              {
                "code": "4728",
                "fullSpell": "zhidanxian",
                "level": 3,
                "name": "志丹县",
                "parent": "443"
              },
              {
                "code": "4732",
                "fullSpell": "huanglongxian",
                "level": 3,
                "name": "黄龙县",
                "parent": "443"
              },
              {
                "code": "4720",
                "fullSpell": "wuqixian",
                "level": 3,
                "name": "吴起县",
                "parent": "443"
              },
              {
                "code": "4725",
                "fullSpell": "fuxian",
                "level": 3,
                "name": "富县",
                "parent": "443"
              },
              {
                "code": "4729",
                "fullSpell": "luochuanxian",
                "level": 3,
                "name": "洛川县",
                "parent": "443"
              },
              {
                "code": "4721",
                "fullSpell": "zichangxian",
                "level": 3,
                "name": "子长县",
                "parent": "443"
              },
              {
                "code": "4723",
                "fullSpell": "yichuanxian",
                "level": 3,
                "name": "宜川县",
                "parent": "443"
              }
            ],
            "code": "443",
            "fullSpell": "yananshi",
            "level": 2,
            "name": "延安市",
            "parent": "27"
          },
          {
            "areas": [
              {
                "code": "4769",
                "fullSpell": "shanyangxian",
                "level": 3,
                "name": "山阳县",
                "parent": "447"
              },
              {
                "code": "4771",
                "fullSpell": "luonanxian",
                "level": 3,
                "name": "洛南县",
                "parent": "447"
              },
              {
                "code": "4767",
                "fullSpell": "shangnanxian",
                "level": 3,
                "name": "商南县",
                "parent": "447"
              },
              {
                "code": "4772",
                "fullSpell": "zhenanxian",
                "level": 3,
                "name": "镇安县",
                "parent": "447"
              },
              {
                "code": "4768",
                "fullSpell": "shangzhouqu",
                "level": 3,
                "name": "商州区",
                "parent": "447"
              },
              {
                "code": "4770",
                "fullSpell": "zuoshuixian",
                "level": 3,
                "name": "柞水县",
                "parent": "447"
              },
              {
                "code": "4766",
                "fullSpell": "danfengxian",
                "level": 3,
                "name": "丹凤县",
                "parent": "447"
              }
            ],
            "code": "447",
            "fullSpell": "shangluoshi",
            "level": 2,
            "name": "商洛市",
            "parent": "27"
          },
          {
            "areas": [
              {
                "code": "4752",
                "fullSpell": "shenmushi",
                "level": 3,
                "name": "神木市",
                "parent": "445"
              },
              {
                "code": "4750",
                "fullSpell": "hengshanqu",
                "level": 3,
                "name": "横山区",
                "parent": "445"
              },
              {
                "code": "4744",
                "fullSpell": "jiaxian",
                "level": 3,
                "name": "佳县",
                "parent": "445"
              },
              {
                "code": "4754",
                "fullSpell": "suidexian",
                "level": 3,
                "name": "绥德县",
                "parent": "445"
              },
              {
                "code": "4747",
                "fullSpell": "dingbianxian",
                "level": 3,
                "name": "定边县",
                "parent": "445"
              },
              {
                "code": "4748",
                "fullSpell": "fuguxian",
                "level": 3,
                "name": "府谷县",
                "parent": "445"
              },
              {
                "code": "4753",
                "fullSpell": "mizhixian",
                "level": 3,
                "name": "米脂县",
                "parent": "445"
              },
              {
                "code": "4745",
                "fullSpell": "wubaoxian",
                "level": 3,
                "name": "吴堡县",
                "parent": "445"
              },
              {
                "code": "4755",
                "fullSpell": "jingbianxian",
                "level": 3,
                "name": "靖边县",
                "parent": "445"
              },
              {
                "code": "4751",
                "fullSpell": "qingjianxian",
                "level": 3,
                "name": "清涧县",
                "parent": "445"
              },
              {
                "code": "4746",
                "fullSpell": "zizhouxian",
                "level": 3,
                "name": "子洲县",
                "parent": "445"
              },
              {
                "code": "4749",
                "fullSpell": "yulinshiyuyangqu",
                "level": 3,
                "name": "榆阳区",
                "parent": "445"
              }
            ],
            "code": "445",
            "fullSpell": "yulinshi",
            "level": 2,
            "name": "榆林市",
            "parent": "27"
          },
          {
            "areas": [
              {
                "code": "4717",
                "fullSpell": "baishuixian",
                "level": 3,
                "name": "白水县",
                "parent": "442"
              },
              {
                "code": "4715",
                "fullSpell": "tongguanxian",
                "level": 3,
                "name": "潼关县",
                "parent": "442"
              },
              {
                "code": "4713",
                "fullSpell": "dalixian",
                "level": 3,
                "name": "大荔县",
                "parent": "442"
              },
              {
                "code": "4709",
                "fullSpell": "linweiqu",
                "level": 3,
                "name": "临渭区",
                "parent": "442"
              },
              {
                "code": "4711",
                "fullSpell": "huayinshi",
                "level": 3,
                "name": "华阴市",
                "parent": "442"
              },
              {
                "code": "4716",
                "fullSpell": "chengchengxian",
                "level": 3,
                "name": "澄城县",
                "parent": "442"
              },
              {
                "code": "4719",
                "fullSpell": "hanchengshi",
                "level": 3,
                "name": "韩城市",
                "parent": "442"
              },
              {
                "code": "4712",
                "fullSpell": "heyangxian",
                "level": 3,
                "name": "合阳县",
                "parent": "442"
              },
              {
                "code": "4710",
                "fullSpell": "huazhouqu",
                "level": 3,
                "name": "华州区",
                "parent": "442"
              },
              {
                "code": "4714",
                "fullSpell": "fupingxian",
                "level": 3,
                "name": "富平县",
                "parent": "442"
              },
              {
                "code": "4718",
                "fullSpell": "puchengxian",
                "level": 3,
                "name": "蒲城县",
                "parent": "442"
              }
            ],
            "code": "442",
            "fullSpell": "weinanshi",
            "level": 2,
            "name": "渭南市",
            "parent": "27"
          },
          {
            "areas": [
              {
                "code": "4688",
                "fullSpell": "fufengxian",
                "level": 3,
                "name": "扶风县",
                "parent": "440"
              },
              {
                "code": "4685",
                "fullSpell": "qianyangxian",
                "level": 3,
                "name": "千阳县",
                "parent": "440"
              },
              {
                "code": "4694",
                "fullSpell": "linyouxian",
                "level": 3,
                "name": "麟游县",
                "parent": "440"
              },
              {
                "code": "4692",
                "fullSpell": "longxian",
                "level": 3,
                "name": "陇县",
                "parent": "440"
              },
              {
                "code": "4684",
                "fullSpell": "fengxiangxian",
                "level": 3,
                "name": "凤翔县",
                "parent": "440"
              },
              {
                "code": "4683",
                "fullSpell": "fengxian",
                "level": 3,
                "name": "凤县",
                "parent": "440"
              },
              {
                "code": "4686",
                "fullSpell": "taibaixian",
                "level": 3,
                "name": "太白县",
                "parent": "440"
              },
              {
                "code": "4693",
                "fullSpell": "chencangqu",
                "level": 3,
                "name": "陈仓区",
                "parent": "440"
              },
              {
                "code": "4689",
                "fullSpell": "weibinqu",
                "level": 3,
                "name": "渭滨区",
                "parent": "440"
              },
              {
                "code": "4691",
                "fullSpell": "jintaiqu",
                "level": 3,
                "name": "金台区",
                "parent": "440"
              },
              {
                "code": "4687",
                "fullSpell": "qishanxian",
                "level": 3,
                "name": "岐山县",
                "parent": "440"
              },
              {
                "code": "4690",
                "fullSpell": "meixian",
                "level": 3,
                "name": "眉县",
                "parent": "440"
              }
            ],
            "code": "440",
            "fullSpell": "baojishi",
            "level": 2,
            "name": "宝鸡市",
            "parent": "27"
          },
          {
            "areas": [
              {
                "code": "4666",
                "fullSpell": "lintongqu",
                "level": 3,
                "name": "临潼区",
                "parent": "438"
              },
              {
                "code": "4671",
                "fullSpell": "baqiaoqu",
                "level": 3,
                "name": "灞桥区",
                "parent": "438"
              },
              {
                "code": "4668",
                "fullSpell": "huyiqu",
                "level": 3,
                "name": "鄠邑区",
                "parent": "438"
              },
              {
                "code": "4672",
                "fullSpell": "beilinqu",
                "level": 3,
                "name": "碑林区",
                "parent": "438"
              },
              {
                "code": "4677",
                "fullSpell": "yantaqu",
                "level": 3,
                "name": "雁塔区",
                "parent": "438"
              },
              {
                "code": "4673",
                "fullSpell": "lianhuqu",
                "level": 3,
                "name": "莲湖区",
                "parent": "438"
              },
              {
                "code": "4675",
                "fullSpell": "changanqu",
                "level": 3,
                "name": "长安区",
                "parent": "438"
              },
              {
                "code": "4674",
                "fullSpell": "lantianxian",
                "level": 3,
                "name": "蓝田县",
                "parent": "438"
              },
              {
                "code": "4669",
                "fullSpell": "xinchengqu",
                "level": 3,
                "name": "新城区",
                "parent": "438"
              },
              {
                "code": "4678",
                "fullSpell": "gaolingxian",
                "level": 3,
                "name": "高陵区",
                "parent": "438"
              },
              {
                "code": "4667",
                "fullSpell": "zhouzhixian",
                "level": 3,
                "name": "周至县",
                "parent": "438"
              },
              {
                "code": "4670",
                "fullSpell": "weiyangqu",
                "level": 3,
                "name": "未央区",
                "parent": "438"
              },
              {
                "code": "4676",
                "fullSpell": "yanliangqu",
                "level": 3,
                "name": "阎良区",
                "parent": "438"
              },
              {
                "code": "4380001",
                "fullSpell": "gaoningxian",
                "level": 3,
                "name": "高宁县",
                "parent": "438"
              },
              {
                "code": "46781114011",
                "fullSpell": "xixianxinqu",
                "level": 3,
                "name": "西咸新区",
                "parent": "438"
              }
            ],
            "code": "438",
            "fullSpell": "xianshi",
            "level": 2,
            "name": "西安市",
            "parent": "27"
          },
          {
            "areas": [
              {
                "code": "4703",
                "fullSpell": "jingyangxian",
                "level": 3,
                "name": "泾阳县",
                "parent": "441"
              },
              {
                "code": "4695",
                "fullSpell": "sanyuanxian",
                "level": 3,
                "name": "三原县",
                "parent": "441"
              },
              {
                "code": "4696",
                "fullSpell": "qianxian",
                "level": 3,
                "name": "乾县",
                "parent": "441"
              },
              {
                "code": "4706",
                "fullSpell": "liquanxian",
                "level": 3,
                "name": "礼泉县",
                "parent": "441"
              },
              {
                "code": "4708",
                "fullSpell": "changwuxian",
                "level": 3,
                "name": "长武县",
                "parent": "441"
              },
              {
                "code": "4699",
                "fullSpell": "xunyixian",
                "level": 3,
                "name": "旬邑县",
                "parent": "441"
              },
              {
                "code": "4705",
                "fullSpell": "weichengqu",
                "level": 3,
                "name": "渭城区",
                "parent": "441"
              },
              {
                "code": "4698",
                "fullSpell": "binxian",
                "level": 3,
                "name": "彬县",
                "parent": "441"
              },
              {
                "code": "4707",
                "fullSpell": "qindouqu",
                "level": 3,
                "name": "秦都区",
                "parent": "441"
              },
              {
                "code": "4702",
                "fullSpell": "yongshouxian",
                "level": 3,
                "name": "永寿县",
                "parent": "441"
              },
              {
                "code": "4700",
                "fullSpell": "yanglingqu",
                "level": 3,
                "name": "杨陵区",
                "parent": "441"
              },
              {
                "code": "4701",
                "fullSpell": "wugongxian",
                "level": 3,
                "name": "武功县",
                "parent": "441"
              },
              {
                "code": "4704",
                "fullSpell": "chunhuaxian",
                "level": 3,
                "name": "淳化县",
                "parent": "441"
              },
              {
                "code": "4697",
                "fullSpell": "xingpingshi",
                "level": 3,
                "name": "兴平市",
                "parent": "441"
              }
            ],
            "code": "441",
            "fullSpell": "xianyangshi",
            "level": 2,
            "name": "咸阳市",
            "parent": "27"
          },
          {
            "areas": [
              {
                "code": "4756",
                "fullSpell": "ningshanxian",
                "level": 3,
                "name": "宁陕县",
                "parent": "446"
              },
              {
                "code": "4762",
                "fullSpell": "baihexian",
                "level": 3,
                "name": "白河县",
                "parent": "446"
              },
              {
                "code": "4757",
                "fullSpell": "langaoxian",
                "level": 3,
                "name": "岚皋县",
                "parent": "446"
              },
              {
                "code": "4758",
                "fullSpell": "pinglixian",
                "level": 3,
                "name": "平利县",
                "parent": "446"
              },
              {
                "code": "4763",
                "fullSpell": "shiquanxian",
                "level": 3,
                "name": "石泉县",
                "parent": "446"
              },
              {
                "code": "4765",
                "fullSpell": "zhenpingxian",
                "level": 3,
                "name": "镇坪县",
                "parent": "446"
              },
              {
                "code": "4759",
                "fullSpell": "xunyangxian",
                "level": 3,
                "name": "旬阳县",
                "parent": "446"
              },
              {
                "code": "4761",
                "fullSpell": "hanyinxian",
                "level": 3,
                "name": "汉阴县",
                "parent": "446"
              },
              {
                "code": "4760",
                "fullSpell": "hanbinqu",
                "level": 3,
                "name": "汉滨区",
                "parent": "446"
              },
              {
                "code": "4764",
                "fullSpell": "ziyangxian",
                "level": 3,
                "name": "紫阳县",
                "parent": "446"
              }
            ],
            "code": "446",
            "fullSpell": "ankangshi",
            "level": 2,
            "name": "安康市",
            "parent": "27"
          },
          {
            "areas": [
              {
                "code": "4682",
                "fullSpell": "yaozhouqu",
                "level": 3,
                "name": "耀州区",
                "parent": "439"
              },
              {
                "code": "4680",
                "fullSpell": "yijunxian",
                "level": 3,
                "name": "宜君县",
                "parent": "439"
              },
              {
                "code": "4679",
                "fullSpell": "yintaiqu",
                "level": 3,
                "name": "印台区",
                "parent": "439"
              },
              {
                "code": "4681",
                "fullSpell": "wangyiqu",
                "level": 3,
                "name": "王益区",
                "parent": "439"
              }
            ],
            "code": "439",
            "fullSpell": "tongchuanshi",
            "level": 2,
            "name": "铜川市",
            "parent": "27"
          },
          {
            "areas": [
              {
                "code": "4733",
                "fullSpell": "fopingxian",
                "level": 3,
                "name": "佛坪县",
                "parent": "444"
              },
              {
                "code": "4737",
                "fullSpell": "ningqiangxian",
                "level": 3,
                "name": "宁强县",
                "parent": "444"
              },
              {
                "code": "4736",
                "fullSpell": "chengguxian",
                "level": 3,
                "name": "城固县",
                "parent": "444"
              },
              {
                "code": "4743",
                "fullSpell": "zhenbaxian",
                "level": 3,
                "name": "镇巴县",
                "parent": "444"
              },
              {
                "code": "4735",
                "fullSpell": "nanzhengqu",
                "level": 3,
                "name": "南郑区",
                "parent": "444"
              },
              {
                "code": "4742",
                "fullSpell": "xixiangxian",
                "level": 3,
                "name": "西乡县",
                "parent": "444"
              },
              {
                "code": "4738",
                "fullSpell": "hantaiqu",
                "level": 3,
                "name": "汉台区",
                "parent": "444"
              },
              {
                "code": "4740",
                "fullSpell": "liubaxian",
                "level": 3,
                "name": "留坝县",
                "parent": "444"
              },
              {
                "code": "4739",
                "fullSpell": "yangxian",
                "level": 3,
                "name": "洋县",
                "parent": "444"
              },
              {
                "code": "4741",
                "fullSpell": "lueyangxian",
                "level": 3,
                "name": "略阳县",
                "parent": "444"
              },
              {
                "code": "4734",
                "fullSpell": "mianxian",
                "level": 3,
                "name": "勉县",
                "parent": "444"
              }
            ],
            "code": "444",
            "fullSpell": "hanzhongshi",
            "level": 2,
            "name": "汉中市",
            "parent": "27"
          }
        ],
        "code": "27",
        "fullSpell": "shanxisheng",
        "level": 1,
        "name": "陕西省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "1372",
                "fullSpell": "wenxixian",
                "level": 3,
                "name": "闻喜县",
                "parent": "91"
              },
              {
                "code": "1362",
                "fullSpell": "yuanquxian",
                "level": 3,
                "name": "垣曲县",
                "parent": "91"
              },
              {
                "code": "1371",
                "fullSpell": "ruichengxian",
                "level": 3,
                "name": "芮城县",
                "parent": "91"
              },
              {
                "code": "1370",
                "fullSpell": "jiangxian",
                "level": 3,
                "name": "绛县",
                "parent": "91"
              },
              {
                "code": "1361",
                "fullSpell": "linyixian",
                "level": 3,
                "name": "临猗县",
                "parent": "91"
              },
              {
                "code": "1366",
                "fullSpell": "yongjishi",
                "level": 3,
                "name": "永济市",
                "parent": "91"
              },
              {
                "code": "1369",
                "fullSpell": "jishanxian",
                "level": 3,
                "name": "稷山县",
                "parent": "91"
              },
              {
                "code": "1367",
                "fullSpell": "hejinshi",
                "level": 3,
                "name": "河津市",
                "parent": "91"
              },
              {
                "code": "1360",
                "fullSpell": "wanrongxian",
                "level": 3,
                "name": "万荣县",
                "parent": "91"
              },
              {
                "code": "1364",
                "fullSpell": "pingluxian",
                "level": 3,
                "name": "平陆县",
                "parent": "91"
              },
              {
                "code": "1365",
                "fullSpell": "xinjiangxian",
                "level": 3,
                "name": "新绛县",
                "parent": "91"
              },
              {
                "code": "1363",
                "fullSpell": "xiaxian",
                "level": 3,
                "name": "夏县",
                "parent": "91"
              },
              {
                "code": "1368",
                "fullSpell": "yanhuqu",
                "level": 3,
                "name": "盐湖区",
                "parent": "91"
              }
            ],
            "code": "91",
            "fullSpell": "yunchengshi",
            "level": 2,
            "name": "运城市",
            "parent": "4"
          },
          {
            "areas": [
              {
                "code": "1311",
                "fullSpell": "tianzhenxian",
                "level": 3,
                "name": "天镇县",
                "parent": "85"
              },
              {
                "code": "1310",
                "fullSpell": "datongxian",
                "level": 3,
                "name": "大同县",
                "parent": "85"
              },
              {
                "code": "1309",
                "fullSpell": "chengqu",
                "level": 3,
                "name": "城区",
                "parent": "85"
              },
              {
                "code": "1315",
                "fullSpell": "hunyuanxian",
                "level": 3,
                "name": "浑源县",
                "parent": "85"
              },
              {
                "code": "1314",
                "fullSpell": "xinrongqu",
                "level": 3,
                "name": "新荣区",
                "parent": "85"
              },
              {
                "code": "1308",
                "fullSpell": "nanjiaoqu",
                "level": 3,
                "name": "南郊区",
                "parent": "85"
              },
              {
                "code": "1316",
                "fullSpell": "lingqiuxian",
                "level": 3,
                "name": "灵丘县",
                "parent": "85"
              },
              {
                "code": "1317",
                "fullSpell": "kuangqu",
                "level": 3,
                "name": "矿区",
                "parent": "85"
              },
              {
                "code": "1313",
                "fullSpell": "guanglingxian",
                "level": 3,
                "name": "广灵县",
                "parent": "85"
              },
              {
                "code": "1318",
                "fullSpell": "yanggaoxian",
                "level": 3,
                "name": "阳高县",
                "parent": "85"
              },
              {
                "code": "1312",
                "fullSpell": "zuoyunxian",
                "level": 3,
                "name": "左云县",
                "parent": "85"
              }
            ],
            "code": "85",
            "fullSpell": "datongshi",
            "level": 2,
            "name": "大同市",
            "parent": "4"
          },
          {
            "areas": [
              {
                "code": "1352",
                "fullSpell": "shouyangxian",
                "level": 3,
                "name": "寿阳县",
                "parent": "90"
              },
              {
                "code": "1350",
                "fullSpell": "heshunxian",
                "level": 3,
                "name": "和顺县",
                "parent": "90"
              },
              {
                "code": "1356",
                "fullSpell": "yuciqu",
                "level": 3,
                "name": "榆次区",
                "parent": "90"
              },
              {
                "code": "1349",
                "fullSpell": "jiexiushi",
                "level": 3,
                "name": "介休市",
                "parent": "90"
              },
              {
                "code": "1353",
                "fullSpell": "zuoquanxian",
                "level": 3,
                "name": "左权县",
                "parent": "90"
              },
              {
                "code": "1355",
                "fullSpell": "xiyangxian",
                "level": 3,
                "name": "昔阳县",
                "parent": "90"
              },
              {
                "code": "1359",
                "fullSpell": "qixian",
                "level": 3,
                "name": "祁县",
                "parent": "90"
              },
              {
                "code": "1351",
                "fullSpell": "taiguxian",
                "level": 3,
                "name": "太谷县",
                "parent": "90"
              },
              {
                "code": "1358",
                "fullSpell": "lingshixian",
                "level": 3,
                "name": "灵石县",
                "parent": "90"
              },
              {
                "code": "1354",
                "fullSpell": "pingyaoxian",
                "level": 3,
                "name": "平遥县",
                "parent": "90"
              },
              {
                "code": "1357",
                "fullSpell": "yushexian",
                "level": 3,
                "name": "榆社县",
                "parent": "90"
              }
            ],
            "code": "90",
            "fullSpell": "jinzhongshi",
            "level": 2,
            "name": "晋中市",
            "parent": "4"
          },
          {
            "areas": [
              {
                "code": "1381",
                "fullSpell": "kelanxian",
                "level": 3,
                "name": "岢岚县",
                "parent": "92"
              },
              {
                "code": "1385",
                "fullSpell": "fanzhixian",
                "level": 3,
                "name": "繁峙县",
                "parent": "92"
              },
              {
                "code": "1383",
                "fullSpell": "hequxian",
                "level": 3,
                "name": "河曲县",
                "parent": "92"
              },
              {
                "code": "1384",
                "fullSpell": "shenchixian",
                "level": 3,
                "name": "神池县",
                "parent": "92"
              },
              {
                "code": "1386",
                "fullSpell": "jinglexian",
                "level": 3,
                "name": "静乐县",
                "parent": "92"
              },
              {
                "code": "1378",
                "fullSpell": "yuanpingshi",
                "level": 3,
                "name": "原平市",
                "parent": "92"
              },
              {
                "code": "1377",
                "fullSpell": "pianguanxian",
                "level": 3,
                "name": "偏关县",
                "parent": "92"
              },
              {
                "code": "1382",
                "fullSpell": "xinfuqu",
                "level": 3,
                "name": "忻府区",
                "parent": "92"
              },
              {
                "code": "1373",
                "fullSpell": "wutaixian",
                "level": 3,
                "name": "五台县",
                "parent": "92"
              },
              {
                "code": "1376",
                "fullSpell": "baodexian",
                "level": 3,
                "name": "保德县",
                "parent": "92"
              },
              {
                "code": "1375",
                "fullSpell": "daixian",
                "level": 3,
                "name": "代县",
                "parent": "92"
              },
              {
                "code": "1374",
                "fullSpell": "wuzhaixian",
                "level": 3,
                "name": "五寨县",
                "parent": "92"
              },
              {
                "code": "1380",
                "fullSpell": "dingxiangxian",
                "level": 3,
                "name": "定襄县",
                "parent": "92"
              },
              {
                "code": "1379",
                "fullSpell": "ningwuxian",
                "level": 3,
                "name": "宁武县",
                "parent": "92"
              }
            ],
            "code": "92",
            "fullSpell": "xinzhoushi",
            "level": 2,
            "name": "忻州市",
            "parent": "4"
          },
          {
            "areas": [
              {
                "code": "1394",
                "fullSpell": "quwoxian",
                "level": 3,
                "name": "曲沃县",
                "parent": "93"
              },
              {
                "code": "1399",
                "fullSpell": "yichengxian",
                "level": 3,
                "name": "翼城县",
                "parent": "93"
              },
              {
                "code": "1395",
                "fullSpell": "yonghexian",
                "level": 3,
                "name": "永和县",
                "parent": "93"
              },
              {
                "code": "1397",
                "fullSpell": "hongdongxian",
                "level": 3,
                "name": "洪洞县",
                "parent": "93"
              },
              {
                "code": "1387",
                "fullSpell": "xiangningxian",
                "level": 3,
                "name": "乡宁县",
                "parent": "93"
              },
              {
                "code": "1392",
                "fullSpell": "anzexian",
                "level": 3,
                "name": "安泽县",
                "parent": "93"
              },
              {
                "code": "1393",
                "fullSpell": "yaodouqu",
                "level": 3,
                "name": "尧都区",
                "parent": "93"
              },
              {
                "code": "1389",
                "fullSpell": "guxian",
                "level": 3,
                "name": "古县",
                "parent": "93"
              },
              {
                "code": "1403",
                "fullSpell": "huozhoushi",
                "level": 3,
                "name": "霍州市",
                "parent": "93"
              },
              {
                "code": "1401",
                "fullSpell": "xiangfenxian",
                "level": 3,
                "name": "襄汾县",
                "parent": "93"
              },
              {
                "code": "1396",
                "fullSpell": "fenxixian",
                "level": 3,
                "name": "汾西县",
                "parent": "93"
              },
              {
                "code": "1398",
                "fullSpell": "fushanxian",
                "level": 3,
                "name": "浮山县",
                "parent": "93"
              },
              {
                "code": "1388",
                "fullSpell": "houmashi",
                "level": 3,
                "name": "侯马市",
                "parent": "93"
              },
              {
                "code": "1390",
                "fullSpell": "jixian",
                "level": 3,
                "name": "吉县",
                "parent": "93"
              },
              {
                "code": "1400",
                "fullSpell": "puxian",
                "level": 3,
                "name": "蒲县",
                "parent": "93"
              },
              {
                "code": "1402",
                "fullSpell": "xixian",
                "level": 3,
                "name": "隰县",
                "parent": "93"
              },
              {
                "code": "1391",
                "fullSpell": "daningxian",
                "level": 3,
                "name": "大宁县",
                "parent": "93"
              }
            ],
            "code": "93",
            "fullSpell": "linfenshi",
            "level": 2,
            "name": "临汾市",
            "parent": "4"
          },
          {
            "areas": [
              {
                "code": "1323",
                "fullSpell": "jiaoqu",
                "level": 3,
                "name": "郊区",
                "parent": "86"
              },
              {
                "code": "1321",
                "fullSpell": "yuxian",
                "level": 3,
                "name": "盂县",
                "parent": "86"
              },
              {
                "code": "1320",
                "fullSpell": "pingdingxian",
                "level": 3,
                "name": "平定县",
                "parent": "86"
              },
              {
                "code": "1322",
                "fullSpell": "kuangqu",
                "level": 3,
                "name": "矿区",
                "parent": "86"
              },
              {
                "code": "1319",
                "fullSpell": "chengqu",
                "level": 3,
                "name": "城区",
                "parent": "86"
              }
            ],
            "code": "86",
            "fullSpell": "yangquanshi",
            "level": 2,
            "name": "阳泉市",
            "parent": "4"
          },
          {
            "areas": [
              {
                "code": "1302",
                "fullSpell": "jiancaopingqu",
                "level": 3,
                "name": "尖草坪区",
                "parent": "84"
              },
              {
                "code": "1307",
                "fullSpell": "yangquxian",
                "level": 3,
                "name": "阳曲县",
                "parent": "84"
              },
              {
                "code": "1298",
                "fullSpell": "wanbailinqu",
                "level": 3,
                "name": "万柏林区",
                "parent": "84"
              },
              {
                "code": "1300",
                "fullSpell": "loufanxian",
                "level": 3,
                "name": "娄烦县",
                "parent": "84"
              },
              {
                "code": "1306",
                "fullSpell": "yingzequ",
                "level": 3,
                "name": "迎泽区",
                "parent": "84"
              },
              {
                "code": "1304",
                "fullSpell": "xinghualingqu",
                "level": 3,
                "name": "杏花岭区",
                "parent": "84"
              },
              {
                "code": "1299",
                "fullSpell": "gujiaoshi",
                "level": 3,
                "name": "古交市",
                "parent": "84"
              },
              {
                "code": "1301",
                "fullSpell": "xiaodianqu",
                "level": 3,
                "name": "小店区",
                "parent": "84"
              },
              {
                "code": "1303",
                "fullSpell": "jinyuanqu",
                "level": 3,
                "name": "晋源区",
                "parent": "84"
              },
              {
                "code": "1305",
                "fullSpell": "qingxuxian",
                "level": 3,
                "name": "清徐县",
                "parent": "84"
              }
            ],
            "code": "84",
            "fullSpell": "taiyuanshi",
            "level": 2,
            "name": "太原市",
            "parent": "4"
          },
          {
            "areas": [
              {
                "code": "1337",
                "fullSpell": "chengqu",
                "level": 3,
                "name": "城区",
                "parent": "88"
              },
              {
                "code": "1342",
                "fullSpell": "gaopingshi",
                "level": 3,
                "name": "高平市",
                "parent": "88"
              },
              {
                "code": "1341",
                "fullSpell": "lingchuanxian",
                "level": 3,
                "name": "陵川县",
                "parent": "88"
              },
              {
                "code": "1338",
                "fullSpell": "qinshuixian",
                "level": 3,
                "name": "沁水县",
                "parent": "88"
              },
              {
                "code": "1339",
                "fullSpell": "zezhouxian",
                "level": 3,
                "name": "泽州县",
                "parent": "88"
              },
              {
                "code": "1340",
                "fullSpell": "yangchengxian",
                "level": 3,
                "name": "阳城县",
                "parent": "88"
              }
            ],
            "code": "88",
            "fullSpell": "jinchengshi",
            "level": 2,
            "name": "晋城市",
            "parent": "4"
          },
          {
            "areas": [
              {
                "code": "1343",
                "fullSpell": "youyuxian",
                "level": 3,
                "name": "右玉县",
                "parent": "89"
              },
              {
                "code": "1346",
                "fullSpell": "yingxian",
                "level": 3,
                "name": "应县",
                "parent": "89"
              },
              {
                "code": "1344",
                "fullSpell": "shanyinxian",
                "level": 3,
                "name": "山阴县",
                "parent": "89"
              },
              {
                "code": "1345",
                "fullSpell": "pingluqu",
                "level": 3,
                "name": "平鲁区",
                "parent": "89"
              },
              {
                "code": "1347",
                "fullSpell": "huairenxian",
                "level": 3,
                "name": "怀仁县",
                "parent": "89"
              },
              {
                "code": "1348",
                "fullSpell": "shuochengqu",
                "level": 3,
                "name": "朔城区",
                "parent": "89"
              }
            ],
            "code": "89",
            "fullSpell": "shuozhoushi",
            "level": 2,
            "name": "朔州市",
            "parent": "4"
          },
          {
            "areas": [
              {
                "code": "1336",
                "fullSpell": "lichengxian",
                "level": 3,
                "name": "黎城县",
                "parent": "87"
              },
              {
                "code": "1333",
                "fullSpell": "jiaoqu",
                "level": 3,
                "name": "郊区",
                "parent": "87"
              },
              {
                "code": "1324",
                "fullSpell": "chengqu",
                "level": 3,
                "name": "城区",
                "parent": "87"
              },
              {
                "code": "1327",
                "fullSpell": "pingshunxian",
                "level": 3,
                "name": "平顺县",
                "parent": "87"
              },
              {
                "code": "1332",
                "fullSpell": "xiangyuanxian",
                "level": 3,
                "name": "襄垣县",
                "parent": "87"
              },
              {
                "code": "1334",
                "fullSpell": "changzixian",
                "level": 3,
                "name": "长子县",
                "parent": "87"
              },
              {
                "code": "1329",
                "fullSpell": "qinxian",
                "level": 3,
                "name": "沁县",
                "parent": "87"
              },
              {
                "code": "1330",
                "fullSpell": "qinyuanxian",
                "level": 3,
                "name": "沁源县",
                "parent": "87"
              },
              {
                "code": "1328",
                "fullSpell": "wuxiangxian",
                "level": 3,
                "name": "武乡县",
                "parent": "87"
              },
              {
                "code": "1325",
                "fullSpell": "huguanxian",
                "level": 3,
                "name": "壶关县",
                "parent": "87"
              },
              {
                "code": "1326",
                "fullSpell": "tunliuxian",
                "level": 3,
                "name": "屯留县",
                "parent": "87"
              },
              {
                "code": "1335",
                "fullSpell": "changzhixian",
                "level": 3,
                "name": "长治县",
                "parent": "87"
              },
              {
                "code": "1331",
                "fullSpell": "luchengshi",
                "level": 3,
                "name": "潞城市",
                "parent": "87"
              }
            ],
            "code": "87",
            "fullSpell": "changzhishi",
            "level": 2,
            "name": "长治市",
            "parent": "4"
          },
          {
            "areas": [
              {
                "code": "1408",
                "fullSpell": "xingxian",
                "level": 3,
                "name": "兴县",
                "parent": "94"
              },
              {
                "code": "1405",
                "fullSpell": "linxian",
                "level": 3,
                "name": "临县",
                "parent": "94"
              },
              {
                "code": "1414",
                "fullSpell": "fenyangshi",
                "level": 3,
                "name": "汾阳市",
                "parent": "94"
              },
              {
                "code": "1407",
                "fullSpell": "jiaochengxian",
                "level": 3,
                "name": "交城县",
                "parent": "94"
              },
              {
                "code": "1413",
                "fullSpell": "liulinxian",
                "level": 3,
                "name": "柳林县",
                "parent": "94"
              },
              {
                "code": "1404",
                "fullSpell": "zhongyangxian",
                "level": 3,
                "name": "中阳县",
                "parent": "94"
              },
              {
                "code": "1410",
                "fullSpell": "lanxian",
                "level": 3,
                "name": "岚县",
                "parent": "94"
              },
              {
                "code": "1412",
                "fullSpell": "fangshanxian",
                "level": 3,
                "name": "方山县",
                "parent": "94"
              },
              {
                "code": "1406",
                "fullSpell": "jiaokouxian",
                "level": 3,
                "name": "交口县",
                "parent": "94"
              },
              {
                "code": "1416",
                "fullSpell": "lishiqu",
                "level": 3,
                "name": "离石区",
                "parent": "94"
              },
              {
                "code": "1409",
                "fullSpell": "xiaoyishi",
                "level": 3,
                "name": "孝义市",
                "parent": "94"
              },
              {
                "code": "1411",
                "fullSpell": "wenshuixian",
                "level": 3,
                "name": "文水县",
                "parent": "94"
              },
              {
                "code": "1415",
                "fullSpell": "shilouxian",
                "level": 3,
                "name": "石楼县",
                "parent": "94"
              }
            ],
            "code": "94",
            "fullSpell": "lvliangshi",
            "level": 2,
            "name": "吕梁市",
            "parent": "4"
          }
        ],
        "code": "4",
        "fullSpell": "shanxisheng",
        "level": 1,
        "name": "山西省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "467811254",
                "fullSpell": "cuipingqu",
                "level": 3,
                "name": "翠屏区",
                "parent": "467811135"
              },
              {
                "code": "467811258",
                "fullSpell": "cangningxian",
                "level": 3,
                "name": "长宁县",
                "parent": "467811135"
              },
              {
                "code": "467811261",
                "fullSpell": "junlianxian",
                "level": 3,
                "name": "筠连县",
                "parent": "467811135"
              },
              {
                "code": "467811262",
                "fullSpell": "xingwenxian",
                "level": 3,
                "name": "兴文县",
                "parent": "467811135"
              },
              {
                "code": "467811259",
                "fullSpell": "gaoxian",
                "level": 3,
                "name": "高县",
                "parent": "467811135"
              },
              {
                "code": "467811257",
                "fullSpell": "jianganxian",
                "level": 3,
                "name": "江安县",
                "parent": "467811135"
              },
              {
                "code": "467811260",
                "fullSpell": "gongxian",
                "level": 3,
                "name": "珙县",
                "parent": "467811135"
              },
              {
                "code": "467811256",
                "fullSpell": "nanxiqu",
                "level": 3,
                "name": "南溪区",
                "parent": "467811135"
              },
              {
                "code": "467811263",
                "fullSpell": "pingshanxian",
                "level": 3,
                "name": "屏山县",
                "parent": "467811135"
              },
              {
                "code": "467811255",
                "fullSpell": "yibinxian",
                "level": 3,
                "name": "宜宾县",
                "parent": "467811135"
              }
            ],
            "code": "467811135",
            "fullSpell": "yibin",
            "level": 2,
            "name": "宜宾市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811288",
                "fullSpell": "poingchangxian",
                "level": 3,
                "name": "平昌县",
                "parent": "467811139"
              },
              {
                "code": "46781113901",
                "fullSpell": "bazhouqu",
                "level": 3,
                "name": "巴州区",
                "parent": "467811139"
              },
              {
                "code": "46781113902",
                "fullSpell": "enyangqu",
                "level": 3,
                "name": "恩阳区",
                "parent": "467811139"
              },
              {
                "code": "46781113903",
                "fullSpell": "nanjiangxian",
                "level": 3,
                "name": "南江县",
                "parent": "467811139"
              },
              {
                "code": "46781113904",
                "fullSpell": "tongjiangxian",
                "level": 3,
                "name": "通江县",
                "parent": "467811139"
              }
            ],
            "code": "467811139",
            "fullSpell": "bazhong",
            "level": 2,
            "name": "巴中市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811272",
                "fullSpell": "daxian",
                "level": 3,
                "name": "达川区",
                "parent": "467811137"
              },
              {
                "code": "467811275",
                "fullSpell": "dazhuxian",
                "level": 3,
                "name": "大竹县",
                "parent": "467811137"
              },
              {
                "code": "467811274",
                "fullSpell": "kaijiangxian",
                "level": 3,
                "name": "开江县",
                "parent": "467811137"
              },
              {
                "code": "467811276",
                "fullSpell": "juxian",
                "level": 3,
                "name": "渠县",
                "parent": "467811137"
              },
              {
                "code": "467811277",
                "fullSpell": "wanyuanshi",
                "level": 3,
                "name": "万源市",
                "parent": "467811137"
              },
              {
                "code": "467811273",
                "fullSpell": "xuanhanxian",
                "level": 3,
                "name": "宣汉县",
                "parent": "467811137"
              },
              {
                "code": "467811271",
                "fullSpell": "tongchuanqu",
                "level": 3,
                "name": "通川区",
                "parent": "467811137"
              }
            ],
            "code": "467811137",
            "fullSpell": "dazhou",
            "level": 2,
            "name": "达州市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811324",
                "fullSpell": "butuo",
                "level": 3,
                "name": "布拖县",
                "parent": "467811143"
              },
              {
                "code": "467811320",
                "fullSpell": "huili",
                "level": 3,
                "name": "会理县",
                "parent": "467811143"
              },
              {
                "code": "467811316",
                "fullSpell": "xichangshi",
                "level": 3,
                "name": "西昌市",
                "parent": "467811143"
              },
              {
                "code": "467811326",
                "fullSpell": "jinyang",
                "level": 3,
                "name": "金阳县",
                "parent": "467811143"
              },
              {
                "code": "467811322",
                "fullSpell": "ningnan",
                "level": 3,
                "name": "宁南县",
                "parent": "467811143"
              },
              {
                "code": "467811321",
                "fullSpell": "huidongxian",
                "level": 3,
                "name": "会东县",
                "parent": "467811143"
              },
              {
                "code": "467811325",
                "fullSpell": "leibo",
                "level": 3,
                "name": "雷波县",
                "parent": "467811143"
              },
              {
                "code": "467811318",
                "fullSpell": "yanyuan",
                "level": 3,
                "name": "盐源县",
                "parent": "467811143"
              },
              {
                "code": "467811319",
                "fullSpell": "decang",
                "level": 3,
                "name": "德昌县",
                "parent": "467811143"
              },
              {
                "code": "467811317",
                "fullSpell": "muli",
                "level": 3,
                "name": "木里藏族自治县",
                "parent": "467811143"
              },
              {
                "code": "467811323",
                "fullSpell": "puge",
                "level": 3,
                "name": "普格县",
                "parent": "467811143"
              }
            ],
            "code": "467811143",
            "fullSpell": "liangshan",
            "level": 2,
            "name": "凉山州",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811185",
                "fullSpell": "peicheng",
                "level": 3,
                "name": "涪城区",
                "parent": "467811128"
              },
              {
                "code": "467811194",
                "fullSpell": "zitong",
                "level": 3,
                "name": "梓潼县",
                "parent": "467811128"
              },
              {
                "code": "467811198",
                "fullSpell": "pingwu",
                "level": 3,
                "name": "平武县",
                "parent": "467811128"
              },
              {
                "code": "467811190",
                "fullSpell": "yanting",
                "level": 3,
                "name": "盐亭县",
                "parent": "467811128"
              },
              {
                "code": "467811196",
                "fullSpell": "beichuan",
                "level": 3,
                "name": "北川羌族自治县",
                "parent": "467811128"
              },
              {
                "code": "467811189",
                "fullSpell": "santai",
                "level": 3,
                "name": "三台县",
                "parent": "467811128"
              },
              {
                "code": "467811200",
                "fullSpell": "jiangyou",
                "level": 3,
                "name": "江油市",
                "parent": "467811128"
              },
              {
                "code": "467811187",
                "fullSpell": "youxian",
                "level": 3,
                "name": "游仙区",
                "parent": "467811128"
              },
              {
                "code": "46781112801",
                "fullSpell": "anzhouqu",
                "level": 3,
                "name": "安州区",
                "parent": "467811128"
              }
            ],
            "code": "467811128",
            "fullSpell": "mianyang",
            "level": 2,
            "name": "绵阳市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811209",
                "fullSpell": "pengxixian",
                "level": 3,
                "name": "蓬溪县",
                "parent": "467811130"
              },
              {
                "code": "467811207",
                "fullSpell": "chuanshanqu",
                "level": 3,
                "name": "船山区",
                "parent": "467811130"
              },
              {
                "code": "467811212",
                "fullSpell": "dayingxian",
                "level": 3,
                "name": "大英县",
                "parent": "467811130"
              },
              {
                "code": "467811208",
                "fullSpell": "anjuqu",
                "level": 3,
                "name": "安居区",
                "parent": "467811130"
              },
              {
                "code": "467811210",
                "fullSpell": "shehongxian",
                "level": 3,
                "name": "射洪县",
                "parent": "467811130"
              }
            ],
            "code": "467811130",
            "fullSpell": "suining",
            "level": 2,
            "name": "遂宁市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811234",
                "fullSpell": "mabian",
                "level": 3,
                "name": "马边彝族自治县",
                "parent": "467811132"
              },
              {
                "code": "467811223",
                "fullSpell": "leshanshizhong",
                "level": 3,
                "name": "市中区",
                "parent": "467811132"
              },
              {
                "code": "467811229",
                "fullSpell": "qianweixian",
                "level": 3,
                "name": "犍为县",
                "parent": "467811132"
              },
              {
                "code": "467811231",
                "fullSpell": "jiajaingxian",
                "level": 3,
                "name": "夹江县",
                "parent": "467811132"
              },
              {
                "code": "467811228",
                "fullSpell": "jinhekouqu",
                "level": 3,
                "name": "金口河区",
                "parent": "467811132"
              },
              {
                "code": "467811226",
                "fullSpell": "shawanqu",
                "level": 3,
                "name": "沙湾区",
                "parent": "467811132"
              },
              {
                "code": "467811232",
                "fullSpell": "muchuanxian",
                "level": 3,
                "name": "沐川县",
                "parent": "467811132"
              },
              {
                "code": "467811235",
                "fullSpell": "emei",
                "level": 3,
                "name": "峨眉山市",
                "parent": "467811132"
              },
              {
                "code": "467811230",
                "fullSpell": "jingyanxian",
                "level": 3,
                "name": "井研县",
                "parent": "467811132"
              },
              {
                "code": "467811227",
                "fullSpell": "wutongqiaoqu",
                "level": 3,
                "name": "五通桥区",
                "parent": "467811132"
              },
              {
                "code": "467811233",
                "fullSpell": "ebian",
                "level": 3,
                "name": "峨边彝族自治县",
                "parent": "467811132"
              }
            ],
            "code": "467811132",
            "fullSpell": "leshan",
            "level": 2,
            "name": "乐山市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811248",
                "fullSpell": "renshouxian",
                "level": 3,
                "name": "仁寿县",
                "parent": "467811134"
              },
              {
                "code": "467811252",
                "fullSpell": "qingshenxian",
                "level": 3,
                "name": "青神县",
                "parent": "467811134"
              },
              {
                "code": "467811247",
                "fullSpell": "dongpoqu",
                "level": 3,
                "name": "东坡区",
                "parent": "467811134"
              },
              {
                "code": "467811251",
                "fullSpell": "danlinxian",
                "level": 3,
                "name": "丹棱县",
                "parent": "467811134"
              },
              {
                "code": "467811250",
                "fullSpell": "honhyaxian",
                "level": 3,
                "name": "洪雅县",
                "parent": "467811134"
              },
              {
                "code": "467811249",
                "fullSpell": "pengshanqu",
                "level": 3,
                "name": "彭山区",
                "parent": "467811134"
              }
            ],
            "code": "467811134",
            "fullSpell": "meishan",
            "level": 2,
            "name": "眉山市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811157",
                "fullSpell": "miyi",
                "level": 3,
                "name": "米易县",
                "parent": "467811125"
              },
              {
                "code": "467811154",
                "fullSpell": "dong",
                "level": 3,
                "name": "东区",
                "parent": "467811125"
              },
              {
                "code": "467811158",
                "fullSpell": "yanbian",
                "level": 3,
                "name": "盐边县",
                "parent": "467811125"
              },
              {
                "code": "467811155",
                "fullSpell": "xi",
                "level": 3,
                "name": "西区",
                "parent": "467811125"
              },
              {
                "code": "467811156",
                "fullSpell": "rehe",
                "level": 3,
                "name": "仁和区",
                "parent": "467811125"
              }
            ],
            "code": "467811125",
            "fullSpell": "panzhihua",
            "level": 2,
            "name": "攀枝花市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811148",
                "fullSpell": "daan",
                "level": 3,
                "name": "大安区",
                "parent": "467811124"
              },
              {
                "code": "467811149",
                "fullSpell": "yantan",
                "level": 3,
                "name": "沿滩区",
                "parent": "467811124"
              },
              {
                "code": "467811152",
                "fullSpell": "fushun",
                "level": 3,
                "name": "富顺县",
                "parent": "467811124"
              },
              {
                "code": "467811150",
                "fullSpell": "rongxian",
                "level": 3,
                "name": "荣县",
                "parent": "467811124"
              },
              {
                "code": "467811147",
                "fullSpell": "gongjing",
                "level": 3,
                "name": "贡井区",
                "parent": "467811124"
              },
              {
                "code": "467811146",
                "fullSpell": "ziliujing",
                "level": 3,
                "name": "自流井区",
                "parent": "467811124"
              }
            ],
            "code": "467811124",
            "fullSpell": "zigong",
            "level": 2,
            "name": "自贡市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811213",
                "fullSpell": "chaotian",
                "level": 3,
                "name": "朝天区",
                "parent": "467811129"
              },
              {
                "code": "467811214",
                "fullSpell": "wangcang",
                "level": 3,
                "name": "旺苍县",
                "parent": "467811129"
              },
              {
                "code": "467811205",
                "fullSpell": "shizhong",
                "level": 3,
                "name": "市中区",
                "parent": "467811129"
              },
              {
                "code": "467811215",
                "fullSpell": "qingchuan",
                "level": 3,
                "name": "青川县",
                "parent": "467811129"
              },
              {
                "code": "467811217",
                "fullSpell": "jiange",
                "level": 3,
                "name": "剑阁县",
                "parent": "467811129"
              },
              {
                "code": "467811218",
                "fullSpell": "cangxi",
                "level": 3,
                "name": "苍溪县",
                "parent": "467811129"
              },
              {
                "code": "467811211",
                "fullSpell": "yuebei",
                "level": 3,
                "name": "元坝区",
                "parent": "467811129"
              },
              {
                "code": "46781112901",
                "fullSpell": "lizhouqu",
                "level": 3,
                "name": "利州区",
                "parent": "467811129"
              },
              {
                "code": "46781112902",
                "fullSpell": "zhaohuaqu",
                "level": 3,
                "name": "昭化区",
                "parent": "467811129"
              }
            ],
            "code": "467811129",
            "fullSpell": "guangyuan",
            "level": 2,
            "name": "广元市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811269",
                "fullSpell": "huajianshi",
                "level": 3,
                "name": "华蓥市",
                "parent": "467811136"
              },
              {
                "code": "467811267",
                "fullSpell": "wushengxian",
                "level": 3,
                "name": "武胜县",
                "parent": "467811136"
              },
              {
                "code": "467811268",
                "fullSpell": "linshuixian",
                "level": 3,
                "name": "邻水县",
                "parent": "467811136"
              },
              {
                "code": "467811266",
                "fullSpell": "yuechixian",
                "level": 3,
                "name": "岳池县",
                "parent": "467811136"
              },
              {
                "code": "467811265",
                "fullSpell": "guanganqu",
                "level": 3,
                "name": "广安区",
                "parent": "467811136"
              },
              {
                "code": "46781113601",
                "fullSpell": "qianfengqu",
                "level": 3,
                "name": "前锋区",
                "parent": "467811136"
              }
            ],
            "code": "467811136",
            "fullSpell": "guangan",
            "level": 2,
            "name": "广安市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811183",
                "fullSpell": "jintangxian",
                "level": 3,
                "name": "金堂县",
                "parent": "467811123"
              },
              {
                "code": "467811199",
                "fullSpell": "pengzhoushi",
                "level": 3,
                "name": "彭州市",
                "parent": "467811123"
              },
              {
                "code": "467811195",
                "fullSpell": "xinjinxian",
                "level": 3,
                "name": "新津县",
                "parent": "467811123"
              },
              {
                "code": "467811167",
                "fullSpell": "jinniuqu",
                "level": 3,
                "name": "金牛区",
                "parent": "467811123"
              },
              {
                "code": "467811186",
                "fullSpell": "shaungliuqu",
                "level": 3,
                "name": "双流区",
                "parent": "467811123"
              },
              {
                "code": "467811179",
                "fullSpell": "xinduqu",
                "level": 3,
                "name": "新都区",
                "parent": "467811123"
              },
              {
                "code": "467811203",
                "fullSpell": "congzhoushi",
                "level": 3,
                "name": "崇州市",
                "parent": "467811123"
              },
              {
                "code": "467811188",
                "fullSpell": "pixian",
                "level": 3,
                "name": "郫都区",
                "parent": "467811123"
              },
              {
                "code": "467811165",
                "fullSpell": "qingyangqu",
                "level": 3,
                "name": "青羊区",
                "parent": "467811123"
              },
              {
                "code": "467811171",
                "fullSpell": "chenghuaqu",
                "level": 3,
                "name": "成华区",
                "parent": "467811123"
              },
              {
                "code": "467811169",
                "fullSpell": "wuhouqu",
                "level": 3,
                "name": "武侯区",
                "parent": "467811123"
              },
              {
                "code": "467811181",
                "fullSpell": "wenjaingqu",
                "level": 3,
                "name": "温江区",
                "parent": "467811123"
              },
              {
                "code": "467811193",
                "fullSpell": "pujiangxian",
                "level": 3,
                "name": "蒲江县",
                "parent": "467811123"
              },
              {
                "code": "467811201",
                "fullSpell": "qilaishi",
                "level": 3,
                "name": "邛崃市",
                "parent": "467811123"
              },
              {
                "code": "467811191",
                "fullSpell": "dayixian",
                "level": 3,
                "name": "大邑县",
                "parent": "467811123"
              },
              {
                "code": "467811176",
                "fullSpell": "qingbaijiangqu",
                "level": 3,
                "name": "青白江区",
                "parent": "467811123"
              },
              {
                "code": "467811160",
                "fullSpell": "jinjiangqu",
                "level": 3,
                "name": "锦江区",
                "parent": "467811123"
              },
              {
                "code": "467811173",
                "fullSpell": "longquanyiqu",
                "level": 3,
                "name": "龙泉驿区",
                "parent": "467811123"
              },
              {
                "code": "467811197",
                "fullSpell": "dujiangyanshi",
                "level": 3,
                "name": "都江堰市",
                "parent": "467811123"
              },
              {
                "code": "467811290",
                "fullSpell": "jianyangshi",
                "level": 3,
                "name": "简阳市",
                "parent": "467811123"
              }
            ],
            "code": "467811123",
            "fullSpell": "chengdu",
            "level": 2,
            "name": "成都市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811240",
                "fullSpell": "nanbuxian",
                "level": 3,
                "name": "南部县",
                "parent": "467811133"
              },
              {
                "code": "467811245",
                "fullSpell": "liangzhongshi",
                "level": 3,
                "name": "阆中市",
                "parent": "467811133"
              },
              {
                "code": "467811237",
                "fullSpell": "shunqingqu",
                "level": 3,
                "name": "顺庆区",
                "parent": "467811133"
              },
              {
                "code": "467811244",
                "fullSpell": "xicongxian",
                "level": 3,
                "name": "西充县",
                "parent": "467811133"
              },
              {
                "code": "467811238",
                "fullSpell": "gaopingqu",
                "level": 3,
                "name": "高坪区",
                "parent": "467811133"
              },
              {
                "code": "467811241",
                "fullSpell": "yingshanxoian",
                "level": 3,
                "name": "营山县",
                "parent": "467811133"
              },
              {
                "code": "467811243",
                "fullSpell": "yilongxian",
                "level": 3,
                "name": "仪陇县",
                "parent": "467811133"
              },
              {
                "code": "467811239",
                "fullSpell": "jialing",
                "level": 3,
                "name": "嘉陵区",
                "parent": "467811133"
              },
              {
                "code": "467811242",
                "fullSpell": "penganxian",
                "level": 3,
                "name": "蓬安县",
                "parent": "467811133"
              }
            ],
            "code": "467811133",
            "fullSpell": "nanchong",
            "level": 2,
            "name": "南充市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811291",
                "fullSpell": "anyuequ",
                "level": 3,
                "name": "安岳县",
                "parent": "467811140"
              },
              {
                "code": "467811292",
                "fullSpell": "lezhixian",
                "level": 3,
                "name": "乐至县",
                "parent": "467811140"
              },
              {
                "code": "46781114001",
                "fullSpell": "yanjiangqu",
                "level": 3,
                "name": "雁江区",
                "parent": "467811140"
              }
            ],
            "code": "467811140",
            "fullSpell": "ziyang",
            "level": 2,
            "name": "资阳市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811219",
                "fullSpell": "shizhongqu",
                "level": 3,
                "name": "市中区",
                "parent": "467811131"
              },
              {
                "code": "467811222",
                "fullSpell": "weiyuanxian",
                "level": 3,
                "name": "威远县",
                "parent": "467811131"
              },
              {
                "code": "467811224",
                "fullSpell": "longchangshi",
                "level": 3,
                "name": "隆昌市",
                "parent": "467811131"
              },
              {
                "code": "467811225",
                "fullSpell": "zizhongxian",
                "level": 3,
                "name": "资中县",
                "parent": "467811131"
              },
              {
                "code": "467811220",
                "fullSpell": "dongxingqu",
                "level": 3,
                "name": "东兴区",
                "parent": "467811131"
              }
            ],
            "code": "467811131",
            "fullSpell": "neijiang",
            "level": 2,
            "name": "内江市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811305",
                "fullSpell": "huhuo",
                "level": 3,
                "name": "炉霍县",
                "parent": "467811142"
              },
              {
                "code": "467811315",
                "fullSpell": "deronxian",
                "level": 3,
                "name": "得荣县",
                "parent": "467811142"
              },
              {
                "code": "467811303",
                "fullSpell": "yajiang",
                "level": 3,
                "name": "雅江县",
                "parent": "467811142"
              },
              {
                "code": "467811307",
                "fullSpell": "xinlong",
                "level": 3,
                "name": "新龙县",
                "parent": "467811142"
              },
              {
                "code": "467811311",
                "fullSpell": "seda",
                "level": 3,
                "name": "色达县",
                "parent": "467811142"
              },
              {
                "code": "467811308",
                "fullSpell": "dege",
                "level": 3,
                "name": "德格县",
                "parent": "467811142"
              },
              {
                "code": "467811313",
                "fullSpell": "batang",
                "level": 3,
                "name": "巴塘县",
                "parent": "467811142"
              },
              {
                "code": "467811304",
                "fullSpell": "daofu",
                "level": 3,
                "name": "道孚县",
                "parent": "467811142"
              },
              {
                "code": "467811299",
                "fullSpell": "kangdingshi",
                "level": 3,
                "name": "康定市",
                "parent": "467811142"
              },
              {
                "code": "467811312",
                "fullSpell": "litang",
                "level": 3,
                "name": "理塘县",
                "parent": "467811142"
              },
              {
                "code": "467811301",
                "fullSpell": "danbaxian",
                "level": 3,
                "name": "丹巴县",
                "parent": "467811142"
              },
              {
                "code": "467811309",
                "fullSpell": "baiyu",
                "level": 3,
                "name": "白玉县",
                "parent": "467811142"
              },
              {
                "code": "467811314",
                "fullSpell": "daocheng",
                "level": 3,
                "name": "稻城县",
                "parent": "467811142"
              },
              {
                "code": "467811300",
                "fullSpell": "ludingxian",
                "level": 3,
                "name": "泸定县",
                "parent": "467811142"
              },
              {
                "code": "467811306",
                "fullSpell": "ganzi",
                "level": 3,
                "name": "甘孜县",
                "parent": "467811142"
              },
              {
                "code": "467811302",
                "fullSpell": "jiulongxian",
                "level": 3,
                "name": "九龙县",
                "parent": "467811142"
              },
              {
                "code": "467811310",
                "fullSpell": "siju",
                "level": 3,
                "name": "石渠县",
                "parent": "467811142"
              },
              {
                "code": "46781114002",
                "fullSpell": "xiangchengxian",
                "level": 3,
                "name": "乡城县",
                "parent": "467811142"
              }
            ],
            "code": "467811142",
            "fullSpell": "ganzi",
            "level": 2,
            "name": "甘孜州",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811166",
                "fullSpell": "hejiang",
                "level": 3,
                "name": "合江县",
                "parent": "467811126"
              },
              {
                "code": "467811170",
                "fullSpell": "gunei",
                "level": 3,
                "name": "古蔺县",
                "parent": "467811126"
              },
              {
                "code": "467811168",
                "fullSpell": "xuyong",
                "level": 3,
                "name": "叙永县",
                "parent": "467811126"
              },
              {
                "code": "467811162",
                "fullSpell": "naxi",
                "level": 3,
                "name": "纳溪区",
                "parent": "467811126"
              },
              {
                "code": "467811164",
                "fullSpell": "luxian",
                "level": 3,
                "name": "泸县",
                "parent": "467811126"
              },
              {
                "code": "467811163",
                "fullSpell": "longmatan",
                "level": 3,
                "name": "龙马潭区",
                "parent": "467811126"
              },
              {
                "code": "467811161",
                "fullSpell": "jiangyang",
                "level": 3,
                "name": "江阳区",
                "parent": "467811126"
              }
            ],
            "code": "467811126",
            "fullSpell": "luzhou",
            "level": 2,
            "name": "泸州市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811285",
                "fullSpell": "lushanxian",
                "level": 3,
                "name": "芦山县",
                "parent": "467811138"
              },
              {
                "code": "467811279",
                "fullSpell": "yuchengqu",
                "level": 3,
                "name": "雨城区",
                "parent": "467811138"
              },
              {
                "code": "467811283",
                "fullSpell": "shimianxian",
                "level": 3,
                "name": "石棉县",
                "parent": "467811138"
              },
              {
                "code": "467811284",
                "fullSpell": "tianquanxian",
                "level": 3,
                "name": "天全县",
                "parent": "467811138"
              },
              {
                "code": "467811281",
                "fullSpell": "yingjinxian",
                "level": 3,
                "name": "荥经县",
                "parent": "467811138"
              },
              {
                "code": "467811286",
                "fullSpell": "baoxingxian",
                "level": 3,
                "name": "宝兴县",
                "parent": "467811138"
              },
              {
                "code": "467811280",
                "fullSpell": "mingshanqu",
                "level": 3,
                "name": "名山区",
                "parent": "467811138"
              },
              {
                "code": "467811282",
                "fullSpell": "hanyuanxian",
                "level": 3,
                "name": "汉源县",
                "parent": "467811138"
              }
            ],
            "code": "467811138",
            "fullSpell": "yaan",
            "level": 2,
            "name": "雅安市",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811297",
                "fullSpell": "hongyuan",
                "level": 3,
                "name": "红原县",
                "parent": "467811141"
              },
              {
                "code": "467811294",
                "fullSpell": "lixian",
                "level": 3,
                "name": "理县",
                "parent": "467811141"
              },
              {
                "code": "467811296",
                "fullSpell": "songpanxian",
                "level": 3,
                "name": "松潘县",
                "parent": "467811141"
              },
              {
                "code": "467811293",
                "fullSpell": "wenchuanxian",
                "level": 3,
                "name": "汶川县",
                "parent": "467811141"
              },
              {
                "code": "467811295",
                "fullSpell": "maoxian",
                "level": 3,
                "name": "茂县",
                "parent": "467811141"
              },
              {
                "code": "467811298",
                "fullSpell": "jiuzaigouxian",
                "level": 3,
                "name": "九寨沟县",
                "parent": "467811141"
              }
            ],
            "code": "467811141",
            "fullSpell": "abei",
            "level": 2,
            "name": "阿坝州",
            "parent": "23"
          },
          {
            "areas": [
              {
                "code": "467811174",
                "fullSpell": "shengyang",
                "level": 3,
                "name": "旌阳区",
                "parent": "467811127"
              },
              {
                "code": "467811182",
                "fullSpell": "mianzu",
                "level": 3,
                "name": "绵竹市",
                "parent": "467811127"
              },
              {
                "code": "467811178",
                "fullSpell": "guanghan",
                "level": 3,
                "name": "广汉市",
                "parent": "467811127"
              },
              {
                "code": "467811180",
                "fullSpell": "shenqi",
                "level": 3,
                "name": "什邡市",
                "parent": "467811127"
              },
              {
                "code": "467811177",
                "fullSpell": "luojiangqu",
                "level": 3,
                "name": "罗江区",
                "parent": "467811127"
              },
              {
                "code": "467811175",
                "fullSpell": "zhonjiang",
                "level": 3,
                "name": "中江县",
                "parent": "467811127"
              }
            ],
            "code": "467811127",
            "fullSpell": "deyang",
            "level": 2,
            "name": "德阳市",
            "parent": "23"
          }
        ],
        "code": "23",
        "fullSpell": "sichuansheng",
        "level": 1,
        "name": "四川省"
      },
      {
        "citys": [
          {
            "areas": [

            ],
            "code": "494",
            "fullSpell": "gaoxiongshi",
            "level": 2,
            "name": "高雄市",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "515",
            "fullSpell": "hualianxian",
            "level": 2,
            "name": "花莲县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "511",
            "fullSpell": "gaoxiongxian",
            "level": 2,
            "name": "高雄县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "513",
            "fullSpell": "penghuxian",
            "level": 2,
            "name": "澎湖县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "501",
            "fullSpell": "yilanxian",
            "level": 2,
            "name": "宜兰县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "509",
            "fullSpell": "jiayixian",
            "level": 2,
            "name": "嘉义县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "498",
            "fullSpell": "xinzhushi",
            "level": 2,
            "name": "新竹市",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "512",
            "fullSpell": "pingdongxian",
            "level": 2,
            "name": "屏东县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "514",
            "fullSpell": "taidongxian",
            "level": 2,
            "name": "台东县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "503",
            "fullSpell": "xinzhuxian",
            "level": 2,
            "name": "新竹县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "496",
            "fullSpell": "taizhongshi",
            "level": 2,
            "name": "台中市",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "507",
            "fullSpell": "nantouxian",
            "level": 2,
            "name": "南投县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "505",
            "fullSpell": "taizhongxian",
            "level": 2,
            "name": "台中县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "502",
            "fullSpell": "taoyuanshi",
            "level": 2,
            "name": "桃园市",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "504",
            "fullSpell": "miaolixian",
            "level": 2,
            "name": "苗栗县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "506",
            "fullSpell": "zhanghuaxian",
            "level": 2,
            "name": "彰化县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "495",
            "fullSpell": "jilongshi",
            "level": 2,
            "name": "基隆市",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "508",
            "fullSpell": "yunlinxian",
            "level": 2,
            "name": "云林县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "499",
            "fullSpell": "jiayishi",
            "level": 2,
            "name": "嘉义市",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "500",
            "fullSpell": "xingbeishi",
            "level": 2,
            "name": "新北市",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "510",
            "fullSpell": "tainanxian",
            "level": 2,
            "name": "台南县",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "493",
            "fullSpell": "taibeishi",
            "level": 2,
            "name": "台北市",
            "parent": "32"
          },
          {
            "areas": [

            ],
            "code": "497",
            "fullSpell": "tainanshi",
            "level": 2,
            "name": "台南市",
            "parent": "32"
          }
        ],
        "code": "32",
        "fullSpell": "taiwansheng",
        "level": 1,
        "name": "台湾省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "71",
                "fullSpell": "jinghaixian",
                "level": 3,
                "name": "静海区",
                "parent": "5027"
              },
              {
                "code": "62",
                "fullSpell": "hanguqu",
                "level": 3,
                "name": "汉沽区",
                "parent": "5027"
              },
              {
                "code": "57",
                "fullSpell": "hexiqu",
                "level": 3,
                "name": "河西区",
                "parent": "5027"
              },
              {
                "code": "67",
                "fullSpell": "beichenqu",
                "level": 3,
                "name": "北辰区",
                "parent": "5027"
              },
              {
                "code": "70",
                "fullSpell": "ninghexian",
                "level": 3,
                "name": "宁河区",
                "parent": "5027"
              },
              {
                "code": "61",
                "fullSpell": "tangguqu",
                "level": 3,
                "name": "塘沽区",
                "parent": "5027"
              },
              {
                "code": "66",
                "fullSpell": "jinnanqu",
                "level": 3,
                "name": "津南区",
                "parent": "5027"
              },
              {
                "code": "63",
                "fullSpell": "dagangqu",
                "level": 3,
                "name": "大港区",
                "parent": "5027"
              },
              {
                "code": "56",
                "fullSpell": "hedongqu",
                "level": 3,
                "name": "河东区",
                "parent": "5027"
              },
              {
                "code": "72",
                "fullSpell": "jixian",
                "level": 3,
                "name": "蓟州区",
                "parent": "5027"
              },
              {
                "code": "65",
                "fullSpell": "xiqingqu",
                "level": 3,
                "name": "西青区",
                "parent": "5027"
              },
              {
                "code": "59",
                "fullSpell": "hebeiqu",
                "level": 3,
                "name": "河北区",
                "parent": "5027"
              },
              {
                "code": "58",
                "fullSpell": "nankaiqu",
                "level": 3,
                "name": "南开区",
                "parent": "5027"
              },
              {
                "code": "64",
                "fullSpell": "dongliqu",
                "level": 3,
                "name": "东丽区",
                "parent": "5027"
              },
              {
                "code": "55",
                "fullSpell": "hepingqu",
                "level": 3,
                "name": "和平区",
                "parent": "5027"
              },
              {
                "code": "68",
                "fullSpell": "wuqingqu",
                "level": 3,
                "name": "武清区",
                "parent": "5027"
              },
              {
                "code": "69",
                "fullSpell": "baodiqu",
                "level": 3,
                "name": "宝坻区",
                "parent": "5027"
              },
              {
                "code": "60",
                "fullSpell": "hongqiaoqu",
                "level": 3,
                "name": "红桥区",
                "parent": "5027"
              },
              {
                "code": "502701",
                "fullSpell": "binhaixinqu",
                "level": 3,
                "name": "滨海新区",
                "parent": "5027"
              }
            ],
            "code": "5027",
            "fullSpell": "tianjinshi",
            "level": 2,
            "name": "天津市",
            "parent": "2"
          }
        ],
        "code": "2",
        "fullSpell": "tianjing",
        "level": 1,
        "name": "天津"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "522",
                "fullSpell": "huangdaxianqu",
                "level": 3,
                "name": "黄大仙区",
                "parent": "201433"
              },
              {
                "code": "529",
                "fullSpell": "shatianqu",
                "level": 3,
                "name": "沙田区",
                "parent": "201433"
              },
              {
                "code": "532",
                "fullSpell": "quanwanqu",
                "level": 3,
                "name": "荃湾区",
                "parent": "201433"
              },
              {
                "code": "518",
                "fullSpell": "jiulongchengqu",
                "level": 3,
                "name": "九龙城区",
                "parent": "201433"
              },
              {
                "code": "520",
                "fullSpell": "nanqu",
                "level": 3,
                "name": "南区",
                "parent": "201433"
              },
              {
                "code": "527",
                "fullSpell": "beiqu",
                "level": 3,
                "name": "北区",
                "parent": "201433"
              },
              {
                "code": "523",
                "fullSpell": "wanziqu",
                "level": 3,
                "name": "湾仔区",
                "parent": "201433"
              },
              {
                "code": "530",
                "fullSpell": "tunmenqu",
                "level": 3,
                "name": "屯门区",
                "parent": "201433"
              },
              {
                "code": "528",
                "fullSpell": "xigongqu",
                "level": 3,
                "name": "西贡区",
                "parent": "201433"
              },
              {
                "code": "525",
                "fullSpell": "lidaoqu",
                "level": 3,
                "name": "离岛区",
                "parent": "201433"
              },
              {
                "code": "524",
                "fullSpell": "youjianwangqu",
                "level": 3,
                "name": "油尖旺区",
                "parent": "201433"
              },
              {
                "code": "519",
                "fullSpell": "guantangqu",
                "level": 3,
                "name": "观塘区",
                "parent": "201433"
              },
              {
                "code": "531",
                "fullSpell": "dapuqu",
                "level": 3,
                "name": "大埔区",
                "parent": "201433"
              },
              {
                "code": "517",
                "fullSpell": "dongqu",
                "level": 3,
                "name": "东区",
                "parent": "201433"
              },
              {
                "code": "533",
                "fullSpell": "yuanlangqu",
                "level": 3,
                "name": "元朗区",
                "parent": "201433"
              },
              {
                "code": "521",
                "fullSpell": "shenshuibuqu",
                "level": 3,
                "name": "深水埗区",
                "parent": "201433"
              },
              {
                "code": "516",
                "fullSpell": "zhongxiqu",
                "level": 3,
                "name": "中西区",
                "parent": "201433"
              },
              {
                "code": "526",
                "fullSpell": "kuiqingqu",
                "level": 3,
                "name": "葵青区",
                "parent": "201433"
              }
            ],
            "code": "201433",
            "fullSpell": "xianggang",
            "level": 2,
            "name": "香港市",
            "parent": "33"
          }
        ],
        "code": "33",
        "fullSpell": "xianggangtebiexingzhenqu",
        "level": 1,
        "name": "香港特别行政区"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "4599",
                "fullSpell": "linzhouxian",
                "level": 3,
                "name": "林周县",
                "parent": "431"
              },
              {
                "code": "4598",
                "fullSpell": "qushuixian",
                "level": 3,
                "name": "曲水县",
                "parent": "431"
              },
              {
                "code": "4596",
                "fullSpell": "nimuxian",
                "level": 3,
                "name": "尼木县",
                "parent": "431"
              },
              {
                "code": "4594",
                "fullSpell": "duilongdeqingqu",
                "level": 3,
                "name": "堆龙德庆区",
                "parent": "431"
              },
              {
                "code": "4593",
                "fullSpell": "chengguanqu",
                "level": 3,
                "name": "城关区",
                "parent": "431"
              },
              {
                "code": "4597",
                "fullSpell": "dangxiongxian",
                "level": 3,
                "name": "当雄县",
                "parent": "431"
              },
              {
                "code": "4595",
                "fullSpell": "mozhugongkaxian",
                "level": 3,
                "name": "墨竹工卡县",
                "parent": "431"
              },
              {
                "code": "4600",
                "fullSpell": "daziqu",
                "level": 3,
                "name": "达孜区",
                "parent": "431"
              }
            ],
            "code": "431",
            "fullSpell": "lasashi",
            "level": 2,
            "name": "拉萨市",
            "parent": "26"
          },
          {
            "areas": [
              {
                "code": "4606",
                "fullSpell": "jiangdaxian",
                "level": 3,
                "name": "江达县",
                "parent": "432"
              },
              {
                "code": "4608",
                "fullSpell": "leiwuqixian",
                "level": 3,
                "name": "类乌齐县",
                "parent": "432"
              },
              {
                "code": "4609",
                "fullSpell": "mangkangxian",
                "level": 3,
                "name": "芒康县",
                "parent": "432"
              },
              {
                "code": "4603",
                "fullSpell": "chayaxian",
                "level": 3,
                "name": "察雅县",
                "parent": "432"
              },
              {
                "code": "4610",
                "fullSpell": "gongjuexian",
                "level": 3,
                "name": "贡觉县",
                "parent": "432"
              },
              {
                "code": "4604",
                "fullSpell": "zuogongxian",
                "level": 3,
                "name": "左贡县",
                "parent": "432"
              },
              {
                "code": "4602",
                "fullSpell": "basuxian",
                "level": 3,
                "name": "八宿县",
                "parent": "432"
              },
              {
                "code": "4607",
                "fullSpell": "luolongxian",
                "level": 3,
                "name": "洛隆县",
                "parent": "432"
              },
              {
                "code": "4601",
                "fullSpell": "dingqingxian",
                "level": 3,
                "name": "丁青县",
                "parent": "432"
              },
              {
                "code": "4611",
                "fullSpell": "bianbaxian",
                "level": 3,
                "name": "边坝县",
                "parent": "432"
              },
              {
                "code": "4605",
                "fullSpell": "karuoqu",
                "level": 3,
                "name": "卡若区",
                "parent": "432"
              }
            ],
            "code": "432",
            "fullSpell": "changdoushi",
            "level": 2,
            "name": "昌都市",
            "parent": "26"
          },
          {
            "areas": [
              {
                "code": "4636",
                "fullSpell": "jiangzixian",
                "level": 3,
                "name": "江孜县",
                "parent": "434"
              },
              {
                "code": "4640",
                "fullSpell": "sajiaxian",
                "level": 3,
                "name": "萨迦县",
                "parent": "434"
              },
              {
                "code": "4630",
                "fullSpell": "dingjiexian",
                "level": 3,
                "name": "定结县",
                "parent": "434"
              },
              {
                "code": "4639",
                "fullSpell": "sagaxian",
                "level": 3,
                "name": "萨嘎县",
                "parent": "434"
              },
              {
                "code": "4631",
                "fullSpell": "gangbaxian",
                "level": 3,
                "name": "岗巴县",
                "parent": "434"
              },
              {
                "code": "4635",
                "fullSpell": "angrenxian",
                "level": 3,
                "name": "昂仁县",
                "parent": "434"
              },
              {
                "code": "4626",
                "fullSpell": "zhongbaxian",
                "level": 3,
                "name": "仲巴县",
                "parent": "434"
              },
              {
                "code": "4627",
                "fullSpell": "nanmulinxian",
                "level": 3,
                "name": "南木林县",
                "parent": "434"
              },
              {
                "code": "4628",
                "fullSpell": "jilongxian",
                "level": 3,
                "name": "吉隆县",
                "parent": "434"
              },
              {
                "code": "4637",
                "fullSpell": "bailangxian",
                "level": 3,
                "name": "白朗县",
                "parent": "434"
              },
              {
                "code": "4624",
                "fullSpell": "yadongxian",
                "level": 3,
                "name": "亚东县",
                "parent": "434"
              },
              {
                "code": "4641",
                "fullSpell": "xietongmenxian",
                "level": 3,
                "name": "谢通门县",
                "parent": "434"
              },
              {
                "code": "4625",
                "fullSpell": "renbuxian",
                "level": 3,
                "name": "仁布县",
                "parent": "434"
              },
              {
                "code": "4629",
                "fullSpell": "dingrixian",
                "level": 3,
                "name": "定日县",
                "parent": "434"
              },
              {
                "code": "4633",
                "fullSpell": "lazixian",
                "level": 3,
                "name": "拉孜县",
                "parent": "434"
              },
              {
                "code": "4638",
                "fullSpell": "nielamuxian",
                "level": 3,
                "name": "聂拉木县",
                "parent": "434"
              },
              {
                "code": "4634",
                "fullSpell": "sangzhuziqu",
                "level": 3,
                "name": "桑珠孜区",
                "parent": "434"
              },
              {
                "code": "4632",
                "fullSpell": "kangmaxian",
                "level": 3,
                "name": "康马县",
                "parent": "434"
              }
            ],
            "code": "434",
            "fullSpell": "rikazeshi",
            "level": 2,
            "name": "日喀则市",
            "parent": "26"
          },
          {
            "areas": [
              {
                "code": "4648",
                "fullSpell": "shenzhaxian",
                "level": 3,
                "name": "申扎县",
                "parent": "435"
              },
              {
                "code": "4645",
                "fullSpell": "baqingxian",
                "level": 3,
                "name": "巴青县",
                "parent": "435"
              },
              {
                "code": "4649",
                "fullSpell": "suoxian",
                "level": 3,
                "name": "索县",
                "parent": "435"
              },
              {
                "code": "4644",
                "fullSpell": "nimaxian",
                "level": 3,
                "name": "尼玛县",
                "parent": "435"
              },
              {
                "code": "4647",
                "fullSpell": "bangexian",
                "level": 3,
                "name": "班戈县",
                "parent": "435"
              },
              {
                "code": "4651",
                "fullSpell": "seniqu",
                "level": 3,
                "name": "色尼区",
                "parent": "435"
              },
              {
                "code": "4642",
                "fullSpell": "jialixian",
                "level": 3,
                "name": "嘉黎县",
                "parent": "435"
              },
              {
                "code": "4643",
                "fullSpell": "anduoxian",
                "level": 3,
                "name": "安多县",
                "parent": "435"
              },
              {
                "code": "4646",
                "fullSpell": "biruxian",
                "level": 3,
                "name": "比如县",
                "parent": "435"
              },
              {
                "code": "4650",
                "fullSpell": "nierongxian",
                "level": 3,
                "name": "聂荣县",
                "parent": "435"
              },
              {
                "code": "46781114009",
                "fullSpell": "shuanghuxian",
                "level": 3,
                "name": "双湖县",
                "parent": "435"
              }
            ],
            "code": "435",
            "fullSpell": "naqushi",
            "level": 2,
            "name": "那曲市",
            "parent": "26"
          },
          {
            "areas": [
              {
                "code": "4619",
                "fullSpell": "langkazixian",
                "level": 3,
                "name": "浪卡子县",
                "parent": "433"
              },
              {
                "code": "4612",
                "fullSpell": "naidongqu",
                "level": 3,
                "name": "乃东区",
                "parent": "433"
              },
              {
                "code": "4618",
                "fullSpell": "luozhaxian",
                "level": 3,
                "name": "洛扎县",
                "parent": "433"
              },
              {
                "code": "4620",
                "fullSpell": "qiongjiexian",
                "level": 3,
                "name": "琼结县",
                "parent": "433"
              },
              {
                "code": "4621",
                "fullSpell": "gonggaxian",
                "level": 3,
                "name": "贡嘎县",
                "parent": "433"
              },
              {
                "code": "4622",
                "fullSpell": "cuonaxian",
                "level": 3,
                "name": "错那县",
                "parent": "433"
              },
              {
                "code": "4623",
                "fullSpell": "longzixian",
                "level": 3,
                "name": "隆子县",
                "parent": "433"
              },
              {
                "code": "4614",
                "fullSpell": "zhanangxian",
                "level": 3,
                "name": "扎囊县",
                "parent": "433"
              },
              {
                "code": "4613",
                "fullSpell": "jiachaxian",
                "level": 3,
                "name": "加查县",
                "parent": "433"
              },
              {
                "code": "4616",
                "fullSpell": "qusongxian",
                "level": 3,
                "name": "曲松县",
                "parent": "433"
              },
              {
                "code": "4615",
                "fullSpell": "cuomeixian",
                "level": 3,
                "name": "措美县",
                "parent": "433"
              },
              {
                "code": "4617",
                "fullSpell": "sangrixian",
                "level": 3,
                "name": "桑日县",
                "parent": "433"
              }
            ],
            "code": "433",
            "fullSpell": "shannanshi",
            "level": 2,
            "name": "山南市",
            "parent": "26"
          },
          {
            "areas": [
              {
                "code": "4660",
                "fullSpell": "chayuxian",
                "level": 3,
                "name": "察隅县",
                "parent": "437"
              },
              {
                "code": "4662",
                "fullSpell": "langxian",
                "level": 3,
                "name": "朗县",
                "parent": "437"
              },
              {
                "code": "4659",
                "fullSpell": "motuoxian",
                "level": 3,
                "name": "墨脱县",
                "parent": "437"
              },
              {
                "code": "4661",
                "fullSpell": "gongbujiangdaxian",
                "level": 3,
                "name": "工布江达县",
                "parent": "437"
              },
              {
                "code": "4665",
                "fullSpell": "milinxian",
                "level": 3,
                "name": "米林县",
                "parent": "437"
              },
              {
                "code": "4663",
                "fullSpell": "bayiqu",
                "level": 3,
                "name": "巴宜区",
                "parent": "437"
              },
              {
                "code": "4664",
                "fullSpell": "bomixian",
                "level": 3,
                "name": "波密县",
                "parent": "437"
              }
            ],
            "code": "437",
            "fullSpell": "linzhidishi",
            "level": 2,
            "name": "林芝市",
            "parent": "26"
          },
          {
            "areas": [
              {
                "code": "4652",
                "fullSpell": "gaerxian",
                "level": 3,
                "name": "噶尔县",
                "parent": "436"
              },
              {
                "code": "4653",
                "fullSpell": "cuoqinxian",
                "level": 3,
                "name": "措勤县",
                "parent": "436"
              },
              {
                "code": "4656",
                "fullSpell": "pulanxian",
                "level": 3,
                "name": "普兰县",
                "parent": "436"
              },
              {
                "code": "4654",
                "fullSpell": "gaizexian",
                "level": 3,
                "name": "改则县",
                "parent": "436"
              },
              {
                "code": "4657",
                "fullSpell": "zhadaxian",
                "level": 3,
                "name": "札达县",
                "parent": "436"
              },
              {
                "code": "4655",
                "fullSpell": "rituxian",
                "level": 3,
                "name": "日土县",
                "parent": "436"
              },
              {
                "code": "4658",
                "fullSpell": "gejixian",
                "level": 3,
                "name": "革吉县",
                "parent": "436"
              }
            ],
            "code": "436",
            "fullSpell": "alidiqu",
            "level": 2,
            "name": "阿里地区",
            "parent": "26"
          }
        ],
        "code": "26",
        "fullSpell": "xicang",
        "level": 1,
        "name": "西藏自治区"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "5015",
                "fullSpell": "habahexian",
                "level": 3,
                "name": "哈巴河县",
                "parent": "488"
              },
              {
                "code": "5018",
                "fullSpell": "fuhaixian",
                "level": 3,
                "name": "福海县",
                "parent": "488"
              },
              {
                "code": "5019",
                "fullSpell": "aletaishi",
                "level": 3,
                "name": "阿勒泰市",
                "parent": "488"
              },
              {
                "code": "5017",
                "fullSpell": "buerjinxian",
                "level": 3,
                "name": "布尔津县",
                "parent": "488"
              },
              {
                "code": "5014",
                "fullSpell": "jimunaixian",
                "level": 3,
                "name": "吉木乃县",
                "parent": "488"
              },
              {
                "code": "5020",
                "fullSpell": "qinghexian",
                "level": 3,
                "name": "青河县",
                "parent": "488"
              },
              {
                "code": "5016",
                "fullSpell": "fuyunxian",
                "level": 3,
                "name": "富蕴县",
                "parent": "488"
              }
            ],
            "code": "488",
            "fullSpell": "aletaidiqu",
            "level": 2,
            "name": "阿勒泰地区",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "4975",
                "fullSpell": "aheqixian",
                "level": 3,
                "name": "阿合奇县",
                "parent": "483"
              },
              {
                "code": "4974",
                "fullSpell": "aketaoxian",
                "level": 3,
                "name": "阿克陶县",
                "parent": "483"
              },
              {
                "code": "4973",
                "fullSpell": "wuqiaxian",
                "level": 3,
                "name": "乌恰县",
                "parent": "483"
              },
              {
                "code": "4976",
                "fullSpell": "atushishi",
                "level": 3,
                "name": "阿图什市",
                "parent": "483"
              }
            ],
            "code": "483",
            "fullSpell": "kezilesukeerkezizizhizhou",
            "level": 2,
            "name": "克孜勒苏柯尔克孜自治州",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "4942",
                "fullSpell": "yiwuxian",
                "level": 3,
                "name": "伊吾县",
                "parent": "478"
              },
              {
                "code": "4943",
                "fullSpell": "hamishi",
                "level": 3,
                "name": "哈密市",
                "parent": "478"
              },
              {
                "code": "4944",
                "fullSpell": "balikunhasakezizhixian",
                "level": 3,
                "name": "巴里坤哈萨克自治县",
                "parent": "478"
              }
            ],
            "code": "478",
            "fullSpell": "hamidiqu",
            "level": 2,
            "name": "哈密市",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "5023",
                "fullSpell": "tumushukeshi",
                "level": 3,
                "name": "图木舒克市",
                "parent": "491"
              }
            ],
            "code": "491",
            "fullSpell": "tumushukeshi",
            "level": 2,
            "name": "图木舒克市",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "4954",
                "fullSpell": "wenquanxian",
                "level": 3,
                "name": "温泉县",
                "parent": "480"
              },
              {
                "code": "4955",
                "fullSpell": "jinghexian",
                "level": 3,
                "name": "精河县",
                "parent": "480"
              },
              {
                "code": "4953",
                "fullSpell": "boleshi",
                "level": 3,
                "name": "博乐市",
                "parent": "480"
              }
            ],
            "code": "480",
            "fullSpell": "boertalamengguzizhizhou",
            "level": 2,
            "name": "博尔塔拉蒙古自治州",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "4970",
                "fullSpell": "wensuxian",
                "level": 3,
                "name": "温宿县",
                "parent": "482"
              },
              {
                "code": "4971",
                "fullSpell": "akesushi",
                "level": 3,
                "name": "阿克苏市",
                "parent": "482"
              },
              {
                "code": "4966",
                "fullSpell": "baichengxian",
                "level": 3,
                "name": "拜城县",
                "parent": "482"
              },
              {
                "code": "4964",
                "fullSpell": "wushixian",
                "level": 3,
                "name": "乌什县",
                "parent": "482"
              },
              {
                "code": "4968",
                "fullSpell": "kepingxian",
                "level": 3,
                "name": "柯坪县",
                "parent": "482"
              },
              {
                "code": "4965",
                "fullSpell": "kuchexian",
                "level": 3,
                "name": "库车县",
                "parent": "482"
              },
              {
                "code": "4969",
                "fullSpell": "shayaxian",
                "level": 3,
                "name": "沙雅县",
                "parent": "482"
              },
              {
                "code": "4972",
                "fullSpell": "awatixian",
                "level": 3,
                "name": "阿瓦提县",
                "parent": "482"
              },
              {
                "code": "4967",
                "fullSpell": "xinhexian",
                "level": 3,
                "name": "新和县",
                "parent": "482"
              }
            ],
            "code": "482",
            "fullSpell": "akesudiqu",
            "level": 2,
            "name": "阿克苏地区",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "4959",
                "fullSpell": "weilixian",
                "level": 3,
                "name": "尉犁县",
                "parent": "481"
              },
              {
                "code": "4960",
                "fullSpell": "kuerleshi",
                "level": 3,
                "name": "库尔勒市",
                "parent": "481"
              },
              {
                "code": "4958",
                "fullSpell": "hejingxian",
                "level": 3,
                "name": "和静县",
                "parent": "481"
              },
              {
                "code": "4962",
                "fullSpell": "ruoqiangxian",
                "level": 3,
                "name": "若羌县",
                "parent": "481"
              },
              {
                "code": "4956",
                "fullSpell": "bohuxian",
                "level": 3,
                "name": "博湖县",
                "parent": "481"
              },
              {
                "code": "4961",
                "fullSpell": "yanqihuizuzizhixian",
                "level": 3,
                "name": "焉耆回族自治县",
                "parent": "481"
              },
              {
                "code": "9971",
                "fullSpell": "qiemoxian",
                "level": 3,
                "name": "且末县",
                "parent": "481"
              },
              {
                "code": "4963",
                "fullSpell": "luntaixian",
                "level": 3,
                "name": "轮台县",
                "parent": "481"
              },
              {
                "code": "4957",
                "fullSpell": "heshuoxian",
                "level": 3,
                "name": "和硕县",
                "parent": "481"
              }
            ],
            "code": "481",
            "fullSpell": "bayinguolengmengguzizhizhou",
            "level": 2,
            "name": "巴音郭楞蒙古自治州",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "4945",
                "fullSpell": "jimusaerxian",
                "level": 3,
                "name": "吉木萨尔县",
                "parent": "479"
              },
              {
                "code": "4952",
                "fullSpell": "fukangshi",
                "level": 3,
                "name": "阜康市",
                "parent": "479"
              },
              {
                "code": "4946",
                "fullSpell": "hutubixian",
                "level": 3,
                "name": "呼图壁县",
                "parent": "479"
              },
              {
                "code": "4949",
                "fullSpell": "muleihasakezizhixian",
                "level": 3,
                "name": "木垒哈萨克自治县",
                "parent": "479"
              },
              {
                "code": "4948",
                "fullSpell": "changjishi",
                "level": 3,
                "name": "昌吉市",
                "parent": "479"
              },
              {
                "code": "4951",
                "fullSpell": "midongqu",
                "level": 3,
                "name": "米东区",
                "parent": "479"
              },
              {
                "code": "4950",
                "fullSpell": "manasixian",
                "level": 3,
                "name": "玛纳斯县",
                "parent": "479"
              },
              {
                "code": "4947",
                "fullSpell": "qitaixian",
                "level": 3,
                "name": "奇台县",
                "parent": "479"
              }
            ],
            "code": "479",
            "fullSpell": "changjihuizuzizhizhou",
            "level": 2,
            "name": "昌吉回族自治州",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "5022",
                "fullSpell": "alaershi",
                "level": 3,
                "name": "阿拉尔市",
                "parent": "490"
              }
            ],
            "code": "490",
            "fullSpell": "alaershi",
            "level": 2,
            "name": "阿拉尔市",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "4928",
                "fullSpell": "wulumuqixian",
                "level": 3,
                "name": "乌鲁木齐县",
                "parent": "475"
              },
              {
                "code": "4931",
                "fullSpell": "xinshiqu",
                "level": 3,
                "name": "新市区",
                "parent": "475"
              },
              {
                "code": "4927",
                "fullSpell": "dongshanqu",
                "level": 3,
                "name": "东山区",
                "parent": "475"
              },
              {
                "code": "4930",
                "fullSpell": "toutunhequ",
                "level": 3,
                "name": "头屯河区",
                "parent": "475"
              },
              {
                "code": "4929",
                "fullSpell": "tianshanqu",
                "level": 3,
                "name": "天山区",
                "parent": "475"
              },
              {
                "code": "4934",
                "fullSpell": "dabanchengqu",
                "level": 3,
                "name": "达坂城区",
                "parent": "475"
              },
              {
                "code": "4932",
                "fullSpell": "shuimogouqu",
                "level": 3,
                "name": "水磨沟区",
                "parent": "475"
              },
              {
                "code": "4933",
                "fullSpell": "shayibakequ",
                "level": 3,
                "name": "沙依巴克区",
                "parent": "475"
              }
            ],
            "code": "475",
            "fullSpell": "wulumuqishi",
            "level": 2,
            "name": "乌鲁木齐市",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "4935",
                "fullSpell": "wuerhequ",
                "level": 3,
                "name": "乌尔禾区",
                "parent": "476"
              },
              {
                "code": "4938",
                "fullSpell": "baijiantanqu",
                "level": 3,
                "name": "白碱滩区",
                "parent": "476"
              },
              {
                "code": "4937",
                "fullSpell": "dushanziqu",
                "level": 3,
                "name": "独山子区",
                "parent": "476"
              },
              {
                "code": "4936",
                "fullSpell": "kelamayiqu",
                "level": 3,
                "name": "克拉玛依区",
                "parent": "476"
              }
            ],
            "code": "476",
            "fullSpell": "kelamayishi",
            "level": 2,
            "name": "克拉玛依市",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "5021",
                "fullSpell": "shihezishi",
                "level": 3,
                "name": "石河子市",
                "parent": "489"
              }
            ],
            "code": "489",
            "fullSpell": "shihezishi",
            "level": 2,
            "name": "石河子市",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "4977",
                "fullSpell": "gashixian",
                "level": 3,
                "name": "伽师县",
                "parent": "484"
              },
              {
                "code": "4978",
                "fullSpell": "yechengxian",
                "level": 3,
                "name": "叶城县",
                "parent": "484"
              },
              {
                "code": "4985",
                "fullSpell": "shufuxian",
                "level": 3,
                "name": "疏附县",
                "parent": "484"
              },
              {
                "code": "4979",
                "fullSpell": "kashishi",
                "level": 3,
                "name": "喀什市",
                "parent": "484"
              },
              {
                "code": "4983",
                "fullSpell": "zepuxian",
                "level": 3,
                "name": "泽普县",
                "parent": "484"
              },
              {
                "code": "4986",
                "fullSpell": "yingjishaxian",
                "level": 3,
                "name": "英吉沙县",
                "parent": "484"
              },
              {
                "code": "4982",
                "fullSpell": "bachuxian",
                "level": 3,
                "name": "巴楚县",
                "parent": "484"
              },
              {
                "code": "4981",
                "fullSpell": "yuepuhuxian",
                "level": 3,
                "name": "岳普湖县",
                "parent": "484"
              },
              {
                "code": "4988",
                "fullSpell": "maigaitixian",
                "level": 3,
                "name": "麦盖提县",
                "parent": "484"
              },
              {
                "code": "4987",
                "fullSpell": "shachexian",
                "level": 3,
                "name": "莎车县",
                "parent": "484"
              },
              {
                "code": "4980",
                "fullSpell": "tashikuergantajikezizhixian",
                "level": 3,
                "name": "塔什库尔干塔吉克自治县",
                "parent": "484"
              },
              {
                "code": "4984",
                "fullSpell": "shulexian",
                "level": 3,
                "name": "疏勒县",
                "parent": "484"
              }
            ],
            "code": "484",
            "fullSpell": "kashidiqu",
            "level": 2,
            "name": "喀什地区",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "5024",
                "fullSpell": "wujiaqushi",
                "level": 3,
                "name": "五家渠市",
                "parent": "492"
              }
            ],
            "code": "492",
            "fullSpell": "wujiaqushi",
            "level": 2,
            "name": "五家渠市",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "4941",
                "fullSpell": "shanshanxian",
                "level": 3,
                "name": "鄯善县",
                "parent": "477"
              },
              {
                "code": "4939",
                "fullSpell": "tulufanshi",
                "level": 3,
                "name": "吐鲁番市",
                "parent": "477"
              },
              {
                "code": "4940",
                "fullSpell": "tuokexunxian",
                "level": 3,
                "name": "托克逊县",
                "parent": "477"
              }
            ],
            "code": "477",
            "fullSpell": "tulufanshi",
            "level": 2,
            "name": "吐鲁番市",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "5002",
                "fullSpell": "gongliuxian",
                "level": 3,
                "name": "巩留县",
                "parent": "486"
              },
              {
                "code": "5004",
                "fullSpell": "zhaosuxian",
                "level": 3,
                "name": "昭苏县",
                "parent": "486"
              },
              {
                "code": "5001",
                "fullSpell": "nilekexian",
                "level": 3,
                "name": "尼勒克县",
                "parent": "486"
              },
              {
                "code": "5003",
                "fullSpell": "xinyuanxian",
                "level": 3,
                "name": "新源县",
                "parent": "486"
              },
              {
                "code": "5005",
                "fullSpell": "tekesixian",
                "level": 3,
                "name": "特克斯县",
                "parent": "486"
              },
              {
                "code": "4999",
                "fullSpell": "kuitunshi",
                "level": 3,
                "name": "奎屯市",
                "parent": "486"
              },
              {
                "code": "5000",
                "fullSpell": "chabuchaerxibozizhixian",
                "level": 3,
                "name": "察布查尔锡伯自治县",
                "parent": "486"
              },
              {
                "code": "4997",
                "fullSpell": "yiningxian",
                "level": 3,
                "name": "伊宁县",
                "parent": "486"
              },
              {
                "code": "4998",
                "fullSpell": "yiningshi",
                "level": 3,
                "name": "伊宁市",
                "parent": "486"
              },
              {
                "code": "5006",
                "fullSpell": "huochengxian",
                "level": 3,
                "name": "霍城县",
                "parent": "486"
              }
            ],
            "code": "486",
            "fullSpell": "yilihasakezizhizhou",
            "level": 2,
            "name": "伊犁哈萨克自治州",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "4990",
                "fullSpell": "hetianxian",
                "level": 3,
                "name": "和田县",
                "parent": "485"
              },
              {
                "code": "4994",
                "fullSpell": "luopuxian",
                "level": 3,
                "name": "洛浦县",
                "parent": "485"
              },
              {
                "code": "4991",
                "fullSpell": "hetianshi",
                "level": 3,
                "name": "和田市",
                "parent": "485"
              },
              {
                "code": "4992",
                "fullSpell": "moyuxian",
                "level": 3,
                "name": "墨玉县",
                "parent": "485"
              },
              {
                "code": "4995",
                "fullSpell": "pishanxian",
                "level": 3,
                "name": "皮山县",
                "parent": "485"
              },
              {
                "code": "4989",
                "fullSpell": "yutianxian",
                "level": 3,
                "name": "于田县",
                "parent": "485"
              },
              {
                "code": "4996",
                "fullSpell": "celexian",
                "level": 3,
                "name": "策勒县",
                "parent": "485"
              },
              {
                "code": "4993",
                "fullSpell": "minfengxian",
                "level": 3,
                "name": "民丰县",
                "parent": "485"
              }
            ],
            "code": "485",
            "fullSpell": "hetiandiqu",
            "level": 2,
            "name": "和田地区",
            "parent": "31"
          },
          {
            "areas": [
              {
                "code": "5013",
                "fullSpell": "eminxian",
                "level": 3,
                "name": "额敏县",
                "parent": "487"
              },
              {
                "code": "5010",
                "fullSpell": "tuolixian",
                "level": 3,
                "name": "托里县",
                "parent": "487"
              },
              {
                "code": "5007",
                "fullSpell": "wusushi",
                "level": 3,
                "name": "乌苏市",
                "parent": "487"
              },
              {
                "code": "5012",
                "fullSpell": "yuminxian",
                "level": 3,
                "name": "裕民县",
                "parent": "487"
              },
              {
                "code": "5008",
                "fullSpell": "hebukesaiermengguzizhixian",
                "level": 3,
                "name": "和布克赛尔蒙古自治县",
                "parent": "487"
              },
              {
                "code": "5009",
                "fullSpell": "tachengshi",
                "level": 3,
                "name": "塔城市",
                "parent": "487"
              },
              {
                "code": "5011",
                "fullSpell": "shawanxian",
                "level": 3,
                "name": "沙湾县",
                "parent": "487"
              }
            ],
            "code": "487",
            "fullSpell": "tachengdiqu",
            "level": 2,
            "name": "塔城地区",
            "parent": "31"
          }
        ],
        "code": "31",
        "fullSpell": "xinjiang",
        "level": 1,
        "name": "新疆维吾尔自治区"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "4524",
                "fullSpell": "zhenxiongxian",
                "level": 3,
                "name": "镇雄县",
                "parent": "419"
              },
              {
                "code": "4522",
                "fullSpell": "yanjinxian",
                "level": 3,
                "name": "盐津县",
                "parent": "419"
              },
              {
                "code": "4516",
                "fullSpell": "weixinxian",
                "level": 3,
                "name": "威信县",
                "parent": "419"
              },
              {
                "code": "4519",
                "fullSpell": "zhaoyangqu",
                "level": 3,
                "name": "昭阳区",
                "parent": "419"
              },
              {
                "code": "4520",
                "fullSpell": "shuifuxian",
                "level": 3,
                "name": "水富县",
                "parent": "419"
              },
              {
                "code": "4515",
                "fullSpell": "daguanxian",
                "level": 3,
                "name": "大关县",
                "parent": "419"
              },
              {
                "code": "4523",
                "fullSpell": "suijiangxian",
                "level": 3,
                "name": "绥江县",
                "parent": "419"
              },
              {
                "code": "4525",
                "fullSpell": "ludianxian",
                "level": 3,
                "name": "鲁甸县",
                "parent": "419"
              },
              {
                "code": "4521",
                "fullSpell": "yongshanxian",
                "level": 3,
                "name": "永善县",
                "parent": "419"
              },
              {
                "code": "4517",
                "fullSpell": "qiaojiaxian",
                "level": 3,
                "name": "巧家县",
                "parent": "419"
              },
              {
                "code": "4518",
                "fullSpell": "yiliangxian",
                "level": 3,
                "name": "彝良县",
                "parent": "419"
              }
            ],
            "code": "419",
            "fullSpell": "zhaotongshi",
            "level": 2,
            "name": "昭通市",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4548",
                "fullSpell": "lufengxian",
                "level": 3,
                "name": "禄丰县",
                "parent": "423"
              },
              {
                "code": "4539",
                "fullSpell": "yuanmouxian",
                "level": 3,
                "name": "元谋县",
                "parent": "423"
              },
              {
                "code": "4542",
                "fullSpell": "dayaoxian",
                "level": 3,
                "name": "大姚县",
                "parent": "423"
              },
              {
                "code": "4545",
                "fullSpell": "wudingxian",
                "level": 3,
                "name": "武定县",
                "parent": "423"
              },
              {
                "code": "4544",
                "fullSpell": "chuxiongshi",
                "level": 3,
                "name": "楚雄市",
                "parent": "423"
              },
              {
                "code": "4546",
                "fullSpell": "yongrenxian",
                "level": 3,
                "name": "永仁县",
                "parent": "423"
              },
              {
                "code": "4540",
                "fullSpell": "nanhuaxian",
                "level": 3,
                "name": "南华县",
                "parent": "423"
              },
              {
                "code": "4541",
                "fullSpell": "shuangbaixian",
                "level": 3,
                "name": "双柏县",
                "parent": "423"
              },
              {
                "code": "4543",
                "fullSpell": "yaoanxian",
                "level": 3,
                "name": "姚安县",
                "parent": "423"
              },
              {
                "code": "4547",
                "fullSpell": "moudingxian",
                "level": 3,
                "name": "牟定县",
                "parent": "423"
              }
            ],
            "code": "423",
            "fullSpell": "chuxiongyizuzizhizhou",
            "level": 2,
            "name": "楚雄彝族自治州",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "502000011",
                "fullSpell": "lanping",
                "level": 3,
                "name": "兰坪白族普米族自治县",
                "parent": "429"
              },
              {
                "code": "502000009",
                "fullSpell": "fugong",
                "level": 3,
                "name": "福贡县",
                "parent": "429"
              },
              {
                "code": "502000008",
                "fullSpell": "lushuishi",
                "level": 3,
                "name": "泸水市",
                "parent": "429"
              },
              {
                "code": "502000010",
                "fullSpell": "gongshan",
                "level": 3,
                "name": "贡山独龙族怒族自治县",
                "parent": "429"
              }
            ],
            "code": "429",
            "fullSpell": "nujianglisuzuzizhizhou",
            "level": 2,
            "name": "怒江傈僳族自治州",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4592",
                "fullSpell": "xianggelilashi",
                "level": 3,
                "name": "香格里拉市",
                "parent": "430"
              },
              {
                "code": "4590",
                "fullSpell": "deqinxian",
                "level": 3,
                "name": "德钦县",
                "parent": "430"
              },
              {
                "code": "4591",
                "fullSpell": "weixilisuzuzizhixian",
                "level": 3,
                "name": "维西傈僳族自治县",
                "parent": "430"
              }
            ],
            "code": "430",
            "fullSpell": "diqingcangzuzizhizhou",
            "level": 2,
            "name": "迪庆藏族自治州",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4586",
                "fullSpell": "mangshi",
                "level": 3,
                "name": "芒市",
                "parent": "428"
              },
              {
                "code": "4588",
                "fullSpell": "yingjiangxian",
                "level": 3,
                "name": "盈江县",
                "parent": "428"
              },
              {
                "code": "4589",
                "fullSpell": "longchuanxian",
                "level": 3,
                "name": "陇川县",
                "parent": "428"
              },
              {
                "code": "4585",
                "fullSpell": "lianghexian",
                "level": 3,
                "name": "梁河县",
                "parent": "428"
              },
              {
                "code": "4587",
                "fullSpell": "ruilishi",
                "level": 3,
                "name": "瑞丽市",
                "parent": "428"
              }
            ],
            "code": "428",
            "fullSpell": "dehongdaizujingpozuzizhizhou",
            "level": 2,
            "name": "德宏傣族景颇族自治州",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4498",
                "fullSpell": "luliangxian",
                "level": 3,
                "name": "陆良县",
                "parent": "416"
              },
              {
                "code": "4496",
                "fullSpell": "zhanyiqu",
                "level": 3,
                "name": "沾益区",
                "parent": "416"
              },
              {
                "code": "4499",
                "fullSpell": "malongxian",
                "level": 3,
                "name": "马龙县",
                "parent": "416"
              },
              {
                "code": "4493",
                "fullSpell": "xuanweishi",
                "level": 3,
                "name": "宣威市",
                "parent": "416"
              },
              {
                "code": "4492",
                "fullSpell": "huizexian",
                "level": 3,
                "name": "会泽县",
                "parent": "416"
              },
              {
                "code": "4497",
                "fullSpell": "luopingxian",
                "level": 3,
                "name": "罗平县",
                "parent": "416"
              },
              {
                "code": "4500",
                "fullSpell": "qilinqu",
                "level": 3,
                "name": "麒麟区",
                "parent": "416"
              },
              {
                "code": "4495",
                "fullSpell": "shizongxian",
                "level": 3,
                "name": "师宗县",
                "parent": "416"
              },
              {
                "code": "4494",
                "fullSpell": "fuyuanxian",
                "level": 3,
                "name": "富源县",
                "parent": "416"
              }
            ],
            "code": "416",
            "fullSpell": "qujingshi",
            "level": 2,
            "name": "曲靖市",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4569",
                "fullSpell": "malipoxian",
                "level": 3,
                "name": "麻栗坡县",
                "parent": "425"
              },
              {
                "code": "4568",
                "fullSpell": "maguanxian",
                "level": 3,
                "name": "马关县",
                "parent": "425"
              },
              {
                "code": "4566",
                "fullSpell": "yanshanxian",
                "level": 3,
                "name": "砚山县",
                "parent": "425"
              },
              {
                "code": "4567",
                "fullSpell": "xichouxian",
                "level": 3,
                "name": "西畴县",
                "parent": "425"
              },
              {
                "code": "4564",
                "fullSpell": "guangnanxian",
                "level": 3,
                "name": "广南县",
                "parent": "425"
              },
              {
                "code": "4565",
                "fullSpell": "wenshanshi",
                "level": 3,
                "name": "文山市",
                "parent": "425"
              },
              {
                "code": "4563",
                "fullSpell": "funingxian",
                "level": 3,
                "name": "富宁县",
                "parent": "425"
              },
              {
                "code": "4562",
                "fullSpell": "qiubeixian",
                "level": 3,
                "name": "丘北县",
                "parent": "425"
              }
            ],
            "code": "425",
            "fullSpell": "wenshanzhuangzumiaozuzizhizhou",
            "level": 2,
            "name": "文山壮族苗族自治州",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4487",
                "fullSpell": "jinningxian",
                "level": 3,
                "name": "晋宁区",
                "parent": "415"
              },
              {
                "code": "4483",
                "fullSpell": "yiliangxian",
                "level": 3,
                "name": "宜良县",
                "parent": "415"
              },
              {
                "code": "4489",
                "fullSpell": "shilinyizuzizhixian",
                "level": 3,
                "name": "石林彝族自治县",
                "parent": "415"
              },
              {
                "code": "4490",
                "fullSpell": "luquanyizumiaozuzizhixian",
                "level": 3,
                "name": "禄劝彝族苗族自治县",
                "parent": "415"
              },
              {
                "code": "4491",
                "fullSpell": "xishanqu",
                "level": 3,
                "name": "西山区",
                "parent": "415"
              },
              {
                "code": "4488",
                "fullSpell": "panlongqu",
                "level": 3,
                "name": "盘龙区",
                "parent": "415"
              },
              {
                "code": "4478",
                "fullSpell": "dongchuanqu",
                "level": 3,
                "name": "东川区",
                "parent": "415"
              },
              {
                "code": "4481",
                "fullSpell": "anningshi",
                "level": 3,
                "name": "安宁市",
                "parent": "415"
              },
              {
                "code": "4485",
                "fullSpell": "xundianhuizuyizuzizhixian",
                "level": 3,
                "name": "寻甸回族彝族自治县",
                "parent": "415"
              },
              {
                "code": "4480",
                "fullSpell": "chenggongxian",
                "level": 3,
                "name": "呈贡区",
                "parent": "415"
              },
              {
                "code": "4479",
                "fullSpell": "wuhuaqu",
                "level": 3,
                "name": "五华区",
                "parent": "415"
              },
              {
                "code": "4486",
                "fullSpell": "songmingxian",
                "level": 3,
                "name": "嵩明县",
                "parent": "415"
              },
              {
                "code": "4482",
                "fullSpell": "guanduqu",
                "level": 3,
                "name": "官渡区",
                "parent": "415"
              },
              {
                "code": "4484",
                "fullSpell": "fuminxian",
                "level": 3,
                "name": "富民县",
                "parent": "415"
              }
            ],
            "code": "415",
            "fullSpell": "kunmingshi",
            "level": 2,
            "name": "昆明市",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4558",
                "fullSpell": "honghexian",
                "level": 3,
                "name": "红河县",
                "parent": "424"
              },
              {
                "code": "4551",
                "fullSpell": "pingbianmiaozuzizhixian",
                "level": 3,
                "name": "屏边苗族自治县",
                "parent": "424"
              },
              {
                "code": "4550",
                "fullSpell": "yuanyangxian",
                "level": 3,
                "name": "元阳县",
                "parent": "424"
              },
              {
                "code": "4557",
                "fullSpell": "shipingxian",
                "level": 3,
                "name": "石屏县",
                "parent": "424"
              },
              {
                "code": "4560",
                "fullSpell": "mengzishi",
                "level": 3,
                "name": "蒙自市",
                "parent": "424"
              },
              {
                "code": "4553",
                "fullSpell": "kaiyuanshi",
                "level": 3,
                "name": "开远市",
                "parent": "424"
              },
              {
                "code": "4559",
                "fullSpell": "lvchunxian",
                "level": 3,
                "name": "绿春县",
                "parent": "424"
              },
              {
                "code": "4555",
                "fullSpell": "hekouyaozuzizhixian",
                "level": 3,
                "name": "河口瑶族自治县",
                "parent": "424"
              },
              {
                "code": "4556",
                "fullSpell": "luxixian",
                "level": 3,
                "name": "泸西县",
                "parent": "424"
              },
              {
                "code": "4552",
                "fullSpell": "jianshuixian",
                "level": 3,
                "name": "建水县",
                "parent": "424"
              },
              {
                "code": "4549",
                "fullSpell": "gejiushi",
                "level": 3,
                "name": "个旧市",
                "parent": "424"
              },
              {
                "code": "4561",
                "fullSpell": "jinpingmiaozuyaozudaizuzizhixian",
                "level": 3,
                "name": "金平苗族瑶族傣族自治县",
                "parent": "424"
              },
              {
                "code": "4554",
                "fullSpell": "mileshi",
                "level": 3,
                "name": "弥勒市",
                "parent": "424"
              }
            ],
            "code": "424",
            "fullSpell": "honghehanizuyizuzizhizhou",
            "level": 2,
            "name": "红河哈尼族彝族自治州",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "502000018",
                "fullSpell": "jiangcheng",
                "level": 3,
                "name": "江城哈尼族彝族自治县",
                "parent": "502000012"
              },
              {
                "code": "502000019",
                "fullSpell": "ningpu",
                "level": 3,
                "name": "宁洱哈尼族彝族自治县",
                "parent": "502000012"
              },
              {
                "code": "502000020",
                "fullSpell": "mojiang",
                "level": 3,
                "name": "墨江哈尼族自治县",
                "parent": "502000012"
              },
              {
                "code": "502000021",
                "fullSpell": "jingdong",
                "level": 3,
                "name": "景东彝族自治县",
                "parent": "502000012"
              },
              {
                "code": "502000023",
                "fullSpell": "zhenyuan",
                "level": 3,
                "name": "镇沅彝族哈尼族拉祜族自治县",
                "parent": "502000012"
              },
              {
                "code": "502000013",
                "fullSpell": "simaoqu",
                "level": 3,
                "name": "思茅区",
                "parent": "502000012"
              },
              {
                "code": "502000022",
                "fullSpell": "jinggu",
                "level": 3,
                "name": "景谷傣族彝族自治县",
                "parent": "502000012"
              },
              {
                "code": "502000017",
                "fullSpell": "menglian",
                "level": 3,
                "name": "孟连傣族拉祜族佤族自治县",
                "parent": "502000012"
              },
              {
                "code": "502000014",
                "fullSpell": "langliang",
                "level": 3,
                "name": "澜沧拉祜族自治县",
                "parent": "502000012"
              },
              {
                "code": "502000015",
                "fullSpell": "ximeng",
                "level": 3,
                "name": "西盟佤族自治县",
                "parent": "502000012"
              }
            ],
            "code": "502000012",
            "fullSpell": "puershi",
            "level": 2,
            "name": "普洱市",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4526",
                "fullSpell": "huapingxian",
                "level": 3,
                "name": "华坪县",
                "parent": "420"
              },
              {
                "code": "4528",
                "fullSpell": "ninglangyizuzizhixian",
                "level": 3,
                "name": "宁蒗彝族自治县",
                "parent": "420"
              },
              {
                "code": "4527",
                "fullSpell": "guchengqu",
                "level": 3,
                "name": "古城区",
                "parent": "420"
              },
              {
                "code": "4530",
                "fullSpell": "yulongnaxizuzizhixian",
                "level": 3,
                "name": "玉龙纳西族自治县",
                "parent": "420"
              },
              {
                "code": "4529",
                "fullSpell": "yongshengxian",
                "level": 3,
                "name": "永胜县",
                "parent": "420"
              }
            ],
            "code": "420",
            "fullSpell": "lijiangshi",
            "level": 2,
            "name": "丽江市",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4571",
                "fullSpell": "menglaxian",
                "level": 3,
                "name": "勐腊县",
                "parent": "426"
              },
              {
                "code": "4572",
                "fullSpell": "jinghongshi",
                "level": 3,
                "name": "景洪市",
                "parent": "426"
              },
              {
                "code": "4570",
                "fullSpell": "menghaixian",
                "level": 3,
                "name": "勐海县",
                "parent": "426"
              }
            ],
            "code": "426",
            "fullSpell": "xishuangbannadaizuzizhizhou",
            "level": 2,
            "name": "西双版纳傣族自治州",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4511",
                "fullSpell": "changningxian",
                "level": 3,
                "name": "昌宁县",
                "parent": "418"
              },
              {
                "code": "4510",
                "fullSpell": "shidianxian",
                "level": 3,
                "name": "施甸县",
                "parent": "418"
              },
              {
                "code": "4513",
                "fullSpell": "longyangqu",
                "level": 3,
                "name": "隆阳区",
                "parent": "418"
              },
              {
                "code": "4514",
                "fullSpell": "longlingxian",
                "level": 3,
                "name": "龙陵县",
                "parent": "418"
              },
              {
                "code": "4512",
                "fullSpell": "tengchongshi",
                "level": 3,
                "name": "腾冲市",
                "parent": "418"
              }
            ],
            "code": "418",
            "fullSpell": "baoshanshi",
            "level": 2,
            "name": "保山市",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4583",
                "fullSpell": "xiangyunxian",
                "level": 3,
                "name": "祥云县",
                "parent": "427"
              },
              {
                "code": "4584",
                "fullSpell": "heqingxian",
                "level": 3,
                "name": "鹤庆县",
                "parent": "427"
              },
              {
                "code": "4577",
                "fullSpell": "binchuanxian",
                "level": 3,
                "name": "宾川县",
                "parent": "427"
              },
              {
                "code": "4580",
                "fullSpell": "yongpingxian",
                "level": 3,
                "name": "永平县",
                "parent": "427"
              },
              {
                "code": "4581",
                "fullSpell": "eryuanxian",
                "level": 3,
                "name": "洱源县",
                "parent": "427"
              },
              {
                "code": "4573",
                "fullSpell": "yunlongxian",
                "level": 3,
                "name": "云龙县",
                "parent": "427"
              },
              {
                "code": "4575",
                "fullSpell": "nanjianyizuzizhixian",
                "level": 3,
                "name": "南涧彝族自治县",
                "parent": "427"
              },
              {
                "code": "4579",
                "fullSpell": "miduxian",
                "level": 3,
                "name": "弥渡县",
                "parent": "427"
              },
              {
                "code": "4574",
                "fullSpell": "jianchuanxian",
                "level": 3,
                "name": "剑川县",
                "parent": "427"
              },
              {
                "code": "4582",
                "fullSpell": "yangbiyizuzizhixian",
                "level": 3,
                "name": "漾濞彝族自治县",
                "parent": "427"
              },
              {
                "code": "4578",
                "fullSpell": "weishanyizuhuizuzizhixian",
                "level": 3,
                "name": "巍山彝族回族自治县",
                "parent": "427"
              },
              {
                "code": "4576",
                "fullSpell": "dalishi",
                "level": 3,
                "name": "大理市",
                "parent": "427"
              }
            ],
            "code": "427",
            "fullSpell": "dalibaizuzizhizhou",
            "level": 2,
            "name": "大理白族自治州",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4533",
                "fullSpell": "fengqingxian",
                "level": 3,
                "name": "凤庆县",
                "parent": "422"
              },
              {
                "code": "4535",
                "fullSpell": "yongdexian",
                "level": 3,
                "name": "永德县",
                "parent": "422"
              },
              {
                "code": "4538",
                "fullSpell": "zhenkangxian",
                "level": 3,
                "name": "镇康县",
                "parent": "422"
              },
              {
                "code": "4536",
                "fullSpell": "cangyuanwazuzizhixian",
                "level": 3,
                "name": "沧源佤族自治县",
                "parent": "422"
              },
              {
                "code": "4532",
                "fullSpell": "yunxian",
                "level": 3,
                "name": "云县",
                "parent": "422"
              },
              {
                "code": "4537",
                "fullSpell": "gengmadaizuwazuzizhixian",
                "level": 3,
                "name": "耿马傣族佤族自治县",
                "parent": "422"
              },
              {
                "code": "4534",
                "fullSpell": "shuangjianglahuzuwazubulangzudaizuzizhixian",
                "level": 3,
                "name": "双江拉祜族佤族布朗族傣族自治县",
                "parent": "422"
              },
              {
                "code": "4531",
                "fullSpell": "linxiangqu",
                "level": 3,
                "name": "临翔区",
                "parent": "422"
              }
            ],
            "code": "422",
            "fullSpell": "lincangshi",
            "level": 2,
            "name": "临沧市",
            "parent": "25"
          },
          {
            "areas": [
              {
                "code": "4503",
                "fullSpell": "eshanyizuzizhixian",
                "level": 3,
                "name": "峨山彝族自治县",
                "parent": "417"
              },
              {
                "code": "4506",
                "fullSpell": "jiangchuanqu",
                "level": 3,
                "name": "江川区",
                "parent": "417"
              },
              {
                "code": "4504",
                "fullSpell": "xinpingyizudaizuzizhixian",
                "level": 3,
                "name": "新平彝族傣族自治县",
                "parent": "417"
              },
              {
                "code": "4507",
                "fullSpell": "chengjiangxian",
                "level": 3,
                "name": "澄江县",
                "parent": "417"
              },
              {
                "code": "4502",
                "fullSpell": "huaningxian",
                "level": 3,
                "name": "华宁县",
                "parent": "417"
              },
              {
                "code": "4509",
                "fullSpell": "tonghaixian",
                "level": 3,
                "name": "通海县",
                "parent": "417"
              },
              {
                "code": "4505",
                "fullSpell": "yimenxian",
                "level": 3,
                "name": "易门县",
                "parent": "417"
              },
              {
                "code": "4501",
                "fullSpell": "yuanjianghanizuyizudaizuzizhixian",
                "level": 3,
                "name": "元江哈尼族彝族傣族自治县",
                "parent": "417"
              },
              {
                "code": "4508",
                "fullSpell": "hongtaqu",
                "level": 3,
                "name": "红塔区",
                "parent": "417"
              }
            ],
            "code": "417",
            "fullSpell": "yuxishi",
            "level": 2,
            "name": "玉溪市",
            "parent": "25"
          }
        ],
        "code": "25",
        "fullSpell": "yunnansheng",
        "level": 1,
        "name": "云南省"
      },
      {
        "citys": [
          {
            "areas": [
              {
                "code": "24400001",
                "fullSpell": "beilunqu",
                "level": 3,
                "name": "北仑区",
                "parent": "8130001"
              },
              {
                "code": "24390001",
                "fullSpell": "jiangbeiqu2",
                "level": 3,
                "name": "江北区",
                "parent": "8130001"
              },
              {
                "code": "24470001",
                "fullSpell": "fenghuaqu",
                "level": 3,
                "name": "奉化区",
                "parent": "8130001"
              },
              {
                "code": "24440001",
                "fullSpell": "ninghaixian",
                "level": 3,
                "name": "宁海县",
                "parent": "8130001"
              },
              {
                "code": "24450001",
                "fullSpell": "yuyaoshi",
                "level": 3,
                "name": "余姚市",
                "parent": "8130001"
              },
              {
                "code": "24430001",
                "fullSpell": "xiangshanxian",
                "level": 3,
                "name": "象山县",
                "parent": "8130001"
              },
              {
                "code": "24420001",
                "fullSpell": "yinzhouqu",
                "level": 3,
                "name": "鄞州区",
                "parent": "8130001"
              },
              {
                "code": "24410001",
                "fullSpell": "zhenhaiqu",
                "level": 3,
                "name": "镇海区",
                "parent": "8130001"
              },
              {
                "code": "24460001",
                "fullSpell": "cixishi",
                "level": 3,
                "name": "慈溪市",
                "parent": "8130001"
              },
              {
                "code": "24380001",
                "fullSpell": "jiangdongqu",
                "level": 3,
                "name": "江东区",
                "parent": "8130001"
              },
              {
                "code": "24370001",
                "fullSpell": "haishuqu",
                "level": 3,
                "name": "海曙区",
                "parent": "8130001"
              }
            ],
            "code": "8130001",
            "fullSpell": "ningboshi",
            "level": 2,
            "name": "宁波市",
            "parent": "11"
          },
          {
            "areas": [
              {
                "code": "24540001",
                "fullSpell": "cangnanxian",
                "level": 3,
                "name": "苍南县",
                "parent": "8140001"
              },
              {
                "code": "24530001",
                "fullSpell": "pingyangxian",
                "level": 3,
                "name": "平阳县",
                "parent": "8140001"
              },
              {
                "code": "24510001",
                "fullSpell": "dongtouqu",
                "level": 3,
                "name": "洞头区",
                "parent": "8140001"
              },
              {
                "code": "24520001",
                "fullSpell": "yongjiaxian",
                "level": 3,
                "name": "永嘉县",
                "parent": "8140001"
              },
              {
                "code": "24490001",
                "fullSpell": "longwanqu",
                "level": 3,
                "name": "龙湾区",
                "parent": "8140001"
              },
              {
                "code": "24480001",
                "fullSpell": "luchengqu",
                "level": 3,
                "name": "鹿城区",
                "parent": "8140001"
              },
              {
                "code": "24500001",
                "fullSpell": "ouhaiqu",
                "level": 3,
                "name": "瓯海区",
                "parent": "8140001"
              },
              {
                "code": "24570001",
                "fullSpell": "ruianshi",
                "level": 3,
                "name": "瑞安市",
                "parent": "8140001"
              },
              {
                "code": "24580001",
                "fullSpell": "leqingshi",
                "level": 3,
                "name": "乐清市",
                "parent": "8140001"
              },
              {
                "code": "24560001",
                "fullSpell": "taishunxian",
                "level": 3,
                "name": "泰顺县",
                "parent": "8140001"
              },
              {
                "code": "24550001",
                "fullSpell": "wenchengxian",
                "level": 3,
                "name": "文成县",
                "parent": "8140001"
              }
            ],
            "code": "8140001",
            "fullSpell": "wenzhoushi",
            "level": 2,
            "name": "温州市",
            "parent": "11"
          },
          {
            "areas": [
              {
                "code": "24920001",
                "fullSpell": "dinghaiqu",
                "level": 3,
                "name": "定海区",
                "parent": "8200001"
              },
              {
                "code": "24940001",
                "fullSpell": "daishanxian",
                "level": 3,
                "name": "岱山县",
                "parent": "8200001"
              },
              {
                "code": "24950001",
                "fullSpell": "cengsixian",
                "level": 3,
                "name": "嵊泗县",
                "parent": "8200001"
              },
              {
                "code": "24930001",
                "fullSpell": "putuoqu2",
                "level": 3,
                "name": "普陀区",
                "parent": "8200001"
              }
            ],
            "code": "8200001",
            "fullSpell": "zhoushanshi",
            "level": 2,
            "name": "舟山市",
            "parent": "11"
          },
          {
            "areas": [
              {
                "code": "24790001",
                "fullSpell": "wuyixian2",
                "level": 3,
                "name": "武义县",
                "parent": "8180001"
              },
              {
                "code": "24830001",
                "fullSpell": "yiwushi",
                "level": 3,
                "name": "义乌市",
                "parent": "8180001"
              },
              {
                "code": "24850001",
                "fullSpell": "yongkangshi",
                "level": 3,
                "name": "永康市",
                "parent": "8180001"
              },
              {
                "code": "24780001",
                "fullSpell": "jindongqu",
                "level": 3,
                "name": "金东区",
                "parent": "8180001"
              },
              {
                "code": "24810001",
                "fullSpell": "pananxian",
                "level": 3,
                "name": "磐安县",
                "parent": "8180001"
              },
              {
                "code": "24820001",
                "fullSpell": "lanxishi",
                "level": 3,
                "name": "兰溪市",
                "parent": "8180001"
              },
              {
                "code": "24770001",
                "fullSpell": "wuchengqu",
                "level": 3,
                "name": "婺城区",
                "parent": "8180001"
              },
              {
                "code": "24840001",
                "fullSpell": "dongyangshi",
                "level": 3,
                "name": "东阳市",
                "parent": "8180001"
              },
              {
                "code": "24800001",
                "fullSpell": "pujiangxina",
                "level": 3,
                "name": "浦江县",
                "parent": "8180001"
              }
            ],
            "code": "8180001",
            "fullSpell": "jinhuashi",
            "level": 2,
            "name": "金华市",
            "parent": "11"
          },
          {
            "areas": [
              {
                "code": "24870001",
                "fullSpell": "qujiangqu2",
                "level": 3,
                "name": "衢江区",
                "parent": "8190001"
              },
              {
                "code": "24910001",
                "fullSpell": "jiangshanshi",
                "level": 3,
                "name": "江山市",
                "parent": "8190001"
              },
              {
                "code": "24900001",
                "fullSpell": "longyouxian",
                "level": 3,
                "name": "龙游县",
                "parent": "8190001"
              },
              {
                "code": "24890001",
                "fullSpell": "kaihuaxian",
                "level": 3,
                "name": "开化县",
                "parent": "8190001"
              },
              {
                "code": "24860001",
                "fullSpell": "kechengqu",
                "level": 3,
                "name": "柯城区",
                "parent": "8190001"
              },
              {
                "code": "24880001",
                "fullSpell": "changshanxian2",
                "level": 3,
                "name": "常山县",
                "parent": "8190001"
              }
            ],
            "code": "8190001",
            "fullSpell": "quzhoushi",
            "level": 2,
            "name": "衢州市",
            "parent": "11"
          },
          {
            "areas": [
              {
                "code": "25020001",
                "fullSpell": "xianjuxian",
                "level": 3,
                "name": "仙居县",
                "parent": "8210001"
              },
              {
                "code": "25010001",
                "fullSpell": "tiantaixian",
                "level": 3,
                "name": "天台县",
                "parent": "8210001"
              },
              {
                "code": "24980001",
                "fullSpell": "luqiaoqu",
                "level": 3,
                "name": "路桥区",
                "parent": "8210001"
              },
              {
                "code": "25000001",
                "fullSpell": "sanmenxian",
                "level": 3,
                "name": "三门县",
                "parent": "8210001"
              },
              {
                "code": "25030001",
                "fullSpell": "wenlingshi",
                "level": 3,
                "name": "温岭市",
                "parent": "8210001"
              },
              {
                "code": "24990001",
                "fullSpell": "yuhuanshi",
                "level": 3,
                "name": "玉环市",
                "parent": "8210001"
              },
              {
                "code": "24960001",
                "fullSpell": "jiaojiangqu",
                "level": 3,
                "name": "椒江区",
                "parent": "8210001"
              },
              {
                "code": "24970001",
                "fullSpell": "huangyanqu",
                "level": 3,
                "name": "黄岩区",
                "parent": "8210001"
              },
              {
                "code": "25040001",
                "fullSpell": "linhaishi",
                "level": 3,
                "name": "临海市",
                "parent": "8210001"
              }
            ],
            "code": "8210001",
            "fullSpell": "taizhoushi",
            "level": 2,
            "name": "台州市",
            "parent": "11"
          },
          {
            "areas": [
              {
                "code": "24690001",
                "fullSpell": "changxingxian",
                "level": 3,
                "name": "长兴县",
                "parent": "8160001"
              },
              {
                "code": "24680001",
                "fullSpell": "deqingxian2",
                "level": 3,
                "name": "德清县",
                "parent": "8160001"
              },
              {
                "code": "24670001",
                "fullSpell": "nanxunqu",
                "level": 3,
                "name": "南浔区",
                "parent": "8160001"
              },
              {
                "code": "24660001",
                "fullSpell": "wuxingqu",
                "level": 3,
                "name": "吴兴区",
                "parent": "8160001"
              },
              {
                "code": "24700001",
                "fullSpell": "anjixian",
                "level": 3,
                "name": "安吉县",
                "parent": "8160001"
              }
            ],
            "code": "8160001",
            "fullSpell": "huzhoushi",
            "level": 2,
            "name": "湖州市",
            "parent": "11"
          },
          {
            "areas": [
              {
                "code": "25070001",
                "fullSpell": "jinyunxian",
                "level": 3,
                "name": "缙云县",
                "parent": "8220001"
              },
              {
                "code": "25100001",
                "fullSpell": "yunhexina",
                "level": 3,
                "name": "云和县",
                "parent": "8220001"
              },
              {
                "code": "25120001",
                "fullSpell": "jingningxian",
                "level": 3,
                "name": "景宁县",
                "parent": "8220001"
              },
              {
                "code": "25130001",
                "fullSpell": "longquanshi",
                "level": 3,
                "name": "龙泉市",
                "parent": "8220001"
              },
              {
                "code": "25060001",
                "fullSpell": "qingtianxian",
                "level": 3,
                "name": "青田县",
                "parent": "8220001"
              },
              {
                "code": "25090001",
                "fullSpell": "songyangxian",
                "level": 3,
                "name": "松阳县",
                "parent": "8220001"
              },
              {
                "code": "25110001",
                "fullSpell": "qingyuanxian2",
                "level": 3,
                "name": "庆元县",
                "parent": "8220001"
              },
              {
                "code": "25050001",
                "fullSpell": "lianduqu",
                "level": 3,
                "name": "莲都区",
                "parent": "8220001"
              },
              {
                "code": "25080001",
                "fullSpell": "suichangxian",
                "level": 3,
                "name": "遂昌县",
                "parent": "8220001"
              }
            ],
            "code": "8220001",
            "fullSpell": "lishuishi",
            "level": 2,
            "name": "丽水市",
            "parent": "11"
          },
          {
            "areas": [
              {
                "code": "24650001",
                "fullSpell": "tongxinagshi",
                "level": 3,
                "name": "桐乡市",
                "parent": "8150001"
              },
              {
                "code": "24610001",
                "fullSpell": "jiashanxian",
                "level": 3,
                "name": "嘉善县",
                "parent": "8150001"
              },
              {
                "code": "24590001",
                "fullSpell": "nanhuqu",
                "level": 3,
                "name": "南湖区",
                "parent": "8150001"
              },
              {
                "code": "24600001",
                "fullSpell": "xiuzhouqu",
                "level": 3,
                "name": "秀洲区",
                "parent": "8150001"
              },
              {
                "code": "24630001",
                "fullSpell": "hainingshi",
                "level": 3,
                "name": "海宁市",
                "parent": "8150001"
              },
              {
                "code": "24620001",
                "fullSpell": "haiyanxian2",
                "level": 3,
                "name": "海盐县",
                "parent": "8150001"
              },
              {
                "code": "24640001",
                "fullSpell": "pinghushi",
                "level": 3,
                "name": "平湖市",
                "parent": "8150001"
              }
            ],
            "code": "8150001",
            "fullSpell": "jiaxingshi",
            "level": 2,
            "name": "嘉兴市",
            "parent": "11"
          },
          {
            "areas": [
              {
                "code": "24730001",
                "fullSpell": "shangyuqu",
                "level": 3,
                "name": "上虞区",
                "parent": "8170001"
              },
              {
                "code": "24720001",
                "fullSpell": "keqiaoqu",
                "level": 3,
                "name": "柯桥区",
                "parent": "8170001"
              },
              {
                "code": "24760001",
                "fullSpell": "chengzhoushi",
                "level": 3,
                "name": "嵊州市",
                "parent": "8170001"
              },
              {
                "code": "24710001",
                "fullSpell": "yuechengqu",
                "level": 3,
                "name": "越城区",
                "parent": "8170001"
              },
              {
                "code": "24750001",
                "fullSpell": "zhujishi",
                "level": 3,
                "name": "诸暨市",
                "parent": "8170001"
              },
              {
                "code": "24740001",
                "fullSpell": "xinchangxian",
                "level": 3,
                "name": "新昌县",
                "parent": "8170001"
              }
            ],
            "code": "8170001",
            "fullSpell": "shaoxingshi",
            "level": 2,
            "name": "绍兴市",
            "parent": "11"
          },
          {
            "areas": [
              {
                "code": "24330001",
                "fullSpell": "chunanxian",
                "level": 3,
                "name": "淳安县",
                "parent": "8120001"
              },
              {
                "code": "24260001",
                "fullSpell": "jiangganqu",
                "level": 3,
                "name": "江干区",
                "parent": "8120001"
              },
              {
                "code": "24300001",
                "fullSpell": "xiaoshanqu",
                "level": 3,
                "name": "萧山区",
                "parent": "8120001"
              },
              {
                "code": "24320001",
                "fullSpell": "tongluxian",
                "level": 3,
                "name": "桐庐县",
                "parent": "8120001"
              },
              {
                "code": "24290001",
                "fullSpell": "binjiangqu",
                "level": 3,
                "name": "滨江区",
                "parent": "8120001"
              },
              {
                "code": "24350001",
                "fullSpell": "fuyangshi2",
                "level": 3,
                "name": "富阳区",
                "parent": "8120001"
              },
              {
                "code": "24310001",
                "fullSpell": "yuhangqu",
                "level": 3,
                "name": "余杭区",
                "parent": "8120001"
              },
              {
                "code": "24280001",
                "fullSpell": "xihuqu",
                "level": 3,
                "name": "西湖区",
                "parent": "8120001"
              },
              {
                "code": "24340001",
                "fullSpell": "jiandeshi",
                "level": 3,
                "name": "建德市",
                "parent": "8120001"
              },
              {
                "code": "24250001",
                "fullSpell": "xiachengqu",
                "level": 3,
                "name": "下城区",
                "parent": "8120001"
              },
              {
                "code": "24270001",
                "fullSpell": "gongshuqu",
                "level": 3,
                "name": "拱墅区",
                "parent": "8120001"
              },
              {
                "code": "24240001",
                "fullSpell": "shangchengqu",
                "level": 3,
                "name": "上城区",
                "parent": "8120001"
              },
              {
                "code": "24360001",
                "fullSpell": "linanshi",
                "level": 3,
                "name": "临安区",
                "parent": "8120001"
              }
            ],
            "code": "8120001",
            "fullSpell": "hangzhoushi",
            "level": 2,
            "name": "杭州市",
            "parent": "11"
          }
        ],
        "code": "11",
        "fullSpell": "zhejiangsheng",
        "level": 1,
        "name": "浙江省"
      }
    ];

  callBack(info);
}

module.exports.getCityInfo = getCityInfo;