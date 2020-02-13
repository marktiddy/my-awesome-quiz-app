import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { QuestionFormComponent } from "./question-form/question-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ResultsComponent } from "./Components/results/results.component";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { QuestionsComponent } from "./components/questions/questions.component";
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Modules for Masterial
import { MatMenuModule } from "@angular/material/menu";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";

const appRoutes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: ":quizId", component: QuestionsComponent },
  { path: "", redirectTo: "welcome", pathMatch: "prefix" }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    ResultsComponent,
    WelcomeComponent,
    QuestionsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
