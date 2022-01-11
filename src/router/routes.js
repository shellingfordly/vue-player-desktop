import FindMusic from "../views/find-music/FindMusic.vue";
import Attention from "../views/attention/Attention.vue";
import LatelyPlay from "../views/lately-play/LatelyPlay.vue";
import LocalDownload from "../views/local-download/LocalDownload.vue";
import MyCollection from "../views/my-collection/MyCollection.vue";
import PrivateFM from "../views/private-fm/PrivateFM.vue";
import VideoPage from "../views/video-page/Video.vue";
import MusicCloudDisk from "../views/cloud-disk/MusicCloudDisk.vue";

export const RouteName = {
  FindMusic: "FindMusic",
  Attention: "Attention",
  LatelyPlay: "LatelyPlay",
  LocalDownload: "LocalDownload",
  MyCollection: "MyCollection",
  PrivateFM: "PrivateFM",
  VideoPage: "VideoPage",
  MusicCloudDisk: "MusicCloudDisk",
};

export const routes = [
  {
    path: "/",
    redirect: "/find-music",
  },
  {
    path: "/find-music",
    name: RouteName.FindMusic,
    component: FindMusic,
  },
  {
    path: "/attention",
    name: RouteName.Attention,
    component: Attention,
  },
  {
    path: "/lately-play",
    name: RouteName.LatelyPlay,
    component: LatelyPlay,
  },
  {
    path: "/local-download",
    name: RouteName.LocalDownload,
    component: LocalDownload,
  },
  {
    path: "/my-collection",
    name: RouteName.MyCollection,
    component: MyCollection,
  },
  {
    path: "/private-fm",
    name: RouteName.PrivateFM,
    component: PrivateFM,
  },
  {
    path: "/video",
    name: RouteName.VideoPage,
    component: VideoPage,
  },
  {
    path: "/cloud-disk",
    name: RouteName.MusicCloudDisk,
    component: MusicCloudDisk,
  },
];
