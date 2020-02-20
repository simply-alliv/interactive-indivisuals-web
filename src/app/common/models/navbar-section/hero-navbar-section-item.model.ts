import { NavbarSectionItemBase } from './navbar-section-item.model';
import { NavbarSectionItemType } from '../../enums';

export class HeroNavbarSectionItem extends NavbarSectionItemBase {
    heroText: string;

    constructor(heroText: string) {
        super(NavbarSectionItemType.hero);

        this.heroText = heroText;
    }
}