import { NavbarSectionItemBase } from './navbar-section-item.model';
import { NavbarSectionItemType } from '../../enums';

export class SecondaryLinkNavbarSectionItem extends NavbarSectionItemBase {
    label: string;
    description: string;
    routerLink: string;

    constructor(label: string, description: string, routerLink: string) {
        super(NavbarSectionItemType.secondaryLink);

        this.label = label;
        this.description = description;
        this.routerLink = routerLink;
    }
}