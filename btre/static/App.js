class App {
    constructor() {
        const date = new Date()
        document.querySelector('.year').innerHTML = date.getFullYear()
        setTimeout(() => {
            $('#message').fadeOut('slow');
        }, 3000)
    }
}
export default new App()