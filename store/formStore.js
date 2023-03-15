export const useFormStore = defineStore('formStore', {
    state: () => ({ activeTab : ''}),
    state: () => ({ activeTab : '', isJobFormActive: false, companyInfo : {companyName:"mrcooper", companyId:"77143d77-52cc-43cd-9e7d-efcf15d0708b"}}),
    getters: {
    },
    actions: {
      setActiveTab(tab){
        this.activeTab = tab;
      }
    },
  })