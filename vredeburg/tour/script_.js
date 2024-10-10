(function(){
    var script = {
 "start": "this.init()",
 "vrPolyfillScale": 0.5,
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_585EFD48_49AD_2CCC_41BE_26B082E3520B_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_585EFD48_49AD_2CCC_41BE_26B082E3520B_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_585EFD48_49AD_2CCC_41BE_26B082E3520B_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FFE8FDF_49AD_2BC3_41B2_57C60EAAEA5E"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_588917F0_49A3_5BDC_41C6_99A974D10455_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_588917F0_49A3_5BDC_41C6_99A974D10455_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_588917F0_49A3_5BDC_41C6_99A974D10455_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FF98FE0_49AD_2BFD_41A1_43629614D49E"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_46B3C136_4963_F445_41A1_820666863611_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_46B3C136_4963_F445_41A1_820666863611_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_46B3C136_4963_F445_41A1_820666863611_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_59EAF181_497D_543C_41AD_BBFAFE15B608"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_585E0B34_49A3_3445_41CC_00A10FA3C8C4_0_0.jpg",
   "width": 675,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_585E0B34_49A3_3445_41CC_00A10FA3C8C4_0_1.jpg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_585E0B34_49A3_3445_41CC_00A10FA3C8C4_0_2.jpg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5FE31FEB_49AD_2BCC_41C0_BFBFAF88C796"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_59D720D4_4962_D5C5_41D0_8EB4B2ACD623",
 "yaw": -124.33,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_59D720D4_4962_D5C5_41D0_8EB4B2ACD623_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.39
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_583DF9FD_4965_37C4_41B5_61E8B8BF9B4F",
 "yaw": -165.04,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_583DF9FD_4965_37C4_41B5_61E8B8BF9B4F_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.95,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -5.78
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_58B35EC2_496D_2C3C_41D1_007E11410538_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_58B35EC2_496D_2C3C_41D1_007E11410538_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_58B35EC2_496D_2C3C_41D1_007E11410538_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FDF7FBA_49AD_2C4C_41CD_2FE40DCD2B0D"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_44C68868_4A93_7B27_41BB_C1712BF930BE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_580496CD_4963_DDC4_41AD_FCACA6EF9893",
 "yaw": 128.71,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_580496CD_4963_DDC4_41AD_FCACA6EF9893_0_1.jpg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "hfov": 4.69,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": 6.79
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_085711_00_018",
 "id": "panorama_4281523F_495F_3444_41C7_87D56D7FCE47",
 "hfov": 360,
 "overlays": [
  "this.overlay_42BEA23F_495F_3444_41D0_C6C492931D35",
  "this.overlay_42BE923F_495F_3444_4194_2693554E4348"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 157.69,
   "class": "AdjacentPanorama",
   "yaw": -3.19,
   "panorama": "this.panorama_4585AA94_495F_3444_41AD_174FAF41FDD8",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_t.jpg"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_59ED0C43_495D_EC3C_41C4_E6CE7D6672B7_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_59ED0C43_495D_EC3C_41C4_E6CE7D6672B7_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_59ED0C43_495D_EC3C_41C4_E6CE7D6672B7_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FCCEFCB_49AD_2BCC_41CF_BE44E5FD7032"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4748079C_4A93_751F_41C6_C1C3534F8DE1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_589802BE_4963_3444_41BC_2551ED96C322",
 "yaw": 99.97,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_589802BE_4963_3444_41BC_2551ED96C322_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.96,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -5.38
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5824F9B1_49A5_345C_41C9_A619F28B2AC3_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_5824F9B1_49A5_345C_41C9_A619F28B2AC3_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5824F9B1_49A5_345C_41C9_A619F28B2AC3_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FE6DFE7_49AD_2BC4_41C7_FF19FDCF2764"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5B4DC9E2_4965_37FC_41D0_26804318B8C4_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_5B4DC9E2_4965_37FC_41D0_26804318B8C4_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5B4DC9E2_4965_37FC_41D0_26804318B8C4_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FC5CFC2_49AD_2C3C_4118_032C04E67AD0"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.21,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47901644_4A93_776F_41D2_087989CDD745",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_449607CB_4A93_7579_41CE_7CFCA3673B64",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_59B55B8A_497D_D44D_41BB_C00003350233",
 "yaw": -145.07,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_59B55B8A_497D_D44D_41BB_C00003350233_0_1.jpg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "hfov": 4.68,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": 7.59
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_598B2D5B_497D_2CCC_41C6_0CDEAC6FD495",
 "yaw": 108.16,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_598B2D5B_497D_2CCC_41C6_0CDEAC6FD495_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.2
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -139.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_44C9C878_4A93_7B27_41B6_61EF9AF4DD4F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.21,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_472A076D_4A93_7539_41C5_46EE058FF364",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4751E77C_4A93_751F_41C1_63C953C23546",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 17.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_44F8B897_4A93_7BE9_41A8_309452E30117",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_43A5875A_495F_DCCC_4191_2A12F201259B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 126.92,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_446B2923_4A93_7D29_41CF_6714ED9BE2D6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 117.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47D586D1_4A93_7769_4194_95E5743618D4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091223_00_038",
 "id": "panorama_44A7F677_495D_5CC3_41D0_4A46158791BD",
 "hfov": 360,
 "overlays": [
  "this.overlay_44A78677_495D_5CC3_41B6_130635D5AB8A",
  "this.overlay_44A79677_495D_5CC3_41CB_D37BC0779ED2",
  "this.overlay_580C2961_4967_54FC_41C1_0080F2A7B0D5",
  "this.overlay_58BE4031_4966_D45C_41A8_29591831F547",
  "this.overlay_5821CA79_4965_34CC_41A5_18B0245A7C63",
  "this.popup_583DF9FD_4965_37C4_41B5_61E8B8BF9B4F",
  "this.popup_5807DE90_4965_2C5D_41C2_4CE00953DAB6",
  "this.popup_589802BE_4963_3444_41BC_2551ED96C322"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -5.99,
   "class": "AdjacentPanorama",
   "yaw": -139.49,
   "panorama": "this.panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77",
   "distance": 1
  },
  {
   "backwardYaw": -139.09,
   "class": "AdjacentPanorama",
   "yaw": 156.45,
   "panorama": "this.panorama_476FFE3F_495D_6C44_41D0_A06437D30868",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_44766904_4A93_7AEF_41D2_7E5A9F1647F9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_58BD80DC_49A3_55C4_41D0_687A218C783D",
 "yaw": 46.29,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_58BD80DC_49A3_55C4_41D0_687A218C783D_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -1.99
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_585BBF78_4965_2CCD_41C5_DB99FF962FB1_0_0.jpg",
   "width": 675,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_585BBF78_4965_2CCD_41C5_DB99FF962FB1_0_1.jpg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_585BBF78_4965_2CCD_41C5_DB99FF962FB1_0_2.jpg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5FD4EFB2_49AD_2C5C_41A0_CE9743C6ACC1"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -22.31,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47C08A1F_4A93_7F19_41A9_8DF4CB81819B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_58F89F77_4963_6CC4_41BB_9816BF540F32",
 "yaw": -0.4,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_58F89F77_4963_6CC4_41BB_9816BF540F32_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.85,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": 10.78
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.89,
  "pitch": -7.67
 },
 "class": "PanoramaCamera",
 "id": "panorama_4454C338_495F_544C_41C8_2683B348C9DD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.25,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_476247BB_4A93_7519_41C7_C5519F72EA2D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_443178D5_4A93_7B69_41C4_0253BB89C6FA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_090626_00_030",
 "id": "panorama_447B57BC_495E_DC44_41CC_DA09343F4864",
 "hfov": 360,
 "overlays": [
  "this.overlay_447B67BC_495E_DC44_41B2_7E58F7DF223B",
  "this.overlay_447B77BC_495E_DC44_41C1_E1B917556172",
  "this.overlay_59AAD840_4963_743C_41A6_7131C947D600",
  "this.popup_59964E5F_496D_2CC4_41CB_15A8BC3956C3"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -62.26,
   "class": "AdjacentPanorama",
   "yaw": 132.11,
   "panorama": "this.panorama_445B7FF9_495F_2BCC_41C2_702152C4788B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47BBB9C1_4A93_7D69_41C2_199C65FF5288",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.01,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_478A7683_4A93_77EA_41CD_6CBCBE01E8C1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_090218_00_024",
 "id": "panorama_4454C338_495F_544C_41C8_2683B348C9DD",
 "hfov": 360,
 "overlays": [
  "this.overlay_4454A338_495F_544C_41C9_E662FB188BD8",
  "this.overlay_44548338_495F_544C_41C4_0546F5F70673",
  "this.overlay_5943E4BF_4962_DC43_41D0_4F6852C45EF1",
  "this.overlay_596397F1_4962_DBDC_41D0_011F21B333D8",
  "this.overlay_59D959C9_4963_57CC_41D1_B9A4C90F1E96",
  "this.popup_46B3C136_4963_F445_41A1_820666863611",
  "this.popup_598B2D5B_497D_2CCC_41C6_0CDEAC6FD495",
  "this.popup_59B55B8A_497D_D44D_41BB_C00003350233"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 10.78,
   "class": "AdjacentPanorama",
   "yaw": -94.39,
   "panorama": "this.panorama_45A87B7B_495F_74CC_41A0_15122F2041BA",
   "distance": 1
  },
  {
   "backwardYaw": -179.6,
   "class": "AdjacentPanorama",
   "yaw": 179,
   "panorama": "this.panorama_445B7FF9_495F_2BCC_41C2_702152C4788B",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_t.jpg"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5BCCF519_49A5_7C4C_41C8_20C09D88EA67_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_5BCCF519_49A5_7C4C_41C8_20C09D88EA67_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5BCCF519_49A5_7C4C_41C8_20C09D88EA67_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FE5DFE4_49AD_2BC4_41CC_898BEE276538"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_59A24912_496D_545C_41D2_0BDBEFBC2948",
 "yaw": -64.46,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_59A24912_496D_545C_41D2_0BDBEFBC2948_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -0.19
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.58,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_477C17AB_4A93_7539_41D1_44A4DBB3B5CC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_59B55B8A_497D_D44D_41BB_C00003350233_0_0.jpg",
   "width": 675,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_59B55B8A_497D_D44D_41BB_C00003350233_0_1.jpg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_59B55B8A_497D_D44D_41BB_C00003350233_0_2.jpg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_59FC6192_497D_545C_41CB_CC1970DF193C"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_085630_00_017",
 "id": "panorama_43A5875A_495F_DCCC_4191_2A12F201259B",
 "hfov": 360,
 "overlays": [
  "this.overlay_43A5E75A_495F_DCCC_41B1_475CCB4D5B70",
  "this.overlay_43A5C75A_495F_DCCC_41A0_50B26ECD8B18",
  "this.overlay_43A5D75A_495F_DCCC_41BD_840E9DCE56D6",
  "this.overlay_43A5275A_495F_DCCC_41B1_91EA1A3F294D"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -8.75,
   "class": "AdjacentPanorama",
   "yaw": 171.01,
   "panorama": "this.panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4281523F_495F_3444_41C7_87D56D7FCE47"
  },
  {
   "backwardYaw": -11.57,
   "class": "AdjacentPanorama",
   "yaw": 49.86,
   "panorama": "this.panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80",
   "distance": 1
  },
  {
   "backwardYaw": 174.21,
   "class": "AdjacentPanorama",
   "yaw": -58.72,
   "panorama": "this.panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47CB1A2E_4A93_7F3B_41B0_6AF7C3C8AD5F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5824F9B1_49A5_345C_41C9_A619F28B2AC3",
 "yaw": -102.38,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5824F9B1_49A5_345C_41C9_A619F28B2AC3_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -1.79
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_58E0404F_495E_D4C4_41D0_F63181F96981",
 "yaw": 35.52,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_58E0404F_495E_D4C4_41D0_F63181F96981_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.19
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091108_00_035",
 "id": "panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C",
 "hfov": 360,
 "overlays": [
  "this.overlay_471BFE12_495D_2C5C_41B5_551792D0034F",
  "this.overlay_471BDE12_495D_2C5C_41B0_61653173D46C"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 169.02,
   "class": "AdjacentPanorama",
   "yaw": -6.19,
   "panorama": "this.panorama_47750657_495D_3CC4_41B3_E128F36C1348",
   "distance": 1
  },
  {
   "backwardYaw": -58.72,
   "class": "AdjacentPanorama",
   "yaw": 174.21,
   "panorama": "this.panorama_43A5875A_495F_DCCC_4191_2A12F201259B",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_44B17819_4A93_7B19_41B8_8761FF9672B8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091448_00_042",
 "id": "panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D",
 "hfov": 360,
 "overlays": [
  "this.overlay_47C5D575_495D_5CC4_41C9_30D2D0126F1E",
  "this.overlay_47C5A575_495D_5CC4_41BF_94EE3A7D39CD",
  "this.overlay_589E71D3_49A7_F7DC_41D2_0C55B70F52E9",
  "this.overlay_58FA16E1_49A7_DDFC_41D1_1D843B55C7B4",
  "this.overlay_58660B6D_49A7_34C4_41AE_7B262C9A9F4F",
  "this.overlay_5895FE41_49A7_6C3C_41D1_29D9CB56D663",
  "this.popup_585EB4A6_49A5_DC44_419F_85B7BA1E45AA",
  "this.popup_58BD80DC_49A3_55C4_41D0_687A218C783D",
  "this.popup_58048251_49A3_34DC_413E_B03E9740EB48",
  "this.popup_580B94A4_49A3_3C44_41C3_23A8A305361E"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -4.79,
   "class": "AdjacentPanorama",
   "yaw": -3.99,
   "panorama": "this.panorama_473AA607_495D_7C44_41A6_E67D8FE36C39",
   "distance": 1
  },
  {
   "backwardYaw": -0.8,
   "class": "AdjacentPanorama",
   "yaw": 176.41,
   "panorama": "this.panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4520D587_4A93_75E9_41B6_29A1B4861335",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5B7DE96E_4963_54C4_41B9_85B43094141A",
 "yaw": -94.6,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5B7DE96E_4963_54C4_41B9_85B43094141A_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -1.59
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091627_00_045",
 "id": "panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A",
 "hfov": 360,
 "overlays": [
  "this.overlay_47A2BE0C_495D_2C44_41A4_70F1CD5C5F36",
  "this.overlay_47A29E0C_495D_2C44_41A9_4E9B78CEED67",
  "this.overlay_47A28E0C_495D_2C44_41C2_BA63F268B6FE",
  "this.overlay_58C2DB2E_49A2_F444_41C1_E9D8078B6F06",
  "this.popup_5BCCF519_49A5_7C4C_41C8_20C09D88EA67"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 140.49,
   "class": "AdjacentPanorama",
   "yaw": -49.09,
   "panorama": "this.panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6",
   "distance": 1
  },
  {
   "backwardYaw": 7.58,
   "class": "AdjacentPanorama",
   "yaw": 137.1,
   "panorama": "this.panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_t.jpg"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_590F34C0_4967_DC3C_41CA_3F52B4D57B2A_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_590F34C0_4967_DC3C_41CA_3F52B4D57B2A_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_590F34C0_4967_DC3C_41CA_3F52B4D57B2A_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FC16FC5_49AD_2BC4_41B3_9454ED59C045"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_59964E5F_496D_2CC4_41CB_15A8BC3956C3",
 "yaw": 64.05,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_59964E5F_496D_2CC4_41CB_15A8BC3956C3_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.99
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_58FDF94A_49A5_34CC_41C6_8CCC60783688",
 "yaw": -21.96,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_58FDF94A_49A5_34CC_41C6_8CCC60783688_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.19
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -78.63,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47D886E0_4A93_7727_41C6_47BF6586E77B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47CE06F0_4A93_7727_41AF_B02EF3266B49",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5823A29E_4962_D444_41B7_993189DFE6E2_0_0.jpg",
   "width": 675,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_5823A29E_4962_D444_41B7_993189DFE6E2_0_1.jpg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5823A29E_4962_D444_41B7_993189DFE6E2_0_2.jpg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5FD82FBE_49AD_2C44_41AE_A408088C5A4E"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_090120_00_022",
 "id": "panorama_45A63372_495F_74DC_41B2_D33635B563EA",
 "hfov": 360,
 "overlays": [
  "this.overlay_45A7D372_495F_74DC_41AA_DF6CEECA93E4",
  "this.overlay_45A7C372_495F_74DC_41B5_4CE5C8E0F6C6"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -172.42,
   "class": "AdjacentPanorama",
   "yaw": 3.19,
   "panorama": "this.panorama_45A87B7B_495F_74CC_41A0_15122F2041BA",
   "distance": 1
  },
  {
   "backwardYaw": 45.75,
   "class": "AdjacentPanorama",
   "yaw": 171.62,
   "panorama": "this.panorama_4585AA94_495F_3444_41AD_174FAF41FDD8",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 40.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47A949F0_4A93_7D27_4170_53B46DE8C322",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_58BD80DC_49A3_55C4_41D0_687A218C783D_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_58BD80DC_49A3_55C4_41D0_687A218C783D_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_58BD80DC_49A3_55C4_41D0_687A218C783D_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FF03FD7_49AD_2BC3_41CD_09E4E2D7A836"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -32.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47AC36C1_4A93_7769_416A_A284A2B80058",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5B95B886_49A5_3444_4178_1F40362BAB57",
 "yaw": -41.51,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5B95B886_49A5_3444_4178_1F40362BAB57_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.59
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "paddingBottom": 0,
 "id": "window_586CCE52_49BD_2CDC_41D2_36609A3BAEA8",
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "modal": true,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "shadowVerticalLength": 0,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "height": 600,
 "bodyPaddingBottom": 5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "title": "Komik Relief Tentang Perjuangan Rakyat Indonesia Melawan Penjajah",
 "closeButtonIconHeight": 12,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_586A9E52_49BD_2CDC_41CB_245DB7DEF7C4"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "veilColorDirection": "horizontal",
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window37313"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_085458_00_016",
 "id": "panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047",
 "hfov": 360,
 "overlays": [
  "this.overlay_438F0EED_495F_EDC4_41C7_A524D915B814",
  "this.overlay_438F2EED_495F_EDC4_41A0_901717757DA5"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 18.84,
   "class": "AdjacentPanorama",
   "yaw": 167.47,
   "panorama": "this.panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86",
   "distance": 1
  },
  {
   "backwardYaw": 171.01,
   "class": "AdjacentPanorama",
   "yaw": -8.75,
   "panorama": "this.panorama_43A5875A_495F_DCCC_4191_2A12F201259B",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.87,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_448F87F9_4A93_7519_41B3_CFF4F3296E11",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_581788C9_495D_75CC_41C2_8BBA8A719C32",
 "yaw": 78.62,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_581788C9_495D_75CC_41C2_8BBA8A719C32_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -1.79
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "label": "IMG_20230826_085203_00_014",
 "id": "panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_t.jpg"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_58AECAC7_497D_35C3_41C9_27FC4029F85D_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_58AECAC7_497D_35C3_41C9_27FC4029F85D_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_58AECAC7_497D_35C3_41C9_27FC4029F85D_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FAAAFAF_49AD_2C44_41B3_55BFD30EBDCE"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_58048251_49A3_34DC_413E_B03E9740EB48",
 "yaw": -73.24,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_58048251_49A3_34DC_413E_B03E9740EB48_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -0.19
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_581E45A9_495D_5C4C_41C9_2068622456B1_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_581E45A9_495D_5C4C_41C9_2068622456B1_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_581E45A9_495D_5C4C_41C9_2068622456B1_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FCB0FD0_49AD_2BDD_41D0_5267C4548CFB"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 130.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_44798914_4A93_7AEF_41C6_48D15763B70C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.39,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47B4C692_4A93_77EB_41B1_F81DC44E37FA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_456295E6_4A93_752B_41AA_344E7046856D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_580B94A4_49A3_3C44_41C3_23A8A305361E",
 "yaw": -114.55,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_580B94A4_49A3_3C44_41C3_23A8A305361E_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -0.59
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.29,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47BEE9B1_4A93_7D29_41C4_20F64940C713",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -45.9,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47EFEA5D_4A93_7F19_41CA_018CEA81A7BB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_58AECAC7_497D_35C3_41C9_27FC4029F85D",
 "yaw": -87.8,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_58AECAC7_497D_35C3_41C9_27FC4029F85D_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -1.59
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.82,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_457CD5D7_4A93_7569_41D2_2AD2671DEB9F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5807DE90_4965_2C5D_41C2_4CE00953DAB6_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_5807DE90_4965_2C5D_41C2_4CE00953DAB6_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5807DE90_4965_2C5D_41C2_4CE00953DAB6_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FC22FC8_49AD_2BCC_41CD_57A42C0500F8"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_583F4C89_4962_EC4F_41B9_66823860239C_0_0.jpg",
   "width": 675,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_583F4C89_4962_EC4F_41B9_66823860239C_0_1.jpg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_583F4C89_4962_EC4F_41B9_66823860239C_0_2.jpg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5FDAEFC1_49AD_2C3C_41B8_AA0E769260FA"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_58E0404F_495E_D4C4_41D0_F63181F96981_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_58E0404F_495E_D4C4_41D0_F63181F96981_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_58E0404F_495E_D4C4_41D0_F63181F96981_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FCFDFCD_49AD_2BC4_41C5_517B222AD73A"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 146.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4529C597_4A93_75E9_41C2_F1F6B029D3CB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 76.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47D3D9FF_4A93_7D19_41AE_2D30956A7D3C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_587556E1_49AF_5DFC_41D1_61274D872A5A_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_587556E1_49AF_5DFC_41D1_61274D872A5A_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_587556E1_49AF_5DFC_41D1_61274D872A5A_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FF2DFDC_49AD_2BC4_41B9_941E107707F3"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_45A63372_495F_74DC_41B2_D33635B563EA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -161.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_445238F5_4A93_7B29_41D0_79A56FDDF0CC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091132_00_036",
 "id": "panorama_47750657_495D_3CC4_41B3_E128F36C1348",
 "hfov": 360,
 "overlays": [
  "this.overlay_47757657_495D_3CC4_41CF_41877195B95D",
  "this.overlay_47756657_495D_3CC4_41A0_04AEC3F961FF"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 101.37,
   "class": "AdjacentPanorama",
   "yaw": -15.96,
   "panorama": "this.panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77",
   "distance": 1
  },
  {
   "backwardYaw": -6.19,
   "class": "AdjacentPanorama",
   "yaw": 169.02,
   "panorama": "this.panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_t.jpg"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5835518A_49AF_D44C_41B3_177FD497C4B3_0_0.jpg",
   "width": 675,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_5835518A_49AF_D44C_41B3_177FD497C4B3_0_1.jpg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5835518A_49AF_D44C_41B3_177FD497C4B3_0_2.jpg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5FF2EFDB_49AD_2BCC_41D1_50529B7C769A"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_589802BE_4963_3444_41BC_2551ED96C322_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_589802BE_4963_3444_41BC_2551ED96C322_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_589802BE_4963_3444_41BC_2551ED96C322_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FCD1FC9_49AD_2BCC_41C2_CBDB93F90255"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_585E0B34_49A3_3445_41CC_00A10FA3C8C4",
 "yaw": 114.34,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_585E0B34_49A3_3445_41CC_00A10FA3C8C4_0_1.jpg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "hfov": 4.66,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -9.17
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -72.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_44EDC8A7_4A93_7B2A_41AE_0A1576ABF9D8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5B95B886_49A5_3444_4178_1F40362BAB57_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_5B95B886_49A5_3444_4178_1F40362BAB57_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5B95B886_49A5_3444_4178_1F40362BAB57_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FE01FE8_49AD_2BCC_41BF_92C246A08F05"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47F85A4D_4A93_7F79_41C9_BCACA33630D7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5BEA6BEE_49A7_2BC4_417A_95D6A8C6CC88",
 "yaw": -160.25,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5BEA6BEE_49A7_2BC4_417A_95D6A8C6CC88_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.39
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47A239D0_4A93_7D67_41C9_E2EC1DAABE45",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_584A1BBD_49A3_5444_41B5_E50D0B3EC181_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_584A1BBD_49A3_5444_41B5_E50D0B3EC181_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_584A1BBD_49A3_5444_41B5_E50D0B3EC181_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FE35FEA_49AD_2BCC_41A0_927526CAE4CA"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "label": "IMG_20230826_090438_00_027",
 "id": "panorama_459E622A_495F_344C_41B3_A49151E45154",
 "overlays": [
  "this.overlay_590B34EE_4962_FDC4_41BE_AF25528C383A",
  "this.overlay_586577A1_4965_7C7C_41BE_22AE04DA7F57",
  "this.popup_59A915B9_4965_FC4F_41D0_DEAF2A6214E3",
  "this.popup_585BBF78_4965_2CCD_41C5_DB99FF962FB1"
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091300_00_039",
 "id": "panorama_476FFE3F_495D_6C44_41D0_A06437D30868",
 "hfov": 360,
 "overlays": [
  "this.overlay_476F8E3F_495D_6C44_41C3_53E275D7F2C7",
  "this.overlay_476F9E3F_495D_6C44_41A6_3E2653B017EC",
  "this.overlay_5B139470_4962_FCDC_41CD_F86D38662353",
  "this.overlay_5A7E69E2_4962_D7FC_41CC_B18F963F71BA",
  "this.overlay_59928CAF_495D_2C44_41CE_68593D6A54C6",
  "this.popup_59ED0C43_495D_EC3C_41C4_E6CE7D6672B7",
  "this.popup_581788C9_495D_75CC_41C2_8BBA8A719C32",
  "this.popup_58E0404F_495E_D4C4_41D0_F63181F96981"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.6,
   "class": "AdjacentPanorama",
   "yaw": 3.79,
   "panorama": "this.panorama_473AA607_495D_7C44_41A6_E67D8FE36C39",
   "distance": 1
  },
  {
   "backwardYaw": 156.45,
   "class": "AdjacentPanorama",
   "yaw": -139.09,
   "panorama": "this.panorama_44A7F677_495D_5CC3_41D0_4A46158791BD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_085311_00_015",
 "id": "panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86",
 "hfov": 360,
 "overlays": [
  "this.overlay_43EA3663_495F_FCFC_41AF_43B5D8487D24",
  "this.overlay_43EA5663_495F_FCFC_41BB_29E15A178B7A"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 167.47,
   "class": "AdjacentPanorama",
   "yaw": 18.84,
   "panorama": "this.panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047",
   "distance": 1
  },
  {
   "backwardYaw": -33.6,
   "class": "AdjacentPanorama",
   "yaw": -162.91,
   "panorama": "this.panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_090820_00_034",
 "id": "panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80",
 "hfov": 360,
 "overlays": [
  "this.overlay_44C20659_495E_DCCC_41B3_0831AFF53B08",
  "this.overlay_44C21659_495E_DCCC_41AB_ABACEC2D86B8"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 134.1,
   "class": "AdjacentPanorama",
   "yaw": -175.61,
   "panorama": "this.panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365",
   "distance": 1
  },
  {
   "backwardYaw": 49.86,
   "class": "AdjacentPanorama",
   "yaw": -11.57,
   "panorama": "this.panorama_43A5875A_495F_DCCC_4191_2A12F201259B",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_59A915B9_4965_FC4F_41D0_DEAF2A6214E3",
 "yaw": -71.05,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_59A915B9_4965_FC4F_41D0_DEAF2A6214E3_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -3.19
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47B1B6A2_4A93_772B_41C4_F1D1FCE16210",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.99,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_444528F5_4A93_7B29_41D0_25E8A82D029E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_46B3C136_4963_F445_41A1_820666863611",
 "yaw": 36.72,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_46B3C136_4963_F445_41A1_820666863611_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": 2.39
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_585EB4A6_49A5_DC44_419F_85B7BA1E45AA_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_585EB4A6_49A5_DC44_419F_85B7BA1E45AA_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_585EB4A6_49A5_DC44_419F_85B7BA1E45AA_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FF31FD9_49AD_2BCC_41B6_E950C2FCB572"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_47750657_495D_3CC4_41B3_E128F36C1348_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_095245_00_100",
 "id": "panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129",
 "hfov": 360,
 "overlays": [
  "this.overlay_43FC9E8D_495F_2C44_41CE_D8402FF8DCCA"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -103.88,
   "class": "AdjacentPanorama",
   "yaw": 107.59,
   "panorama": "this.panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.89,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47B4B9A2_4A93_7D2B_41D0_BB91997A3D4F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_44015B5B_495F_54CC_41D0_96161C648977_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5BCCF519_49A5_7C4C_41C8_20C09D88EA67",
 "yaw": -170.43,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5BCCF519_49A5_7C4C_41C8_20C09D88EA67_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.39
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_58BCBD0D_495E_EC44_41BA_FB5FA3F0598C",
 "yaw": 131.1,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_58BCBD0D_495E_EC44_41BA_FB5FA3F0598C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -1.19
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -42.9,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4727D75D_4A93_7519_4192_76A32EF96EF7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_459E622A_495F_344C_41B3_A49151E45154_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_449D97EA_4A93_753B_41CD_5C448D3EF904",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.85,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4422E8E5_4A93_7B29_41AF_3868151B30F8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_447B57BC_495E_DC44_41CC_DA09343F4864_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.01,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47AF19E0_4A93_7D27_41B5_3422DD312F8E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.25,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_479A2654_4A93_776F_41D1_580A25C040E4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.69,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4549D5C7_4A93_7569_41CE_B9BA4EAC3C56",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_580B94A4_49A3_3C44_41C3_23A8A305361E_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_580B94A4_49A3_3C44_41C3_23A8A305361E_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_580B94A4_49A3_3C44_41C3_23A8A305361E_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FF79FD5_49AD_2BC7_41D0_5057F8CA28BD"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -145.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47DCFA0F_4A93_7EF9_41CF_66F84EAD66E5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_58401FAA_496F_2C4C_41CA_A3DE3FB5D94E_0_0.jpg",
   "width": 675,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_58401FAA_496F_2C4C_41CA_A3DE3FB5D94E_0_1.jpg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_58401FAA_496F_2C4C_41CA_A3DE3FB5D94E_0_2.jpg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5FDC1FB9_49AD_2C4C_41C3_34A0E67BC591"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_598B2D5B_497D_2CCC_41C6_0CDEAC6FD495_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_598B2D5B_497D_2CCC_41C6_0CDEAC6FD495_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_598B2D5B_497D_2CCC_41C6_0CDEAC6FD495_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_59FDF192_497D_545C_41C6_C79CBB18BD1D"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5BC29A7E_49AD_34C4_41BB_6509747E3E92",
 "yaw": -89.41,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5BC29A7E_49AD_34C4_41BB_6509747E3E92_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -0.79
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_59A915B9_4965_FC4F_41D0_DEAF2A6214E3_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_59A915B9_4965_FC4F_41D0_DEAF2A6214E3_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_59A915B9_4965_FC4F_41D0_DEAF2A6214E3_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FD58FB1_49AD_2C5C_41C2_A15CC3C40533"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5B7DE96E_4963_54C4_41B9_85B43094141A_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_5B7DE96E_4963_54C4_41B9_85B43094141A_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5B7DE96E_4963_54C4_41B9_85B43094141A_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FDB8FC0_49AD_2C3C_41AE_816A73117F97"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_585BBF78_4965_2CCD_41C5_DB99FF962FB1",
 "yaw": 65.05,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_585BBF78_4965_2CCD_41C5_DB99FF962FB1_0_1.jpg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "hfov": 4.67,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": 8.59
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_090651_00_031",
 "id": "panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC",
 "hfov": 360,
 "overlays": [
  "this.overlay_44DC6F36_495E_EC44_41D0_5391599A7255",
  "this.overlay_44DC8F36_495E_EC44_41A9_FE6BAC44EBE2",
  "this.overlay_5811B862_496D_D4FD_4160_F74F3D7FFFA3",
  "this.overlay_587F24EE_496D_7DC4_41C4_0DD7AA8686A7",
  "this.popup_58B35EC2_496D_2C3C_41D1_007E11410538",
  "this.popup_58401FAA_496F_2C4C_41CA_A3DE3FB5D94E"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -129.71,
   "class": "AdjacentPanorama",
   "yaw": 68.85,
   "panorama": "this.panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81",
   "distance": 1
  },
  {
   "backwardYaw": -159.45,
   "class": "AdjacentPanorama",
   "yaw": 179,
   "panorama": "this.panorama_44015B5B_495F_54CC_41D0_96161C648977",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47817673_4A93_7729_41C8_FDDA100460D1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "duration": 3000,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 0,
   "targetStereographicFactor": 0
  }
 ],
 "class": "PanoramaCamera",
 "id": "panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5814A700_496D_3C3C_41B7_BC8F548DEE62_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_5814A700_496D_3C3C_41B7_BC8F548DEE62_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5814A700_496D_3C3C_41B7_BC8F548DEE62_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FDECFBD_49AD_2C44_41C9_023E089B464F"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47F2CA3E_4A93_7F1B_41C1_30C7A3CAE49A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -130.14,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47122A6D_4A93_7F39_41C4_120D4719B921",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_441CD8B6_4A93_7B2B_41CF_3469ECDA9916",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_camera",
   "media": "this.panorama_4567B3B5_4956_E79E_41D1_5886928D41E4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_camera",
   "media": "this.panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_camera",
   "media": "this.panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_camera",
   "media": "this.panorama_441EDF90_4957_3F96_41D0_2DEEA625F274",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_camera",
   "media": "this.panorama_45CCAB04_4957_207E_417C_9C95C01D94D5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_camera",
   "media": "this.panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6_camera",
   "media": "this.panorama_43D87A10_495F_D45D_417F_7E2F9F633CC6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_camera",
   "media": "this.panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_camera",
   "media": "this.panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_43A5875A_495F_DCCC_4191_2A12F201259B_camera",
   "media": "this.panorama_43A5875A_495F_DCCC_4191_2A12F201259B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4281523F_495F_3444_41C7_87D56D7FCE47_camera",
   "media": "this.panorama_4281523F_495F_3444_41C7_87D56D7FCE47",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_camera",
   "media": "this.panorama_4585AA94_495F_3444_41AD_174FAF41FDD8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_45235322_495F_547C_41C8_D48D76FAE9CA_camera",
   "media": "this.panorama_45235322_495F_547C_41C8_D48D76FAE9CA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_camera",
   "media": "this.panorama_42A65B6C_495F_54C5_41B0_5284F77303C3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_45A63372_495F_74DC_41B2_D33635B563EA_camera",
   "media": "this.panorama_45A63372_495F_74DC_41B2_D33635B563EA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_camera",
   "media": "this.panorama_45A87B7B_495F_74CC_41A0_15122F2041BA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4454C338_495F_544C_41C8_2683B348C9DD_camera",
   "media": "this.panorama_4454C338_495F_544C_41C8_2683B348C9DD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_44015B5B_495F_54CC_41D0_96161C648977_camera",
   "media": "this.panorama_44015B5B_495F_54CC_41D0_96161C648977",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_459E622A_495F_344C_41B3_A49151E45154_camera",
   "media": "this.panorama_459E622A_495F_344C_41B3_A49151E45154",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_camera",
   "media": "this.panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_camera",
   "media": "this.panorama_445B7FF9_495F_2BCC_41C2_702152C4788B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_447B57BC_495E_DC44_41CC_DA09343F4864_camera",
   "media": "this.panorama_447B57BC_495E_DC44_41CC_DA09343F4864",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_camera",
   "media": "this.panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_camera",
   "media": "this.panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_camera",
   "media": "this.panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_camera",
   "media": "this.panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_camera",
   "media": "this.panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_47750657_495D_3CC4_41B3_E128F36C1348_camera",
   "media": "this.panorama_47750657_495D_3CC4_41B3_E128F36C1348",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_camera",
   "media": "this.panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_camera",
   "media": "this.panorama_44A7F677_495D_5CC3_41D0_4A46158791BD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_476FFE3F_495D_6C44_41D0_A06437D30868_camera",
   "media": "this.panorama_476FFE3F_495D_6C44_41D0_A06437D30868",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_camera",
   "media": "this.panorama_473AA607_495D_7C44_41A6_E67D8FE36C39",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_camera",
   "media": "this.panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_camera",
   "media": "this.panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_camera",
   "media": "this.panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_camera",
   "media": "this.panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_camera",
   "media": "this.panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_camera",
   "media": "this.panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_camera",
   "media": "this.panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_camera",
   "media": "this.panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_583F4C89_4962_EC4F_41B9_66823860239C",
 "yaw": -9.38,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_583F4C89_4962_EC4F_41B9_66823860239C_0_1.jpg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "hfov": 4.71,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": 4.2
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5814A700_496D_3C3C_41B7_BC8F548DEE62",
 "yaw": 106.96,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5814A700_496D_3C3C_41B7_BC8F548DEE62_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -3.59
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_58401FAA_496F_2C4C_41CA_A3DE3FB5D94E",
 "yaw": -147.28,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_58401FAA_496F_2C4C_41CA_A3DE3FB5D94E_0_1.jpg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "hfov": 4.69,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": 5.99
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_58FDF94A_49A5_34CC_41C6_8CCC60783688_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_58FDF94A_49A5_34CC_41C6_8CCC60783688_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_58FDF94A_49A5_34CC_41C6_8CCC60783688_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FF43FD3_49AD_2BC3_41CE_33335F361F0A"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_59D720D4_4962_D5C5_41D0_8EB4B2ACD623_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_59D720D4_4962_D5C5_41D0_8EB4B2ACD623_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_59D720D4_4962_D5C5_41D0_8EB4B2ACD623_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FD6AFB4_49AD_2C44_4183_FE54934C33F6"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_585EB4A6_49A5_DC44_419F_85B7BA1E45AA",
 "yaw": 111.55,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_585EB4A6_49A5_DC44_419F_85B7BA1E45AA_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.99
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_459A7933_4A93_7D29_41BB_13A95C9282E6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_084747_00_009",
 "id": "panorama_441EDF90_4957_3F96_41D0_2DEEA625F274",
 "hfov": 360,
 "overlays": [
  "this.overlay_441EFF90_4957_3F96_41CB_030056CB58E5",
  "this.overlay_44190F90_4957_3F96_419C_1A8707214ABD"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 82.4,
   "class": "AdjacentPanorama",
   "yaw": -163.39,
   "panorama": "this.panorama_45CCAB04_4957_207E_417C_9C95C01D94D5",
   "distance": 1
  },
  {
   "backwardYaw": 40.19,
   "class": "AdjacentPanorama",
   "yaw": 17.47,
   "panorama": "this.panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_085840_00_020",
 "id": "panorama_45235322_495F_547C_41C8_D48D76FAE9CA",
 "hfov": 360,
 "overlays": [
  "this.overlay_45237322_495F_547C_41C2_7DC607525985",
  "this.overlay_45230322_495F_547C_41C5_3DBE05328EBF"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -21.31,
   "class": "AdjacentPanorama",
   "yaw": 179.59,
   "panorama": "this.panorama_4585AA94_495F_3444_41AD_174FAF41FDD8",
   "distance": 1
  },
  {
   "backwardYaw": 178.18,
   "class": "AdjacentPanorama",
   "yaw": 0.93,
   "panorama": "this.panorama_42A65B6C_495F_54C5_41B0_5284F77303C3",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091154_00_037",
 "id": "panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77",
 "hfov": 360,
 "overlays": [
  "this.overlay_44A31E31_495D_2C5C_41CE_5C9F33D4F742",
  "this.overlay_44A30E31_495D_2C5C_41C6_047505733829",
  "this.overlay_5850EB9F_4967_3444_41C2_55A20B91E2D2",
  "this.popup_590F34C0_4967_DC3C_41CA_3F52B4D57B2A"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -15.96,
   "class": "AdjacentPanorama",
   "yaw": 101.37,
   "panorama": "this.panorama_47750657_495D_3CC4_41B3_E128F36C1348",
   "distance": 1
  },
  {
   "backwardYaw": -139.49,
   "class": "AdjacentPanorama",
   "yaw": -5.99,
   "panorama": "this.panorama_44A7F677_495D_5CC3_41D0_4A46158791BD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091408_00_041",
 "id": "panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050",
 "hfov": 360,
 "overlays": [
  "this.overlay_47851DC1_495D_6C3F_41CC_B81661C005E5",
  "this.overlay_47850DC1_495D_6C3F_41D0_EB0B3ECD6A96",
  "this.overlay_59198B00_49A3_543D_41A9_BB51738559DC",
  "this.popup_58FDF94A_49A5_34CC_41C6_8CCC60783688"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -84.21,
   "class": "AdjacentPanorama",
   "yaw": -148.47,
   "panorama": "this.panorama_473AA607_495D_7C44_41A6_E67D8FE36C39",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091328_00_040",
 "id": "panorama_473AA607_495D_7C44_41A6_E67D8FE36C39",
 "hfov": 360,
 "overlays": [
  "this.overlay_47394607_495D_7C44_41BC_FB5B1707A8DF",
  "this.overlay_47397607_495D_7C44_41A8_59EBE6D0D1D0",
  "this.overlay_47396607_495D_7C44_41CD_C8083E60DDF3",
  "this.overlay_5867D9AC_495F_F445_4193_DD677E868821",
  "this.overlay_58EF86B5_495F_3C44_41BD_12423F538688",
  "this.overlay_5B5BCCAA_495F_6C4D_41C2_4C412D747EAD",
  "this.popup_58BCBD0D_495E_EC44_41BA_FB5FA3F0598C",
  "this.popup_581E45A9_495D_5C4C_41C9_2068622456B1",
  "this.popup_5B0B9A4E_49A3_74C4_41C1_1025FDD1A28D"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -148.47,
   "class": "AdjacentPanorama",
   "yaw": -84.21,
   "panorama": "this.panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050",
   "distance": 1
  },
  {
   "backwardYaw": -3.99,
   "class": "AdjacentPanorama",
   "yaw": -4.79,
   "panorama": "this.panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D",
   "distance": 1
  },
  {
   "backwardYaw": 3.79,
   "class": "AdjacentPanorama",
   "yaw": 179.6,
   "panorama": "this.panorama_476FFE3F_495D_6C44_41D0_A06437D30868",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091730_00_047",
 "id": "panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD",
 "hfov": 360,
 "overlays": [
  "this.overlay_4678AECF_495D_EDC4_41B4_61DCF93DD9FE",
  "this.overlay_4678BECF_495D_EDC4_41BD_B54DE9EEEFD2"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 102.97,
   "class": "AdjacentPanorama",
   "yaw": -53.08,
   "panorama": "this.panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6",
   "distance": 1
  },
  {
   "backwardYaw": -21.15,
   "class": "AdjacentPanorama",
   "yaw": -158.25,
   "panorama": "this.panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.78,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4733C74E_4A93_757B_416E_2137075D4498",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_084910_00_011",
 "id": "panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1",
 "hfov": 360,
 "overlays": [
  "this.overlay_440FA3B8_4957_2796_41CD_EF28D8A86EF8"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.13,
   "class": "AdjacentPanorama",
   "yaw": -121.32,
   "panorama": "this.panorama_45CCAB04_4957_207E_417C_9C95C01D94D5",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_090412_00_026",
 "id": "panorama_44015B5B_495F_54CC_41D0_96161C648977",
 "hfov": 360,
 "overlays": [
  "this.overlay_44012B5B_495F_54CC_41C2_2F46D09383EE",
  "this.overlay_44010B5B_495F_54CC_4186_7F5BFDBBB6D4",
  "this.overlay_58FB4DCB_497F_6FCC_41BC_C6FF6E298721",
  "this.popup_58AECAC7_497D_35C3_41C9_27FC4029F85D"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_445B7FF9_495F_2BCC_41C2_702152C4788B"
  },
  {
   "backwardYaw": 179,
   "class": "AdjacentPanorama",
   "yaw": -159.45,
   "panorama": "this.panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_090556_00_029",
 "id": "panorama_445B7FF9_495F_2BCC_41C2_702152C4788B",
 "hfov": 360,
 "overlays": [
  "this.overlay_445B6FF9_495F_2BCC_41D2_2BB2FC2EF3E3",
  "this.overlay_445B5FF9_495F_2BCC_41C3_8A5518EDE418",
  "this.overlay_598269C1_4966_D43C_41D1_98F9B8F1F9B3",
  "this.overlay_582DA42F_4966_DC44_41C9_68BE4F3023B8",
  "this.overlay_58B1CC08_4965_2C4C_41CC_B8461316EBCC",
  "this.popup_59D720D4_4962_D5C5_41D0_8EB4B2ACD623",
  "this.popup_58F89F77_4963_6CC4_41BB_9816BF540F32",
  "this.popup_580496CD_4963_DDC4_41AD_FCACA6EF9893"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 179,
   "class": "AdjacentPanorama",
   "yaw": -179.6,
   "panorama": "this.panorama_4454C338_495F_544C_41C8_2683B348C9DD",
   "distance": 1
  },
  {
   "backwardYaw": 132.11,
   "class": "AdjacentPanorama",
   "yaw": -62.26,
   "panorama": "this.panorama_447B57BC_495E_DC44_41CC_DA09343F4864",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_59ED0C43_495D_EC3C_41C4_E6CE7D6672B7",
 "yaw": 140.08,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_59ED0C43_495D_EC3C_41C4_E6CE7D6672B7_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.79
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_58B35EC2_496D_2C3C_41D1_007E11410538",
 "yaw": 132.5,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_58B35EC2_496D_2C3C_41D1_007E11410538_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -1.39
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091556_00_044",
 "id": "panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6",
 "hfov": 360,
 "overlays": [
  "this.overlay_4675B64D_495D_3CC4_41D0_5EA2C4657B39",
  "this.overlay_4675A64D_495D_3CC4_41B4_20BDEFE4C2F4",
  "this.overlay_4675964D_495D_3CC4_41D2_50C8B9C9FE96"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 178.4,
   "class": "AdjacentPanorama",
   "yaw": -13.97,
   "panorama": "this.panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0",
   "distance": 1
  },
  {
   "backwardYaw": -49.09,
   "class": "AdjacentPanorama",
   "yaw": 140.49,
   "panorama": "this.panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A",
   "distance": 1
  },
  {
   "backwardYaw": -53.08,
   "class": "AdjacentPanorama",
   "yaw": 102.97,
   "panorama": "this.panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4281523F_495F_3444_41C7_87D56D7FCE47_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5B4DC9E2_4965_37FC_41D0_26804318B8C4",
 "yaw": 67.44,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5B4DC9E2_4965_37FC_41D0_26804318B8C4_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -3.39
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 21.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47C76A1F_4A93_7F19_41B5_8815D762D02B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_580496CD_4963_DDC4_41AD_FCACA6EF9893_0_0.jpg",
   "width": 675,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_580496CD_4963_DDC4_41AD_FCACA6EF9893_0_1.jpg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_580496CD_4963_DDC4_41AD_FCACA6EF9893_0_2.jpg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5FD0DFB6_49AD_2C44_41B3_7BBC0382537E"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.38,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_44D57848_4A93_7B66_41C5_71B8DE34A9CE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5BC29A7E_49AD_34C4_41BB_6509747E3E92_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_5BC29A7E_49AD_34C4_41BB_6509747E3E92_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5BC29A7E_49AD_34C4_41BB_6509747E3E92_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FFC3FDD_49AD_2BC4_41B0_136DAF39BC1C"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.01,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4669C634_4A93_772F_419B_AB22D9CC96C4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_45235322_495F_547C_41C8_D48D76FAE9CA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_458C5943_4A93_7D69_41B3_585233928300",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_085919_00_021",
 "id": "panorama_42A65B6C_495F_54C5_41B0_5284F77303C3",
 "hfov": 360,
 "overlays": [
  "this.overlay_42A66B6C_495F_54C5_41A8_160791AAA281"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.93,
   "class": "AdjacentPanorama",
   "yaw": 178.18,
   "panorama": "this.panorama_45235322_495F_547C_41C8_D48D76FAE9CA",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_478F1981_4A93_7DE9_4190_67F073897529",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 40.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_470DD73E_4A93_751B_41AE_EFAF643F9BFD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_084824_00_010",
 "id": "panorama_45CCAB04_4957_207E_417C_9C95C01D94D5",
 "hfov": 360,
 "overlays": [
  "this.overlay_45CCCB04_4957_207E_41C2_390FB762CBA1",
  "this.overlay_45CCFB04_4957_207E_41C4_16EF13B37646",
  "this.overlay_45CCEB04_4957_207E_41D1_630A9FCFE1F6"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -163.39,
   "class": "AdjacentPanorama",
   "yaw": 82.4,
   "panorama": "this.panorama_441EDF90_4957_3F96_41D0_2DEEA625F274",
   "distance": 1
  },
  {
   "backwardYaw": -121.32,
   "class": "AdjacentPanorama",
   "yaw": -1.13,
   "panorama": "this.panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_t.jpg"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_581788C9_495D_75CC_41C2_8BBA8A719C32_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_581788C9_495D_75CC_41C2_8BBA8A719C32_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_581788C9_495D_75CC_41C2_8BBA8A719C32_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FCE2FCC_49AD_2BC4_41B0_AF5051C5F668"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_085014_00_013",
 "id": "panorama_4567B3B5_4956_E79E_41D1_5886928D41E4",
 "hfov": 360,
 "overlays": [
  "this.overlay_4567A3B5_4956_E79E_41B7_4ECD82F283FF",
  "this.overlay_456793B5_4956_E79E_41B9_71B1044B3E70",
  "this.overlay_456773B5_4956_E79E_41C7_70AB8F917519"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_441EDF90_4957_3F96_41D0_2DEEA625F274"
  },
  {
   "backwardYaw": 147.33,
   "class": "AdjacentPanorama",
   "yaw": -15,
   "panorama": "this.panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_59964E5F_496D_2CC4_41CB_15A8BC3956C3_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_59964E5F_496D_2CC4_41CB_15A8BC3956C3_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_59964E5F_496D_2CC4_41CB_15A8BC3956C3_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FD2BFB7_49AD_2C44_41C8_74D71CB2204B"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5B0B9A4E_49A3_74C4_41C1_1025FDD1A28D_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_5B0B9A4E_49A3_74C4_41C1_1025FDD1A28D_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5B0B9A4E_49A3_74C4_41C1_1025FDD1A28D_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FCA5FD2_49AD_2BDD_41CB_03EA161D37E0"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_092056_00_048",
 "id": "panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5",
 "hfov": 360,
 "overlays": [
  "this.overlay_461A46DB_495D_FDCC_41B7_AB8347D1F778",
  "this.overlay_461A76DB_495D_FDCC_41C9_2772365954F7",
  "this.overlay_5BBA5189_49BD_544C_41C3_656248DFEC2C"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 34.32,
   "class": "AdjacentPanorama",
   "yaw": -82.22,
   "panorama": "this.panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C",
   "distance": 1
  },
  {
   "backwardYaw": -158.25,
   "class": "AdjacentPanorama",
   "yaw": -21.15,
   "panorama": "this.panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091525_00_043",
 "id": "panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0",
 "hfov": 360,
 "overlays": [
  "this.overlay_479CDEA4_495D_2C44_41C9_F10B7DCB66EC",
  "this.overlay_479CAEA4_495D_2C44_41A4_EB8437FDCB0F",
  "this.overlay_58BFB004_49AD_3445_41AD_37EF7433FB88",
  "this.overlay_586D8E0D_49AD_6C44_41B0_68D8E2073E04",
  "this.overlay_5BDF2F33_49AD_2C5C_41C4_12A860D0F3DA",
  "this.overlay_5B646E6A_49AD_2CCD_41CC_DBF4169D3422",
  "this.overlay_58B95F46_49AD_ECC4_41B5_400D9E0900FB",
  "this.overlay_58105241_49AD_D43C_41C5_3A961B4F99A5",
  "this.overlay_58FF830F_49AD_5443_41D0_AA7E0ED7E253",
  "this.popup_5850E0ED_49AF_35C4_41BB_9992DCAB0138",
  "this.popup_5835518A_49AF_D44C_41B3_177FD497C4B3",
  "this.popup_587556E1_49AF_5DFC_41D1_61274D872A5A",
  "this.popup_5BC29A7E_49AD_34C4_41BB_6509747E3E92",
  "this.popup_586428C8_49AD_D5CC_41C2_08C9620680EC",
  "this.popup_585EFD48_49AD_2CCC_41BE_26B082E3520B",
  "this.popup_588917F0_49A3_5BDC_41C6_99A974D10455"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -13.97,
   "class": "AdjacentPanorama",
   "yaw": 178.4,
   "panorama": "this.panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6",
   "distance": 1
  },
  {
   "backwardYaw": 176.41,
   "class": "AdjacentPanorama",
   "yaw": -0.8,
   "panorama": "this.panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_44A22828_4A93_7B27_41BD_691A1B15E7DF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5835518A_49AF_D44C_41B3_177FD497C4B3",
 "yaw": -159.65,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5835518A_49AF_D44C_41B3_177FD497C4B3_0_1.jpg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "hfov": 4.71,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": 4
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47884991_4A93_7DE9_41C8_CF0043A0ABB1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_085014_00_012",
 "id": "panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F",
 "hfov": 360,
 "overlays": [
  "this.overlay_45EC8EBA_4957_618A_417F_EC0FD7BC15B3",
  "this.overlay_45EC9EBA_4957_618A_41AC_6F7EC2680982",
  "this.overlay_45ECEEBA_4957_618A_41C5_10DCDC68ACFC",
  "this.overlay_45ECCEBA_4957_618A_41B2_215D2AEC5DA2"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -162.91,
   "class": "AdjacentPanorama",
   "yaw": -33.6,
   "panorama": "this.panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86",
   "distance": 1
  },
  {
   "backwardYaw": 107.59,
   "class": "AdjacentPanorama",
   "yaw": -103.88,
   "panorama": "this.panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129",
   "distance": 1
  },
  {
   "backwardYaw": 17.47,
   "class": "AdjacentPanorama",
   "yaw": 40.19,
   "panorama": "this.panorama_441EDF90_4957_3F96_41D0_2DEEA625F274",
   "distance": 1
  },
  {
   "backwardYaw": -15,
   "class": "AdjacentPanorama",
   "yaw": 147.33,
   "panorama": "this.panorama_4567B3B5_4956_E79E_41D1_5886928D41E4",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4719B73E_4A93_751B_41B4_445BC1451415",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -111.15,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4745A78C_4A93_75FF_41D2_4F4AD2EC4084",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_476FFE3F_495D_6C44_41D0_A06437D30868_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_58F89F77_4963_6CC4_41BB_9816BF540F32_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_58F89F77_4963_6CC4_41BB_9816BF540F32_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_58F89F77_4963_6CC4_41BB_9816BF540F32_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FD18FB5_49AD_2C44_41D1_0853027E10FE"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_587556E1_49AF_5DFC_41D1_61274D872A5A",
 "yaw": -126.52,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_587556E1_49AF_5DFC_41D1_61274D872A5A_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -0.79
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5850E0ED_49AF_35C4_41BB_9992DCAB0138",
 "yaw": -177.81,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5850E0ED_49AF_35C4_41BB_9992DCAB0138_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.79
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_090715_00_032",
 "id": "panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81",
 "hfov": 360,
 "overlays": [
  "this.overlay_442CA6DF_495E_FDC3_41AF_0DC4D7378A3C",
  "this.overlay_442CC6DF_495E_FDC3_41C1_BDC8AF3A13A4",
  "this.overlay_442CF6DF_495E_FDC3_41A2_283B62EE4262",
  "this.overlay_5B10EF9A_496F_2C4C_4187_36F8B80C6FAB",
  "this.overlay_599003F2_496F_FBDC_41BF_12ACA7163BB8",
  "this.overlay_58C64636_496F_5C44_41C2_225E27C75762",
  "this.popup_59A24912_496D_545C_41D2_0BDBEFBC2948",
  "this.popup_5814A700_496D_3C3C_41B7_BC8F548DEE62",
  "this.popup_5823A29E_4962_D444_41B7_993189DFE6E2"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 68.85,
   "class": "AdjacentPanorama",
   "yaw": -129.71,
   "panorama": "this.panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC",
   "distance": 1
  },
  {
   "backwardYaw": 169.02,
   "class": "AdjacentPanorama",
   "yaw": -4.99,
   "panorama": "this.panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47F566FF_4A93_7719_41D0_659BB35298CD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_440E68C6_4A93_7B6B_4184_F71F24BA7FFE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5807DE90_4965_2C5D_41C2_4CE00953DAB6",
 "yaw": -89.81,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5807DE90_4965_2C5D_41C2_4CE00953DAB6_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.79
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_586428C8_49AD_D5CC_41C2_08C9620680EC",
 "yaw": -41.31,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_586428C8_49AD_D5CC_41C2_08C9620680EC_0_1.jpg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "hfov": 4.72,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": 2.2
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_085742_00_019",
 "id": "panorama_4585AA94_495F_3444_41AD_174FAF41FDD8",
 "hfov": 360,
 "overlays": [
  "this.overlay_45858A94_495F_3444_418D_7641AABF6C02",
  "this.overlay_4585EA94_495F_3444_41C4_CA78113FD786",
  "this.overlay_45852A94_495F_3444_4176_C3BD43DDD6E2"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -3.19,
   "class": "AdjacentPanorama",
   "yaw": 157.69,
   "panorama": "this.panorama_4281523F_495F_3444_41C7_87D56D7FCE47",
   "distance": 1
  },
  {
   "backwardYaw": 179.59,
   "class": "AdjacentPanorama",
   "yaw": -21.31,
   "panorama": "this.panorama_45235322_495F_547C_41C8_D48D76FAE9CA",
   "distance": 1
  },
  {
   "backwardYaw": 171.62,
   "class": "AdjacentPanorama",
   "yaw": 45.75,
   "panorama": "this.panorama_45A63372_495F_74DC_41B2_D33635B563EA",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_581E45A9_495D_5C4C_41C9_2068622456B1",
 "yaw": 80.22,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_581E45A9_495D_5C4C_41C9_2068622456B1_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.39
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_586428C8_49AD_D5CC_41C2_08C9620680EC_0_0.jpg",
   "width": 675,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_586428C8_49AD_D5CC_41C2_08C9620680EC_0_1.jpg",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_586428C8_49AD_D5CC_41C2_08C9620680EC_0_2.jpg",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5FFF1FDE_49AD_2BC5_41C0_446FF6322907"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_585EFD48_49AD_2CCC_41BE_26B082E3520B",
 "yaw": 67.25,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_585EFD48_49AD_2CCC_41BE_26B082E3520B_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.79
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_58BCBD0D_495E_EC44_41BA_FB5FA3F0598C_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_58BCBD0D_495E_EC44_41BA_FB5FA3F0598C_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_58BCBD0D_495E_EC44_41BA_FB5FA3F0598C_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FC83FCF_49AD_2BC3_41BB_90381A12A60F"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5823A29E_4962_D444_41B7_993189DFE6E2",
 "yaw": -5.39,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5823A29E_4962_D444_41B7_993189DFE6E2_0_1.jpg",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "hfov": 4.72,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": 0.6
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_59A24912_496D_545C_41D2_0BDBEFBC2948_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_59A24912_496D_545C_41D2_0BDBEFBC2948_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_59A24912_496D_545C_41D2_0BDBEFBC2948_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FD90FBB_49AD_2C43_41B0_5DE1E46AD8F5"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_588917F0_49A3_5BDC_41C6_99A974D10455",
 "yaw": 132.7,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_588917F0_49A3_5BDC_41C6_99A974D10455_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -1.79
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47870663_4A93_7729_41CA_B5695093DE01",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_090141_00_023",
 "id": "panorama_45A87B7B_495F_74CC_41A0_15122F2041BA",
 "hfov": 360,
 "overlays": [
  "this.overlay_45A86B7B_495F_74CC_41C6_DF3BFB9EC65D",
  "this.overlay_45A83B7B_495F_74CC_41D0_569C37891069"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -94.39,
   "class": "AdjacentPanorama",
   "yaw": 10.78,
   "panorama": "this.panorama_4454C338_495F_544C_41C8_2683B348C9DD",
   "distance": 1
  },
  {
   "backwardYaw": 3.19,
   "class": "AdjacentPanorama",
   "yaw": -172.42,
   "panorama": "this.panorama_45A63372_495F_74DC_41B2_D33635B563EA",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_584A1BBD_49A3_5444_41B5_E50D0B3EC181",
 "yaw": 138.89,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_584A1BBD_49A3_5444_41B5_E50D0B3EC181_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.99
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_590F34C0_4967_DC3C_41CA_3F52B4D57B2A",
 "yaw": 14.56,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_590F34C0_4967_DC3C_41CA_3F52B4D57B2A_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.88,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -9.37
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_58048251_49A3_34DC_413E_B03E9740EB48_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_58048251_49A3_34DC_413E_B03E9740EB48_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_58048251_49A3_34DC_413E_B03E9740EB48_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FF6EFD6_49AD_2BC5_41CD_931C70D58E79"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 58.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47B936B1_4A93_7729_41A6_3A7E05A5C705",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5850E0ED_49AF_35C4_41BB_9992DCAB0138_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_5850E0ED_49AF_35C4_41BB_9992DCAB0138_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5850E0ED_49AF_35C4_41BB_9992DCAB0138_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FF8EFE1_49AD_2BFF_41AB_B85C7471D76E"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_583DF9FD_4965_37C4_41B5_61E8B8BF9B4F_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_583DF9FD_4965_37C4_41B5_61E8B8BF9B4F_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_583DF9FD_4965_37C4_41B5_61E8B8BF9B4F_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FC0CFC7_49AD_2BC4_4197_ACC703E1FB76"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5BEA6BEE_49A7_2BC4_417A_95D6A8C6CC88_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_5BEA6BEE_49A7_2BC4_417A_95D6A8C6CC88_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_5BEA6BEE_49A7_2BC4_417A_95D6A8C6CC88_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_5FE7EFE6_49AD_2BC4_41CE_194157FA6BFD"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 121.28,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4713272E_4A93_753B_41CA_7A6C520D2AE3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.42,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47FBD70F_4A93_76F9_41A9_9CF89E2F63CF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_090746_00_033",
 "id": "panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365",
 "hfov": 360,
 "overlays": [
  "this.overlay_44F80E7D_495E_ECC4_41C1_3DBE44CA8639",
  "this.overlay_44F83E7D_495E_ECC4_41BD_51592241A32A",
  "this.overlay_5B40BD89_4963_6C4C_41AC_410B0ACB485F",
  "this.overlay_5BC192A6_4963_5444_41B0_B8B81B99815E",
  "this.overlay_5905971A_4963_3C4C_41C3_F45DFC53EB33",
  "this.popup_5B7DE96E_4963_54C4_41B9_85B43094141A",
  "this.popup_583F4C89_4962_EC4F_41B9_66823860239C",
  "this.popup_5B4DC9E2_4965_37FC_41D0_26804318B8C4"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -4.99,
   "class": "AdjacentPanorama",
   "yaw": 169.02,
   "panorama": "this.panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81",
   "distance": 1
  },
  {
   "backwardYaw": -175.61,
   "class": "AdjacentPanorama",
   "yaw": 134.1,
   "panorama": "this.panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_455CB5A8_4A93_7527_41C3_58F5A2327EDD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_5B0B9A4E_49A3_74C4_41C1_1025FDD1A28D",
 "yaw": 35.52,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5B0B9A4E_49A3_74C4_41C1_1025FDD1A28D_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "hfov": 7.98,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "pitch": -2.99
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_47EF971F_4A93_7519_41AB_91256C91E9D8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "label": "IMG_20230826_090524_00_028",
 "id": "panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_45E2A8B3_495F_345C_41C5_805508ACCBE9_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20230826_091659_00_046",
 "id": "panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C",
 "hfov": 360,
 "overlays": [
  "this.overlay_4643C6BC_495D_DC44_41B6_32ED48280C1E",
  "this.overlay_4643E6BC_495D_DC44_41D0_C0D8F1C565AC",
  "this.overlay_58AF85E4_49A7_3FC4_41CC_A0D9899B2C00",
  "this.overlay_580C2C2F_49A7_EC43_41B1_50BDEA71B359",
  "this.overlay_58520E01_49A7_EC3C_419F_4AD2720F2637",
  "this.overlay_5BE4A386_49A7_3444_41C2_CF915B976174",
  "this.overlay_5890662D_49A7_5C47_41D0_E1B7D9ED0942",
  "this.popup_5BEA6BEE_49A7_2BC4_417A_95D6A8C6CC88",
  "this.popup_5824F9B1_49A5_345C_41C9_A619F28B2AC3",
  "this.popup_5B95B886_49A5_3444_4178_1F40362BAB57",
  "this.popup_585E0B34_49A3_3445_41CC_00A10FA3C8C4",
  "this.popup_584A1BBD_49A3_5444_41B5_E50D0B3EC181"
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -82.22,
   "class": "AdjacentPanorama",
   "yaw": 34.32,
   "panorama": "this.panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5",
   "distance": 1
  },
  {
   "backwardYaw": 137.1,
   "class": "AdjacentPanorama",
   "yaw": 7.58,
   "panorama": "this.panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_454275B7_4A93_7529_41CC_34C4384D3BF9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingBottom": 0,
 "right": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "class": "UIComponent",
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "bottom": 0,
 "backgroundColorDirection": "vertical",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "UIComponent1741"
 },
 "shadow": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "right": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "class": "ZoomImage",
 "minWidth": 0,
 "backgroundColor": [],
 "bottom": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage1742"
 },
 "shadow": false,
 "scaleMode": "custom"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "data": {
  "name": "CloseButton1743"
 },
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "iconHeight": 20,
 "paddingBottom": 5,
 "iconWidth": 20,
 "shadowColor": "#000000",
 "right": 10,
 "borderRadius": 0,
 "paddingRight": 5,
 "layout": "horizontal",
 "paddingLeft": 5,
 "borderSize": 0,
 "iconColor": "#000000",
 "minHeight": 0,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "rollOverIconColor": "#666666",
 "class": "CloseButton",
 "verticalAlign": "middle",
 "pressedIconColor": "#888888",
 "minWidth": 0,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "fontStyle": "normal",
 "paddingTop": 5,
 "visible": false,
 "iconLineWidth": 5,
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4585AA94_495F_3444_41AD_174FAF41FDD8, this.camera_47C08A1F_4A93_7F19_41A9_8DF4CB81819B); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583A8B65_4962_D4C7_41C0_BC04C2B4D39C",
   "yaw": -3.19,
   "pitch": -16.18,
   "distance": 100,
   "hfov": 16.48
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.19,
   "hfov": 16.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.18
  }
 ],
 "id": "overlay_42BEA23F_495F_3444_41D0_C6C492931D35",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583ADB65_4962_D4C7_41A2_DDF2B62BB147",
   "yaw": 176.67,
   "pitch": -22.34,
   "distance": 100,
   "hfov": 15.05
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.67,
   "hfov": 15.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.34
  }
 ],
 "id": "overlay_42BE923F_495F_3444_4194_2693554E4348",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77, this.camera_47AF19E0_4A93_7D27_41B5_3422DD312F8E); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580D9B85_4962_D444_41BA_5BEE4964A7B9",
   "yaw": -139.49,
   "pitch": -25.74,
   "distance": 100,
   "hfov": 8.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.49,
   "hfov": 8.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.74
  }
 ],
 "id": "overlay_44A78677_495D_5CC3_41B6_130635D5AB8A",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_476FFE3F_495D_6C44_41D0_A06437D30868, this.camera_47A949F0_4A93_7D27_4170_53B46DE8C322); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580E3B85_4962_D444_41CC_21D417E13317",
   "yaw": 156.45,
   "pitch": -26.94,
   "distance": 100,
   "hfov": 8.9
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.45,
   "hfov": 8.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.94
  }
 ],
 "id": "overlay_44A79677_495D_5CC3_41CB_D37BC0779ED2",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_583DF9FD_4965_37C4_41B5_61E8B8BF9B4F, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FC0CFC7_49AD_2BC4_4197_ACC703E1FB76, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47311771_4A90_D529_4158_8F00487985E6",
   "yaw": -165.04,
   "pitch": -5.78,
   "distance": 100,
   "hfov": 7.95
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.04,
   "hfov": 7.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.78
  }
 ],
 "id": "overlay_580C2961_4967_54FC_41C1_0080F2A7B0D5",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5807DE90_4965_2C5D_41C2_4CE00953DAB6, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FC22FC8_49AD_2BCC_41CD_57A42C0500F8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4730D771_4A90_D529_41B2_4B67E3C936AB",
   "yaw": -89.81,
   "pitch": -2.79,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.81,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.79
  }
 ],
 "id": "overlay_58BE4031_4966_D45C_41A8_29591831F547",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_589802BE_4963_3444_41BC_2551ED96C322, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FCD1FC9_49AD_2BCC_41C2_CBDB93F90255, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47309771_4A90_D529_41B9_FD11D7526B0A",
   "yaw": 99.97,
   "pitch": -5.38,
   "distance": 100,
   "hfov": 7.96
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.97,
   "hfov": 7.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.38
  }
 ],
 "id": "overlay_5821CA79_4965_34CC_41A5_18B0245A7C63",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5800EB75_4962_D4C4_41D0_06EEF1B50C70",
   "yaw": 2.2,
   "pitch": -19.96,
   "distance": 100,
   "hfov": 9.38
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.2,
   "hfov": 9.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.96
  }
 ],
 "id": "overlay_447B67BC_495E_DC44_41B2_7E58F7DF223B",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_445B7FF9_495F_2BCC_41C2_702152C4788B, this.camera_47D586D1_4A93_7769_4194_95E5743618D4); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58013B75_4962_D4C4_41C3_794B00F06EF2",
   "yaw": 132.11,
   "pitch": -33.13,
   "distance": 100,
   "hfov": 8.36
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.11,
   "hfov": 8.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.13
  }
 ],
 "id": "overlay_447B77BC_495E_DC44_41C1_E1B917556172",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_59964E5F_496D_2CC4_41CB_15A8BC3956C3, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FD2BFB7_49AD_2C44_41C8_74D71CB2204B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4709A762_4A90_D52B_41BC_E039D2D49C23",
   "yaw": 64.05,
   "pitch": -2.99,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.05,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.99
  }
 ],
 "id": "overlay_59AAD840_4963_743C_41A6_7131C947D600",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45A87B7B_495F_74CC_41A0_15122F2041BA, this.camera_47F2CA3E_4A93_7F1B_41C1_30C7A3CAE49A); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58068B75_4962_D4C4_41B1_A74AA3BC7D84",
   "yaw": -94.39,
   "pitch": -32.93,
   "distance": 100,
   "hfov": 8.38
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.39,
   "hfov": 8.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.93
  }
 ],
 "id": "overlay_4454A338_495F_544C_41C9_E662FB188BD8",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_445B7FF9_495F_2BCC_41C2_702152C4788B, this.camera_47F85A4D_4A93_7F79_41C9_BCACA33630D7); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5806CB75_4962_D4C4_41A6_FBCA3581A028",
   "yaw": 179,
   "pitch": -20.75,
   "distance": 100,
   "hfov": 9.33
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179,
   "hfov": 9.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.75
  }
 ],
 "id": "overlay_44548338_495F_544C_41C4_0546F5F70673",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_46B3C136_4963_F445_41A1_820666863611, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_59EAF181_497D_543C_41AD_BBFAFE15B608, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47072752_4A90_D56B_41B6_88876ECA79A3",
   "yaw": 36.72,
   "pitch": 2.39,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.72,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.39
  }
 ],
 "id": "overlay_5943E4BF_4962_DC43_41D0_4F6852C45EF1",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_598B2D5B_497D_2CCC_41C6_0CDEAC6FD495, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_59FDF192_497D_545C_41C6_C79CBB18BD1D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4706D752_4A90_D56B_41C5_EEB5988E00AA",
   "yaw": 108.16,
   "pitch": -2.2,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.16,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.2
  }
 ],
 "id": "overlay_596397F1_4962_DBDC_41D0_011F21B333D8",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_59B55B8A_497D_D44D_41BB_C00003350233, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_59FC6192_497D_545C_41CB_CC1970DF193C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4706B752_4A90_D56B_41B1_027CAB3DCBFA",
   "yaw": -145.07,
   "pitch": 7.59,
   "distance": 100,
   "hfov": 7.92
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.07,
   "hfov": 7.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.59
  }
 ],
 "id": "overlay_59D959C9_4963_57CC_41D1_B9A4C90F1E96",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583AFB65_4962_D4C7_41CF_4914CCBC443B",
   "yaw": -2.78,
   "pitch": -13.37,
   "distance": 100,
   "hfov": 16.69
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.78,
   "hfov": 16.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.37
  }
 ],
 "id": "overlay_43A5E75A_495F_DCCC_41B1_475CCB4D5B70",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047, this.camera_479A2654_4A93_776F_41D1_580A25C040E4); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583B3B65_4962_D4C7_4175_2DA9991EE2C1",
   "yaw": 171.01,
   "pitch": -22.56,
   "distance": 100,
   "hfov": 15.85
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.01,
   "hfov": 15.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.56
  }
 ],
 "id": "overlay_43A5C75A_495F_DCCC_41A0_50B26ECD8B18",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C, this.camera_47817673_4A93_7729_41C8_FDDA100460D1); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5839FB65_4962_D4C7_41C4_3631FF9EAD8B",
   "yaw": -58.72,
   "pitch": -8.01,
   "distance": 50,
   "hfov": 16.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.72,
   "hfov": 16.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.01
  }
 ],
 "id": "overlay_43A5D75A_495F_DCCC_41BD_840E9DCE56D6",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80, this.camera_47870663_4A93_7729_41CA_B5695093DE01); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583A1B65_4962_D4C7_41C3_B4389F53FB04",
   "yaw": 49.86,
   "pitch": -8.7,
   "distance": 50,
   "hfov": 16.96
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.86,
   "hfov": 16.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.7
  }
 ],
 "id": "overlay_43A5275A_495F_DCCC_41B1_91EA1A3F294D",
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43A5875A_495F_DCCC_4191_2A12F201259B, this.camera_4713272E_4A93_753B_41CA_7A6C520D2AE3); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58034B85_4962_D444_41B1_1D997D339CA8",
   "yaw": 174.21,
   "pitch": -20.35,
   "distance": 100,
   "hfov": 9.35
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.21,
   "hfov": 9.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.35
  }
 ],
 "id": "overlay_471BFE12_495D_2C5C_41B5_551792D0034F",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47750657_495D_3CC4_41B3_E128F36C1348, this.camera_47EF971F_4A93_7519_41AB_91256C91E9D8); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58038B85_4962_D444_41C5_882EED992B64",
   "yaw": -6.19,
   "pitch": -28.94,
   "distance": 100,
   "hfov": 8.73
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.19,
   "hfov": 8.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.94
  }
 ],
 "id": "overlay_471BDE12_495D_2C5C_41B0_61653173D46C",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_473AA607_495D_7C44_41A6_E67D8FE36C39, this.camera_472A076D_4A93_7539_41C5_46EE058FF364); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58097B94_4962_D445_41C3_2158177FD80B",
   "yaw": -3.99,
   "pitch": -15.96,
   "distance": 100,
   "hfov": 9.59
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.99,
   "hfov": 9.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.96
  }
 ],
 "id": "overlay_47C5D575_495D_5CC4_41C9_30D2D0126F1E",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0, this.camera_4751E77C_4A93_751F_41C1_63C953C23546); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5809CB94_4962_D445_41C5_E7E82DD243E1",
   "yaw": 176.41,
   "pitch": -18.36,
   "distance": 100,
   "hfov": 9.47
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.41,
   "hfov": 9.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.36
  }
 ],
 "id": "overlay_47C5A575_495D_5CC4_41BF_94EE3A7D39CD",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_580B94A4_49A3_3C44_41C3_23A8A305361E, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FF79FD5_49AD_2BC7_41D0_5057F8CA28BD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4739D771_4A90_D529_417A_A202F93014EC",
   "yaw": -114.55,
   "pitch": -0.59,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.55,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.59
  }
 ],
 "id": "overlay_589E71D3_49A7_F7DC_41D2_0C55B70F52E9",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_58048251_49A3_34DC_413E_B03E9740EB48, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FF6EFD6_49AD_2BC5_41CD_931C70D58E79, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47399771_4A90_D529_41CC_029AABB4D865",
   "yaw": -73.24,
   "pitch": -0.19,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.24,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.19
  }
 ],
 "id": "overlay_58FA16E1_49A7_DDFC_41D1_1D843B55C7B4",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_58BD80DC_49A3_55C4_41D0_687A218C783D, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FF03FD7_49AD_2BC3_41CD_09E4E2D7A836, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47395771_4A90_D529_41CF_A7439BB479F9",
   "yaw": 46.29,
   "pitch": -1.99,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.29,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.99
  }
 ],
 "id": "overlay_58660B6D_49A7_34C4_41AE_7B262C9A9F4F",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_585EB4A6_49A5_DC44_419F_85B7BA1E45AA, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FF31FD9_49AD_2BCC_41B6_E950C2FCB572, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47392771_4A90_D529_41D1_D1FD6CCD2E19",
   "yaw": 111.55,
   "pitch": -2.99,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.55,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.99
  }
 ],
 "id": "overlay_5895FE41_49A7_6C3C_41D1_29D9CB56D663",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C, this.camera_47FBD70F_4A93_76F9_41A9_9CF89E2F63CF); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580ADBA4_4962_D444_41CC_C9386F0D412A",
   "yaw": 137.1,
   "pitch": -28.54,
   "distance": 100,
   "hfov": 8.77
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.1,
   "hfov": 8.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.54
  }
 ],
 "id": "overlay_47A2BE0C_495D_2C44_41A4_70F1CD5C5F36",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580B4BA4_4962_D444_41C7_7C2FC1864E22",
   "yaw": -25.14,
   "pitch": -18.96,
   "distance": 50,
   "hfov": 9.44
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.14,
   "hfov": 9.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.96
  }
 ],
 "id": "overlay_47A29E0C_495D_2C44_41A9_4E9B78CEED67",
 "data": {
  "label": "Arrow 02a Right"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6, this.camera_47F566FF_4A93_7719_41D0_659BB35298CD); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580BCBA4_4962_D444_41D1_216D8766155D",
   "yaw": -49.09,
   "pitch": -20.55,
   "distance": 100,
   "hfov": 9.34
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.09,
   "hfov": 9.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.55
  }
 ],
 "id": "overlay_47A28E0C_495D_2C44_41C2_BA63F268B6FE",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5BCCF519_49A5_7C4C_41C8_20C09D88EA67, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FE5DFE4_49AD_2BC4_41CC_898BEE276538, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47238781_4A90_D5E9_41CE_F898B722ABD9",
   "yaw": -170.43,
   "pitch": -2.39,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.43,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.39
  }
 ],
 "id": "overlay_58C2DB2E_49A2_F444_41C1_E9D8078B6F06",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45A87B7B_495F_74CC_41A0_15122F2041BA, this.camera_477C17AB_4A93_7539_41D1_44A4DBB3B5CC); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58053B75_4962_D4C4_41D1_60533A34BEE4",
   "yaw": 3.19,
   "pitch": -13.37,
   "distance": 100,
   "hfov": 9.71
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.19,
   "hfov": 9.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.37
  }
 ],
 "id": "overlay_45A7D372_495F_74DC_41AA_DF6CEECA93E4",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4585AA94_495F_3444_41AD_174FAF41FDD8, this.camera_476247BB_4A93_7519_41C7_C5519F72EA2D); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5805AB75_4962_D4C4_41B1_7C8CECE2E081",
   "yaw": 171.62,
   "pitch": -22.35,
   "distance": 100,
   "hfov": 9.23
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.62,
   "hfov": 9.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.35
  }
 ],
 "id": "overlay_45A7C372_495F_74DC_41B5_4CE5C8E0F6C6",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_586A9E52_49BD_2CDC_41CB_245DB7DEF7C4",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Komik dengan panel timbul yang menggambarkan peristiwa-peristiwa penting dalam sejarah Indonesia, termasuk peristiwa seperti Pertempuran Surabaya, Proklamasi Kemerdekaan Indonesia, dan lainnya.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Relief-relief ini diciptakan dengan tujuan untuk memberikan pemahaman lebih dalam tentang sejarah perjuangan rakyat Indonesia kepada pengunjung yang datang ke Benteng Vredeburg. Selain relief-relief tersebut, benteng ini juga memiliki berbagai artefak dan benda-benda bersejarah yang berhubungan dengan perjuangan kemerdekaan Indonesia.</SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText37314"
 },
 "shadow": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43A5875A_495F_DCCC_4191_2A12F201259B, this.camera_444528F5_4A93_7B29_41D0_25E8A82D029E); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583A3B65_4962_D4C7_41CB_F09747170213",
   "yaw": -8.75,
   "pitch": -10.35,
   "distance": 100,
   "hfov": 16.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.75,
   "hfov": 16.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.35
  }
 ],
 "id": "overlay_438F0EED_495F_EDC4_41C7_A524D915B814",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86, this.camera_445238F5_4A93_7B29_41D0_79A56FDDF0CC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583A4B65_4962_D4C7_41A9_986C1F867265",
   "yaw": 167.47,
   "pitch": -16.35,
   "distance": 100,
   "hfov": 16.14
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.47,
   "hfov": 16.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.35
  }
 ],
 "id": "overlay_438F2EED_495F_EDC4_41A0_901717757DA5",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77, this.camera_47D886E0_4A93_7727_41C6_47BF6586E77B); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580C3B85_4962_D444_41A3_99C51B566F97",
   "yaw": -15.96,
   "pitch": -40.11,
   "distance": 100,
   "hfov": 7.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.96,
   "hfov": 7.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.11
  }
 ],
 "id": "overlay_47757657_495D_3CC4_41CF_41877195B95D",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C, this.camera_47CE06F0_4A93_7727_41AF_B02EF3266B49); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580C5B85_4962_D444_41C8_0F64BF1DBF62",
   "yaw": 169.02,
   "pitch": -26.74,
   "distance": 100,
   "hfov": 8.91
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.02,
   "hfov": 8.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.74
  }
 ],
 "id": "overlay_47756657_495D_3CC4_41A0_04AEC3F961FF",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_59A915B9_4965_FC4F_41D0_DEAF2A6214E3, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FD58FB1_49AD_2C5C_41C2_A15CC3C40533, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47048762_4A90_D52B_41D0_F37DDDFC2E4B",
   "yaw": -71.05,
   "pitch": -3.19,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.05,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.19
  }
 ],
 "id": "overlay_590B34EE_4962_FDC4_41BE_AF25528C383A",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_585BBF78_4965_2CCD_41C5_DB99FF962FB1, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FD4EFB2_49AD_2C5C_41A0_CE9743C6ACC1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4704B762_4A90_D52B_41D1_86325E11F620",
   "yaw": 65.05,
   "pitch": 8.59,
   "distance": 100,
   "hfov": 7.9
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.05,
   "hfov": 7.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.59
  }
 ],
 "id": "overlay_586577A1_4965_7C7C_41BE_22AE04DA7F57",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_44A7F677_495D_5CC3_41D0_4A46158791BD, this.camera_449D97EA_4A93_753B_41CD_5C448D3EF904); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580E5B85_4962_D444_41D1_54C879A12215",
   "yaw": -139.09,
   "pitch": -29.73,
   "distance": 50,
   "hfov": 8.66
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.09,
   "hfov": 8.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.73
  }
 ],
 "id": "overlay_476F8E3F_495D_6C44_41C3_53E275D7F2C7",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_473AA607_495D_7C44_41A6_E67D8FE36C39, this.camera_449607CB_4A93_7579_41CE_7CFCA3673B64); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580ECB85_4962_D444_41BC_38AB020F44DF",
   "yaw": 3.79,
   "pitch": -28.74,
   "distance": 100,
   "hfov": 8.75
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.79,
   "hfov": 8.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.74
  }
 ],
 "id": "overlay_476F9E3F_495D_6C44_41A6_3E2653B017EC",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_59ED0C43_495D_EC3C_41C4_E6CE7D6672B7, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FCCEFCB_49AD_2BCC_41CF_BE44E5FD7032, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47370771_4A90_D529_41C4_C0274C9C9BEA",
   "yaw": 140.08,
   "pitch": -2.79,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.08,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.79
  }
 ],
 "id": "overlay_5B139470_4962_FCDC_41CD_F86D38662353",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_581788C9_495D_75CC_41C2_8BBA8A719C32, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FCE2FCC_49AD_2BC4_41B0_AF5051C5F668, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4736D771_4A90_D529_41BE_E82986BE491A",
   "yaw": 78.62,
   "pitch": -1.79,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.62,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.79
  }
 ],
 "id": "overlay_5A7E69E2_4962_D7FC_41CC_B18F963F71BA",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_58E0404F_495E_D4C4_41D0_F63181F96981, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FCFDFCD_49AD_2BC4_41C5_517B222AD73A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4736A771_4A90_D529_41BF_C4D8B1EA8CFE",
   "yaw": 35.52,
   "pitch": -2.19,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.52,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.19
  }
 ],
 "id": "overlay_59928CAF_495D_2C44_41CE_68593D6A54C6",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047, this.camera_4520D587_4A93_75E9_41B6_29A1B4861335); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58395B65_4962_D4C7_41CE_D170AC6E2891",
   "yaw": 18.84,
   "pitch": -9.52,
   "distance": 100,
   "hfov": 16.92
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.84,
   "hfov": 16.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.52
  }
 ],
 "id": "overlay_43EA3663_495F_FCFC_41AF_43B5D8487D24",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F, this.camera_4529C597_4A93_75E9_41C2_F1F6B029D3CB); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5839EB65_4962_D4C7_41D2_5870918E8B22",
   "yaw": -162.91,
   "pitch": -11.65,
   "distance": 100,
   "hfov": 16.81
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.91,
   "hfov": 16.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.65
  }
 ],
 "id": "overlay_43EA5663_495F_FCFC_41BB_29E15A178B7A",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365, this.camera_47EFEA5D_4A93_7F19_41CA_018CEA81A7BB); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58028B85_4962_D444_41B0_97F72A798F4B",
   "yaw": -175.61,
   "pitch": -50.09,
   "distance": 50,
   "hfov": 6.4
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.61,
   "hfov": 6.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -50.09
  }
 ],
 "id": "overlay_44C20659_495E_DCCC_41B3_0831AFF53B08",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43A5875A_495F_DCCC_4191_2A12F201259B, this.camera_47122A6D_4A93_7F39_41C4_120D4719B921); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58030B85_4962_D444_41A0_B6DA38C3D82A",
   "yaw": -11.57,
   "pitch": -25.54,
   "distance": 100,
   "hfov": 9
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.57,
   "hfov": 9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.54
  }
 ],
 "id": "overlay_44C21659_495E_DCCC_41AB_ABACEC2D86B8",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F, this.camera_47D3D9FF_4A93_7D19_41AE_2D30956A7D3C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583E7B65_4962_D4C7_41BF_23FFCE2F1C9C",
   "yaw": 107.59,
   "pitch": -14.4,
   "distance": 100,
   "hfov": 16.62
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.59,
   "hfov": 16.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.4
  }
 ],
 "id": "overlay_43FC9E8D_495F_2C44_41CE_D8402FF8DCCA",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81, this.camera_47BEE9B1_4A93_7D29_41C4_20F64940C713); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58015B75_4962_D4C4_41C9_F07BA238110D",
   "yaw": 68.85,
   "pitch": -32.33,
   "distance": 100,
   "hfov": 8.43
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.85,
   "hfov": 8.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.33
  }
 ],
 "id": "overlay_44DC6F36_495E_EC44_41D0_5391599A7255",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_44015B5B_495F_54CC_41D0_96161C648977, this.camera_47BBB9C1_4A93_7D69_41C2_199C65FF5288); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58004B75_4962_D4C4_41C0_5F244FEE7F74",
   "yaw": 179,
   "pitch": -26.34,
   "distance": 100,
   "hfov": 8.94
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179,
   "hfov": 8.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.34
  }
 ],
 "id": "overlay_44DC8F36_495E_EC44_41A9_FE6BAC44EBE2",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_58401FAA_496F_2C4C_41CA_A3DE3FB5D94E, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FDC1FB9_49AD_2C4C_41C3_34A0E67BC591, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47081762_4A90_D52B_41C5_D184AA21B786",
   "yaw": -147.28,
   "pitch": 5.99,
   "distance": 100,
   "hfov": 7.95
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.28,
   "hfov": 7.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.99
  }
 ],
 "id": "overlay_5811B862_496D_D4FD_4160_F74F3D7FFFA3",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_58B35EC2_496D_2C3C_41D1_007E11410538, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FDF7FBA_49AD_2C4C_41CD_2FE40DCD2B0D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_470FC762_4A90_D52B_41A2_E53321333DA9",
   "yaw": 132.5,
   "pitch": -1.39,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.5,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.39
  }
 ],
 "id": "overlay_587F24EE_496D_7DC4_41C4_0DD7AA8686A7",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F, this.camera_44C9C878_4A93_7B27_41B6_61EF9AF4DD4F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583EDB65_4962_D4C7_41B0_4B685FB36CA5",
   "yaw": 17.47,
   "pitch": -22.22,
   "distance": 100,
   "hfov": 15.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.47,
   "hfov": 15.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.22
  }
 ],
 "id": "overlay_441EFF90_4957_3F96_41CB_030056CB58E5",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45CCAB04_4957_207E_417C_9C95C01D94D5, this.camera_44C68868_4A93_7B27_41BB_C1712BF930BE); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583F1B65_4962_D4C7_4186_BE841F8D0A89",
   "yaw": -163.39,
   "pitch": -16.46,
   "distance": 100,
   "hfov": 16.46
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.39,
   "hfov": 16.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.46
  }
 ],
 "id": "overlay_44190F90_4957_3F96_419C_1A8707214ABD",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_42A65B6C_495F_54C5_41B0_5284F77303C3, this.camera_457CD5D7_4A93_7569_41D2_2AD2671DEB9F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58043B75_4962_D4C4_41BA_60D950FB9FD8",
   "yaw": 0.93,
   "pitch": -10.55,
   "distance": 100,
   "hfov": 16.87
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.93,
   "hfov": 16.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.55
  }
 ],
 "id": "overlay_45237322_495F_547C_41C2_7DC607525985",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4585AA94_495F_3444_41AD_174FAF41FDD8, this.camera_4549D5C7_4A93_7569_41CE_B9BA4EAC3C56); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58045B75_4962_D4C4_41D1_AF516406AE74",
   "yaw": 179.59,
   "pitch": -21.88,
   "distance": 100,
   "hfov": 15.92
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.59,
   "hfov": 15.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.88
  }
 ],
 "id": "overlay_45230322_495F_547C_41C5_3DBE05328EBF",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_44A7F677_495D_5CC3_41D0_4A46158791BD, this.camera_470DD73E_4A93_751B_41AE_EFAF643F9BFD); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580CDB85_4962_D444_41BC_1968706DF0DB",
   "yaw": -5.99,
   "pitch": -33.33,
   "distance": 100,
   "hfov": 8.34
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.99,
   "hfov": 8.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.33
  }
 ],
 "id": "overlay_44A31E31_495D_2C5C_41CE_5C9F33D4F742",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47750657_495D_3CC4_41B3_E128F36C1348, this.camera_4719B73E_4A93_751B_41B4_445BC1451415); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580D4B85_4962_D444_41C6_96337ABF7CD9",
   "yaw": 101.37,
   "pitch": -36.92,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.37,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.92
  }
 ],
 "id": "overlay_44A30E31_495D_2C5C_41C6_047505733829",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_590F34C0_4967_DC3C_41CA_3F52B4D57B2A, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FC16FC5_49AD_2BC4_41B3_9454ED59C045, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47321762_4A90_D52B_41C2_3AC57F0C5FDB",
   "yaw": 14.56,
   "pitch": -9.37,
   "distance": 100,
   "hfov": 7.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.56,
   "hfov": 7.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.37
  }
 ],
 "id": "overlay_5850EB9F_4967_3444_41C2_55A20B91E2D2",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_473AA607_495D_7C44_41A6_E67D8FE36C39, this.camera_47CB1A2E_4A93_7F3B_41B0_6AF7C3C8AD5F); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5808BB94_4962_D445_41B0_8038DE939417",
   "yaw": -148.47,
   "pitch": -18.16,
   "distance": 50,
   "hfov": 9.48
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.47,
   "hfov": 9.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.16
  }
 ],
 "id": "overlay_47851DC1_495D_6C3F_41CC_B81661C005E5",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58092B94_4962_D445_41B7_BD87734EC764",
   "yaw": -174.61,
   "pitch": -30.33,
   "distance": 50,
   "hfov": 8.61
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.61,
   "hfov": 8.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.33
  }
 ],
 "id": "overlay_47850DC1_495D_6C3F_41D0_EB0B3ECD6A96",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_58FDF94A_49A5_34CC_41C6_8CCC60783688, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FF43FD3_49AD_2BC3_41CE_33335F361F0A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_473B3771_4A90_D529_41D0_96A10FC32891",
   "yaw": -21.96,
   "pitch": -2.19,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.96,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.19
  }
 ],
 "id": "overlay_59198B00_49A3_543D_41A9_BB51738559DC",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_476FFE3F_495D_6C44_41D0_A06437D30868, this.camera_47901644_4A93_776F_41D2_087989CDD745); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580F6B94_4962_D445_41CC_4479C419E161",
   "yaw": 179.6,
   "pitch": -21.75,
   "distance": 100,
   "hfov": 9.27
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.6,
   "hfov": 9.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.75
  }
 ],
 "id": "overlay_47394607_495D_7C44_41BC_FB5B1707A8DF",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D, this.camera_4669C634_4A93_772F_419B_AB22D9CC96C4); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580F8B94_4962_D445_41CB_6DEB59941606",
   "yaw": -4.79,
   "pitch": -19.16,
   "distance": 100,
   "hfov": 9.43
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.79,
   "hfov": 9.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.16
  }
 ],
 "id": "overlay_47397607_495D_7C44_41A8_59EBE6D0D1D0",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050, this.camera_456295E6_4A93_752B_41AA_344E7046856D); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58083B94_4962_D445_41C0_D80E1D5CE9E3",
   "yaw": -84.21,
   "pitch": -19.96,
   "distance": 100,
   "hfov": 9.38
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.21,
   "hfov": 9.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.96
  }
 ],
 "id": "overlay_47396607_495D_7C44_41CD_C8083E60DDF3",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_58BCBD0D_495E_EC44_41BA_FB5FA3F0598C, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FC83FCF_49AD_2BC3_41BB_90381A12A60F, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4734D771_4A90_D529_41B0_EC564EB56749",
   "yaw": 131.1,
   "pitch": -1.19,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.1,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.19
  }
 ],
 "id": "overlay_5867D9AC_495F_F445_4193_DD677E868821",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_581E45A9_495D_5C4C_41C9_2068622456B1, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FCB0FD0_49AD_2BDD_41D0_5267C4548CFB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47349771_4A90_D529_41C6_013B2EAAA68F",
   "yaw": 80.22,
   "pitch": -2.39,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.22,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.39
  }
 ],
 "id": "overlay_58EF86B5_495F_3C44_41BD_12423F538688",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5B0B9A4E_49A3_74C4_41C1_1025FDD1A28D, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FCA5FD2_49AD_2BDD_41CB_03EA161D37E0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47344771_4A90_D529_41C4_7484583A1403",
   "yaw": 35.52,
   "pitch": -2.99,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.52,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.99
  }
 ],
 "id": "overlay_5B5BCCAA_495F_6C4D_41C2_4C412D747EAD",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6, this.camera_443178D5_4A93_7B69_41C4_0253BB89C6FA); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58150BA4_4962_D444_4194_A6587385D82D",
   "yaw": -53.08,
   "pitch": -45.1,
   "distance": 100,
   "hfov": 7.04
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.08,
   "hfov": 7.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.1
  }
 ],
 "id": "overlay_4678AECF_495D_EDC4_41B4_61DCF93DD9FE",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5, this.camera_4422E8E5_4A93_7B29_41AF_3868151B30F8); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5815BBA4_4962_D444_41B9_6A96CB545810",
   "yaw": -158.25,
   "pitch": -17.76,
   "distance": 50,
   "hfov": 9.5
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.25,
   "hfov": 9.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.76
  }
 ],
 "id": "overlay_4678BECF_495D_EDC4_41BD_B54DE9EEEFD2",
 "data": {
  "label": "Arrow 02a Left"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45CCAB04_4957_207E_417C_9C95C01D94D5, this.camera_448F87F9_4A93_7519_41B3_CFF4F3296E11); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583E8B65_4962_D4C7_41CE_80FB10C283BF",
   "yaw": -121.32,
   "pitch": -14.26,
   "distance": 100,
   "hfov": 16.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.32,
   "hfov": 16.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.26
  }
 ],
 "id": "overlay_440FA3B8_4957_2796_41CD_EF28D8A86EF8",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58077B75_4962_D4C4_41B5_5D0AD3EACFA0",
   "yaw": -24.75,
   "pitch": -25.14,
   "distance": 50,
   "hfov": 9.03
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.75,
   "hfov": 9.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.14
  }
 ],
 "id": "overlay_44012B5B_495F_54CC_41C2_2F46D09383EE",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC, this.camera_459A7933_4A93_7D29_41BB_13A95C9282E6); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58078B75_4962_D4C4_4190_87AF1E6A043F",
   "yaw": -159.45,
   "pitch": -23.55,
   "distance": 100,
   "hfov": 9.15
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.45,
   "hfov": 9.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.55
  }
 ],
 "id": "overlay_44010B5B_495F_54CC_4186_7F5BFDBBB6D4",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_58AECAC7_497D_35C3_41C9_27FC4029F85D, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FAAAFAF_49AD_2C44_41B3_55BFD30EBDCE, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47051762_4A90_D52B_41D0_B9ACDC4D57EC",
   "yaw": -87.8,
   "pitch": -1.59,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.8,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.59
  }
 ],
 "id": "overlay_58FB4DCB_497F_6FCC_41BC_C6FF6E298721",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4454C338_495F_544C_41C8_2683B348C9DD, this.camera_47884991_4A93_7DE9_41C8_CF0043A0ABB1); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5807DB75_4962_D4C4_41A3_F212E6C19BE3",
   "yaw": -179.6,
   "pitch": -18.36,
   "distance": 100,
   "hfov": 9.47
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.6,
   "hfov": 9.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.36
  }
 ],
 "id": "overlay_445B6FF9_495F_2BCC_41D2_2BB2FC2EF3E3",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_447B57BC_495E_DC44_41CC_DA09343F4864, this.camera_47B4B9A2_4A93_7D2B_41D0_BB91997A3D4F); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58004B75_4962_D4C4_41D2_3CFE286A426C",
   "yaw": -62.26,
   "pitch": -28.94,
   "distance": 100,
   "hfov": 8.73
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.26,
   "hfov": 8.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.94
  }
 ],
 "id": "overlay_445B5FF9_495F_2BCC_41C3_8A5518EDE418",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_59D720D4_4962_D5C5_41D0_8EB4B2ACD623, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FD6AFB4_49AD_2C44_4183_FE54934C33F6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_470B6762_4A90_D52B_41C1_7284E034B081",
   "yaw": -124.33,
   "pitch": -2.39,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -124.33,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.39
  }
 ],
 "id": "overlay_598269C1_4966_D43C_41D1_98F9B8F1F9B3",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_58F89F77_4963_6CC4_41BB_9816BF540F32, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FD18FB5_49AD_2C44_41D1_0853027E10FE, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_470B1762_4A90_D52B_41C9_F059174BDC70",
   "yaw": -0.4,
   "pitch": 10.78,
   "distance": 100,
   "hfov": 7.85
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.4,
   "hfov": 7.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.78
  }
 ],
 "id": "overlay_582DA42F_4966_DC44_41C9_68BE4F3023B8",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_580496CD_4963_DDC4_41AD_FCACA6EF9893, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FD0DFB6_49AD_2C44_41B3_7BBC0382537E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_470AF762_4A90_D52B_41C0_C8632901382C",
   "yaw": 128.71,
   "pitch": 6.79,
   "distance": 100,
   "hfov": 7.94
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.71,
   "hfov": 7.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.79
  }
 ],
 "id": "overlay_58B1CC08_4965_2C4C_41CC_B8461316EBCC",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A, this.camera_44798914_4A93_7AEF_41C6_48D15763B70C); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58099B94_4962_D445_41B0_6D409364CCC8",
   "yaw": 140.49,
   "pitch": -37.72,
   "distance": 50,
   "hfov": 7.89
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.49,
   "hfov": 7.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.72
  }
 ],
 "id": "overlay_4675B64D_495D_3CC4_41D0_5EA2C4657B39",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0, this.camera_44766904_4A93_7AEF_41D2_7E5A9F1647F9); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580A2B94_4962_D445_41AB_DBB3F0369019",
   "yaw": -13.97,
   "pitch": -22.35,
   "distance": 100,
   "hfov": 9.23
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.97,
   "hfov": 9.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.35
  }
 ],
 "id": "overlay_4675A64D_495D_3CC4_41B4_20BDEFE4C2F4",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD, this.camera_446B2923_4A93_7D29_41CF_6714ED9BE2D6); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_580AAB94_4962_D445_41A1_EC87488D84CC",
   "yaw": 102.97,
   "pitch": -31.93,
   "distance": 100,
   "hfov": 8.47
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.97,
   "hfov": 8.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.93
  }
 ],
 "id": "overlay_4675964D_495D_3CC4_41D2_50C8B9C9FE96",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45235322_495F_547C_41C8_D48D76FAE9CA, this.camera_47A239D0_4A93_7D67_41C9_E2EC1DAABE45); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5804FB75_4962_D4C4_41AD_48D7AAB6CB7A",
   "yaw": 178.18,
   "pitch": -21.15,
   "distance": 100,
   "hfov": 13.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.18,
   "hfov": 13.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.15
  }
 ],
 "id": "overlay_42A66B6C_495F_54C5_41A8_160791AAA281",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583FAB65_4962_D4C7_41AC_327290B4117F",
   "yaw": -85.62,
   "pitch": -9.87,
   "distance": 100,
   "hfov": 16.91
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.62,
   "hfov": 16.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.87
  }
 ],
 "id": "overlay_45CCCB04_4957_207E_41C2_390FB762CBA1",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1, this.camera_47B936B1_4A93_7729_41A6_3A7E05A5C705); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583FFB65_4962_D4C7_41D0_C27DF29E54A1",
   "yaw": -1.13,
   "pitch": -16.39,
   "distance": 100,
   "hfov": 16.46
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.13,
   "hfov": 16.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.39
  }
 ],
 "id": "overlay_45CCFB04_4957_207E_41C4_16EF13B37646",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_441EDF90_4957_3F96_41D0_2DEEA625F274, this.camera_47B1B6A2_4A93_772B_41C4_F1D1FCE16210); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58383B65_4962_D4C7_4199_BFF41C8C680F",
   "yaw": 82.4,
   "pitch": -16.32,
   "distance": 100,
   "hfov": 16.47
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.4,
   "hfov": 16.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.32
  }
 ],
 "id": "overlay_45CCEB04_4957_207E_41D1_630A9FCFE1F6",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F, this.camera_47AC36C1_4A93_7769_416A_A284A2B80058); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583C4B56_4962_D4C4_41D1_759F93192F62",
   "yaw": -15,
   "pitch": -10.62,
   "distance": 100,
   "hfov": 16.87
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15,
   "hfov": 16.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.62
  }
 ],
 "id": "overlay_4567A3B5_4956_E79E_41B7_4ECD82F283FF",
 "data": {
  "label": "Arrow 02c"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583DFB65_4962_D4C7_41CA_58A040CC7739",
   "yaw": 8.06,
   "pitch": -6.57,
   "distance": 50,
   "hfov": 17.05
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.06,
   "hfov": 17.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.57
  }
 ],
 "id": "overlay_456793B5_4956_E79E_41B9_71B1044B3E70",
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583E2B65_4962_D4C7_41C4_BAEE38B94D31",
   "yaw": -46.5,
   "pitch": -4.1,
   "distance": 50,
   "hfov": 17.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.5,
   "hfov": 17.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.1
  }
 ],
 "id": "overlay_456773B5_4956_E79E_41C7_70AB8F917519",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD, this.camera_47C76A1F_4A93_7F19_41B5_8815D762D02B); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58163BA4_4962_D444_41AF_8F136F9FE3C7",
   "yaw": -21.15,
   "pitch": -41.31,
   "distance": 50,
   "hfov": 7.5
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.15,
   "hfov": 7.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.31
  }
 ],
 "id": "overlay_461A46DB_495D_FDCC_41B7_AB8347D1F778",
 "data": {
  "label": "Arrow 02a Right-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C, this.camera_47DCFA0F_4A93_7EF9_41CF_66F84EAD66E5); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5816BBA4_4962_D444_41BC_2DBE493A6966",
   "yaw": -82.22,
   "pitch": -39.51,
   "distance": 50,
   "hfov": 7.7
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.22,
   "hfov": 7.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.51
  }
 ],
 "id": "overlay_461A76DB_495D_FDCC_41C9_2772365954F7",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_586CCE52_49BD_2CDC_41D2_36609A3BAEA8, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4726E781_4A90_D5E9_41C2_1E805AACA4CA",
   "yaw": 128.91,
   "pitch": 2.8,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.91,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.8
  }
 ],
 "id": "overlay_5BBA5189_49BD_544C_41C3_656248DFEC2C",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6, this.camera_455CB5A8_4A93_7527_41C3_58F5A2327EDD); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5808EB94_4962_D445_41C6_63C0DF58E39E",
   "yaw": 178.4,
   "pitch": -27.94,
   "distance": 100,
   "hfov": 8.81
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.4,
   "hfov": 8.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.94
  }
 ],
 "id": "overlay_479CDEA4_495D_2C44_41C9_F10B7DCB66EC",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D, this.camera_454275B7_4A93_7529_41CC_34C4384D3BF9); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58091B94_4962_D445_41C3_EE5D28B454F1",
   "yaw": -0.8,
   "pitch": -16.16,
   "distance": 100,
   "hfov": 9.58
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.8,
   "hfov": 9.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.16
  }
 ],
 "id": "overlay_479CAEA4_495D_2C44_41A4_EB8437FDCB0F",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5835518A_49AF_D44C_41B3_177FD497C4B3, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FF2EFDB_49AD_2BCC_41D1_50529B7C769A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_473FA771_4A90_D529_41B6_540C833BA624",
   "yaw": -159.65,
   "pitch": 4,
   "distance": 100,
   "hfov": 7.97
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.65,
   "hfov": 7.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4
  }
 ],
 "id": "overlay_58BFB004_49AD_3445_41AD_37EF7433FB88",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_587556E1_49AF_5DFC_41D1_61274D872A5A, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FF2DFDC_49AD_2BC4_41B9_941E107707F3, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_473F2771_4A90_D529_41BE_B8D9177091D3",
   "yaw": -126.52,
   "pitch": -0.79,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -126.52,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.79
  }
 ],
 "id": "overlay_586D8E0D_49AD_6C44_41B0_68D8E2073E04",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5BC29A7E_49AD_34C4_41BB_6509747E3E92, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FFC3FDD_49AD_2BC4_41B0_136DAF39BC1C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_473EE771_4A90_D529_41B5_CB3B289AB03E",
   "yaw": -89.41,
   "pitch": -0.79,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.41,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.79
  }
 ],
 "id": "overlay_5BDF2F33_49AD_2C5C_41C4_12A860D0F3DA",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_586428C8_49AD_D5CC_41C2_08C9620680EC, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FFF1FDE_49AD_2BC5_41C0_446FF6322907, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_473E6771_4A90_D529_419F_044848609B7B",
   "yaw": -41.31,
   "pitch": 2.2,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.31,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.2
  }
 ],
 "id": "overlay_5B646E6A_49AD_2CCD_41CC_DBF4169D3422",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_585EFD48_49AD_2CCC_41BE_26B082E3520B, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FFE8FDF_49AD_2BC3_41B2_57C60EAAEA5E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_473E1771_4A90_D529_41C9_696CB07A1325",
   "yaw": 67.25,
   "pitch": -2.79,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.25,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.79
  }
 ],
 "id": "overlay_58B95F46_49AD_ECC4_41B5_400D9E0900FB",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_588917F0_49A3_5BDC_41C6_99A974D10455, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FF98FE0_49AD_2BFD_41A1_43629614D49E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_473DD771_4A90_D529_41D2_1C1B68F4C58B",
   "yaw": 132.7,
   "pitch": -1.79,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.7,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.79
  }
 ],
 "id": "overlay_58105241_49AD_D43C_41C5_3A961B4F99A5",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5850E0ED_49AF_35C4_41BB_9992DCAB0138, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FF8EFE1_49AD_2BFF_41AB_B85C7471D76E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_473D4771_4A90_D529_41BC_CBE824C791D6",
   "yaw": -177.81,
   "pitch": -2.79,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.81,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.79
  }
 ],
 "id": "overlay_58FF830F_49AD_5443_41D0_AA7E0ED7E253",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86, this.camera_44F8B897_4A93_7BE9_41A8_309452E30117); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58387B65_4962_D4C7_417E_EB0E06C80DB7",
   "yaw": -33.6,
   "pitch": -10.83,
   "distance": 100,
   "hfov": 16.85
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.6,
   "hfov": 16.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.83
  }
 ],
 "id": "overlay_45EC8EBA_4957_618A_417F_EC0FD7BC15B3",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4567B3B5_4956_E79E_41D1_5886928D41E4, this.camera_440E68C6_4A93_7B6B_4184_F71F24BA7FFE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58388B65_4962_D4C7_41D0_97977D7F87D3",
   "yaw": 147.33,
   "pitch": -12.41,
   "distance": 100,
   "hfov": 16.76
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.33,
   "hfov": 16.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.41
  }
 ],
 "id": "overlay_45EC9EBA_4957_618A_41AC_6F7EC2680982",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129, this.camera_44EDC8A7_4A93_7B2A_41AE_0A1576ABF9D8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5838DB65_4962_D4C7_41D1_ED110477DA15",
   "yaw": -103.88,
   "pitch": -6.5,
   "distance": 50,
   "hfov": 17.05
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.88,
   "hfov": 17.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.5
  }
 ],
 "id": "overlay_45ECEEBA_4957_618A_41C5_10DCDC68ACFC",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_441EDF90_4957_3F96_41D0_2DEEA625F274, this.camera_441CD8B6_4A93_7B2B_41CF_3469ECDA9916); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58391B65_4962_D4C7_41AC_89EB846F9DB0",
   "yaw": 40.19,
   "pitch": -7.88,
   "distance": 50,
   "hfov": 17
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 40.19,
   "hfov": 17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.88
  }
 ],
 "id": "overlay_45ECCEBA_4957_618A_41B2_215D2AEC5DA2",
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC, this.camera_4745A78C_4A93_75FF_41D2_4F4AD2EC4084); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58008B75_4962_D4B4_41CA_2A7A0D08AF7C",
   "yaw": -129.71,
   "pitch": -30.33,
   "distance": 100,
   "hfov": 8.61
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.71,
   "hfov": 8.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.33
  }
 ],
 "id": "overlay_442CA6DF_495E_FDC3_41AF_0DC4D7378A3C",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365, this.camera_4748079C_4A93_751F_41C6_C1C3534F8DE1); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58012B85_4962_D444_41D0_029279D613EC",
   "yaw": -4.99,
   "pitch": -23.55,
   "distance": 100,
   "hfov": 9.15
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.99,
   "hfov": 9.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.55
  }
 ],
 "id": "overlay_442CC6DF_495E_FDC3_41C1_BDC8AF3A13A4",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58015B85_4962_D444_4192_7F16423B008E",
   "yaw": 36.12,
   "pitch": -30.13,
   "distance": 50,
   "hfov": 8.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.12,
   "hfov": 8.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.13
  }
 ],
 "id": "overlay_442CF6DF_495E_FDC3_41A2_283B62EE4262",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_59A24912_496D_545C_41D2_0BDBEFBC2948, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FD90FBB_49AD_2C43_41B0_5DE1E46AD8F5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_470E4762_4A90_D52B_41C4_81DE791F6A56",
   "yaw": -64.46,
   "pitch": -0.19,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.46,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.19
  }
 ],
 "id": "overlay_5B10EF9A_496F_2C4C_4187_36F8B80C6FAB",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5814A700_496D_3C3C_41B7_BC8F548DEE62, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FDECFBD_49AD_2C44_41C9_023E089B464F, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_470E3762_4A90_D52B_41C2_51A030B71497",
   "yaw": 106.96,
   "pitch": -3.59,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.96,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.59
  }
 ],
 "id": "overlay_599003F2_496F_FBDC_41BF_12ACA7163BB8",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5823A29E_4962_D444_41B7_993189DFE6E2, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FD82FBE_49AD_2C44_41AE_A408088C5A4E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_470DF762_4A90_D52B_41C9_AFFC26B571A6",
   "yaw": -5.39,
   "pitch": 0.6,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.39,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.6
  }
 ],
 "id": "overlay_58C64636_496F_5C44_41C2_225E27C75762",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45A63372_495F_74DC_41B2_D33635B563EA, this.camera_44D57848_4A93_7B66_41C5_71B8DE34A9CE); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583B3B65_4962_D4C7_41AE_E8A13F1F8048",
   "yaw": 45.75,
   "pitch": -9.52,
   "distance": 50,
   "hfov": 16.92
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.75,
   "hfov": 16.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.52
  }
 ],
 "id": "overlay_45858A94_495F_3444_418D_7641AABF6C02",
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45235322_495F_547C_41C8_D48D76FAE9CA, this.camera_44A22828_4A93_7B27_41BD_691A1B15E7DF); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583BAB75_4962_D4C4_41C7_831B020314F7",
   "yaw": -21.31,
   "pitch": -17.97,
   "distance": 100,
   "hfov": 16.32
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.31,
   "hfov": 16.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.97
  }
 ],
 "id": "overlay_4585EA94_495F_3444_41C4_CA78113FD786",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4281523F_495F_3444_41C7_87D56D7FCE47, this.camera_44B17819_4A93_7B19_41B8_8761FF9672B8); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_583BEB75_4962_D4C4_4191_2081AA5C31AB",
   "yaw": 157.69,
   "pitch": -13.64,
   "distance": 100,
   "hfov": 16.68
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.69,
   "hfov": 16.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.64
  }
 ],
 "id": "overlay_45852A94_495F_3444_4176_C3BD43DDD6E2",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4454C338_495F_544C_41C8_2683B348C9DD, this.camera_458C5943_4A93_7D69_41B3_585233928300); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5805DB75_4962_D4C4_41A0_68C1FD227014",
   "yaw": 10.78,
   "pitch": -26.14,
   "distance": 100,
   "hfov": 8.96
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.78,
   "hfov": 8.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.14
  }
 ],
 "id": "overlay_45A86B7B_495F_74CC_41C6_DF3BFB9EC65D",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_45A63372_495F_74DC_41B2_D33635B563EA, this.camera_478F1981_4A93_7DE9_4190_67F073897529); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58066B75_4962_D4C4_4167_2BE2A6775A7A",
   "yaw": -172.42,
   "pitch": -27.14,
   "distance": 100,
   "hfov": 8.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.42,
   "hfov": 8.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.14
  }
 ],
 "id": "overlay_45A83B7B_495F_74CC_41D0_569C37891069",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80, this.camera_47B4C692_4A93_77EB_41B1_F81DC44E37FA); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5801FB85_4962_D444_41C4_DBA91FC44896",
   "yaw": 134.1,
   "pitch": -26.54,
   "distance": 50,
   "hfov": 8.93
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.1,
   "hfov": 8.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.54
  }
 ],
 "id": "overlay_44F80E7D_495E_ECC4_41C1_3DBE44CA8639",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81, this.camera_478A7683_4A93_77EA_41CD_6CBCBE01E8C1); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58021B85_4962_D444_41C5_A9EDDD8AD9E2",
   "yaw": 169.02,
   "pitch": -22.55,
   "distance": 100,
   "hfov": 9.21
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.02,
   "hfov": 9.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.55
  }
 ],
 "id": "overlay_44F83E7D_495E_ECC4_41BD_51592241A32A",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5B7DE96E_4963_54C4_41B9_85B43094141A, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FDB8FC0_49AD_2C3C_41AE_816A73117F97, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_470CA762_4A90_D52B_41D1_319AF472AF3A",
   "yaw": -94.6,
   "pitch": -1.59,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.6,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.59
  }
 ],
 "id": "overlay_5B40BD89_4963_6C4C_41AC_410B0ACB485F",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_583F4C89_4962_EC4F_41B9_66823860239C, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FDAEFC1_49AD_2C3C_41B8_AA0E769260FA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_470C1762_4A90_D52B_4153_FFC3D2ABE94C",
   "yaw": -9.38,
   "pitch": 4.2,
   "distance": 100,
   "hfov": 7.97
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.38,
   "hfov": 7.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.2
  }
 ],
 "id": "overlay_5BC192A6_4963_5444_41B0_B8B81B99815E",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5B4DC9E2_4965_37FC_41D0_26804318B8C4, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FC5CFC2_49AD_2C3C_4118_032C04E67AD0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4733D762_4A90_D52B_41D1_9E89F7B0D43A",
   "yaw": 67.44,
   "pitch": -3.39,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.44,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.39
  }
 ],
 "id": "overlay_5905971A_4963_3C4C_41C3_F45DFC53EB33",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A, this.camera_4727D75D_4A93_7519_4192_76A32EF96EF7); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58146BA4_4962_D444_41D1_D57AECA1653B",
   "yaw": 7.58,
   "pitch": -20.55,
   "distance": 100,
   "hfov": 9.34
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.58,
   "hfov": 9.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.55
  }
 ],
 "id": "overlay_4643C6BC_495D_DC44_41B6_32ED48280C1E",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5, this.camera_4733C74E_4A93_757B_416E_2137075D4498); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5814EBA4_4962_D444_41AF_FCA48DB618CD",
   "yaw": 34.32,
   "pitch": -22.15,
   "distance": 100,
   "hfov": 9.24
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.32,
   "hfov": 9.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.15
  }
 ],
 "id": "overlay_4643E6BC_495D_DC44_41D0_C0D8F1C565AC",
 "data": {
  "label": "Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5BEA6BEE_49A7_2BC4_417A_95D6A8C6CC88, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FE7EFE6_49AD_2BC4_41CE_194157FA6BFD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4722B781_4A90_D5E9_41BE_C970801D95F2",
   "yaw": -160.25,
   "pitch": -2.39,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.25,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.39
  }
 ],
 "id": "overlay_58AF85E4_49A7_3FC4_41CC_A0D9899B2C00",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5824F9B1_49A5_345C_41C9_A619F28B2AC3, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FE6DFE7_49AD_2BC4_41C7_FF19FDCF2764, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47227781_4A90_D5E9_41B2_5C9B3332784B",
   "yaw": -102.38,
   "pitch": -1.79,
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.38,
   "hfov": 7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.79
  }
 ],
 "id": "overlay_580C2C2F_49A7_EC43_41B1_50BDEA71B359",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5B95B886_49A5_3444_4178_1F40362BAB57, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FE01FE8_49AD_2BCC_41BF_92C246A08F05, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4721D781_4A90_D5E9_41C7_3A8FB17CA26C",
   "yaw": -41.51,
   "pitch": -2.59,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.51,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.59
  }
 ],
 "id": "overlay_58520E01_49A7_EC3C_419F_4AD2720F2637",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_584A1BBD_49A3_5444_41B5_E50D0B3EC181, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FE35FEA_49AD_2BCC_41A0_927526CAE4CA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4721A781_4A90_D5E9_41BD_E82DE4C3F5F0",
   "yaw": 138.89,
   "pitch": -2.99,
   "distance": 100,
   "hfov": 7.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.89,
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.99
  }
 ],
 "id": "overlay_5BE4A386_49A7_3444_41C2_CF915B976174",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_585E0B34_49A3_3445_41CC_00A10FA3C8C4, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_5FE31FEB_49AD_2BCC_41C0_BFBFAF88C796, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47217781_4A90_D5E9_41B7_713EB743688A",
   "yaw": 114.34,
   "pitch": -9.17,
   "distance": 100,
   "hfov": 7.89
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.34,
   "hfov": 7.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.17
  }
 ],
 "id": "overlay_5890662D_49A7_5C47_41D0_E1B7D9ED0942",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583A8B65_4962_D4C7_41C0_BC04C2B4D39C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583ADB65_4962_D4C7_41A2_DDF2B62BB147",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4281523F_495F_3444_41C7_87D56D7FCE47_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580D9B85_4962_D444_41BA_5BEE4964A7B9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580E3B85_4962_D444_41CC_21D417E13317",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47311771_4A90_D529_4158_8F00487985E6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4730D771_4A90_D529_41B2_4B67E3C936AB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47309771_4A90_D529_41B9_FD11D7526B0A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44A7F677_495D_5CC3_41D0_4A46158791BD_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5800EB75_4962_D4C4_41D0_06EEF1B50C70",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58013B75_4962_D4C4_41C3_794B00F06EF2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4709A762_4A90_D52B_41BC_E039D2D49C23",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_447B57BC_495E_DC44_41CC_DA09343F4864_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58068B75_4962_D4C4_41B1_A74AA3BC7D84",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5806CB75_4962_D4C4_41A6_FBCA3581A028",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47072752_4A90_D56B_41B6_88876ECA79A3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4706D752_4A90_D56B_41C5_EEB5988E00AA",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4706B752_4A90_D56B_41B1_027CAB3DCBFA",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4454C338_495F_544C_41C8_2683B348C9DD_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583AFB65_4962_D4C7_41CF_4914CCBC443B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583B3B65_4962_D4C7_4175_2DA9991EE2C1",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5839FB65_4962_D4C7_41C4_3631FF9EAD8B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583A1B65_4962_D4C7_41C3_B4389F53FB04",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_43A5875A_495F_DCCC_4191_2A12F201259B_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58034B85_4962_D444_41B1_1D997D339CA8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58038B85_4962_D444_41C5_882EED992B64",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_471BEE12_495D_2C5C_4157_55BE9D4F679C_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58097B94_4962_D445_41C3_2158177FD80B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5809CB94_4962_D445_41C5_E7E82DD243E1",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4739D771_4A90_D529_417A_A202F93014EC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47399771_4A90_D529_41CC_029AABB4D865",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47395771_4A90_D529_41CF_A7439BB479F9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47392771_4A90_D529_41D1_D1FD6CCD2E19",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47C5C575_495D_5CC4_41B0_2F8F594A981D_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580ADBA4_4962_D444_41CC_C9386F0D412A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580B4BA4_4962_D444_41C7_7C2FC1864E22",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580BCBA4_4962_D444_41D1_216D8766155D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47238781_4A90_D5E9_41CE_F898B722ABD9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47A2EE0C_495D_2C44_41CB_0503D1A3C43A_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58053B75_4962_D4C4_41D1_60533A34BEE4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5805AB75_4962_D4C4_41B1_7C8CECE2E081",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45A63372_495F_74DC_41B2_D33635B563EA_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583A3B65_4962_D4C7_41CB_F09747170213",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583A4B65_4962_D4C7_41A9_986C1F867265",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_438F1EED_495F_EDC4_41C3_2E06DC43B047_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580C3B85_4962_D444_41A3_99C51B566F97",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580C5B85_4962_D444_41C8_0F64BF1DBF62",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47750657_495D_3CC4_41B3_E128F36C1348_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47048762_4A90_D52B_41D0_F37DDDFC2E4B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4704B762_4A90_D52B_41D1_86325E11F620",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_459E622A_495F_344C_41B3_A49151E45154_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580E5B85_4962_D444_41D1_54C879A12215",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580ECB85_4962_D444_41BC_38AB020F44DF",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47370771_4A90_D529_41C4_C0274C9C9BEA",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4736D771_4A90_D529_41BE_E82986BE491A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4736A771_4A90_D529_41BF_C4D8B1EA8CFE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_476FFE3F_495D_6C44_41D0_A06437D30868_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58395B65_4962_D4C7_41CE_D170AC6E2891",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5839EB65_4962_D4C7_41D2_5870918E8B22",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_43EA1663_495F_FCFC_41C9_DFC5876C4D86_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58028B85_4962_D444_41B0_97F72A798F4B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58030B85_4962_D444_41A0_B6DA38C3D82A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44C23659_495E_DCCC_41B1_B7D6B7267F80_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583E7B65_4962_D4C7_41BF_23FFCE2F1C9C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_43FC2E8D_495F_2C44_41C4_4244DDFF4129_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58015B75_4962_D4C4_41C9_F07BA238110D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58004B75_4962_D4C4_41C0_5F244FEE7F74",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47081762_4A90_D52B_41C5_D184AA21B786",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_470FC762_4A90_D52B_41A2_E53321333DA9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44DC5F36_495E_EC44_41BE_33E10E5F23FC_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583EDB65_4962_D4C7_41B0_4B685FB36CA5",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583F1B65_4962_D4C7_4186_BE841F8D0A89",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_441EDF90_4957_3F96_41D0_2DEEA625F274_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58043B75_4962_D4C4_41BA_60D950FB9FD8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58045B75_4962_D4C4_41D1_AF516406AE74",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45235322_495F_547C_41C8_D48D76FAE9CA_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580CDB85_4962_D444_41BC_1968706DF0DB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580D4B85_4962_D444_41C6_96337ABF7CD9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47321762_4A90_D52B_41C2_3AC57F0C5FDB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44A33E31_495D_2C5C_41A9_F6FFD25E5B77_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5808BB94_4962_D445_41B0_8038DE939417",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58092B94_4962_D445_41B7_BD87734EC764",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_473B3771_4A90_D529_41D0_96A10FC32891",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_47857DC1_495D_6C3F_41A0_5EF5CE103050_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580F6B94_4962_D445_41CC_4479C419E161",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580F8B94_4962_D445_41CB_6DEB59941606",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58083B94_4962_D445_41C0_D80E1D5CE9E3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4734D771_4A90_D529_41B0_EC564EB56749",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47349771_4A90_D529_41C6_013B2EAAA68F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47344771_4A90_D529_41C4_7484583A1403",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_473AA607_495D_7C44_41A6_E67D8FE36C39_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58150BA4_4962_D444_4194_A6587385D82D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5815BBA4_4962_D444_41B9_6A96CB545810",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_46789ECF_495D_EDC4_41BE_ABBD11F7F4CD_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583E8B65_4962_D4C7_41CE_80FB10C283BF",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_440F73B8_4957_2796_41BD_6FF285AA4BB1_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58077B75_4962_D4C4_41B5_5D0AD3EACFA0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58078B75_4962_D4C4_4190_87AF1E6A043F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47051762_4A90_D52B_41D0_B9ACDC4D57EC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44015B5B_495F_54CC_41D0_96161C648977_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5807DB75_4962_D4C4_41A3_F212E6C19BE3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58004B75_4962_D4C4_41D2_3CFE286A426C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_470B6762_4A90_D52B_41C1_7284E034B081",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_470B1762_4A90_D52B_41C9_F059174BDC70",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_470AF762_4A90_D52B_41C0_C8632901382C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_445B7FF9_495F_2BCC_41C2_702152C4788B_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58099B94_4962_D445_41B0_6D409364CCC8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580A2B94_4962_D445_41AB_DBB3F0369019",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_580AAB94_4962_D445_41A1_EC87488D84CC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4675C64D_495D_3CC4_41B1_F5AAF39641F6_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5804FB75_4962_D4C4_41AD_48D7AAB6CB7A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_42A65B6C_495F_54C5_41B0_5284F77303C3_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583FAB65_4962_D4C7_41AC_327290B4117F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583FFB65_4962_D4C7_41D0_C27DF29E54A1",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58383B65_4962_D4C7_4199_BFF41C8C680F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45CCAB04_4957_207E_417C_9C95C01D94D5_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583C4B56_4962_D4C4_41D1_759F93192F62",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583DFB65_4962_D4C7_41CA_58A040CC7739",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583E2B65_4962_D4C7_41C4_BAEE38B94D31",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4567B3B5_4956_E79E_41D1_5886928D41E4_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58163BA4_4962_D444_41AF_8F136F9FE3C7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5816BBA4_4962_D444_41BC_2DBE493A6966",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4726E781_4A90_D5E9_41C2_1E805AACA4CA",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_461A56DB_495D_FDCC_41D1_E3063671B4B5_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5808EB94_4962_D445_41C6_63C0DF58E39E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58091B94_4962_D445_41C3_EE5D28B454F1",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_473FA771_4A90_D529_41B6_540C833BA624",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_473F2771_4A90_D529_41BE_B8D9177091D3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_473EE771_4A90_D529_41B5_CB3B289AB03E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_473E6771_4A90_D529_419F_044848609B7B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_473E1771_4A90_D529_41C9_696CB07A1325",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_473DD771_4A90_D529_41D2_1C1B68F4C58B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_473D4771_4A90_D529_41BC_CBE824C791D6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_479CCEA4_495D_2C44_41D1_F9F53D27E2E0_1_HS_8_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58387B65_4962_D4C7_417E_EB0E06C80DB7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58388B65_4962_D4C7_41D0_97977D7F87D3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5838DB65_4962_D4C7_41D1_ED110477DA15",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58391B65_4962_D4C7_41AC_89EB846F9DB0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45ECBEBA_4957_618A_41B1_B825C5061D2F_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58008B75_4962_D4B4_41CA_2A7A0D08AF7C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58012B85_4962_D444_41D0_029279D613EC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58015B85_4962_D444_4192_7F16423B008E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_470E4762_4A90_D52B_41C4_81DE791F6A56",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_470E3762_4A90_D52B_41C2_51A030B71497",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_470DF762_4A90_D52B_41C9_AFFC26B571A6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_442CB6DF_495E_FDC3_41CD_874FA35BFD81_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583B3B65_4962_D4C7_41AE_E8A13F1F8048",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583BAB75_4962_D4C4_41C7_831B020314F7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_583BEB75_4962_D4C4_4191_2081AA5C31AB",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4585AA94_495F_3444_41AD_174FAF41FDD8_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5805DB75_4962_D4C4_41A0_68C1FD227014",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58066B75_4962_D4C4_4167_2BE2A6775A7A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_45A87B7B_495F_74CC_41A0_15122F2041BA_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5801FB85_4962_D444_41C4_DBA91FC44896",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58021B85_4962_D444_41C5_A9EDDD8AD9E2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_470CA762_4A90_D52B_41D1_319AF472AF3A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_470C1762_4A90_D52B_4153_FFC3D2ABE94C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4733D762_4A90_D52B_41D1_9E89F7B0D43A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_44F81E7D_495E_ECC4_41BC_80999DDFD365_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_58146BA4_4962_D444_41D1_D57AECA1653B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_5814EBA4_4962_D444_41AF_FCA48DB618CD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4722B781_4A90_D5E9_41BE_C970801D95F2",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47227781_4A90_D5E9_41B2_5C9B3332784B",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4721D781_4A90_D5E9_41C7_3A8FB17CA26C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_4721A781_4A90_D5E9_41BD_E82DE4C3F5F0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_47217781_4A90_D5E9_41B7_713EB743688A",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4643B6BC_495D_DC44_41B3_1CF4B819525C_1_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
}],
 "class": "Player",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "existsKey": function(key){  return key in window; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player513"
 },
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
