import { onMounted, reactive } from "vue";
import { RouteName } from "../../router/routes";

export const baseMenu = [
  {
    value: "发现音乐",
    name: RouteName.FindMusic,
  },
  {
    value: "视频",
    name: RouteName.VideoPage,
  },
  {
    value: "关注",
    name: RouteName.Attention,
  },
  {
    value: "私人FM",
    name: RouteName.PrivateFM,
  },
];

export const mySongList = [
  {
    value: "本地与收藏",
    name: RouteName.LocalDownload,
    icon: "download",
  },
  {
    value: "最近播放",
    name: RouteName.LatelyPlay,
    icon: "lately-play",
  },
  {
    value: "我的音乐云盘",
    name: RouteName.MusicCloudDisk,
    icon: "cloud",
  },
  {
    value: "我的收藏",
    name: RouteName.MyCollection,
    icon: "my-collection",
  },
];

export function useMenuData() {
  const createSongList = reactive([]);
  const collectSongList = reactive([]);

  onMounted(() => {
    // menuList.push()
  });

  return {
    baseMenu,
    mySongList,
    createSongList,
    collectSongList,
  };
}
