package com.plan.modelo;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;



public class Materia {

	DatastoreService Mt = DatastoreServiceFactory.getDatastoreService();
	
	private long id;
	private long semestre;
	private long creditos;
	private long horas;
	private String Nombre;
	private String area;
	private long prerq;
	private String tipos;
	
	public Materia(long id, long semestre, long creditos,long horas,String Nombre, String area,long prerq,String tipos){
		
		this.setId(id);
		this.setSemestre(semestre);
		this.setCreditos(creditos);
		this.setHoras(horas);
		this.setNombre(Nombre);
		this.setArea(area);
		this.setPrerq(prerq);
		this.setTipos(tipos);

		Entity signature = new Entity("Materia",id);
		signature.setProperty("semestre", semestre);
		signature.setProperty("creditos", creditos);
		signature.setProperty("Horas", horas);
		signature.setProperty("Nombre", Nombre);
		signature.setProperty("Area", area);
		signature.setProperty("Pre-req", prerq);
		signature.setProperty("typo", tipos);
		Mt.put(signature);
			
	}
	
	

	public String getNombre() {
		return Nombre;
	}


	public void setNombre(String nombre) {
		Nombre = nombre;
	}



	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public long getSemestre() {
		return semestre;
	}


	public void setSemestre(long semestre) {
		this.semestre = semestre;
	}


	public long getCreditos() {
		return creditos;
	}


	public void setCreditos(long creditos) {
		this.creditos = creditos;
	}


	

	public long getHoras() {
		return horas;
	}


	public void setHoras(long horas) {
		this.horas = horas;
	}



	public String getArea() {
		return area;
	}



	public void setArea(String area) {
		this.area = area;
	}



	public long getPrerq() {
		return prerq;
	}



	public void setPrerq(long prerq) {
		this.prerq = prerq;
	}



	public String getTipos() {
		return tipos;
	}



	public void setTipos(String tipos) {
		this.tipos = tipos;
	}
	
}
