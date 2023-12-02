<template>
    <header class="header center">
        <div class="container-logo">
            <img src="../assets/img/logo.svg" alt="logo" class="img-logo" />
            <p class="logo-title">Interno</p>
        </div>
        <nav class="nav-menu">
            <router-link to="/" class="menu-item" >Home</router-link>
            <router-link to="/project" class="menu-item" >Project</router-link>
            <router-link to="/blog" class="menu-item" >Blog</router-link>
        </nav>
    </header>
</template>
  

<script>
export default {
    name: 'Header',
}
</script>
