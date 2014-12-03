package com.plan.modelo;

import javax.jdo.PersistenceManager;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.*;


@PersistenceCapable
@javax.persistence.Entity
public class Materia {

	DatastoreService Mt = DatastoreServiceFactory.getDatastoreService();
	
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private long id;
	@Persistent
	private long semestre;
	@Persistent
	private long creditos;
	@Persistent
	private long horas;
	@Persistent
	private String Nombre;
	@Persistent
	private String area;
	@Persistent
	private long prerq;
	@Persistent
	private String tipos;
	
	public Materia(long id, long semestre, long creditos,long horas,String nomus, String area,long prerq,String tipos){
		
		this.setId(id);
		this.setSemestre(semestre);
		this.setCreditos(creditos);
		this.setHoras(horas);
		this.setNombre(nomus);
		this.setArea(area);
		this.setPrerq(prerq);
		this.setTipos(tipos);

		Entity signature = new Entity("Materia",id);
		signature.setProperty("Codigo", id);
		signature.setProperty("Semestre", semestre);
		signature.setProperty("Creditos", creditos);
		signature.setProperty("Horas", horas);
		signature.setProperty("Nombre", nomus);
		signature.setProperty("Area", area);
		signature.setProperty("Pre-req", prerq);
		signature.setProperty("Typo", tipos);
		Mt.put(signature);
		
		Key matKey = KeyFactory.createKey("signKey", signature.getKey().toString());
			
	}
	
	public String getNombre() {
		return Nombre;
	}


	public void setNombre(String name) {
		this.Nombre = name;
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
