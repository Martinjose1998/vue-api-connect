var app = new Vue({
    el: '#app',
    data () 
    {
      return {
        message: 'Hello vue!',
        info: null,
        search: ''
      }
    },
    mounted () 
    {
        
    },
    methods : 
    {
      first:function()
      {
          if(this.search === '' || this.search == null)
          {
            this.info = null;
          }
          else
          {
            axios
            .get('https://api.nutritionix.com/v1_1/search/'+this.search+'?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=f89a9be7&appKey=646af2a6f5221a09202b9346dd3be1d8')
            .then(response => (this.info = response.data.hits))
          }
        
      }
    }
  })