function manipulateDom() {
    const elements = document.querySelectorAll('.quote')
    elements.forEach(element => {
        //border: 1px solid blue
        //backgroundcolor: lightblue
        //font-style: italic
        element.style.border = '1px solid blue';
        element.style.backgroundColor = 'lightblue';
        element.style.fontStyle = 'italic';
    });
};

export { manipulateDom };