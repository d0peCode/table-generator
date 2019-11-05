import { mount, shallowMount } from "@vue/test-utils";
import TableTool from '../../../src/components/index/table/TableTool';
import store from "../../../src/store/store";

describe('TableTool.vue', () => {
    const wrapper = shallowMount(TableTool, { store });
    test('if modifyTable change table size', () => {
        wrapper.vm.modifyTable('row', 1)
        console.log(wrapper.vm.$data, TableTool.computed.tableSize.get, wrapper.vm.computed)
    })
});
