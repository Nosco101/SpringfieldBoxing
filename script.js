const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
    // 
    // close the navPanel
  })
})

//when i click navPanel, open the navPanel

/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 

// change overbox color on interaction with donate-button-container
document.getElementById("donate-button-container").addEventListener("mouseover",function() {
  document.getElementById("overbox").style.backgroundColor="#A68C13";
});

document.getElementById("donate-button-container").addEventListener("mouseout",function() {
  document.getElementById("overbox").style.backgroundColor="#E5C11A";
});