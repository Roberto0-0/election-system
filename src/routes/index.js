import { Router } from "express"
import { storage } from "../services/Multer/fileConfig.js"
import multer from "multer"
import { CandidateController } from "../controllers/candidateController.js"
import { VoteController } from "../controllers/voteController.js"
import { DetailsController } from "../controllers/detailsController.js"

const upload = multer({ storage: storage })

export class AppRoutes {
  constructor() {
    this.router = Router()
    
    this.candidate()
    this.details()
    this.vote()
  }

  candidate() {
    this.router.get("/candidates", new CandidateController().getAll)
    this.router.get("/candidate/create", new CandidateController().createIndex)
    this.router.post("/candidate/create", upload.single("image"), new CandidateController().create)
    this.router.get("/candidate/detele/:id", new CandidateController().delete)
  }

  details() { this.router.get("/details", new DetailsController().index) }

  vote() {
    this.router.get("/vote", new VoteController().getAllByWishes)
    this.router.get("/vote/:candidate_id", new VoteController().votedIndex)
    this.router.post("/vote/:candidate_id", new VoteController().voted)
  }
  
}
