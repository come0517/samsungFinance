<template>
    <base-card class="">
        <v-card-text class="pa-4 ">
            <div class="d-flex justify-space-between">
                <div class="pr-4">
                    <h5 class="text-18 ">{{ title }}</h5>
                    <p class="">{{ subTitle }}</p>
                </div>
                <img v-if="image" style="height:96px;width:96px" :src="image" />
            </div>
            <slot name="basic-info-slot"></slot>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions
            v-if="link"
            class="primary--text grey lighten-5 py-4"
            style="cursor:pointer"
        >
            {{ link }}
        </v-card-actions>
    </base-card>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        }
    }
}
</script>
