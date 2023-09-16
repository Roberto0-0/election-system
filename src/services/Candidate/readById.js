import { CandidateRepository } from "../../repositories/CandidateRepository.js"

export class CandidateReadById {
    async execute(candidate_id) {
        const candidate = await CandidateRepository.findByPk(candidate_id)

        if(!candidate) { return new Error("Candidate not found.") }

        return candidate
    }
}
