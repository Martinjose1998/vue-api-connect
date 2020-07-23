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
            .get('https://api.nutritionix.com/v1_1/search/'+this.search+'?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=APPID&appKey=APPKEY')
            .then(response => (this.info = response.data.hits))
          }
        
      }
    }
  })
