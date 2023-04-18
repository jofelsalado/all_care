import Link from "next/link";
import { useState } from "react";
import { InputForm } from "../../../../home/components/input_form";
import Router from "next/router";
import { resolve } from "path";

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
export function AddAccount() {
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
          id: "1",
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
    try {
      console.log(data);
      create(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="grow flex flex-col gap-14 mt-10 mb-10 p-10 bg-white rounded-3xl shadow-2xl bg-hero-pattern">
        <div>
          <h1 className="font-khulareg text-xl text-gray-700 tracking-[0.1rem]">
            Add Account
          </h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(form);
          }}
        >
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
                  placeholder="axxxx@gmail.com"
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
                  placeholder="kn542"
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
                  placeholder="*********"
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
                  placeholder="09XXXXXXXXX"
                  value={form.contactnum}
                  onChange={(e) =>
                    setForm({ ...form, contactnum: e.target.value })
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
                  id="countries"
                  className="bg-gray-50 borderw-[20rem] grow xl:grow-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                >
                  <option selected>Select Sex</option>
                  <option value="US">Male</option>
                  <option value="CA">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[10rem] mt-10">
                {/* <Link href={"./"}> */}
                <button
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
      </div>
    </div>
  );
}
