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

  let serverYear: string | null = null;
  const fetchYearFromGoogle = async () => {
    const res = await fetch("https://www.google.com", {
      method: "HEAD",
      cache: "no-store",
    });
    const dateHeader = res.headers.get("date");
    if (!dateHeader) {
      return null;
    }
    const year = new Date(dateHeader).getUTCFullYear();
    return Number.isNaN(year) ? null : String(year);
  };
  const fetchYearFromWorldTime = async () => {
    const res = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC", {
      cache: "no-store",
    });
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    if (!data?.datetime) {
      return null;
    }
    return String(new Date(data.datetime).getUTCFullYear());
  };

  const fetchYearFromTimeApi = async () => {
    const res = await fetch(
      "https://timeapi.io/api/Time/current/zone?timeZone=UTC",
      { cache: "no-store" }
    );
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    if (!data?.year) {
      return null;
    }
    return String(data.year);
  };

  try {
    serverYear =
      (await fetchYearFromGoogle()) ??
      (await fetchYearFromWorldTime()) ??
      (await fetchYearFromTimeApi());
  } catch {
    serverYear = null;
  }

  return <HomeClient initialLang={initialLang} serverYear={serverYear} />;
}
