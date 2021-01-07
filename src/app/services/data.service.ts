import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { Card } from '../models/card';
import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  l1card1: Card = {
    list_id: 1,
    id: 1,
    name: "Do Planning",
  }

  l2card1: Card = {
    list_id: 1,
    id: 1,
    name: "Do Planning",
  }

  b1list1: List = {
    board_id: 1,
    id: 1,
    name: "To-Do",
    cards: [
      this.l1card1
    ],
    important: false,
  }

  b1list2: List = {
    board_id: 1,
    id: 2,
    name: "To-Do",
    cards: [
      this.l1card1
    ],
    important: false,
  }

  board1: Board = {
    id: 1,
    name: "conneckt",
    color: "blue",
    background_img: "bg-1,jpg",
    lists: [
      this.b1list1,
      this.b1list2,
    ],
  }

  constructor() { }
}
