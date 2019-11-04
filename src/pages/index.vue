<template>
    <main>
        <hello></hello>
        <table-grid></table-grid>
    </main>
</template>
<script>
import hello from '../components/index/hello';
import tableGrid from '../components/index/tableGrid';

export default {
    components: { hello, tableGrid }
}
</script>
