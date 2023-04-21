import ReactStars from "react-stars";
import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { AdminLayout } from "../layout/admin_layout";
import { ReviewCard } from "./components/review-card";

export default function ReviewsPage() {
  return (
    <div className="">
      <AccountHeader header="Reviews" name="James Villarojo" />
      <div className="p-10 flex flex-col gap-y-10">
        <ReviewCard
          name="Alicia Keys"
          date="April 21, 2023"
          desc="    Explained everything very well, called me back every time I called, was
        very good at explaining to me, thanks for the help"
          rate={3}
        />
        <ReviewCard
          name="Alicia Keys"
          date="April 21, 2023"
          desc="    Explained everything very well, called me back every time I called, was
        very good at explaining to me, thanks for the help"
          rate={3}
        />
        <ReviewCard
          name="Alicia Keys"
          date="April 21, 2023"
          desc="    Explained everything very well, called me back every time I called, was
        very good at explaining to me, thanks for the help"
          rate={3}
        />
        <ReviewCard
          name="Alicia Keys"
          date="April 21, 2023"
          desc="    Explained everything very well, called me back every time I called, was
        very good at explaining to me, thanks for the help"
          rate={3}
        />
        <ReviewCard
          name="Alicia Keys"
          date="April 21, 2023"
          desc="    Explained everything very well, called me back every time I called, was
        very good at explaining to me, thanks for the help"
          rate={3}
        />
      </div>
    </div>
  );
}

ReviewsPage.getLayout = function getLayout(page: any) {
  return <AdminLayout>{page}</AdminLayout>;
};
