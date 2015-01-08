package com.plan.studio;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.plan.dao.Dao;
public class DeleteMateriaServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse resp)
			throws IOException {
		
		String codex = request.getParameter("codest");
		
		Dao.INSTANCE.deleteMateria(codex);
				
		}

}
