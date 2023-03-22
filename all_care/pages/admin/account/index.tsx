import { GetServerSideProps } from "next";
import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { AccountTable } from "./components/account_table";
import { prisma } from "../../../lib/prisma";
import { AdminLayout } from "../layout/admin_layout";

interface Users {
  users: {
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
    status: string;
    date: string;
  }[];
}

export default function Page({ users }: Users) {
  return (
    <div className="w-full">
      <AccountHeader header="Accounts" />
      <div className="px-10 w-full">
        <AccountTable users={users} />
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany();

  return {
    props: {
      users,
    },
  };
};

Page.getLayout = function Page(page: any) {
  return <AdminLayout>{page}</AdminLayout>;
};
