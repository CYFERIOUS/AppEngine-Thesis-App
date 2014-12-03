package com.plan.studio;

import java.io.IOException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.plan.modelo.Materia;

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
	
		Materia matters = new Materia(code ,semNo,visa,time,nomen,area,prerq,typos);		
	}
}
