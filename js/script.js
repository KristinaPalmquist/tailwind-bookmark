const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')


tabs.forEach((tab) => {
  tab.addEventListener('click', onTabClick)
})

function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    )
  })
  panels.forEach((panel) => {
    panel.classList.add('hidden')
  })

  e.target.classList.add('border-softRed', 'border-b-4')
  const classString = e.target.getAttribute('data-target')
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}


btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}

const arrow1 = document.getElementById('arrow-1')
const arrow2 = document.getElementById('arrow-2')
const arrow3 = document.getElementById('arrow-3')
const arrow4 = document.getElementById('arrow-4')
const tab1 = document.getElementById('tab-1')
const tab2 = document.getElementById('tab-2')
const tab3 = document.getElementById('tab-3')
const tab4 = document.getElementById('tab-4')
const tabInner1 = document.getElementById('tab-inner-1')
const tabInner2 = document.getElementById('tab-inner-2')
const tabInner3 = document.getElementById('tab-inner-3')
const tabInner4 = document.getElementById('tab-inner-4')

tab1.addEventListener('click', onTab1Click)
function onTab1Click() {
  tabInner1.classList.toggle('group-focus:max-h-screen')
  if (tabInner1.classList.contains('group-focus:max-h-screen')) {
    arrow1.classList.add('group-focus:-rotate-180')
    arrow1.classList.add('group-focus:text-red-500')
  } else {
    arrow1.classList.remove('group-focus:-rotate-180')
    arrow1.classList.remove('group-focus:text-red-500')
  }
}

tab2.addEventListener('click', ontab2Click)
function ontab2Click() {
  tabInner2.classList.toggle('group-focus:max-h-screen')
  if (tabInner2.classList.contains('group-focus:max-h-screen')) {
    arrow2.classList.add('group-focus:-rotate-180')
    arrow2.classList.add('group-focus:text-red-500')
  } else {
    arrow2.classList.remove('group-focus:-rotate-180')
    arrow2.classList.remove('group-focus:text-red-500')
  }
}

tab3.addEventListener('click', ontab3Click)
function ontab3Click() {
  tabInner3.classList.toggle('group-focus:max-h-screen')
  if (tabInner3.classList.contains('group-focus:max-h-screen')) {
    arrow3.classList.add('group-focus:-rotate-180')
    arrow3.classList.add('group-focus:text-red-500')
  } else {
    arrow3.classList.remove('group-focus:-rotate-180')
    arrow3.classList.remove('group-focus:text-red-500')
  }
}

tab4.addEventListener('click', ontab4Click)
function ontab4Click() {
  tabInner4.classList.toggle('group-focus:max-h-screen')
  if (tabInner4.classList.contains('group-focus:max-h-screen')) {
    arrow4.classList.add('group-focus:-rotate-180')
    arrow4.classList.add('group-focus:text-red-500')
  } else {
    arrow4.classList.remove('group-focus:-rotate-180')
    arrow4.classList.remove('group-focus:text-red-500')
  }
}


const overlayFeatures = document.getElementById('overlay-features')
const overlayDownload = document.getElementById('overlay-download')
const overlayFaq = document.getElementById('overlay-faq')
const overlayLogin = document.getElementById('overlay-login')

overlayFeatures.addEventListener('click', closeOverlayMenu)
overlayFaq.addEventListener('click', closeOverlayMenu)
overlayDownload.addEventListener('click', closeOverlayMenu)
overlayLogin.addEventListener('click', closeOverlayMenu)
function closeOverlayMenu() {
  console.log('link click')
  btn.classList.remove('open')
}
