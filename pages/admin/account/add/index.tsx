import { UserLayout } from "../../../layout/user_layout";
import { AccountHeader } from "../../components/account_header";
import { AdminLayout } from "../../layout/admin_layout";
import { AddAccount } from "./components/add_account";

export default function Page() {
  return (
    <div className="w-full">
      <AccountHeader header="Accounts" />
      <div className="px-10">
        <AddAccount />
      </div>
    </div>
  );
}

Page.getLayout = function Page(page: any) {
  return <AdminLayout>{page}</AdminLayout>;
};
