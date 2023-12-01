import {FormControl } from '@angular/forms';

export interface UsersInterface {
    id:number;
    firstName: string;
    lastName: string;
    email: string;
    personalId: number;
    profilePhoto: string;
    mobileNumber: string;
    gender: string;
    country: string;
    city: string;
    address: string;
    zipCode: string;
}