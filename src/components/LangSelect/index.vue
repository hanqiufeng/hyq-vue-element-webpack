<template>
  <el-dropdown trigger="click" class='international' @command="handleSetLanguage">
    <div>
      <svg-icon class-name='international-icon' icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  computed: {
    language() {
      console.log(this.$store.getters.language);
      return this.$store.getters.language;
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("setLanguage", lang);
      this.$message({
        message: "您已切换系统语言！",
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px !important;
}
</style>


