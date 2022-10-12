const $form = document.querySelector ('#form')

$form.addEventListener ('submit', handleSubmit)

async function handleSubmit (event){
    event.preventDefault()
    const form = new formData (this)
    const response = await fetch (this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept':'aplication/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert ("Gracias por contactarnos. Le responderemos a la brevedad")
    }
    }