import { GetServerSideProps } from "next";
import { HomeLayout } from "../../layout/home_layout";
import { AdminLogin } from "./admin_login";
import { prisma } from "../../../lib/prisma";

interface Users {
  users: {
    id: string;
    username: string;
    password: string;
  }[];
}

export default function AdminPageLogin({ users }: Users) {
  return (
    <div>
      <AdminLogin users={users} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany({
    where: {
      user_role: 0,
    },
    select: {
      id: true,
      username: true,
      password: true,
    },
  });

  return {
    props: {
      users,
    },
  };
};

AdminPageLogin.getLayout = function getLayout(page: any) {
  return <HomeLayout>{page}</HomeLayout>;
};
