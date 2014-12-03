package com.plan.studio;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

@SuppressWarnings({ "serial", "unused" })
public class PlanStudiumServlet extends HttpServlet {
	com.google.appengine.api.datastore.DatastoreService dt= DatastoreServiceFactory.getDatastoreService();
	com.google.appengine.api.datastore.DatastoreService ob = DatastoreServiceFactory.getDatastoreService();
	
	JSONObject json = new JSONObject();
	
	JSONArray areas = new JSONArray();
	JSONArray horas = new JSONArray();
	JSONArray nombres = new JSONArray();
	JSONArray requisitos = new JSONArray();
	JSONArray creditos = new JSONArray();
	JSONArray semestres = new JSONArray();
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		
///////QUERY INFO PER  MATERIA
		Query q =new Query("Materia");
		PreparedQuery pq =  dt.prepare(q); 
		
		Query ts=new Query("Semestre");
		PreparedQuery tsm =  ob.prepare(ts); 
		
		Query ta=new Query("Areas");
		PreparedQuery tar =  ob.prepare(ta); 
		
		Query tm=new Query("Materia");
		PreparedQuery tmar =  ob.prepare(tm); 
		
///////QUERY TOTALES
		Query uno = new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 1);
		PreparedQuery one =  ob.prepare(uno);
		Query dos = new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 2);
		PreparedQuery two =  ob.prepare(dos);
		Query tres = new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 3);
		PreparedQuery three =  ob.prepare(tres);
		Query cuatro = new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 4);
		PreparedQuery four =  ob.prepare(cuatro);
		Query cinco= new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 5);
		PreparedQuery five =  ob.prepare(cinco);
		Query seis = new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 6);
		PreparedQuery six =  ob.prepare(seis);
		Query siete = new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 7);
		PreparedQuery seven =  ob.prepare(siete);
		Query ocho = new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 8);
		PreparedQuery eight =  ob.prepare(ocho);
		Query nueve = new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 9);
		PreparedQuery nine =  ob.prepare(nueve);
		Query diez = new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 10);
		PreparedQuery ten =  ob.prepare(diez);
		Query once= new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 10);
		PreparedQuery eleven =  ob.prepare(once);
		Query doce= new Query("Materia").addFilter("semestre",FilterOperator.EQUAL, 10);
		PreparedQuery twelve =  ob.prepare(doce);
		
		int first = ob.prepare(uno).countEntities(FetchOptions.Builder.withDefaults());
		int second = ob.prepare(dos).countEntities(FetchOptions.Builder.withDefaults());	
		int third= ob.prepare(tres).countEntities(FetchOptions.Builder.withDefaults());
		int fourth= ob.prepare(cuatro).countEntities(FetchOptions.Builder.withDefaults());
		int fifth= ob.prepare(cinco).countEntities(FetchOptions.Builder.withDefaults());
		int sixth= ob.prepare(seis).countEntities(FetchOptions.Builder.withDefaults());
		int seventh= ob.prepare(siete).countEntities(FetchOptions.Builder.withDefaults());
		int eighth= ob.prepare(ocho).countEntities(FetchOptions.Builder.withDefaults());
		int nineth= ob.prepare(nueve).countEntities(FetchOptions.Builder.withDefaults());
		int tenth= ob.prepare(diez).countEntities(FetchOptions.Builder.withDefaults());
		int eleventh= ob.prepare(once).countEntities(FetchOptions.Builder.withDefaults());
		int twelfth= ob.prepare(doce).countEntities(FetchOptions.Builder.withDefaults());
		
		///total  semesters
		for(Entity result: tsm.asIterable()){
			
			int totalSemestre = ob.prepare(ts).countEntities(FetchOptions.Builder.withDefaults());
			
			try {
			         json.put("Semestres",totalSemestre);
			         
	      } catch (JSONException e) {
	             e.printStackTrace();
	      }
		}
		////total areas
		for(Entity result: tar.asIterable()){
			
			int totalArea = ob.prepare(ta).countEntities(FetchOptions.Builder.withDefaults());
			
			try {
			      json.put("Areas",totalArea);
			         
	      } catch (JSONException e) {
	             e.printStackTrace();
	      }
		}
		////total signature
		for(Entity result: tmar.asIterable()){
			
			int totalMat = dt.prepare(tm).countEntities(FetchOptions.Builder.withDefaults());
			
			try {
		         json.put("Materias",totalMat);
			         
	      } catch (JSONException e) {
	             e.printStackTrace();
	      }
		}
		////signature by signature
		for(Entity result: pq.asIterable()){
			String Area51 = (String) result.getProperty("Area");
			Long Hours= (Long) result.getProperty("Horas");
			String Nomos = (String) result.getProperty("Nombre");
			Long PreLevel= (Long) result.getProperty("Pre-req");
			Long Credits= (Long) result.getProperty("creditos");
			Long Level= (Long) result.getProperty("semestre");
			try {
					areas.put(Area51);
		             horas.put(Hours);
		             nombres.put(Nomos);
		             requisitos.put(PreLevel);
		             creditos.put(Credits);
		             semestres.put(Level);

			          /////total for every semester
			            json.put("primero", first);
			             json.put("segundo", second);
			             json.put("tercero", third);
			             json.put("cuarto", fourth);
			             json.put("quinto", fifth);
			             json.put("sexto", sixth);
			             json.put("septimo", seventh);
			             json.put("octavo", eighth);
			             json.put("noveno", nineth);
			             json.put("decimo", tenth);
			             json.put("undecimo", eleventh);
			             json.put("duodecimo", twelfth);
             
			         ///OUT ARRAY FOR EVERY SIGNATURE
		             json.put("area",areas);
		             json.put("horas",horas);
		             json.put("nombre",nombres);
		             json.put("Prereq",requisitos);
		             json.put("creditos", creditos);
		             json.put("semestre",semestres);
	           
	      } catch (JSONException e) {
	             e.printStackTrace();
	      }
		}
	
 		resp.setContentType("text/plain");
 		System.out.println(json);
 		resp.getWriter().println(json);
 		
	}

}
