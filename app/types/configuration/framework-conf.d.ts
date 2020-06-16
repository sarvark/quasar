import {
  QuasarIconSets,
  QuasarLanguageCodes,
  DeepPartial,
  QuasarPluginOptions
} from "quasar";

interface QuasarFrameworkInnerConfiguration {
  brand: {
    primary: string;
    secondary: string;
    accent: string;
    dark: string;
    positive: string;
    negative: string;
    info: string;
    warning: string;
  };
  capacitor: {
    iosStatusBarPadding: boolean;
  };
  cordova: {
    iosStatusBarPadding: boolean;
    backButtonExit: boolean;
  };
  dark: boolean | "auto";
  loading: {
    delay: number;
    message: false | string;
    spinnerSize: number;
    spinnerColor: string;
    messageColor: string;
    backgroundColor: string;
    spinner: Vue;
    customClass: string;
  };
  loadingBar: { color: string; size: string; position: string };
  notify: {
    position: string;
    timeout: number;
    textColor: string;
    actions: { icon: string; color: string }[];
  };
}

interface QuasarBaseFrameworkObjectConfiguration {
  plugins?: (keyof QuasarPluginOptions["plugins"])[];
  config?: DeepPartial<QuasarFrameworkInnerConfiguration>;
  iconSet?: QuasarIconSets;
  lang?: QuasarLanguageCodes;
  cssAddon?: boolean;
}

interface QuasarAutoFrameworkObjectConfiguration
  extends QuasarBaseFrameworkObjectConfiguration {
  importStrategy: "auto";
  /** @default 'kebab' */
  autoImportComponentCase?: "kebab" | "pascal" | "combined";
}

interface QuasarAllFrameworkObjectConfiguration
  extends QuasarBaseFrameworkObjectConfiguration {
  importStrategy: "all";
}

declare module "quasar" {
  type QuasarFrameworkConfiguration =
    | QuasarAutoFrameworkObjectConfiguration
    | QuasarAllFrameworkObjectConfiguration;
}
