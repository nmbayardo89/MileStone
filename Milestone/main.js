const showContainers = document.querySelectorAll('.show-replies');

showContainers.forEach(btn => btn.addEventListener('click', (e) => {
    console.log('Show me the money!')
    let parentContainer = e.target.closest('.comment_container');
    let _id = parentContainer._id;
    if(_id){
        let childrenContainer = parentContainer.querySelectorAll(`[dataset=${_id}]`);
        childrenContainer.forEach(child => child.classlist.toggle("opened"));
    }
}));

