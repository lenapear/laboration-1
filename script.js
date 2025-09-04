const btn = document.getElementById('btn')
const output = document.getElementById('output')

btn.addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value
    const reversedName = reverseName(nameInput)
    output.textContent = `Hello, ${nameInput}! 🫡 Your name reversed is ${reversedName}.`
})

// Takes a string as input and returns the reversed string
function reverseName(name) {
    return name.split('').reverse().join('')
}