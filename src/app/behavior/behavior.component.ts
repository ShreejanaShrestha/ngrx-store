import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.scss']
})
export class BehaviorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // creating a variable of subject
    const subject = new Subject();

    // creating or deriving an observable from subject using the
    // below method and assing to variable series$
    // the observable series$ is emitting the values of the subject
    const series$ = subject.asObservable();

    subject.next(1);
    subject.next(2);
    subject.complete();
    series$.subscribe(console.log);
  }

}
