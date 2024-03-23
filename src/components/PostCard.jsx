import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block w-full h-full">
      <div className="w-full bg-gray-600 rounded-xl p-4 hover:bg-cyan-500 transform transition duration-300 hover:scale-105">
        <div className="relative w-full bg-gray-200 rounded-xl overflow-hidden border border-gray-300">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: "9/9" }} // Adjust aspect ratio as needed
          />
        </div>
        <div className="bg-gray-600 text-white text-center p-4 ">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
