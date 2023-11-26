<template>
    <div>
        <h1>Product List</h1>
        <div v-for="product in products" :key="product.id">
            <h2 @click="showDetails(product)">{{ product.name }}</h2>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ProductList',
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    methods: {
        showDetails(product) {
            console.log("product clicked");
            this.$emit('show-details', product);
        }
    }
};
</script>
  