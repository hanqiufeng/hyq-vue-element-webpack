import Vue from "vue";
import VueI18n from "vue-i18n";
import Cookies from "js-cookie";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN"; // element-ui lang
import elementEnLocale from "element-ui/lib/locale/lang/en"; // element-ui lang
import zhLocale from "./zh";
import enLocale from "./en";

Vue.use(VueI18n);

const messages = {
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  en: {
    ...enLocale,
    ...elementEnLocale
  }
};

const i18n = new VueI18n({
  // set locale
  // options: en or zh
  locale: Cookies.get("language") || "zh",
  // set locale messages
  messages
});

export default i18n;
