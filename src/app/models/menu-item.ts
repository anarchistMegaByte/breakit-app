// {"data": [{"image": "menuitems/index.jpeg", "item": "Poha", "restaurant": "Jai Ambe", "price": 20, "is_veg": true}]}

export interface MenuItem {
    food_item_id: number;
    image: string;
    item: string;
    restaurant: string;
    price: number;
    is_veg: boolean;
    quantity: number;
 }