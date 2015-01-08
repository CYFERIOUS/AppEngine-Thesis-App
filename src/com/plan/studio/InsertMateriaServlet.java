package com.plan.studio;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;


import com.plan.dao.Dao;

@SuppressWarnings("serial")
public class InsertMateriaServlet extends HttpServlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		
		 
		//////variables de conexion
		String nomen = request.getParameter("nombre");
		String area = request.getParameter("area");
		String codex = request.getParameter("codest");
		String semestre = request.getParameter("semestre");
		String creditos = request.getParameter("creditos");
		String horas = request.getParameter("horas");
		String pre = request.getParameter("pre");
		String typos = request.getParameter("type");
		
		long code = Long.parseLong(codex);
		long semNo = Long.parseLong(semestre);
		long visa = Long.parseLong(creditos);
		long time = Long.parseLong(horas);
		long prerq= Long.parseLong(pre);
	
		
		Dao.INSTANCE.addMateria(code,semNo,visa,time,nomen,area,prerq,typos);
				
	}
}
