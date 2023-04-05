import { GetServerSideProps } from "next";
import { HomeLayout } from "../../layout/home_layout";
import { prisma } from "../../../lib/prisma";
import { LeadLogin } from "./lead_login";

interface Users {
  users: {
    id: string;
    username: string;
    password: string;
    user_role: string;
  }[];
}

export default function LeadLoginPage({ users }: Users) {
  return (
    <div>
      <LeadLogin users={users} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany({
    where: {
      user_role: 1,
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

LeadLoginPage.getLayout = function getLayout(page: any) {
  return <HomeLayout>{page}</HomeLayout>;
};
