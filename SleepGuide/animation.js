
scrollTrigger('.loader,{
              cb: function(el)
   el.innerText = 'Loading ...'')
   loadContent()
  }
})
function scrollTrigger(selector) {
  // Multiple element can have same class/selector,
  // so we are using querySelectorAll
  let els = document.querySelectorAll(selector)
  // The above `querySelectorAll` returns a nodeList,
  // so we are converting it to an array
  els = Array.from(els)
  // Now we are iterating over the elements array
  els.forEach(el => {
    // `addObserver function` will attach the IntersectionObserver to the element
    // We will create this function next
    addObserver(el)
  })
}
// Example usage
scrollTrigger('.scroll-reveal')
function scrollTrigger(selector){
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
    addObserver(el)
  })
}
function addObserver(el){
    // We are creating a new IntersectionObserver instance
    let observer = new IntersectionObserver((entries, observer) => { // This takes a callback function that receives two arguments: the elements list and the observer instance.
      entries.forEach(entry => {
        // `entry.isIntersecting` will be true if the element is visible
      if(entry.isIntersecting) {
        entry.target.classList.add('active')
        // We are removing the observer from the element after adding the active class
        observer.unobserve(entry.target)
      }
    })
  })
  // Adding the observer to the element
  observer.observe(el)
}
// Example usage
scrollTrigger('.scroll-reveal')
// Receiving options as an object
// If the user doesn't pass any options, the default will be `{}`
function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
    // Passing the options object to the addObserver function
    addObserver(el, options)
  })
}
// Receiving options passed from the scrollTrigger function
function addObserver(el, options) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  }, options) // Passing the options object to the observer
  observer.observe(el)
}
// Example usage 1:
// scrollTrigger('.scroll-reveal')
// Example usage 2:
scrollTrigger('.scroll-reveal', {
  rootMargin: '-200px'
})
function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
    addObserver(el, options)
  })
}
function addObserver(el, options){
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        if(options.cb) {
          // If we've passed a callback function, we'll call it
          options.cb(el)
        } else{
          // If we haven't, we'll just add the active class
          entry.target.classList.add('active')
        }
        observer.unobserve(entry.target)
      }
    })
  }, options)
  observer.observe(el)
}
// Example usage:
scrollTrigger('.loader', {
  rootMargin: '-200px',
  cb: function(el){
    el.innerText = 'Loading...'
    // Done loading
    setTimeout(() => {
      el.innerText = 'Task Complete!'
    }, 1000)
  }
})
function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
    addObserver(el, options)
  })
}
function addObserver(el, options) {
  // Check if `IntersectionObserver` is supported
  if(!('IntersectionObserver' in window)) {
    // Simple fallback
    // The animation/callback will be called immediately so
    // the scroll animation doesn't happen on unsupported browsers
    if(options.cb){
      options.cb(el)
    } else{
      entry.target.classList.add('active')
    }
    // We don't need to execute the rest of the code
    return
  }
  let observer = new IntersectionObserver((entries, observer) =>; {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        if(options.cb) {
          options.cb(el)
        } else{
          entry.target.classList.add('active')
        }
        observer.unobserve(entry.target)
      }
    })
  }, options)
  observer.observe(el)
}
// Example usages:
scrollTrigger('.intro-text')
scrollTrigger('.scroll-reveal', {
  rootMargin: '-200px',
})
scrollTrigger('.loader', {
  rootMargin: '-200px',
  cb: function(el){
    el.innerText = 'Loading...'
    setTimeout(() => {
      el.innerText = 'Task Complete!'
    }, 1000)
  }
})
