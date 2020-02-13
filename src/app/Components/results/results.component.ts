import { Component, OnInit, Input } from "@angular/core";
import { Answers } from "../../quiz.model";
import { Questions } from "../../quiz.model";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent {
  //Takes an input called answers of type Answers
  //Input makes the answers available to the parent component (questions) so it can pass the answers in
  @Input() answers: Answers;
}
