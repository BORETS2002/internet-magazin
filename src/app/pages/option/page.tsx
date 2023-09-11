import Kuller from "../kuller/page";
import Stakan from "../stakan/page";

import Pompa from "@/app/pages/pompa/page";
import ContactGrid from "@/app/components/contactGrid/contactGrid";

const page = () => {
  return (
    <>
      <ContactGrid />
      <Pompa />
      <Stakan />
      <Kuller />
    </>
  );
};

export default page;
