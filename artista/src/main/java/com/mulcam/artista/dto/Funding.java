package com.mulcam.artista.dto;

import java.sql.Date;
import java.sql.Timestamp;

import org.springframework.web.multipart.MultipartFile;

public class Funding {
		int fundingNo;
		int artistNo;
		int sponsorNo;
		boolean readSign;
		String artistName;
		String projTitle;
		String projIntro;
		String projBudget;
		String projArtist;
		int targetFunding;
		String fundingDate;
		String startDate;
		String endDate;
		String thumbImg;
		int applyStatus;
		String refusedContents;
		String getplace;
		String getplace2;
		Date applydate;
		int sumAmount;
		int fundingState;
		String id;
		int sponsorAmount;
		String email;
		MultipartFile thumbFile;
		String fundingMsg;
		Date sponDate;
		int fundingOriginNo;
		int succesFunding;
		public Funding() {}
		public Funding(int fundingNo, int artistNo, String artistName, String projTitle, String projIntro, String projBudget, String projArtist, 
				int targetFunding, String fundingDate, String startDate, String endDate, String thumbImg, String getplace, String getplace2) {
			this.fundingNo = fundingNo;
			this.artistNo = artistNo;
			this.artistName = artistName;
			this.projTitle = projTitle;
			this.projIntro = projIntro;
			this.projBudget = projBudget;
			this.projArtist = projArtist;
			this.targetFunding = targetFunding;
			this.fundingDate = fundingDate;
			this.startDate = startDate;
			this.endDate = endDate;
			this.thumbImg = thumbImg;
			this.getplace = getplace;
			this.getplace2 = getplace2;
		}
		public Funding(int fundingNo, int artistNo, String artistName, String projTitle, String projIntro, String projBudget, String projArtist, 
				int targetFunding, String fundingDate, String startDate, String endDate, String thumbImg, String getplace, String getplace2, int fundingOriginNo) {
			this.fundingNo = fundingNo;
			this.artistNo = artistNo;
			this.artistName = artistName;
			this.projTitle = projTitle;
			this.projIntro = projIntro;
			this.projBudget = projBudget;
			this.projArtist = projArtist;
			this.targetFunding = targetFunding;
			this.fundingDate = fundingDate;
			this.startDate = startDate;
			this.endDate = endDate;
			this.thumbImg = thumbImg;
			this.getplace = getplace;
			this.getplace2 = getplace2;
			this.fundingOriginNo = fundingOriginNo;
		}
		
		
	
		public int getSuccesFunding() {
			return succesFunding;
		}
		public void setSuccesFunding(int succesFunding) {
			this.succesFunding = succesFunding;
		}
		public String getStartDate() {
			return startDate;
		}

		public void setStartDate(String startDate) {
			this.startDate = startDate;
		}


		public String getArtistName() {
			return artistName;
		}

		public void setArtistName(String artistName) {
			this.artistName = artistName;
		}

		public String getEndDate() {
			return endDate;
		}

		public void setEndDate(String endDate) {
			this.endDate = endDate;
		}

		public int getFundingNo() {
			return fundingNo;
		}
		public void setFundingNo(int fundingNo) {
			this.fundingNo = fundingNo;
		}
		public int getArtistNo() {
			return artistNo;
		}
		public void setArtistNo(int artistNo) {
			this.artistNo = artistNo;
		}
		public String getProjTitle() {
			return projTitle;
		}
		public void setProjTitle(String projTitle) {
			this.projTitle = projTitle;
		}
		public String getProjIntro() {
			return projIntro;
		}
		public void setProjIntro(String projIntro) {
			this.projIntro = projIntro;
		}
		public String getProjBudget() {
			return projBudget;
		}
		public void setProjBudget(String projBudget) {
			this.projBudget = projBudget;
		}
		public String getProjArtist() {
			return projArtist;
		}
		public void setProjArtist(String projArtist) {
			this.projArtist = projArtist;
		}
		public int getTargetFunding() {
			return targetFunding;
		}
		public void setTargetFunding(int targetFunding) {
			this.targetFunding = targetFunding;
		}
		public String getFundingDate() {
			return fundingDate;
		}
		public void setFundingDate(String fundingDate) {
			this.fundingDate = fundingDate;
		}
		public String getThumbImg() {
			return thumbImg;
		}
		public void setThumbImg(String thumbImg) {
			this.thumbImg = thumbImg;
		}
		public int getApplyStatus() {
			return applyStatus;
		}
		public void setApplyStatus(int applyStatus) {
			this.applyStatus = applyStatus;
		}
		public String getRefusedContents() {
			return refusedContents;
		}
		public void setRefusedContents(String refusedContents) {
			this.refusedContents = refusedContents;
		}
		public String getGetplace() {
			return getplace;
		}
		public void setGetplace(String getplace) {
			this.getplace = getplace;
		}
		
		public String getGetplace2() {
			return getplace2;
		}
		public void setGetplace2(String getplace2) {
			this.getplace2 = getplace2;
		}
		public Date getApplydate() {
			return applydate;
		}
		public void setApplydate(Date applydate) {
			this.applydate = applydate;
		}
		public int getSumAmount() {
			return sumAmount;
		}
		public void setSumAmount(int sumAmount) {
			this.sumAmount = sumAmount;
		}
		public int getFundingState() {
			return fundingState;
		}
		public void setFundingState(int fundingState) {
			this.fundingState = fundingState;
		}
		public int getSponsorNo() {
			return sponsorNo;
		}
		public void setSponsorNo(int sponsorNo) {
			this.sponsorNo = sponsorNo;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public int getSponsorAmount() {
			return sponsorAmount;
		}
		public void setSponsorAmount(int sponsorAmount) {
			this.sponsorAmount = sponsorAmount;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}

		public MultipartFile getThumbFile() {
			return thumbFile;
		}

		public void setThumbFile(MultipartFile thumbFile) {
			this.thumbFile = thumbFile;
		}

		
		
		
		public Date getSponDate() {
			return sponDate;
		}
		public void setSponDate(Date sponDate) {
			this.sponDate = sponDate;
		}
		public String getFundingMsg() {
			return fundingMsg;
		}

		public void setFundingMsg(String fundingMsg) {
			this.fundingMsg = fundingMsg;
		}

		public boolean isReadSign() {
			return readSign;
		}

		public void setReadSign(boolean readSign) {
			this.readSign = readSign;
		}
		public int getFundingOriginNo() {
			return fundingOriginNo;
		}
		public void setFundingOriginNo(int fundingOriginNo) {
			this.fundingOriginNo = fundingOriginNo;
		}
		
		
		
}
