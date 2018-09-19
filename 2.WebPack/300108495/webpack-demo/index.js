function component() {
    let element = documet.createElement('div');
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
   
document.body.appendChild(component());

