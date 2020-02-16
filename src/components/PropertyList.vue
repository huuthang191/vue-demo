<template>
    <el-row v-loading="isLoading" :gutter="20">
        <el-col class="item" v-for="(property, index) in properties"
                :key="property.listingName2 + index"
                :span="6">
            <el-card>
                <el-carousel>
                    <el-carousel-item v-for="image in property.imageUrls" :key="image">
                        <img :src="image">
                    </el-carousel-item>
                </el-carousel>
                <div>
                    <span>{{ property.listingName2 }}</span>
                    <div class="bottom clearfix">
                        {{ property.location }}
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {FETCH_PROPERTIES} from '../store/actions.type';

    export default {
        name: "PropertyList",
        computed: {
            ...mapGetters(["propertiesCount", "isLoading", "properties"])
        },
        mounted() {
            this.fetchProperties();
        },
        methods: {
            fetchProperties() {
                this.$store.dispatch(FETCH_PROPERTIES, {});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .item {
        margin-bottom: 20px;
    }
</style>