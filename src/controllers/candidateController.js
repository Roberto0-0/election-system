import { CandidateCreate } from "../services/Candidate/create.js"
import { CandidateDelete } from "../services/Candidate/delete.js"
import { CandidateReadAll } from "../services/Candidate/readAll.js"

export class CandidateController {
    createIndex(req, res) { return res.render("candidate/create/index.ejs") }

    async create(req, res) {
        const { ...data } = req.body
        const image = req.file.filename

        data.image = image

        try {
            const candidateCreateService = new CandidateCreate()
            const candidateCreateResult = await candidateCreateService.execute(data)

            if(candidateCreateResult instanceof Error) { return res.status(400).json({ message: candidateCreateResult.message }) }

            return res.redirect("/details")
        } catch(err) {
            console.error(err)
            return res.status(500).json({ message: "Internal server error." })
        }
    }

    async getAll(req, res) {
        try {
            const candidateGetAllService = new CandidateReadAll()
            const candidateGetAllResult = await candidateGetAllService.execute()

            if(candidateGetAllResult instanceof Error) { return res.status(400).json({ message: candidateGetAllResult.message }) }

            return res.status(200).json({
                data: candidateGetAllResult
            })
        } catch(err) {
            console.error(err)
            return res.status(500).jsob({ message: "Internal server error." })
        }
    }

    async delete(req, res) {
        const { id } = req.params

        try {
            const candidateDeleteService = new CandidateDelete()
            const candidateDeleteResult = await candidateDeleteService.execute(id)

            if(candidateDeleteResult instanceof Error) { return res.status(400).json({ message: candidateDeleteResult.message }) }

            return res.redirect("/details")
        } catch(err) {
            console.error(err)
            return res.status(500).send({ message: "Internal server error!" })
        }
    }
}
