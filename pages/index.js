import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Homepage = () => {
  const { t } = useTranslation("common");

  return <main>{t("price", { currency: "USD", value: 60 })}</main>;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default Homepage;
