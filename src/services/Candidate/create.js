import { CandidateRepository } from "../../repositories/CandidateRepository.js"

export class CandidateCreate {
    async execute({ ...data }) {
        const candidate = await CandidateRepository.findOne({ where: { name: data.name } })

        if(candidate) { return new Error("Candidate name laready registered.") }

        return await CandidateRepository.create(data)
    }
}
