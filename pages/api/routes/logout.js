import { withIronSessionApiRoute } from "iron-session/next";
import Router, { useRouter } from "next/router";
import { sessionOptions } from "../../../lib/session";

export default withIronSessionApiRoute(logoutRoute, sessionOptions);
async function logoutRoute(req, res) {
  req.session.destroy();
  res.json({ isLoggedIn: false, login: ""});
}
