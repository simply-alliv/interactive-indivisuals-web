import { NavbarSectionItemBase } from './navbar-section-item.model';
import { NavbarSectionItemType } from '../../enums';

export class HeaderNavbarSectionItem extends NavbarSectionItemBase {
    header: string;
    
    constructor(header: string) {
        super(NavbarSectionItemType.header);

        this.header = header;
    }
}