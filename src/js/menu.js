/* 기본 nav내의 버튼 클릭시 이벤트 */

function navBtnEvet(){

     const navBtns = document.querySelectorAll(".navBtn");
     const navBtnParents = document.querySelectorAll(".navBtnBoxs");
     const subMenusWrapper = document.querySelectorAll(".subMenusWrapper");

     if(navBtns){

        navBtns[0].classList.add("active"); //버튼초기값 -> 첫번째 버튼 활성화
        navBtnParents[0].classList.add("active");

        navBtns.forEach((btns, index) => {
             
             btns.addEventListener("click" , () => {

                const btnsparents = btns.parentElement; //li에 active

                 if(btns.classList.contains("active") && subMenusWrapper[index].classList.contains("active")){

                     return subMenusWrapper[index].classList.remove("active");
                 }
    
                 navBtns.forEach((otherBtns) => otherBtns.classList.remove("active"));
                 navBtnParents.forEach((list) => list.classList.remove("active"));
                 subMenusWrapper.forEach((otherboxs) => otherboxs.classList.remove("active")); //다른 sub메뉴 닫기
                 btns.classList.add("active");
                 btnsparents.classList.add("active");
                 subMenusWrapper[index].classList.add("active");
             })
         })
     }
}

navBtnEvet();


/* 아래 >> 표시를 누르면 나타나는 메뉴 */

const addMenuOpenEvet = () => {

     const addMenus = document.querySelector(".addMenus");
     const navFixed = document.querySelector(".navFixed");
     const menuBoxs = document.querySelector(".menuBoxs");
     const addmenuBoxs = document.querySelector(".addmenuBoxs");
     const subMenusWrapper = document.querySelectorAll(".subMenusWrapper");
     const navAddBtn = document.querySelectorAll(".navAddBtn");
     const subAddMenusWrapper = document.querySelectorAll(".subAddMenusWrapper");
     const locationBoxs = document.querySelector(".locationBoxs");
     const addLogoTxt = document.querySelector(".addLogoTxt");
     const resizeWidth = document.querySelector(".resizeWidth"); //네비 너비에 따른 컨텐츠 사이즈 조절
     

     // >> 버튼 클릭시 이벤트 
     addMenus.addEventListener("click" , () => {

          if(addMenus.classList.contains("active")){

            if(resizeWidth){

            resizeWidth.style.paddingLeft = `70px`;
            resizeWidth.style.transition = `800ms`;
            
            }

             return navFixed.classList.remove("active"),
             addMenus.classList.remove("active"), 
             menuBoxs.classList.remove("active"),
             addmenuBoxs.classList.remove("active"),
            subAddMenusWrapper.forEach((otherBoxs)=>{ otherBoxs.classList.remove("active")}),
            navAddBtn.forEach((otherBtn) => otherBtn.classList.remove("active")),
            locationBoxs.classList.remove("active"),
            addLogoTxt.classList.remove("active");
             
          }

          subMenusWrapper.forEach((boxs) => boxs.classList.remove("active"));
          addMenus.classList.add("active"); 
          navFixed.classList.add("active");
          menuBoxs.classList.add("active");
          locationBoxs.classList.add("active");
         

          setTimeout(() => {
            addmenuBoxs.classList.add("active");
            addLogoTxt.classList.add("active");
           },300)
          
           if(resizeWidth){

             resizeWidth.style.paddingLeft = `250px`;
             resizeWidth.style.transition = `800ms`;

 
           }
     })

     //펼쳐진 메뉴내의 각 메뉴별 버튼 클릭 이벤트 
     navAddBtn.forEach((thisBtn, idx) => {

         thisBtn.addEventListener("click" , () => {

            if(thisBtn.classList.contains("active")){

                return thisBtn.classList.remove("active"),
                subAddMenusWrapper[idx].classList.remove("active");
            }

            subAddMenusWrapper.forEach((otherBoxs)=>{ otherBoxs.classList.remove("active")});
            navAddBtn.forEach((otherBtn) => otherBtn.classList.remove("active"));
            thisBtn.classList.add("active");
            subAddMenusWrapper[idx].classList.add("active");

         })
     })

    
}


addMenuOpenEvet();



