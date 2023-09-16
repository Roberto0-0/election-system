import { VoteRepository } from "../../repositories/VoteRepository.js"

export class VoteReadAll {
    async execute() {
        const voters = await VoteRepository.findAll({
            order: [
                ["wishes", "DESC"]
            ]
        })

        if(!voters) { return new Error("There are no voters.") }

        return voters
    }
}
