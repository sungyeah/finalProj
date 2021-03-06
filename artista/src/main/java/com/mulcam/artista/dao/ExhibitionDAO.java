package com.mulcam.artista.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.mulcam.artista.dto.Exhibition;
import com.mulcam.artista.dto.ExhibitionApply;


@Mapper
@Repository
public interface ExhibitionDAO {
	public Integer maxExhibitionApplyId() throws Exception;
	public void insertExhibitApply(ExhibitionApply exhibitionapply) throws Exception;
	public ExhibitionApply queryExhibitApply(int applyNo) throws Exception;
	public List<ExhibitionApply> selectExhibitApplyList() throws Exception;
	public void deleteExhibitApply(int exhibitapplyNo) throws Exception;
	public void updateExhibitApplyRefuse(Map map) throws Exception;
	
	public Integer maxExhibitionId() throws Exception;
	public void insertExhibit(Exhibition exhibition) throws Exception;
	public void updateExibit(Exhibition exhibition) throws Exception;	
	public Exhibition queryExhibit(int exhibitNo) throws Exception;
	
	public List<Exhibition> selectExhibitList() throws Exception;
	public List<Exhibition> exhibitlist(String condition) throws Exception; //전시회 리스트
	
	public void deleteExhibit(int exhibitNo) throws Exception;
	


	public List<Exhibition> selectExhibitListByArtistNo(int artistNo) throws Exception;
	public List<ExhibitionApply> selectExhibitApplyListByArtistNo(int artistNo) throws Exception;

}
