const dropwdownValue = document.querySelector('.dropdown__value')
const dropdownList = document.querySelector('.dropdown__list')
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'))

dropwdownValue.addEventListener('click', function() {
    if (dropdownList.className == 'dropdown__list dropdown__list_active') {
        dropdownList.className = 'dropdown__list'
    } else {
        dropdownList.className = 'dropdown__list dropdown__list_active'
    }
})

for (item of dropdownItem) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        dropwdownValue.textContent = item.textContent
    })
}