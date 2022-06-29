

export default async function handler(req, res) {

    const URL = `${(process.env.API_ROUTE)}/customizeservices`;
  
  
    if (req.method === 'GET') {
      const data = await fetch(`${URL}/get`, { method: "GET" });
      const val = await data.json()
      res.send(val)
      
    }
  

  
  
  
  
  
  
  
  }
  
  
  
  
  