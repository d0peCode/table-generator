<template>
    <main>
        <hello></hello>
        <table-grid></table-grid>
        <table-generator></table-generator>
    </main>
</template>
<script>
import hello from '../components/index/hello';
import tableGrid from '../components/index/tableGrid';
import tableGenerator from '../components/index/tableGenerator';

export default {
    components: { hello, tableGrid, tableGenerator }
}
</script>
