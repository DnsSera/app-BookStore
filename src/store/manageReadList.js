import { computed, reactive } from 'vue';

export const state = reactive({
    isSidebarActive: false,
});

export const isSidebarActive = computed({
    get() {
      return state.isSidebarActive;
    },
  });

export const toggleSidebar = () => {
    state.isSidebarActive = !state.isSidebarActive;
}

export const activateSidebar = () => {
    state.isSidebarActive = true;
}

export const deactivateSidebar = () => {
    state.isSidebarActive = false;
}

