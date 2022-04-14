package com.mulcam.artista.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mulcam.artista.dao.ArtistApplyDAO;
import com.mulcam.artista.dao.ArtistWorldDAO;
import com.mulcam.artista.dto.ArtistApply;
import com.mulcam.artista.dto.ArtistWorld;
import com.mulcam.artista.dto.PageInfo;

@Service
public class ArtistApplyServiceImpl implements ArtistApplyService {
	@Autowired
	ArtistApplyDAO artistapplyDAO;
	
	@Autowired
	ArtistWorldDAO artistworldDAO;
	
	@Override
	public int getApplyArtistNo() throws Exception {
		Integer id = artistapplyDAO.maxApplyNo();
		if(id==null) id = 0;
		return id+1;
	}
	
	@Override
	public void insertArtistApply(ArtistApply artistApply) throws Exception {
		artistapplyDAO.insertArtistApply(artistApply);
	}
	
	@Override
	public void insertArtistModify(ArtistApply artistApply) throws Exception{
		artistapplyDAO.insertArtistModify(artistApply);
	}

	@Override
	public List<ArtistApply> getArtistApplyList(int page, PageInfo pageInfo) throws Exception {
		int listCount =  artistapplyDAO.ArtistApplyNum();
		int maxPage = (int)Math.ceil((double)listCount/9);
		int startPage=(((int) ((double)page/9+0.9))-1)*9+1;
		int endPage=startPage+9-1;
		
		if(endPage>maxPage) endPage=maxPage;
		pageInfo.setStartPage(startPage);
		pageInfo.setEndPage(endPage);
		pageInfo.setMaxPage(maxPage);
		pageInfo.setPage(page);
		pageInfo.setListCount(listCount);
		int startrow = (page-1)*9;
		return artistapplyDAO.selectArtistApplyList(startrow);
	}

	@Override
	public ArtistApply selectArtistApplyByNo(int applyNo) throws Exception {
		return artistapplyDAO.selectArtistApplyByNo(applyNo);
	}
	
	@Override
	public void deleteArtistApplyById(int applyNo) throws Exception {
		artistapplyDAO.deleteArtistApplyById(applyNo);
	}

	@Override
	public void refuseArtistApply(int applyNo, String refusedContents) throws Exception {
		Map<String,Object> map = new HashMap<>();
		map.put("applyNo", applyNo);
		map.put("refusedContents", refusedContents);
		artistapplyDAO.updateRefuseResults(map);
	}
	
	@Override
	public void deleteArtistWorld(String artistId) throws Exception{
		artistworldDAO.deleteArtistWorld(artistId);
	}
	
	@Override
	public ArtistWorld selectArtistWorldApplyByNo(String id) throws Exception {
		return artistworldDAO.artistWorld(id);
	}

	@Override
	public boolean checkArtistWorld(String id) throws Exception {
		return artistworldDAO.checkArtistWorld(id);
	}
	
}
