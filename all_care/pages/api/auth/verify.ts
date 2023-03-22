import { Prisma } from "@prisma/client";
import { add } from "date-fns";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

async function exists(args: Prisma.UserCountArgs) {
  const count = await prisma.user.count(args);
  return Boolean(count);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user_role, username, password } = req.body;

  if (req.method === "POST") {
    const userExists = await exists({
      where: {
        username: username,
        password: password,
      },
    });

    res.json(userExists);
  } else {
    console.log("Failed");
  }
}
