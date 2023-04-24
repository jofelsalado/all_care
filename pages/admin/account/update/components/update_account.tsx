import Link from "next/link";
import { useEffect, useState } from "react";
import { InputForm } from "../../../../home/components/input_form";
import { useRouter } from "next/router";
import { withRouter } from "next/router";
import Router from "next/router";
import axios from "axios";
import { type } from "os";
import toast from "react-hot-toast";

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

export function UpdateAccount({}) {
  const router = useRouter();
  const {
    id,
    firstName,
    middleName,
    lastName,
    gender,
    contactNo,
    address,
    birthdate,
    email,
    username,
    password,
    userTypeId,
  } = router.query;
  const [form, setForm] = useState<FormData>({
    id: String(id),
    firstName: String(firstName),
    middleName: String(middleName),
    lastName: String(lastName),
    gender: String(gender),
    contactNo: String(contactNo),
    address: String(address),
    birthdate: String(birthdate),
    email: String(email),
    username: String(username),
    password: String(password),
    userTypeId: String(userTypeId),
  });
  const apiEndPoint = "http://localhost:5555/api/v1/accounts";
  const postUpdate = {
    id: form.id,
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
    userTypeId: form.userTypeId,
  };
  const handeUpdate = async (id: any) => {
    await axios
      .patch(apiEndPoint + "/" + id, postUpdate)
      .then((response) => {
        toast.success("Updated Successfully");
        Router.push("./products");
      })
      .catch((error) => {
        toast.error("Update Failed");
      });
    console.log(type);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="grow flex flex-col gap-14 mt-10 mb-10 p-10 bg-white rounded-3xl shadow-2xl bg-hero-pattern">
        <div>
          <h1 className="font-khulareg text-xl text-gray-700 tracking-[0.1rem]">
            Update Account
          </h1>
        </div>

        <div className="flex flex-wrap w-full  gap-y-5 gap-x-5 justify-around items-around ">
          <div className="flex flex-col gap-y-5">
            <div className="w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Role
              </label>
              <input
                className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="text"
                placeholder="1-3"
                value={form.userTypeId}
                onChange={(e) =>
                  setForm({ ...form, userTypeId: e.target.value })
                }
              />
            </div>

            <div className="w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Email
              </label>
              <input
                className={` bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="text"
                placeholder="axxxx@gmail.com"
                value={form.email}
                disabled={true}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Username
              </label>
              <input
                className={` bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="text"
                placeholder="kn542"
                value={form.username}
                disabled={true}
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
                placeholder="09XXXXXXXXX"
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
                placeholder="e.g Mandaue City"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
            </div>

            <div className="w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Birth of Date
              </label>
              <input
                className={` bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="text"
                placeholder="MM/DD/YY"
                value={form.birthdate}
                disabled={true}
                onChange={(e) =>
                  setForm({ ...form, birthdate: e.target.value })
                }
              />
            </div>

            <div className="w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Gender
              </label>
              <input
                className={` bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="text"
                placeholder="e.g Male"
                value={form.gender}
                disabled={true}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[10rem] mt-10">
              {/* <Link href={"./"}> */}
              <button
                type="submit"
                className="text-white bg-blue-700 text-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  w-full"
              >
                Save
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
