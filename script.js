// 💛 JS 💛 //

const links = {
  github: 'matheus-gs',
  youtube: 'programadorbr',
  instagram: 'papodedev',
  facebook: 'rocketseat',
  twitter: 'jakelinytec'
}

let social_links = document.querySelector('#social_links')

for (li of social_links.children) {
  const social = li.getAttribute('class')
  li.children[0].href = `https://${social}.com/${links[social]}`
}
