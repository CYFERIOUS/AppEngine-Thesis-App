package com.plan.studio;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
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

@SuppressWarnings({ "serial", "unused" })
public class PlanStudiumServlet extends HttpServlet {
	
	
	com.google.appengine.api.datastore.DatastoreService ob= DatastoreServiceFactory.getDatastoreService();
	com.google.appengine.api.datastore.DatastoreService dt= DatastoreServiceFactory.getDatastoreService();
	
	JSONObject materium = new JSONObject();
	JSONObject totalArea = new JSONObject();
	JSONObject totalMatter = new JSONObject();
	JSONObject totalSem = new JSONObject();
	JSONObject bySem = new JSONObject();
	JSONObject mainMateria = new JSONObject();

	
	JSONObject mainTotalArea = new JSONObject();
	JSONObject mainTotalMat = new JSONObject();
	JSONObject mainTotalSem = new JSONObject();
	JSONObject mainBySem = new JSONObject();
	
	JSONArray areas = new JSONArray();
	JSONArray idos = new JSONArray();
	JSONArray horas = new JSONArray();
	JSONArray nombres = new JSONArray();
	JSONArray requisitos = new JSONArray();
	JSONArray creditos = new JSONArray();
	JSONArray semestres = new JSONArray();
	JSONArray tepos = new JSONArray();
	
	JSONObject respuesta = new JSONObject();
	
//////////////////////INFO SIGNATURE PROOF///////////////////////////////////////////////////////////////////
	public JSONObject getMateria() {
	///////QUERY INFO PER  MATERIA
			Query q =new Query("Materia");
			PreparedQuery pq =  dt.prepare(q); 
			
			for(Entity resulta: pq.asIterable()){
				
				String Area51 = (String) resulta.getProperty("Area");
				Long Ido= (Long) resulta.getProperty("Codigo");
				Long Hours= (Long) resulta.getProperty("Horas");
				String Nomos = (String) resulta.getProperty("Nombre");
				Long PreLevel= (Long) resulta.getProperty("Pre-req");
				Long Credits= (Long) resulta.getProperty("Creditos");
				Long Level= (Long) resulta.getProperty("Semestre");
				String Tepes=(String) resulta.getProperty("Typo");
	
				try {
					
						areas.put(Area51);
						idos.put(Ido);
			             horas.put(Hours);
			             nombres.put(Nomos);
			             requisitos.put(PreLevel);
			             creditos.put(Credits);
			             semestres.put(Level);
			             tepos.put(Tepes);

				         ///OUT ARRAY FOR EVERY SIGNATURE
			             materium.put("area",areas);
			             materium.put("id",idos);
			             materium.put("horas",horas);
			             materium.put("nombre",nombres);
			             materium.put("prereq",requisitos);
			             materium.put("creditos", creditos);
			             materium.put("semestre",semestres);
			             materium.put("tipos",tepos);
		           
		      } catch (JSONException e) {
		             e.printStackTrace();
		      }
			}
        return materium;
 }
	

//////////////////////GET TOTAL BY EVERY AREA///////////////////////////////////////////////////////////////////
public JSONObject getAreaTotal() {
	
	Query ta=new Query("Areas");
	int areaTotal = ob.prepare(ta).countEntities(FetchOptions.Builder.withDefaults());

		try {
			
			 totalArea.put("Areas",areaTotal );
		         
      } catch (JSONException e) {
             e.printStackTrace();
      }
		return  totalArea;
}
//////////////////////GET TOTAL BY EVERY SIGNATURE///////////////////////////////////////////////////////////////////
public JSONObject getMateriaTotal() {
	Query tm=new Query("Materia");
	int totalMateria = ob.prepare(tm).countEntities(FetchOptions.Builder.withDefaults());

		try {
			
			totalMatter.put("Materias",totalMateria);
		         
      } catch (JSONException e) {
             e.printStackTrace();
      }
		return  totalMatter;
}
//////////////////////GET TOTAL SEMESTERS///////////////////////////////////////////////////////////////////
public JSONObject getSemesterTotal() {
	Query tsem=new Query("Semestre");
	int totalSemestres = ob.prepare(tsem).countEntities(FetchOptions.Builder.withDefaults());

	try {

		totalSem.put("Semestres",totalSemestres);

	} catch (JSONException e) {
		e.printStackTrace();
	}
	return  totalSem;
}

//////////////////////GET TOTAL BY EVERY SEMESTER///////////////////////////////////////////////////////////////////
public JSONObject getBySemesterTotal() {
	
	Query uno = new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 1);
	PreparedQuery one =  ob.prepare(uno);
	Query dos = new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 2);
	PreparedQuery two =  ob.prepare(dos);
	Query tres = new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 3);
	PreparedQuery three =  ob.prepare(tres);
	Query cuatro = new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 4);
	PreparedQuery four =  ob.prepare(cuatro);
	Query cinco= new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 5);
	PreparedQuery five =  ob.prepare(cinco);
	Query seis = new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 6);
	PreparedQuery six =  ob.prepare(seis);
	Query siete = new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 7);
	PreparedQuery seven =  ob.prepare(siete);
	Query ocho = new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 8);
	PreparedQuery eight =  ob.prepare(ocho);
	Query nueve = new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 9);
	PreparedQuery nine =  ob.prepare(nueve);
	Query diez = new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 10);
	PreparedQuery ten =  ob.prepare(diez);
	Query once= new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 11);
	PreparedQuery eleven =  ob.prepare(once);
	Query doce= new Query("Materia").addFilter("Semestre",Query.FilterOperator.EQUAL, 12);
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

try {

	bySem.put("primero", first);
	bySem.put("segundo", second);
	bySem.put("tercero", third);
	bySem.put("cuarto", fourth);
	bySem.put("quinto", fifth);
	bySem.put("sexto", sixth);
	bySem.put("septimo", seventh);
	bySem.put("octavo", eighth);
	bySem.put("noveno", nineth);
	bySem.put("decimo", tenth);
	bySem.put("undecimo", eleventh);
	bySem.put("duodecimo", twelfth);

	} catch (JSONException e) {
		e.printStackTrace();
	}
	return  bySem;
}

	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		
		
	
		mainMateria = getMateria();
		mainTotalArea = getAreaTotal();
		mainTotalMat = getMateriaTotal();
		mainBySem=getBySemesterTotal();
		mainTotalSem = getSemesterTotal();

		try {
			
			respuesta.put("object1",mainMateria);
			respuesta.put("object2",mainTotalArea);
			respuesta.put("object3",mainTotalMat);
			respuesta.put("object4",mainBySem);
			respuesta.put("object5",mainTotalSem);
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
 		resp.setContentType("text/plain");
 		resp.getWriter().println(respuesta);
 			
	}

}

