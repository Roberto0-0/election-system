import { VoteRepository} from "../../repositories/VoteRepository.js"
import { CandidateRepository } from "../../repositories/CandidateRepository.js"
import { DetailsRepository } from "../../repositories/DetailsRepository.js"

export class Voted {
  async execute({ candidate_id, voter_name }) {
    const [ vote, candidate, details ] = await Promise.all([
      VoteRepository.findOne({ where: { name: voter_name } }),
      CandidateRepository.findOne({ where: { id: candidate_id } }),
      DetailsRepository.findOne({ where: { id: 1 } })
    ])

    if(vote) { return new Error(`"${vote.name}" already voted.`) }
    if(!candidate) { return new Error("Candidate not found.") }
    if(!details) { await DetailsRepository.create({ wishes: 0 }) }

    var newCandidateWishe = candidate.wishes += 1
    var newDetailsWishes = details.wishes += 1

    await VoteRepository.create({
      name: voter_name,
      candidate: candidate.name,
      electoralParty: candidate.electoralParty,
      number: candidate.number
    })
    await candidate.update({ wishes: newCandidateWishe })
    await details.update({ wishes: newDetailsWishes })

    return
  }
}
