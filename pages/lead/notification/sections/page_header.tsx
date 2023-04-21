import { AccountHeader } from "../../components/account_header";
import james from "../../../../public/images/james-modified.png";

export function PageHeader() {
  return (
    <div>
      <AccountHeader header="Notification" img={james} name="James Villarojo" />
    </div>
  );
}
