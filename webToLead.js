function beforeSubmit(){
    let outputDate = document.querySelector('.outputDate');
    let inputDate = document.querySelector('.inputDate');
    console.log(inputDate.value);
    
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-US");
    outputDate.value = formattedDate;
}