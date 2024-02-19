import { defineNuxtModule } from "@nuxt/kit";

export interface ModuleOptions {
  devtools: boolean;
  webUiUrl: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-mailpit",
    configKey: "mailpit",
  },
  defaults: {
    devtools: true,
    webUiUrl: "http://localhost:8025",
  },
  setup(options, nuxt) {
    if (nuxt.options.dev && options.devtools) {
      nuxt.hook("devtools:customTabs", (tabs) => {
        tabs.push({
          name: "nuxt-mailpit",
          title: "Mailpit",
          icon: `${options.webUiUrl}/mailpit.svg`,
          category: "modules",
          view: {
            type: "iframe",
            src: options.webUiUrl,
            persistent: true,
          },
        });
      });
    }
  },
});
