let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
function addTodo() {
    let name = document.getElementById("name").value;
    if (name.length == 0) {
        alert("vui lòng nhập dữ liệu");
        return;
    }
    let id = 0;
    if (jobs.length == 0) {
        id = 1;
    } else {
        id = jobs[jobs.length - 1].id + 1;
    }
    let job = {
        id: id,
        name: name
    }
    jobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    document.getElementById("name").value="";
    showJob();
}
function showJob() {
    let str = "";
    for (let i = 0; i < jobs.length; i++) {
        str += `
         <li>${jobs[i].name} <button onclick=updeJob(${i}) >Sửa</button>
            <button onclick=deleJob(${i})>Xóa</button></li>
        `
    }
    document.getElementById("ul").innerHTML = str;

}
showJob();
function deleJob(index) {        
    let deleConfirm=confirm("Bạn có muốn xóa công việc này ko")
    if (deleConfirm) {
        jobs.splice(index,1);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        showJob();
        return
    }
}
function updeJob(index) {

  let nameNew=prompt(`
  công việc ban đầu ${jobs[index].name}
  `);
 if(nameNew==null){
  return;
 }
  
  jobs[index].name=nameNew;

  localStorage.setItem("jobs", JSON.stringify(jobs));
    showJob();
}
