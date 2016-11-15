;(() => {
  const reposTemplate = `
  <div id="repos">
    <span v-if="repos.length === 0">
    loading...
    </span>
    <div class="repo" v-for="repo in repos">
      <h2><span>{{repo.owner === 'egoist' ? '' : (repo.owner + ' / ')}}{{ repo.repo }}</span></h2>
      <p class="description" v-html="repo.description"></p>
      <div class="repo-meta">
        <span class="repo-meta-item">
          <svg id="i-code" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
            <path d="M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27" />
          </svg>
          {{ repo.language }}
        </span>
        <span class="repo-meta-item">
          <svg id="i-star" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
            <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
          </svg>
          {{ repo.stars }}
        </span>
        <a class="repo-meta-item" :href="'https://github.com/' + repo.owner + '/' + repo.repo" target="_blank">
          <svg id="i-external" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
            <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
  `
  new Vue({
    el: '#repos',
    template: reposTemplate,
    data: {
      repos: []
    },
    created() {
      this.fetchRepos()
    },
    methods: {
      fetchRepos() {
        axios.get('https://gh-pinned-repos-vssdymveuj.now.sh/?username=egoist')
          .then(res => res.data)
          .then(data => {
            this.repos = data
          })
      }
    }
  })
})();
