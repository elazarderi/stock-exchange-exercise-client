import {
  Directive, Input, ComponentRef, ElementRef, Renderer2, ViewContainerRef, OnInit, OnChanges, SimpleChanges
} from '@angular/core';
import { LoaderComponent } from '../components/loader/loader.component';

@Directive({
  selector: '[loading]'
})
export class LoadingDirective implements OnInit, OnChanges {

  @Input() loading: boolean;

  private componentRef: ComponentRef<LoaderComponent>

  constructor(private el: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.createLoader();
    this.updateLoaderState();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('loading' in changes && this.componentRef) {
      this.updateLoaderState();
    }
  }

  get loaderElement(): HTMLElement {
    return this.componentRef.location.nativeElement;
  }

  createLoader() {
    this.componentRef = this.viewContainerRef.createComponent(LoaderComponent);
    this.el.nativeElement.appendChild(this.loaderElement);
  }

  updateLoaderState() {
    this.componentRef.instance.isLoading = this.loading;
  }
}
