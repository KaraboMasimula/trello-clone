import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';


const routes: Routes = [
  { path: "", redirectTo: "boards", pathMatch: 'full' },
  { path: "boards", component: BoardsComponent },
  { path: "board/:id", component: BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
