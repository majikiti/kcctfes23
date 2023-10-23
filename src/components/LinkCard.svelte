<script lang="ts">
  export let href: string
  export let target: string | undefined
  export let color: string
  export let bgColor: string
</script>

<a {href} {target} style="--color:{color};--bgColor:{bgColor}">
  <slot />
</a>

<style lang="scss">
  a {
    display: flex;
    width: 16rem;
    height: 10rem;
    padding: 2px;

    align-items: center;
    justify-content: center;
    border-radius: 1.2rem;

    color: white;
    background-color: var(--bgColor);
    /* backdrop-filter: blur(8px); */
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
