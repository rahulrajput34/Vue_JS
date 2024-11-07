<script>
//  npm install sweetalert --save-dev
// we installed sweetalert to get the fency alert HAHA!
import flash from '@/mixins/flash.js';
export default{
  mixins: [
    flash
  ]
}
</script>

<template>
  <div>
    <p>
      <button @click="flash('It Works on the about page')">
        Click Me
      </button>
    </p>
  </div>
</template>

