import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () =>
      import('../app/pages/pages.module').then((x) => x.PagesModule),
  },
  {
    path: 'create-note',
    loadChildren: () =>
      import('../app/create-note/create-note.module').then(
        (x) => x.CreateNoteModule
      ),
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'pages',
  },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
