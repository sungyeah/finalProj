package com.mulcam.artista.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mulcam.artista.dao.ArtistDAO;
import com.mulcam.artista.dto.Artist;

@Service
public class ArtistServiceImpl implements ArtistService {
	@Autowired
	ArtistDAO artistDAO;

	@Override
	public void insertArtist(Artist artist) throws Exception {
		artistDAO.insertArtist(artist);
	}

	@Override
	public int getArtistMaxId() throws Exception {
		Integer id = artistDAO.maxArtistId();
		if(id==null) id=0;
		return id+1;
	}
	
	@Override
	public Integer getArtistNo(String id) throws Exception {
		return artistDAO.selectArtistNo(id);
	}	
	
}
