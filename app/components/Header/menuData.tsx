
const menuData = [
  {
    id: 1,
    title: "Telegram",
    newTab: false,
    submenu: [
      { id: 11, title: "Channel/Group Members", path: "/telegram/channel-group-members", newTab: false },
      { id: 12, title: "Post Views", path: "/telegram/post-views", newTab: false },
      { id: 13, title: "Reactions", path: "/telegram/reactions", newTab: false },
    ],
  },
  {
    id: 2,
    title: "Instagram",
    newTab: false,
    submenu: [
      { id: 21, title: "Likes", path: "/instagram/likes", newTab: false },
      { id: 22, title: "Views", path: "/instagram/views", newTab: false },
      { id: 23, title: "Post Shares", path: "/instagram/post-shares", newTab: false },
      { id: 24, title: "Comments", path: "/instagram/comments", newTab: false },
    ],
  },
  {
    id: 3,
    title: "YouTube",
    newTab: false,
    submenu: [
      { id: 31, title: "Views", path: "/youtube/views", newTab: false },
      { id: 32, title: "Subscribers", path: "/youtube/subscribers", newTab: false },
      { id: 33, title: "Comments", path: "/youtube/comments", newTab: false },
    ],
  },
  {
    id: 4,
    title: "Facebook",
    newTab: false,
    submenu: [
      { id: 41, title: "Post Likes", path: "/facebook/post-likes", newTab: false },
      { id: 42, title: "Page Likes", path: "/facebook/aboutus-likes", newTab: false },
      { id: 43, title: "Comments", path: "/facebook/comments", newTab: false },
    ],
  },
  {
    id: 5,
    title: "TikTok",
    newTab: false,
    submenu: [
      { id: 51, title: "Followers", path: "/tiktok/followers", newTab: false },
      { id: 52, title: "Likes", path: "/tiktok/likes", newTab: false },
      { id: 53, title: "Views", path: "/tiktok/views", newTab: false },
    ],
  },
  {
    id: 6,
    title: "Twitter",
    newTab: false,
    submenu: [
      { id: 61, title: "Followers", path: "/twitter/followers", newTab: false },
      { id: 62, title: "Retweets", path: "/twitter/retweets", newTab: false },
      { id: 63, title: "Likes", path: "/twitter/likes", newTab: false },
    ],
  },
  {
    id: 7,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
