<template>
    <div class="info">
        <h2>Profile</h2>
        <img src="../assets/photo.jpg" class="icon">

        <table align="center" class="info">
          <tbody>
            <tr>
              <td>Name</td>
              <td>fef9fb</td>
            </tr>
            <tr>
              <td>Skills</td>
              <td>
                C / PHP / HTML / CSS / JavaScript<br>
                Laravel / jQuery / Vue.js / Wordpress<br>
                MySQL / PostgreSql<br>
                Windows / MacOS / CentOS / Redhat / Debian
              </td>
            </tr>
            <tr>
              <td>Github</td>
              <td>
                <a href="https://github.com/fef9fb" target="_blank">@fef9fb</a>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
// a {
//   color: #42b983;
// }
</style>
