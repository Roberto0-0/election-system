import { CandidateRepository } from "../../repositories/CandidateRepository.js"

export class CandidateReadAll {
    async execute() {
        const candidates = await CandidateRepository.findAll({
            order: [
                ["wishes", "DESC"]
            ]
        })

        if(!candidates) { return new Error("There are no candidates.") }

        return candidates
    }
}
