import { NavbarSectionItemType } from '../../enums';

export class FooterItem {
    label: string;
    routerLink: string;

    constructor(label: string, routerLink: string) {
        this.label = label;
        this.routerLink = routerLink;
    }
}