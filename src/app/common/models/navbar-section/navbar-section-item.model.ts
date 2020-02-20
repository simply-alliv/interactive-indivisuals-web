import { NavbarSectionItemType } from '../../enums';

export abstract class NavbarSectionItemBase {
    type: NavbarSectionItemType;

    constructor(type: NavbarSectionItemType) {
        this.type = type;
    }
}