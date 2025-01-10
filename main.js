const x = 'NEVER say "console" 3 times in front of a mirror'
console.log(x)
window.tocontact = function(){
    window.location.assign('http://ayan0823.github.io/ux/contact.html')
}
window.sendemail = function(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = {
        subject: encodeURIComponent(`UX Inquiry from "${formData.get('contact-email-address')}"`),
        body: encodeURIComponent(formData.get('contact-message'))
    }
    const _a = document.createElement('a')
    const _clickEvent = new MouseEvent('click')
    _a.setAttribute('href', `mailto:ayanoveli@gmail.com?subject=${email.subject}&body=${email.body}`)
    _a.dispatchEvent(_clickEvent)
}