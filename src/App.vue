<router-view></router-view>
<template>
  <div>
    <h1>Home page</h1>
    <router-link to=" /about">About</router-link>
    // or
    <RouterLink :to="{ name:  About }">About</RouterLink>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>

routes  [
    ...
    ...
    {
        path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails
    },
  ]

  <router-link :to="{ name: 'ProductDetails', params: { id: product.id }}">
    See details
</router-link>

<template>
  The product ID is {{ $route.params.id }}
</template>

routes: [
    ...
    ...
    {
    path: '/:catchAll(.*)',
    name: 'NotFound',
        component: NotFount
    },
  ]
})

methods: {
  resirect() {
      this.$router.push({ name: 'Home' })
  },
  back() {
      this.$router.go(-1)
  // or same thing
  this.$router.back()
  },
  forward() {
      this.$router.go(1)
  // or samwe thing
  this.$router.forward()
  }   
}

<template>
  Filter Brand : {{ $route.query.brand }}
</template>

methods: {
  search(brand) {
  this.$router.push({ name: 'Home', query: brand })
  },
}

routes: [
    ...
    ...
    {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true,
    children: {
        path: 'tags',
        components: Tags,
    }, 
     },
  ]

  <template>
    Product no
    {{ $route.params.id }}
  
    Liste des tags associé au produit
    <router-view></router-view>
  </template>
  