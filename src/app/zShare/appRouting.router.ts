import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';
import { MessageDetailsComponent } from '../message-details/message-details.component';
import { SendMessageComponent } from '../send-message/send-message.component';


const routes: Routes =[
    {path:'', component:MessageDetailsComponent},
    {path:'send', component: SendMessageComponent},
    {path:'inbox', component: MessageDetailsComponent},
    {path:'contacts', component: ContactsComponent},
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRouting {}