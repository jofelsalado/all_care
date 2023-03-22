import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    user_role,
    email,
    username,
    password,
    firstname,
    middlename,
    lastname,
    contactnum,
    address,
    birthdate,
    gender,
    image,
    date,
    status,
  } = req.body;

  if (req.method === "POST") {
    const add = await prisma.user.create({
      data: {
        user_role: Number(user_role),
        email: email,
        username: username,
        password: password,
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        contactnum: contactnum,
        address: address,
        birthdate: birthdate,
        gender: gender,
        image: image,
        date: date,
        status: status,
      },
    });
    res.json(add);
  } else {
    console.log("Add failed");
  }
}
