<template>
    <search-box :modelValue="searchValue" :legendValue="'User'" @keyup.enter="fetchPlayerStats('helltf')"/>
</template>

<script>
import SearchBox from '../components/commandtable/SearchBox.vue'

export default {
    components:{
        SearchBox
    },
    data(){
        return{
            searchValue:""
        }
    },
    methods:{
        fetchPlayerStats(player){
            return getUserStats()
        }
    }
}
</script>

<style>

</style>