const roomList = () => import('./presentation/view/room/room-list.vue');
const roomForm = () => import('./presentation/view/room/room-form.vue');
const bookingList = () => import('./presentation/view/booking/booking-list.vue');
const bookingForm = () => import('./presentation/view/booking/booking-form.vue');

const hotelRoutes = [
  { path: 'rooms', component: roomList },
  { path: 'rooms/new', component: roomForm },
  { path: 'rooms/:id/edit', component: roomForm },

  { path: 'bookings', component: bookingList },
  { path: 'bookings/new', component: bookingForm },
  { path: 'bookings/:id/edit', component: bookingForm },
];

export default hotelRoutes;
