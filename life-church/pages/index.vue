<template>
  <div class="bg-life-light overflow-auto">
    <TheHero class="mt-10 mb-10" />
    <div class="grid grid-cols-1 sm:grid-cols-4 m-6 gap-6 justify-items-center">
      <SectionBody class="col-span-full" />
      <div class="sm:col-span-2 p-6 max-w-xs bg-gray-50 text-gray-800 text-center shadow rounded">
        <h3 class="text-2xl font-semibold">Yet another heading</h3>
        <p class=" sm:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora rerum ipsa dicta at enim perferendis architecto iste aspernatur. Dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="sm:col-span-2 p-6 max-w-xs bg-gray-50 text-gray-800 shadow rounded">
        <p class="sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores totam, nulla alias ea laboriosam quod maxime necessitatibus natus cupiditate?</p>
      </div>
      <div class="sm:col-start-2 sm:col-end-4 p-6 max-w-xs bg-gray-50 text-gray-800 shadow rounded">
        <p class="sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores totam, nulla alias ea laboriosam quod maxime necessitatibus natus cupiditate?</p>
      </div>
    </div>
    <TheShowcase />
    <div class="flex justify-center">
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIglesiavidayakima%2F&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="700" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
    <LocationItem
      location="Life Church Moxee"
      locationDetail="Across from Starbucks"
      hours="Open Mon-Fri 11AM to 3PM"
      :imageUrl="require('@/assets/shiba.jpg')" />
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
