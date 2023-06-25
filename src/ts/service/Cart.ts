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
        return this._items.reduce((acc, el) => { 
            return acc += el.item.price; 
        }, 0); 
    } 
 
    totalDiscountCost(discount: number): number { 
        let totalCost = this.totalCost(); 
        return totalCost -= totalCost * (discount / 100) ; 
    } 
 
    removeItem(id: number): void { 
        this._items = this._items.filter((el: CartItem) => el.item.id !== id); 
    } 
}