package com.mulcam.artista.service;

import java.util.List;

import com.mulcam.artista.dto.Artist;
import com.mulcam.artista.dto.ArtistWorld;

public interface ArtistWorldService {
	 int getArtistWorldId() throws Exception;
	 void insertArtistWorldFile(ArtistWorld worldImg) throws Exception;
	 ArtistWorld getArtistWorlds(String id) throws Exception;
	 public void artistWorldUpdate(ArtistWorld worldImg) throws Exception;
	 
	 public ArtistWorld worlds(String id) throws Exception;
}
