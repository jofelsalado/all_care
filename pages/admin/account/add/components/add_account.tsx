import Link from "next/link";
import { useState } from "react";
import { InputForm } from "../../../../home/components/input_form";
import Router from "next/router";
import { resolve } from "path";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  contactNo: string;
  address: string;
  birthdate: string;
  email: string;
  username: string;
  password: string;
  userTypeId: string;
}

const currentDate = new Date().toLocaleDateString();
export function AddAccount() {
  const [form, setForm] = useState<FormData>({
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    contactNo: "",
    address: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
    userTypeId: "",
  });

  const apiEndPoint = "http://localhost:5555/api/v1/accounts";

  const addPost = async () => {
    const post = {
      firstName: form.firstName,
      middleName: form.middleName,
      lastName: form.lastName,
      gender: form.gender,
      contactNo: form.contactNo,
      address: form.address,
      birthdate: form.birthdate,
      email: form.email,
      username: form.username,
      password: form.password,
      userTypeId: 3,
    };
    await axios
      .post(apiEndPoint, post)
      .then((response) => {
        toast.success("Added Successfully");
        Router.push("./");
      })
      .catch((error) => {
        toast.error("Add Failed");
      });
  };

  // async function create(data: FormData) {
  //   try {
  //     fetch("http://localhost:3000/api/create", {
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //     }).then(() => {
  //       setForm({
  //         id: "1",
  //         user_role: "",
  //         email: "",
  //         username: "",
  //         password: "",
  //         firstname: "",
  //         middlename: "",
  //         lastname: "",
  //         contactnum: "",
  //         address: "",
  //         birthdate: "",
  //         gender: "",
  //         image: "",
  //         date: currentDate,
  //         status: "Active",
  //       });
  //       Router.push("./");
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const handleSubmit = async (data: FormData) => {
  //   try {
  //     console.log(data);
  //     create(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  console.log(form.gender);
  return (
    <div className="flex justify-center items-center w-full">
      <Toaster />
      <div className="grow flex flex-col gap-14 mt-10 mb-10 p-10 bg-white rounded-3xl shadow-2xl bg-hero-pattern">
        <div>
          <h1 className="font-khulareg text-xl text-gray-700 tracking-[0.1rem]">
            Add Account
          </h1>
        </div>

        <div className="flex flex-wrap w-full  gap-y-5 gap-x-5 justify-around items-around ">
          <div className="flex flex-col gap-y-5">
            {/* <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Role
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="1-3"
                  value={form.user_role}
                  onChange={(e) =>
                    setForm({ ...form, user_role: e.target.value })
                  }
                />
              </div> */}

            <div className="w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Email
              </label>
              <input
                className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="text"
                placeholder="e.g juan@gmail.com"
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
                placeholder=""
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
            </div>

            <div className="w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Password
              </label>
              <input
                className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="text"
                placeholder="*********"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
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
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
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
                value={form.middleName}
                onChange={(e) =>
                  setForm({ ...form, middleName: e.target.value })
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
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>
            <div className="w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Contact
              </label>
              <input
                className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="text"
                placeholder="+639*********"
                value={form.contactNo}
                onChange={(e) =>
                  setForm({ ...form, contactNo: e.target.value })
                }
              />
            </div>

            <div className="w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Address
              </label>
              <input
                className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="text"
                placeholder="e.g Street Name, Building, House No."
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
            </div>

            <div className="w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                BirthDate
              </label>
              <input
                className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="date"
                placeholder="MM/DD/YY"
                value={form.birthdate}
                onChange={(e) =>
                  setForm({ ...form, birthdate: e.target.value })
                }
              />
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
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Sex
              </label>
              <select
                onChange={(e) => {
                  setForm({ ...form, gender: e.target.value });
                }}
              >
                <option selected>Select Sex</option>
                <option value="Male">Male</option>
                <option value="Famale">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[10rem] mt-10">
              {/* <Link href={"./"}> */}
              <button
                onClick={addPost}
                className="text-white bg-blue-700 text-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none  w-full"
              >
                Add
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
