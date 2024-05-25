

const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Service 1",
        path: "/price",
        newTab: false,
      },
      {
        id: 42,
        title: "Service 2",
        path: "/price",
        newTab: false,
      },
      {
        id: 43,
        title: "Service 3",
        path: "/price",
        newTab: false,
      },
      {
        id: 44,
        title: "Service 4",
        path: "/price",
        newTab: false,
      },
      {
        id: 45,
        title: "Service 5",
        path: "/price",
        newTab: false,
      },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