/* 현재 위치에 따른 네비 설정  */

function locationNavEvet(){

     const path = window.location.pathname;
     console.log(path); //현재 위치값
     const navButton = document.querySelectorAll(".navBtn");
     const navButtonParents = document.querySelectorAll(".navBtnBoxs");
     const locationBoxs = document.querySelector(".locationBoxs");
     const subMenuBoxsList = document.querySelectorAll(".subMenuBoxs") //기존 네비 메뉴
     const subAddMenuBoxsList = document.querySelectorAll(".subAddMenuBoxs")// >> 버튼 클릭시 나타나는 네비 메뉴
     const navFixedColor = document.querySelector(".navFixed");
     let header = document.querySelector("header");


     const pathNamesArray = {

         href : ["/index.html", 
                 "/src/components/dashboard/switchDetails.html",
                 "/src/components/dashboard/issuesState.html",
                 "/src/components/dashboard/tools.html",
                 "/src/components/dashboard/copyState.html",
                 "/src/components/setup/edit.html",
                 "/src/components/setup/customizing.html",
                 "/src/components/manage/userManage.html",
                 "/src/components/login/login.html"

               ],
                 
         titles : ["" , "대시보드" , "개인화 설정", "시스템 관리"],
         subTitles : ["" , "스위치 상세정보" , "장애현황" , "장비 구성도", "복제 구성도", "대시보드 편집", "커스텀 설정" , "사용자 그룹 관리"],

     }

     //대시보드
     if(path === pathNamesArray.href[0]){

        navButton.forEach((otherBtns) => otherBtns.classList.remove("active"));
        navButtonParents.forEach((list) => list.classList.remove("active"));
        navButton[0].classList.add("active");
        navButtonParents[0].classList.add("active");
        navFixedColor.classList.add("color-111");
        header.classList.add("color-111");
        
     //스위치 상세정보
     }else if(path === pathNamesArray.href[1]){

        const navSubBoxsList = subMenuBoxsList[0].children[1].children[0]; //기존네비메뉴의 a링크
        const navSubAddBoxsList = subAddMenuBoxsList[0].children[0].children[0];// >> 버튼 클릭시 나타나는 네비메뉴의 a링크

        navButton.forEach((otherBtns) => otherBtns.classList.remove("active"));
        navButtonParents.forEach((list) => list.classList.remove("active"));
        navButton[0].classList.add("active");
        navButtonParents[0].classList.add("active");
        navSubBoxsList.classList.add("active");
        navSubAddBoxsList.classList.add("active");
        navFixedColor.classList.add("color-2325");
        header.classList.add("color-2325");
        locationBoxs.classList.add("display");
        locationBoxs.innerHTML = `<p>${pathNamesArray.titles[1]}</p><span>${pathNamesArray.subTitles[1]}</span>`
     }
     //장애현황
     else if(path === pathNamesArray.href[2]){

        const navSubBoxsList = subMenuBoxsList[0].children[1].children[1];
        const navSubAddBoxsList = subAddMenuBoxsList[0].children[0].children[1];

        navButton.forEach((otherBtns) => otherBtns.classList.remove("active"));
        navButtonParents.forEach((list) => list.classList.remove("active"));
        navButton[0].classList.add("active");
        navButtonParents[0].classList.add("active");
        navSubBoxsList.classList.add("active");
        navSubAddBoxsList.classList.add("active");
        navFixedColor.classList.add("color-2325");
        header.classList.add("color-2325");
        locationBoxs.classList.add("display");
        locationBoxs.innerHTML = `<p>${pathNamesArray.titles[1]}</p><span>${pathNamesArray.subTitles[2]}</span>`

     //장비구성도
     }else if(path === pathNamesArray.href[3]){

        const navSubBoxsList = subMenuBoxsList[0].children[1].children[2];
        const navSubAddBoxsList = subAddMenuBoxsList[0].children[0].children[2];

        navButton.forEach((otherBtns) => otherBtns.classList.remove("active"));
        navButtonParents.forEach((list) => list.classList.remove("active"));
        navButton[0].classList.add("active");
        navButtonParents[0].classList.add("active");
        navSubBoxsList.classList.add("active");
        navSubAddBoxsList.classList.add("active");
        navFixedColor.classList.add("color-2325");
        header.classList.add("color-2325");
        locationBoxs.classList.add("display");
        locationBoxs.innerHTML = `<p>${pathNamesArray.titles[1]}</p><span>${pathNamesArray.subTitles[3]}</span>`
     }
     //복제구성도
     else if(path === pathNamesArray.href[4]){

      const navSubBoxsList = subMenuBoxsList[0].children[1].children[3];
      const navSubAddBoxsList = subAddMenuBoxsList[0].children[0].children[3];
 
      console.log(navSubBoxsList);
      navButton.forEach((otherBtns) => otherBtns.classList.remove("active"));
      navButtonParents.forEach((list) => list.classList.remove("active"));
      navButton[0].classList.add("active");
      navButtonParents[0].classList.add("active");
      navSubBoxsList.classList.add("active");
      navSubAddBoxsList.classList.add("active");
      navFixedColor.classList.add("color-2325");
      header.classList.add("color-2325");
      locationBoxs.classList.add("display");
      locationBoxs.innerHTML = `<p>${pathNamesArray.titles[1]}</p><span>${pathNamesArray.subTitles[4]}</span>`
   }
   //개인화설정
     else if(path === pathNamesArray.href[5]){

      const navSubBoxsList = subMenuBoxsList[1].children[1].children[0];
      const navSubAddBoxsList = subAddMenuBoxsList[1].children[0].children[0];

      navButton.forEach((otherBtns) => otherBtns.classList.remove("active"));
      navButtonParents.forEach((list) => list.classList.remove("active"));
      navButton[1].classList.add("active");
      navButtonParents[1].classList.add("active");
      navSubBoxsList.classList.add("active");
      navSubAddBoxsList.classList.add("active");
      navFixedColor.classList.add("color-2325");
      header.classList.add("color-2325");
      locationBoxs.classList.add("display");
      locationBoxs.innerHTML = `<p>${pathNamesArray.titles[2]}</p><span>${pathNamesArray.subTitles[5]}</span>`
   }
   //커스텀설정
   else if(path === pathNamesArray.href[6]){

      const navSubBoxsList = subMenuBoxsList[1].children[1].children[1];
      const navSubAddBoxsList = subAddMenuBoxsList[1].children[0].children[1];

      navButton.forEach((otherBtns) => otherBtns.classList.remove("active"));
      navButtonParents.forEach((list) => list.classList.remove("active"));
      navButton[1].classList.add("active");
      navButtonParents[1].classList.add("active");
      navSubBoxsList.classList.add("active");
      navSubAddBoxsList.classList.add("active");
      navFixedColor.classList.add("color-2325");
      header.classList.add("color-2325");
      locationBoxs.classList.add("display");
      locationBoxs.innerHTML = `<p>${pathNamesArray.titles[2]}</p><span>${pathNamesArray.subTitles[6]}</span>`
   }
   //시스템 관리
   else if(path === pathNamesArray.href[7]){

      const navSubBoxsList = subMenuBoxsList[2].children[1].children[1];
      const navSubAddBoxsList = subAddMenuBoxsList[2].children[0].children[1];

      navButton.forEach((otherBtns) => otherBtns.classList.remove("active"));
      navButtonParents.forEach((list) => list.classList.remove("active"));
      navButton[2].classList.add("active");
      navButtonParents[2].classList.add("active");
      navSubBoxsList.classList.add("active");
      navSubAddBoxsList.classList.add("active");
      navFixedColor.classList.add("color-2325");
      header.classList.add("color-2325");
      locationBoxs.classList.add("display");
      locationBoxs.innerHTML = `<p>${pathNamesArray.titles[3]}</p><span>${pathNamesArray.subTitles[7]}</span>`
   }
   //로그인페이지
   else if(path === pathNamesArray.href[8]){
      navFixedColor.classList.add("color-2325");
      header.classList.add("color-2325");
   }
  else{
   navFixedColor.classList.remove("color-2325");
   header.classList.remove("color-2325");
   navFixedColor.classList.remove("color-111");
   header.classList.remove("color-111");
  }

}

locationNavEvet();
