export class Booking {
    constructor({
        id,
        userId,
        roomId,
        check_in,
        check_out,
        total_price,
        status
    }) {
        this.id = id;
        this.userId = userId;
        this.roomId = roomId;
        this.check_in = new Date(check_in);
        this.check_out = new Date(check_out);
        this.total_price = total_price;
        this.status = status;
    }

    getNights() {
        const diff = this.check_out - this.check_in;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    formattedCheckIn() {
        return this.check_in.toLocaleDateString();
    }

    formattedCheckOut() {
        return this.check_out.toLocaleDateString();
    }

    isConfirmed() {
        return this.status === 'confirmed';
    }

    isPending() {
        return this.status === 'pending';
    }
}
