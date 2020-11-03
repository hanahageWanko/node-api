<template>
  <div :class="[buttonColor, buttonSize]" @click="onClick" class="button">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'UiButton',
  components: {},
  props: {
    color: { type: String, default: 'green' },
    size: { type: String, default: '' }
  },
  computed: {
    buttonColor() {
      return this.color != null ? this.color : 'green'
    },
    buttonSize() {
      return this.size != null ? this.size : ''
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes anim-ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  30% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    background-color: rgba(255, 255, 255, 0);
    opacity: 0;
  }
}

$large: 10px 20px;
$medium: 5px 14px;
$small: 4px 10px;
$radius-size: 4px;
$white: #fff;
$green: rgb(11, 167, 159);
$orange: #f19304;

.button {
  text-align: center;
  padding: $medium;
  border-radius: $radius-size;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-block;
  position: relative;
  z-index: 1;
  overflow: hidden;
  color: $white;
  &.large {
    padding: $large;
  }
  &.small {
    padding: $small;
    font-size: 85%;
  }
  &::before {
    content: '';
    overflow: hidden;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: $radius-size;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: $white;
    transition: ease 0.3s;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(0);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
  }
  &:not(:active):after {
    animation: anim-ripple 1s ease forwards;
  }
  &:hover {
    &::before {
      opacity: 0.2;
    }
  }
  &.green {
    background-color: $green;
  }
  &.orange {
    background-color: $orange;
  }
}
</style>
