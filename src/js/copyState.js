/* 화살표 버튼 클릭시 숨겨진 메뉴 나타내기  */

const copyHiddenMenuOpenEvet = () => {

    const copyHiddenBtn = document.querySelector(".copyHiddenBtn");
    const copyHiddenMenus = document.querySelector(".copyHiddenMenus");

    if(copyHiddenBtn){

      copyHiddenBtn.addEventListener("click" , () => {

         if(copyHiddenBtn.classList.contains("active")){

            return copyHiddenBtn.classList.remove("active"),
                   copyHiddenMenus.classList.remove("active");
         }

         copyHiddenBtn.classList.add("active");
         copyHiddenMenus.classList.add("active");
          
      })
    }
}

copyHiddenMenuOpenEvet();