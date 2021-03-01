import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../../shared/shared.module';

// components
import { LayoutComponent } from './components/layout/layout.component';

// pages
import { PageAddressesListComponent } from './pages/page-addresses-list/page-addresses-list.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';

import { PageOrdersListComponent } from './pages/page-orders-list/page-orders-list.component';
import { PagePasswordComponent } from './pages/page-password/page-password.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
//image croper
import { ImageCropperModule } from 'ngx-image-cropper';
//
import { ModalModule } from 'ngx-bootstrap/modal';

import { PageOrderDetailsComponent } from './pages/page-order-details/page-order-details.component';
import { PageEditAddressComponent } from './pages/page-edit-address/page-edit-address.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageUploadComponent } from './pages/page-upload/page-upload.component';
import { PagePartnerLoginComponent } from './pages/page-partner-login/page-partner-login.component';
import { PagePartnerRegisterComponent } from './pages/page-partner-register/page-partner-register.component';

@NgModule({
    declarations: [
        // components
        LayoutComponent,
        // pages
        PageAddressesListComponent,
        PageDashboardComponent,
        PageLoginComponent,
        PageOrdersListComponent,
        PagePasswordComponent,
        PageProfileComponent,
        PageOrderDetailsComponent,
        PageEditAddressComponent,
        PageRegisterComponent,
        PageUploadComponent,
        PagePartnerLoginComponent,
        PagePartnerRegisterComponent
    ],
    imports: [
        // modules (angular)
        CommonModule,
        // modules
        AccountRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        //image croper
        ImageCropperModule,
        //popup
        ModalModule.forRoot()
        
    ]
})
export class AccountModule { }
