const { createApp } = Vue

createApp({
  data() {
    return {
      Phones: [
        { name: 'Apple' },
        { name: 'Huawei' },
        { name: 'Samsung' },
        { name: 'Redmi' }
      ],
      AddPhone: '',
    }
  },
  methods: {
    PhoneAdder() {
      if (this.AddPhone!='') {
        this.Phones.push({ name: this.AddPhone });
        this.AddPhone = '';
      }
    },
    Delete(index){
     this.Phones = this.Phones.filter((phone,i) => i!= index )
    }
  }
}).mount('#app')

