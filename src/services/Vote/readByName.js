import { VoteRepository } from "../../repositories/VoteRepository.js"

export class VoteReadByName {
    async execute(candidate_id) {
        const vote = await VoteRepository.findByPk(candidate_id)

        if(!vote) { return new Error("Vote not found.") }

        return vote
    }
}
