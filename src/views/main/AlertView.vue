<template>
  <div>
    <div>
      带有 icon
      表示某种状态时提升可读性。
      <p></p>
      <el-alert title="成功提示的文案" type="success" show-icon>
      </el-alert>
      <p></p>
      <el-alert title="消息提示的文案" type="info" show-icon>
      </el-alert>
      <p></p>
      <el-alert title="警告提示的文案" type="warning" show-icon>
      </el-alert>
      <p></p>
      <el-alert title="错误提示的文案" type="error" show-icon>
      </el-alert>
    </div>
    <div>
      文字居中
      使用 center 属性让文字水平居中。
      <p></p>
      <el-alert title="成功提示的文案" type="success" center show-icon>
      </el-alert>
      <p></p>
      <el-alert title="消息提示的文案" type="info" center show-icon>
      </el-alert>
      <p></p>
      <el-alert title="警告提示的文案" type="warning" center show-icon>
      </el-alert>
      <p></p>
      <el-alert title="错误提示的文案" type="error" center show-icon>
      </el-alert>
    </div>
      <p></p>
    <div>
      带有 icon 和辅助性文字介绍
      <p></p>
      <el-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
      </el-alert>
      <p></p>
      <el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
      </el-alert>
      <p></p>
      <el-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
      </el-alert>
      <p></p>
      <el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
      </el-alert>
    </div>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<style>
.el-alert {
  height: 60px;
}
</style>

<script>
export default {

}
</script>
