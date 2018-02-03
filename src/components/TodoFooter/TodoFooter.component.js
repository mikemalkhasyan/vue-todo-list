export default {
  name: 'todo-footer',
  components: {}, 
  props: [],
  data () {
    return {
      completedCount: null
    }
  },
  computed: {

  },
  mounted () {
    this.getCompletedTodosCount();
  },
  methods: {
    getCompletedTodosCount(){
        this.$todos.$on('completed-count', (count) => this.completedCount = count);
    }
  }
}
