import { v4 as uuidv4 } from 'uuid';

// const Data = fetch('https://randomuser.me/api/?results=10').then(res=>res.json()).then(data=>data.results)




const initialData = {
 /* tasks: Data,*/

 tasks1: {
   "task-1": { id: "task-1", content: "Pick your nose" },
   "task-2": { id: "task-2", content: "Eat a booger" },
   "task-3": { id: "task-3", content: "Let a fart" },
   "task-4": { id: "task-4", content: "Pick a scab" }
 },
  tasks: {
   "task-1":{
      "id": "task-1",
       
    "gender":"female",
    "name":{
       "title":"Mrs",
       "first":"Lea",
       "last":"Pelletier"
    },
    "location":{
       "street":{
          "number":2973,
          "name":"Duke St"
       },
       "city":"Lasalle",
       "state":"Northwest Territories",
       "country":"Canada",
       "postcode":"M8O 7D4",
       "coordinates":{
          "latitude":"-58.6863",
          "longitude":"15.6748"
       },
       "timezone":{
          "offset":"+10:00",
          "description":"Eastern Australia, Guam, Vladivostok"
       }
    },
    "email":"lea.pelletier@example.com",
    "login":{
       "uuid":"ac5f4686-5c5d-4e17-90a0-c918575bdb1e",
       "username":"angrypeacock642",
       "password":"pavlov",
       "salt":"Vv15hBhb",
       "md5":"f7b3dfc9dc3e72594d563a3bddbc8ffb",
       "sha1":"82a1ac87b29370e8f3cbecf17d23f6890107c29d",
       "sha256":"22de0c6b560c4fbb5cb339477e670d63455f18795fbae74d97bc871bf937552b"
    },
    "dob":{
       "date":"1949-06-12T12:45:09.494Z",
       "age":73
    },
    "registered":{
       "date":"2011-01-18T06:23:56.968Z",
       "age":11
    },
    "phone":"437-870-9479",
    "cell":"347-172-3011",
    
    "picture":{
       "large":"https://randomuser.me/api/portraits/women/32.jpg",
       "medium":"https://randomuser.me/api/portraits/med/women/32.jpg",
       "thumbnail":"https://randomuser.me/api/portraits/thumb/women/32.jpg"
    },
    "nat":"CA"
   
 },
 "task-2":{
   "id": "task-2",
    "gender":"male",
    "name":{
       "title":"Mr",
       "first":"Hector",
       "last":"Diez"
    },
    "location":{
       "street":{
          "number":3155,
          "name":"Calle de La Luna"
       },
       "city":"Gijón",
       "state":"Extremadura",
       "country":"Spain",
       "postcode":76376,
       "coordinates":{
          "latitude":"-1.2497",
          "longitude":"106.8477"
       },
       "timezone":{
          "offset":"+1:00",
          "description":"Brussels, Copenhagen, Madrid, Paris"
       }
    },
    "email":"hector.diez@example.com",
    "login":{
       "uuid":"f67b1b35-0227-4d9b-a664-7375859bcf39",
       "username":"goldengorilla964",
       "password":"witch",
       "salt":"X0mMZmsy",
       "md5":"2ee846c46984d424f840d274660a104f",
       "sha1":"071c35dcff6dfeed313176010603b5502a25dd46",
       "sha256":"aa04cfb8c207bc53e3185f40fafc3d5b5a270a8818d47d09886c03080ce3388c"
    },
    "dob":{
       "date":"1983-09-10T15:21:28.853Z",
       "age":39
    },
    "registered":{
       "date":"2012-01-04T14:43:29.240Z",
       "age":10
    },
    "phone":"956-577-970",
    "cell":"668-088-538",
   
    "picture":{
       "large":"https://randomuser.me/api/portraits/men/44.jpg",
       "medium":"https://randomuser.me/api/portraits/med/men/44.jpg",
       "thumbnail":"https://randomuser.me/api/portraits/thumb/men/44.jpg"
    },
    "nat":"ES"
   
 },
 "task-3":{
   "id": "task-3",
    "gender":"male",
    "name":{
       "title":"Mr",
       "first":"احسان",
       "last":"کامروا"
    },
    "location":{
       "street":{
          "number":5008,
          "name":"میرزای شیرازی"
       },
       "city":"اراک",
       "state":"یزد",
       "country":"Iran",
       "postcode":15244,
       "coordinates":{
          "latitude":"59.7647",
          "longitude":"-108.5624"
       },
       "timezone":{
          "offset":"+4:00",
          "description":"Abu Dhabi, Muscat, Baku, Tbilisi"
       }
    },
    "email":"hsn.khmrw@example.com",
    "login":{
       "uuid":"46f56fb8-78a9-4bbf-80ad-0dd85d6a8774",
       "username":"purplebear700",
       "password":"direct",
       "salt":"4X4U7hvn",
       "md5":"2e7d43f7aac2df51f204a8fdf4dd664c",
       "sha1":"8f133a7eba125569a46f97fc604e81f570ac7857",
       "sha256":"60d5a5ae6c355dd305fe2d45170ae872234a3f5e58ed84885ff23bb2f71e985e"
    },
    "dob":{
       "date":"1990-03-21T13:18:24.597Z",
       "age":32
    },
    "registered":{
       "date":"2005-05-23T23:02:46.223Z",
       "age":17
    },
    "phone":"046-97647510",
    "cell":"0982-214-6046",
    
    "picture":{
       "large":"https://randomuser.me/api/portraits/men/78.jpg",
       "medium":"https://randomuser.me/api/portraits/med/men/78.jpg",
       "thumbnail":"https://randomuser.me/api/portraits/thumb/men/78.jpg"
    },
    "nat":"IR"
   
 },
 "task-4":{
  "id": "task-4",
      "gender":"male",
    "name":{
       "title":"Mr",
       "first":"Jerry",
       "last":"Peterson"
    },
    "location":{
       "street":{
          "number":4670,
          "name":"Oaks Cross"
       },
       "city":"St Albans",
       "state":"West Midlands",
       "country":"United Kingdom",
       "postcode":"HA9 6PR",
       "coordinates":{
          "latitude":"-53.0675",
          "longitude":"103.1815"
       },
       "timezone":{
          "offset":"-3:30",
          "description":"Newfoundland"
       }
    },
    "email":"jerry.peterson@example.com",
    "login":{
       "uuid":"2b42d98c-0f0e-4cec-b153-490ad2c79fba",
       "username":"bigrabbit588",
       "password":"tundra",
       "salt":"21vK8JRu",
       "md5":"9f2f1c14fe2ea7196cdd9f1551eda4a7",
       "sha1":"f3a10fb0ec515b066c90da39f876f5e5bb60f3ff",
       "sha256":"43790eb689a3ea32d1cb030fba2a35fddfc338c305a93328dde24d88cfbfb81c"
    },
    "dob":{
       "date":"1949-10-06T03:18:09.098Z",
       "age":73
    },
    "registered":{
       "date":"2008-10-25T01:56:14.843Z",
       "age":14
    },
    "phone":"016973 97355",
    "cell":"0781-366-952",
    
    "picture":{
       "large":"https://randomuser.me/api/portraits/men/68.jpg",
       "medium":"https://randomuser.me/api/portraits/med/men/68.jpg",
       "thumbnail":"https://randomuser.me/api/portraits/thumb/men/68.jpg"
    },
    "nat":"GB"
   
 },

 "task-5":{
   "id": "task-4",
           "gender":"female",
           "name":{
              "title":"Miss",
              "first":"Rubina",
              "last":"Aarsen"
           },
           "location":{
              "street":{
                 "number":3251,
                 "name":"Kriekemeet"
              },
              "city":"Velp Nb",
              "state":"Drenthe",
              "country":"Netherlands",
              "postcode":90145,
              "coordinates":{
                 "latitude":"49.9375",
                 "longitude":"-105.2504"
              },
              "timezone":{
                 "offset":"+9:00",
                 "description":"Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
              }
           },
           "email":"rubina.aarsen@example.com",
           "login":{
              "uuid":"57909836-cfc3-4a27-9313-7174a86a32f5",
              "username":"bluewolf837",
              "password":"hoffman",
              "salt":"AxsLr5K0",
              "md5":"2e5c5ba2b89458c0f6c14c6673311e6f",
              "sha1":"99c7a0433efb259005eaa4b29c6d3e618c371bd8",
              "sha256":"3677496bc75152408499e558bd5dd440867812c80cc24f5a1cc251f43d33b6d9"
           },
           "dob":{
              "date":"1998-04-23T18:13:30.942Z",
              "age":24
           },
           "registered":{
              "date":"2018-05-15T05:19:05.287Z",
              "age":4
           },
           "phone":"(581)-347-1111",
           "cell":"(130)-207-7286",
           "picture":{
              "large":"https://randomuser.me/api/portraits/women/65.jpg",
              "medium":"https://randomuser.me/api/portraits/med/women/65.jpg",
              "thumbnail":"https://randomuser.me/api/portraits/thumb/women/65.jpg"
           },
           "nat":"NL"
        },
        "task-6":{
   "id": "task-6",
           "gender":"male",
           "name":{
              "title":"Mr",
              "first":"Alex",
              "last":"Le Gall"
           },
           "location":{
              "street":{
                 "number":8282,
                 "name":"Montée Saint-Barthélémy"
              },
              "city":"Reims",
              "state":"Orne",
              "country":"France",
              "postcode":88695,
              "coordinates":{
                 "latitude":"83.9027",
                 "longitude":"-144.1491"
              },
              "timezone":{
                 "offset":"-3:30",
                 "description":"Newfoundland"
              }
           },
           "email":"alex.legall@example.com",
           "login":{
              "uuid":"5c4be0f1-60ff-40b5-be55-04d329b715c0",
              "username":"bluebear764",
              "password":"night",
              "salt":"DwLHVCCD",
              "md5":"bc1bb3fc577b562b58063c68be24925e",
              "sha1":"2506f0a4d174a34d86ff42483c77d505c5ce08e2",
              "sha256":"43fcc05721cfaf4e3979910bcadaa543976834f36a649f231b40bf6d62b512d4"
           },
           "dob":{
              "date":"1960-12-04T06:00:52.341Z",
              "age":62
           },
           "registered":{
              "date":"2009-11-13T12:03:57.526Z",
              "age":13
           },
           "phone":"04-51-75-87-85",
           "cell":"06-20-65-53-30",
           
           "picture":{
              "large":"https://randomuser.me/api/portraits/men/2.jpg",
              "medium":"https://randomuser.me/api/portraits/med/men/2.jpg",
              "thumbnail":"https://randomuser.me/api/portraits/thumb/men/2.jpg"
           },
           "nat":"FR"
        },
        "task-7":{
   "id": "task-7",
           "gender":"male",
           "name":{
              "title":"Mr",
              "first":"Gustav",
              "last":"Sørensen"
           },
           "location":{
              "street":{
                 "number":3353,
                 "name":"Ranunkelvej"
              },
              "city":"St.Merløse",
              "state":"Syddanmark",
              "country":"Denmark",
              "postcode":39108,
              "coordinates":{
                 "latitude":"54.5323",
                 "longitude":"97.6305"
              },
              "timezone":{
                 "offset":"+9:00",
                 "description":"Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
              }
           },
           "email":"gustav.sorensen@example.com",
           "login":{
              "uuid":"bcc02e5f-d1e6-4649-8e9f-72fdfea9d266",
              "username":"redzebra810",
              "password":"design",
              "salt":"l5MDGrxq",
              "md5":"e89cd667fb91422c1b999ebac364ec59",
              "sha1":"ad0c34f55538ae008003a408063f46a2d7ff8b89",
              "sha256":"d050b8d6c99890e6e7960588b2c5b2aea5b40957b1b6113334f74dcd4e94acea"
           },
           "dob":{
              "date":"1981-06-26T04:47:40.570Z",
              "age":41
           },
           "registered":{
              "date":"2004-06-25T06:22:30.963Z",
              "age":18
           },
           "phone":"60628333",
           "cell":"83830192",
           
           "picture":{
              "large":"https://randomuser.me/api/portraits/men/75.jpg",
              "medium":"https://randomuser.me/api/portraits/med/men/75.jpg",
              "thumbnail":"https://randomuser.me/api/portraits/thumb/men/75.jpg"
           },
           "nat":"DK"
        },
        "task-8":{
   "id": "task-8",
           "gender":"male",
           "name":{
              "title":"Mr",
              "first":"Alexander",
              "last":"Martin"
           },
           "location":{
              "street":{
                 "number":3526,
                 "name":"Weymouth Road"
              },
              "city":"Tauranga",
              "state":"Otago",
              "country":"New Zealand",
              "postcode":19012,
              "coordinates":{
                 "latitude":"53.8801",
                 "longitude":"-129.6795"
              },
              "timezone":{
                 "offset":"+4:30",
                 "description":"Kabul"
              }
           },
           "email":"alexander.martin@example.com",
           "login":{
              "uuid":"22125130-cc3c-4a1a-b2aa-2683075d3bcd",
              "username":"lazybear415",
              "password":"apple1",
              "salt":"wpSF9GV3",
              "md5":"d2179ecedd0989615cecd2b81070ca23",
              "sha1":"b1bf060145200818516423c5fa45a32b34607507",
              "sha256":"5d8a58c0791cd122dad289883de5085f030535e7ec0a35ed98e20cfa7d96a416"
           },
           "dob":{
              "date":"1977-07-21T21:11:00.402Z",
              "age":45
           },
           "registered":{
              "date":"2008-11-27T19:47:34.764Z",
              "age":14
           },
           "phone":"(162)-685-5819",
           "cell":"(501)-701-2638",
          
           "picture":{
              "large":"https://randomuser.me/api/portraits/men/24.jpg",
              "medium":"https://randomuser.me/api/portraits/med/men/24.jpg",
              "thumbnail":"https://randomuser.me/api/portraits/thumb/men/24.jpg"
           },
           "nat":"NZ"
        },
        "task-9":{
   "id": "task-9",
           "gender":"female",
           "name":{
              "title":"Ms",
              "first":"Vanesa",
              "last":"Mora"
           },
           "location":{
              "street":{
                 "number":5939,
                 "name":"Paseo de Extremadura"
              },
              "city":"Málaga",
              "state":"Castilla y León",
              "country":"Spain",
              "postcode":16198,
              "coordinates":{
                 "latitude":"-4.0992",
                 "longitude":"-49.8573"
              },
              "timezone":{
                 "offset":"+5:45",
                 "description":"Kathmandu"
              }
           },
           "email":"vanesa.mora@example.com",
           "login":{
              "uuid":"98c777a3-0b46-40c9-9b9e-cd941a98550e",
              "username":"crazyelephant289",
              "password":"prince",
              "salt":"4d2XjERh",
              "md5":"509b669721b5a8773e78bbb555412a27",
              "sha1":"1c4fef17eeb3f766d5237fed31448874fdcc46c7",
              "sha256":"c2960f782832efe05361b16fe3eb9ae3afe5025959a0bdd0300af6b53f6066e6"
           },
           "dob":{
              "date":"1959-10-29T02:15:34.599Z",
              "age":63
           },
           "registered":{
              "date":"2019-08-01T08:27:24.232Z",
              "age":3
           },
           "phone":"953-227-868",
           "cell":"617-731-273",
           
           "picture":{
              "large":"https://randomuser.me/api/portraits/women/26.jpg",
              "medium":"https://randomuser.me/api/portraits/med/women/26.jpg",
              "thumbnail":"https://randomuser.me/api/portraits/thumb/women/26.jpg"
           },
           "nat":"ES"
        },
        "task-10":{
   "id": "task-10",
           "gender":"female",
           "name":{
              "title":"Ms",
              "first":"Leonor",
              "last":"Pereira"
           },
           "location":{
              "street":{
                 "number":3580,
                 "name":"Rua Pernambuco "
              },
              "city":"Guarapuava",
              "state":"Paraíba",
              "country":"Brazil",
              "postcode":89678,
              "coordinates":{
                 "latitude":"40.8527",
                 "longitude":"130.9371"
              },
              "timezone":{
                 "offset":"+3:30",
                 "description":"Tehran"
              }
           },
           "email":"leonor.pereira@example.com",
           "login":{
              "uuid":"9f8a22a5-45ee-45ac-952e-9784644afca2",
              "username":"whitemeercat748",
              "password":"batman1",
              "salt":"FyGZLNgv",
              "md5":"54dede5c33fba73712fe0f56d26551df",
              "sha1":"90f342e2a79cf46fc8ff765646d3e3184eb35e37",
              "sha256":"3e59bb00f72b77e705edeade52421f1bfb09088776eef30c638f8fea394f07f4"
           },
           "dob":{
              "date":"1968-01-13T09:49:25.942Z",
              "age":54
           },
           "registered":{
              "date":"2008-04-01T08:52:47.846Z",
              "age":14
           },
           "phone":"(19) 1498-4108",
           "cell":"(64) 7539-1067",
           
           "picture":{
              "large":"https://randomuser.me/api/portraits/women/49.jpg",
              "medium":"https://randomuser.me/api/portraits/med/women/49.jpg",
              "thumbnail":"https://randomuser.me/api/portraits/thumb/women/49.jpg"
           },
           "nat":"BR"
         }
 
  },


  columns: {
    "column-1": {
      id: "column-1",
      title: "Open",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "Contacted",
      taskIds: ["task-5", "task-6", "task-7"]
    },
    "column-3": {
      id: "column-3",
      title: "Written Test",
      taskIds: ["task-8", "task-9", "task-10"]
    },
    "column-4": {
      id: "column-4",
      title: "Technical Round",
      taskIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4"]
};

export default initialData;
