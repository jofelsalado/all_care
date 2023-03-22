import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

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

export function AccountTable({ users }: any) {
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  var lowFilter = String(filter).toLowerCase();
  const refreshData = () => {
    Router.replace(Router.asPath);
  };
  const router = useRouter();
  var id = "";
  var user_role = "";
  var email = "";
  var username = "";
  var password = "";
  var firstname = "";
  var middlename = "";
  var lastname = "";
  var contactnum = "";
  var address = "";
  var birthdate = "";
  var gender = "";
  var image = "";
  var date = "";
  var status = "";
  const [form, setForm] = useState<FormData>({
    id: String(id),
    user_role: String(user_role),
    email: String(email),
    username: String(username),
    password: String(password),
    firstname: String(firstname),
    middlename: String(middlename),
    lastname: String(lastname),
    contactnum: String(contactnum),
    address: String(address),
    birthdate: String(birthdate),
    gender: String(gender),
    image: String(image),
    date: String(date),
    status: String(status),
  });
  // async function deleteUser(id: string) {
  //   try {
  //     fetch(`http://localhost:3000/api/user/${id}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "DELETE",
  //     }).then(() => {
  //       refreshData();
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const handleSubmit = async (id: string, data: FormData) => {
    try {
      updateUser(id, data);
    } catch (error) {
      console.log(error);
    }
  };

  async function updateUser(id: string, data: FormData) {
    try {
      fetch(`http://localhost:3000/api/user/${id}`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
      }).then(() => {
        form.id = "";
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // Update the document title using the browser API

    if (filter == "") {
      setShowFilter(false);
    }
  });

  function updateInput(event: any) {
    setFilter(event.target.value);
  }

  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="mb-0 xl:w-[15rem] order-2">
          <div className="rounded-full input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input
              onChange={updateInput}
              type="search"
              className="outline-none form-control relative flex-auto min-w-0 block w-full px-3 py-0 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              onClick={() => setShowFilter(true)}
              className="btn px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 rounded-fullhover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <Link
          href={"./account/add"}
          className="order-1"
        >
          <div className="cursor-pointer text-white scale-100 hover:scale-125 duration-300 flex justify-center items-center gap-1 font-khulareg bg-blue-600 py-1 px-3 rounded-3xl text-center">
            ADD
            <IoIosAddCircleOutline size="1.2rem" />
          </div>
        </Link>
      </div>
      <div className="overflow-auto rounded-lg shadow  w-full">
        <table className="w-full">
          <thead className=" bg-[#f2f8ff] border-2 border-gray-200 ">
            <tr className="pt-10">
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                ID
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                ROLE
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                EMAIL
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                USERNAME
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                PASSWORD
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                FIRST NAME
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                MIDDLE NAME
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                LAST NAME
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                CONTACT NO.
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                ADDRESS
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                BIRTH
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                GENDER
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                ACTIONS
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                STATUS
              </th>
            </tr>
          </thead>
          {showFilter ? (
            <tbody className="divide-y-8 shadow-2xl leading-cust before:content-[''] before:text-[#f2f8ff]  ">
              {users
                .filter(
                  (item: any) =>
                    String(item.id).toLowerCase() == lowFilter ||
                    String(item.firstname).toLowerCase() == lowFilter ||
                    String(item.lastname).toLowerCase() == lowFilter ||
                    String(item.email).toLowerCase() == lowFilter
                )
                .map((item: FormData) => (
                  <tr
                    key={item.id}
                    className={`bg-white hover:bg-gradient-to-r from-[#588cfc] to-pink-400  hover:text-white scale-100 laptop:scale-100 laptop:hover:scale-105 duration-300`}
                  >
                    <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.user_role}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.email}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.username}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.password}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.firstname}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.middlename}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.lastname}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.contactnum}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.address}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.birthdate}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.gender}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.status}
                    </td>

                    <td className="p-3 text-sm whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            router.push(
                              {
                                pathname: "./account/update",
                                query: {
                                  id: item.id,
                                  user_role: item.user_role,
                                  email: item.email,
                                  username: item.username,
                                  password: item.password,
                                  firstname: item.firstname,
                                  middlename: item.middlename,
                                  lastname: item.lastname,
                                  contactnum: item.contactnum,
                                  address: item.address,
                                  birthdate: item.birthdate,
                                  gender: item.gender,
                                  image: item.image,
                                },
                              },
                              "./update"
                            );
                          }}
                        >
                          <div className="cursor-pointer hover:text-blue-500 scale-100 hover:scale-125 duration-300">
                            <AiOutlineEdit size="1.2rem" />
                          </div>
                        </button>

                        <button
                          onClick={() => {
                            // deleteUser(item.id);
                          }}
                        >
                          <div className="cursor-pointer hover:text-red-500 scale-100 hover:scale-125 duration-300">
                            <RiDeleteBinLine size="1.2rem" />
                          </div>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          ) : (
            <tbody className="divide-y-8 shadow-2xl leading-cust before:content-[''] before:text-[#f2f8ff]  ">
              {users.map((item: FormData) => {
                return (
                  <tr
                    key={item.id}
                    className={`bg-white hover:bg-gradient-to-r from-[#588cfc] to-pink-400  hover:text-white scale-100 laptop:scale-100 laptop:hover:scale-105 duration-300`}
                  >
                    <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.user_role}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.email}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.username}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.password}
                    </td>

                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.firstname}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.middlename}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.lastname}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.contactnum}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.address}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.birthdate}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.gender}
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      {item.date}
                    </td>
                    <td
                      className={`p-3 font-khulaXbold text-sm whitespace-nowrap ${
                        item.status == "ACTIVE"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.status}
                    </td>

                    <td className="p-3 text-sm whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            router.push(
                              {
                                pathname: "./account/update",
                                query: {
                                  id: item.id,
                                  user_role: item.user_role,
                                  email: item.email,
                                  username: item.username,
                                  password: item.password,
                                  firstname: item.firstname,
                                  middlename: item.middlename,
                                  lastname: item.lastname,
                                  contactnum: item.contactnum,
                                  address: item.address,
                                  birthdate: item.birthdate,
                                  gender: item.gender,
                                  image: item.image,
                                },
                              },
                              "./update"
                            );
                          }}
                        >
                          <div className="cursor-pointer hover:text-blue-500 scale-100 hover:scale-125 duration-300">
                            <AiOutlineEdit size="1.2rem" />
                          </div>
                        </button>

                        <button
                          onClick={() => {
                            form.id = item.id;
                            if (item.status == "DISABLED") {
                              form.user_role = item.user_role;
                              form.email = item.email;
                              form.username = item.username;
                              form.password = item.password;
                              form.firstname = item.firstname;
                              form.middlename = item.middlename;
                              form.lastname = item.lastname;
                              form.contactnum = item.contactnum;
                              form.address = item.address;
                              form.birthdate = item.birthdate;
                              form.gender = item.gender;
                              form.image = item.image;
                              form.status = "ACTIVE";
                            } else {
                              form.user_role = item.user_role;
                              form.email = item.email;
                              form.username = item.username;
                              form.password = item.password;
                              form.firstname = item.firstname;
                              form.middlename = item.middlename;
                              form.lastname = item.lastname;
                              form.contactnum = item.contactnum;
                              form.address = item.address;
                              form.birthdate = item.birthdate;
                              form.gender = item.gender;
                              form.image = item.image;
                              form.status = "DISABLED";
                            }

                            handleSubmit(form.id, form);
                          }}
                        >
                          <div className="cursor-pointer hover:text-red-500 scale-100 hover:scale-125 duration-300">
                            <RiDeleteBinLine size="1.2rem" />
                          </div>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
        <Toaster />
      </div>
    </div>
  );
}
