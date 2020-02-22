import { FooterItem } from './footer-item.model';

export class FooterSection {
    header: string;
    items: FooterItem[];

    constructor(header: string, items: FooterItem[]) {
        this.header = header;
        this.items = items;
    }
}