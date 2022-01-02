const e={},n=`<h1>Version Specification</h1>
<p>birdpaper-ui follows the Semantic Versioning specification.</p>
<h2>Version</h2>
<ul>
<li>The latest: <img class="li-img" src="https://img.shields.io/npm/v/birdpaper-ui.svg?style=badge"/></li>
</ul>
<p>For more version information, see <a href="/components/version_c">Update Log</a></p>
<h2>Version number meaning</h2>
<p>X.Y.Z-suffix.n</p>
<ul>
<li>X- Major Version: releases major changes or major updates that are incompatible
-y - This version number: Releases a backward compatible feature or API</li>
<li>Z- Minor version: Releases backward compatible fixes or feature optimizations</li>
<li>suffix- Version suffix: indicates different version types</li>
<li>n- Version number: indicates the number of releases of the current version. The RTM version does not have a version number</li>
</ul>
<h2>Suffix</h2>
<ul>
<li><code>alpha</code> - Development phase iteration, only updated to the development repository</li>
<li><code>beat</code> - Public beta release after development, source code released and tagged</li>
<li><code>RC</code> - Pre-release version, based on beat as acceptance version, no major difference from production version, release source code, Tag, and release RC channel (later)</li>
<li><code>RTM</code> - A production version, usually with the suffix and serial number hidden, the source code released and tagged, that will eventually be released to Npm and other production channels</li>
</ul>
<h2>Cross-version number specification</h2>
<p>In general, the version number of the same level is incremented by one version number; But in most cases, multiple releases are developed and tested at the same time, and if there are multiple releases that can reach the next stage before the release, they will be merged into a single release and updated across releases.</p>
`;export{e as attributes,n as html};
