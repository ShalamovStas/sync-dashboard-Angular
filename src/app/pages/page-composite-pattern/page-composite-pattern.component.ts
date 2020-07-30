import { Component, OnInit } from '@angular/core';
import { CompositeComponent, Composite, Leaf } from "../../models/composite";
import { DataProvider } from "../../models/questinnareModels/dataProvider";
import { QuestionWizard } from "../../models/questinnareModels/questionWizard";
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-page-composite-pattern',
  templateUrl: './page-composite-pattern.component.html',
  styleUrls: ['./page-composite-pattern.component.scss']
})
export class PageCompositePatternComponent implements OnInit {

  private dataProvider: DataProvider = new DataProvider();
  public questionWizard: QuestionWizard;

  constructor() {
    this.questionWizard = new QuestionWizard(this.dataProvider.getQuestions());
  }

  ngOnInit(): void {
  }

  startPatternTest() {
    const simple = new Leaf();
    console.log('Client: I\'ve got a simple component:');
    this.clientCode(simple);
    console.log('');

    const tree = new Composite();
    const branch1 = new Composite();
    branch1.add(new Leaf());
    branch1.add(new Leaf());
    const branch2 = new Composite();
    branch2.add(new Leaf());
    tree.add(branch1);
    tree.add(branch2);
    console.log('Client: Now I\'ve got a composite tree:');
    this.clientCode(tree);
    console.log('');
  }

  clientCode(component: CompositeComponent) {
    console.log(`RESULT: ${component.operation()}`);
  }

  startTest(){
    this.questionWizard.setStateStart();
    console.log("start")
  }

  next(){
    this.questionWizard.next();
  }
}
