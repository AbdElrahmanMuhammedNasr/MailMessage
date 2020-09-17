import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MessageshortComponent } from './messageshort/messageshort.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { HeaderComponent } from './header/header.component';
import { AppRouting } from './zShare/appRouting.router';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { ReplayComponent } from './replay/replay.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideBarComponent,
    MessageshortComponent,
    MessageDetailsComponent,
    SendMessageComponent,
    HeaderComponent,
    ContactsComponent,
    ReplayComponent,
  ],
  imports: [
    BrowserModule,
    // ChartsModule,
    AppRouting,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
