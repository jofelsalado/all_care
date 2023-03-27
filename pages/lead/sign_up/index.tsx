import { HomeLayout } from "../../layout/home_layout";

export default function SignUpPage() {
    return (
      <div>
       
      </div>
    );
  }
  SignUpPage.getLayout = function getLayout(page: any) {
    return <HomeLayout>{page}</HomeLayout>;
  };