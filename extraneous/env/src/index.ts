interface Env {
  websitePort: number;
  previewPort: number;
  previewUrl: string;
  serverPort: number;
  serverUrl: string;
}

export type Mode = "development" | "production";

export const env: Record<Mode, Env> = {
  development: {
    websitePort: 7700,

    previewPort: 7701,
    previewUrl: "http://127.0.0.1:7701",

    serverPort: 7800,
    serverUrl: "http://127.0.0.1:7800",
  },
  production: {
    websitePort: 7700,

    previewPort: 7701,
    previewUrl: "http://127.0.0.1:7701",

    serverPort: 7800,
    serverUrl: "http://127.0.0.1:7800",
  },
};
