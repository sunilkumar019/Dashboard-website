import { aboutJson } from "../../data/aboutJson"

export default function handler(req, res) {
    res.status(200).json(aboutJson)
  }
  