import { List } from './list';

export class Board {

    id: number;
    name: string;
    color: string;
    background_img: string;
    lists?: List[];
}