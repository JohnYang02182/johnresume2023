<template>
  <div class="container-wrapper">
    <header>
      <p>JSlLearnMap</p>
    </header>
    <main>
      <section class="section-content">
        <h3>About JS Execution Context Enviroment:</h3>
        <p>Global means "not inside the function"</p>
        <p>Global JS execution context Enviroment create two things to coder: </p>
        <ul>
          <li>Global Object</li>
          <li>this => if it in the browser and with no code ,and it will be window.</li>
        </ul>
      </section>
      <section class="section-content">
        <h3>When you run the code:</h3>
        <p>It will follow that</p>
        <ul>
          <li>Global object</li>
          <li>this</li>
          <li>Outer environment (if it's in the function)</li>
          <li>your code</li>
        </ul>
        <div class="card-wrapper">
          <h3 class="title card-header-title">Execution Context</h3>
          <div class="card-content">
            <div class="card-content-items">
              <p>Global Object</p>
            </div>
            <div class="card-content-items">
              <p>this</p>
            </div>
            <div class="card-content-items">
              <p>Outer Environment</p>
            </div>
            <div class="card-content-items card-content-footer">Your code</div>
          </div>
        </div>
      </section>
      <section class="section-content">
        <h3>About Creation and hoisting:</h3>
        <p>When the execution context is created, then it setup Memory Space for Variable and Function is called 'hoisting'.</p>
        <p>Global JS execution context Enviroment create two things to coder: </p>
        <p>the different between Value & Function</p>
        <ul>
          <li>valuable => could be accessed limitly before it appear in lexical environment.</li>
          <li>function => Have already been set in the memery space.</li>
        </ul>
      </section>
    </main>
    <footer></footer>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.container-wrapper {
  position: relative;
  box-sizing: border-box;
  .card-wrapper {
    position: relative;
    padding: 16px;
    width: 100%;
    border-radius: 4px;
    background-color: #1a1a1a;
    .card-content {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      align-content: center;
      justify-self: center;
      &-items {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px 12px;
        background-color: #42b883;
        border-radius: 12px;
        text-align: center;
        font-size: 32px;
        line-height: 1.2;
      }
      p {
        margin: 0;
        font-size: 32px;
        line-height: 1.2;
        text-align: center;
      }
      .card-content-footer {
        display: block;
        flex : 100%;
        padding: 0 12px;
        width: 100%;
        height: 72px;
        font-size: 32px;
        line-height: 72px;
      }
    }
  }
  h3 {
    margin: 0 0 12px 0;
    font-size: 24px;
    line-height: 1.5;
    color: #ebebeb;
    font-weight: bold;
  }
}
</style>