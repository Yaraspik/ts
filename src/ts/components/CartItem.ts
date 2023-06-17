import Buyable from "../domain/Buyable";

export default class CartItem {
    constructor(
        readonly item: Buyable,
        readonly count: number
    ) { }
}