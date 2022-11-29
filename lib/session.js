// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
export const sessionOptions = {
    password: "1asdsad1wd121s2s12s1asdsad1wd121s2s12s1asdsad1wd121s2s12s",
    cookieName: "iron-session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  };
  