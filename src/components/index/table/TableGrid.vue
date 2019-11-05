<template>
    <section class="table-grid" :class="show ? '' : 'table-grid__collapsed'">
        <div class="table-grid__tool">
            <p v-if="show" @click="show = !show">Schowaj</p>
            <p v-if="!show" @click="show = !show">Pokaż</p>
        </div>
        <div class="table-grid__info">
            <h3 class="heading-tertiary">Wybierz wielkość nowej tabeli</h3>
            <p>Maksymalna wielkość tabeli:</p>
            <div class="table-grid__form">
                <label for="x">wiersze:</label>
                <input id="x" type="number" v-model="gridSize.max.x" min="1" class="table-grid__input">
                <label for="y">kolumny:</label>
                <input id="y" type="number" v-model="gridSize.max.y" min="1" class="table-grid__input">
            </div>
            <p>Najedź i kliknij aby wybrać wielkość nowej tabeli -></p>
            <p>Wielkość tabeli możesz edytować również na górze.</p>
        </div>
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
    </section>
</template>
<script>
import { eventBus } from '../../../helpers/eventBus';

export default {
    data() {
        return {
            show: true,
            gridSize: {
                max: { x: 10, y: 10 },
                hovered: { x: 0, y: 0 },
                selected: { x: 0, y: 0 }
            }
        }
    },
    created() {
        eventBus.$on('toggle::grid', () => {
            this.show = !this.show;
        })
    },
    methods: {
        generateTable() {
            eventBus.$emit('generate::table', this.gridSize.selected);
            this.show = false;
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
<style scoped lang="scss" src="../../../styles/scss/components/_table-grid.scss"></style>
