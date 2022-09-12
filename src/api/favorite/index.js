export async function SetFavorite(body) {
    try {
      const req = await fetch(`${process.env.REACT_APP_API}/reddit/favorite`, {
        method : 'POST',
        headers: {'Content-Type':'application/json'},
        body : JSON.stringify(body)
      })
      if (req.status === 200) {
        return {
          apiError: false,
          apiStatusCode: req.status,
          apiResponse: await req.json()
        }
      }
      return {
        apiError: true,
        apiStatusCode: req.status,
        apiResponse: await(await req.json()).message
      }
    } catch (error) {
      throw new Error(error)
    }
  }