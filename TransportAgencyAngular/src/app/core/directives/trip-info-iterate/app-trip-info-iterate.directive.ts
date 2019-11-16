import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIterateInfoForOf]'
})
export class AppTripInfoIterateDirective implements OnInit {

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<object>) { }

  @Input('appIterateInfoForOf')
  infoTrip: Map<string, string>;

  ngOnInit(): void {
    this.container.clear();
    for (let info of this.infoTrip) {
      this.container.createEmbeddedView(this.template, new AppIterateContext(info));
    }
  }
}

class AppIterateContext {
  label: string;
  value: string;

  constructor(public $implicit: [string, string]) {
      this.label = $implicit[0];
      this.value = $implicit[1];
  }
}
