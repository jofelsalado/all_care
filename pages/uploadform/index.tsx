import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import fs from "fs/promises";
import path from "path";
import Router from "next/router";
import Link from "next/link";
import SignUpPage from "../lead/sign_up";
import { Select, Option } from "@material-tailwind/react";


interface Props {
  dirs: string[];
}

interface FormData {
  id: string;
  user_role: string;
  email: string;
  username: string;
  password: string;
  firstname: string;
  middlename: string;
  lastname: string;
  contactnum: string;
  address: string;
  birthdate: string;
  gender: string;
  image: string;
  date: string;
  status: string;
}
const currentDate = new Date().toLocaleDateString();

const UploadForm: NextPage<Props> = () => {

  const [form, setForm] = useState<FormData>({
    id: "",
    user_role: "",
    email: "",
    username: "",
    password: "",
    firstname: "",
    middlename: "",
    lastname: "",
    contactnum: "",
    address: "",
    birthdate: "",
    gender: "",
    image: "",
    date: currentDate,
    status: "",
  });

  async function create(data: FormData) {
    try {
      fetch("http://localhost:3000/api/create", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        setForm({
          id: "",
          user_role: "",
          email: "",
          username: "",
          password: "",
          firstname: "",
          middlename: "",
          lastname: "",
          contactnum: "",
          address: "",
          birthdate: "",
          gender: "",
          image: "",
          date: currentDate,
          status: "Active",
        });
        Router.push("./");
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (data: FormData) => {
    console.log("Email", data.email);
    console.log("Gender", data.gender);
    // try {
    //   console.log(data);
    //   create(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleChange = (value: any) => {
    setForm({ ...form, gender: value})
    // console.log("value:", value);
    // console.log("setFormVal:", form.gender);
    
  };
  
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
<div className="flex justify-center items-center w-full">
      <div className="grow flex flex-col gap-14 mt-10 mb-10 p-10 bg-white rounded-3xl shadow-2xl bg-hero-pattern">
      <div>
          <h1 className="font-khulareg text-xl text-gray-700 tracking-[0.1rem]">
            Sign Up
          </h1>
        </div>
      {/* <SignUpPage/> */}
      <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(form);
            handleUpload();
          }}
        >
          <div className="flex flex-wrap w-full  gap-y-5 gap-x-5 justify-around items-around ">
            <div className="flex flex-col gap-y-5">
              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Email
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Username
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Username"
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                />
              </div>

              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Password
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>

              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Confirm Password
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Confirm Password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>

              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  First Name
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="e.g Juan"
                  value={form.firstname}
                  onChange={(e) =>
                    setForm({ ...form, firstname: e.target.value })
                  }
                />
              </div>

              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Middle Name
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="e.g Dela Cruz"
                  value={form.middlename}
                  onChange={(e) =>
                    setForm({ ...form, middlename: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Last Name
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="e.g Santa"
                  value={form.lastname}
                  onChange={(e) =>
                    setForm({ ...form, lastname: e.target.value })
                  }
                />
              </div>
              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Contact
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Contact Number"
                  value={form.contactnum}
                  onChange={(e) =>
                    setForm({ ...form, contactnum: e.target.value })
                  }
                />
              </div>

              {/* <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Gender
                </label>
                  <select onChange={handleChange} data-te-select-init className="çç">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                
                  </select>
                </div> */}
              <div className="w-[20rem] grow xl:grow-0 ">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Gender
                </label>
                <Select
        
                  value={form.gender}
                  onChange={handleChange}
                  className='outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 h-[2.5rem] flex items-center'
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  
                </Select>
                
              </div>

              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Address
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="e.g Mandaue City"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
              </div>

              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Date of Birth
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="MM/DD/YY"
                  value={form.birthdate}
                  onChange={(e) =>
                    setForm({ ...form, birthdate: e.target.value })
                  }
                />
              </div>

              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Upload Picture
                </label>
                
                <label>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
        />
        {/* <div className="w-full h-[10rem]  flex items-center justify-center cursor-pointer"> */}
        <div className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer`} >
          {selectedImage ? (
            <img src={selectedImage} alt="" />
            
          ) : (
            <span>Select Image</span>
          )}
        </div>
      </label>
              </div>

              {/* <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Gender
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="e.g Male"
                  value={form.gender}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                />
              </div> */}
            </div>
          </div>
          <div className=" w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[10rem] mt-10">
                {/* <Link href={"./"}> */}
                <button
                onClick={handleUpload}
                disabled={uploading}
                  type="submit"
                  className="text-white bg-blue-700 text-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none  w-full"
                >
                  Add
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </form>
      <label>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
        />
        {/* <div className="w-full h-[10rem]  flex items-center justify-center cursor-pointer"> */}
        {/* <div className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer`} >
          {selectedImage ? (
            <img src={selectedImage} alt="" />
            
          ) : (
            <span>Select Image</span>
          )}
        </div> */}
      </label>
      <div className="w-full flex justify-center items-center pt-10">
      {/* <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ opacity: uploading ? ".5" : "1" }}
        className="bg-red-600 p-3 w-32 text-center rounded text-white"
      >
        {uploading ? "Uploading.." : "Upload"}
      </button> */}
      </div>
     
      {/* <div className="mt-20 flex flex-col space-y-3 bg-green-500">
        {dirs.map((item) => (
          <Link key={item} href={"/images/" + item}>
            <div className="text-blue-500 hover:underline">{item}</div>
          </Link>
        ))}
      </div> */}
    </div>
    </div>
    
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const props = { dirs: [] };
  try {
    const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"));
    props.dirs = dirs as any;
    return { props };
  } catch (error) {
    return { props };
  }
};

export default UploadForm;