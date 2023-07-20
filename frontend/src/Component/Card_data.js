const Card_data = [
  {
    id: 1,
    imgsrc:
      "https://cdn.vectorstock.com/i/preview-1x/77/21/gear-computer-logo-icon-design-vector-22627721.jpg",
    title: "COMPUTER ENGINEERING",
    link: "/cource/Ce",

    // imgsrc:
    // "https://flxt.tmsimg.com/assets/p14652158_b_v13_az.jpg",
    // title: "A netflix orignal series",
    // sname: "DARK",
  },
  {
    id: 2,
    imgsrc:
      "https://cdn.vectorstock.com/i/preview-1x/24/58/civil-engineering-icon-monochrome-simple-sign-vector-45952458.jpg",
    title: "CIVIL ENGINEERING",
    link: "/cource/Civil",

    // imgsrc:
    //   "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    // title: "A netflix orignal series",
    // sname: "STRANGER THINGS",
  },
  {
    id: 3,
    imgsrc:
      "https://t4.ftcdn.net/jpg/02/11/56/79/360_F_211567967_NIXpHp4GiAD4GrK8lOAt2O9wZDTZB56P.jpg",
    title: "ELECTRICAL ENGINEERING",
    link: "/cource/Electrical",

    // imgsrc:
    //   "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    // title: "A netflix orignal series",
    // sname: "FRIENDS",
  },
  {
    id: 4,
    imgsrc:
      "https://us.123rf.com/450wm/90miles/90miles2102/90miles210200002/164256230-cogwheel-and-wrench-icon-symbol-of-adjustment-repairs-technical-service-or-support-vector.jpg?ver=6",
    title: "MECHANICAL ENGINEERING",
    link: "/cource/Mechanical",

    // imgsrc:
    //   "https://flxt.tmsimg.com/assets/p14652158_b_v13_az.jpg",
    // title: "A netflix orignal series",
    // sname: "DARK",
  },
  {
    id: 5,
    imgsrc:
      "data:image/png;base64,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",
    title: "INFORMATION TECHNOLOGY",
    link: "/cource/It",

    // imgsrc:
    //   "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    // title: "A netflix orignal series",
    // sname: "FRIENDS",
  },
  {
    id: 6,
    imgsrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvbipxNG3uBUkhwleMDQ3D_asjzbd03uRWU-_XoTabrlCehhFxI7mPO-TCCjNHCIUuwlo&usqp=CAU",
    title: "CHEMICAL ENGINEERING",
    link: "/cource/Chemical",
  },
];

export default Card_data;
