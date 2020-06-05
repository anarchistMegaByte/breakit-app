import { MenuItem } from './menu-item';

export interface OrderDetails {
    phone_number: string;
    address: string;
    delivery_slot: string;
    menu_items: MenuItem[];
    name: string;
 }
