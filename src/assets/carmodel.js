const cars = [
  {
    "id": "1",
    "cardata": {
      "Name": "Dodge d200",
      "Miles_per_Gallon": 11,
      "Cylinders": 8,
      "Horsepower": 210,
      "Weight_in_lbs": 4382,
      "Acceleration": 13.5,
      "Year": "2020",
      "Origin": "USA",
      "picture": "van/45/45base.jpg"
    },
    "pictures": {
      "base": [
        {
          "position": "45",
          "url": "van/45/45base.jpg",
          "id": "a"
        },
        {
          "position": "front",
          "url": "van/front/frontbase.jpg",
          "id": "b"
        },
        {
          "position": "left",
          "url": "van/left/leftbase.jpg",
          "id": "c"
        },
        {
          "position": "right",
          "url": "van/right/rightbase.jpg",
          "id": "d"
        },
        {
          "position": "top",
          "url": "van/top/topbase.jpg",
          "id": "e"
        },
        {
          "position": "back",
          "url": "van/back/backbase.jpg",
          "id": "f"
        }
      ],
      "angles": [
        {
          "url": "van/45/45-hoodblue.png",
          "position": "45",
          "angle": "hood",
          "color": "blue",
          "id": 50
        },
        {
          "url": "van/45/45-hoodbone.png",
          "position": "45",
          "angle": "hood",
          "color": "bone",
          "id": 51
        },
        {
          "url": "van/45/45-hoodliver.png",
          "position": "45",
          "angle": "hood",
          "color": "liver",
          "id": 52
        },
        {
          "url": "van/45/45-roofblue.png",
          "position": "45",
          "angle": "roof",
          "color": "blue",
          "id": 53
        },
        {
          "url": "van/45/45-roofbone.png",
          "position": "45",
          "angle": "roof",
          "color": "bone",
          "id": 54
        },
        {
          "url": "van/45/45-roofliver.png",
          "position": "45",
          "angle": "roof",
          "color": "liver",
          "id": 55
        },
        {
          "url": "van/45/45-sidesblue.png",
          "position": "45",
          "angle": "sides",
          "color": "blue",
          "id": 56
        },
        {
          "url": "van/45/45-sidesbone.png",
          "position": "45",
          "angle": "sides",
          "color": "bone",
          "id": 57
        },
        {
          "url": "van/45/45-sidesliver.png",
          "position": "45",
          "angle": "sides",
          "color": "liver",
          "id": 58
        },
        {
          "url": "van/back/backblue.png",
          "position": "back",
          "angle": "back",
          "color": "blue",
          "id": 59
        },
        {
          "url": "van/back/backbone.png",
          "position": "back",
          "angle": "back",
          "color": "bone",
          "id": 60
        },
        {
          "url": "van/back/backliver.png",
          "position": "back",
          "angle": "back",
          "color": "liver",
          "id": 61
        },
        {
          "url": "van/front/front-hoodblue.png",
          "position": "front",
          "angle": "hood",
          "color": "blue",
          "id": 62
        },
        {
          "url": "van/front/front-hoodbone.png",
          "position": "front",
          "angle": "hood",
          "color": "bone",
          "id": 63
        },
        {
          "url": "van/front/front-hoodliver.png",
          "position": "front",
          "angle": "hood",
          "color": "liver",
          "id": 64
        },
        {
          "url": "van/front/front-roofblue.png",
          "position": "front",
          "angle": "roof",
          "color": "blue",
          "id": 65
        },
        {
          "url": "van/front/front-roofbone.png",
          "position": "front",
          "angle": "roof",
          "color": "bone",
          "id": 66
        },
        {
          "url": "van/front/front-roofliver.png",
          "position": "front",
          "angle": "roof",
          "color": "liver",
          "id": 67
        },
        {
          "url": "van/front/front-sidesblue.png",
          "position": "front",
          "angle": "sides",
          "color": "blue",
          "id": 68
        },
        {
          "url": "van/front/front-sidesbone.png",
          "position": "front",
          "angle": "sides",
          "color": "bone",
          "id": 69
        },
        {
          "url": "van/front/front-sidesliver.png",
          "position": "front",
          "angle": "sides",
          "color": "liver",
          "id": 70
        },
        {
          "url": "van/left/left-blue.png",
          "position": "left",
          "angle": "sides",
          "color": "blue",
          "id": 71
        },
        {
          "url": "van/left/left-bone.png",
          "position": "left",
          "angle": "sides",
          "color": "bone",
          "id": 723
        },
        {
          "url": "van/left/left-liver.png",
          "position": "left",
          "angle": "sides",
          "color": "liver",
          "id": 72
        },
        {
          "url": "van/right/right-blue.png",
          "position": "right",
          "angle": "sides",
          "color": "blue",
          "id": 73
        },
        {
          "url": "van/right/right-bone.png",
          "position": "right",
          "angle": "sides",
          "color": "bone",
          "id": 74
        },
        {
          "url": "van/right/right-liver.png",
          "position": "right",
          "angle": "sides",
          "color": "liver",
          "id": 75
        },
        {
          "url": "van/top/top-hoodblue.png",
          "position": "top",
          "angle": "hood",
          "color": "blue",
          "id": 76
        },
        {
          "url": "van/top/top-hoodbone.png",
          "position": "top",
          "angle": "hood",
          "color": "bone",
          "id": 77
        },
        {
          "url": "van/top/top-hoodliver.png",
          "position": "top",
          "angle": "hood",
          "color": "liver",
          "id": 78
        },
        {
          "url": "van/top/top-roofblue.png",
          "position": "top",
          "angle": "roof",
          "color": "blue",
          "id": 79
        },
        {
          "url": "van/top/top-roofbone.png",
          "position": "top",
          "angle": "roof",
          "color": "bone",
          "id": 80
        },
        {
          "url": "van/top/top-roofliver.png",
          "position": "top",
          "angle": "roof",
          "color": "liver",
          "id": 81
        },
        {
          "url": "van/top/top-sidesblue.png",
          "position": "top",
          "angle": "sides",
          "color": "blue",
          "id": 82
        },
        {
          "url": "van/top/top-sidesbone.png",
          "position": "top",
          "angle": "sides",
          "color": "bone",
          "id": 83
        },
        {
          "url": "van/top/top-sidesliver.png",
          "position": "top",
          "angle": "sides",
          "color": "liver",
          "id": 84
        }
      ]
    },
    "features": {
      "tabs": [
        {"tabName":"hood", "tabId":"tabh1"},
        {"tabName":"back", "tabId":"tabb1"},
        {"tabName":"sides", "tabId":"tabs1"},
        {"tabName":"roof", "tabId":"tabr1"}
      ],
      "colors": [
        {
          "position": "hood",
          "colorId": "hood1",
          "colorName": "blue",
          "colorData": "#247BA0",
          "isChecked": false
        },
        {
          "position": "hood",
          "colorId": "hood2",
          "colorName": "bone",
          "colorData": "#E0DDCF",
          "isChecked": false
        },
        {
          "position": "hood",
          "colorId": "hood3",
          "colorName": "liver",
          "colorData": "#534B52",
          "isChecked": false
        },
        {
          "position": "back",
          "colorId": "back1",
          "colorName": "blue",
          "colorData": "#247BA0",
          "isChecked": false
        },
        {
          "position": "back",
          "colorId": "back2",
          "colorName": "bone",
          "colorData": "#E0DDCF",
          "isChecked": false
        },
        {
          "position": "back",
          "colorId": "back3",
          "colorName": "liver",
          "colorData": "#534B52",
          "isChecked": false
        },
        {
          "position": "sides",
          "colorId": "sides1",
          "colorName": "blue",
          "colorData": "#247BA0",
          "isChecked": false
        },
        {
          "position": "sides",
          "colorId": "sides2",
          "colorName": "bone",
          "colorData": "#E0DDCF",
          "isChecked": false
        },
        {
          "position": "sides",
          "colorId": "sides3",
          "colorName": "liver",
          "colorData": "#534B52",
          "isChecked": false
        },
        {
          "position": "roof",
          "colorId": "roof1",
          "colorName": "blue",
          "colorData": "#247BA0",
          "isChecked": false
        },
        {
          "position": "roof",
          "colorId": "roof2",
          "colorName": "bone",
          "colorData": "#E0DDCF",
          "isChecked": false
        },
        {
          "position": "roof",
          "colorId": "roof3",
          "colorName": "liver",
          "colorData": "#534B52",
          "isChecked": false
        }
      ]
    }
  },
  {
    "id": "2",
    "cardata": {
      "Name": "AMC gremlin",
      "Miles_per_Gallon": 19,
      "Cylinders": 6,
      "Horsepower": 100,
      "Weight_in_lbs": 2634,
      "Acceleration": 13,
      "Year": "2020",
      "Origin": "USA",
      "picture": "bigvan/45/base45.jpg"
    },
    "pictures": {
      "base": [
        {
          "position": "45",
          "url": "bigvan/45/base45.jpg",
          "id": "h"
        },
        {
          "position": "front",
          "url": "bigvan/front/frontbase.jpg",
          "id": "i"
        },
        {
          "position": "left",
          "url": "bigvan/left/leftbase.jpg",
          "id": "j"
        },
        {
          "position": "right",
          "url": "bigvan/right/rightbase.jpg",
          "id": "k"
        },
        {
          "position": "top",
          "url": "bigvan/top/topbase.jpg",
          "id": "l"
        },
        {
          "position": "back",
          "url": "bigvan/back/backbase.jpg",
          "id": "m"
        }
      ],
      "angles": [
        {
          "url": "bigvan/45/hood-blue45.png",
          "position": "45",
          "angle": "hood",
          "color": "blue",
          "id": 1
        },
        {
          "url": "bigvan/45/hood-bone45.png",
          "position": "45",
          "angle": "hood",
          "color": "bone",
          "id": 2
        },
        {
          "url": "bigvan/45/hood-liver45.png",
          "position": "45",
          "angle": "hood",
          "color": "liver",
          "id": 3
        },
        {
          "url": "bigvan/45/roof-blue45.png",
          "position": "45",
          "angle": "roof",
          "color": "blue",
          "id": 4
        },
        {
          "url": "bigvan/45/roof-bone45.png",
          "position": "45",
          "angle": "roof",
          "color": "bone",
          "id": 506
        },
        {
          "url": "bigvan/45/roof-liver45.png",
          "position": "45",
          "angle": "roof",
          "color": "liver",
          "id": 5
        },
        {
          "url": "bigvan/45/side-blue45.png",
          "position": "45",
          "angle": "sides",
          "color": "blue",
          "id": 6
        },
        {
          "url": "bigvan/45/side-bone45.png",
          "position": "45",
          "angle": "sides",
          "color": "bone",
          "id": 7
        },
        {
          "url": "bigvan/45/side-liver45.png",
          "position": "45",
          "angle": "sides",
          "color": "liver",
          "id": 8
        },
        {
          "url": "bigvan/45/front-blue45.png",
          "position": "45",
          "angle": "front",
          "color": "blue",
          "id": 9
        },
        {
          "url": "bigvan/45/front-bone45.png",
          "position": "45",
          "angle": "front",
          "color": "bone",
          "id": 10
        },
        {
          "url": "bigvan/45/front-liver45.png",
          "position": "45",
          "angle": "front",
          "color": "liver",
          "id": 11
        },
        {
          "url": "bigvan/back/backblue.png",
          "position": "back",
          "angle": "back",
          "color": "blue",
          "id": 12
        },
        {
          "url": "bigvan/back/backbone.png",
          "position": "back",
          "angle": "back",
          "color": "bone",
          "id": 13
        },
        {
          "url": "bigvan/back/backliver.png",
          "position": "back",
          "angle": "back",
          "color": "liver",
          "id": 14
        },
        {
          "url": "bigvan/front/front-hoodblue.png",
          "position": "front",
          "angle": "hood",
          "color": "blue",
          "id": 15
        },
        {
          "url": "bigvan/front/front-hoodbone.png",
          "position": "front",
          "angle": "hood",
          "color": "bone",
          "id": 16
        },
        {
          "url": "bigvan/front/front-hoodliver.png",
          "position": "front",
          "angle": "hood",
          "color": "liver",
          "id": 17
        },
        {
          "url": "bigvan/front/front-roofblue.png",
          "position": "front",
          "angle": "roof",
          "color": "blue",
          "id": 18
        },
        {
          "url": "bigvan/front/front-roofbone.png",
          "position": "front",
          "angle": "roof",
          "color": "bone",
          "id": 19
        },
        {
          "url": "bigvan/front/front-roofliver.png",
          "position": "front",
          "angle": "roof",
          "color": "liver",
          "id": 20
        },
        {
          "url": "bigvan/front/front-sidesblue.png",
          "position": "front",
          "angle": "sides",
          "color": "blue",
          "id": 21
        },
        {
          "url": "bigvan/front/front-sidesbone.png",
          "position": "front",
          "angle": "sides",
          "color": "bone",
          "id": 22
        },
        {
          "url": "bigvan/front/front-sidesliver.png",
          "position": "front",
          "angle": "sides",
          "color": "liver",
          "id": 23
        },
        {
          "url": "bigvan/front/front-blue.png",
          "position": "front",
          "angle": "front",
          "color": "blue",
          "id": 24
        },
        {
          "url": "bigvan/front/front-bone.png",
          "position": "front",
          "angle": "front",
          "color": "bone",
          "id": 25
        },
        {
          "url": "bigvan/front/front-liver.png",
          "position": "front",
          "angle": "front",
          "color": "liver",
          "id": 26
        },
        {
          "url": "bigvan/left/left-blue.png",
          "position": "left",
          "angle": "sides",
          "color": "blue",
          "id": 27
        },
        {
          "url": "bigvan/left/left-bone.png",
          "position": "left",
          "angle": "sides",
          "color": "bone",
          "id": 28
        },
        {
          "url": "bigvan/left/left-liver.png",
          "position": "left",
          "angle": "sides",
          "color": "liver",
          "id": 29
        },
        {
          "url": "bigvan/right/right-blue.png",
          "position": "right",
          "angle": "sides",
          "color": "blue",
          "id": 30
        },
        {
          "url": "bigvan/right/right-bone.png",
          "position": "right",
          "angle": "sides",
          "color": "bone",
          "id": 31
        },
        {
          "url": "bigvan/right/right-liver.png",
          "position": "right",
          "angle": "sides",
          "color": "liver",
          "id": 32
        },
        {
          "url": "bigvan/top/top-hoodblue.png",
          "position": "top",
          "angle": "hood",
          "color": "blue",
          "id": 33
        },
        {
          "url": "bigvan/top/top-hoodbone.png",
          "position": "top",
          "angle": "hood",
          "color": "bone",
          "id": 34
        },
        {
          "url": "bigvan/top/top-hoodliver.png",
          "position": "top",
          "angle": "hood",
          "color": "liver",
          "id": 35
        },
        {
          "url": "bigvan/top/top-roofblue.png",
          "position": "top",
          "angle": "roof",
          "color": "blue",
          "id": 36
        },
        {
          "url": "bigvan/top/top-roofbone.png",
          "position": "top",
          "angle": "roof",
          "color": "bone",
          "id": 37
        },
        {
          "url": "bigvan/top/top-roofliver.png",
          "position": "top",
          "angle": "roof",
          "color": "liver",
          "id": 38
        },
        {
          "url": "bigvan/top/top-sidesblue.png",
          "position": "top",
          "angle": "sides",
          "color": "blue",
          "id": 39
        },
        {
          "url": "bigvan/top/top-sidesbone.png",
          "position": "top",
          "angle": "sides",
          "color": "bone",
          "id": 40
        },
        {
          "url": "bigvan/top/top-sidesliver.png",
          "position": "top",
          "angle": "sides",
          "color": "liver",
          "id": 41
        }
      ]
    },
    "features": {
      "tabs": [
        {"tabName":"hood", "tabId":"tabh2"},
        {"tabName":"back", "tabId":"tabb2"},
        {"tabName":"front", "tabId":"tabf2"},
        {"tabName":"sides", "tabId":"tabs2"},
        {"tabName":"roof", "tabId":"tabr2"}
      ],
      "colors": [
        {
          "position": "hood",
          "colorId": "hood1",
          "colorName": "blue",
          "colorData": "#247BA0",
          "isChecked": false
        },
        {
          "position": "hood",
          "colorId": "hood2",
          "colorName": "bone",
          "colorData": "#E0DDCF",
          "isChecked": false
        },
        {
          "position": "hood",
          "colorId": "hood3",
          "colorName": "liver",
          "colorData": "#534B52",
          "isChecked": false
        },
        {
          "position": "front",
          "colorId": "front1",
          "colorName": "blue",
          "colorData": "#247BA0",
          "isChecked": false
        },
        {
          "position": "front",
          "colorId": "front2",
          "colorName": "bone",
          "colorData": "#E0DDCF",
          "isChecked": false
        },
        {
          "position": "front",
          "colorId": "front3",
          "colorName": "liver",
          "colorData": "#534B52",
          "isChecked": false
        },
        {
          "position": "back",
          "colorId": "back1",
          "colorName": "blue",
          "colorData": "#247BA0",
          "isChecked": false
        },
        {
          "position": "back",
          "colorId": "back2",
          "colorName": "bone",
          "colorData": "#E0DDCF",
          "isChecked": false
        },
        {
          "position": "back",
          "colorId": "back3",
          "colorName": "liver",
          "colorData": "#534B52",
          "isChecked": false
        },
        {
          "position": "sides",
          "colorId": "sides1",
          "colorName": "blue",
          "colorData": "#247BA0",
          "isChecked": false
        },
        {
          "position": "sides",
          "colorId": "sides2",
          "colorName": "bone",
          "colorData": "#E0DDCF",
          "isChecked": false
        },
        {
          "position": "sides",
          "colorId": "sides3",
          "colorName": "liver",
          "colorData": "#534B52",
          "isChecked": false
        },
        {
          "position": "roof",
          "colorId": "roof1",
          "colorName": "blue",
          "colorData": "#247BA0",
          "isChecked": false
        },
        {
          "position": "roof",
          "colorId": "roof2",
          "colorName": "bone",
          "colorData": "#E0DDCF",
          "isChecked": false
        },
        {
          "position": "roof",
          "colorId": "roof3",
          "colorName": "liver",
          "colorData": "#534B52",
          "isChecked": false
        }
      ]
    }
  }
]
export default cars;