<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="../css/fundingovdetail.css">
<script src="../js/fundingovdetail"></script>
<style>
</style>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>  
<script>
	$(function() {
		var raminAmount = 0;
		if('${funding.targetFunding}' > '${funding.sumAmount}'){
			raminAmount = '${funding.targetFunding}' - '${funding.sumAmount}';
			$("#remainAmount").text(raminAmount.toLocaleString());
			$("#remainName").text("남은 금액");
		} else {
			raminAmount = +'${funding.sumAmount}';
			$("#remainAmount").text(raminAmount.toLocaleString());
			$("#remainName").text("모인 금액");
		}
		var rate = '${funding.sumAmount}'/'${funding.targetFunding}'*100;
		$("#rate").text(rate);
		$("#pro").val(rate);
	})
	
	$(function(){
		var endDate = new Date('${funding.endDate}').getTime();
		var currDate = new Date().getTime();
		var remainTime = (endDate-currDate)/1000;
		var remain_day=Math.floor(remainTime/(60*60*24));
		$("#remain_day").text(remain_day);
		remainTime=remainTime%(60*60*24);
		var remain_hour=Math.floor(remainTime/(60*60));
		$("#remain_hour").text(remain_hour);
		remainTime=remainTime%(60*60);
		var remain_minute=Math.floor(remainTime/60);
		$("#remain_minute").text(remain_minute);
	})


</script>	
<body style="overflow-x: hidden">
	 <%@include file ="../header.jsp" %>
    <div id="contents">
        <header class="account-header">
            <h2 class="account-header-title" id="projTitle">${funding.projTitle }</h2>
        </header>
        <div class="image-box">
            <img class="image-thumb" src="/funding/thumbview/${funding.thumbImg}" />
        </div>
        <div class="fundingdetail">
            <div id="time">
			<jsp:useBean id="toDate" class="java.util.Date" />
			<span id="remain_day"></span><span style="font-size:15px;">일</span>
			<span id="remain_hour"></span><span style="font-size:15px;">시간</span>
			<span id="remain_minute"></span><span style="font-size:15px;">분 남음</span>
  
            </div><br>
            <div class="menu">
            <div id="amount"><fmt:formatNumber type="number" maxFractionDigits="3" value="${funding.targetFunding}" /> 목표 금액</div><br>
            <div id="amount"><span id="remainAmount"></span>
            <span id="remainName"></span></div><br>
            <div id="amount">${count} 서포터</div><br>
            <div id="promain">
                <span id="rate"></span><span>%</span><br>
                <progress id="pro" value="30" max="100" style="width: 68%; height:7px;"></progress>
            </div>
            </div>
            <br>
            <div class="amountdetail">
            <form action="fundingpay" name="fundingpay" id="fundingpay" method="post">
                <input class="account-modify-form-input" type="text" name="sponsorAmount" maxlength="20" id="sponsorAmount" placeholder="최소 금액">
                <input type="hidden" id="fundingNo" name="fundingNo" value="${funding.fundingNo }">
                <input class="Btn1" type="button" id="sponsor" onclick="CheckForm();" value="후원하기">
            </form>
            </div>
        </div>
    </div>
    <div class="projcontent">${funding.projIntro} ${funding.projBudget}</div>
    <div class="artistIntro">
        <h2 class="artist">작가 소개</h2>
        <div class="artistContent">${funding.projArtist}</div>
        <div class="artistContent">
            <button class="Btn2" onclick="location.href='${pageContext.request.contextPath}/artistdetail/${funding.artistNo }'">작가 페이지 이동</button>
        </div>
    </div>
    <div>
        <button class="Btn3" onclick="location.href='${pageContext.request.contextPath}/funding/fundingov'">목록</button>
    </div>
    <script type="text/javascript">
	    function CheckForm() {
	        var sponsorAmount = document.getElementById("sponsorAmount");
	        if (sponsorAmount.value == "") {
	            alert("값을 입력해 주세요.");
	            sponsorAmount.focus();
	        } else{
	        	document.fundingpay.action = "fundingpay";
	        	document.fundingpay.submit();
	        }   
	    }

    </script>



</body>

</html>