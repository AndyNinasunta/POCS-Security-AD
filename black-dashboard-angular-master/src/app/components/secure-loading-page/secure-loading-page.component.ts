import { Component, Input} from "@angular/core";

@Component({
  selector: "app-secure-loading-page",
  templateUrl: "./secure-loading-page.component.html",
  styleUrls: ["./secure-loading-page.component.scss"],
})
export class SecureLoadingPageComponent {
  @Input() isLoadPage: boolean = false;

  constructor() {}
}
