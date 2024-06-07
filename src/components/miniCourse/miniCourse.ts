import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class MiniCourse extends Vue {
  @Prop(Object) private course!: any;
  private defaultImg: string = "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg";

  private showProfile(name: string) {
    this.$router.push({ path: "/profile", query: { name } });
  }
}
