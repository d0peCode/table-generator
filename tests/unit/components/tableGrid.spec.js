import { mount } from "@vue/test-utils";
import tableGrid from '../../../src/components/index/table/TableGrid';

describe('TableGrid.vue', () => {
    const wrapper = mount(tableGrid);
    test('if tableGrid default grid max size is 10x10', () => {
        expect(wrapper.vm.$data.gridSize.max.x).toBe(10);
        expect(wrapper.vm.$data.gridSize.max.y).toBe(10);
    });
    test('if bind proper class after mouseover', async () => {
        wrapper.setData({
            gridSize: {
                max: { x: 10, y: 10 },
                hovered: { x: 1, y: 1 },
                selected: { x: 0, y: 0 }
            }
        });
        expect(
            wrapper
                .find('.table-grid__grid-col--hover')
                .classes('table-grid__grid-col--hover')
        ).toBe(true);
    });
    test('if it hide after choosing grid', () => {
        wrapper.setData({ show: false });
        expect(wrapper.find('.table-grid').classes()).toContain('table-grid__collapsed')
    });
    test('if event emitter work', () => {
        wrapper.vm.$emit('generate::table', {x: 1, y: 1})
        expect(wrapper.emitted()).toBeTruthy()
    });
});
