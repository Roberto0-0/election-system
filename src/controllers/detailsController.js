import { DetailsService } from "../services/Details/index.js"

export class DetailsController {
  async index(req, res) {
    try {
      const detailsService = new DetailsService()
      const detailsResult = await detailsService.execute()

      if(detailsResult instanceof Error) { return res.status(400).json({ message: detailsResult.message }) }

      return res.render("details/index.ejs", { 
        data: detailsResult
       })
    } catch(err) {
      console.error(err)
      return res.status(500).json({ message: "Internal server error." })
    }
  }
}
