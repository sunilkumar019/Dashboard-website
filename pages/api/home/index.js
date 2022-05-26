import data from '../../../data/home/Home';

export default function handler(req, res) {
    res.status(200).json(data)
  }