
declare namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      PORT: string;
      // ... otras variables que uses
    }
  }