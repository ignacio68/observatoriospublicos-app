import { NativeScriptConfig } from "@nativescript/core";

export default {
  id: "org.ignacio68.observatoriospublicosapp",
  appPath: "src",
  appResourcesPath: "App_Resources",
  android: {
    v8Flags: "--expose_gc",
    markingMode: "none"
  }
} as NativeScriptConfig;
