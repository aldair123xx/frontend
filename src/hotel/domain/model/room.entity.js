export class Room {
    constructor({
        id,
        name,
        description,
        price,
        tv,
        internet,
        air_conditioning,
        breakfast_included,
        available
    }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.tv = tv;
        this.internet = internet;
        this.air_conditioning = air_conditioning;
        this.breakfast_included = breakfast_included;
        this.available = available;
    }

    isAvailable() {
        return this.available === true;
    }

    formattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }
}
