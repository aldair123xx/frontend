<script setup>

</script>

<template>
    <section id="home-view" class="page-view">
        <h1 class="text-6xl font-bold text-white mb-4">
            Hotel Management + IoT: The Perfect Synergy
        </h1>
        <p class="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Unleash your hotel's potential with an intelligent ecosystem that optimizes operations and
            revolutionizes the guest experience.
        </p>
        <pv-button
              label="Entrar"
              class="my-button"
              type="submit"
          />
          <br></br><br></br>
        <h2 class="text-6xl font-bold text-white mb-4">
            Who We Are
        </h2>
        <p class="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Smart Stay is a hotel management platform that integrates reservations, operations, and guest 
            experience in one place. We digitize your hotel so you can save time, reduce costs, and offer 
            a first-class service. We are a team of passionate software engineering students dedicated to 
            revolutionizing the hospitality industry with technology
        </p>
        <h2 class="text-6xl font-bold text-white mb-4">
            Meet the Team
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="team-member-card text-center">
            <img src="https://placehold.co/200x200/2C3E91/FFFFFF?text=IV" alt="Team Member 1" class="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-full shadow-lg mb-4">
            <h4 class="font-brand font-bold text-lg">Italo Verona</h4>
            <p class="text-gray-200">Project Lead & Architect</p>
        </div>
        <div class="team-member-card text-center">
            <img src="https://placehold.co/200x200/E67E22/FFFFFF?text=JD" alt="Team Member 2" class="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-full shadow-lg mb-4 object-cover">
            <h4 class="font-brand font-bold text-lg">Jane Doe</h4>
            <p class="text-gray-200">Frontend Developer</p>
        </div>
        <div class="team-member-card text-center">
            <img src="https://placehold.co/200x200/1ABC9C/FFFFFF?text=JS" alt="Team Member 3" class="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-full shadow-lg mb-4">
            <h4 class="font-brand font-bold text-lg">John Smith</h4>
            <p class="text-gray-200">Backend Developer</p>
        </div>
        <div class="team-member-card text-center">
            <img src="https://placehold.co/200x200/BDC3C7/2C3E91?text=EM" alt="Team Member 4" class="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-full shadow-lg mb-4">
            <h4 class="font-brand font-bold text-lg">Emily Martinez</h4>
            <p class="text-gray-200">UX/UI Designer</p>
        </div>
        <div class="team-member-card text-center">
            <img src="https://placehold.co/200x200/2C3E91/FFFFFF?text=AL" alt="Team Member 5" class="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-full shadow-lg mb-4">
            <h4 class="font-brand font-bold text-lg">Alex Lee</h4>
            <p class="text-gray-200">QA & Testing</p>
         </div>
        </div>
    </section>
</template>

<style scoped>
.my-button {
  width: 15%;
  background-color: orange;
  border-radius: 15px; 
}
</style>
