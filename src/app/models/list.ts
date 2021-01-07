import { Card } from './card';

export class List {

    id: number;
    board_id: number;
    name: string;
    cards?: Card[];
    important: boolean;

}