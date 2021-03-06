package com.mulcam.artista.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.mulcam.artista.dto.Artist;

@Mapper
@Repository
public interface ArtistDAO {
	public Integer maxArtistNo() throws Exception;
	public void insertArtist(Artist artist) throws Exception;
	public void updateArtist(Artist artist) throws Exception;
	public Integer selectArtistNo(String id) throws Exception;
	public String selectArtistName(String id) throws Exception;
	public int ArtistNum() throws Exception;
	public List<Artist> selectArtistList() throws Exception;
	public Artist selectArtistByNo(int artistNo) throws Exception;
	
	public List<Artist> nameartist() throws Exception;

	public Artist artistinfo(int artistNo)throws Exception;

	public Artist artistInfo(String id)throws Exception;
	
	public Artist artistMain() throws Exception;	// 메인화면 아티스트 정보
	
	public void deletebyNo(int artistNo) throws Exception;

}
