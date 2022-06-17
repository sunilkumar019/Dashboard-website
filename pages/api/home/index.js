 

export default async function handler(req, res) {

    const URL = `${(process.env.API_ROUTE)}/customizeHome`;
  
  
    if (req.method === 'GET') {
      const data = await fetch(`${URL}/get`, { method: "GET" });
      const val = await data.json()
      res.send(val)
      
    }
  
    else if (req.method === 'PUT') {
      //  console.log(req.method)
      const response = await fetch(`${URL}/update`,{method: "PUT"} );
      const val =await  response.json();
      res.send(val)
  
    }
  
  
  
  
  
  
  
  }
  
  
  
  
  