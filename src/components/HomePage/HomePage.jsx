import { HomeNavbar } from "./HomeNavbar";
import { Footer } from "../footer";
import { HomeFormSection } from "./HomeFormSection";
import { InfoSection } from "./InfoSection";
export function HomePage() {
  return (
    <div>
      <HomeNavbar />
      <HomeFormSection />
      <InfoSection />
      <Footer />
    </div>
  );
}
