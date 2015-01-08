package com.plan.studio;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.Index;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.labs.repackaged.org.json.JSONArray;
import com.google.appengine.labs.repackaged.org.json.JSONException;
import com.google.appengine.labs.repackaged.org.json.JSONObject;
import com.google.apphosting.api.DatastorePb.DatastoreService;
import com.plan.modelo.Materia;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.labs.repackaged.org.json.JSONException;
import com.google.appengine.labs.repackaged.org.json.JSONObject;

@SuppressWarnings("serial")
public class FiltrosPerSemester extends HttpServlet {
	
	com.google.appengine.api.datastore.DatastoreService uno= DatastoreServiceFactory.getDatastoreService();

	
	JSONObject materium1 = new JSONObject();
	JSONObject mainMateria1 = new JSONObject();
	
	
	JSONObject totalSem = new JSONObject();
	JSONObject mainTotalSem = new JSONObject();

	JSONArray areas1 = new JSONArray();
	JSONArray idos1 = new JSONArray();
	JSONArray horas1 = new JSONArray();
	JSONArray nombres1 = new JSONArray();
	JSONArray requisitos1 = new JSONArray();
	JSONArray creditos1 = new JSONArray();
	JSONArray semestres1 = new JSONArray();
	JSONArray tepos1 = new JSONArray();
	
	JSONObject filtros = new JSONObject();

	JSONObject myIntArray = new JSONObject();

//////////////////////INFO SIGNATURE BY  SEMESTER 1///////////////////////////////////////////////////////////////////
public JSONObject getMateria1(int semestre) {
		///////QUERY INFO PER  MATERIA
	
		
		Query q1 =new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL,semestre);
		PreparedQuery pq1 =  uno.prepare(q1); 
		
		for(Entity result1: pq1.asIterable()){
		
		String Area1 = (String) result1.getProperty("Area");
		Long Ido1= (Long) result1.getProperty("Codigo");
		Long Hours1= (Long) result1.getProperty("Horas");
		String Nomos1 = (String) result1.getProperty("Nombre");
		Long PreLevel1= (Long) result1.getProperty("Pre-req");
		Long Credits1= (Long) result1.getProperty("Creditos");
		Long Level1= (Long) result1.getProperty("Semestre");
		String Tepes1=(String) result1.getProperty("Typo");
		
		try {
		
		areas1.put(Area1);
		idos1.put(Ido1);
		horas1.put(Hours1);
		nombres1.put(Nomos1);
		requisitos1.put(PreLevel1);
		creditos1.put(Credits1);
		semestres1.put(Level1);
		tepos1.put(Tepes1);
		
		///OUT ARRAY FOR EVERY SIGNATURE
		materium1.put("area",areas1);
		materium1.put("id",idos1);
		materium1.put("horas",horas1);
		materium1.put("nombre",nombres1);
		materium1.put("prereq",requisitos1);
		materium1.put("creditos", creditos1);
		materium1.put("semestre",semestres1);
		materium1.put("tipos",tepos1);
		
		} catch (JSONException e) {
		e.printStackTrace();
		}
		}
		return materium1;
}

public int getSemesterTotal() {
	Query tsem=new Query("Semestre");
	int totalSemestres = uno.prepare(tsem).countEntities(FetchOptions.Builder.withDefaults());
	return totalSemestres;
}



public void doGet(HttpServletRequest req, HttpServletResponse resp)
		throws IOException {
	
		int semestre =  getSemesterTotal();
		JSONObject myIntArray = new JSONObject();
		for (int i = 1;i <= semestre; i++){
			myIntArray  = getMateria1(i);
			mainMateria1 = myIntArray;
		}
		
		
		try {
			
			filtros.put("Sem",mainMateria1);
		
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
			resp.setContentType("text/plain");
			resp.getWriter().println(filtros);
	}
}