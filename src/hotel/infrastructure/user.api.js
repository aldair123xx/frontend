import { BaseApi } from "../../shared/infrastructure/base-api.js";
import { BaseEndpoint } from "../../shared/infrastructure/base-endpoint.js";

// Definimos las rutas desde variables de entorno
const roomsEndpointPath = import.meta.env.VITE_ROOMS_ENDPOINT_PATH;
const bookingsEndpointPath = import.meta.env.VITE_BOOKINGS_ENDPOINT_PATH;

export class HotelApi extends BaseApi {
    #roomsEndpoint;
    #bookingsEndpoint;

    constructor() {
        super();
        this.#roomsEndpoint = new BaseEndpoint(this, roomsEndpointPath);
        this.#bookingsEndpoint = new BaseEndpoint(this, bookingsEndpointPath);
    }

    getRooms() {
        return this.#roomsEndpoint.getAll();
    }

    getRoomById(id) {
        return this.#roomsEndpoint.getById(id);
    }

    createRoom(resource) {
        return this.#roomsEndpoint.create(resource);
    }

    updateRoom(resource) {
        return this.#roomsEndpoint.update(resource.id, resource);
    }

    deleteRoom(id) {
        return this.#roomsEndpoint.delete(id);
    }

    
    getBookings() {
        return this.#bookingsEndpoint.getAll();
    }

    getBookingById(id) {
        return this.#bookingsEndpoint.getById(id);
    }

    createBooking(resource) {
        return this.#bookingsEndpoint.create(resource);
    }

    updateBooking(resource) {
        return this.#bookingsEndpoint.update(resource.id, resource);
    }

    deleteBooking(id) {
        return this.#bookingsEndpoint.delete(id);
    }
}
