import { CandidateReadAll } from "../services/Candidate/readAll.js"
import { CandidateReadById } from "../services/Candidate/readById.js"
import { VoteReadAll } from "../services/Vote/readAll.js"
import { Voted } from "../services/Vote/vote.js"

export class VoteController {
  async getAllByWishes(req, res) {
    try {
      const candidateGetAllByWishesService = new CandidateReadAll()
      const candidateGetAllByWishesResult = await candidateGetAllByWishesService.execute()

      if(candidateGetAllByWishesResult instanceof Error) { return res.status(400).json({ message: candidateGetAllByWishesResult.message }) }

      return res.render("vote/electionLayout.ejs", { data: candidateGetAllByWishesResult })
    } catch(err) {
      console.error(err)
      return res.status(500).json({ message: "Internal server error." })
    }
  }
  
  async votedIndex(req, res) {
    const { candidate_id } = req.params
    
    try {
      const candidateGetByIdService = new CandidateReadById()
      const candidateGetByIdResult = await candidateGetByIdService.execute(candidate_id)

      if(candidateGetByIdResult instanceof Error) { return res.status(400).json({ message: candidateGetByIdResult.message }) }

      return res.render("vote/index.ejs", { data: candidateGetByIdResult })
    } catch(err) {
      console.error(err)
      return res.status(500).json({ message: "Internal server error." })
    }
  }
  
  async voted(req, res) {
    const { candidate_id } = req.params
    const { name } = req.body
    
    try {
      const votedService = new Voted()
      const votedResult = await votedService.execute({
        candidate_id,
        voter_name: name
      })

      if(votedResult instanceof Error) { return res.status(400).json({ message: votedResult.message }) }

      return res.redirect("/details")
    } catch(err) {
      console.error(err)
      return res.status(500).json({ message: "Internal server error." })
    }
  }
}
