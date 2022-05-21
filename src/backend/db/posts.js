import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "They may take our lives, but they'll never take our freedom!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080188/my-uploads/zrklsvbqe9yzvyr07r8j.jpg",
      original_filename: "adarsh-profile",
    },
    postMedia: null,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:
      "Just when I thought I was out, they pull me back in.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080188/my-uploads/zrklsvbqe9yzvyr07r8j.jpg",
      original_filename: "adarsh-profile",
    },
    postMedia: null,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:
      "Keep your friends close, but your enemies closer.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "yash-patel-test-userId",
          username: "yashpatel",
          firstName: "yash",
          lastName: "patel",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "yash-patel-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080197/my-uploads/xdlfkqvpal2w0oagq2rm.jpg",
      original_filename: "yashpatel-profile",
    },
    postMedia: null,
    firstName: "yash",
    lastName: "patel",
    username: "yashpatel",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:
      "I have always depended on the kindness of strangers.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "adarsh-balika-test-userId",
          username: "adarshbalika",
          firstName: "Adarsh",
          lastName: "Balika",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "yash-patel-test-userId",
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080197/my-uploads/xdlfkqvpal2w0oagq2rm.jpg",
      original_filename: "yashpatel-profile",
    },
    firstName: "yash",
    lastName: "patel",
    username: "yashpatel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Hope is a good thing. Maybe even the best of things and good things never die.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "yash-patel-test-userId",
          username: "yashpatel",
          firstName: "yash",
          lastName: "patel",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "harsh-kumar-test-userId",
    postMedia: null,
    comments: [],
    firstName: "Harsh",
    lastName: "Kumar",
    username: "harshkumar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "You wasted $150,000 on an education you coulda got for $1.50 in late fees at the public library.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "harsh-kumar-test-userId",
          username: "harshkumar",
          firstName: "Harsh",
          lastName: "Kumar",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
        {
          _id: "adarsh-balika-test-userId",
          username: "adarshbalika",
          firstName: "Adarsh",
          lastName: "Balika",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080188/my-uploads/zrklsvbqe9yzvyr07r8j.jpg",
      original_filename: "adarsh-profile",
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1649665177/sample.jpg",
      original_filename: "flowers",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "You see, in their last moment people show you who they really are.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: { url: "https://picsum.photos/500/400", original_filename: "" },
    userId: "harsh-kumar-test-userId",
    firstName: "Harsh",
    lastName: "Kumar",
    username: "harshkumar",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:
      "You mustn't be afraid to dream a little bigger, darling.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080188/my-uploads/zrklsvbqe9yzvyr07r8j.jpg",
      original_filename: "adarsh-profile",
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    postMedia: null,
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content: "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "harsh-kumar-test-userId",
          username: "harshkumar",
          firstName: "Harsh",
          lastName: "Kumar",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
        {
          _id: "adarsh-balika-test-userId",
          username: "adarshbalika",
          firstName: "Adarsh",
          lastName: "Balika",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080188/my-uploads/zrklsvbqe9yzvyr07r8j.jpg",
      original_filename: "adarsh-profile",
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1649834647/wildlife_txpxpo.webp",
      original_filename: "panda",
    },
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content: `Don’t let anybody tell you that you can’t do something.`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "harsh-kumar-test-userId",
          username: "harshkumar",
          firstName: "Harsh",
          lastName: "Kumar",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080188/my-uploads/zrklsvbqe9yzvyr07r8j.jpg",
      original_filename: "adarsh-profile",
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652616473/ss_jjlh2c.jpg",
      original_filename: "dhoni-book",
    },
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:
      "A million dollars isn't cool. You know what's cool? A billion dollars.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080188/my-uploads/zrklsvbqe9yzvyr07r8j.jpg",
      original_filename: "adarsh-profile",
    },
    postMedia: null,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content:
      "You know what kind of plan never fails? No plan. No plan at all. You know why? Because life cannot be planned.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080188/my-uploads/zrklsvbqe9yzvyr07r8j.jpg",
      original_filename: "adarsh-profile",
    },
    postMedia: null,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
];
