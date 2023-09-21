import "./globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Noto_Sans_Medefaidrin } from "next/font/google";
import Header from "./components/Header/header";
import Footer from "./components/footer/footer";
import FooterHead from "./components/foterHead/footerHead";
const inter = Noto_Sans_Medefaidrin({ subsets: ["latin"], weight: "400" });
export const metadata = {
  title: "  Dua",
  description: " dua web site",
};
export default function RootLayout({ children, params }) {
  // const locale = useLocale();
  // if (params.locale !== locale) {
  //   notFound();
  // }

  return (
    <>
      {/* <html lang={"eng"}>
        <body className={inter.className}>
          <Header />
          {children}
          <FooterHead />
          <Footer />
        </body>
      </html> */}
    </>
  );
}
