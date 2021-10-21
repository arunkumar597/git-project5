let user = [];
let flag ;
function toggle() {
    var blur = document.querySelector(".outer-div");
    blur.classList.toggle("active");
    var popup = document.querySelector("#pop");
    popup.classList.toggle("active");
}
function toggles(val) {
    if( val !== false)
    {
        let ele = Number(val.parentNode.parentNode.id);
        // console.log("toggles ",ele);
        let blur = document.querySelector(".outer-div");
        blur.classList.toggle("active");
        let popup = document.querySelector("#popAddItem");
        popup.classList.toggle("active");
        flag = ele;
    }
    else
    {
        let blur = document.querySelector(".outer-div");
        blur.classList.toggle("active");
        let popup = document.querySelector("#popAddItem");
        popup.classList.toggle("active");
    }
}
function add()
{
    const head = document.querySelector('#head').value;
    if(head !== "")
    {
        let todo = 
        {
            title : head,
            id : Date.now()
        }
        user.push(todo);
        console.log(user);
        const empty = document.querySelector('.noItem');
        empty.style.display = 'none';
    }
    else
    {
        window.alert("Please Enter Value...!");
    }
    toggle();
    cards();
}
function cards()
{
    let val = document.createElement('div');
    let card = document.querySelector('.card');
    val.setAttribute('class' , 'parts');
    for(let index =0; index < user.length; index++)
    {
        let fun = user[index];
        val.setAttribute('id' , fun.id);
        val.innerHTML = `<p class="head-para"> ${fun.title} </p>
                         <hr class="hr">
                         <div class="subTitle-div"></div>
                         <br>
                         <div class="button-div">
                         <button onclick="deleteCard(this)"><i class="fas fa-trash-alt" id="trash"></i></button>
                         <button onclick="toggles(this)"><i class="fas fa-plus-circle" id="plus"></i></button>
                         </div>`;
        card.appendChild(val);
    }
}
function addSubTitle(sub_title)
{
    let bala = document.querySelector('#subTitle').value;
    // console.log(bala);
    let card = document.querySelector('.card').children;
    for(let index = 0; index < user.length; index++)
    {
        let roota = card[index];
        let root = roota.children[2];
        // console.log(root);
        let val = user[index];
        if(val.id === flag)
        {
            if(bala !== "")
            {
                // console.log(root);
                let outer = document.createElement('div');
                outer.setAttribute('class' , 'outer');
                outer.setAttribute('id' , flag+1);
                outer.innerHTML=`<p class="s-h-p">${bala}</p>
                                <p class="mark-done" onclick="markDone(this)">Mark Done</p>`;
                root.appendChild(outer);
            }
            else
            {
                window.alert("Please enter some Value...!");
            }
            break;
        }
    }
    toggles(false);
}
function deleteCard(thva)
{
    let tata = thva.parentNode.parentNode;
    // console.log(tata);
    const thval = Number(thva.parentNode.parentNode.id);
    // console.log(thval);
    for(let index = 0; index < user.length; index++)
    {
        let val = user[index];
        if(val.id === thval)
        {
            user.splice(index , 1);
            break;
        }
    }
    tata.remove(tata);
    if(user.length == 0)
    {
      const empty = document.querySelector('.noItem');
      empty.style.display = 'block';
    }
}
function markDone(mar)
{
    let val = mar.parentNode;
    // console.log("markDone ",val);
    let done = mar.parentNode.children[0];
    let done1 = mar.parentNode.children[1];
    const ID = Number(val.id) - 1;
    for(let index = 0; index < user.length; index++)
    {
        let val = user[index];
        // console.log(val.id , ID);
        if(val.id === ID)
        {
            // console.log(val.id , ID);
            done1.style.display = 'none';
            done.style.color = 'orangered';
            done.style.textDecoration = 'line-through';
            done.style.textDecorationColor = 'orangered';
            break;
        }
    }
}