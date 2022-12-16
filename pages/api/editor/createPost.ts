import type { NextApiRequest, NextApiResponse } from "next";
import { AppGlobal } from "../../../utils/app.constants";

type Data = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // Get the data from the POST request body
    const data = req.body;

    // Do something with the data (e.g. save it to a database)
    const baseUrl = AppGlobal.apiBaseUrl;

    // Send a response
    res.status(200).json({ message: "Success" });
  } else {
    // Return an error if the request method is not POST
    res.status(405).end();
  }
}
