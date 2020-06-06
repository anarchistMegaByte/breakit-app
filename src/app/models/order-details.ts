import { MenuItem } from './menu-item';

export interface OrderDetails {
    order_id: number;
    phone_number: string;
    address: string;
    delivery_slot: string;
    menu_items: MenuItem[];
    name: string;
    delivery_date: string;
 }
