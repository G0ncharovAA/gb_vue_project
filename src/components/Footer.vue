<template>
    <footer class="footer center">
        <div class="footer-column">
            <div class="container-logo">
                <img src="../assets/img/logo.svg" alt="logo" class="img-logo" />
                <p class="logo-title">Interno</p>
            </div>
            <p class="names-caption">
                It is a long established fact that a reader will be distracted
                lookings.
            </p>
            <img class="names-media" src="../assets/img/media.png" alt="media" />
        </div>
        <nav class="footer-column footer-gap">
            <h6 class="footer-nav-title">Pages</h6>
            <router-link to="/" class="menu-item">Home</router-link>
            <router-link to="/project" class="menu-item">Project</router-link>
            <router-link to="/blog" class="menu-item">Blog</router-link>
        </nav>
        <div class="footer-column footer-gap">
            <h6 class="footer-contacts-title">Contact</h6>
            <p class="contacts-address">
                55 East Birchwood Ave. Brooklyn, New York 11201
            </p>
            <p class="contacts-email">contact@interno.com</p>
            <p class="contacts-phone">(123) 456 - 7890</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>