// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels
const date = document.getElementById('date')
const navToggleBtn = document.querySelector('.nav-toggle')
const linkContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
const navbar = document.getElementById('nav')
const topBtn = document.querySelector('.top-link')

// ********** set date ************
date.innerText = new Date().getFullYear()
// ********** close links ************
navToggleBtn.addEventListener("click", () => {
  let linksHeight = links.getBoundingClientRect().height
  let containerHeight = linkContainer.getBoundingClientRect().height
  if(containerHeight === 0)
  {
    linkContainer.style.height = `${linksHeight}px`
  }
  else
  {
    linkContainer.style.height = 0
  }
})
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
  let scrollHeight = window.pageYOffset;
  let navbarHeight = navbar.getBoundingClientRect().height;

  if(scrollHeight > navbarHeight)
  {
    navbar.classList.add('fixed-nav')
  }
  else
  {
    navbar.classList.remove('fixed-nav')
  }

  if(scrollHeight > 500)
  {
    topBtn.classList.add('show-link')
  }
  else
  {
    topBtn.classList.remove('show-link')
  }
})
// ********** smooth scroll ************
// select links
const navlinks = document.querySelectorAll('.scroll-link')

navlinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const idName = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(idName)

    const navbarHeight = navbar.getBoundingClientRect().height
    const containerHeight = linkContainer.getBoundingClientRect().height
    let fixedNav = navbar.classList.contains('fixed-nav')

    let position = element.offsetTop - navbarHeight

    if(!fixedNav)
    {
      position = position - navbarHeight
    }
    if(navbarHeight > 82)
    {
      position = position + containerHeight
    }

    window.scrollTo({
      left: 0,
      top: position,
    })

    linkContainer.style.height = 0
  })
})

















