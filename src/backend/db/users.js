import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "adarsh-balika-test-userId",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    profileBackgroundUrl: "",
    bio: "You only live once, but if you do it right, once is enough.",
    websiteUrl: "https://www.google.com/",
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652362403/ct4fvtk6i5iu1mbnb6hj.jpg",
      original_filename: "Pngtree—businessman",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "yash",
    lastName: "patel",
    username: "yashpatel",
    password: "yashpatel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
