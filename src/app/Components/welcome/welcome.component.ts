import { Component, OnInit } from "@angular/core";
import { QuestionsService } from "../../questions.service";
import { Question } from "src/app/quiz.model";
import { Quiz } from "../../quiz.model";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  quizzes: Quiz[];
  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.questionsService.getQuizzes().subscribe(quiz => {
      this.quizzes = quiz;
      console.log(this.quizzes);
    });
  }
}
