<template>
    <main>
        <top-bar></top-bar>
        <spreadsheet-table></spreadsheet-table>
    </main>
</template>
<script>
import TopBar from '../components/index/TopBar';
import SpreadsheetTable from '../components/index/SpreadsheetTable';

export default {
    components: { TopBar, SpreadsheetTable }
}
</script>
