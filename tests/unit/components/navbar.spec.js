import { mount } from "@vue/test-utils";
import navbar from '../../../src/components/index/navbar';

describe('navbar.vue', () => {
    test('if navbar contains logo and paragraph', () => {
        const wrapper = mount(navbar);
        expect(wrapper.text()).toContain('Table Generator');
        expect(wrapper.text()).toContain('Application which generates customizable table. Made by tymdev for Koleo.');
    })
});
