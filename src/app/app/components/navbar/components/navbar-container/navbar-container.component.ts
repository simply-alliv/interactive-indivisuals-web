import { Component, ComponentFactoryResolver, ApplicationRef, Injector, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { DomPortalHost, CdkPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.scss']
})
export class NavbarContainerComponent implements AfterViewInit, OnDestroy {
  @ViewChild(CdkPortal) portal: CdkPortal;

  host: DomPortalHost;


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  ngAfterViewInit() {
    this.host = new DomPortalHost(
      document.querySelector('#navbarContainer'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    this.host.attach(this.portal);
  }

  ngOnDestroy() {
    this.host.detach();
  }
}
