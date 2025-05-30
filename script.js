    const toggle = document.querySelector('.toggle')
    const toggleBtnIcon = document.querySelector('.toggle i')
    const dropDownMenu = document.querySelector('.dropdown')

    toggle.onclick = function() {
      dropDownMenu.classList.toggle('open')
      if (dropDownMenu.classList.contains('open')) {
        toggleBtnIcon.classList.remove('fa-burger')
        toggleBtnIcon.classList.add('fa-xmark')
      } else {
        toggleBtnIcon.classList.remove('fa-xmark')
        toggleBtnIcon.classList.add('fa-burger')
      }
    }