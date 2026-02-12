import { headers } from "next/headers";
import HomeClient from "./HomeClient";

function inferLangFromAcceptLanguage(
  acceptLanguage: string | null
): "pt" | "en" {
  if (!acceptLanguage) {
    return "en";
  }

  const normalized = acceptLanguage.toLowerCase();
  return normalized.startsWith("pt") || normalized.includes(",pt")
    ? "pt"
    : "en";
}

export default async function Page() {
  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get("accept-language");
  const initialLang = inferLangFromAcceptLanguage(acceptLanguage);

  return <HomeClient initialLang={initialLang} />;
}
