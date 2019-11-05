<template>
    <section class="table-tool">
        <h2 class="heading-secondary">Twoja tabela</h2>
        <p>Użyj + / - aby dodać / usunąć kolumnę / wiersz:</p>
        <div class="table-tool__manager">
            <div class="table-tool__plus" @click="modifyTable('column', 1)"></div>
            <div class="table-tool__minus" @click="modifyTable('column', -1)"></div>
            <p>{{ tableSize.x }} x {{ tableSize.y }}</p>
            <div class="table-tool__plus" @click="modifyTable('row', 1)"></div>
            <div class="table-tool__minus" @click="modifyTable('row', -1)"></div>
        </div>
        <button type="button" @click="clearTable()" class="table-tool__button">Wyczyść tabelę</button>
    </section>
</template>
<script>
import { eventBus } from "../../../helpers/eventBus";

export default {
    computed: {
        tableSize: {
            get() {
                return this.$store.getters.getTableSize;
            },
            set(newValue) {
                return this.$store.dispatch('setTableSize', { data: newValue });
            }
        }
    },
    methods: {
        modifyTable(line, by) {
            this.tableSize = {
                x: line === 'row'
                    ? this.tableSize.x
                    : this.tableSize.x + parseInt(by),
                y: line === 'row'
                    ? this.tableSize.y + parseInt(by)
                    : this.tableSize.y
            };
        },
        clearTable() {
            eventBus.$emit('toggle::grid');
            this.$store.dispatch("setTableValues", { data: [] });
            this.tableSize = {x: 4, y: 4 };
        }
    }
}
</script>
<style scoped lang="scss" src="../../../styles/scss/components/_table-tool.scss"></style>
