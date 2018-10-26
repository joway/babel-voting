<template>
  <div id="app">
    <router-view class="main" />
    <footer class="footer">
      <div class="footer-items row">
        <div class="col-xs-4 col-xs-offset-4" style="text-align: center;">
          Created by <a href="https://joway.io" target="_blank">@Joway</a> in
          <a href="https://en.wikipedia.org/wiki/Elections_in_China" target="_blank">China</a>.
          <div class="divider"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
a {
  color: #000;
  text-decoration: none;
}
#app {
  height: 100%;
}
.main {
  height: 100%;
}

.divider {
  height: 1px;
  width: 100%;
  background-color: gainsboro;
}

.card {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 8px 32px; */
}
.footer {
  position: fixed;
  height: 100px;
  bottom: 0;
  width: 100%;
}
.footer-items {
  margin: 32px;
  line-height: 36px;
  color: gray;
}

.submit-button {
  background-color: lightskyblue;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 3px;
}
</style>
