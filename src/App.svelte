<script>
  import UAParser from 'ua-parser-js';

  const parser = new UAParser(navigator.userAgent);
  const browser = parser.getBrowser();
  const os = parser.getOS();
</script>

<main>
  <h1>My browser</h1>
  <dl>
    <dt>browser</dt>
    <dd>{browser.name} {browser.version}</dd>

    <dt>operating system</dt>
    <dd>{os.name} {os.version}</dd>
  </dl>
</main>

<style>

	main {
    font-size: 62.5%; 
		margin: 0 auto;
		max-width: 320px;
		padding: 1em;
		text-align: center;
	}

  h1 {
    font-size: 2rem;
  }

  dl {
    font-size: 1.6rem;
    margin: auto;
  }

  dt {
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  dd {
    background: rgba(0, 0, 0, .05);
    margin: .5rem;
    padding: .5rem;
  }
</style>