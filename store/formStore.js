export const useFormStore = defineStore('formStore', {
    state: () => ({ activeTab : ''}),
    state: () => ({ activeTab : '', isJobFormActive: false, companyInfo : {companyName:"mrcooper", companyId:"ade78d28-2745-4437-acd3-04cf5a61e0c0"}}),
    getters: {
    },
    actions: {
      setActiveTab(tab){
        this.activeTab = tab;
      }
    },
  })