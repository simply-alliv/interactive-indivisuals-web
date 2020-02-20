import { NavbarSection } from './navbar-section/navbar-section.model';

export class NavbarItem {
    label: string;
    sections: NavbarSection[];

    constructor(label: string, sections: NavbarSection[]) {
        this.label = label;
        this.sections = sections;
    }
}