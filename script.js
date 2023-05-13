document.addEventListener('DOMContentLoaded', (event) => {
    localStorage.setItem('input', 0)
});

const input = document.getElementById('user-input');
const editBtn = document.getElementById('edit');
const saveBtn = document.getElementById('save');

editBtn.addEventListener('click', () => {
        //input.value = ""
    input.disabled = false;
})

saveBtn.addEventListener('click', () => {
    //parseInt(input.value)
    //if(typeof input.value !== "number") {
    //    input.value = ""
    //    return alert('Please enter a number')
    //}
    input.disabled = true;
    const oldValue = parseInt(localStorage.getItem('input'))
    const newValue = oldValue + parseInt(input.value)
    input.value = newValue
    localStorage.setItem('input', newValue)
})  
