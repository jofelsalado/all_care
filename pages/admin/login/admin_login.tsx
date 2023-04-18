import pic1 from "../../../public/images/pic1.jpg";
import Link from "next/link";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { prisma } from "../../../lib/prisma";
import { useEffect, useState } from "react";
import Router from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { id } from "date-fns/locale";
import axios from 'axios';
import React from "react";

interface FormData {
  username: string;
  password: string;
}

export function AdminLogin({ users }: any) {
  
  const [form, setForm] = useState<FormData>({
    username: "",
    password: "",
  });
  const [posts, setPosts] = useState<any>([])
  const [error, setError] = React.useState<any>([]);
  const apiEndPoint = 'http://localhost:5555/api/v1/auth/login';

  // useEffect(()=> {
  //   const getPosts = async () => {
  //     const {data: res} = await axios.get(apiEndPoint);
  //     setPosts(res);
  //   };
  //   getPosts();
  // },[]);

  const addPost = async () => {
    
    const post = { 
      // email: "admin@allcarebusiness.com",
      // password: "admin2023",
      email: form.username,
      password: form.password,
  };
  await axios.post(apiEndPoint, post).then((response) => {
    toast.success("Welcome");
    Router.push("./notification");
  })
  .catch(error => {
    toast.error("Invalid login!");
  }); 
  }


  const result = users.some(
    (item: { id: string; username: string; password: string }) =>
      item.username === String(form.username) &&
      item.password === String(form.password)
  );

  const handleClick = () => {
    if (result == true) {
      toast.success("Welcome!");
      Router.push("./notification");
    } else {
      toast.error("User not found!");
    }
  };
  return (
    <section className="pt-6">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 ">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <Image
              src={pic1}
              className="object-cover h-[30rem] w-full rounded-3xl shadow-2xl"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form className="bg-white p-10 rounded-3xl shadow-2xl">
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">
                  Admin's Portal         
                </p>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Username"
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                    
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-gray-800"
                >
                  Forgot password?
                </a>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="button"
                  onClick={addPost}
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
                <Toaster />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
