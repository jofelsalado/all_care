import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = req.query.id;
  const {
    password,
    firstname,
    middlename,
    lastname,
    contactnum,
    address,
    image,
    status,
  } = req.body;

  if (req.method === "DELETE") {
    const user = await prisma.user.delete({
      where: {
        id: Number(userId),
      },
    });
    res.json(user);
  } else if (req.method === "PATCH") {
    const user = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        password: password,
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        contactnum: contactnum,
        address: address,
        image: image,
        status: status,
      },
    });
    res.json(user);
  } else {
    console.log("Delete failed");
  }
}
