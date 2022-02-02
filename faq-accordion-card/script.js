document.body.addEventListener('click', (e) => {
    if (e.target.nextElementSibling && e.target.nextElementSibling.tagName==="DD") {
        if (e.target.nextElementSibling.classList.contains('show-detail')) {
            e.target.nextElementSibling.classList.remove('show-detail')
        } else { 
            e.target.nextElementSibling.classList.add('show-detail')
        }    
    }
    if (e.target.tagName==="DT") {
        if (e.target.classList.contains('show-detail')) {
            e.target.classList.remove('show-detail')
        } else { 
            e.target.classList.add('show-detail')
        }    
    }  
})