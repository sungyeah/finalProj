<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Artista</title>
<link rel="stylesheet" href="../css/manager.css">
<link rel="stylesheet" href="../css/mypage.css">
<link rel="stylesheet" href="../css/applymodal.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>
	<%@include file="../header.jsp"%>
	<div id="productdetail" class="modal-overlay">
        <div class="modal-window">
            <header class="modal-header">
            	<div class="close-area close-area1">X</div>
                <h2 class="modal-header-title">작품 상세내용</h2>
            </header>
            <article class="modal-body">
            	<form class="modal-modify-form" method="post" action="/artistpage/workModify">
                    <div class="modal-modify-form-border"></div>
                        
                    <div class="modal-modify-form-row">
                        <div class="modal-modify-form-row-label">
                            <span class="red">*</span> 작품 이미지
                        </div>
                        <div class="modal-modify-form-row-value">
                        	<img src="/workImg/${work.workImg }" style="width:300px; height:300px; margin-top:10px;" id="workImg"/>
                        </div>
                    </div>    
                    <div class="modal-modify-form-row">
                        <div class="modal-modify-form-row-label">
                            <span class="red">*</span> 작품명
                        </div>
                        <div class="modal-modify-form-row-value">
                            <input class="modal-modify-form-input" type="text" id="workName" disabled />
                        </div>
                    </div>
                    <div class="modal-modify-form-row">
                        <div class="modal-modify-form-row-label">
                            <span class="red">*</span> 아티스트 이름
                        </div>
                        <div class="modal-modify-form-row-value">
                            <input class="modal-modify-form-input" type="text" id="artistName" disabled />
                        </div>
                    </div>
                    <div class="modal-modify-form-row">
                        <div class="modal-modify-form-row-label">
                            <span class="red">*</span> 작품유형
                        </div>
                        <div class="modal-modify-form-row-value">
                            <input class="modal-modify-form-input" type="text" id="workType" disabled />
                        </div>
                    </div>  
                    <div class="modal-modify-form-row">
                        <div class="modal-modify-form-row-label">
                            <span class="red">*</span> 작품기법
                        </div>
                        <div class="modal-modify-form-row-value">
                            <input class="modal-modify-form-input" type="text" id="workTech" disabled />
                        </div>
                    </div>  
                    <div class="modal-modify-form-row">
                        <div class="modal-modify-form-row-label">
                            <span class="red">*</span> 작품사이즈
                        </div>
                        <div class="modal-modify-form-row-value">
                            <input class="modal-modify-form-input" type="text" id="workSize" disabled />
                        </div>
                    </div>  
                    <div class="modal-modify-form-row">
                        <div class="modal-modify-form-row-label">
                            <span class="red">*</span> 작품가격
                        </div>
                        <div class="modal-modify-form-row-value">
                            <input class="modal-modify-form-input" type="text" id="workPrice" disabled />
                        </div>
                    </div>  
                    <div class="modal-modify-form-row">
                        <div class="modal-modify-form-row-label">
                            <span class="red">*</span> 작품소개
                        </div>
                        <div class="modal-modify-form-row-value">
                            <textarea class="modal-modify-form-input" style="width:300px; height: 120px; resize: none;" id="workIntro" disabled></textarea>
                        </div>
                    </div>                       
                    <div class="modal-modify-form-border">
                        <div style="text-align: center; margin-top:15px; margin-bottom: 15px;">
                            <button class="yesNo-btn" id="modify" style="width:120px;">수정 요청하기</button>                    
                            <button type="reset" class="yesNo-btn close-area1" id="refusemodal">닫기</button>      
                        </div>
                    </div>
                    <input type="hidden" id="workNo" name="workNo" />
            	</form>
            </article>  
        </div>
    </div>
    
    <div id="contents">
        <header class="account-header">
            <h2 class="account-header-title">작가 페이지</h2>
            <div class="account-header-description">고객님과 관련된 정보입니다.</div>
        </header>
        <section class="account-guide">
            <div class="account-guide-inner">
                <h3 class="account-guide-name">
                    ${artistName }님 반갑습니다.
                </h3>
                <a class="account-modify-btn1" href="${pageContext.request.contextPath}/artistdetail/${artistNo }" style="right:120px;">
                    <p>미리보기</p>
                </a>
                <a class="account-modify-btn" href="${pageContext.request.contextPath}/artistpage/artistModify" >
                    <p>정보 수정</p>
                </a>
            </div>
        </section>
        <nav class="manager-nav">
            <a class="manager-nav-btn current" href="${pageContext.request.contextPath}/artistpage/mywork">
                전체 작품
            </a>
            <a class="manager-nav-btn" style="background-color: black;color: white;" href="${pageContext.request.contextPath}/artistpage/myproduct">
                판매 작품
            </a>
            <a class="manager-nav-btn" href="${pageContext.request.contextPath}/artistpage/myfunding">
                나의 펀딩
            </a>
            <a class="manager-nav-btn" href="${pageContext.request.contextPath}/artistpage/myexhibition">
                나의 전시
            </a>
        </nav>
        
        <nav class="member-nav">
        	<a class="member-nav-btn" href="${pageContext.request.contextPath}/artistpage/myproduct">
                <b>판매 중인 작품</b>
            </a>
            <a class="member-nav-btn" href="${pageContext.request.contextPath}/artistpage/myproductsold">
                판매완료 작품
            </a>
            <a class="member-nav-btn" href="${pageContext.request.contextPath}/artistpage/myproductapply">
                신청내역
            </a>
        
            <a class="member-delete-btn" href="${pageContext.request.contextPath}/artistpage/applyproduct" style="width:120px;">
                작품판매 신청
            </a>
        </nav>
        
		<br><br><br><br>
		<section id="discover_contents">
        	<div id="discoverList" class="discoverList">
            <c:choose>
           	<c:when test="${worklist!=null }">
            	<c:forEach items="${worklist }" var="work">
            		<div class="discoverCard" >
            		<a class="discoverCard-a" onclick="showDetail('${work.workNo }')" style="cursor: pointer;">
            		 	<div class="discoverCard-imageWrap" style="padding-bottom: 50.0%; ">
            		 		<img class="discoverCard-image" src="/artistpage/workImg/${work.workImg }">
                   			<div class="card-imageMask"></div>
            		 	</div>
            		 	<div class="discoverCard-textBox">
            		 		<h3 class="discoverCard-title">${work.workName }</h3>
                       		<div class="discoverCard-artist">${work.artistName }</div>
                       		<div class="discoverCard-info">${work.workSize }</div>
       					 </div>
          			</a>
           			</div>
       			</c:forEach>
            </c:when>
            </c:choose>
        	</div>
        </section>
    </div>
    
    <%@include file ="../footer.jsp" %>
    
    
    
    <script>
    function showDetail(workNo){
		productdetail.style.display = "flex";
		$.ajax({
			type:"post",
			dataType:"text",
			async: false,
			url:"${pageContext.request.contextPath}/artistpage/productdetail",
			data:{"workNo":workNo},
			success: function(data, textStatus){ 
			 	var workData = JSON.parse(data);
			 	$('#workNo').attr("value", workData.workNo);
 			 	$('#workImg').attr("src", "/artistpage/workImg/"+workData.workImg);
 			 	$("#artistName").attr("value", workData.artistName);
 			 	$("#workName").attr("value", workData.workName);
 			 	$("#workType").attr("value", workData.workType);
 			 	$("#workTech").attr("value", workData.workTech);
 			 	$("#workSize").attr("value", workData.workSize);
 			 	$("#workIntro").html(workData.workIntro);    
 			 	$("#workPrice").attr("value", workData.workPrice);
			},
			error:function(data, textStatus){
				alert("실패");
			}
		});		
	}
    $(function(){
	    $(document).on('click', '.close-area1', function(e){
	    	productdetail.style.display = "none";
	    });
	});
    </script>
</body>
</html>