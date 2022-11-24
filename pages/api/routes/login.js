import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../../lib/session"
import { userCheck } from "../controllers/auth";

export default withIronSessionApiRoute(async (req, res) => {
  const {username, password, email} = await req.body;
  try {
    const response = await userCheck(req,res)
    if(response) {
      console.log(response)
      const user = { isLoggedIn: true, username};
      req.session.user = user;
      await req.session.save();
      res.status(200).json(user);
      }
    else res.status(204).end()
    }catch (error) {
      res.status(500).json(error);
  }
}, sessionOptions);
