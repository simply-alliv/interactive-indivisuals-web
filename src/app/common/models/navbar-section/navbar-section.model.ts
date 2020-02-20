import { NavbarSectionItemBase } from './navbar-section-item.model';

export class NavbarSection {
    items: NavbarSectionItemBase[];

    constructor(items: NavbarSectionItemBase[]) {
        this.items = items;
    }
}