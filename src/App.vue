<template>
    <div id="app">
        <el-container>
            <el-header height="65px">
                <Header></Header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    header {
        border-bottom: 1px solid #ddd;
    }

    main {
        min-height: calc(100vh - 125px);
    }
</style>
