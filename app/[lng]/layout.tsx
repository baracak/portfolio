import { Analytics } from "@vercel/analytics/next";
import { dir } from "i18next";
import { ReactNode } from "react";
import Menu from "../components/Menu";
import { LanguageParams } from "../helpers/params.helper";
import { languages } from "../i18n/settings";
import "./../globals.css";
import { Providers } from "./../providers";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: ReactNode;
  params: LanguageParams;
}) {
  return (
    <html lang={lng} dir={dir(lng)} className="dark">
      <body>
        <Providers>
          <div className="flex flex-col items-center">
            <Menu lng={lng} />
            <div className="mx-auto max-w-[1280px] w-full p-6">{children}</div>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
