<template>
    <section class="table-grid" v-show="!tableGenerated">
        <h2 class="heading-secondary">Wybierz wielkość nowej tabeli</h2>
        <p>Maksymalna wielkość tabeli:</p>
        <div class="table-grid__form">
            <label for="x">wiersze:</label>
            <input id="x" type="number" v-model="gridSize.max.x" min="1" class="table-grid__input">
            <label for="y">kolumny:</label>
            <input id="y" type="number" v-model="gridSize.max.y" min="1" class="table-grid__input">
        </div>
        <p>Najedź i kliknij aby wybrać wielkość nowej tabeli:</p>
        <div class="table-grid__grid">
            <div class="table-grid__grid-row"
                 v-for="n in parseInt(gridSize.max.y)"
                 :key="n">
                <div class="table-grid__grid-col"
                     v-for="i in parseInt(gridSize.max.x)"
                     @mouseover="selectHovered(n, i)"
                     @click="selectNewTableSize(i, n)"
                     :key="i"
                     :class="n <= gridSize.hovered.x && i <= gridSize.hovered.y
                                ? 'table-grid__grid-col--hover'
                                : ''">
                    {{ n + 'x' + i }}
                </div>
            </div>
        </div>
        <p>Wielkość tabeli będziesz mógł edytować również po wybraniu.</p>
    </section>
</template>
<script>
import { eventBus } from '../../helpers/eventBus';

export default {
    data() {
        return {
            tableGenerated: false,
            gridSize: {
                max: { x: 10, y: 10 },
                hovered: { x: 0, y: 0 },
                selected: { x: 0, y: 0 }
            }
        }
    },
    methods: {
        generateTable() {
            eventBus.$emit('generate::table', this.gridSize.selected);
            this.tableGenerated = true;
        },
        selectHovered(x, y) {
            this.gridSize.hovered.x = x;
            this.gridSize.hovered.y = y;
        },
        selectNewTableSize(x, y) {
            this.gridSize.selected.x = x;
            this.gridSize.selected.y = y;
            this.generateTable();
        }
    }
}
</script>
<style scoped lang="scss" src="../../styles/scss/components/_table-grid.scss"></style>
