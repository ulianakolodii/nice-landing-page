import Header from "./Header";
import MainBanner from "./MainBanner";
import AdvantagesBanner from "./AdvantagesBanner";
import Contacts from "./Contacts";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <MainBanner />
      <AdvantagesBanner />
      <Contacts />
      <Footer />
    </main>
  );
}
