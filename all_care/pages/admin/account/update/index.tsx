import { UserLayout } from "../../../layout/user_layout";
import { AccountHeader } from "../../components/account_header";
import { AdminLayout } from "../../layout/admin_layout";
import { UpdateAccount } from "./components/update_account";

export default function Page() {
    return (
        <div className="w-full">
            <AccountHeader />
            <div className="px-10">
                <UpdateAccount />
            </div>
        </div>
    );
}

Page.getLayout = function Page(page: any) {
    return <AdminLayout>{page}</AdminLayout>;
};