import { onMounted, reactive } from "vue";

export const baseMenu = [
  {
    value: "发现音乐",
  },
  {
    value: "博客",
  },
  {
    value: "视频",
  },
  {
    value: "关注",
  },
  {
    value: "直播",
  },
  {
    value: "私人FM",
  },
];

export const mySongList = [
  {
    value: "我的收藏",
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
