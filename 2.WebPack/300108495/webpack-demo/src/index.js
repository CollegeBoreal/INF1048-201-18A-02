import _ from 'lodash';
function component() {
    let element = document.createElement('div');
<<<<<<< HEAD
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
=======
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
>>>>>>> 21bec4698111b3e9cd7560b936099405f32a2ed5
    return element;
}
   
document.body.appendChild(component());

