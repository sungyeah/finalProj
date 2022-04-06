package com.mulcam.artista.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.mulcam.artista.dto.Cart;
import com.mulcam.artista.dto.Member;
import com.mulcam.artista.dto.Order;

@Mapper
@Repository
public interface SubPageDAO {
	public void insertMember(Member mem)throws Exception;  //회원가입
	public Member queryMember(String id)throws Exception;  //아이디 조회
	public void changePw(Map map)throws Exception;         //비밀번호 수정
	public void updateMember(Member mem)throws Exception;  //회원정보 수정
	public String checkPw(String id)throws Exception;      //비밀번호 체크
	public List<Member> memberList(int startrow)throws Exception;      //회원목록 조회
	public void deleteId(String id)throws Exception;       //아이디 삭제
	public void insertMember2(Map map)throws Exception;    //회원가입
	
	public List<Cart> cartList(String id)throws Exception; //카트리스트 조회
	public Cart cartinfo(int cartNo)throws Exception; //카트번호로 카트조회
	public void deleteCart(int cartNo)throws Exception; //카트삭제
	
	public Integer MaxOrderNum() throws Exception; //주문번호 조회
	
	public void updateMemberType(Map map)throws Exception; //회원유형 변경
	public void insertPayment(Order order)throws Exception; //주문완료
	
	public int memberNum() throws Exception; // 회원 전체 수
	
	public int totalOrderNum() throws Exception;
	public List<Order> orderList(int startrow) throws Exception;
	public Order selectOrderByNo(int orderNo) throws Exception;
	
	

}
