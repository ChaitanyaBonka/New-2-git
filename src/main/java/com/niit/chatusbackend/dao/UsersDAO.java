package com.niit.chatusbackend.dao;

import java.util.List;



import com.niit.chatusbackend.model.Users;
public interface UsersDAO {
	public boolean saveOrUpdate(Users users);

	public boolean delete(Users users);

	public List<Users> list();

	public List<Users> getuser(int id);

	public Users oneuser(int id);

	public Users profileof(String username);
	
	
	

}
