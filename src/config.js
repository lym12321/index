const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "Home"; // 个人网站名字

const GITHUB = "https://github.com/lym12321/index"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://api.coraa.cn/random"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "站点" },
  { sortId: 2, title: "社交" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = "津ICP备2022001522号-1"; // ICP 备案号

const RECORD_NUMBER_WANGAN = "津公网安备12010402001727号"; // 网安备案号

const RECORD_NUMBER_WANGAN_NUM = "12010402001727" // 网安备案号码（用于跳转）

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "Blog",
    subtitle: "杂事杂记",
    url: "https://blog.coraa.cn/",
    icon: ""
  },
  {
    pageId: 2,
    sortId: 1,
    title: "Develop",
    subtitle: "实验性站点",
    url: "https://dev.coraa.cn/",
    icon: ""
  },
  {
    pageId: 3,
    sortId: 2,
    title: "Mail",
    subtitle: "发邮件",
    url: "mailto:i@coraa.cn",
    icon: ""
  },
  {
    pageId: 4,
    sortId: 2,
    title: "Github",
    subtitle: "世界上最大的同性交友平台",
    url: "https://github.com/lym12321",
    icon: ""
  },
  {
    pageId: 5,
    sortId: 2,
    title: "Bilibili",
    subtitle: "小破站",
    url: "https://space.bilibili.com/264923978",
    icon: ""
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

// 这个 slogan 被我改成了 hitokoto，已经没啥用了

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER,
  RECORD_NUMBER_WANGAN,
  RECORD_NUMBER_WANGAN_NUM
};
