export const useFormStore = defineStore('formStore', {
    state: () => ({ activeTab : '', isJobFormActive: false}),
    getters: {
    },
    actions: {
      setActiveTab(tab){
        this.activeTab = tab;
      }
    },
  })