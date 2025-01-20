import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { loadRemote } from "@module-federation/enhanced/runtime";


export interface WrapperConfig {
    remoteName: string;
    exposedModule: string;
    elementName: string;
    kind: 'module' | 'native';
}

export const initWrapperConfig: WrapperConfig = {
    kind: 'module',
    remoteName: 'remote',
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

        await loadRemote("remote/web-components");
        const root = document.createElement(elementName);
        this.elm.nativeElement.appendChild(root);
    }
}
