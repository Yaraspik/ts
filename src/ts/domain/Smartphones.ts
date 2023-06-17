import Buyable from './Buyable';

export default class SmartPhones implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly countable: boolean = true,
    ) { }
}