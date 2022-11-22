import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { ExtratoComponent } from "./extrato/extrato.component";
import { NovaTransferenciaCOmponent } from "./nova-transferencia/nova-transferencia.componente";

export const routes: Routes = [
    {path: '', redirectTo: 'extrato', pathMatch: 'full'},
    {path: 'extrato', component: ExtratoComponent},
    {path: 'nova-transferencia', component: NovaTransferenciaCOmponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}