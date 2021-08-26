<template>
    <div class="bg-gray-50 shadow rounded-lg p-2 mx-2 my-6 flex space-x-6">
        <img class="w-32 sm:w-56 object-cover rounded" :src="imageUrl" alt="Church">
        <div class="flex flex-col justify-between">
            <div>
                <h3 class="text-life-dark text-2xl">{{ location }}</h3>
                <span class="text-life-dark text-sm font-light">{{ locationDetail }}</span>
            </div>
            <div>{{ hours }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        location: {
            type: String,
            required: true
        },
        locationDetail: {
            type: String,
            required: true
        },
        hours: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            default: ''
        }
    }
}
</script>