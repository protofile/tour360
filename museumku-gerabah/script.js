(function(){
    var script = {
 "start": "this.playAudioList([this.audio_D6E97643_F604_924C_41E8_27B3251A6644]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
  "this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "paddingLeft": 0,
 "height": "100%",
 "id": "rootPlayer",
 "downloadEnabled": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 20,
 "overflow": "visible",
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "definitions": [{
 "thumbnailUrl": "media/video_E91EE102_F6FB_6FCC_41A9_F3121F4739F3_t.jpg",
 "label": "Footage",
 "scaleMode": "fit_inside",
 "width": 1920,
 "class": "Video",
 "id": "video_E91EE102_F6FB_6FCC_41A9_F3121F4739F3",
 "loop": false,
 "height": 1080,
 "video": {
  "mp4Url": "media/video_E91EE102_F6FB_6FCC_41A9_F3121F4739F3.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 }
},
{
 "thumbnailUrl": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_t.jpg",
 "partial": false,
 "label": "belakang-dome",
 "id": "panorama_F4C93B25_F802_4C54_41DE_E394D9B56404",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76",
   "backwardYaw": -91.89,
   "class": "AdjacentPanorama",
   "yaw": 39.72,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F4C91B25_F802_4C54_41E9_B6D67F5C1055"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_t.jpg",
 "partial": false,
 "label": "galeri-4",
 "id": "panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7",
   "backwardYaw": 161.85,
   "class": "AdjacentPanorama",
   "yaw": -13.41,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7",
   "backwardYaw": 161.85,
   "class": "AdjacentPanorama",
   "yaw": 4.49,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D",
   "backwardYaw": 6.78,
   "class": "AdjacentPanorama",
   "yaw": 175.39,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F4897A3D_F802_4CB4_41AD_D02648FA6136",
  "this.overlay_F4899A3D_F802_4CB4_41E3_AEDE47E87235",
  "this.overlay_F489AA3D_F802_4CB4_41C4_51F489D8E2B3"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.51,
  "pitch": 0
 },
 "id": "camera_E3D561D7_F802_DFF3_41E8_FE8DB2787F90",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.68,
  "pitch": 0
 },
 "id": "camera_EDD61F09_F802_C45C_41EF_16AF92F72DED",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 153.11,
  "pitch": -6.23
 },
 "id": "panorama_F5704F68_F802_44DD_41E1_C10892E78220_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/album_D0876747_F4A5_F06A_41EB_8A4C6A38B393_0_t.png",
 "label": "Screenshot 2023-10-03 172355",
 "duration": 5000,
 "width": 538,
 "class": "Photo",
 "id": "album_D0876747_F4A5_F06A_41EB_8A4C6A38B393_0",
 "image": {
  "levels": [
   {
    "url": "media/album_D0876747_F4A5_F06A_41EB_8A4C6A38B393_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 823
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.11,
  "pitch": 0
 },
 "id": "camera_ED8A4F47_F802_C4D4_41ED_BDDAAB50912F",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/video_F84A78E9_F60C_9E5F_41E3_419C1B9F27BA_t.jpg",
 "label": "y2mate.com - Asalusul Patung Singa yang Jadi Saksi Bisu Peristiwa Berdarah di Kanjuruhan_480p",
 "scaleMode": "fit_inside",
 "width": 854,
 "class": "Video",
 "id": "video_F84A78E9_F60C_9E5F_41E3_419C1B9F27BA",
 "loop": false,
 "height": 480,
 "video": {
  "mp4Url": "media/video_F84A78E9_F60C_9E5F_41E3_419C1B9F27BA.mp4",
  "width": 854,
  "class": "VideoResource",
  "height": 480
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_D6E97643_F604_924C_41E8_27B3251A6644.mp3",
  "oggUrl": "media/audio_D6E97643_F604_924C_41E8_27B3251A6644.ogg"
 },
 "data": {
  "label": "y2mate.com - Cinematic Inspirational Piano by Infraction No Copyright Music  A Way to You"
 },
 "id": "audio_D6E97643_F604_924C_41E8_27B3251A6644",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.52,
  "pitch": 0
 },
 "id": "camera_E23AD003_F802_DC4C_41DD_C34599B018AD",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.67,
  "pitch": 0
 },
 "id": "camera_E34D20BE_F802_DDB4_41E4_46CEEAC84108",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_t.jpg",
 "partial": false,
 "label": "galeri-1",
 "id": "panorama_F5CE84ED_F803_C5D4_41D8_E18613773125",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76",
   "backwardYaw": -11.34,
   "class": "AdjacentPanorama",
   "yaw": -83.95,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39",
   "backwardYaw": 14.78,
   "class": "AdjacentPanorama",
   "yaw": -162.51,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39",
   "backwardYaw": 14.78,
   "class": "AdjacentPanorama",
   "yaw": 172.01,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F5CE94FC_F803_C5B5_41EB_48FC75DA3A18",
  "this.overlay_F5CE64FC_F803_C5B5_41E0_B82B94DDBCFB",
  "this.overlay_F5CE54FC_F803_C5B5_41EC_5160B2F2B2BB",
  "this.overlay_F5CE34FC_F803_C5B5_41D6_F38DD7CE9DA2"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.45,
  "pitch": 0
 },
 "id": "camera_E35CA0DD_F802_DDF7_41E3_8D11E4EF5A62",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_t.jpg",
 "partial": false,
 "label": "kanan-dome",
 "id": "panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F3FC229C_F803_DC75_41EC_032EE01876B3",
   "backwardYaw": 73.59,
   "class": "AdjacentPanorama",
   "yaw": -169.33,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5CE84ED_F803_C5D4_41D8_E18613773125",
   "backwardYaw": -83.95,
   "class": "AdjacentPanorama",
   "yaw": -11.34,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9",
   "backwardYaw": 46.78,
   "class": "AdjacentPanorama",
   "yaw": 114.04,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F4C93B25_F802_4C54_41DE_E394D9B56404",
   "backwardYaw": 39.72,
   "class": "AdjacentPanorama",
   "yaw": -91.89,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F50AADB4_F802_47B5_41EB_D7FA2B163B07",
  "this.overlay_F50ABDB4_F802_47B5_41DF_953BB3E0B18F",
  "this.overlay_F50A8DB4_F802_47B5_41CA_A01F408E1D84",
  "this.overlay_ECE23E0A_F806_C45C_41DC_FB87F6B2B502"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -142.02,
  "pitch": 0
 },
 "id": "camera_E2E47031_F802_DC4F_41E8_747F9A8793C4",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_F4C93B25_F802_4C54_41DE_E394D9B56404",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_F3F4F4A3_F802_4453_41DF_D141124859DB",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_F3FC229C_F803_DC75_41EC_032EE01876B3",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_F5CE84ED_F803_C5D4_41D8_E18613773125",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_F4D79B16_F802_4C74_41EB_D411407B63AB",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_F75C6641_F802_44CC_41D0_8BE544120B2D",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_F5704F68_F802_44DD_41E1_C10892E78220",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F5704F68_F802_44DD_41E1_C10892E78220_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_F59B771A_F802_C47C_41EE_11B69F593617",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F59B771A_F802_C47C_41EE_11B69F593617_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.album_D0876747_F4A5_F06A_41EB_8A4C6A38B393",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 0)",
   "media": "this.video_F84A78E9_F60C_9E5F_41E3_419C1B9F27BA",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 20)"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 17.49,
  "pitch": 0
 },
 "id": "camera_E042E283_F802_DC4C_41EE_4C21D7964C47",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.64,
  "pitch": 0,
  "hfov": 96
 },
 "id": "camera_EDAB0F76_F802_C4B4_41E6_141AB1DD6AC3",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "gyroscopeEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "touchControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.34,
  "pitch": 0
 },
 "id": "camera_E0623293_F802_DC4C_41EB_FDEE76AE100F",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.18,
  "pitch": 0
 },
 "id": "camera_E2913060_F802_DCCD_41D5_7FB064CFDF52",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.6,
  "pitch": 0
 },
 "id": "camera_E2281FF3_F802_C3CC_41E4_DBBB9C1F5CB9",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_t.jpg",
 "partial": false,
 "label": "dome-depan",
 "id": "panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB",
 "hfovMin": "138%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0",
   "backwardYaw": 0.94,
   "class": "AdjacentPanorama",
   "yaw": 177.04,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9",
   "backwardYaw": 178.52,
   "class": "AdjacentPanorama",
   "yaw": -15.96,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9",
   "backwardYaw": 178.52,
   "class": "AdjacentPanorama",
   "yaw": 12.98,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_F6A58A7D_F803_CCB4_41C2_9553CA50F117",
  "this.overlay_F6A55A7D_F803_CCB4_41E3_3EEF783A9BE2",
  "this.overlay_F6A57A7D_F803_CCB4_4184_541610896B30",
  "this.overlay_F6A53A7D_F803_CCB4_41BB_A073C2D80146",
  "this.overlay_F6AAEA7D_F803_CCB4_41EC_E813AC8911B7",
  "this.popup_E217DCDD_F3E6_B01E_41EA_E93D7D74677E",
  "this.popup_E12EC5A2_F3E2_702A_41E9_355CA6E2B813"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.41,
  "pitch": 0
 },
 "id": "camera_E30EA13B_F802_DCBC_41C8_E760695D9DD9",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_t.jpg",
 "partial": false,
 "label": "galeri-6",
 "id": "panorama_F4D79B16_F802_4C74_41EB_D411407B63AB",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0",
   "backwardYaw": 63.64,
   "class": "AdjacentPanorama",
   "yaw": -163.48,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D",
   "backwardYaw": 175.66,
   "class": "AdjacentPanorama",
   "yaw": 38.66,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D",
   "backwardYaw": 175.66,
   "class": "AdjacentPanorama",
   "yaw": -23.04,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F4D78B16_F802_4C74_41E6_5BC0113BE9B0",
  "this.overlay_F4D7AB16_F802_4C74_41E3_DF461E8FC293",
  "this.overlay_F4D7CB16_F802_4C74_4188_72F6ABB41AA7"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.05,
  "pitch": 0
 },
 "id": "camera_E319615A_F802_DCFD_41EA_018AA78F4DD0",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -65.96,
  "pitch": 0
 },
 "id": "camera_E2F78041_F802_DCCC_41B7_9CFD497372E7",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.64,
  "pitch": 0,
  "hfov": 96
 },
 "id": "camera_EDB62F86_F802_C454_41DA_67326BBF6CD9",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.48,
  "pitch": 0,
  "hfov": 96
 },
 "id": "camera_E386A235_F802_DCB4_41E0_F5A0525F6DDE",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.7,
  "pitch": 0
 },
 "id": "camera_ED913F57_F802_C4F4_41AF_DB27AF612F77",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.22,
  "pitch": 0
 },
 "id": "camera_E343609F_F802_DC74_41EC_8FCE02B1F809",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.22,
  "pitch": 0
 },
 "id": "camera_E25D6FB4_F802_C3B5_41E2_C0898718FC86",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.26,
  "pitch": 0
 },
 "id": "camera_E27E8FD4_F802_C3F4_41E8_F89CAF806D70",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_t.jpg",
 "partial": false,
 "label": "galeri-2",
 "id": "panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7",
   "backwardYaw": -7.64,
   "class": "AdjacentPanorama",
   "yaw": 175.43,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5CE84ED_F803_C5D4_41D8_E18613773125",
   "backwardYaw": -162.51,
   "class": "AdjacentPanorama",
   "yaw": 14.78,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5CE84ED_F803_C5D4_41D8_E18613773125",
   "backwardYaw": -162.51,
   "class": "AdjacentPanorama",
   "yaw": -17.6,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F466D934_F803_CCB5_41C7_195584204F74",
  "this.overlay_F466C934_F803_CCB5_41D2_FC1266D1D41D",
  "this.overlay_F466A934_F803_CCB5_41E5_C2BEA910A0B0"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.34,
  "pitch": 0
 },
 "id": "camera_EDEAEF28_F802_C45C_41E7_B1197C1DFDB5",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_E217DCDD_F3E6_B01E_41EA_E93D7D74677E",
 "yaw": 25.4,
 "popupDistance": 100,
 "hfov": 2.51,
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E217DCDD_F3E6_B01E_41EA_E93D7D74677E_0_2.jpg",
    "width": 705,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -11.58,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_t.jpg",
 "partial": false,
 "label": "galeri-5",
 "id": "panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C",
   "backwardYaw": 175.39,
   "class": "AdjacentPanorama",
   "yaw": 6.78,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F4D79B16_F802_4C74_41EB_D411407B63AB",
   "backwardYaw": 38.66,
   "class": "AdjacentPanorama",
   "yaw": 175.66,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F4D79B16_F802_4C74_41EB_D411407B63AB",
   "backwardYaw": 38.66,
   "class": "AdjacentPanorama",
   "yaw": -158.17,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F57832B9_F802_5DBC_41A5_14B31433E7D4",
  "this.overlay_F57822B9_F802_5DBC_41EE_ED67E1B268BF",
  "this.overlay_F57842B9_F802_5DBC_41D6_93F13F80AACF"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "rollOverOpacity": 0.8,
 "fontFamily": "Arial",
 "selectedBackgroundColor": "#202020",
 "children": [
  {
   "label": "depan",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "belakang-dome",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "cafe-1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "cafe-2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "cafe-3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "dalam-dome",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "dome-depan",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "galeri-1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "galeri-2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "galeri-3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "galeri-4",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "galeri-5",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "galeri-6",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "halaman-tengah",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "kanan-dome",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "kasir",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "kiri-dome",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "label": "souvenir",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "label": "workshop",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "label": "Media",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "opacity": 0.4,
 "class": "Menu",
 "rollOverBackgroundColor": "#000000",
 "fontColor": "#FFFFFF",
 "id": "Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "backgroundColor": "#404040"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.66,
  "pitch": 0
 },
 "id": "camera_E2436F95_F802_C474_41EA_A135DB80FA3F",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_t.jpg",
 "partial": false,
 "label": "cafe-2",
 "id": "panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9",
   "backwardYaw": -92.87,
   "class": "AdjacentPanorama",
   "yaw": 37.98,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F3D2F156_F802_3CF4_41D8_B35A633230BE"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.22,
  "pitch": 0
 },
 "id": "camera_E24D0FA5_F802_C454_41E1_0D5AFB2C2B5E",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_t.jpg",
 "partial": false,
 "label": "souvenir",
 "id": "panorama_F59B771A_F802_C47C_41EE_11B69F593617",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67",
   "backwardYaw": -2.4,
   "class": "AdjacentPanorama",
   "yaw": 172.74,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01",
   "backwardYaw": 174.32,
   "class": "AdjacentPanorama",
   "yaw": -9.3,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F59B171A_F802_C47C_41E2_5A3FBDDD35CF",
  "this.overlay_F59B371A_F802_C47C_41D3_B1334F23E5FC"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.93,
  "pitch": 0
 },
 "id": "camera_E26CFFC4_F802_C3D4_41E9_816D468C723E",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_t.jpg",
 "partial": false,
 "label": "cafe-3",
 "id": "panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F75C6641_F802_44CC_41D0_8BE544120B2D",
   "backwardYaw": -85.07,
   "class": "AdjacentPanorama",
   "yaw": 177.28,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F59B771A_F802_C47C_41EE_11B69F593617",
   "backwardYaw": 172.74,
   "class": "AdjacentPanorama",
   "yaw": -2.4,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F3EC3A01_F803_CC4C_41D4_A8A3B04FF095",
  "this.overlay_F3EDCA01_F803_CC4C_41C2_791C2374838D"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.72,
  "pitch": 0
 },
 "id": "camera_EDFF4F37_F802_C4B3_41ED_C93A9B402F3D",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_t.jpg",
 "partial": false,
 "label": "kiri-dome",
 "id": "panorama_F5704F68_F802_44DD_41E1_C10892E78220",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9",
   "backwardYaw": -51.94,
   "class": "AdjacentPanorama",
   "yaw": 60.94,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01",
   "backwardYaw": 42.49,
   "class": "AdjacentPanorama",
   "yaw": -157.5,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F3FC229C_F803_DC75_41EC_032EE01876B3",
   "backwardYaw": -98.65,
   "class": "AdjacentPanorama",
   "yaw": -12.55,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F570BF68_F802_44DD_41E1_55F3E48CB736",
  "this.overlay_F5709F68_F802_44DD_41EB_DCE5696068E6",
  "this.overlay_ECF49F28_F802_C45C_41E9_7981D03D1957"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "class": "ImageResource",
 "id": "ImageResource_E95C4081_F465_B0E6_41E3_12B0EA47075C",
 "levels": [
  {
   "url": "media/popup_E12EC5A2_F3E2_702A_41E9_355CA6E2B813_0_0.jpg",
   "width": 2031,
   "class": "ImageResourceLevel",
   "height": 2886
  },
  {
   "url": "media/popup_E12EC5A2_F3E2_702A_41E9_355CA6E2B813_0_1.jpg",
   "width": 1441,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_E12EC5A2_F3E2_702A_41E9_355CA6E2B813_0_2.jpg",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_E12EC5A2_F3E2_702A_41E9_355CA6E2B813_0_3.jpg",
   "width": 360,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_t.jpg",
 "partial": false,
 "label": "workshop",
 "id": "panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F59B771A_F802_C47C_41EE_11B69F593617",
   "backwardYaw": -9.3,
   "class": "AdjacentPanorama",
   "yaw": 174.32,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5704F68_F802_44DD_41E1_C10892E78220",
   "backwardYaw": -157.5,
   "class": "AdjacentPanorama",
   "yaw": 42.49,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F5678FD5_F802_C3F4_41D5_F0D835C5C4A5",
  "this.overlay_F5679FD5_F802_C3F4_41ED_CF6B0A093489"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.61,
  "pitch": 0
 },
 "id": "camera_E052D283_F802_DC4C_41D6_759E29067319",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 128.06,
  "pitch": 0,
  "hfov": 96
 },
 "id": "camera_E3CB71B8_F802_DFBC_4194_8E0966FA4C08",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_E85730E4_F47D_902F_41E9_747A4FCC28E3",
 "yaw": -167.31,
 "popupDistance": 100,
 "hfov": 1.14,
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E85730E4_F47D_902F_41E9_747A4FCC28E3_0_0.png",
    "width": 538,
    "class": "ImageResourceLevel",
    "height": 823
   },
   {
    "url": "media/popup_E85730E4_F47D_902F_41E9_747A4FCC28E3_0_1.png",
    "width": 334,
    "class": "ImageResourceLevel",
    "height": 511
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -9.22,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_E23B58B6_F3E5_902A_41ED_EF3782B765A5",
 "levels": [
  {
   "url": "media/popup_E217DCDD_F3E6_B01E_41EA_E93D7D74677E_0_0.jpg",
   "width": 1869,
   "class": "ImageResourceLevel",
   "height": 2714
  },
  {
   "url": "media/popup_E217DCDD_F3E6_B01E_41EA_E93D7D74677E_0_1.jpg",
   "width": 1410,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_E217DCDD_F3E6_B01E_41EA_E93D7D74677E_0_2.jpg",
   "width": 705,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_E217DCDD_F3E6_B01E_41EA_E93D7D74677E_0_3.jpg",
   "width": 352,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_t.jpg",
 "partial": false,
 "label": "galeri-3",
 "id": "panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C",
   "backwardYaw": -13.41,
   "class": "AdjacentPanorama",
   "yaw": 161.85,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C",
   "backwardYaw": -13.41,
   "class": "AdjacentPanorama",
   "yaw": -175.24,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39",
   "backwardYaw": 175.43,
   "class": "AdjacentPanorama",
   "yaw": -7.64,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F47CC1D0_F802_3FCC_41E3_F3ADC41DFD40",
  "this.overlay_F47CD1D0_F802_3FCC_41E9_942BF35A7E76",
  "this.overlay_F47CE1D0_F802_3FCC_41EC_4624E457C6D8"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -59.54,
  "pitch": 0
 },
 "id": "camera_E2CA4012_F802_DC4C_41B0_797DB785DA55",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -18.15,
  "pitch": 0
 },
 "id": "camera_E2A15070_F802_DCCC_41DB_FFED687D9BF6",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/video_F848B7B4_F61C_9234_41C1_54C44E61FCB6_t.jpg",
 "label": "y2mate.com - Asalusul Patung Singa yang Jadi Saksi Bisu Peristiwa Berdarah di Kanjuruhan_480p",
 "scaleMode": "fit_inside",
 "width": 854,
 "class": "Video",
 "id": "video_F848B7B4_F61C_9234_41C1_54C44E61FCB6",
 "loop": false,
 "height": 480,
 "video": {
  "mp4Url": "media/video_F848B7B4_F61C_9234_41C1_54C44E61FCB6.mp4",
  "width": 854,
  "class": "VideoResource",
  "height": 480
 }
},
{
 "class": "PlayList",
 "id": "playList_ED7B4E9B_F802_C47C_41A7_815834372F13",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_ED7B4E9B_F802_C47C_41A7_815834372F13, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_ED7B4E9B_F802_C47C_41A7_815834372F13, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_F848B7B4_F61C_9234_41C1_54C44E61FCB6",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -18.15,
  "pitch": 0
 },
 "id": "camera_E2B32080_F802_DC4C_41B0_8C30EB54FCAF",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 130
 },
 "id": "panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_t.jpg",
 "partial": false,
 "label": "dalam-dome",
 "id": "panorama_F3FC229C_F803_DC75_41EC_032EE01876B3",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76",
   "backwardYaw": -169.33,
   "class": "AdjacentPanorama",
   "yaw": 73.59,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5704F68_F802_44DD_41E1_C10892E78220",
   "backwardYaw": -12.55,
   "class": "AdjacentPanorama",
   "yaw": -98.65,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9",
   "backwardYaw": -0.04,
   "class": "AdjacentPanorama",
   "yaw": 171.82,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F3FDD29C_F803_DC75_41DD_9F222D1E9319",
  "this.overlay_F3FDF29C_F803_DC75_41D3_BEB29729295A",
  "this.overlay_F3FDE29C_F803_DC75_41E3_B021A47E6E96"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_t.jpg",
 "partial": false,
 "label": "depan",
 "id": "panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0",
 "hfovMin": "221%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB",
   "backwardYaw": 177.04,
   "class": "AdjacentPanorama",
   "yaw": 0.94,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F75C6641_F802_44CC_41D0_8BE544120B2D",
   "backwardYaw": -14.4,
   "class": "AdjacentPanorama",
   "yaw": -111.89,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F4D79B16_F802_4C74_41EB_D411407B63AB",
   "backwardYaw": -163.48,
   "class": "AdjacentPanorama",
   "yaw": 63.64,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F42211E6_F802_3FD4_41E3_35BB688A5F93",
  "this.overlay_F42241E6_F802_3FD4_41C3_F3065E4DC0E1",
  "this.overlay_F42251E6_F802_3FD4_41E0_AAEF3F39D3CE"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.34,
  "pitch": 0
 },
 "id": "camera_EDF1FF28_F802_C45C_41C1_4E3E4EBA8B80",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.22,
  "pitch": 0,
  "hfov": 96
 },
 "id": "camera_E328B17A_F802_DCBC_41E4_681F71E0A724",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -119.06,
  "pitch": 0
 },
 "id": "camera_E2D5F022_F802_DC4C_41DA_226658DBB3B4",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.65,
  "pitch": -15
 },
 "id": "panorama_F59B771A_F802_C47C_41EE_11B69F593617_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/album_D0876747_F4A5_F06A_41EB_8A4C6A38B393_t.png",
 "label": "Photo Album Screenshot 2023-10-03 172355",
 "playList": "this.album_D0876747_F4A5_F06A_41EB_8A4C6A38B393_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_D0876747_F4A5_F06A_41EB_8A4C6A38B393"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -116.36,
  "pitch": 0
 },
 "id": "camera_EDDD0F18_F802_C47C_41DB_BEFD1C4B36B0",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.06,
  "pitch": 0
 },
 "id": "camera_E3F4E216_F802_DC74_41BA_04550C2D4C38",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_t.jpg",
 "partial": false,
 "label": "halaman-tengah",
 "id": "panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F3F4F4A3_F802_4453_41DF_D141124859DB",
   "backwardYaw": 120.46,
   "class": "AdjacentPanorama",
   "yaw": 93.36,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5704F68_F802_44DD_41E1_C10892E78220",
   "backwardYaw": 60.94,
   "class": "AdjacentPanorama",
   "yaw": -51.94,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7",
   "backwardYaw": 37.98,
   "class": "AdjacentPanorama",
   "yaw": -92.87,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76",
   "backwardYaw": 114.04,
   "class": "AdjacentPanorama",
   "yaw": 46.78,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB",
   "backwardYaw": -15.96,
   "class": "AdjacentPanorama",
   "yaw": 178.52,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F3FC229C_F803_DC75_41EC_032EE01876B3",
   "backwardYaw": 171.82,
   "class": "AdjacentPanorama",
   "yaw": -0.04,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_F5B0743E_F802_44B5_41CA_4D1AE7898787",
  "this.overlay_F5B0543E_F802_44B5_41D9_4218E7FE7E4A",
  "this.overlay_F5B0A43E_F802_44B5_41A5_A7491BFF8479",
  "this.overlay_F5B0B43E_F802_44B5_41ED_63E85DB3DEF7",
  "this.overlay_EBED357A_F806_44BD_41E2_96CF32870BC8",
  "this.overlay_EB7D4DF1_F801_C7CC_41E3_7E34554A6BD2"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.36,
  "pitch": 0
 },
 "id": "camera_E3A15264_F802_DCD4_41A6_AA048237123F",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_F4C93B25_F802_4C54_41DE_E394D9B56404",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_F3F4F4A3_F802_4453_41DF_D141124859DB",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_F3FC229C_F803_DC75_41EC_032EE01876B3",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_F5CE84ED_F803_C5D4_41D8_E18613773125",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_F4D79B16_F802_4C74_41EB_D411407B63AB",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.panorama_F75C6641_F802_44CC_41D0_8BE544120B2D",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "media": "this.panorama_F5704F68_F802_44DD_41E1_C10892E78220",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F5704F68_F802_44DD_41E1_C10892E78220_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "media": "this.panorama_F59B771A_F802_C47C_41EE_11B69F593617",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F59B771A_F802_C47C_41EE_11B69F593617_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "media": "this.panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "media": "this.album_D0876747_F4A5_F06A_41EB_8A4C6A38B393",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 0)",
   "media": "this.video_F84A78E9_F60C_9E5F_41E3_419C1B9F27BA",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 87.13,
  "pitch": 0,
  "hfov": 96
 },
 "id": "camera_E37F011C_F802_DC74_41E0_0F648E5B4076",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_t.jpg",
 "partial": false,
 "label": "cafe-1",
 "id": "panorama_F3F4F4A3_F802_4453_41DF_D141124859DB",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9",
   "backwardYaw": 93.36,
   "class": "AdjacentPanorama",
   "yaw": 120.46,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9",
   "backwardYaw": 93.36,
   "class": "AdjacentPanorama",
   "yaw": 47.93,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F3F4D4A3_F802_4453_41C9_90F887AAC44A",
  "this.overlay_F3F4C4A3_F802_4453_41E4_6DFF66258749"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 17.49,
  "pitch": 0
 },
 "id": "camera_E3B0E274_F802_DCB4_41E4_DAEEA439D611",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "id": "playList_ED7B7E9B_F802_C47C_41E5_C907585581AA",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_ED7B7E9B_F802_C47C_41E5_C907585581AA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_ED7B7E9B_F802_C47C_41E5_C907585581AA, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_E91EE102_F6FB_6FCC_41A9_F3121F4739F3",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.98,
  "pitch": 10.45
 },
 "id": "panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.5,
  "pitch": 0
 },
 "id": "camera_ED9F2F66_F802_C4D5_41E6_62FF503F9D4A",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.96,
  "pitch": 0,
  "hfov": 96
 },
 "id": "camera_E36FC0FD_F802_DDB4_41EF_1A7BEB04A7F5",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.38,
  "pitch": 11.32,
  "hfov": 96
 },
 "id": "panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.96,
  "pitch": 0,
  "hfov": 130
 },
 "id": "camera_E218EFE3_F802_C3D3_41E9_1731D975ECDD",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.6,
  "pitch": 0
 },
 "id": "camera_EDC95EF9_F802_C5BC_41EA_5D60BD549744",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.08,
  "pitch": -13.66
 },
 "id": "panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.59,
  "pitch": 0
 },
 "id": "camera_ED346EDA_F802_C5FC_41DB_941B86272A32",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.35,
  "pitch": 0
 },
 "id": "camera_E3E4B1F7_F802_DFB4_41DB_14E157413B87",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.34,
  "pitch": 0
 },
 "id": "camera_E06CF2A2_F802_DC4D_41E8_38D0BE7D0EC2",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.28,
  "pitch": 0
 },
 "id": "camera_E33B1199_F802_DC7C_41E1_FC064374CAC8",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.59,
  "pitch": 0
 },
 "id": "camera_ED2FDECA_F802_C5DC_41EB_D898D2D05830",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_E12EC5A2_F3E2_702A_41E9_355CA6E2B813",
 "yaw": -28.56,
 "popupDistance": 100,
 "hfov": 3.02,
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E12EC5A2_F3E2_702A_41E9_355CA6E2B813_0_2.jpg",
    "width": 720,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.18,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.57,
  "pitch": 0
 },
 "id": "camera_EDC20EE9_F802_C5DF_41EC_4D5AC2BAEAD1",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "thumbnailUrl": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_t.jpg",
 "partial": false,
 "label": "kasir",
 "id": "panorama_F75C6641_F802_44CC_41D0_8BE544120B2D",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "cardboardMenu": "this.Menu_ED0EAEAB_F802_C45C_41ED_7F317DE77C2D",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67",
   "backwardYaw": 177.28,
   "class": "AdjacentPanorama",
   "yaw": -85.07,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0",
   "backwardYaw": -111.89,
   "class": "AdjacentPanorama",
   "yaw": -14.4,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F75CA641_F802_44CC_41D0_B05214514569",
  "this.overlay_F75CE641_F802_44CC_41E3_46E002FE9701",
  "this.overlay_F7632641_F802_44CC_41E9_5D6DCB7E3B4A",
  "this.popup_E85730E4_F47D_902F_41E9_747A4FCC28E3"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 800
  },
  {
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 5000,
   "targetPitch": 11.87,
   "targetStereographicFactor": 0
  }
 ],
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": 5.32,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.32,
  "pitch": 11.87
 },
 "id": "panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.04,
  "pitch": 0,
  "hfov": 130
 },
 "id": "camera_E281B051_F802_DCCC_41DC_AC5A115A4FAA",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.11,
  "pitch": 0
 },
 "id": "camera_E20EFFD4_F802_C3F4_41DC_2ECEE9C884F0",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.48,
  "pitch": 0,
  "hfov": 96
 },
 "id": "camera_E396D245_F802_DCD4_41E2_493F63DB342E",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "minHeight": 50,
 "toolTipPaddingTop": 7,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "minWidth": 100,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "transitionMode": "blending",
 "toolTipOpacity": 0.5,
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
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
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "paddingLeft": 0,
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "minWidth": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "layout": "absolute",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundImageUrl": "skin/Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7.png",
 "bottom": "0%",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "--- MENU"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "12.832%",
 "shadow": false
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingLeft": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 545,
 "contentOpaque": false,
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_14FBF305_1BED_F1EE_419A_A9F069FE2B28",
  "this.Image_EC538449_F802_C4DC_41EE_DA13A75C0B89"
 ],
 "paddingLeft": 0,
 "id": "Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
 "left": 25,
 "backgroundOpacity": 0,
 "width": 573,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": 10,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 116,
 "contentOpaque": false,
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
  "this.Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E"
 ],
 "paddingLeft": 0,
 "id": "Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--INFO"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "paddingLeft": 0,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
  "this.Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D"
 ],
 "paddingLeft": 0,
 "id": "Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "paddingLeft": 0,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "paddingLeft": 0,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
  "this.Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8"
 ],
 "paddingLeft": 0,
 "id": "Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--CONTACT"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "paddingLeft": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "bottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "class": "UIComponent",
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "visible": false,
 "data": {
  "name": "UIComponent20420"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 0
},
{
 "paddingLeft": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "backgroundColorDirection": "vertical",
 "backgroundColor": [],
 "visible": false,
 "data": {
  "name": "ZoomImage20421"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 0,
 "scaleMode": "custom"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "data": {
  "name": "CloseButton20422"
 },
 "paddingLeft": 5,
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "fontWeight": "normal",
 "shadowColor": "#000000",
 "right": 10,
 "borderRadius": 0,
 "paddingBottom": 5,
 "iconWidth": 20,
 "minWidth": 0,
 "iconHeight": 20,
 "verticalAlign": "middle",
 "iconColor": "#000000",
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "layout": "horizontal",
 "top": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "paddingRight": 5,
 "borderSize": 0,
 "pressedIconColor": "#888888",
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "rollOverIconColor": "#666666",
 "class": "CloseButton",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 5,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontColor": "#FFFFFF",
 "visible": false,
 "iconLineWidth": 5,
 "shadow": false,
 "fontStyle": "normal",
 "paddingTop": 5,
 "cursor": "hand",
 "minHeight": 0,
 "shadowBlurRadius": 6,
 "shadowSpread": 1
},
{
 "paddingLeft": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "height": 58,
 "maxHeight": 58,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "height": 58,
 "maxHeight": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadow": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76, this.camera_E20EFFD4_F802_C3F4_41DC_2ECEE9C884F0); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A483FA_F806_43BC_41EB_B256A1B19704",
   "pitch": -13.26,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 39.72,
   "hfov": 6.92,
   "distance": 100
  }
 ],
 "id": "overlay_F4C91B25_F802_4C54_41E9_B6D67F5C1055",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.26,
   "hfov": 6.92
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7, this.camera_E2A15070_F802_DCCC_41DB_FFED687D9BF6); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A32406_F806_4454_41DF_511E918ACC76",
   "pitch": -16.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -13.41,
   "hfov": 5.01,
   "distance": 50
  }
 ],
 "id": "overlay_F4897A3D_F802_4CB4_41AD_D02648FA6136",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.85,
   "hfov": 5.01
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7, this.camera_E2B32080_F802_DC4C_41B0_8C30EB54FCAF); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A39406_F806_4454_41DA_9F4203FA38EA",
   "pitch": -16.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 4.49,
   "hfov": 4.08,
   "distance": 50
  }
 ],
 "id": "overlay_F4899A3D_F802_4CB4_41E3_AEDE47E87235",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.89,
   "hfov": 4.08
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D, this.camera_E343609F_F802_DC74_41EC_8FCE02B1F809); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A3E407_F806_4454_41D3_AE913AB992C1",
   "pitch": -27.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 175.39,
   "hfov": 8.16,
   "distance": 100
  }
 ],
 "id": "overlay_F489AA3D_F802_4CB4_41C4_51F489D8E2B3",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.69,
   "hfov": 8.16
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76, this.camera_E2436F95_F802_C474_41EA_A135DB80FA3F); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A1A401_F806_444C_41D5_A1BED99A0D9E",
   "pitch": -34.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -83.95,
   "hfov": 9.1,
   "distance": 100
  }
 ],
 "id": "overlay_F5CE94FC_F803_C5B5_41EB_48FC75DA3A18",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.91,
   "hfov": 9.1
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39, this.camera_E24D0FA5_F802_C454_41E1_0D5AFB2C2B5E); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A21401_F806_444C_41EE_8BD074402777",
   "pitch": -28.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -162.51,
   "hfov": 8.49,
   "distance": 50
  }
 ],
 "id": "overlay_F5CE64FC_F803_C5B5_41E0_B82B94DDBCFB",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.39,
   "hfov": 8.49
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39, this.camera_E25D6FB4_F802_C3B5_41E2_C0898718FC86); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A24402_F806_444C_41CE_1DE8973CE0D7",
   "pitch": -28.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 172.01,
   "hfov": 9.87,
   "distance": 50
  }
 ],
 "id": "overlay_F5CE54FC_F803_C5B5_41EC_5160B2F2B2BB",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.32,
   "hfov": 9.87
  }
 ],
 "rollOverDisplay": false
},
{
 "blending": 0.1,
 "data": {
  "label": "Video"
 },
 "id": "overlay_F5CE34FC_F803_C5B5_41D6_F38DD7CE9DA2",
 "roll": -0.14,
 "class": "VideoPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/overlay_F5CE34FC_F803_C5B5_41D6_F38DD7CE9DA2_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 1.9,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "vfov": 11.45,
 "rotationY": 8,
 "rotationX": 2.76,
 "autoplay": true,
 "loop": false,
 "hfov": 20.11,
 "distance": 50,
 "yaw": 12.48,
 "enabledInCardboard": true,
 "video": {
  "mp4Url": "media/video_E91EE102_F6FB_6FCC_41A9_F3121F4739F3.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5CE84ED_F803_C5D4_41D8_E18613773125, this.camera_E319615A_F802_DCFD_41EA_018AA78F4DD0); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A8540D_F806_4454_41C1_A381D1A398A7",
   "pitch": -28.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -11.34,
   "hfov": 11.81,
   "distance": 50
  }
 ],
 "id": "overlay_F50AADB4_F802_47B5_41EB_D7FA2B163B07",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.82,
   "hfov": 11.81
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4C93B25_F802_4C54_41DE_E394D9B56404, this.camera_E33B1199_F802_DC7C_41E1_FC064374CAC8); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A8A40D_F806_4454_41B9_DBEC63419102",
   "pitch": -17.31,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -91.89,
   "hfov": 7.35,
   "distance": 50
  }
 ],
 "id": "overlay_F50ABDB4_F802_47B5_41DF_953BB3E0B18F",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.31,
   "hfov": 7.35
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3FC229C_F803_DC75_41EC_032EE01876B3, this.camera_E30EA13B_F802_DCBC_41C8_E760695D9DD9); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A8E40E_F806_4454_41D3_CA070BB4AFD7",
   "pitch": -20.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -169.33,
   "hfov": 9.28,
   "distance": 100
  }
 ],
 "id": "overlay_F50A8DB4_F802_47B5_41CA_A01F408E1D84",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.5,
   "hfov": 9.28
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9, this.camera_E328B17A_F802_DCBC_41E4_681F71E0A724); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A9440E_F806_4454_41D7_74F9AF3F0550",
   "pitch": -24.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 114.04,
   "hfov": 9.56,
   "distance": 100
  }
 ],
 "id": "overlay_ECE23E0A_F806_C45C_41DC_FB87F6B2B502",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.02,
   "hfov": 9.56
  }
 ],
 "rollOverDisplay": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "height": 58,
 "maxHeight": 58,
 "visible": false,
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "height": 58,
 "maxHeight": 58,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "backgroundOpacity": 0,
 "width": 49,
 "right": 30,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "bottom": 8,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "class": "IconButton",
 "maxWidth": 49,
 "horizontalAlign": "center",
 "height": 37,
 "maxHeight": 37,
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "height": 58,
 "maxHeight": 58,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadow": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9, this.camera_E386A235_F802_DCB4_41E0_F5A0525F6DDE); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A7E3FE_F806_43B4_41B0_3C896949D3D4",
   "pitch": -24.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -15.96,
   "hfov": 10.78,
   "distance": 50
  }
 ],
 "id": "overlay_F6A58A7D_F803_CCB4_41C2_9553CA50F117",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.3,
   "hfov": 10.78
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9, this.camera_E396D245_F802_DCD4_41E2_493F63DB342E); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A043FF_F806_43B4_41EE_357760ED6ED6",
   "pitch": -23.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 12.98,
   "hfov": 11.72,
   "distance": 50
  }
 ],
 "id": "overlay_F6A55A7D_F803_CCB4_41E3_3EEF783A9BE2",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_1_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.88,
   "hfov": 11.72
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E217DCDD_F3E6_B01E_41EA_E93D7D74677E, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_E23B58B6_F3E5_902A_41ED_EF3782B765A5, null, null, null, null, false)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A0B400_F806_444C_41E4_718AE36C0EE1",
   "pitch": -11.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.4,
   "hfov": 4.56,
   "distance": 100
  }
 ],
 "id": "overlay_F6A57A7D_F803_CCB4_4184_541610896B30",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.58,
   "hfov": 4.56
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E12EC5A2_F3E2_702A_41E9_355CA6E2B813, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_E95C4081_F465_B0E6_41E3_12B0EA47075C, null, null, null, null, false)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A11400_F806_444C_41EE_5DF0301B1D7B",
   "pitch": -12.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -28.56,
   "hfov": 3.5,
   "distance": 100
  }
 ],
 "id": "overlay_F6A53A7D_F803_CCB4_41BB_A073C2D80146",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.18,
   "hfov": 3.5
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0, this.camera_E3F4E216_F802_DC74_41BA_04550C2D4C38); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A15400_F806_444C_41E0_9D51ECEF12E9",
   "pitch": -27.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 177.04,
   "hfov": 7.28,
   "distance": 100
  }
 ],
 "id": "overlay_F6AAEA7D_F803_CCB4_41EC_E813AC8911B7",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_1_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.64,
   "hfov": 7.28
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D, this.camera_EDEAEF28_F802_C45C_41E7_B1197C1DFDB5); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AD6409_F806_445C_4194_ACFAD26288F0",
   "pitch": -38.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 38.66,
   "hfov": 6.33,
   "distance": 50
  }
 ],
 "id": "overlay_F4D78B16_F802_4C74_41E6_5BC0113BE9B0",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.42,
   "hfov": 6.33
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D, this.camera_EDF1FF28_F802_C45C_41C1_4E3E4EBA8B80); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1ADC40A_F806_445C_41EC_C07D6AA2653E",
   "pitch": -37.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -23.04,
   "hfov": 5.45,
   "distance": 50
  }
 ],
 "id": "overlay_F4D7AB16_F802_4C74_41E3_DF461E8FC293",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.56,
   "hfov": 5.45
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0, this.camera_EDDD0F18_F802_C47C_41DB_BEFD1C4B36B0); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "yaw": -163.48,
   "hfov": 12.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_1_HS_2_0.png",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.13
  }
 ],
 "id": "overlay_F4D7CB16_F802_4C74_4188_72F6ABB41AA7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_1_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.13,
   "hfov": 12.99
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5CE84ED_F803_C5D4_41D8_E18613773125, this.camera_E3B0E274_F802_DCB4_41E4_DAEEA439D611); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A12403_F806_444C_41B2_365665488BBF",
   "pitch": -24.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.78,
   "hfov": 8.71,
   "distance": 50
  }
 ],
 "id": "overlay_F466D934_F803_CCB5_41C7_195584204F74",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.11,
   "hfov": 8.71
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5CE84ED_F803_C5D4_41D8_E18613773125, this.camera_E042E283_F802_DC4C_41EE_4C21D7964C47); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A18403_F806_444C_41E2_A8990E8E0DF7",
   "pitch": -24.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -17.6,
   "hfov": 8.05,
   "distance": 50
  }
 ],
 "id": "overlay_F466C934_F803_CCB5_41D2_FC1266D1D41D",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.71,
   "hfov": 8.05
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7, this.camera_E3A15264_F802_DCD4_41A6_AA048237123F); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A1C404_F806_4454_4180_A631BB498190",
   "pitch": -34.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 175.43,
   "hfov": 7.58,
   "distance": 100
  }
 ],
 "id": "overlay_F466A934_F803_CCB5_41E5_C2BEA910A0B0",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.1,
   "hfov": 7.58
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C, this.camera_E052D283_F802_DC4C_41D6_759E29067319); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AC4407_F806_4454_41D4_CE4808701500",
   "pitch": -23.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 6.78,
   "hfov": 12.47,
   "distance": 100
  }
 ],
 "id": "overlay_F57832B9_F802_5DBC_41A5_14B31433E7D4",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.95,
   "hfov": 12.47
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4D79B16_F802_4C74_41EB_D411407B63AB, this.camera_E0623293_F802_DC4C_41EB_FDEE76AE100F); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1ACA408_F806_445C_41E0_EB58AE3CA323",
   "pitch": -19.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 175.66,
   "hfov": 5.41,
   "distance": 50
  }
 ],
 "id": "overlay_F57822B9_F802_5DBC_41EE_ED67E1B268BF",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.48,
   "hfov": 5.41
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4D79B16_F802_4C74_41EB_D411407B63AB, this.camera_E06CF2A2_F802_DC4D_41E8_38D0BE7D0EC2); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AD1408_F806_445C_41D9_79008FA50380",
   "pitch": -20.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -158.17,
   "hfov": 5.75,
   "distance": 50
  }
 ],
 "id": "overlay_F57842B9_F802_5DBC_41D6_93F13F80AACF",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.52,
   "hfov": 5.75
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9, this.camera_E37F011C_F802_DC74_41E0_0F648E5B4076); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A5A3FB_F806_43BC_41EB_9F3F65658774",
   "pitch": -35.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 37.98,
   "hfov": 9.2,
   "distance": 50
  }
 ],
 "id": "overlay_F3D2F156_F802_3CF4_41D8_B35A633230BE",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.03,
   "hfov": 9.2
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01, this.camera_EDD61F09_F802_C45C_41EF_16AF92F72DED); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AA3411_F806_444C_41E8_9B1050C00C5A",
   "pitch": -27.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -9.3,
   "hfov": 9.52,
   "distance": 100
  }
 ],
 "id": "overlay_F59B171A_F802_C47C_41E2_5A3FBDDD35CF",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.68,
   "hfov": 9.52
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67, this.camera_EDC95EF9_F802_C5BC_41EA_5D60BD549744); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AA8412_F806_444C_41EE_EF5D32020380",
   "pitch": -27.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 172.74,
   "hfov": 5.28,
   "distance": 100
  }
 ],
 "id": "overlay_F59B371A_F802_C47C_41D3_B1334F23E5FC",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.08,
   "hfov": 5.28
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F59B771A_F802_C47C_41EE_11B69F593617, this.camera_E27E8FD4_F802_C3F4_41E8_F89CAF806D70); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A603FB_F806_43B3_41CF_BAF411DE158D",
   "pitch": -25.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.4,
   "hfov": 6.41,
   "distance": 100
  }
 ],
 "id": "overlay_F3EC3A01_F803_CC4C_41D4_A8A3B04FF095",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.53,
   "hfov": 6.41
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F75C6641_F802_44CC_41D0_8BE544120B2D, this.camera_E26CFFC4_F802_C3D4_41E9_816D468C723E); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A673FC_F806_43B4_41E6_CE6B69643831",
   "pitch": -29.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 177.28,
   "hfov": 11.61,
   "distance": 100
  }
 ],
 "id": "overlay_F3EDCA01_F803_CC4C_41C2_791C2374838D",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.01,
   "hfov": 11.61
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01, this.camera_E3D561D7_F802_DFF3_41E8_FE8DB2787F90); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A93410_F806_444C_41B1_6ADCBA06C1E1",
   "pitch": -33.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -157.5,
   "hfov": 10.62,
   "distance": 50
  }
 ],
 "id": "overlay_F570BF68_F802_44DD_41E1_55F3E48CB736",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_1_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.86,
   "hfov": 10.62
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3FC229C_F803_DC75_41EC_032EE01876B3, this.camera_E3E4B1F7_F802_DFB4_41DB_14E157413B87); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A99410_F806_444C_41EB_C3A910D5DE93",
   "pitch": -16.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -12.55,
   "hfov": 11.64,
   "distance": 100
  }
 ],
 "id": "overlay_F5709F68_F802_44DD_41EB_DCE5696068E6",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.15,
   "hfov": 11.64
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9, this.camera_E3CB71B8_F802_DFBC_4194_8E0966FA4C08); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A9F411_F806_444C_41E4_CB2B775F8083",
   "pitch": -17.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 60.94,
   "hfov": 7.84,
   "distance": 100
  }
 ],
 "id": "overlay_ECF49F28_F802_C45C_41E9_7981D03D1957",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.88,
   "hfov": 7.84
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5704F68_F802_44DD_41E1_C10892E78220, this.camera_ED9F2F66_F802_C4D5_41E6_62FF503F9D4A); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AAC412_F806_444C_41E9_CCDF87B35039",
   "pitch": -35.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 42.49,
   "hfov": 9.2,
   "distance": 50
  }
 ],
 "id": "overlay_F5678FD5_F802_C3F4_41D5_F0D835C5C4A5",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.13,
   "hfov": 9.2
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F59B771A_F802_C47C_41EE_11B69F593617, this.camera_ED913F57_F802_C4F4_41AF_DB27AF612F77); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AB7413_F806_444C_41DC_71FD455A9FF5",
   "pitch": -28.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 174.32,
   "hfov": 9.83,
   "distance": 100
  }
 ],
 "id": "overlay_F5679FD5_F802_C3F4_41ED_CF6B0A093489",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.23,
   "hfov": 9.83
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39, this.camera_EDC20EE9_F802_C5DF_41EC_4D5AC2BAEAD1); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A22404_F806_4454_41BD_C3EDD2FFF715",
   "pitch": -25.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -7.64,
   "hfov": 11.17,
   "distance": 100
  }
 ],
 "id": "overlay_F47CC1D0_F802_3FCC_41E3_F3ADC41DFD40",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.82,
   "hfov": 11.17
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C, this.camera_ED2FDECA_F802_C5DC_41EB_D898D2D05830); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A29405_F806_4454_41E5_A4BC3004A15D",
   "pitch": -20.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 161.85,
   "hfov": 7.21,
   "distance": 50
  }
 ],
 "id": "overlay_F47CD1D0_F802_3FCC_41E9_942BF35A7E76",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.55,
   "hfov": 7.21
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C, this.camera_ED346EDA_F802_C5FC_41DB_941B86272A32); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A2C405_F806_4454_41D3_AC164E48AAF1",
   "pitch": -20.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.24,
   "hfov": 7.19,
   "distance": 50
  }
 ],
 "id": "overlay_F47CE1D0_F802_3FCC_41EC_4624E457C6D8",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.82,
   "hfov": 7.19
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76, this.camera_E34D20BE_F802_DDB4_41E4_46CEEAC84108); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A6C3FD_F806_43B4_41A7_7FB681FE3C57",
   "pitch": -18.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 73.59,
   "hfov": 7.84,
   "distance": 100
  }
 ],
 "id": "overlay_F3FDD29C_F803_DC75_41DD_9F222D1E9319",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.85,
   "hfov": 7.84
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5704F68_F802_44DD_41E1_C10892E78220, this.camera_E35CA0DD_F802_DDF7_41E3_8D11E4EF5A62); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A753FD_F806_43B4_41E1_2972C08126D8",
   "pitch": -18.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -98.65,
   "hfov": 9.18,
   "distance": 100
  }
 ],
 "id": "overlay_F3FDF29C_F803_DC75_41D3_BEB29729295A",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.54,
   "hfov": 9.18
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9, this.camera_E36FC0FD_F802_DDB4_41EF_1A7BEB04A7F5); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A783FE_F806_43B4_41C5_A1F6F42CBB6B",
   "pitch": -20.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 171.82,
   "hfov": 6.64,
   "distance": 100
  }
 ],
 "id": "overlay_F3FDE29C_F803_DC75_41E3_B021A47E6E96",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.95,
   "hfov": 6.64
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB, this.camera_E218EFE3_F802_C3D3_41E9_1731D975ECDD); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1BB43F4_F806_43B4_4189_A1DC5391E3B8",
   "pitch": -16.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.94,
   "hfov": 6.81,
   "distance": 100
  }
 ],
 "id": "overlay_F42211E6_F802_3FD4_41E3_35BB688A5F93",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.52,
   "hfov": 6.81
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4D79B16_F802_4C74_41EB_D411407B63AB, this.camera_E23AD003_F802_DC4C_41DD_C34599B018AD); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1BBC3F7_F806_43B4_41E9_53B63845E14B",
   "pitch": -6.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 63.64,
   "hfov": 5.44,
   "distance": 50
  }
 ],
 "id": "overlay_F42241E6_F802_3FD4_41C3_F3065E4DC0E1",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_1_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.88,
   "hfov": 5.44
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F75C6641_F802_44CC_41D0_8BE544120B2D, this.camera_E2281FF3_F802_C3CC_41E4_DBBB9C1F5CB9); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A433F9_F806_43BC_41E2_7309967B5FD8",
   "pitch": -11.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -111.89,
   "hfov": 6.38,
   "distance": 50
  }
 ],
 "id": "overlay_F42251E6_F802_3FD4_41E0_AAEF3F39D3CE",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_1_HS_5_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.43,
   "hfov": 6.38
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "PhotoPlayList",
 "id": "album_D0876747_F4A5_F06A_41EB_8A4C6A38B393_AlbumPlayList",
 "items": [
  {
   "media": "this.album_D0876747_F4A5_F06A_41EB_8A4C6A38B393_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "easing": "linear",
    "duration": 5000,
    "targetPosition": {
     "x": "0.44",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.64"
    }
   }
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3FC229C_F803_DC75_41EC_032EE01876B3, this.camera_E2913060_F802_DCCD_41D5_7FB064CFDF52); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AE540A_F806_445C_41C9_AB3689EA23FC",
   "pitch": -11.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.04,
   "hfov": 9.84,
   "distance": 100
  }
 ],
 "id": "overlay_F5B0743E_F802_44B5_41CA_4D1AE7898787",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.43,
   "hfov": 9.84
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3F4F4A3_F802_4453_41DF_D141124859DB, this.camera_E2CA4012_F802_DC4C_41B0_797DB785DA55); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AEA40A_F806_445C_41E6_4918A98AB21B",
   "pitch": -20.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 93.36,
   "hfov": 10.39,
   "distance": 50
  }
 ],
 "id": "overlay_F5B0543E_F802_44B5_41D9_4218E7FE7E4A",
 "data": {
  "label": "Arrow 06b Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_1_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.81,
   "hfov": 10.39
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7, this.camera_E2E47031_F802_DC4F_41E8_747F9A8793C4); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AEE40B_F806_4453_41B4_4042F5C79B9D",
   "pitch": -19.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.87,
   "hfov": 11.55,
   "distance": 50
  }
 ],
 "id": "overlay_F5B0A43E_F802_44B5_41A5_A7491BFF8479",
 "data": {
  "label": "Arrow 06b Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_2_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.62,
   "hfov": 11.55
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB, this.camera_E281B051_F802_DCCC_41DC_AC5A115A4FAA); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AF440B_F806_4453_41E0_F72C5947A5FA",
   "pitch": -18.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 178.52,
   "hfov": 7.38,
   "distance": 100
  }
 ],
 "id": "overlay_F5B0B43E_F802_44B5_41ED_63E85DB3DEF7",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.03,
   "hfov": 7.38
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76, this.camera_E2F78041_F802_DCCC_41B7_9CFD497372E7); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AF940C_F806_4455_41E9_393F48B5CC83",
   "pitch": -15.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 46.78,
   "hfov": 12.96,
   "distance": 100
  }
 ],
 "id": "overlay_EBED357A_F806_44BD_41E2_96CF32870BC8",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.07,
   "hfov": 12.96
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5704F68_F802_44DD_41E1_C10892E78220, this.camera_E2D5F022_F802_DC4C_41DA_226658DBB3B4); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1AFE40C_F806_4455_41EA_60D7C7F6E088",
   "pitch": -18.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.94,
   "hfov": 11.52,
   "distance": 100
  }
 ],
 "id": "overlay_EB7D4DF1_F801_C7CC_41E3_7E34554A6BD2",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_5_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.17,
   "hfov": 11.52
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9, this.camera_EDAB0F76_F802_C4B4_41E6_141AB1DD6AC3); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A4F3FA_F806_43BC_41CE_4287C11542AC",
   "pitch": -37.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 120.46,
   "hfov": 9.1,
   "distance": 50
  }
 ],
 "id": "overlay_F3F4D4A3_F802_4453_41C9_90F887AAC44A",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_1_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.97,
   "hfov": 9.1
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9, this.camera_EDB62F86_F802_C454_41DA_67326BBF6CD9); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A543FA_F806_43BD_41DF_DA95F8A75527",
   "pitch": -34.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 47.93,
   "hfov": 7.39,
   "distance": 50
  }
 ],
 "id": "overlay_F3F4C4A3_F802_4453_41E4_6DFF66258749",
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_1_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.03,
   "hfov": 7.39
  }
 ],
 "rollOverDisplay": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 165,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "propagateClick": true,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "class": "IconButton",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 50,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "width": "14%",
 "right": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "propagateClick": true,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "class": "IconButton",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 50,
 "shadow": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E85730E4_F47D_902F_41E9_747A4FCC28E3, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, null, false)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A8040F_F806_4454_41D9_2ACB2FC3DC9F",
   "pitch": -9.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -167.31,
   "hfov": 2.06,
   "distance": 100
  }
 ],
 "id": "overlay_F75CA641_F802_44CC_41D0_B05214514569",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.22,
   "hfov": 2.06
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0, this.camera_ED8A4F47_F802_C4D4_41ED_BDDAAB50912F); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A8640F_F806_4454_41D8_B1367672FB57",
   "pitch": -6.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -14.4,
   "hfov": 3.6,
   "distance": 100
  }
 ],
 "id": "overlay_F75CE641_F802_44CC_41E3_46E002FE9701",
 "data": {
  "label": "Circle Point 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.42,
   "hfov": 3.6
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67, this.camera_EDFF4F37_F802_C4B3_41ED_C93A9B402F3D); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1A8A410_F806_444C_4193_25D5D3EE793D",
   "pitch": -6.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.07,
   "hfov": 5.34,
   "distance": 100
  }
 ],
 "id": "overlay_F7632641_F802_44CC_41E9_5D6DCB7E3B4A",
 "data": {
  "label": "Arrow 06c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.01,
   "hfov": 5.34
  }
 ],
 "rollOverDisplay": false
},
{
 "paddingLeft": 0,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "propagateClick": true,
 "bottom": 53,
 "paddingRight": 0,
 "borderSize": 0,
 "class": "Image",
 "maxWidth": 3000,
 "horizontalAlign": "center",
 "height": 2,
 "maxHeight": 2,
 "data": {
  "name": "white line"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_outside",
 "shadow": false
},
{
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "paddingLeft": 30,
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 1199,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 51,
 "contentOpaque": false,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingLeft": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "layout": "horizontal",
 "minWidth": 1,
 "overflow": "visible",
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 110,
 "contentOpaque": false,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "paddingLeft": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "layout": "vertical",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "center",
 "gap": 3,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "85.959%",
 "shadow": false
},
{
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_14FBF305_1BED_F1EE_419A_A9F069FE2B28",
 "left": 5,
 "backgroundOpacity": 1,
 "width": 10,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.5,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": 24,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#A67C52"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "height": 90,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "color block"
 },
 "shadow": true,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowBlurRadius": 10,
 "shadowSpread": 1
},
{
 "paddingLeft": 0,
 "id": "Image_EC538449_F802_C4DC_41EE_DA13A75C0B89",
 "left": "2.62%",
 "backgroundOpacity": 0,
 "width": "46.597%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "url": "skin/Image_EC538449_F802_C4DC_41EE_DA13A75C0B89.png",
 "propagateClick": false,
 "top": "18.97%",
 "paddingRight": 0,
 "borderSize": 0,
 "class": "Image",
 "maxWidth": 650,
 "horizontalAlign": "center",
 "height": "60.345%",
 "maxHeight": 243,
 "data": {
  "name": "Image14938"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_inside",
 "shadow": false
},
{
 "children": [
  "this.Container_04FF2C2C_1216_7593_4195_88C3C7049763",
  "this.Container_04FF0C2C_1216_7593_419A_8AC354592A51"
 ],
 "paddingLeft": 0,
 "id": "Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
 "left": "10%",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "layout": "horizontal",
 "minWidth": 1,
 "overflow": "scroll",
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "5%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A"
 ],
 "paddingLeft": 0,
 "id": "Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E",
 "left": "10%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "right": "10%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "layout": "vertical",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "5%",
 "bottom": "84.02%",
 "paddingRight": 20,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "shadow": false
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "paddingLeft": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "layout": "vertical",
 "minWidth": 1,
 "overflow": "visible",
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "7%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
  "this.Container_1813FA3E_1663_8BF1_4180_5027A2A87866"
 ],
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
 "left": "10%",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "layout": "horizontal",
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "5%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1"
 ],
 "paddingLeft": 0,
 "id": "Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D",
 "left": "10%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "10%",
 "minWidth": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "layout": "vertical",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "5%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "shadow": false
},
{
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "layout": "vertical",
 "minWidth": 1,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "7%",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "layout": "vertical",
 "minWidth": 1,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "7%",
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 10,
 "minHeight": 1,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
  "this.Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8"
 ],
 "paddingLeft": 0,
 "id": "Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
 "left": "10%",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "layout": "horizontal",
 "minWidth": 1,
 "overflow": "scroll",
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "bottom": "5%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4"
 ],
 "paddingLeft": 0,
 "id": "Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8",
 "left": "10%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "right": "10%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "layout": "vertical",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "5%",
 "bottom": "84.67%",
 "paddingRight": 20,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "shadow": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F4C93B25_F802_4C54_41DE_E394D9B56404_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A483FA_F806_43BC_41EB_B256A1B19704",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A32406_F806_4454_41DF_511E918ACC76",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A39406_F806_4454_41DA_9F4203FA38EA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F4896A3D_F802_4CB4_41BC_41C3B071E48C_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A3E407_F806_4454_41D3_AE913AB992C1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A1A401_F806_444C_41D5_A1BED99A0D9E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A21401_F806_444C_41EE_8BD074402777",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5CE84ED_F803_C5D4_41D8_E18613773125_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A24402_F806_444C_41CE_1DE8973CE0D7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A8540D_F806_4454_41C1_A381D1A398A7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A8A40D_F806_4454_41B9_DBEC63419102",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A8E40E_F806_4454_41D3_CA070BB4AFD7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F50A5DB4_F802_47B5_41E5_0E61A75AEF76_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A9440E_F806_4454_41D7_74F9AF3F0550",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A7E3FE_F806_43B4_41B0_3C896949D3D4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A043FF_F806_43B4_41EE_357760ED6ED6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A0B400_F806_444C_41E4_718AE36C0EE1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A11400_F806_444C_41EE_5DF0301B1D7B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F6A5DA7D_F803_CCB4_41E9_F875E06060FB_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A15400_F806_444C_41E0_9D51ECEF12E9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AD6409_F806_445C_4194_ACFAD26288F0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F4D79B16_F802_4C74_41EB_D411407B63AB_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1ADC40A_F806_445C_41EC_C07D6AA2653E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A12403_F806_444C_41B2_365665488BBF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A18403_F806_444C_41E2_A8990E8E0DF7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F466F934_F803_CCB5_41D5_C492F4A5EE39_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A1C404_F806_4454_4180_A631BB498190",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AC4407_F806_4454_41D4_CE4808701500",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1ACA408_F806_445C_41E0_EB58AE3CA323",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F57812B9_F802_5DBC_41E4_95D9C25CCB2D_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AD1408_F806_445C_41D9_79008FA50380",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3D2D156_F802_3CF4_41E3_D9421A6E30F7_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A5A3FB_F806_43BC_41EB_9F3F65658774",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AA3411_F806_444C_41E8_9B1050C00C5A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F59B771A_F802_C47C_41EE_11B69F593617_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AA8412_F806_444C_41EE_EF5D32020380",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A603FB_F806_43B3_41CF_BAF411DE158D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3EC2A01_F803_CC4C_41DE_CE8B3E7DBB67_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A673FC_F806_43B4_41E6_CE6B69643831",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A93410_F806_444C_41B1_6ADCBA06C1E1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A99410_F806_444C_41EB_C3A910D5DE93",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5704F68_F802_44DD_41E1_C10892E78220_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A9F411_F806_444C_41E4_CB2B775F8083",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AAC412_F806_444C_41E9_CCDF87B35039",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F567FFD5_F802_C3F4_41E1_B56B58BB8C01_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AB7413_F806_444C_41DC_71FD455A9FF5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A22404_F806_4454_41BD_C3EDD2FFF715",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A29405_F806_4454_41E5_A4BC3004A15D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F47CB1D0_F802_3FCC_41EC_641FCA962BA7_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A2C405_F806_4454_41D3_AC164E48AAF1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A6C3FD_F806_43B4_41A7_7FB681FE3C57",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A753FD_F806_43B4_41E1_2972C08126D8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3FC229C_F803_DC75_41EC_032EE01876B3_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A783FE_F806_43B4_41C5_A1F6F42CBB6B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1BB43F4_F806_43B4_4189_A1DC5391E3B8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_1_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1BBC3F7_F806_43B4_41E9_53B63845E14B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F422D1E6_F802_3FD4_41B1_BCF1124B1AF0_1_HS_5_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A433F9_F806_43BC_41E2_7309967B5FD8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AE540A_F806_445C_41C9_AB3689EA23FC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AEA40A_F806_445C_41E6_4918A98AB21B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_2_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AEE40B_F806_4453_41B4_4042F5C79B9D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AF440B_F806_4453_41E0_F72C5947A5FA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AF940C_F806_4455_41E9_393F48B5CC83",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5B0143E_F802_44B5_41D7_FA326685CCB9_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1AFE40C_F806_4455_41EA_60D7C7F6E088",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A4F3FA_F806_43BC_41CE_4287C11542AC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3F4F4A3_F802_4453_41DF_D141124859DB_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A543FA_F806_43BD_41DF_DA95F8A75527",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A8040F_F806_4454_41D9_2ACB2FC3DC9F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A8640F_F806_4454_41D8_B1367672FB57",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F75C6641_F802_44CC_41D0_8BE544120B2D_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E1A8A410_F806_444C_4193_25D5D3EE793D",
 "frameDuration": 41
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "shadowBlurRadius": 15,
 "paddingLeft": 0,
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "width": 120,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "rollOverBackgroundOpacity": 0,
 "iconHeight": 0,
 "verticalAlign": "middle",
 "iconWidth": 0,
 "layout": "horizontal",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "pressedBackgroundOpacity": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 14,
 "label": "ABOUT",
 "rollOverFontColor": "#DB9B4D",
 "pressedFontColor": "#000000",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "height": 40,
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "shadowBlurRadius": 15,
 "paddingLeft": 0,
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "backgroundOpacity": 0,
 "width": 140,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "rollOverBackgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "layout": "horizontal",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "pressedBackgroundOpacity": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 14,
 "label": "PANORAMA LIST",
 "rollOverFontColor": "#DB9B4D",
 "pressedFontColor": "#000000",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "height": 40,
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button panorama list"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "shadowBlurRadius": 15,
 "paddingLeft": 0,
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "backgroundOpacity": 0,
 "width": 100,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "rollOverBackgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "layout": "horizontal",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "pressedBackgroundOpacity": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 14,
 "label": "LOCATION",
 "rollOverFontColor": "#DB9B4D",
 "pressedFontColor": "#000000",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, true, 0, null, null, false)",
 "height": 40,
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button location"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "shadowBlurRadius": 15,
 "paddingLeft": 0,
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "backgroundOpacity": 0,
 "width": 113,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "rollOverBackgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "layout": "horizontal",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "pressedBackgroundOpacity": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 14,
 "label": "FLOORPLAN",
 "rollOverFontColor": "#DB9B4D",
 "pressedFontColor": "#000000",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "height": 40,
 "fontColor": "#FFFFFF",
 "visible": false,
 "data": {
  "name": "Button floorplan"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "shadowBlurRadius": 15,
 "paddingLeft": 0,
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "backgroundOpacity": 0,
 "width": 122,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "rollOverBackgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "layout": "horizontal",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "pressedBackgroundOpacity": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 14,
 "label": "PHOTOALBUM",
 "rollOverFontColor": "#DB9B4D",
 "pressedFontColor": "#000000",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "height": 40,
 "fontColor": "#FFFFFF",
 "visible": false,
 "data": {
  "name": "Button photoalbum"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "shadowBlurRadius": 15,
 "paddingLeft": 0,
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "backgroundOpacity": 0,
 "width": 100,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "rollOverBackgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "layout": "horizontal",
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "pressedBackgroundOpacity": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 14,
 "label": "CONTACT",
 "rollOverFontColor": "#DB9B4D",
 "pressedFontColor": "#000000",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, true, 0, null, null, false)",
 "height": 40,
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button contact"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "shadowSpread": 1
},
{
 "paddingLeft": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "class": "IconButton",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "height": 60,
 "maxHeight": 60,
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "height": 58,
 "maxHeight": 58,
 "visible": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "height": 58,
 "maxHeight": 58,
 "visible": false,
 "data": {
  "name": "IconButton FB"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadow": false
},
{
 "children": [
  "this.Image_04FF3C2C_1216_7593_41AF_91EA0BBCCE77",
  "this.Image_E4CC5814_F61C_9DF5_41EE_C51506D7C04F"
 ],
 "paddingLeft": 10,
 "height": "100%",
 "id": "Container_04FF2C2C_1216_7593_4195_88C3C7049763",
 "backgroundOpacity": 1,
 "width": "50%",
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 10,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "children": [
  "this.Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
  "this.Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
  "this.Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167"
 ],
 "paddingLeft": 60,
 "height": "100%",
 "id": "Container_04FF0C2C_1216_7593_419A_8AC354592A51",
 "backgroundOpacity": 1,
 "width": "50%",
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "layout": "vertical",
 "minWidth": 450,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 60,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "scrollBarOpacity": 0.51,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_rollover.png",
 "borderSize": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A.png",
 "class": "IconButton",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_pressed.png",
 "height": "75%",
 "maxHeight": 60,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 50,
 "shadow": false
},
{
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "paddingLeft": 0,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 90,
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "itemVerticalAlign": "top",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "width": "100%",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingBottom": 70,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "minWidth": 1,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "verticalAlign": "middle",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "selectedItemLabelFontColor": "#987B55",
 "itemPaddingBottom": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "scrollBarColor": "#987B55",
 "itemLabelFontStyle": "normal",
 "paddingRight": 70,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "ThumbnailGrid",
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemLabelFontFamily": "Times New Roman",
 "rollOverItemThumbnailShadowColor": "#987B55",
 "height": "100%",
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "itemThumbnailWidth": 220,
 "shadow": false,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontColor": "#987B55",
 "paddingLeft": 70,
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": true,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "horizontalAlign": "center",
 "itemLabelFontWeight": "bold",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 156,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemMinWidth": 50,
 "minHeight": 1
},
{
 "children": [
  "this.WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E"
 ],
 "paddingLeft": 10,
 "height": "100%",
 "id": "Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
 "backgroundOpacity": 1,
 "width": "70%",
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 10,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "children": [
  "this.Container_18121A3E_1663_8BF1_41B4_AB4C2B45EFFF",
  "this.Container_18120A3E_1663_8BF1_419D_69232EA5FB3D",
  "this.Container_18128A3F_1663_8BEF_41B6_51D1938FA48A"
 ],
 "paddingLeft": 40,
 "height": "100%",
 "id": "Container_1813FA3E_1663_8BF1_4180_5027A2A87866",
 "backgroundOpacity": 1,
 "width": "30%",
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "layout": "vertical",
 "minWidth": 400,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 40,
 "minHeight": 1,
 "scrollBarOpacity": 0.51,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_rollover.png",
 "borderSize": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1.png",
 "class": "IconButton",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_pressed.png",
 "height": "75%",
 "maxHeight": 60,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 50,
 "shadow": false
},
{
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "paddingLeft": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 90,
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "minWidth": 1,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "transitionMode": "blending",
 "toolTipOpacity": 1,
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "shadow": false,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
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
  "name": "Floor Plan"
 }
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "paddingLeft": 0,
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "children": [
  "this.Image_0DEC8FEC_12FA_D26C_4162_7A2BAB1DA270",
  "this.Image_EF84D349_F61C_925C_41EC_119C0E13E9CE",
  "this.Image_EDC8CE04_F802_4454_41E6_CA7088E38B53"
 ],
 "paddingLeft": 10,
 "height": "100%",
 "id": "Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
 "backgroundOpacity": 1,
 "width": "85%",
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 10,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "children": [
  "this.Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
  "this.Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
  "this.Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F"
 ],
 "paddingLeft": 50,
 "height": "100%",
 "id": "Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8",
 "backgroundOpacity": 1,
 "width": "50%",
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "layout": "vertical",
 "minWidth": 460,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "scrollBarOpacity": 0.51,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4.png",
 "class": "IconButton",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_pressed.png",
 "height": 60,
 "maxHeight": 60,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 50,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "Image_04FF3C2C_1216_7593_41AF_91EA0BBCCE77",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "bottom",
 "url": "skin/Image_04FF3C2C_1216_7593_41AF_91EA0BBCCE77.jpg",
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "class": "Image",
 "maxWidth": 2000,
 "horizontalAlign": "center",
 "height": "100%",
 "maxHeight": 1000,
 "visible": false,
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_outside",
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "Image_E4CC5814_F61C_9DF5_41EE_C51506D7C04F",
 "backgroundOpacity": 0,
 "width": "94.541%",
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "url": "skin/Image_E4CC5814_F61C_9DF5_41EE_C51506D7C04F.jpg",
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "class": "Image",
 "maxWidth": 996,
 "horizontalAlign": "center",
 "height": "100%",
 "maxHeight": 1204,
 "data": {
  "name": "Image9406"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_inside",
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "gap": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "children": [
  "this.Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
  "this.Container_0BD17D93_1236_F6B5_4193_247950F46092",
  "this.Container_04FFDC2C_1216_7593_41A7_64E2588509FB"
 ],
 "paddingLeft": 0,
 "height": "100%",
 "id": "Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "vertical",
 "minWidth": 100,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "minHeight": 300,
 "scrollBarOpacity": 0.79,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "layout": "horizontal",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 40,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "paddingLeft": 80,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Otama.ep';\"><B>PANORAMA LIST:</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingTop": 36,
 "minHeight": 100,
 "height": "100%",
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": 60,
 "right": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 50,
 "verticalAlign": "top",
 "transparencyActive": true,
 "propagateClick": true,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.png",
 "class": "IconButton",
 "maxWidth": 60,
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.png",
 "height": 60,
 "maxHeight": 60,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 50
},
{
 "insetBorder": false,
 "paddingLeft": 0,
 "id": "WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E",
 "left": "0%",
 "backgroundOpacity": 1,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4923744717485!2d110.3368493!3d-7.8434231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57eebc818f5b%3A0xdd1d9708287c31bc!2sMuseumKu%20Gerabah%20Timbul%20Raharjo%20Kasongan!5e0!3m2!1sid!2sid!4v1696353540453!5m2!1sid!2sid",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "class": "WebFrame",
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "WebFrame5113"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "id": "Container_18121A3E_1663_8BF1_41B4_AB4C2B45EFFF",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "gap": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "children": [
  "this.Container_00680EBB_1C6A_B01A_41B7_CA8C74B88FBB",
  "this.Container_18124A3F_1663_8BEF_4167_4F797ED9B565",
  "this.HTMLText_18127A3F_1663_8BEF_4175_B0DF8CE38BFE",
  "this.Button_18126A3F_1663_8BEF_41A4_B0EDA1A5F4E3"
 ],
 "paddingLeft": 0,
 "height": "100%",
 "id": "Container_18120A3E_1663_8BF1_419D_69232EA5FB3D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "borderRadius": 0,
 "layout": "vertical",
 "minWidth": 100,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "minHeight": 520,
 "scrollBarOpacity": 0.79,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "Container_18128A3F_1663_8BEF_41B6_51D1938FA48A",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "layout": "horizontal",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 40,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "paddingLeft": 80,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.58vh;font-family:'Cinzel Bold';\"><B>floorplan/</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingTop": 36,
 "minHeight": 100,
 "height": "100%",
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": 60,
 "right": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 50,
 "verticalAlign": "top",
 "transparencyActive": true,
 "propagateClick": true,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.png",
 "class": "IconButton",
 "maxWidth": 60,
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.png",
 "height": 60,
 "maxHeight": 60,
 "data": {
  "name": "IconButton54739"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 50
},
{
 "minHeight": 1,
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "minWidth": 1,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "transitionMode": "blending",
 "toolTipOpacity": 1,
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
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
  "name": "Viewer photoalbum 1"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "width": 60,
 "right": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 50,
 "verticalAlign": "top",
 "transparencyActive": true,
 "propagateClick": true,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.png",
 "class": "IconButton",
 "maxWidth": 60,
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.png",
 "height": 60,
 "maxHeight": 60,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 50
},
{
 "paddingLeft": 0,
 "id": "Image_0DEC8FEC_12FA_D26C_4162_7A2BAB1DA270",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "url": "skin/Image_0DEC8FEC_12FA_D26C_4162_7A2BAB1DA270.jpg",
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "class": "Image",
 "maxWidth": 2000,
 "horizontalAlign": "right",
 "height": "100%",
 "maxHeight": 1000,
 "visible": false,
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_outside",
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "Image_EF84D349_F61C_925C_41EC_119C0E13E9CE",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "url": "skin/Image_EF84D349_F61C_925C_41EC_119C0E13E9CE.JPG",
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "class": "Image",
 "maxWidth": 926,
 "horizontalAlign": "center",
 "height": "100%",
 "maxHeight": 1294,
 "visible": false,
 "data": {
  "name": "Image11886"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_inside",
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "Image_EDC8CE04_F802_4454_41E6_CA7088E38B53",
 "backgroundOpacity": 0,
 "width": "80.346%",
 "right": "9.39%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "url": "skin/Image_EDC8CE04_F802_4454_41E6_CA7088E38B53.png",
 "propagateClick": false,
 "top": "34.02%",
 "paddingRight": 0,
 "borderSize": 0,
 "class": "Image",
 "maxWidth": 650,
 "horizontalAlign": "center",
 "height": "29.634%",
 "maxHeight": 243,
 "data": {
  "name": "Image15479"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_inside",
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "gap": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "children": [
  "this.Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
  "this.Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
  "this.HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859"
 ],
 "paddingLeft": 0,
 "height": "100%",
 "id": "Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "borderRadius": 0,
 "layout": "vertical",
 "minWidth": 100,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "minHeight": 300,
 "scrollBarOpacity": 0.79,
 "shadow": false
},
{
 "paddingLeft": 0,
 "height": "2.54%",
 "id": "Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "layout": "horizontal",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "children": [
  "this.HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2"
 ],
 "paddingLeft": 0,
 "height": "30%",
 "id": "Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container header"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "Container_0BD17D93_1236_F6B5_4193_247950F46092",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 7,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "children": [
  "this.HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
  "this.HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04"
 ],
 "paddingLeft": 0,
 "height": "75%",
 "id": "Container_04FFDC2C_1216_7593_41A7_64E2588509FB",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 22,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "children": [
  "this.HTMLText_18123A3E_1663_8BF1_419F_B7BD72D2053B",
  "this.HTMLText_18125A3F_1663_8BEF_4196_AE566E10BAFC"
 ],
 "paddingLeft": 0,
 "id": "Container_00680EBB_1C6A_B01A_41B7_CA8C74B88FBB",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 130,
 "contentOpaque": false,
 "data": {
  "name": "Container header location"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "scrollBarOpacity": 0,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "Container_18124A3F_1663_8BEF_4167_4F797ED9B565",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 7,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "HTMLText_18127A3F_1663_8BEF_4175_B0DF8CE38BFE",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 20,
 "minWidth": 1,
 "propagateClick": true,
 "scrollBarColor": "#987B55",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:2.49vh;font-family:'Antonio';\"><B>MUSEUMKU GERABAH, KAJEN, BANGUNJIWO, KASIHAN, BANTUL, DAERAH ISTIMEWA YOGYAKARTA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "53.265%",
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Antonio",
 "paddingLeft": 0,
 "id": "Button_18126A3F_1663_8BEF_41A4_B0EDA1A5F4E3",
 "backgroundOpacity": 0.7,
 "width": 207,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "layout": "horizontal",
 "propagateClick": true,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#987B55"
 ],
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 30,
 "label": "BOOK NOW",
 "paddingRight": 0,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 5,
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "height": 59,
 "fontColor": "#FFFFFF",
 "visible": false,
 "data": {
  "name": "Button31015"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "minHeight": 1,
 "shadowBlurRadius": 6,
 "shadow": false,
 "shadowSpread": 1
},
{
 "children": [
  "this.HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299"
 ],
 "paddingLeft": 0,
 "height": "44%",
 "id": "Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container header contact"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "minWidth": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 7,
 "contentOpaque": false,
 "data": {
  "name": "Container25772"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 10,
 "minWidth": 1,
 "propagateClick": true,
 "scrollBarColor": "#987B55",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:3.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">Dengan teknologi terkini, kami membawa lingkungan fisik ke dunia digital, memungkinkan pengunjung untuk menjelajahi tempat anda secara mendalam. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\"><I>Tertarik untuk membuat Virtual Tour?</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">Silahkan hubungi kami untuk informasi lebih lanjut :</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Antonio';\"><B>CONTACT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">ezi.studio17@gmail.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">+6281 578 301145</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">Graha Prima Sejahtera no.G8, Jetis, Tamantirto, Kasihan, Bantul, D.I. Yogyakarta</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">INSTAGRAM</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">@ziraymedia</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "100%",
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#996633",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.07vh;font-family:'Cinzel Bold';\"><B>museumku</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:9.8vh;font-family:'Cinzel Bold';\"><B>GERABAH</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "100%",
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
 "backgroundOpacity": 0,
 "width": "50%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "propagateClick": true,
 "scrollBarColor": "#987B55",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">MuseumKu Gerabah Timbul Raharjo, terletak di Kasongan Kabupaten Bantul, Daerah Istimewa Yogyakarta, merupakan museum yang dimiliki dan dikelola oleh swasta. Didirikan oleh Bapak Timbul Raharjo pada tanggal 28 Oktober 2022. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">Pembangunan museum ini merupakan hasil buah pikir pemilik, guna mencanangkan nama Kasongan sebagai salah satu destinasi wisata baru (Gerabah Kasongan) yang sekaligus menjadi wadah edukasi seni. MuseumKu Gerabah Timbul Raharjo memiliki koleksi karya gerabah serta karya dari Timbul Raharjo.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText12940"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "height": "100%",
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04",
 "backgroundOpacity": 0,
 "width": "50%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "propagateClick": true,
 "scrollBarColor": "#987B55",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:2.49vh;font-family:'Open Sans Semibold';\"><B>VISI</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">Menjadi galeri dan Tempat Studi Gerabah terbaik di Indonesia</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:2.49vh;font-family:'Open Sans Semibold';\"><B>MISI</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">1. Merawat, melestarikan, edukasi hasil bentuk gerabah masa lalu.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">2. Melakukan promosi MuseuKu Gerabah Timbul Raharjo dengan maksimal.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">3. Meguatkan multiefek dalam mendukung pelestarian budaya Gerabah Kasongan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">4. Meningkatkan dan melayani kunjungan wisata MuseumKu Gerabah dengan baik</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:2.49vh;font-family:'Open Sans Semibold';\"><B>PELAYANAN KAMI</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.56vh;font-family:'Open Sans Semibold';\">Kami bergerak dibidang industri kreatif, yang mana didalam entitas MuseumKu Gerabah Timbul Raharjo memiliki 4 sektor operasional yakni Edukasi Seni/Workshop, Gallery, FnB, dan Venue.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "height": "100%",
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "HTMLText_18123A3E_1663_8BF1_419F_B7BD72D2053B",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#BBD149",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": 85,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.29vh;font-family:'Cinzel Bold';\"><B>LOKASI</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText23803"
 },
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5
},
{
 "paddingLeft": 0,
 "id": "HTMLText_18125A3F_1663_8BEF_4196_AE566E10BAFC",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 1,
 "propagateClick": true,
 "bottom": 0,
 "paddingRight": 0,
 "scrollBarColor": "#BBD149",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": 65,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:50px;font-family:'Cinzel Bold';\"><B>MUSEUM</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText24905"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false
},
{
 "paddingLeft": 0,
 "id": "HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "minWidth": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": 0,
 "paddingRight": 0,
 "scrollBarColor": "#BBD149",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.07vh;font-family:'Cinzel Bold';\"><B>CONTACT</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:10.89vh;font-family:'Cinzel Bold';\"><B>INFO</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText23803"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "height": "100%",
 "shadow": false
}],
 "paddingRight": 0,
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "vrPolyfillScale": 0.5,
 "class": "Player",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getKey": function(key){  return window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "data": {
  "name": "Player468"
 },
 "paddingTop": 0,
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "shadow": false
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
