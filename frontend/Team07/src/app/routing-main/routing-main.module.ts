import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { RegisterShowComponent } from '../register-show/register-show.component';

import { LoginStaffComponent } from '../login-staff/login-staff.component';

import { DrugStorageMenuComponent } from '../drug-storage-menu/drug-storage-menu.component';

import { DrugdataComponent } from '../drugdata/drugdata.component';
import { from } from 'rxjs';
import { PostComponent } from '../post/post.component';
import { ShowComponent } from '../show/show.component';
import { DeliveryShowComponent } from '../delivery-show/delivery-show.component';
import { DeliveryComponent } from '../delivery/delivery.component';

import { SalenoteComponent } from '../salenote/salenote.component';
import { SalenoteShowComponent } from '../salenote-show/salenote-show.component';

import { RedcordUseComponent } from '../redcord-use/redcord-use.component';
import { NotificationComponent } from '../notification/notification.component';

import { OrdersDrugComponent } from '../orders-drug/orders-drug.component';

import { ResistanceComponent } from '../resistance/resistance.component';


const routes: Routes = [
  //JOHN
  { path: '', component: LoginStaffComponent },
  { path: 'drug-stroagemenu', component: DrugStorageMenuComponent },
  { path: 'orders-drug', component: OrdersDrugComponent },
  { path: 'resistance', component: ResistanceComponent },




  { path: 'salenote', component: SalenoteComponent },
  { path: 'salenote-show', component: SalenoteShowComponent},
  { path: 'redcord-use', component: RedcordUseComponent },

  { path: 'home', component: HomeComponent },



  { path: 'register', component: RegisterComponent },
  { path: 'register-show', component: RegisterShowComponent },


  { path: 'drug-data', component: DrugdataComponent },

  { path: 'post', component: PostComponent },
  { path: 'show', component: ShowComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'delivery-show', component: DeliveryShowComponent },

  { path: 'notification', component: NotificationComponent },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class RoutingMainModule { }
