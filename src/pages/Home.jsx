import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import BlogImage from "../assets/blog.png";
import { useNavigate } from 'react-router-dom';
import AddPost from "./AddPost";


function Home() {
  const [posts, setposts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setposts(posts.documents);
      }
    });
  }, []);

  const handleReadMore = () => {
    navigate('/Login'); 
  };

  const GoAddPost = () =>{
    navigate('/AddPost')
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8  text-center bg-white">
        <Container>
        <div className="flex flex-wrap items-center">
            <div className="p-2 w-full md:w-1/2">
              <img
                src={BlogImage}
                alt="Blog Image"
                className="w-full md:max-w-md mx-auto mb-4 rounded-lg"
              />
            </div>
            <div className="p-2 w-full md:w-1/2">
              <h1 className="text-2xl font-bold mb-4">Welcome to Our Blog!</h1>
              <p className="text-lg text-gray-700 mb-4">
                Our blog is dedicated to providing insightful articles on various topics
                such as technology, lifestyle, travel, and much more. We aim to bring
                you engaging content that informs, entertains, and inspires. Explore our
                blog to discover interesting stories, helpful tips, and thought-provoking
                discussions. Stay connected with us to stay updated on the latest trends
                and developments in the world around us.
              </p>
              <button onClick={handleReadMore}  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-white h-80">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Your Blogging Journey!</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg text-center">
            Embark on a journey of creativity, inspiration, and connection with our blog. Whether you're here to share your thoughts or discover new ideas, you're in the right place.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300">Start Writing</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-full transition duration-300">Explore Blogs</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
