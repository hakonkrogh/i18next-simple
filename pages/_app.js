import { appWithTranslation } from "next-i18next";

import baseI18config from "../next-i18next.config";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

const intlLocale = {
  en: "en-US",
  de: "de-DE",
};

export default appWithTranslation(MyApp, {
  ...baseI18config,
  interpolation: {
    format(value, format, locale, { currency }) {
      if (format === "currency") {
        return new Intl.NumberFormat(intlLocale[locale], {
          style: "currency",
          currency,
        }).format(value);
      }

      return value;
    },
  },
});
