import{_ as s,j as e,r as t,o as i,c as a,d as _,t as c,F as l,i as n,w as r,v,f as u,e as d,g as y}from"./index.ad2263cd.js";import{s as p}from"./surveyTest.c3366e1d.js";const o={setup(){const s=e(),i=p.resultData,a=t({}),_=t(!0),c=t([]);i.forEach((e=>{e.idx.toString()===s.params.id&&(a.value=e)}));return{data:a,isConfirmation:_,doConfirmation:()=>{_.value=!1},checkArr:c,sendSurvey:()=>{},checkAnswer:(s,e)=>{}}}},m={class:"survey_detail_info"},k=_("div",{class:"survey_detail_title"},[_("span",{class:"survey_detail_title_h"},"|"),_("span",{class:"survey_detail_title_b"},"이벤트 내역")],-1),x={class:"survey_details"},b={class:"survey_details_title"},h={class:"survey_details_contants"},f={class:"survey_details_period"},j=_("br",null,null,-1),C={class:"survey_details_con"},w=_("div",{class:"survey_detail_title"},[_("span",{class:"survey_detail_title_h"},"|"),_("span",{class:"survey_detail_title_b"},"설문조사 참여")],-1),q={class:"survey_participation"},S={key:0,class:"survey_input"},Y=_("div",{class:"survey_input_phone"},[_("div",{class:"survey_input_phone_1"},"휴대폰번호"),_("input",{class:"survey_input_phone_2",type:"text",placeholder:"휴대폰번호 입력"})],-1),A=[_("div",{class:"survey_input_bt_1"},[_("span",{class:"survey_input_bt_1_1"}," 대상자 확인 ")],-1)],D={key:1,class:"survey_item"},g={key:0},T={class:"survey_item_subject"},z={class:"survey_item_subject_1"},E=["onClick"],F=["value","id"],I=["for"],M={key:1},N={class:"survey_item_subject"},B={class:"survey_item_subject_1"},G={class:"survey_item_text_answer"},H=["id","name"],J=["for"],K={key:2},L={class:"survey_item_subject"},O={class:"survey_item_subject_1"},P={class:"survey_item_text_answer"},Q=["id","name"],R=["for"],U={key:3},V={class:"survey_item_subject"},W={class:"survey_item_subject_1"},X=_("div",null,[_("input",{class:"survey_item_T_input",type:"text",placeholder:"입력하세요"})],-1),Z=u('<div class="survey_consent"><div class="survey_consent_1"><span class="survey_consent_1_1">개인정보 수집 및 이용에 관한 동의사항이 길 어질수도 있다<span class="survey_consent_1_2" style="color:#0058a6;">(필수)</span></span></div><div class="survey_consent_2"><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p></div><div class="survey_consent_check"><input type="checkbox" class="survey_consent_check_3" checked><span class="survey_consent_check_4">동의</span><input type="checkbox" class="survey_consent_check_5"><span class="survey_consent_check_6">미동의</span></div></div>',1),$=[_("span",{class:"survey_involved_1"},"제출하기",-1)];var ss=s(o,[["render",function(s,e,t,u,p,o){return i(),a("div",m,[k,_("div",x,[_("div",b,c(u.data.subject),1),_("div",h,[_("p",f,c(null===u.data.reserve_date?u.data.send_date:u.data.reserve_date),1),j,_("p",C,c(u.data.description),1)])]),w,_("div",q,[u.isConfirmation?(i(),a("div",S,[Y,_("div",{class:"survey_input_bt",onClick:e[0]||(e[0]=(...s)=>u.doConfirmation&&u.doConfirmation(...s))},A)])):(i(),a("div",D,[(i(!0),a(l,null,n(u.data.surveyItem,((s,e)=>(i(),a("div",{class:"survey_item_text",key:e},["C"===s.item_type?(i(),a("div",g,[_("div",T,[d(c(e+1)+"."+c(s.subject)+" ",1),_("span",z,c("Y"===s.required_yn?"(필수)":"(선택)"),1)]),(i(!0),a(l,null,n(s.item_text.split("#"),((e,t)=>(i(),a("div",{key:t},[_("div",{class:"survey_item_text_answer",onClick:e=>u.checkAnswer(s.idx+t,s.required_yn)},[_("input",{class:"survey_item_text_check",type:"checkbox",value:e,id:s.idx+":"+t},null,8,F),_("label",{class:"survey_item_text_con",for:s.idx+":"+t},c(e),9,I)],8,E),y(' <div v-show="">\r\n\r\n              </div> ')])))),128))])):"M"===s.item_type?(i(),a("div",M,[_("div",N,[d(c(e+1)+"."+c(s.subject)+" ",1),_("span",B,c("Y"===s.required_yn?"(필수)":"(선택)"),1)]),(i(!0),a(l,null,n(s.item_text.split("#"),((t,l)=>(i(),a("div",{key:l},[_("div",G,[_("input",{class:"survey_item_text_check",type:"radio",id:s.idx+":"+l,name:e+1},null,8,H),_("label",{class:"survey_item_text_con",for:s.idx+":"+l},c(t),9,J)])])))),128))])):"N"===s.item_type?(i(),a("div",K,[_("div",L,[d(c(e+1)+"."+c(s.subject)+" ",1),_("span",O,c("Y"===s.required_yn?"(필수)":"(선택)"),1)]),(i(!0),a(l,null,n(s.item_text.split("#"),((t,l)=>(i(),a("div",{key:l},[_("div",P,[_("input",{class:"survey_item_text_check",type:"radio",id:s.idx+":"+l,name:e+1},null,8,Q),_("label",{class:"survey_item_text_con",for:s.idx+":"+l},c(t),9,R)])])))),128))])):(i(),a("div",U,[_("div",V,[d(c(e+1)+"."+c(s.subject)+" ",1),_("span",W,c("Y"===s.required_yn?"(필수)":"(선택)"),1)]),X]))])))),128)),Z]))]),r(_("div",null,[_("div",{class:"survey_involved",onClick:e[1]||(e[1]=(...s)=>u.sendSurvey&&u.sendSurvey(...s))},$)],512),[[v,!u.isConfirmation]])])}],["__file","D:/2022/1.위시켓/0708더스포츠/project/vitejs-vite-slzpas/src/views/main/survey/surveyDetail.vue"]]);export{ss as default};
