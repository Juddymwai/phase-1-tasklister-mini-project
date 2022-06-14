document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form= document.querySelector('form')
  form.addEventListener('submit', function(e){
    e.preventDefault()

    createContent(e.target.new_task_description.value)
    form.reset()

  })

  function createContent(list){
    const p= document.createElement('p')
    p.textContent=`${list} `
    const btn = document.createElement('button')
    btn.textContent='x'
    p.append(btn)

    const element= document.getElementById('tasks')
  
    element.append(p)
    btn.addEventListener('click', deleteList)

    

  }
 
function deleteList(e){
  e.target.parentNode.remove()

}



});
