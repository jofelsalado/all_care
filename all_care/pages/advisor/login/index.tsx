import { GetServerSideProps } from "next";
import { HomeLayout } from "../../layout/home_layout";
import { prisma } from "../../../lib/prisma";
import { AdvisorLogin } from "./advisor_login";

interface Users {
  users: {
    id: string;
    username: string;
    password: string;
    user_role: string;
  }[];
}

export default function AdvisorLoginPage({ users }: Users) {
  return (
    <div>
      <AdvisorLogin users={users} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany({
    where: {
      user_role: 2,
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

AdvisorLoginPage.getLayout = function getLayout(page: any) {
  return <HomeLayout>{page}</HomeLayout>;
};
