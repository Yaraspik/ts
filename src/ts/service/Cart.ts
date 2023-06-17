import Buyable from '../domain/Buyable';
import CartItem from '../components/CartItem';

export default class Cart {
    private _items: CartItem[] = [];

    add(item: Buyable, count: number = 1): void {
        const exist = this._items.find(cartItem => cartItem.item.id === item.id);
        if(!exist) {
            this._items.push(new CartItem(item, count));
            return;
        }
        this._items = this._items.map(cartItem => {
            return new CartItem(item, cartItem.count + count)
        });
    }

    get items(): CartItem[] {
        return [...this._items]; 
    }

    totalCost(): number {
        let totalCost = 0;
        const items = this._items;
        items.forEach(element => {
            totalCost += element.item.price;
        });
        return totalCost;
    }

    totalDiscountCost(discount: number): number {
        let totalCost = 0;
        const items = this._items;
        items.forEach(element => {
            totalCost += element.item.price;
        });
        return totalCost -= totalCost * (discount / 100) ;
    }

    removeItem(id: number): boolean {
        const item = this._items.findIndex((el) => {
            el.item.id === id;
        });
        this._items.splice(item, 1);
        return true;
    }
}