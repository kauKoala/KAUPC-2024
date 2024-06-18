import Image from "next/image";
import section_id from "@/app/_constants/section_id.js";
import Logo from "@/app/_components/Logo";
import Spacing from "@/app/_components/Spacing";
import Summary from "@/app/_containers/Summary";
import Info from "@/app/_containers/Info";
import Apply from "@/app/_containers/Apply";
import Link_ from "@/app/_containers/Link_";
import Footer from "@/app/_components/Footer";


export default function Home() {
  return (
      <>
        <Logo id={section_id.LOGO} />
        <Summary id={section_id.SUM} />
        <Spacing />
        <Info id={section_id.INFO} />
        <Apply id={section_id.APPLY} />
        <Link_ id={section_id.LINK} />
        <Footer id={section_id.FOOT} />
      </>
  );
}
