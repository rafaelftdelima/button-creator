const controls = document.querySelector('.controls');
const css = document.querySelector('.css');
const button = document.querySelector('.button');

const handleStyle = {
    element: button,
    text(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'px';
    }
}

function saveValue(name, value) {
    localStorage[name] = value;
}

function showCSS() {
    css.innerHTML = '<span>' + button.style.cssText.split('; ').join(';</span><span>');
}

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    handleStyle[name](value);
    saveValue(name, value)
    showCSS();
}

controls.addEventListener('change', handleChange);

function setValues() {
    const properties = Object.keys(localStorage);

    properties.forEach(property => {
        handleStyle[property](localStorage[property]);
        controls.elements[property].value = localStorage[property];
    });

    showCSS();
}

setValues();
