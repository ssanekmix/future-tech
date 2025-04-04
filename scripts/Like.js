class Like {
  selectors = {
    root: '[data-js-like]',
    counterSpan: 'span:not([class])'
  }

  stateClasses = {
    isActive: 'is-active'
  }

  constructor() {
    this.rootElements = document.querySelectorAll(this.selectors.root)
    this.bindEvent()
  }

  bindEvent() {
    this.rootElements.forEach(rootElement => {
      rootElement.addEventListener('click', this.onLikeButtonClick)
    })
  }

  onLikeButtonClick = (event) => {
    const clickedElement = event.currentTarget
    clickedElement.classList.toggle(this.stateClasses.isActive)

    const counterSpan = clickedElement.querySelector(this.selectors.counterSpan)

    if (counterSpan) {
      const currentValue = parseFloat(counterSpan.textContent)
      
      if (currentValue % 1 !== 0) {
        const newValue = clickedElement.classList.contains(this.stateClasses.isActive)
        ? currentValue + 0.1 + 'k'
        : currentValue - 0.1 + 'k'
        counterSpan.textContent = newValue
      } else {
        const newValue = clickedElement.classList.contains(this.stateClasses.isActive)
        ? currentValue + 1 + 'k'
        : currentValue - 1 + 'k'
        counterSpan.textContent = newValue
      }
    }
  }
}

export default Like