<template>
    <el-row class="wrapper" justify="between" align="center">
        <el-col :md="2" :xs="12" class="logo">
            <img src="https://imomi-buyer-dev.azurewebsites.net/images/imomi-logo-gradient-horizontal.svg" alt="">
        </el-col>
        <el-col :md="8" :xs="12" class="search-box">
            <el-input placeholder="Search anything (project, street, area etc.)"
                      @change="onFilterChanged()"
                      v-model="searchData.keyword">
            </el-input>
        </el-col>
        <el-col :md="14" :xs="24" class="top-menu">
            <ul>
                <li>Add a Property</li>
                <li>Become an Agent</li>
                <li>My Shortlist</li>
                <li>Log In</li>
            </ul>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                searchData: {
                    keyword: ''
                }
            }
        },
        methods: {
            onFilterChanged() {
                console.log(this.searchData);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        padding: 10px 0;
    }

    .logo {
        text-align: left;
    }

    .search-box {
        /deep/ .el-input {
            text-align: left;
            input {
                border-radius: 30px !important;
                max-width: 300px;
            }
        }
    }

    .top-menu {
        ul {
            float: right;
            list-style: none;
            li {
                float: left;
                margin: 0 20px;

                &:last-of-type {
                    margin-right: 0;
                }
            }
        }
    }
</style>