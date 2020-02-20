import { NavbarSectionItemBase } from './navbar-section-item.model';
import { NavbarSectionItemType } from '../../enums';

export class PrimaryLinkNavbarSectionItem extends NavbarSectionItemBase {
    label: string;
    routerLink: string;

    constructor(label: string, routerLink: string) {
        super(NavbarSectionItemType.primaryLink);

        this.label = label;
        this.routerLink = routerLink;
    }
}