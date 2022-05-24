import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "yash-patel-test-userId",
    firstName: "yash",
    lastName: "patel",
    username: "yashpatel",
    password: "yashpatel",
    bio: "A mind needs books like a sword needs a whetstone.",
    websiteUrl: "https://www.google.com/",
    following:
    {
      _id: "adarsh-balika-test-userId",
      firstName: "Adarsh",
      lastName: "Balika",
      username: "adarshbalika",
      password: "adarshBalika123",
      bio: "They may take our lives, but they'll never take our freedom!",
      websiteUrl: "https://www.google.com/",
      profileImage: {
        url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080188/my-uploads/zrklsvbqe9yzvyr07r8j.jpg",
        original_filename: "adarsh-profile",
      },
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080197/my-uploads/xdlfkqvpal2w0oagq2rm.jpg",
      original_filename: "yashpatel-profile",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "adarsh-balika-test-userId",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "They may take our lives, but they'll never take our freedom!",
    websiteUrl: "https://www.google.com/",
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080188/my-uploads/zrklsvbqe9yzvyr07r8j.jpg",
      original_filename: "adarsh-profile",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "harsh-kumar-test-userId",
    firstName: "Harsh",
    lastName: "Kumar",
    username: "harshkumar",
    password: "harsh@123",
    websiteUrl: "https://www.google.com/",
    profileImage: {
      url: "https://res.cloudinary.com/da6riejgw/image/upload/v1653080179/my-uploads/ogrwtdmjtckqjyfj2nla.jpg",
      original_filename: "harsh-profile",
    },
    bio: "You only live once, but if you do close they were to success when they gave up.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
