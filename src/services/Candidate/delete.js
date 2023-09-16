import { CandidateRepository } from "../../repositories/CandidateRepository.js"

export class CandidateDelete {
    async execute(id) {
        const candidate= await CandidateRepository.findByPk(id)

        if(!candidate) { return new Error("Candidate not found.") }

        await candidate.destroy()

        return
    }
}
