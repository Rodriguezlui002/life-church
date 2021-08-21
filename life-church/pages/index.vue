<template>
  <div class="bg-life-light overflow-auto">
    <TheHero class="mx-4 mt-10 mb-10" />
    <div class="grid grid-cols-1 sm:grid-cols-2 m-6 gap-6 justify-items-center">
      <SectionBody class="col-span-full" />
      <div class="p-6 max-w-xs bg-gray-50 text-gray-800 text-center shadow rounded">
        <h3 class="text-2xl font-semibold">Yet another heading</h3>
        <p class=" sm:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora rerum ipsa dicta at enim perferendis architecto iste aspernatur. Dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="p-6 max-w-xs bg-gray-50 text-gray-800 shadow rounded">
        <p class="sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores totam, nulla alias ea laboriosam quod maxime necessitatibus natus cupiditate?</p>
      </div>
    </div>
    <TheShowcase />
    <LocationItem />
    <div class="bg-gray-50 mb-10 p-6 text-gray-800 shadow">
      <h3 class="text-2xl font-semibold">Come visit us!</h3>
      <p class="sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt est architecto, quia eum laudantium distinctio obcaecati ducimus quaerat id? Odit repellat quas fugiat odio iure magnam cupiditate numquam nostrum alias! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'base'
}
</script>
