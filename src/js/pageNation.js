/* 페이지네이션 이벤트 */

const pageNationBtns = document.querySelectorAll(".pageNationWrappers .pageNatioNumbers span");

if(pageNationBtns){

    pageNationBtns[0].classList.add("active"); //1번 불들어오게 하기
    pageNationBtns.forEach((btn) => {

        btn.addEventListener("click" , () => {

            pageNationBtns.forEach((otherBtn) => {otherBtn.classList.remove("active")});
             btn.classList.add("active");
        })
    } )
     
}