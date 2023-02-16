export const useFormStore = defineStore('formStore', {
    state: () => ({ activeTab : ''}),
    getters: {
    },
    actions: {
      setActiveTab(tab){
        this.activeTab = tab;
      }
    },
  })