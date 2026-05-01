import HomeClient from "./HomeClient";
import type { Locale } from "./home-content";

const DEFAULT_LOCALE: Locale = "pt";

export default function Page() {
  const serverYear = String(new Date().getFullYear());

  return <HomeClient initialLang={DEFAULT_LOCALE} serverYear={serverYear} />;
}
