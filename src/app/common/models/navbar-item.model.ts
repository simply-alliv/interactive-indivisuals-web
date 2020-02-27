import { NavbarSection } from './navbar-section/navbar-section.model';

export class NavbarItem {
    id: string;
    label: string;
    sections: NavbarSection[];

    constructor(id: string, label: string, sections: NavbarSection[]) {
        this.id = id;
        this.label = label;
        this.sections = sections;
    }
}