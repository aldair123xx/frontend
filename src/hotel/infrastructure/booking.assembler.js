import { Booking } from "../domain/model/booking.entity.js";

export class BookingAssembler {
    static toEntityFromResource(resource) {
        return new Booking({ ...resource });
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}: ${response.statusText}`);
            return [];
        }
        let resources = Array.isArray(response.data) ? response.data : response.data['bookings'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}
