<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/mypage.css">
<style>
.user-thumbnail-div {
    display: inline-block;
    width: fit-content;
    border-radius: 50%;
    background-origin: border-box;
    background-clip: content-box, border-box;
    border: 4px solid transparent;
}
.trackingBtn{
	border: 1px solid gray;
    /* margin-top: 5px; */
    width: 78px;
    height: 24px;
    border: 1px solid #e5e5e5;
}
.trackingBtn:hover{
	border: 1px solid #222;
}
</style>
</head>
<body>
 <%@include file ="../header.jsp" %>
    <div id="contents">
        <header class="account-header">
            <h2 class="account-header-title">마이 페이지</h2>
            <div class="account-header-description">고객님과 관련된 정보입니다.</div>
        </header>
        <c:choose>
        <c:when test="${membertype eq 'artist' }">
        	<div class="register2" style="display: flex;align-items: center; flex-direction: row-reverse;">
        	<img style="width: 24px;height: 24px;" src="images/rightarrow2.png">
            <a class="manager-nav-btn" href="${pageContext.request.contextPath}/artistpage/mywork">
                작가 페이지
            </a>
        </div>
        </c:when>
        <c:otherwise>
        	<div class="register2" style="display: flex;align-items: center; flex-direction: row-reverse;">
        	<img style="width: 24px;height: 24px;" src="images/rightarrow2.png">
            <a class="manager-nav-btn" href="${pageContext.request.contextPath}/mypage/apply">
                작가 등록
            </a>
        </div>
        </c:otherwise>
        </c:choose>
        
        
        
        
        <section class="account-guide">
            <div class="account-guide-inner">
                <h3 class="account-guide-name">
                    ${name}님 반갑습니다.
                </h3>
                <a class="account-modify-btn" href="mypage/mypagemodify" onclick="gaClickAccount('account_modify');">
                    <p>회원 정보</p>
                </a>
            </div>
        </section>
         <article class="member-body">
         </article>
        <article class="account-body">
            <section class="orders-in-progress">
                <h3>주문 내역</h3>
                <table class="account-table">
                    <thead>
                    <tr>
                        <th scope="col" class="time-code">주문번호</th>
                        <th scope="col" class="type">주문작품</th>
                        <th scope="col" class="artworks">주문일자</th>
                        <th scope="col" class="start-date">상품금액</th>
                        <th scope="col" class="status">현황</th>
                    </tr>
                    </thead>
                    <tbody>
                    	<c:choose> 
                    		<c:when test='${empty orderReports}'>
                         <tr>
                            <td class="empty" colspan="6">표시할 내역이 없습니다.</td>
                        </tr>
                        	</c:when>
                        	<c:otherwise> 
                        <c:forEach items="${orderReports }" var="orderReport">
                        <tr>
                        	<td class="time-code" style="font-weight:bold;"><a href="paymentinfo/${orderReport.order.orderNo }">${orderReport.order.orderNo }</a></td>
                        	<td class="artworks">
                        		 <c:forEach items="${orderReport.works }" var="work"> 
                        		<a href="${pageContext.request.contextPath}/storedetail/${work.workNo}"><b><${work.workName }></b></a> ${work.artistName }<br>
                        		${work.workTech }, ${work.workSize }<br>
                        		 </c:forEach> 
                        	</td>
                        	
                        	<td class="start-date">${orderReport.order.orderDate }</td>
                        	<td class="start-date" style="font-weight: bold;"><fmt:formatNumber value="${orderReport.order.orderCost }"/>원</td>
                        	<td class="status">${orderReport.order.orderStatus }<br>
                        		 <c:choose>
                        		<c:when test='${empty orderReport.order.trackingNo}'> 
                        		 </c:when>
                        		<c:otherwise>
                        		<form action="http://info.sweettracker.co.kr/tracking/4" method="post" style="margin-top:6px;">
                        			 <input type="hidden" class="form-control" id="t_key" name="t_key" value="bNly32iRmzS23mWeYOuvIw">
                        			 <input type="hidden" class="form-control" name="t_code" id="t_code" value="04">
                        			  <input type="hidden" class="form-control" name="t_invoice" id="t_invoice" value="${orderReport.order.trackingNo }"> 
                        			<button class="trackingBtn" >배송조회</button>
                        			<%-- <button type="button" style="border: 1px solid gray;"><a href="https://tracker.delivery/#/kr.cjlogistics/${orderReport.order.trackingNo }" target="_blank">배송조회</a></button> --%>
                        		 </form> 
                        		</c:otherwise>
                        		</c:choose> 
                        	</td>
                        </tr>
                        </c:forEach>
                         </c:otherwise>
                    	</c:choose>   
                    </tbody>
                </table>
                <!-- <div class="m-account-table">
                    
                        <div class="m-account-table-card empty">
                            표시할 내역이 없습니다.
                        </div>
                    
                </div> -->
            </section>
            <section class="orders-completed">
                <h3>펀딩 정보</h3>
                <table class="account-table">
                    <thead>
                    <tr>
                        <th scope="col" class="time-code">펀딩번호</th>
                        <th scope="col" class="type">펀딩제목</th>
                        <th scope="col" class="artworks">펀딩 기간</th>
                        <th scope="col" class="artworks">후원날짜</th>
                        <th scope="col" class="artworks">후원금액</th>
                        <th scope="col" class="status">현황</th>
                        <th scope="col" class="status">결과</th>
                    </tr>
                    </thead>
                    <tbody>
                       <c:choose> 
                          <c:when test='${empty fundingLists}'>
                         <tr>
                            <td class="empty" colspan="6">표시할 내역이 없습니다.</td>
                        </tr>
                           </c:when>
                           <c:otherwise>
                              <c:forEach items="${fundingLists }" var="fundingList" varStatus="status">
                                 <tr>
                                    <c:choose>
                                       <c:when test="${stateList[status.index] == 2}">
                                          <td class="time-code" style="font-weight:bold;"><a href="${pageContext.request.contextPath}/funding/fundingovdetail?fundingNo=${fundingList.fundingNo }">${fundingList.fundingNo }</a></td>
                                          <td class="artworks">${fundingList.projTitle }</td>
                                          <td class="start-date">${funDateList[status.index] }</td>
                                          <td class="start-date">${fundingList.sponDate }</td>
                                          <td class="start-date"><fmt:formatNumber value="${fundingList.sum }"/>원</td>
                                          <td class="start-date">진행</td>
                                          <c:choose>
                                          <c:when test="${successList[status.index] == 4 }">
                                             <td class="start-date">실패</td>
                                          </c:when>
                                          <c:when test="${successList[status.index] == 5 }">
                                             <td class="start-date">성공</td>
                                          </c:when>
                                          <c:when test="${successList[status.index] == 6 }">
                                             <td class="start-date">환불완료</td>
                                          </c:when>
                                          <c:otherwise>
                                             <td class="start-date">진행중</td>
                                          </c:otherwise>
                                          </c:choose>
                                       </c:when>
                                       <c:when test="${stateList[status.index] == 3 }">
                                          <td class="time-code" style="font-weight:bold;"><a href="${pageContext.request.contextPath}/funding/fundingtmdetail?fundingNo=${fundingList.fundingNo }">${fundingList.fundingNo }</a></td>
                                          <td class="artworks">${fundingList.projTitle }</td>
                                          <td class="start-date">${funDateList[status.index] }</td>
                                          <td class="start-date">${fundingList.sponDate }</td>
                                          <td class="start-date"><fmt:formatNumber value="${fundingList.sum }"/>원</td>
                                          <td class="start-date">종료</td>
                                          <c:choose>
                                          <c:when test="${successList[status.index] == 4 }">
                                             <td class="start-date">실패</td>
                                          </c:when>
                                          <c:when test="${successList[status.index] == 5 }">
                                             <td class="start-date">성공</td>
                                          </c:when>
                                          <c:when test="${successList[status.index] == 6 }">
                                             <td class="start-date">환불완료</td>
                                          </c:when>
                                          <c:otherwise>
                                             <td class="start-date">진행중</td>
                                          </c:otherwise>
                                          </c:choose>
                                       </c:when>
                                       <c:otherwise>
                                       </c:otherwise>
                                    </c:choose>
                                 </tr>
                              </c:forEach>
                           </c:otherwise>
                           </c:choose>
                    
                    </tbody>
                </table>
                <!-- <div class="m-account-table">
                    
                        <div class="m-account-table-card empty">
                            표시할 내역이 없습니다.
                        </div>
                    
                </div> -->
            </section>
            <section class="orders-completed">
                <h3>팔로우한 작가</h3>
                <div class="container1">
                <c:choose>
                	<c:when test="${empty followLists }">
                		<span style="height:145px;display: flex;align-items: center;justify-content: center;font-size: 14px;-webkit-box-sizing: border-box;border-right: 1px solid #eeeeee;border-bottom: 1px solid #eeeeee;">표시할 내역이 없습니다.</span>
                	</c:when>
                	<c:otherwise>
                		           <c:forEach items="${followLists }" var="followList">
                <div class="register">
                    <div
                        style="margin: 5px; padding: 5px; display: flex; align-items: flex-start; justify-content: space-between;">
                        <a href="${pageContext.request.contextPath}/artistdetail/${followList.artistNo}">
                        <span class="user-thumbnail-div slv" style="background-image: linear-gradient(#444444, #444444), linear-gradient(to right, #dddddd 0%, #999999 100%);cursor:pointer"><img class="profile" src='/mypage/artistprofile/${followList.artistImg }' onerror="this.src='/profile/profile.png'"></span>
                        </a>
                        <div style="width: 140px">
                            <a href="${pageContext.request.contextPath}/artistdetail/${followList.artistNo}"><span><input type="text" id="title" value='${followList.artistName }'
                                    style="width:130px;height: 30px; vertical-align: middle; font-weight: bold; font-size: 15px; border: none; background-color: white;text-overflow: ellipsis;margin-left:9px;margin-top:10px;cursor:pointer"
                                    disabled> </span></a>
                        </div>
                        <div style="display: inline-block;line-height: 30px;font-size: small;cursor:pointer;" onclick="unfollow('${followList.artistId}')">팔로우 취소</div>
                    </div>
                    <div
                        style="margin: 5px; margin-top: 30px; padding: 5px; vertical-align: middle;display: flex;justify-content: space-between;">
                        <div style="display: flex; margin-left: 20px;">
                            <span>
                                <div class="heart" style="height: 30px;margin-bottom:17px;margin-top: 1px;">작품수</div>
                            </span>
                            <span><input type="text" id="like" value='${followList.workcnt }'
                                    style="width: 30px; display: inline-block; vertical-align: middle; margin-bottom: 20px; font-size: 15px; font-weight: bold; border: none; background-color: white;margin-left: 5px;"
                                    disabled></span>
                        </div>
                        <div style="display: flex;margin-right: 20px;">
                            <span>
                                <div class="heart" style="height: 30px;margin-bottom:17px;margin-top: 1px;">팔로워</div>
                            </span>
                            <span><input type="text" id="like" value='${followList.followercnt }'
                                    style="width: 30px; display: inline-block; vertical-align: middle; margin-bottom: 20px; font-size: 15px; font-weight: bold; border: none; background-color: white;margin-left: 5px;"
                                    disabled></span>
                        </div>
                    </div>
                </div>
                </c:forEach> 
                	</c:otherwise>
                </c:choose>
            </div>
            </section>
        </article>
    </div>
     
<%@include file ="../footer.jsp" %>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script>
	function unfollow(follower){
		$.ajax({     
			type:"post",
			dataType:"text",
			async:false,
			url:"${pageContext.request.contextPath}/follow",
			data:{"follower":follower},
			success: function(data, textStatus){
				alert("팔로우 취소되었습니다.");
				location.reload();
			},
			error:function(data, textStatus){
				alert("실패");
			}
		}); 
	}
</script>
</body>
</html>