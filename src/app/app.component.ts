import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void {
    var element = document.getElementById("hie");
    element.style.height = "" + document.getElementById("left").offsetHeight + "px";
  }

  goBack() {
    window.history.back();
  }
}
