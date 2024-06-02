import { faTelegram, faInstagram, faYoutube, faFacebook, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faThumbsUp,
  faComment,
  faShare,
  faUserFriends,
  faUsers,
  faRetweet,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

const menuData = [
  {
    id: 1,
    title: "Telegram",
    newTab: false,
    icon: faTelegram,
    submenu: [
      { id: 11, title: "Channel/Group Members", path: "/prices/telegram/11", newTab: false, description: "Boost your Telegram channel or group with more members instantly.", icon: faUsers },
      { id: 12, title: "Post Views", path: "/prices/telegram/12", newTab: false, description: "Increase the visibility of your Telegram posts with more views.", icon: faEye },
      { id: 13, title: "Reactions", path: "/prices/telegram/13", newTab: false, description: "Get more reactions on your Telegram posts.", icon: faThumbsUp },
    ],
  },
  {
    id: 2,
    title: "Instagram",
    newTab: false,
    icon: faInstagram,
    submenu: [
      { id: 21, title: "Likes", path: "/prices/instagram/21", newTab: false, description: "Increase the number of likes on your Instagram posts.", icon: faThumbsUp },
      { id: 22, title: "Views", path: "/prices/instagram/22", newTab: false, description: "Boost the views on your Instagram videos.", icon: faEye },
      { id: 23, title: "Post Shares", path: "/prices/instagram/23", newTab: false, description: "Encourage more people to share your Instagram posts.", icon: faShare },
      { id: 24, title: "Comments", path: "/prices/instagram/24", newTab: false, description: "Increase the number of comments on your Instagram posts.", icon: faComment },
    ],
  },
  {
    id: 3,
    title: "YouTube",
    newTab: false,
    icon: faYoutube,
    submenu: [
      { id: 31, title: "Views", path: "/prices/youtube/31", newTab: false, description: "Increase the views on your YouTube videos.", icon: faEye },
      { id: 32, title: "Subscribers", path: "/prices/youtube/32", newTab: false, description: "Gain more subscribers on your YouTube channel.", icon: faUserFriends },
      { id: 33, title: "Comments", path: "/prices/youtube/33", newTab: false, description: "Get more comments on your YouTube videos.", icon: faComment },
    ],
  },
  {
    id: 4,
    title: "Facebook",
    newTab: false,
    icon:   faFacebook,
    submenu: [
      { id: 41, title: "Post Likes", path: "/prices/facebook/41", newTab: false, description: "Increase the likes on your Facebook posts.", icon: faThumbsUp },
      { id: 42, title: "Page Likes", path: "/prices/facebook/42", newTab: false, description: "Boost the likes on your Facebook page.", icon: faThumbsUp },
      { id: 43, title: "Comments", path: "/prices/facebook/43", newTab: false, description: "Get more comments on your Facebook posts.", icon: faComment },
    ],
  },
  {
    id: 5,
    title: "TikTok",
    newTab: false,
    icon: faTiktok,
    submenu: [
      { id: 51, title: "Followers", path: "/prices/tiktok/51", newTab: false, description: "Increase the number of followers on your TikTok account.", icon: faUserFriends },
      { id: 52, title: "Likes", path: "/prices/tiktok/52", newTab: false, description: "Boost the likes on your TikTok videos.", icon: faThumbsUp },
      { id: 53, title: "Views", path: "/prices/tiktok/53", newTab: false, description: "Increase the views on your TikTok videos.", icon: faEye },
    ],
  },
  {
    id: 6,
    title: "Twitter",
    newTab: false,
    icon:   faTwitter,
    submenu: [
      { id: 61, title: "Followers", path: "/prices/twitter/61", newTab: false, description: "Gain more followers on your Twitter account.", icon: faUserFriends },
      { id: 62, title: "Retweets", path: "/prices/twitter/62", newTab: false, description: "Increase the number of retweets on your tweets.", icon: faRetweet },
      { id: 63, title: "Likes", path: "/prices/twitter/63", newTab: false, description: "Boost the likes on your tweets.", icon: faThumbsUp },
    ],
  },
  {
    id: 7,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
    icon:   faPhone,
  },
];

export default menuData;
