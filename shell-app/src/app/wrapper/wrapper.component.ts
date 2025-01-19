import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { loadRemoteModule } from '@softarc/native-federation-runtime';


export interface WrapperConfig {
    remoteName: string;
    exposedModule: string;
    elementName: string;
    kind: 'module' | 'native';
}

export const initWrapperConfig: WrapperConfig = {
    kind: 'module',
    remoteName: 'remote_app',
    exposedModule: 'web-components',
    elementName: 'remote-element',
};

@Component({
    selector: 'app-wrapper',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './wrapper.component.html',
})
export class WrapperComponent implements OnInit {
    elm = inject(ElementRef);

    @Input() config = initWrapperConfig;

    async ngOnInit() {
        const { exposedModule, remoteName, elementName } = this.config;

        await loadRemoteModule(remoteName, exposedModule);
        const root = document.createElement(elementName);
        this.elm.nativeElement.appendChild(root);
    }
}