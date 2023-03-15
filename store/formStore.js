export const useFormStore = defineStore('formStore', {
    state: () => ({ activeTab : ''}),
    state: () => ({ activeTab : '', isJobFormActive: false, companyInfo : {companyName:"mrcooper", companyId:"77b3740e220f4ba9866838a09c1e571e"}}),
    getters: {
    },
    actions: {
      setActiveTab(tab){
        this.activeTab = tab;
      }
    },
  })