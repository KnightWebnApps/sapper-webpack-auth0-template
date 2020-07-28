<script>
  import { authStore } from "../stores/auth0";
  import Button from "../widgets/Button.svelte";

  export let segment;

  async function login() {
    await authStore.loginWithRedirect();
  }
  async function logout() {
    await authStore.logout(window.location.origin);
  }
</script>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog"
      >
        blog
      </a>
    </li>

    {#if $authStore.isAuthenticated}
      <li style="cursor: pointer">
        <Button onClick={logout}>Logout</Button>
      </li>
    {:else}
      <li style="cursor: pointer">
        <Button onClick={login}>Login</Button>
      </li>
    {/if}

  </ul>
</nav>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: .3em 1em;
  }

  ul {
    margin: 0;
    padding: 0;
		display: flex;
		align-items:center;
		list-style: none;
  }

	[aria-current] {
		background-color: var(--gray);
	}

	li {
		margin-right: 1em;
	}

	a {
		text-decoration: none;
		padding: .5em .7em;
	}
  
</style>
