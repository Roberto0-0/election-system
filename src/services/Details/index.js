import { CandidateReadAll } from "../Candidate/readAll.js"
import { DetailsRepository } from "../../repositories/DetailsRepository.js"
import { sections } from "../../config/sections/index.js"

export class DetailsService {
    async execute() {
        var allSections = 0

        const details = await DetailsRepository.findOne({ where: { id: 1 } })
        const candidateGetAllService = new CandidateReadAll()
        const candidateGetAllResult = await candidateGetAllService.execute()

        if(!details) { await DetailsRepository.create({ wishes: 0 }) }
        if(candidateGetAllResult instanceof Error) { return new Error(candidateGetAllResult) }

        for(var section of sections) { allSections = ((details.wishes/section.sections)*100).toFixed(2) }

        return {
            candidates: candidateGetAllResult,
            sections: allSections,
            allWishes: details.wishes            
        }
    }
}