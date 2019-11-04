<template>
    <section class="table-generator" v-if="called">
        <h2 class="heading-secondary">Twoja tabela:</h2>
        <table>
            <caption><span>{{ tableSize.x }} x {{ tableSize.y }}</span></caption>
            <tr v-for="n in parseInt(tableSize.y)"
                :key="n">
                {{ n }}
            </tr>
        </table>
    </section>
</template>
<script>
import { eventBus } from "../../helpers/eventBus";

export default {
    data() {
        return {
            called: false,
            tableSize: {
                x: 0,
                y: 0
            }
        }
    },
    created() {
        eventBus.$on('generate::table', data => {
            this.called = true;
            this.tableSize.x = data.x;
            this.tableSize.y = data.y;
            console.log(data)
        })
    }
}
</script>
<style scoped lang="scss" src="../../styles/scss/components/_table-generator.scss"></style>
