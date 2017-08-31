<template>
    <div id="app">
        <nav>
            <ul>
                <li><router-link :to="{path: '/'}">Home</router-link></li>
                <li><router-link :to="{path: '/login'}">Login</router-link></li>
                <li><router-link :to="{path: '/count'}">Count</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'App',
    computed: mapGetters({
        // 取得 loading state
        loading: 'getLoading'
    }),
}
</script>

<style scope>

</style>
