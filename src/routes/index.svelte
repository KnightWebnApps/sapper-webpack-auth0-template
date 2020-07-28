<script>
  import IconButton from "../widgets/IconButton.svelte";
  import Button from "../widgets/Button.svelte";
	import { authStore } from '../stores/auth0'
</script>

<svelte:head>
  <title>Knight Apps Sapper Template</title>
</svelte:head>
{#if $authStore.loading}
  <div style="display: flex; place-content: center; place-items: center">
    <h2>loading...</h2>
    <div class="lds-circle">
      <div />
    </div>
  </div>
{:else}
  <main>
    {#if $authStore.user}
      <h1>Hi, {$authStore.isAuthenticated && $authStore.user.name}</h1>
    {:else}
      <h1>Great success!</h1>
    {/if}
    <figure>
      {#if $authStore.isAuthenticated}
        <img src={$authStore.user.picture} alt="avatar" />
      {:else}
        <img alt="Borat" src="great-success.png" />
        <figcaption>HIGH FIVE!</figcaption>
      {/if}
    </figure>
    <h1>Is authenticated? {$authStore.isAuthenticated}</h1>
    <h3>
      iat: {$authStore.getIdTokenClaims && new Date($authStore.getIdTokenClaims.iat * 1000)}
    </h3>
    <h3>
      exp: {$authStore.getIdTokenClaims && new Date($authStore.getIdTokenClaims.exp * 1000)}
    </h3>
  </main>
{/if}
